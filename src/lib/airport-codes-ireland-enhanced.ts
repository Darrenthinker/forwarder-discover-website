// 🇮🇪 爱尔兰机场数据库 - 增强版本
// Ireland Enhanced Airport Database
// 第五十六批机场数据库 - 欧洲大洲继续

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
// 🇮🇪 爱尔兰共和国机场数据库 - 12个主要机场
// 覆盖爱尔兰主要地区：都柏林、科克、香农、戈尔韦等
// 翡翠岛国，凯尔特文化发源地，英语世界重要成员
// ================================================================

export const irelandEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 都柏林 - 爱尔兰首都，最大航空枢纽
  // ================================================================

  {
    iata: 'DUB',
    icao: 'EIDW',
    chinese: '都柏林机场',
    english: 'Dublin Airport',
    city: '都柏林',
    province: '伦斯特省',
    country: '爱尔兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 53.4213, lng: -6.2701 },
    runways: 2,
    priority: 100, // 🥇 爱尔兰最大国际机场，欧洲重要枢纽
    hub: ['Aer Lingus', 'Ryanair'],
    cargo: true
  },

  // ================================================================
  // 📍 科克 - 爱尔兰第二大城市
  // ================================================================

  {
    iata: 'ORK',
    icao: 'EICK',
    chinese: '科克机场',
    english: 'Cork Airport',
    city: '科克',
    province: '芒斯特省',
    country: '爱尔兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 51.8413, lng: -8.4811 },
    runways: 1,
    priority: 95, // 🏛️ 爱尔兰第二大城市，南部重要门户
    cargo: true
  },

  // ================================================================
  // 📍 香农 - 西部重要国际机场
  // ================================================================

  {
    iata: 'SNN',
    icao: 'EINN',
    chinese: '香农机场',
    english: 'Shannon Airport',
    city: '香农',
    province: '芒斯特省',
    country: '爱尔兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 52.7019, lng: -8.9248 },
    runways: 1,
    priority: 92, // ✈️ 世界首个免税店机场，跨大西洋中转枢纽
    cargo: true
  },

  // ================================================================
  // 📍 诺克 - 西部重要机场
  // ================================================================

  {
    iata: 'NOC',
    icao: 'EIKN',
    chinese: '爱尔兰西部诺克机场',
    english: 'Ireland West Airport Knock',
    city: '诺克',
    province: '康诺特省',
    country: '爱尔兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 53.9103, lng: -8.8185 },
    runways: 1,
    priority: 88, // 🙏 圣母朝圣地机场，西部重要门户
    cargo: false
  },

  // ================================================================
  // 📍 克里国际机场 - 南部旅游重镇
  // ================================================================

  {
    iata: 'KIR',
    icao: 'EIKY',
    chinese: '克里机场',
    english: 'Kerry Airport',
    city: '法拉菲',
    province: '芒斯特省',
    country: '爱尔兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 52.1808, lng: -9.5678 },
    runways: 1,
    priority: 85, // 🏔️ 凯尔特文化圈，丁格尔半岛门户
    cargo: false
  },

  // ================================================================
  // 📍 沃特福德 - 东南部重要城市
  // ================================================================

  {
    iata: 'WAT',
    icao: 'EIWF',
    chinese: '沃特福德机场',
    english: 'Waterford Airport',
    city: '沃特福德',
    province: '芒斯特省',
    country: '爱尔兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 52.1872, lng: -7.0869 },
    runways: 1,
    priority: 82, // 💎 沃特福德水晶故乡，东南部门户
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'SXL',
    icao: 'EISL',
    chinese: '斯莱戈机场',
    english: 'Sligo Airport',
    city: '斯莱戈',
    province: '康诺特省',
    country: '爱尔兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 54.2803, lng: -8.5992 },
    runways: 1,
    priority: 78, // 📖 叶芝故乡，诗人之城
    cargo: false
  },

  {
    iata: 'GWY',
    icao: 'EICM',
    chinese: '戈尔韦机场',
    english: 'Galway Airport',
    city: '戈尔韦',
    province: '康诺特省',
    country: '爱尔兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 53.3003, lng: -8.9411 },
    runways: 1,
    priority: 80, // 🎭 文化之都，阿兰群岛门户
    cargo: false
  },

  {
    iata: 'LTR',
    icao: 'EILT',
    chinese: '莱特肯尼机场',
    english: 'Letterkenny Airport',
    city: '莱特肯尼',
    province: '阿尔斯特省',
    country: '爱尔兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 55.0383, lng: -7.6719 },
    runways: 1,
    priority: 75, // 🏔️ 北部山区，多尼戈尔郡
    cargo: false
  },

  {
    iata: 'CFN',
    icao: 'EICF',
    chinese: '卡里克芬机场',
    english: 'Carrickfinn Airport',
    city: '卡里克芬',
    province: '阿尔斯特省',
    country: '爱尔兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 55.0442, lng: -8.3411 },
    runways: 1,
    priority: 72, // 🌊 大西洋海岸，盖尔语区
    cargo: false
  },

  {
    iata: 'IOR',
    icao: 'EIIR',
    chinese: '伊尼什莫尔机场',
    english: 'Inishmore Airport',
    city: '伊尼什莫尔',
    province: '康诺特省',
    country: '爱尔兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 53.1067, lng: -9.6539 },
    runways: 1,
    priority: 70, // 🏝️ 阿兰群岛最大岛，凯尔特文化保护区
    cargo: false
  },

  {
    iata: 'IIA',
    icao: 'EIIM',
    chinese: '伊尼什曼机场',
    english: 'Inishmaan Airport',
    city: '伊尼什曼',
    province: '康诺特省',
    country: '爱尔兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 53.0931, lng: -9.5681 },
    runways: 1,
    priority: 68, // 🏝️ 阿兰群岛中岛，传统文化中心
    cargo: false
  }

];

// 导出统计信息
export const irelandAirportStats = {
  totalAirports: irelandEnhancedAirports.length,
  internationalAirports: irelandEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: irelandEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: irelandEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(irelandEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: irelandEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '爱尔兰全国省份完整覆盖',
  specialFeatures: [
    '🥇 都柏林机场 - 爱尔兰最大国际机场，欧洲重要枢纽',
    '🏛️ 科克机场 - 爱尔兰第二大城市，南部重要门户',
    '✈️ 香农机场 - 世界首个免税店机场，跨大西洋中转枢纽',
    '🙏 诺克机场 - 圣母朝圣地机场，西部重要门户',
    '🏔️ 克里机场 - 凯尔特文化圈，丁格尔半岛门户',
    '💎 沃特福德机场 - 沃特福德水晶故乡，东南部门户',
    '📖 斯莱戈机场 - 叶芝故乡，诗人之城',
    '🎭 戈尔韦机场 - 文化之都，阿兰群岛门户',
    '🏝️ 阿兰群岛机场群 - 凯尔特文化最后堡垒',
    '🍀 翡翠岛国 - 绿色爱尔兰，凯尔特文化发源地'
  ]
};
