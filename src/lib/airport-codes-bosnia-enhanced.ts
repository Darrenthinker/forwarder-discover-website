// 🇧🇦 波斯尼亚和黑塞哥维那机场数据库 - 增强版本
// Bosnia and Herzegovina Enhanced Airport Database
// 第五十二批机场数据库 - 欧洲大洲继续

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
// 🇧🇦 波斯尼亚和黑塞哥维那机场数据库 - 5个主要机场
// 覆盖波黑主要地区：萨拉热窝、巴尼亚卢卡、图兹拉、莫斯塔尔
// 巴尔干半岛中心，多民族国家，重要历史文化名城
// ================================================================

export const bosniaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 萨拉热窝 - 波黑首都，最大航空枢纽
  // ================================================================

  {
    iata: 'SJJ',
    icao: 'LQSA',
    chinese: '萨拉热窝国际机场',
    english: 'Sarajevo International Airport',
    city: '萨拉热窝',
    province: '萨拉热窝州',
    country: '波斯尼亚和黑塞哥维那',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.8246, lng: 18.3314 },
    runways: 1,
    priority: 100, // 🥇 波黑最大国际机场，巴尔干历史名城
    hub: ['FlyBosnia', 'Air Bosna'],
    cargo: true
  },

  // ================================================================
  // 📍 巴尼亚卢卡 - 塞族共和国首府
  // ================================================================

  {
    iata: 'BNX',
    icao: 'LQBK',
    chinese: '巴尼亚卢卡国际机场',
    english: 'Banja Luka International Airport',
    city: '巴尼亚卢卡',
    province: '塞族共和国',
    country: '波斯尼亚和黑塞哥维那',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 44.9414, lng: 17.2975 },
    runways: 1,
    priority: 88, // 🏛️ 塞族共和国首府，北部重要城市
    cargo: false
  },

  // ================================================================
  // 📍 图兹拉 - 东北部重要工业城市
  // ================================================================

  {
    iata: 'TZL',
    icao: 'LQTZ',
    chinese: '图兹拉国际机场',
    english: 'Tuzla International Airport',
    city: '图兹拉',
    province: '图兹拉州',
    country: '波斯尼亚和黑塞哥维那',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 44.4587, lng: 18.7248 },
    runways: 1,
    priority: 85, // 🏭 东北部重要工业城市，盐矿之城
    cargo: false
  },

  // ================================================================
  // 📍 莫斯塔尔 - 南部历史名城
  // ================================================================

  {
    iata: 'OMO',
    icao: 'LQMO',
    chinese: '莫斯塔尔国际机场',
    english: 'Mostar International Airport',
    city: '莫斯塔尔',
    province: '黑塞哥维那-内雷特瓦州',
    country: '波斯尼亚和黑塞哥维那',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.2829, lng: 17.8459 },
    runways: 1,
    priority: 82, // 🌉 著名古桥城市，黑塞哥维那中心
    cargo: false
  },

  // ================================================================
  // 📍 比哈奇 - 西北部城市
  // ================================================================

  {
    iata: 'BHC',
    icao: 'LQBH',
    chinese: '比哈奇机场',
    english: 'Bihać Airport',
    city: '比哈奇',
    province: '乌纳-萨纳州',
    country: '波斯尼亚和黑塞哥维那',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 44.8197, lng: 15.7869 },
    runways: 1,
    priority: 78, // 🌲 西北部森林地区，乌纳河流域
    cargo: false
  }

];

// 导出统计信息
export const bosniaAirportStats = {
  totalAirports: bosniaEnhancedAirports.length,
  internationalAirports: bosniaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: bosniaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: bosniaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(bosniaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: bosniaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '波斯尼亚和黑塞哥维那全国地区完整覆盖',
  specialFeatures: [
    '🥇 萨拉热窝机场 - 波黑最大国际机场，巴尔干历史名城',
    '🏛️ 巴尼亚卢卡机场 - 塞族共和国首府，北部重要城市',
    '🏭 图兹拉机场 - 东北部重要工业城市，盐矿之城',
    '🌉 莫斯塔尔机场 - 著名古桥城市，黑塞哥维那中心',
    '🌲 比哈奇机场 - 西北部森林地区，乌纳河流域',
    '🏛️ 多民族融合 - 波斯尼亚族、塞尔维亚族、克罗地亚族共同家园'
  ]
};
