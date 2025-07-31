// 🇶🇦 卡塔尔国机场数据库 - 增强版本
// State of Qatar Enhanced Airport Database
// 第九十八批机场数据库 - 中东航空枢纽网络

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  city: string;
  municipality: string;
  country: string;
  isInternational: boolean;
  hasCustoms: boolean;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  runways: number;
  priority: number;
  hub?: string[];
  cargo: boolean;
  type: 'international' | 'domestic' | 'military' | 'private';
}

// ================================================================
// 🇶🇦 卡塔尔国机场数据库 - 4个主要机场
// 覆盖卡塔尔全境：多哈、乌代德、拉斯拉凡、豪尔岛
// 中东航空枢纽，卡塔尔航空总部，世界杯主办国
// ================================================================

export const qatarEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 多哈 - 卡塔尔首都，世界级航空枢纽
  // ================================================================

  {
    iata: 'DOH',
    icao: 'OTHH',
    chinese: '多哈哈马德国际机场',
    english: 'Doha Hamad International Airport',
    city: '多哈',
    municipality: '多哈市',
    country: '卡塔尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 25.2731, lng: 51.6080 },
    runways: 2,
    priority: 100, // 🥇 世界级超级枢纽，卡塔尔航空总部，中东最大机场之一
    hub: ['Qatar Airways', 'QatarLink'],
    cargo: true,
    type: 'international'
  },

  {
    iata: 'DIA',
    icao: 'OTBD',
    chinese: '多哈国际机场（已关闭）',
    english: 'Doha International Airport (Closed)',
    city: '多哈',
    municipality: '多哈市',
    country: '卡塔尔',
    isInternational: false,
    hasCustoms: false,
    timezone: 'AST',
    coordinates: { lat: 25.2610, lng: 51.5650 },
    runways: 1,
    priority: 50, // 已于2014年关闭，历史机场
    cargo: false,
    type: 'domestic'
  },

  // ================================================================
  // 📍 乌代德 - 重要军事基地
  // ================================================================

  {
    iata: 'XJD',
    icao: 'OTBH',
    chinese: '乌代德空军基地',
    english: 'Al Udeid Air Base',
    city: '乌代德',
    municipality: '乌代德',
    country: '卡塔尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 25.1173, lng: 51.3150 },
    runways: 2,
    priority: 85, // 🚁 美军中央司令部前进基地，战略重要性极高
    cargo: true,
    type: 'military'
  },

  // ================================================================
  // 📍 拉斯拉凡 - 北部工业城市
  // ================================================================

  {
    iata: 'XQP',
    icao: 'OTLF',
    chinese: '拉斯拉凡机场',
    english: 'Ras Laffan Airport',
    city: '拉斯拉凡',
    municipality: '拉斯拉凡',
    country: '卡塔尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 25.9333, lng: 51.2167 },
    runways: 1,
    priority: 75, // 🏭 液化天然气工业中心，石油化工枢纽
    cargo: true,
    type: 'domestic'
  },

  // ================================================================
  // 📍 豪尔岛 - 离岸人工岛
  // ================================================================

  {
    iata: 'XHA',
    icao: 'OTHR',
    chinese: '豪尔岛直升机场',
    english: 'Hawar Island Heliport',
    city: '豪尔岛',
    municipality: '豪尔岛',
    country: '卡塔尔',
    isInternational: false,
    hasCustoms: false,
    timezone: 'AST',
    coordinates: { lat: 25.6667, lng: 50.7833 },
    runways: 1,
    priority: 60, // 🏝️ 私人度假岛屿，直升机专用
    cargo: false,
    type: 'private'
  }

];

// ================================================================
// 🏆 卡塔尔机场统计信息
// ================================================================

export const qatarAirportStats = {
  totalAirports: qatarEnhancedAirports.length,
  internationalAirports: qatarEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: qatarEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: qatarEnhancedAirports.filter(apt => apt.cargo).length,
  cities: [...new Set(qatarEnhancedAirports.map(apt => apt.city))].length,
  hubAirports: qatarEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '卡塔尔全境完整覆盖',
  specialFeatures: [
    '🥇 多哈哈马德国际机场 - 世界级超级枢纽，2022年世界杯主机场',
    '🏆 卡塔尔航空总部 - 全球最佳航空公司之一',
    '🚁 乌代德空军基地 - 美军中央司令部前进基地',
    '🏭 拉斯拉凡机场 - 世界最大液化天然气出口港',
    '🏝️ 豪尔岛直升机场 - 奢华度假岛屿门户',
    '🌍 中东航空枢纽 - 连接亚欧非三大洲',
    '⚽ 2022年FIFA世界杯主办国',
    '🛢️ 世界第三大天然气储量国',
    '💎 人均GDP全球第一的富裕国家'
  ]
};

// ================================================================
// 🎯 机场导出函数
// ================================================================

export function getQatarAirportByIATA(iata: string): EnhancedAirportInfo | undefined {
  return qatarEnhancedAirports.find(airport => airport.iata === iata);
}

export function getQatarAirportsByType(type: string): EnhancedAirportInfo[] {
  return qatarEnhancedAirports.filter(airport => airport.type === type);
}

export function getQatarInternationalAirports(): EnhancedAirportInfo[] {
  return qatarEnhancedAirports.filter(airport => airport.isInternational);
}

export function getQatarCargoAirports(): EnhancedAirportInfo[] {
  return qatarEnhancedAirports.filter(airport => airport.cargo);
} 