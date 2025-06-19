// 🇦🇹 奥地利机场数据库 - 增强版本
// Austria Enhanced Airport Database
// 第二十八批机场数据库 - 欧洲大洲继续

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
// 🇦🇹 奥地利共和国机场数据库 - 8个主要机场
// 覆盖奥地利主要州和地区：维也纳、萨尔茨堡、蒂罗尔、
// 施泰尔马克、上奥地利、克恩顿等
// 阿尔卑斯山区重要航空枢纽，中欧交通要冲
// ================================================================

export const austriaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 维也纳 - 奥地利首都和最大城市
  // ================================================================

  {
    iata: 'VIE',
    icao: 'LOWW',
    chinese: '维也纳国际机场',
    english: 'Vienna International Airport',
    city: '维也纳',
    province: '维也纳州',
    country: '奥地利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 48.1103, lng: 16.5697 },
    runways: 2,
    priority: 100, // 🥇 奥地利最大国际机场，中欧重要枢纽
    hub: ['奥地利航空', 'Eurowings'],
    cargo: true
  },

  // ================================================================
  // 📍 萨尔茨堡 - 莫扎特故乡，世界文化遗产
  // ================================================================

  {
    iata: 'SZG',
    icao: 'LOWS',
    chinese: '萨尔茨堡沃尔夫冈·阿马德乌斯·莫扎特机场',
    english: 'Salzburg Wolfgang Amadeus Mozart Airport',
    city: '萨尔茨堡',
    province: '萨尔茨堡州',
    country: '奥地利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 47.7933, lng: 13.0044 },
    runways: 1,
    priority: 92, // 🎼 莫扎特故乡，世界文化遗产城市
    hub: ['奥地利航空'],
    cargo: false
  },

  // ================================================================
  // 📍 因斯布鲁克 - 阿尔卑斯山心脏，冬奥会城市
  // ================================================================

  {
    iata: 'INN',
    icao: 'LOWI',
    chinese: '因斯布鲁克机场',
    english: 'Innsbruck Airport',
    city: '因斯布鲁克',
    province: '蒂罗尔州',
    country: '奥地利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 47.2603, lng: 11.3439 },
    runways: 1,
    priority: 88, // ⛷️ 阿尔卑斯山心脏，冬奥会主办城市
    cargo: false
  },

  // ================================================================
  // 📍 格拉茨 - 施泰尔马克州首府
  // ================================================================

  {
    iata: 'GRZ',
    icao: 'LOWG',
    chinese: '格拉茨机场',
    english: 'Graz Airport',
    city: '格拉茨',
    province: '施泰尔马克州',
    country: '奥地利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 46.9911, lng: 15.4397 },
    runways: 1,
    priority: 85, // 🏛️ 奥地利第二大城市
    cargo: false
  },

  // ================================================================
  // 📍 林茨 - 上奥地利州首府
  // ================================================================

  {
    iata: 'LNZ',
    icao: 'LOWL',
    chinese: '林茨机场',
    english: 'Linz Airport',
    city: '林茨',
    province: '上奥地利州',
    country: '奥地利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 48.2333, lng: 14.1875 },
    runways: 1,
    priority: 80, // 🏭 重要工业城市
    cargo: true
  },

  // ================================================================
  // 📍 克拉根福 - 克恩顿州首府
  // ================================================================

  {
    iata: 'KLU',
    icao: 'LOWK',
    chinese: '克拉根福机场',
    english: 'Klagenfurt Airport',
    city: '克拉根福',
    province: '克恩顿州',
    country: '奥地利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 46.6425, lng: 14.3378 },
    runways: 1,
    priority: 78, // 🏔️ 南部阿尔卑斯山区门户
    cargo: false
  },

  // ================================================================
  // 📍 布雷根茨 - 福拉尔贝格州
  // ================================================================

  {
    iata: 'HOH',
    icao: 'LOIH',
    chinese: '布雷根茨霍恩机场',
    english: 'Hohenems-Dornbirn Airport',
    city: '布雷根茨',
    province: '福拉尔贝格州',
    country: '奥地利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.3847, lng: 9.7008 },
    runways: 1,
    priority: 75, // 🏔️ 西部阿尔卑斯山区
    cargo: false
  },

  // ================================================================
  // 📍 威纳诺伊施塔特 - 下奥地利州
  // ================================================================

  {
    iata: 'WR',
    icao: 'LOAN',
    chinese: '威纳诺伊施塔特东机场',
    english: 'Wiener Neustadt East Airport',
    city: '威纳诺伊施塔特',
    province: '下奥地利州',
    country: '奥地利',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 47.8431, lng: 16.2597 },
    runways: 1,
    priority: 70, // 🎓 航空训练基地
    cargo: false
  }

];

// 导出统计信息
export const austriaAirportStats = {
  totalAirports: austriaEnhancedAirports.length,
  internationalAirports: austriaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: austriaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: austriaEnhancedAirports.filter(apt => apt.cargo).length,
  states: [...new Set(austriaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: austriaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '奥地利主要州和地区完整覆盖',
  specialFeatures: [
    '🥇 维也纳国际机场 - 奥地利最大机场，中欧重要枢纽',
    '🎼 萨尔茨堡莫扎特机场 - 音乐之都，世界文化遗产',
    '⛷️ 因斯布鲁克机场 - 阿尔卑斯山心脏，冬奥会主办城市',
    '🏛️ 格拉茨机场 - 奥地利第二大城市',
    '🏭 林茨机场 - 重要工业城市，多瑙河航运枢纽',
    '🏔️ 阿尔卑斯山区机场网络 - 因斯布鲁克、克拉根福等山区门户'
  ]
};
