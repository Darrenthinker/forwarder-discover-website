// 🇭🇷 克罗地亚机场数据库 - 增强版本
// Croatia Enhanced Airport Database
// 第四十一批机场数据库 - 欧洲大洲继续

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
// 🇭🇷 克罗地亚共和国机场数据库 - 10个主要机场
// 覆盖克罗地亚主要地区：萨格勒布、达尔马提亚、伊斯特拉半岛
// 巴尔干半岛，亚得里亚海明珠，旅游胜地
// ================================================================

export const croatiaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 萨格勒布 - 克罗地亚首都，最大航空枢纽
  // ================================================================

  {
    iata: 'ZAG',
    icao: 'LDZA',
    chinese: '萨格勒布弗拉尼奥·图季曼机场',
    english: 'Zagreb Franjo Tuđman Airport',
    city: '萨格勒布',
    province: '萨格勒布市',
    country: '克罗地亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 45.7429, lng: 16.0687 },
    runways: 1,
    priority: 100, // 🥇 克罗地亚最大国际机场，巴尔干重要枢纽
    hub: ['Croatia Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 斯普利特 - 达尔马提亚海岸重要城市
  // ================================================================

  {
    iata: 'SPU',
    icao: 'LDSP',
    chinese: '斯普利特机场',
    english: 'Split Airport',
    city: '斯普利特',
    province: '斯普利特-达尔马提亚县',
    country: '克罗地亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.5389, lng: 16.2981 },
    runways: 1,
    priority: 95, // 🏖️ 达尔马提亚海岸最大城市，旅游门户
    cargo: false
  },

  // ================================================================
  // 📍 杜布罗夫尼克 - 世界文化遗产
  // ================================================================

  {
    iata: 'DBV',
    icao: 'LDDU',
    chinese: '杜布罗夫尼克机场',
    english: 'Dubrovnik Airport',
    city: '杜布罗夫尼克',
    province: '杜布罗夫尼克-内雷特瓦县',
    country: '克罗地亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 42.5614, lng: 18.2681 },
    runways: 1,
    priority: 92, // 🏛️ 世界文化遗产，亚得里亚海明珠
    cargo: false
  },

  // ================================================================
  // 📍 普拉 - 伊斯特拉半岛重要城市
  // ================================================================

  {
    iata: 'PUY',
    icao: 'LDPL',
    chinese: '普拉机场',
    english: 'Pula Airport',
    city: '普拉',
    province: '伊斯特拉县',
    country: '克罗地亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 44.8936, lng: 13.9222 },
    runways: 1,
    priority: 88, // 🏖️ 伊斯特拉半岛旅游中心
    cargo: false
  },

  // ================================================================
  // 📍 里耶卡 - 北部重要港口
  // ================================================================

  {
    iata: 'RJK',
    icao: 'LDRI',
    chinese: '里耶卡机场',
    english: 'Rijeka Airport',
    city: '里耶卡',
    province: '滨海-山区县',
    country: '克罗地亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 45.2169, lng: 14.5703 },
    runways: 1,
    priority: 85, // 🚢 重要港口城市
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'ZAD',
    icao: 'LDZD',
    chinese: '扎达尔机场',
    english: 'Zadar Airport',
    city: '扎达尔',
    province: '扎达尔县',
    country: '克罗地亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 44.0831, lng: 15.3467 },
    runways: 1,
    priority: 82, // 🏖️ 达尔马提亚北部旅游中心
    cargo: false
  },

  {
    iata: 'OSI',
    icao: 'LDOS',
    chinese: '奥西耶克机场',
    english: 'Osijek Airport',
    city: '奥西耶克',
    province: '奥西耶克-巴拉尼亚县',
    country: '克罗地亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 45.4633, lng: 18.8103 },
    runways: 1,
    priority: 78, // 🌾 东部农业地区中心
    cargo: false
  },

  {
    iata: 'BWK',
    icao: 'LDSB',
    chinese: '布拉奇岛机场',
    english: 'Brač Airport',
    city: '布拉奇岛',
    province: '斯普利特-达尔马提亚县',
    country: '克罗地亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.2856, lng: 16.6797 },
    runways: 1,
    priority: 80, // 🏝️ 达尔马提亚群岛旅游
    cargo: false
  },

  {
    iata: 'LSZ',
    icao: 'LDLO',
    chinese: '洛希尼岛机场',
    english: 'Lošinj Airport',
    city: '洛希尼岛',
    province: '滨海-山区县',
    country: '克罗地亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 44.5656, lng: 14.3931 },
    runways: 1,
    priority: 75, // 🏝️ 亚得里亚海岛屿旅游
    cargo: false
  },

  {
    iata: 'VRZ',
    icao: 'LDVA',
    chinese: '瓦拉日丁机场',
    english: 'Varaždin Airport',
    city: '瓦拉日丁',
    province: '瓦拉日丁县',
    country: '克罗地亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.2950, lng: 16.3814 },
    runways: 1,
    priority: 72, // 🏛️ 北部历史名城
    cargo: false
  }

];

// 导出统计信息
export const croatiaAirportStats = {
  totalAirports: croatiaEnhancedAirports.length,
  internationalAirports: croatiaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: croatiaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: croatiaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(croatiaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: croatiaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '克罗地亚全国县份完整覆盖',
  specialFeatures: [
    '🥇 萨格勒布机场 - 克罗地亚最大国际机场，巴尔干重要枢纽',
    '🏖️ 斯普利特机场 - 达尔马提亚海岸最大城市，旅游门户',
    '🏛️ 杜布罗夫尼克机场 - 世界文化遗产，亚得里亚海明珠',
    '🏖️ 普拉机场 - 伊斯特拉半岛旅游中心',
    '🚢 里耶卡机场 - 重要港口城市',
    '🏝️ 布拉奇岛机场 - 达尔马提亚群岛旅游'
  ]
};
