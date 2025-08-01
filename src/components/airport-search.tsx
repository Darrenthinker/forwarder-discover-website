"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import {
  searchAirports,
  findAirportByCode,
  findAirportsByCountry,
  getAllCountries,
  getAirportStatistics,
  getCountryAirportStats,
  getAirportCountByCountry,
  AIRPORT_COLORS,
  AIRPORT_TYPE_LABELS,
  type AirportSearchResult
} from '@/lib/airport-search';
import {
  getCountryFlag,
  isCountryCode,
  getCountryInfoByCode,
  searchCountries,
  getCountryStatistics,
  type CountryCodeInfo
} from '@/lib/country-codes';
// 🚀 新增：导入航空公司搜索功能
import {
  searchAirlines,
  findAirlinesByCountry,
  getAirlineCountByCountry,
  AIRLINE_COLORS,
  AIRLINE_TYPE_LABELS,
  ALLIANCE_COLORS,
  type Airline
} from '@/lib/airline-search';

interface AirportSearchProps {
  value?: string;
  onChange?: (airport: AirportSearchResult | null) => void;
  onCodeChange?: (code: string) => void;
  placeholder?: string;
  className?: string;
}

export function AirportSearch({
  value = '',
  onChange,
  onCodeChange,
  placeholder = "查询机场代码，城市，国家，航司，提单号...",
  className = ""
}: AirportSearchProps) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<AirportSearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [selectedAirport, setSelectedAirport] = useState<AirportSearchResult | null>(null);
  const [showStats, setShowStats] = useState(false);
  const [searchStats, setSearchStats] = useState<{
    isCountrySearch: boolean;
    countryName: string;
    totalCount: number;
    displayedCount: number;
  } | null>(null);
  const [displayedCount, setDisplayedCount] = useState(30); // 初始显示数量
  const [allResults, setAllResults] = useState<AirportSearchResult[]>([]); // 存储所有搜索结果

  // 🚀 新增：航空公司搜索相关状态
  const [activeTab, setActiveTab] = useState<'airports' | 'airlines'>('airports');
  const [airlineResults, setAirlineResults] = useState<Airline[]>([]);
  const [allAirlineResults, setAllAirlineResults] = useState<Airline[]>([]);
  const [displayedAirlineCount, setDisplayedAirlineCount] = useState(30);
  const [showAirlineTab, setShowAirlineTab] = useState(false); // 控制是否显示航空公司标签

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // 检测是否为国家搜索 - 使用完整国家数据库
  const checkIfCountrySearch = (query: string, results: AirportSearchResult[]): {
    isCountrySearch: boolean;
    countryName: string;
  } => {
    const queryLower = query.toLowerCase().trim();

    // 检查是否为国家代码 (如 CN, US, JP)
    if (isCountryCode(queryLower)) {
      const countryInfo = getCountryInfoByCode(queryLower);
      if (countryInfo) {
        return {
          isCountrySearch: true,
          countryName: countryInfo.chineseName
        };
      }
    }

    // 使用完整国家数据库搜索
    const countryResults = searchCountries(queryLower);
    if (countryResults.length > 0) {
      return {
        isCountrySearch: true,
        countryName: countryResults[0].chineseName
      };
    }

    // 检查结果中是否大部分来自同一个国家
    if (results.length >= 10) {
      const countryCount: { [key: string]: number } = {};
      results.forEach(result => {
        countryCount[result.country] = (countryCount[result.country] || 0) + 1;
      });

      const maxCountry = Object.entries(countryCount)
        .sort(([,a], [,b]) => b - a)[0];

      if (maxCountry && maxCountry[1] >= results.length * 0.7) { // 70%以上来自同一国家
        return {
          isCountrySearch: true,
          countryName: maxCountry[0]
        };
      }
    }

    return {
      isCountrySearch: false,
      countryName: ''
    };
  };

  // 同步外部value变化到内部query状态
  useEffect(() => {
    // 🔥 如果当前有选中的机场，不要被外部value覆盖
    if (selectedAirport) {
      console.log('🚫 已有选中机场，忽略外部value更新:', value);
      return;
    }
    
    // 🔥 防止精确匹配时的循环触发
    const trimmedValue = value.trim();
    if (trimmedValue.length === 3 && findAirportByCode(trimmedValue.toUpperCase())) {
      // 如果新值是精确匹配，直接设置但不触发搜索
      console.log('🔄 同步精确匹配值，不触发搜索:', trimmedValue);
      setQuery(value);
      return;
    }
    console.log('🔄 同步普通值:', value);
    setQuery(value);
  }, [value, selectedAirport]);

  // 搜索机场和航空公司
  useEffect(() => {
    const trimmedQuery = query.trim();
    
    // 🔥 最高优先级：空查询处理
    if (trimmedQuery.length === 0) {
      setResults([]);
      setAllResults([]);
      setAirlineResults([]);
      setAllAirlineResults([]);
      setIsOpen(false);
      setSelectedAirport(null);
      setSearchStats(null);
      setDisplayedCount(30);
      setDisplayedAirlineCount(30);
      setShowAirlineTab(false);
      setActiveTab('airports');
      return;
    }

    // 🔥 第二优先级：精确匹配检查 - 阻止所有后续逻辑
         if (trimmedQuery.length === 3) {
       console.log('🔧 测试3字符查询:', trimmedQuery.toUpperCase());
       const exactMatch = findAirportByCode(trimmedQuery.toUpperCase());
       console.log('🔧 findAirportByCode结果:', exactMatch);
       if (exactMatch) {
        console.log('🎯 JFK精确匹配检测到，阻止所有搜索');
        console.log('🔍 exactMatch详情:', exactMatch);
        // 精确匹配：强制清空所有状态，确保下拉框消失
        setSelectedAirport(exactMatch);
        setResults([]);
        setAllResults([]);
        setAirlineResults([]);
        setAllAirlineResults([]);
        setIsOpen(false);
        setShowAirlineTab(false);
        setActiveTab('airports');
        setSearchStats(null);
        setDisplayedCount(30);
        setDisplayedAirlineCount(30);
        setHighlightedIndex(-1);
        
        // 强制在下一个事件循环中再次确保状态
        setTimeout(() => {
          setResults([]);
          setAirlineResults([]);
          setIsOpen(false);
        }, 0);
        
        // 通知父组件 - 只通知onChange，不调用onCodeChange避免循环
        if (onChange) {
          onChange(exactMatch);
        }
        console.log('🎯 精确匹配完成，不调用onCodeChange避免循环');
        return; // 🚫 完全阻止后续逻辑
      }
    }

    // 🚀 常规搜索逻辑 - 执行到这里说明不是精确匹配
    console.log('📋 执行常规搜索逻辑，query=', trimmedQuery);
    if (trimmedQuery.length >= 1) {
      // 🚀 智能搜索：获取所有搜索结果，然后分页显示
      let searchResults = searchAirports(query, 500); // 获取更多结果
      
      // 🔥 确保国际机场绝对优先排序 - 增强版排序逻辑
      searchResults = searchResults.sort((a, b) => {
        // 1. 首先按机场类型排序（国际机场绝对优先）
        const typeA = getAirportType(a);
        const typeB = getAirportType(b);
        
        if (typeA !== typeB) {
          return typeA === 'international' ? -1 : 1;
        }
        
        // 2. 同类型机场内部按优先级排序
        const priorityA = a.priority || 50;
        const priorityB = b.priority || 50;
        if (priorityA !== priorityB) {
          return priorityB - priorityA; // 数字越大优先级越高
        }
        
        // 3. 最后按机场代码排序
        return a.code.localeCompare(b.code);
      });
      
             // 调试信息：显示搜索结果统计
       if (query.length >= 2) {
         console.log(`🔍 搜索"${query}": 共${searchResults.length}个机场，国际${searchResults.filter(a => getAirportType(a) === 'international').length}个，前10个:`, 
           searchResults.slice(0, 10).map(a => `${a.code}(${getAirportType(a)})`));
       }
      
      setAllResults(searchResults); // 保存所有结果
      setResults(searchResults.slice(0, 30)); // 只显示前N个，初始30个

      // 🚀 新增：搜索航空公司
      const airlineSearchResults = searchAirlines(query);
      setAllAirlineResults(airlineSearchResults);
      setAirlineResults(airlineSearchResults.slice(0, 30));

      // 🚀 修复：当有机场结果或航空公司结果时都显示下拉框
      setIsOpen(searchResults.length > 0 || airlineSearchResults.length > 0);
      setHighlightedIndex(-1);

      // 检测是否为国家搜索 - 使用增强的检测功能
      const isCountrySearch = checkIfCountrySearch(query, searchResults);

      // 🚀 新增：判断是否显示航空公司标签（国家搜索或有航司搜索结果时显示）
      const shouldShowAirlineTab = isCountrySearch.isCountrySearch || airlineSearchResults.length > 0;
      setShowAirlineTab(shouldShowAirlineTab);

      // 🚀 智能标签页切换：如果只有航司搜索结果且没有机场结果，自动切换到航司标签页
      if (airlineSearchResults.length > 0 && searchResults.length === 0) {
        setActiveTab('airlines');
      } else if (searchResults.length > 0) {
        setActiveTab('airports');
      }

      // 🌍 所有国家机场统一处理：提供更好的浏览体验
      let initialDisplayCount = 30; // 所有国家默认显示30个
      if (isCountrySearch.isCountrySearch) {
        // 如果是大型机场国家，初始显示更多
        if (searchResults.length > 50) {
          initialDisplayCount = 50; // 机场数量较多的国家显示50个
        } else if (searchResults.length > 30) {
          initialDisplayCount = 40; // 中等数量显示40个
        }
      }

      // 重置分页计数器（根据国家调整）
      setDisplayedCount(initialDisplayCount);
      setDisplayedAirlineCount(30); // 航空公司默认30个

      if (isCountrySearch.isCountrySearch) {
        const stats = getCountryAirportStats(isCountrySearch.countryName);
        setSearchStats({
          isCountrySearch: true,
          countryName: isCountrySearch.countryName,
          totalCount: stats.total,
          displayedCount: Math.min(initialDisplayCount, searchResults.length)
        });
      } else {
        setSearchStats(null);
      }

      // 如果没有精确匹配，清除选择的机场
      if (query.trim().length !== 3) {
        setSelectedAirport(null);
      }
    }
  }, [query, onChange]); // 只依赖 query 和 onChange

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);

    // 实时反馈给父组件
    if (onCodeChange) {
      onCodeChange(newValue);
    }
  };

  // 显示更多结果
  const showMoreResults = () => {
    if (activeTab === 'airports') {
      let increment = 30; // 默认增加30个
      if (searchStats && searchStats.isCountrySearch) {
        const remaining = allResults.length - results.length;
        if (remaining > 100) {
          increment = 50;
        } else if (remaining > 50) {
          increment = 40;
        } else if (remaining > 20) {
          increment = 30;
        } else {
          increment = remaining;
        }
      }
      const newDisplayedCount = results.length + increment;
      const newResults = allResults.slice(0, newDisplayedCount);
      
      console.log(`📈 显示更多机场: ${results.length} → ${newResults.length} (总共${allResults.length}个)`);
      
      setResults(newResults);
      setDisplayedCount(newDisplayedCount);
      
      if (searchStats) {
        setSearchStats({
          ...searchStats,
          displayedCount: Math.min(newDisplayedCount, allResults.length)
        });
      }
    } else {
      // 航空公司分页
      const increment = 20;
      const newDisplayedCount = airlineResults.length + increment;
      const newAirlineResults = allAirlineResults.slice(0, newDisplayedCount);
      
      console.log(`📈 显示更多航司: ${airlineResults.length} → ${newAirlineResults.length} (总共${allAirlineResults.length}个)`);
      
      setAirlineResults(newAirlineResults);
      setDisplayedAirlineCount(newDisplayedCount);
    }
  };

  // 智能判断机场类型的函数
  const getAirportType = (airport: AirportSearchResult): 'international' | 'domestic' => {
    // 如果已经明确定义为国际机场
    if (airport.type === 'international') {
      return 'international';
    }

    // 地区机场归类为国内机场
    if (airport.type === 'regional' || airport.type === 'domestic') {
      return 'domestic';
    }

    // 对于未分类机场，进行智能判断
    if (!airport.type) {
      const chineseName = airport.chinese.toLowerCase();
      const englishName = airport.english.toLowerCase();
      const code = airport.code;

      // 1. 根据中文名称判断（包含"国际"字样）
      if (chineseName.includes('国际')) {
        return 'international';
      }

      // 2. 根据英文名称判断
      if (englishName.includes('international') || englishName.includes('intl')) {
        return 'international';
      }

      // 3. 根据知名国际机场代码判断
      const majorInternationalCodes = [
        // 中国国际机场
        'PEK', 'PVG', 'CAN', 'CTU', 'NKG', 'TSN', 'HAK', 'TAO', 'CGO', 'URC',
        'PKX', 'SZX', 'XMN', 'WUH', 'HGH', 'DLC', 'SHE', 'HRB', 'CKG', 'KMG',
        'BJS', // 北京城市代码，代表北京的国际机场
        // 美国国际机场
        'JFK', 'LAX', 'ORD', 'ATL', 'DFW', 'DEN', 'SFO', 'SEA', 'LAS', 'MCO',
        // 欧洲国际机场
        'LHR', 'CDG', 'FRA', 'AMS', 'MAD', 'FCO', 'MUC', 'ZUR', 'VIE', 'CPH', 'PRN',
        // 亚洲国际机场
        'NRT', 'ICN', 'BKK', 'SIN', 'KUL', 'CGK', 'MNL', 'HKG', 'TPE', 'FNJ',
        // 大洋洲国际机场
        'SYD', 'MEL', 'AKL', 'PER', 'BNE', 'ADL',
        // 中东国际机场
        'DXB', 'DOH', 'AUH', 'RUH', 'JED', 'KWI',
        // 非洲国际机场
        'CAI', 'JNB', 'CPT', 'LOS', 'ACC', 'NBO',
        // 南美国际机场
        'GRU', 'EZE', 'SCL', 'BOG', 'LIM', 'CCS'
      ];

      if (majorInternationalCodes.includes(code)) {
        return 'international';
      }

      // 4. 根据主要城市判断（这些城市的主要机场通常是国际机场）
      const majorCities = ['北京', '上海', '广州', '深圳', '成都', '重庆', '西安', '昆明', '杭州', '南京', '青岛', '厦门', '天津', '武汉', '长沙', '郑州', '大连', '沈阳', '哈尔滨', '乌鲁木齐'];
      const cityMatch = majorCities.some(city => chineseName.includes(city));
      if (cityMatch) {
        return 'international';
      }
    }

    // 默认归类为国内机场
    return 'domestic';
  };

  // 选择机场
  const selectAirport = (airport: AirportSearchResult) => {
    setQuery(airport.code);
    setSelectedAirport(airport);
    setIsOpen(false);
    setHighlightedIndex(-1);

    if (onChange) {
      onChange(airport);
    }
    if (onCodeChange) {
      onCodeChange(airport.code);
    }
  };

  // 🚀 新增：选择航空公司 - 和机场选择保持一致的行为
  const selectAirline = (airline: Airline) => {
    setQuery(airline.code);
    setSelectedAirport(null); // 清除之前选中的机场
    setIsOpen(false);
    setHighlightedIndex(-1);

    // 触发onChange回调，让父组件知道选择了航空公司
    if (onChange) {
      // 创建一个类似机场的结构传递给父组件
      const countryInfo = getCountryInfoByCode(airline.countryCode || '');
      const countryWithCode = countryInfo
        ? `${countryInfo.chineseName} (${countryInfo.code})`
        : airline.country;

      const airlineAsAirport: AirportSearchResult = {
        code: airline.code,
        chinese: airline.name.chinese,
        english: airline.name.english,
        country: airline.country,
        continent: '', // 航空公司没有洲际信息
        type: 'domestic', // 使用有效的机场类型
        customs: false, // 航空公司无海关概念
        priority: 0, // 默认优先级
        countryWithCode: countryWithCode,
        displayColor: '#6b7280' // 默认为灰色
      };
      onChange(airlineAsAirport);
    }

    if (onCodeChange) {
      onCodeChange(airline.code);
    }
  };

  // 键盘导航
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    const currentResults = activeTab === 'airports' ? results : airlineResults;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev: number) =>
          prev < currentResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev: number) => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < currentResults.length) {
          if (activeTab === 'airports') {
            selectAirport(results[highlightedIndex]);
          } else {
            selectAirline(airlineResults[highlightedIndex]);
          }
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  // 统计信息 - 使用完整的统计数据
  const stats = getAirportStatistics();
  const countryStats = getCountryStatistics();

  return (
    <div className={`relative ${className}`}>
      {/* 输入框 */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            // 🔥 修复：如果是3字符精确匹配，不显示下拉框
            const trimmedQuery = query.trim();
            const isExactMatch = trimmedQuery.length === 3 && findAirportByCode(trimmedQuery.toUpperCase());
            
            if (isExactMatch) {
              // 精确匹配时不显示下拉框
              setIsOpen(false);
            } else if (results.length > 0 || airlineResults.length > 0) {
              setIsOpen(true);
            } else if (query.trim().length === 0) {
              setShowStats(true);
            }
          }}
          onBlur={(e) => {
            // 检查失焦的目标是否在下拉框内
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (resultsRef.current && relatedTarget && resultsRef.current.contains(relatedTarget)) {
              return; // 如果焦点移动到下拉框内，不关闭
            }
            // 延迟关闭，允许点击选项
            setTimeout(() => {
              setIsOpen(false);
              setShowStats(false);
            }, 200);
          }}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        />
      </div>

      {/* 搜索结果下拉框 - 优化设计，添加标签页 */}
      {/* 🔥 最终修复：3字符精确匹配绝对不显示下拉框 */}
      {(() => {
        const trimmedQuery = query.trim();
        const isExactMatch = trimmedQuery.length === 3 && findAirportByCode(trimmedQuery.toUpperCase());
        const shouldShow = !isExactMatch && isOpen && (results.length > 0 || airlineResults.length > 0);
        
        console.log('🔥 最终渲染检查:', {
          query: trimmedQuery,
          isExactMatch: !!isExactMatch,
          isOpen,
          resultsLength: results.length,
          shouldShow
        });
        
        return shouldShow;
      })() && (
        <div
          ref={resultsRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto"
          onMouseDown={(e) => e.preventDefault()} // 防止点击下拉框时输入框失焦
        >
          {/* 🚀 新增：标签页切换（只在国家搜索时显示） */}
          {showAirlineTab && (
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'airports'
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                onMouseDown={(e: React.MouseEvent) => e.preventDefault()} // 防止失焦
                onClick={() => {
                  setActiveTab('airports');
                  setHighlightedIndex(-1);
                }}
              >
                机场
              </button>
              <button
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'airlines'
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                onMouseDown={(e: React.MouseEvent) => e.preventDefault()} // 防止失焦
                onClick={() => {
                  setActiveTab('airlines');
                  setHighlightedIndex(-1);
                }}
              >
                航司
              </button>
            </div>
          )}

          {/* 统计信息行 */}
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {activeTab === 'airports' ? (
                  searchStats && searchStats.isCountrySearch ? (
                    <span className="text-blue-700 font-medium">
                      {searchStats.countryName} • 已显示 {searchStats.displayedCount}/{searchStats.totalCount} 个机场
                    </span>
                  ) : (
                    <span className="text-blue-700 font-medium">
                      已显示 {results.length}/{allResults.length} 个机场
                    </span>
                  )
                ) : (
                  <span className="text-blue-700">
                    {searchStats?.countryName ? `${searchStats.countryName} • ` : ''}已显示 {airlineResults.length}/{allAirlineResults.length} 家航司
                  </span>
                )}
              </div>

              {/* 图例说明 */}
              {activeTab === 'airports' ? (
                <div className="flex items-center space-x-3 text-blue-600 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>国际机场</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>国内机场</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4 text-blue-600 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>IATA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>非IATA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>IATA CODE</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>Prefix 提单号</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>枢纽机场</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 内容区域 */}
          {activeTab === 'airports' ? (
            <>
              {/* 机场列表 */}
              {results.map((airport: AirportSearchResult, index: number) => (
                <div
                  key={airport.code}
                  className={`px-4 py-2.5 cursor-pointer border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                    highlightedIndex === index ? 'bg-blue-50' : ''
                  }`}
                  onMouseDown={(e: React.MouseEvent) => e.preventDefault()} // 防止失焦
                  onClick={() => selectAirport(airport)}
                >
                  <div className="flex items-center space-x-2 min-w-0">
                    {/* 机场代码 + 类型标识 */}
                    <div className="flex items-center space-x-1.5 flex-shrink-0">
                      <span className={`font-mono font-bold text-sm min-w-[36px] ${
                        airport.code === 'NO-AIRPORT' ? 'text-red-600' : 'text-blue-600'
                      }`}>
                        {airport.code === 'NO-AIRPORT' ? '🚫' : airport.code}
                      </span>
                      {/* 机场类型标识 - 简化设计 */}
                      {airport.code === 'NO-AIRPORT' ? (
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" title="无国际机场"></div>
                      ) : getAirportType(airport) === 'international' ? (
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" title="国际机场"></div>
                      ) : (
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" title="国内机场"></div>
                      )}
                    </div>

                    {/* 中文名称 - 紧凑显示 */}
                    <span className="text-sm font-medium text-gray-900 flex-shrink-0 max-w-[120px] truncate">
                      {airport.chinese}
                    </span>

                    {/* 英文名称 - 限制宽度并截断 */}
                    <span className={`text-sm flex-1 min-w-0 truncate ${
                      airport.code === 'NO-AIRPORT' ? 'text-orange-600 font-medium' : 'text-gray-500'
                    }`} title={airport.english}>
                      {airport.english}
                    </span>

                    {/* 国家信息 - 右侧对齐 */}
                    <div className="text-xs text-gray-400 flex-shrink-0 flex items-center space-x-1">
                      <span>{airport.countryWithCode || airport.country}</span>
                      <span>·</span>
                      <span>{airport.continent}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* 显示更多按钮 */}
              {allResults.length > results.length && (
                <div className="px-4 py-3 bg-gray-50 border-t space-y-2">
                  <button
                    onMouseDown={(e: React.MouseEvent) => e.preventDefault()} // 防止失焦
                    onClick={(e) => {
                      e.preventDefault();
                      showMoreResults();
                    }}
                    className="w-full px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 rounded-lg transition-all duration-200 text-sm font-medium border border-blue-200 hover:border-blue-300 active:scale-95"
                  >
                    {(() => {
                      // 智能计算每次增加的数量
                      let increment = 30;
                      const remaining = allResults.length - results.length;
                      if (searchStats && searchStats.isCountrySearch) {
                        if (remaining > 100) {
                          increment = 50; // 剩余较多时每次增加50个
                        } else if (remaining > 50) {
                          increment = 40; // 中等剩余量时增加40个
                        } else if (remaining > 20) {
                          increment = 30; // 少量剩余时增加30个
                        } else {
                          increment = remaining; // 剩余很少时显示全部
                        }
                      }
                      const willShow = Math.min(increment, remaining);
                      return `🔄 显示更多机场 (+${willShow}个，剩余${remaining}个)`;
                    })()}
                  </button>

                  {/* 显示全部按钮 - 当剩余机场较多时显示 */}
                  {allResults.length - results.length > 15 && (
                    <button
                      onMouseDown={(e: React.MouseEvent) => e.preventDefault()} // 防止失焦
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`📋 显示全部机场: ${allResults.length}个`);
                        setDisplayedCount(allResults.length);
                        setResults(allResults);
                        if (searchStats) {
                          setSearchStats({
                            ...searchStats,
                            displayedCount: allResults.length
                          });
                        }
                      }}
                      className="w-full px-4 py-1.5 text-blue-600 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 rounded-lg transition-all duration-200 text-xs border border-blue-200 hover:border-blue-300 active:scale-95"
                    >
                      📋 显示全部 {allResults.length} 个机场
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              {/* 🚀 航空公司列表 - 货代专业版 */}
              {airlineResults.map((airline: Airline, index: number) => (
                <div
                  key={airline.code + '-' + index}
                  className={`px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                    highlightedIndex === index ? 'bg-blue-50' : ''
                  }`}
                  onMouseDown={(e: React.MouseEvent) => e.preventDefault()} // 防止失焦
                  onClick={() => selectAirline(airline)}
                >
                  <div className="flex items-center space-x-2">
                    {/* IATA CODE + Prefix + 航司名称 - 重新布局 */}
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      {/* IATA CODE */}
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 ${airline.isIata ? 'bg-blue-500' : 'bg-gray-400'} rounded-full`}></div>
                        <span className="font-mono font-bold text-blue-600 text-sm">
                          {airline.code}
                        </span>
                      </div>
                      {/* Prefix 提单号 - 居中 */}
                      <div className="text-center min-w-[50px]">
                        <span className="font-mono font-semibold text-orange-600 text-sm">
                          {airline.prefix || '---'}
                        </span>
                      </div>
                      {/* 中英文名称 + 枢纽 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 overflow-hidden">
                          <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
                            {airline.name.chinese}
                          </span>
                          <span className="text-sm text-gray-500 whitespace-nowrap">
                            {airline.name.english}
                          </span>
                          {/* 枢纽信息移到名称后面 */}
                          {airline.hub && airline.hub.length > 0 && (
                            <span className="text-xs text-gray-400 whitespace-nowrap">
                              枢纽: <span className="font-mono">{airline.hub.join(', ')}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* 国家信息 */}
                    <div className="text-xs text-gray-400 text-right w-[80px]">
                      {airline.country}
                    </div>
                  </div>
                </div>
              ))}

              {/* 航空公司显示更多按钮 */}
              {allAirlineResults.length > airlineResults.length && (
                <div className="px-4 py-3 bg-gray-50 border-t">
                  <button
                    onMouseDown={(e: React.MouseEvent) => e.preventDefault()} // 防止失焦
                    onClick={showMoreResults}
                    className="w-full px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium"
                  >
                    显示更多航空公司 (+{Math.min(20, allAirlineResults.length - airlineResults.length)}个，剩余{allAirlineResults.length - airlineResults.length}个)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* 选中的机场信息显示 - 简化设计 */}
      {selectedAirport && !isOpen && (
        <div className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="px-4 py-2.5 border-b border-gray-100">
            <div className="flex items-center space-x-2 min-w-0">
              {/* 机场代码 + 类型标识 */}
              <div className="flex items-center space-x-1.5 flex-shrink-0">
                <span className="font-mono font-bold text-sm text-blue-600 min-w-[36px]">
                  {selectedAirport.code}
                </span>
                {/* 机场类型标识 - 选中状态 */}
                {getAirportType(selectedAirport) === 'international' ? (
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" title="国际机场"></div>
                ) : (
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" title="国内机场"></div>
                )}
              </div>

              {/* 中文名称 - 紧凑显示 */}
              <span className="text-sm font-medium text-gray-900 flex-shrink-0 max-w-[120px] truncate">
                {selectedAirport.chinese}
              </span>

              {/* 英文名称 - 限制宽度并截断 */}
              <span className="text-sm text-gray-500 flex-1 min-w-0 truncate" title={selectedAirport.english}>
                {selectedAirport.english}
              </span>

              {/* 国家信息 - 右侧对齐 */}
              <div className="text-xs text-gray-400 flex-shrink-0 flex items-center space-x-1">
                <span>{selectedAirport.countryWithCode || selectedAirport.country}</span>
                <span>·</span>
                <span>{selectedAirport.continent}</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-2 bg-blue-50 text-xs text-blue-600">
            ✓ 已自动识别机场信息
          </div>
        </div>
      )}

      {/* 统计信息提示 - 简化美观设计 */}
      {showStats && query.trim().length === 0 && (
        <div className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          {/* 标题行 - 备注国家地区数量和IATA航司 */}
          <div className="text-center mb-2">
            <span className="text-sm font-semibold text-gray-900">全球机场数据库</span>
            <span className="text-xs text-gray-600 ml-1">国家地区</span>
            <span className="text-red-600 font-semibold text-xs ml-1">{countryStats.total}</span>
            <span className="text-xs text-gray-600 ml-2">IATA航司</span>
            <span className="text-orange-600 font-semibold text-xs ml-1">360</span>
          </div>

          {/* 核心统计 - 一行三个（国际机场、机场总数、南极洲） */}
          <div className="grid grid-cols-3 gap-1 mb-2">
            <div className="bg-gray-50 rounded-lg px-1.5 py-0.5 flex justify-between items-center">
              <span className="text-gray-700 font-medium text-xs">国际机场</span>
              <span className="text-emerald-600 font-semibold text-xs">{stats.international}</span>
            </div>
            <div className="bg-gray-50 rounded-lg px-1.5 py-0.5 flex justify-between items-center">
              <span className="text-gray-700 font-medium text-xs">机场总数</span>
              <span className="text-blue-600 font-semibold text-xs">{stats.total}</span>
            </div>
            <div className="bg-gray-50 rounded-lg px-1.5 py-0.5 flex justify-between items-center">
              <span className="text-gray-700 font-medium text-xs">南极洲</span>
              <div className="flex items-center gap-0.5">
                <span className="text-emerald-600 font-semibold text-xs">{stats.internationalByContinent['南极洲'] || 0}</span>
                <span className="text-gray-400 text-xs">/</span>
                <span className="text-blue-600 font-semibold text-xs">{stats.byContinent['南极洲'] || 0}</span>
              </div>
            </div>
          </div>

          {/* 洲际分布 - 剩余6个洲的布局 */}
          <div className="space-y-1">
            {/* 第一行：北美、亚洲、欧洲 */}
            <div className="grid grid-cols-3 gap-1">
              {(() => {
                const firstRowContinents = ['北美', '亚洲', '欧洲'];
                return firstRowContinents.map(continent => {
                  const totalCount = stats.byContinent[continent] || 0;
                  const internationalCount = stats.internationalByContinent[continent] || 0;
                  return (
                    <div key={continent} className="bg-gray-50 rounded-lg px-1.5 py-0.5 flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-xs">{continent}</span>
                      <div className="flex items-center gap-0.5">
                        <span className="text-emerald-600 font-semibold text-xs">{internationalCount}</span>
                        <span className="text-gray-400 text-xs">/</span>
                        <span className="text-blue-600 font-semibold text-xs">{totalCount}</span>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>

            {/* 第二行：南美、非洲、大洋洲 */}
            <div className="grid grid-cols-3 gap-1">
              {(() => {
                const secondRowContinents = ['南美', '非洲', '大洋洲'];
                return secondRowContinents.map(continent => {
                  const totalCount = stats.byContinent[continent] || 0;
                  const internationalCount = stats.internationalByContinent[continent] || 0;
                  return (
                    <div key={continent} className="bg-gray-50 rounded-lg px-1.5 py-0.5 flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-xs">{continent}</span>
                      <div className="flex items-center gap-0.5">
                        <span className="text-emerald-600 font-semibold text-xs">{internationalCount}</span>
                        <span className="text-gray-400 text-xs">/</span>
                        <span className="text-blue-600 font-semibold text-xs">{totalCount}</span>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>


          </div>
        </div>
      )}
    </div>
  );
}

// 国家选择器组件
export function CountryAirportSelector({
  onCountrySelect
}: {
  onCountrySelect: (country: string, airports: AirportSearchResult[]) => void
}) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const countries = getAllCountries();

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    if (country) {
      const airports = findAirportsByCountry(country);
      onCountrySelect(country, airports);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        按国家浏览机场
      </label>
      <select
        value={selectedCountry}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleCountryChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">选择国家...</option>
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
