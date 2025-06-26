// 🌍 尼日尔机场数据库 - 增强版本
// Niger Enhanced Airport Database
// 参考数据来源：物流巴巴网站、世界机场代码网站、维基百科

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
// 🌍 尼日尔机场数据库 - 西非萨赫勒地区重要航空节点
// Niger Airports - Important Aviation Hub in West African Sahel
// 覆盖尼日尔主要城市：尼亚美、阿加德兹、马拉迪、津德尔等
// ================================================================

export const nigerEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 尼日尔首都 - 尼亚美
  // ================================================================

  {
    iata: 'NIM',
    icao: 'DRRN',
    chinese: '尼亚美迪奥里·哈马尼国际机场',
    english: 'Niamey Diori Hamani International Airport',
    city: '尼亚美',
    province: '尼亚美大区',
    country: '尼日尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 13.4815, lng: 2.1836 },
    runways: 2,
    priority: 100, // 🏛️ 尼日尔首都，西非萨赫勒地区重要枢纽
    hub: ['Niger Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 尼日尔北部重要城市 - 阿加德兹
  // ================================================================

  {
    iata: 'AJY',
    icao: 'DRZA',
    chinese: '阿加德兹马诺·达亚克国际机场',
    english: 'Agadez Mano Dayak International Airport',
    city: '阿加德兹',
    province: '阿加德兹大区',
    country: '尼日尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 16.9661, lng: 8.0011 },
    runways: 1,
    priority: 85, // 🏜️ 撒哈拉沙漠门户，图阿雷格文化中心
    cargo: false
  },

  // ================================================================
  // 📍 尼日尔南部商业中心 - 马拉迪
  // ================================================================

  {
    iata: 'MFQ',
    icao: 'DRRM',
    chinese: '马拉迪机场',
    english: 'Maradi Airport',
    city: '马拉迪',
    province: '马拉迪大区',
    country: '尼日尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 13.5025, lng: 7.1267 },
    runways: 1,
    priority: 75, // 🌾 农业和商业中心，与尼日利亚边境重要城市
    cargo: false
  },

  // ================================================================
  // 📍 尼日尔东部重要城市 - 津德尔
  // ================================================================

  {
    iata: 'ZND',
    icao: 'DRRZ',
    chinese: '津德尔机场',
    english: 'Zinder Airport',
    city: '津德尔',
    province: '津德尔大区',
    country: '尼日尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 13.7769, lng: 8.9836 },
    runways: 1,
    priority: 72, // 🏛️ 历史古城，曾是尼日尔首都
    cargo: false
  },

  // ================================================================
  // 📍 尼日尔西南部 - 多索
  // ================================================================

  {
    iata: 'DOS',
    icao: 'DRRD',
    chinese: '多索机场',
    english: 'Dosso Airport',
    city: '多索',
    province: '多索大区',
    country: '尼日尔',
    isInternational: false,
    hasCustoms: false,
    timezone: 'WAT',
    coordinates: { lat: 13.0500, lng: 3.1500 },
    runways: 1,
    priority: 65, // 🌾 农业区域中心
    cargo: false
  },

  // ================================================================
  // 📍 尼日尔中部 - 塔瓦
  // ================================================================

  {
    iata: 'THZ',
    icao: 'DRRT',
    chinese: '塔瓦机场',
    english: 'Tahoua Airport',
    city: '塔瓦',
    province: '塔瓦大区',
    country: '尼日尔',
    isInternational: false,
    hasCustoms: false,
    timezone: 'WAT',
    coordinates: { lat: 14.8767, lng: 5.2653 },
    runways: 1,
    priority: 68, // 🐪 游牧民族聚集地，畜牧业中心
    cargo: false
  },

  // ================================================================
  // 📍 尼日尔东南部 - 迪法
  // ================================================================

  {
    iata: 'DIF',
    icao: 'DRRF',
    chinese: '迪法机场',
    english: 'Diffa Airport',
    city: '迪法',
    province: '迪法大区',
    country: '尼日尔',
    isInternational: false,
    hasCustoms: false,
    timezone: 'WAT',
    coordinates: { lat: 13.3833, lng: 12.6167 },
    runways: 1,
    priority: 60, // 🌊 乍得湖地区，边境重要城市
    cargo: false
  }

];

// 统计信息
export const nigerAirportStats = {
  totalAirports: nigerEnhancedAirports.length,
  internationalAirports: nigerEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: nigerEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: nigerEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(nigerEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: nigerEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  priorityAirports: nigerEnhancedAirports.filter(apt => apt.priority >= 80).length
};

// 导出尼日尔机场概览
export const nigerAirportOverview = {
  country: '尼日尔',
  capital: '尼亚美',
  mainAirport: 'NIM',
  timezone: 'WAT',
  region: '西非萨赫勒地区',
  description: '尼日尔位于西非萨赫勒地区，是连接北非和西非的重要航空节点。尼亚美迪奥里·哈马尼国际机场是该国最重要的航空门户。',
  keyFeatures: [
    '西非萨赫勒地区航空枢纽',
    '连接撒哈拉沙漠与几内亚湾',
    '图阿雷格文化与豪萨文化交汇点',
    '重要的铀矿和石油资源运输节点'
  ]
}; 