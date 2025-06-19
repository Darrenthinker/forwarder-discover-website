// 🇸🇪 瑞典机场数据库 - 增强版本
// Sweden Enhanced Airport Database
// 第三十一批机场数据库 - 欧洲大洲继续

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
// 🇸🇪 瑞典王国机场数据库 - 12个主要机场
// 覆盖瑞典主要地区：斯韦阿兰、约塔兰、诺尔兰
// 北欧航空总部，斯堪的纳维亚半岛重要航空枢纽
// ================================================================

export const swedenEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 斯德哥尔摩 - 瑞典首都，北欧航空总部
  // ================================================================

  {
    iata: 'ARN',
    icao: 'ESSA',
    chinese: '斯德哥尔摩阿兰达机场',
    english: 'Stockholm Arlanda Airport',
    city: '斯德哥尔摩',
    province: '斯德哥尔摩省',
    country: '瑞典',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 59.6519, lng: 17.9186 },
    runways: 4,
    priority: 100, // 🥇 北欧航空总部，瑞典最大国际机场
    hub: ['北欧航空', 'Ryanair'],
    cargo: true
  },

  {
    iata: 'BMA',
    icao: 'ESSB',
    chinese: '斯德哥尔摩布罗马机场',
    english: 'Stockholm Bromma Airport',
    city: '斯德哥尔摩',
    province: '斯德哥尔摩省',
    country: '瑞典',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 59.3544, lng: 17.9417 },
    runways: 1,
    priority: 85, // 🏙️ 市中心机场，商务航空
    cargo: false
  },

  {
    iata: 'NYO',
    icao: 'ESKN',
    chinese: '斯德哥尔摩斯卡夫斯塔机场',
    english: 'Stockholm Skavsta Airport',
    city: '尼雪平',
    province: '南曼兰省',
    country: '瑞典',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 58.7886, lng: 16.9122 },
    runways: 1,
    priority: 88, // ✈️ 低成本航空枢纽
    hub: ['Ryanair'],
    cargo: false
  },

  // ================================================================
  // 📍 哥德堡 - 瑞典第二大城市，西海岸门户
  // ================================================================

  {
    iata: 'GOT',
    icao: 'ESGG',
    chinese: '哥德堡兰德维特机场',
    english: 'Gothenburg Landvetter Airport',
    city: '哥德堡',
    province: '西约塔兰省',
    country: '瑞典',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 57.6628, lng: 12.2798 },
    runways: 1,
    priority: 95, // 🚢 西海岸重要港口城市
    cargo: true
  },

  {
    iata: 'GSE',
    icao: 'ESGP',
    chinese: '哥德堡萨韦机场',
    english: 'Gothenburg Save Airport',
    city: '哥德堡',
    province: '西约塔兰省',
    country: '瑞典',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 57.7747, lng: 11.8742 },
    runways: 1,
    priority: 75, // 🏢 商务和通用航空
    cargo: false
  },

  // ================================================================
  // 📍 马尔默 - 南部重要城市，厄勒海峡门户
  // ================================================================

  {
    iata: 'MMX',
    icao: 'ESMS',
    chinese: '马尔默机场',
    english: 'Malmö Airport',
    city: '马尔默',
    province: '斯科纳省',
    country: '瑞典',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 55.5363, lng: 13.3764 },
    runways: 1,
    priority: 92, // 🌉 厄勒海峡大桥门户，连接丹麦
    cargo: false
  },

  // ================================================================
  // 📍 其他重要城市机场
  // ================================================================

  {
    iata: 'UME',
    icao: 'ESNU',
    chinese: '于默奥机场',
    english: 'Umeå Airport',
    city: '于默奥',
    province: '西博滕省',
    country: '瑞典',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 63.7918, lng: 20.2828 },
    runways: 1,
    priority: 82, // 🌲 北部林业中心
    cargo: false
  },

  {
    iata: 'LLA',
    icao: 'ESPA',
    chinese: '吕勒奥机场',
    english: 'Luleå Airport',
    city: '吕勒奥',
    province: '北博滕省',
    country: '瑞典',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 65.5439, lng: 22.1222 },
    runways: 1,
    priority: 80, // ⛏️ 北部矿业中心
    cargo: false
  },

  {
    iata: 'KRN',
    icao: 'ESNQ',
    chinese: '基律纳机场',
    english: 'Kiruna Airport',
    city: '基律纳',
    province: '北博滕省',
    country: '瑞典',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 67.8220, lng: 20.3368 },
    runways: 1,
    priority: 78, // 🌌 北极圈内，极光旅游
    cargo: false
  },

  {
    iata: 'VXO',
    icao: 'ESMX',
    chinese: '韦克舍机场',
    english: 'Växjö Airport',
    city: '韦克舍',
    province: '克鲁努贝里省',
    country: '瑞典',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 56.9291, lng: 14.7280 },
    runways: 1,
    priority: 72, // 🌲 南部森林地区
    cargo: false
  },

  {
    iata: 'KLR',
    icao: 'ESMQ',
    chinese: '卡尔马机场',
    english: 'Kalmar Airport',
    city: '卡尔马',
    province: '卡尔马省',
    country: '瑞典',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 56.6855, lng: 16.2876 },
    runways: 1,
    priority: 70, // 🏰 历史古城，波罗的海门户
    cargo: false
  },

  {
    iata: 'VBY',
    icao: 'ESMV',
    chinese: '维斯比机场',
    english: 'Visby Airport',
    city: '维斯比',
    province: '哥特兰省',
    country: '瑞典',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 57.6628, lng: 18.3464 },
    runways: 1,
    priority: 76, // 🏝️ 哥特兰岛，中世纪古城
    cargo: false
  }

];

// 导出统计信息
export const swedenAirportStats = {
  totalAirports: swedenEnhancedAirports.length,
  internationalAirports: swedenEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: swedenEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: swedenEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(swedenEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: swedenEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '瑞典主要省份完整覆盖',
  specialFeatures: [
    '🥇 阿兰达机场 - 北欧航空总部，瑞典最大国际机场',
    '🚢 哥德堡机场 - 西海岸重要港口城市门户',
    '🌉 马尔默机场 - 厄勒海峡大桥门户，连接丹麦',
    '🏙️ 布罗马机场 - 斯德哥尔摩市中心商务机场',
    '🌌 基律纳机场 - 北极圈内机场，极光旅游门户',
    '🏝️ 维斯比机场 - 哥特兰岛中世纪古城门户'
  ]
};
