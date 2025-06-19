// 🇳🇴 挪威机场数据库 - 增强版本
// Norway Enhanced Airport Database
// 第三十二批机场数据库 - 欧洲大洲继续

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
// 🇳🇴 挪威王国机场数据库 - 15个主要机场
// 覆盖挪威主要地区：东挪威、西挪威、特伦德拉格、北挪威、斯瓦尔巴
// 北欧石油王国，峡湾特色，北极门户
// ================================================================

export const norwayEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 奥斯陆 - 挪威首都，最大航空枢纽
  // ================================================================

  {
    iata: 'OSL',
    icao: 'ENGM',
    chinese: '奥斯陆加勒穆恩机场',
    english: 'Oslo Gardermoen Airport',
    city: '奥斯陆',
    province: '阿克什胡斯',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 60.1939, lng: 11.1004 },
    runways: 2,
    priority: 100, // 🥇 挪威最大国际机场，北欧重要枢纽
    hub: ['北欧航空', 'Norwegian Air'],
    cargo: true
  },

  // ================================================================
  // 📍 卑尔根 - 西海岸峡湾门户
  // ================================================================

  {
    iata: 'BGO',
    icao: 'ENBR',
    chinese: '卑尔根弗莱斯兰机场',
    english: 'Bergen Flesland Airport',
    city: '卑尔根',
    province: '霍达兰',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 60.2934, lng: 5.2181 },
    runways: 1,
    priority: 95, // 🏔️ 峡湾门户，西海岸最大机场
    cargo: true
  },

  // ================================================================
  // 📍 斯塔万格 - 石油之都
  // ================================================================

  {
    iata: 'SVG',
    icao: 'ENZV',
    chinese: '斯塔万格索拉机场',
    english: 'Stavanger Sola Airport',
    city: '斯塔万格',
    province: '罗加兰',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 58.8767, lng: 5.6378 },
    runways: 1,
    priority: 92, // ⛽ 石油之都，海上钻井平台门户
    cargo: true
  },

  // ================================================================
  // 📍 特隆赫姆 - 中部重要城市
  // ================================================================

  {
    iata: 'TRD',
    icao: 'ENVA',
    chinese: '特隆赫姆韦尔内斯机场',
    english: 'Trondheim Værnes Airport',
    city: '特隆赫姆',
    province: '南特伦德拉格',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 63.4578, lng: 10.9239 },
    runways: 1,
    priority: 88, // 🏛️ 古都特隆赫姆，中部地区枢纽
    cargo: false
  },

  // ================================================================
  // 📍 克里斯蒂安桑 - 南部门户
  // ================================================================

  {
    iata: 'KRS',
    icao: 'ENCN',
    chinese: '克里斯蒂安桑机场',
    english: 'Kristiansand Airport',
    city: '克里斯蒂安桑',
    province: '西阿格德尔',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 58.2042, lng: 8.0853 },
    runways: 1,
    priority: 85, // 🌊 南部海岸门户
    cargo: false
  },

  // ================================================================
  // 📍 奥勒松 - 峡湾旅游中心
  // ================================================================

  {
    iata: 'AES',
    icao: 'ENAL',
    chinese: '奥勒松维格拉机场',
    english: 'Ålesund Vigra Airport',
    city: '奥勒松',
    province: '默勒-鲁姆斯达尔',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 62.5603, lng: 6.1197 },
    runways: 1,
    priority: 82, // 🏔️ 峡湾旅游中心，盖朗厄尔峡湾门户
    cargo: false
  },

  // ================================================================
  // 📍 博德 - 北部重要城市
  // ================================================================

  {
    iata: 'BOO',
    icao: 'ENBO',
    chinese: '博德机场',
    english: 'Bodø Airport',
    city: '博德',
    province: '诺尔兰',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 67.2692, lng: 14.3653 },
    runways: 1,
    priority: 80, // 🌌 北极圈门户，罗弗敦群岛中转
    cargo: false
  },

  // ================================================================
  // 📍 特罗姆瑟 - 北极之都
  // ================================================================

  {
    iata: 'TOS',
    icao: 'ENTC',
    chinese: '特罗姆瑟机场',
    english: 'Tromsø Airport',
    city: '特罗姆瑟',
    province: '特罗姆斯',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 69.6833, lng: 18.9189 },
    runways: 1,
    priority: 85, // ❄️ 北极之都，极光旅游中心
    cargo: false
  },

  // ================================================================
  // 📍 阿尔塔 - 最北机场
  // ================================================================

  {
    iata: 'ALF',
    icao: 'ENAT',
    chinese: '阿尔塔机场',
    english: 'Alta Airport',
    city: '阿尔塔',
    province: '芬马克',
    country: '挪威',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 69.9761, lng: 23.3717 },
    runways: 1,
    priority: 78, // 🌌 挪威大陆最北机场
    cargo: false
  },

  // ================================================================
  // 📍 朗伊尔城 - 斯瓦尔巴群岛
  // ================================================================

  {
    iata: 'LYR',
    icao: 'ENSB',
    chinese: '朗伊尔城机场',
    english: 'Longyearbyen Airport',
    city: '朗伊尔城',
    province: '斯瓦尔巴',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 78.2461, lng: 15.4656 },
    runways: 1,
    priority: 88, // 🏔️ 世界最北机场，北极科研门户
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'TRF',
    icao: 'ENTF',
    chinese: '桑德尔福德托普机场',
    english: 'Sandefjord Torp Airport',
    city: '桑德尔福德',
    province: '韦斯特福尔',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 59.1867, lng: 10.2586 },
    runways: 1,
    priority: 83, // ✈️ 低成本航空枢纽
    hub: ['Ryanair', 'Wizz Air'],
    cargo: false
  },

  {
    iata: 'MOL',
    icao: 'ENML',
    chinese: '莫尔德机场',
    english: 'Molde Airport',
    city: '莫尔德',
    province: '默勒-鲁姆斯达尔',
    country: '挪威',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 62.7447, lng: 7.2625 },
    runways: 1,
    priority: 75, // 🎵 玫瑰之城，爵士音乐节
    cargo: false
  },

  {
    iata: 'KKN',
    icao: 'ENKR',
    chinese: '柯克内斯机场',
    english: 'Kirkenes Airport',
    city: '柯克内斯',
    province: '芬马克',
    country: '挪威',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 69.7258, lng: 29.8914 },
    runways: 1,
    priority: 72, // 🌍 挪威最东端，俄罗斯边境
    cargo: false
  },

  {
    iata: 'EVE',
    icao: 'ENEV',
    chinese: '埃沃内斯机场',
    english: 'Evenes Airport',
    city: '纳尔维克',
    province: '诺尔兰',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 68.4913, lng: 16.6781 },
    runways: 1,
    priority: 77, // ⛷️ 罗弗敦群岛门户，滑雪胜地
    cargo: false
  },

  {
    iata: 'HAU',
    icao: 'ENHD',
    chinese: '豪格松机场',
    english: 'Haugesund Airport',
    city: '豪格松',
    province: '罗加兰',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 59.3453, lng: 5.2086 },
    runways: 1,
    priority: 74, // 🛢️ 北海石油基地
    cargo: false
  }

];

// 导出统计信息
export const norwayAirportStats = {
  totalAirports: norwayEnhancedAirports.length,
  internationalAirports: norwayEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: norwayEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: norwayEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(norwayEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: norwayEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '挪威全国地区完整覆盖',
  specialFeatures: [
    '🥇 奥斯陆机场 - 挪威最大国际机场，北欧重要枢纽',
    '🏔️ 卑尔根机场 - 峡湾门户，西海岸最大机场',
    '⛽ 斯塔万格机场 - 石油之都，海上钻井平台门户',
    '🏔️ 朗伊尔城机场 - 世界最北机场，北极科研门户',
    '❄️ 特罗姆瑟机场 - 北极之都，极光旅游中心',
    '🏛️ 特隆赫姆机场 - 古都特隆赫姆，中部地区枢纽'
  ]
};
