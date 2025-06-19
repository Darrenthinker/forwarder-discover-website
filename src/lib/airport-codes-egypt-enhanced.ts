// 🇪🇬 埃及机场数据库 - 增强版本
// Egypt Enhanced Airport Database
// 第二十二批机场数据库 - 非洲大洲扩展

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  city: string;
  governorate: string;
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
// 🇪🇬 阿拉伯埃及共和国机场数据库 - 15个主要机场
// 覆盖3大地理区域：尼罗河三角洲、上埃及、红海沿岸
// 27个省份中的主要航空枢纽
// ================================================================

export const egyptEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 尼罗河三角洲和开罗地区 - 政治经济中心
  // ================================================================

  {
    iata: 'CAI',
    icao: 'HECA',
    chinese: '开罗国际机场',
    english: 'Cairo International Airport',
    city: '开罗',
    governorate: '开罗省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 30.1219, lng: 31.4056 },
    runways: 3,
    priority: 100, // 🥇 中东非洲重要航空枢纽
    hub: ['埃及航空', '尼罗航空'],
    cargo: true
  },

  {
    iata: 'SPX',
    icao: 'HEAX',
    chinese: '斯芬克斯国际机场',
    english: 'Sphinx International Airport',
    city: '吉萨',
    governorate: '吉萨省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 30.1194, lng: 31.2856 },
    runways: 1,
    priority: 85, // 🔺 开罗新机场，金字塔附近
    cargo: true
  },

  {
    iata: 'ALY',
    icao: 'HEAX',
    chinese: '亚历山大伯格阿拉伯机场',
    english: 'Alexandria Borg El Arab Airport',
    city: '亚历山大',
    governorate: '亚历山大省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 30.9177, lng: 29.6964 },
    runways: 1,
    priority: 88, // 🌊 地中海重要港口城市
    hub: ['埃及航空'],
    cargo: true
  },

  {
    iata: 'HBE',
    icao: 'HEBL',
    chinese: '亚历山大国际机场',
    english: 'Alexandria International Airport',
    city: '亚历山大',
    governorate: '亚历山大省',
    country: '埃及',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 31.1839, lng: 29.9489 },
    runways: 1,
    priority: 75, // 🏛️ 历史名城机场
    cargo: false
  },

  // ================================================================
  // 📍 红海沿岸 - 旅游度假胜地
  // ================================================================

  {
    iata: 'SSH',
    icao: 'HESH',
    chinese: '沙姆沙伊赫国际机场',
    english: 'Sharm El Sheikh International Airport',
    city: '沙姆沙伊赫',
    governorate: '南西奈省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 27.9773, lng: 34.3950 },
    runways: 2,
    priority: 92, // 🏖️ 世界级红海度假胜地
    hub: ['埃及航空'],
    cargo: false
  },

  {
    iata: 'HRG',
    icao: 'HEGN',
    chinese: '赫尔格达国际机场',
    english: 'Hurghada International Airport',
    city: '赫尔格达',
    governorate: '红海省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 27.1783, lng: 33.7994 },
    runways: 1,
    priority: 90, // 🤿 红海潜水旅游中心
    hub: ['埃及航空'],
    cargo: false
  },

  {
    iata: 'MUH',
    icao: 'HEMA',
    chinese: '马萨阿拉姆国际机场',
    english: 'Marsa Alam International Airport',
    city: '马萨阿拉姆',
    governorate: '红海省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 25.5571, lng: 34.5837 },
    runways: 1,
    priority: 80, // 🏖️ 南红海旅游门户
    cargo: false
  },

  // ================================================================
  // 📍 上埃及 - 尼罗河谷地
  // ================================================================

  {
    iata: 'LXR',
    icao: 'HELX',
    chinese: '卢克索国际机场',
    english: 'Luxor International Airport',
    city: '卢克索',
    governorate: '卢克索省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 25.6710, lng: 32.7066 },
    runways: 1,
    priority: 87, // 🏺 古埃及文明遗址门户
    hub: ['埃及航空'],
    cargo: false
  },

  {
    iata: 'ASW',
    icao: 'HESN',
    chinese: '阿斯旺国际机场',
    english: 'Aswan International Airport',
    city: '阿斯旺',
    governorate: '阿斯旺省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 23.9644, lng: 32.8200 },
    runways: 1,
    priority: 82, // 🌊 尼罗河最南端重要城市
    cargo: false
  },

  {
    iata: 'ABU',
    icao: 'HEAX',
    chinese: '阿布辛贝勒机场',
    english: 'Abu Simbel Airport',
    city: '阿布辛贝勒',
    governorate: '阿斯旺省',
    country: '埃及',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 22.3758, lng: 31.6117 },
    runways: 1,
    priority: 78, // 🏛️ 拉美西斯二世神庙
    cargo: false
  },

  // ================================================================
  // 📍 西奈半岛 - 战略要地
  // ================================================================

  {
    iata: 'ELT',
    icao: 'HEAT',
    chinese: '埃拉里什国际机场',
    english: 'El Arish International Airport',
    city: '埃拉里什',
    governorate: '北西奈省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 31.0733, lng: 33.8358 },
    runways: 1,
    priority: 70, // 🗺️ 西奈半岛北部门户
    cargo: false
  },

  {
    iata: 'TCP',
    icao: 'HETB',
    chinese: '塔巴国际机场',
    english: 'Taba International Airport',
    city: '塔巴',
    governorate: '南西奈省',
    country: '埃及',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 29.5878, lng: 34.7781 },
    runways: 1,
    priority: 72, // 🏔️ 西奈山区域旅游
    cargo: false
  },

  // ================================================================
  // 📍 其他重要城市
  // ================================================================

  {
    iata: 'UVL',
    icao: 'HEOW',
    chinese: '新河谷机场',
    english: 'New Valley Airport',
    city: '哈里杰',
    governorate: '新河谷省',
    country: '埃及',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 25.4833, lng: 30.5833 },
    runways: 1,
    priority: 65, // 🏜️ 西部沙漠绿洲
    cargo: false
  },

  {
    iata: 'ATZ',
    icao: 'HEAT',
    chinese: '阿西乌特机场',
    english: 'Asyut Airport',
    city: '阿西乌特',
    governorate: '阿西乌特省',
    country: '埃及',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 27.0467, lng: 31.0119 },
    runways: 1,
    priority: 68, // 🌾 上埃及农业中心
    cargo: false
  },

  {
    iata: 'EMY',
    icao: 'HEEM',
    chinese: '埃尔米尼亚机场',
    english: 'El Minya Airport',
    city: '明亚',
    governorate: '明亚省',
    country: '埃及',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 28.0967, lng: 30.7450 },
    runways: 1,
    priority: 62, // 🏺 中埃及考古重镇
    cargo: false
  }

];

// 导出统计信息
export const egyptAirportStats = {
  totalAirports: egyptEnhancedAirports.length,
  internationalAirports: egyptEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: egyptEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: egyptEnhancedAirports.filter(apt => apt.cargo).length,
  governorates: [...new Set(egyptEnhancedAirports.map(apt => apt.governorate))].length,
  hubAirports: egyptEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '埃及3大地理区域完整覆盖',
  specialFeatures: [
    '🥇 开罗国际机场 - 中东非洲重要航空枢纽',
    '🏖️ 红海度假胜地 - 沙姆沙伊赫、赫尔格达世界级旅游目的地',
    '🏺 古埃及文明门户 - 卢克索、阿斯旺考古旅游中心',
    '🔺 金字塔新机场 - 斯芬克斯国际机场服务世界奇迹',
    '🌊 地中海明珠 - 亚历山大古城现代航空枢纽',
    '🗺️ 西奈半岛门户 - 连接亚非大陆的战略要地'
  ]
};
