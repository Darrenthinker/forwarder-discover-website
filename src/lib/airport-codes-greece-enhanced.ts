// 🇬🇷 希腊机场数据库 - 增强版本
// Greece Enhanced Airport Database
// 第四十三批机场数据库 - 欧洲大洲继续

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
// 🇬🇷 希腊共和国机场数据库 - 16个主要机场
// 覆盖希腊主要地区：阿提卡、马其顿、克里特岛、爱琴海群岛
// 地中海文明古国，爱琴海明珠，旅游胜地
// ================================================================

export const greeceEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 雅典 - 希腊首都，最大航空枢纽
  // ================================================================

  {
    iata: 'ATH',
    icao: 'LGAV',
    chinese: '雅典埃莱夫塞里奥斯·韦尼泽洛斯国际机场',
    english: 'Athens Eleftherios Venizelos International Airport',
    city: '雅典',
    province: '阿提卡',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.9364, lng: 23.9445 },
    runways: 2,
    priority: 100, // 🥇 希腊最大国际机场，地中海重要枢纽
    hub: ['Aegean Airlines', 'Olympic Air'],
    cargo: true
  },

  // ================================================================
  // 📍 塞萨洛尼基 - 希腊第二大城市
  // ================================================================

  {
    iata: 'SKG',
    icao: 'LGTS',
    chinese: '塞萨洛尼基马其顿机场',
    english: 'Thessaloniki Macedonia Airport',
    city: '塞萨洛尼基',
    province: '中马其顿',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 40.5197, lng: 22.9708 },
    runways: 1,
    priority: 95, // 🏛️ 希腊第二大城市，北部重要门户
    cargo: true
  },

  // ================================================================
  // 📍 伊拉克利翁 - 克里特岛最大城市
  // ================================================================

  {
    iata: 'HER',
    icao: 'LGIR',
    chinese: '伊拉克利翁尼科斯·卡赞察基斯机场',
    english: 'Heraklion Nikos Kazantzakis Airport',
    city: '伊拉克利翁',
    province: '克里特',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.3397, lng: 25.1803 },
    runways: 1,
    priority: 92, // 🏝️ 克里特岛最大城市，旅游重要门户
    cargo: false
  },

  // ================================================================
  // 📍 圣托里尼 - 世界著名旅游胜地
  // ================================================================

  {
    iata: 'JTR',
    icao: 'LGSR',
    chinese: '圣托里尼机场',
    english: 'Santorini Airport',
    city: '圣托里尼',
    province: '南爱琴海',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.3992, lng: 25.4795 },
    runways: 1,
    priority: 90, // 🌅 世界著名旅游胜地，爱琴海明珠
    cargo: false
  },

  // ================================================================
  // 📍 米科诺斯 - 爱琴海度假天堂
  // ================================================================

  {
    iata: 'JMK',
    icao: 'LGMK',
    chinese: '米科诺斯机场',
    english: 'Mykonos Airport',
    city: '米科诺斯',
    province: '南爱琴海',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.4351, lng: 25.3481 },
    runways: 1,
    priority: 88, // 🏖️ 爱琴海度假天堂，国际知名
    cargo: false
  },

  // ================================================================
  // 📍 罗德岛 - 多德卡尼斯群岛重要岛屿
  // ================================================================

  {
    iata: 'RHO',
    icao: 'LGRP',
    chinese: '罗德岛迪亚戈拉斯机场',
    english: 'Rhodes Diagoras Airport',
    city: '罗德岛',
    province: '南爱琴海',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.4056, lng: 28.0864 },
    runways: 1,
    priority: 85, // 🏛️ 古代世界七大奇迹之一，旅游胜地
    cargo: false
  },

  // ================================================================
  // 📍 干尼亚 - 克里特岛西部重要城市
  // ================================================================

  {
    iata: 'CHQ',
    icao: 'LGSA',
    chinese: '干尼亚扬尼斯·达斯卡洛扬尼斯机场',
    english: 'Chania Ioannis Daskalogiannis Airport',
    city: '干尼亚',
    province: '克里特',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.5317, lng: 24.1497 },
    runways: 1,
    priority: 82, // 🏖️ 克里特岛西部旅游门户
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'CFU',
    icao: 'LGKR',
    chinese: '科孚岛扬尼斯·卡波迪斯特里亚斯机场',
    english: 'Corfu Ioannis Kapodistrias Airport',
    city: '科孚岛',
    province: '伊奥尼亚群岛',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 39.6019, lng: 19.9117 },
    runways: 1,
    priority: 80, // 🏝️ 伊奥尼亚海明珠
    cargo: false
  },

  {
    iata: 'ZTH',
    icao: 'LGZA',
    chinese: '扎金索斯机场',
    english: 'Zakynthos Airport',
    city: '扎金索斯',
    province: '伊奥尼亚群岛',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.7509, lng: 20.8842 },
    runways: 1,
    priority: 78, // 🐢 海龟岛，自然保护区
    cargo: false
  },

  {
    iata: 'KGS',
    icao: 'LGKO',
    chinese: '科斯岛机场',
    english: 'Kos Airport',
    city: '科斯岛',
    province: '南爱琴海',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.7933, lng: 27.0917 },
    runways: 1,
    priority: 75, // 🏥 希波克拉底故乡，医学之岛
    cargo: false
  },

  {
    iata: 'PVK',
    icao: 'LGPZ',
    chinese: '普雷韦扎机场',
    english: 'Preveza Airport',
    city: '普雷韦扎',
    province: '伊庇鲁斯',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 38.9256, lng: 20.7653 },
    runways: 1,
    priority: 73, // 🌊 伊奥尼亚海岸旅游门户
    cargo: false
  },

  {
    iata: 'KLX',
    icao: 'LGKL',
    chinese: '卡拉马塔机场',
    english: 'Kalamata Airport',
    city: '卡拉马塔',
    province: '伯罗奔尼撒',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.0683, lng: 22.0256 },
    runways: 1,
    priority: 77, // 🏛️ 伯罗奔尼撒半岛门户
    cargo: false
  },

  {
    iata: 'JSI',
    icao: 'LGSK',
    chinese: '斯基亚索斯机场',
    english: 'Skiathos Airport',
    city: '斯基亚索斯',
    province: '色萨利',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 39.1772, lng: 23.5031 },
    runways: 1,
    priority: 70, // 🏖️ 斯波拉德群岛旅游
    cargo: false
  },

  {
    iata: 'MLO',
    icao: 'LGML',
    chinese: '米洛斯机场',
    english: 'Milos Airport',
    city: '米洛斯',
    province: '南爱琴海',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.6969, lng: 24.4769 },
    runways: 1,
    priority: 68, // 🌋 火山岛，基克拉德群岛
    cargo: false
  },

  {
    iata: 'SMI',
    icao: 'LGSM',
    chinese: '萨摩斯机场',
    english: 'Samos Airport',
    city: '萨摩斯',
    province: '北爱琴海',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.6900, lng: 26.9117 },
    runways: 1,
    priority: 72, // 🎭 毕达哥拉斯故乡，文化名岛
    cargo: false
  },

  {
    iata: 'LRS',
    icao: 'LGLO',
    chinese: '勒罗斯机场',
    english: 'Leros Airport',
    city: '勒罗斯',
    province: '南爱琴海',
    country: '希腊',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 37.1831, lng: 26.8003 },
    runways: 1,
    priority: 65, // 🏝️ 多德卡尼斯群岛小岛
    cargo: false
  }

];

// 导出统计信息
export const greeceAirportStats = {
  totalAirports: greeceEnhancedAirports.length,
  internationalAirports: greeceEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: greeceEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: greeceEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(greeceEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: greeceEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '希腊全国地区完整覆盖',
  specialFeatures: [
    '🥇 雅典机场 - 希腊最大国际机场，地中海重要枢纽',
    '🏛️ 塞萨洛尼基机场 - 希腊第二大城市，北部重要门户',
    '🌅 圣托里尼机场 - 世界著名旅游胜地，爱琴海明珠',
    '🏖️ 米科诺斯机场 - 爱琴海度假天堂，国际知名',
    '🏝️ 伊拉克利翁机场 - 克里特岛最大城市，旅游重要门户',
    '🏛️ 罗德岛机场 - 古代世界七大奇迹之一，旅游胜地'
  ]
};
