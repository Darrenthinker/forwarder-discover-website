// 🇫🇮 芬兰机场数据库 - 增强版本
// Finland Enhanced Airport Database
// 第三十三批机场数据库 - 欧洲大洲继续

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
// 🇫🇮 芬兰共和国机场数据库 - 12个主要机场
// 覆盖芬兰主要地区：南芬兰、西芬兰、东芬兰、北芬兰、拉普兰
// 千湖之国，圣诞老人故乡，北欧四国之一
// ================================================================

export const finlandEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 赫尔辛基 - 芬兰首都，最大航空枢纽
  // ================================================================

  {
    iata: 'HEL',
    icao: 'EFHK',
    chinese: '赫尔辛基万塔机场',
    english: 'Helsinki Vantaa Airport',
    city: '赫尔辛基',
    province: '新地区',
    country: '芬兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 60.3172, lng: 24.9633 },
    runways: 3,
    priority: 100, // 🥇 芬兰最大国际机场，北欧重要枢纽
    hub: ['芬兰航空', 'Norwegian Air'],
    cargo: true
  },

  // ================================================================
  // 📍 坦佩雷 - 芬兰第二大城市
  // ================================================================

  {
    iata: 'TMP',
    icao: 'EFTP',
    chinese: '坦佩雷皮尔卡拉机场',
    english: 'Tampere-Pirkkala Airport',
    city: '坦佩雷',
    province: '皮尔卡马',
    country: '芬兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 61.4141, lng: 23.6044 },
    runways: 1,
    priority: 88, // 🏭 工业城市，芬兰第二大城
    cargo: false
  },

  // ================================================================
  // 📍 图尔库 - 芬兰古都
  // ================================================================

  {
    iata: 'TKU',
    icao: 'EFTU',
    chinese: '图尔库机场',
    english: 'Turku Airport',
    city: '图尔库',
    province: '西南芬兰',
    country: '芬兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 60.5141, lng: 22.2628 },
    runways: 1,
    priority: 85, // 🏰 芬兰古都，历史文化中心
    cargo: false
  },

  // ================================================================
  // 📍 奥卢 - 北部重要城市
  // ================================================================

  {
    iata: 'OUL',
    icao: 'EFOU',
    chinese: '奥卢机场',
    english: 'Oulu Airport',
    city: '奥卢',
    province: '北博滕',
    country: '芬兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 64.9301, lng: 25.3544 },
    runways: 1,
    priority: 82, // 🌨️ 北部门户，科技城市
    cargo: false
  },

  // ================================================================
  // 📍 罗瓦涅米 - 圣诞老人故乡
  // ================================================================

  {
    iata: 'RVN',
    icao: 'EFRO',
    chinese: '罗瓦涅米机场',
    english: 'Rovaniemi Airport',
    city: '罗瓦涅米',
    province: '拉普兰',
    country: '芬兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 66.5648, lng: 25.8304 },
    runways: 1,
    priority: 90, // 🎅 圣诞老人故乡，北极圈旅游门户
    cargo: false
  },

  // ================================================================
  // 📍 约恩苏 - 东芬兰重要城市
  // ================================================================

  {
    iata: 'JOE',
    icao: 'EFJO',
    chinese: '约恩苏机场',
    english: 'Joensuu Airport',
    city: '约恩苏',
    province: '北卡累利阿',
    country: '芬兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 62.6628, lng: 29.6075 },
    runways: 1,
    priority: 78, // 🌲 东芬兰森林地区
    cargo: false
  },

  // ================================================================
  // 📍 库奥皮奥 - 湖区中心
  // ================================================================

  {
    iata: 'KUO',
    icao: 'EFKU',
    chinese: '库奥皮奥机场',
    english: 'Kuopio Airport',
    city: '库奥皮奥',
    province: '北萨沃',
    country: '芬兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 63.0071, lng: 27.7978 },
    runways: 1,
    priority: 75, // 🏞️ 千湖之国中心地区
    cargo: false
  },

  // ================================================================
  // 📍 瓦萨 - 西海岸重要城市
  // ================================================================

  {
    iata: 'VAA',
    icao: 'EFVA',
    chinese: '瓦萨机场',
    english: 'Vaasa Airport',
    city: '瓦萨',
    province: '博滕湾',
    country: '芬兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 63.0507, lng: 21.7622 },
    runways: 1,
    priority: 80, // 🌊 西海岸重要港口
    cargo: false
  },

  // ================================================================
  // 📍 凯米-托尔尼奥 - 最北机场
  // ================================================================

  {
    iata: 'KEM',
    icao: 'EFKE',
    chinese: '凯米-托尔尼奥机场',
    english: 'Kemi-Tornio Airport',
    city: '凯米',
    province: '拉普兰',
    country: '芬兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 65.7787, lng: 24.5821 },
    runways: 1,
    priority: 72, // ❄️ 芬兰最北端，瑞典边境
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'IVL',
    icao: 'EFIV',
    chinese: '伊瓦洛机场',
    english: 'Ivalo Airport',
    city: '伊瓦洛',
    province: '拉普兰',
    country: '芬兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 68.6073, lng: 27.4053 },
    runways: 1,
    priority: 76, // 🌌 北极圈内，极光旅游
    cargo: false
  },

  {
    iata: 'KAJ',
    icao: 'EFKJ',
    chinese: '卡亚尼机场',
    english: 'Kajaani Airport',
    city: '卡亚尼',
    province: '凯努',
    country: '芬兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 64.2855, lng: 27.6924 },
    runways: 1,
    priority: 70, // 🌲 中部森林地区
    cargo: false
  },

  {
    iata: 'MHQ',
    icao: 'EFMA',
    chinese: '马里耶哈姆机场',
    english: 'Mariehamn Airport',
    city: '马里耶哈姆',
    province: '奥兰',
    country: '芬兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 60.1222, lng: 19.8982 },
    runways: 1,
    priority: 74, // 🏝️ 奥兰群岛，自治区首府
    cargo: false
  }

];

// 导出统计信息
export const finlandAirportStats = {
  totalAirports: finlandEnhancedAirports.length,
  internationalAirports: finlandEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: finlandEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: finlandEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(finlandEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: finlandEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '芬兰全国地区完整覆盖',
  specialFeatures: [
    '🥇 赫尔辛基机场 - 芬兰最大国际机场，北欧重要枢纽',
    '🎅 罗瓦涅米机场 - 圣诞老人故乡，北极圈旅游门户',
    '🏭 坦佩雷机场 - 芬兰第二大城市，工业中心',
    '🏰 图尔库机场 - 芬兰古都，历史文化中心',
    '🏝️ 马里耶哈姆机场 - 奥兰群岛自治区首府',
    '🌌 伊瓦洛机场 - 北极圈内，极光旅游门户'
  ]
};
