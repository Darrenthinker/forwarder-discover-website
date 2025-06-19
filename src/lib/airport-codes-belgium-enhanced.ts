// 🇧🇪 比利时机场数据库 - 增强版本
// Belgium Enhanced Airport Database
// 第二十九批机场数据库 - 欧洲大洲继续

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  city: string;
  province: string;
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
}

// ================================================================
// 🇧🇪 比利时王国机场数据库 - 6个主要机场
// 覆盖比利时三大地区：弗拉芒大区、瓦隆大区、布鲁塞尔首都大区
// 欧盟总部所在国，欧洲政治经济中心
// ================================================================

export const belgiumEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 布鲁塞尔首都大区 - 欧盟总部
  // ================================================================

  {
    iata: 'BRU',
    icao: 'EBBR',
    chinese: '布鲁塞尔机场',
    english: 'Brussels Airport',
    city: '布鲁塞尔',
    province: '布鲁塞尔首都大区',
    country: '比利时',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.9014, lng: 4.4844 },
    runways: 3,
    priority: 100, // 🥇 欧盟总部机场，欧洲政治中心
    hub: ['布鲁塞尔航空', 'TUI fly Belgium'],
    cargo: true
  },

  {
    iata: 'CRL',
    icao: 'EBCI',
    chinese: '布鲁塞尔南部沙勒罗瓦机场',
    english: 'Brussels South Charleroi Airport',
    city: '沙勒罗瓦',
    province: '埃诺省',
    country: '比利时',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.4592, lng: 4.4538 },
    runways: 1,
    priority: 85, // ✈️ 低成本航空枢纽
    hub: ['瑞安航空'],
    cargo: false
  },

  // ================================================================
  // 📍 弗拉芒大区 - 荷兰语区
  // ================================================================

  {
    iata: 'ANR',
    icao: 'EBAW',
    chinese: '安特卫普国际机场',
    english: 'Antwerp International Airport',
    city: '安特卫普',
    province: '安特卫普省',
    country: '比利时',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 51.1894, lng: 4.4603 },
    runways: 1,
    priority: 88, // 🚢 欧洲第二大港口城市
    cargo: false
  },

  {
    iata: 'OST',
    icao: 'EBOS',
    chinese: '奥斯坦德-布鲁日国际机场',
    english: 'Ostend-Bruges International Airport',
    city: '奥斯坦德',
    province: '西弗拉芒省',
    country: '比利时',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 51.1989, lng: 2.8622 },
    runways: 1,
    priority: 82, // 🏰 布鲁日中世纪古城门户
    cargo: true
  },

  // ================================================================
  // 📍 瓦隆大区 - 法语区
  // ================================================================

  {
    iata: 'LGG',
    icao: 'EBLG',
    chinese: '列日机场',
    english: 'Liège Airport',
    city: '列日',
    province: '列日省',
    country: '比利时',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.6375, lng: 5.4431 },
    runways: 1,
    priority: 90, // 📦 欧洲重要货运枢纽
    cargo: true
  },

  {
    iata: 'QKT',
    icao: 'EBKT',
    chinese: '科特赖克-韦维尔海姆机场',
    english: 'Kortrijk-Wevelgem International Airport',
    city: '科特赖克',
    province: '西弗拉芒省',
    country: '比利时',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 50.8175, lng: 3.2047 },
    runways: 1,
    priority: 75, // 🏭 西部工业区
    cargo: false
  }

];

// 导出统计信息
export const belgiumAirportStats = {
  totalAirports: belgiumEnhancedAirports.length,
  internationalAirports: belgiumEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: belgiumEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: belgiumEnhancedAirports.filter(apt => apt.cargo).length,
  regions: [...new Set(belgiumEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: belgiumEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '比利时三大地区完整覆盖',
  specialFeatures: [
    '🥇 布鲁塞尔机场 - 欧盟总部门户，欧洲政治中心',
    '📦 列日机场 - 欧洲重要货运枢纽',
    '🚢 安特卫普机场 - 欧洲第二大港口城市',
    '🏰 奥斯坦德机场 - 布鲁日中世纪古城门户',
    '✈️ 沙勒罗瓦机场 - 低成本航空枢纽',
    '🏛️ 欧盟机构航空网络 - 欧洲委员会、欧洲议会门户'
  ]
};
