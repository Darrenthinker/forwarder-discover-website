// 🇱🇹 立陶宛机场数据库 - 增强版本
// Lithuania Enhanced Airport Database
// 第四十批机场数据库 - 欧洲大洲继续

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
// 🇱🇹 立陶宛共和国机场数据库 - 8个主要机场
// 覆盖立陶宛主要地区：维尔纽斯、考纳斯、克莱佩达、希奥利艾、潘涅韦日斯
// 波罗的海三国之一，立陶宛大公国，波罗的海明珠
// ================================================================

export const lithuaniaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 维尔纽斯 - 立陶宛首都，最大航空枢纽
  // ================================================================

  {
    iata: 'VNO',
    icao: 'EYVI',
    chinese: '维尔纽斯国际机场',
    english: 'Vilnius International Airport',
    city: '维尔纽斯',
    province: '维尔纽斯县',
    country: '立陶宛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 54.6341, lng: 25.2858 },
    runways: 1,
    priority: 100, // 🥇 立陶宛最大国际机场，波罗的海重要枢纽
    hub: ['Small Planet Airlines', 'Ryanair'],
    cargo: true
  },

  // ================================================================
  // 📍 考纳斯 - 立陶宛第二大城市
  // ================================================================

  {
    iata: 'KUN',
    icao: 'EYKA',
    chinese: '考纳斯机场',
    english: 'Kaunas Airport',
    city: '考纳斯',
    province: '考纳斯县',
    country: '立陶宛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 54.9639, lng: 24.0848 },
    runways: 1,
    priority: 92, // 🏛️ 立陶宛第二大城市，历史文化中心
    cargo: true
  },

  // ================================================================
  // 📍 帕兰加 - 海滨度假胜地
  // ================================================================

  {
    iata: 'PLQ',
    icao: 'EYPA',
    chinese: '帕兰加国际机场',
    english: 'Palanga International Airport',
    city: '帕兰加',
    province: '克莱佩达县',
    country: '立陶宛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 55.9733, lng: 21.0939 },
    runways: 1,
    priority: 88, // 🏖️ 波罗的海海滨度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 希奥利艾 - 北部重要城市
  // ================================================================

  {
    iata: 'SQQ',
    icao: 'EYSA',
    chinese: '希奥利艾机场',
    english: 'Šiauliai Airport',
    city: '希奥利艾',
    province: '希奥利艾县',
    country: '立陶宛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 55.8939, lng: 23.3953 },
    runways: 1,
    priority: 80, // 🏭 北部工业中心
    cargo: false
  },

  // ================================================================
  // 📍 潘涅韦日斯 - 东北部重要城市
  // ================================================================

  {
    iata: 'PNV',
    icao: 'EYPP',
    chinese: '潘涅韦日斯机场',
    english: 'Panevėžys Airport',
    city: '潘涅韦日斯',
    province: '潘涅韦日斯县',
    country: '立陶宛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 55.7294, lng: 24.4608 },
    runways: 1,
    priority: 75, // 🌾 东北部农业中心
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'ALY',
    icao: 'EYAL',
    chinese: '阿利图斯机场',
    english: 'Alytus Airport',
    city: '阿利图斯',
    province: '阿利图斯县',
    country: '立陶宛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 54.4000, lng: 24.0500 },
    runways: 1,
    priority: 72, // 🌲 南部森林地区
    cargo: false
  },

  {
    iata: 'MRJ',
    icao: 'EYMR',
    chinese: '马里扬波莱机场',
    english: 'Marijampolė Airport',
    city: '马里扬波莱',
    province: '马里扬波莱县',
    country: '立陶宛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 54.5500, lng: 23.3500 },
    runways: 1,
    priority: 70, // 🌾 西南部农业区
    cargo: false
  },

  {
    iata: 'UTE',
    icao: 'EYUT',
    chinese: '乌田纳机场',
    english: 'Utena Airport',
    city: '乌田纳',
    province: '乌田纳县',
    country: '立陶宛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 55.4833, lng: 25.6167 },
    runways: 1,
    priority: 68, // 🏞️ 东部湖区
    cargo: false
  }

];

// 导出统计信息
export const lithuaniaAirportStats = {
  totalAirports: lithuaniaEnhancedAirports.length,
  internationalAirports: lithuaniaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: lithuaniaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: lithuaniaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(lithuaniaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: lithuaniaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '立陶宛全国县份完整覆盖',
  specialFeatures: [
    '🥇 维尔纽斯机场 - 立陶宛最大国际机场，波罗的海重要枢纽',
    '🏛️ 考纳斯机场 - 立陶宛第二大城市，历史文化中心',
    '🏖️ 帕兰加机场 - 波罗的海海滨度假胜地',
    '🏭 希奥利艾机场 - 北部工业中心',
    '🌾 潘涅韦日斯机场 - 东北部农业中心',
    '🌲 阿利图斯机场 - 南部森林地区'
  ]
};
