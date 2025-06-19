// 🇨🇿 捷克机场数据库 - 增强版本
// Czech Republic Enhanced Airport Database
// 第三十四批机场数据库 - 欧洲大洲继续

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
// 🇨🇿 捷克共和国机场数据库 - 12个主要机场
// 覆盖捷克主要地区：波希米亚、摩拉维亚、西里西亚
// 中欧文化中心，百塔之城，历史名城
// ================================================================

export const czechEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 布拉格 - 捷克首都，黄金之城
  // ================================================================

  {
    iata: 'PRG',
    icao: 'LKPR',
    chinese: '布拉格瓦茨拉夫·哈维尔机场',
    english: 'Prague Václav Havel Airport',
    city: '布拉格',
    province: '布拉格市',
    country: '捷克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.1008, lng: 14.2600 },
    runways: 2,
    priority: 100, // 🥇 捷克最大国际机场，中欧重要枢纽
    hub: ['捷克航空', 'Smartwings'],
    cargo: true
  },

  // ================================================================
  // 📍 布尔诺 - 摩拉维亚首府
  // ================================================================

  {
    iata: 'BRQ',
    icao: 'LKTB',
    chinese: '布尔诺图拉尼机场',
    english: 'Brno-Tuřany Airport',
    city: '布尔诺',
    province: '南摩拉维亚',
    country: '捷克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 49.1513, lng: 16.6944 },
    runways: 1,
    priority: 85, // 🏛️ 摩拉维亚首府，工业中心
    cargo: false
  },

  // ================================================================
  // 📍 俄斯特拉发 - 西里西亚重要城市
  // ================================================================

  {
    iata: 'OSR',
    icao: 'LKMT',
    chinese: '俄斯特拉发机场',
    english: 'Ostrava Airport',
    city: '俄斯特拉发',
    province: '摩拉维亚-西里西亚',
    country: '捷克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 49.6963, lng: 18.1111 },
    runways: 1,
    priority: 82, // 🏭 工业城市，波兰边境
    cargo: false
  },

  // ================================================================
  // 📍 卡罗维发利 - 温泉城市
  // ================================================================

  {
    iata: 'KLV',
    icao: 'LKKV',
    chinese: '卡罗维发利机场',
    english: 'Karlovy Vary Airport',
    city: '卡罗维发利',
    province: '卡罗维发利',
    country: '捷克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.2020, lng: 12.9150 },
    runways: 1,
    priority: 78, // 🛁 世界著名温泉城市
    cargo: false
  },

  // ================================================================
  // 📍 帕尔杜比采 - 东波希米亚
  // ================================================================

  {
    iata: 'PED',
    icao: 'LKPD',
    chinese: '帕尔杜比采机场',
    english: 'Pardubice Airport',
    city: '帕尔杜比采',
    province: '帕尔杜比采',
    country: '捷克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 50.0134, lng: 15.7386 },
    runways: 1,
    priority: 75, // 🏰 东波希米亚重要城市
    cargo: true
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'HLF',
    icao: 'LKHF',
    chinese: '赫拉德茨-克拉洛韦机场',
    english: 'Hradec Králové Airport',
    city: '赫拉德茨-克拉洛韦',
    province: '赫拉德茨-克拉洛韦',
    country: '捷克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 50.2533, lng: 15.8450 },
    runways: 1,
    priority: 72, // 🏛️ 东波希米亚文化中心
    cargo: false
  },

  {
    iata: 'UHE',
    icao: 'LKUL',
    chinese: '库诺维采机场',
    english: 'Kunovice Airport',
    city: '乌赫尔斯凯-赫拉迪什泰',
    province: '兹林',
    country: '捷克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 49.0294, lng: 17.4397 },
    runways: 1,
    priority: 70, // ✈️ 通用航空基地
    cargo: false
  },

  {
    iata: 'LBC',
    icao: 'LKLB',
    chinese: '利贝雷茨机场',
    english: 'Liberec Airport',
    city: '利贝雷茨',
    province: '利贝雷茨',
    country: '捷克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 50.7661, lng: 15.0281 },
    runways: 1,
    priority: 68, // 🏔️ 北波希米亚山区
    cargo: false
  },

  {
    iata: 'TAB',
    icao: 'LKTB',
    chinese: '塔博尔机场',
    english: 'Tábor Airport',
    city: '塔博尔',
    province: '南波希米亚',
    country: '捷克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 49.4145, lng: 14.6636 },
    runways: 1,
    priority: 65, // 🏰 南波希米亚历史城市
    cargo: false
  },

  {
    iata: 'PLZ',
    icao: 'LKLN',
    chinese: '皮尔森机场',
    english: 'Plzen Airport',
    city: '皮尔森',
    province: '皮尔森',
    country: '捷克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 49.6758, lng: 13.2972 },
    runways: 1,
    priority: 73, // 🍺 皮尔森啤酒发源地
    cargo: false
  },

  {
    iata: 'ZLN',
    icao: 'LKZL',
    chinese: '兹林机场',
    english: 'Zlín Airport',
    city: '兹林',
    province: '兹林',
    country: '捷克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 49.2317, lng: 17.6117 },
    runways: 1,
    priority: 67, // 🏭 东摩拉维亚工业城市
    cargo: false
  },

  {
    iata: 'CBK',
    icao: 'LKCB',
    chinese: '切斯凯布杰约维采机场',
    english: 'České Budějovice Airport',
    city: '切斯凯布杰约维采',
    province: '南波希米亚',
    country: '捷克',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 48.9464, lng: 14.4275 },
    runways: 1,
    priority: 69, // 🍺 百威啤酒发源地
    cargo: false
  }

];

// 导出统计信息
export const czechAirportStats = {
  totalAirports: czechEnhancedAirports.length,
  internationalAirports: czechEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: czechEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: czechEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(czechEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: czechEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '捷克三大历史地区完整覆盖',
  specialFeatures: [
    '🥇 布拉格机场 - 捷克最大国际机场，百塔之城门户',
    '🏛️ 布尔诺机场 - 摩拉维亚首府，工业中心',
    '🏭 俄斯特拉发机场 - 西里西亚工业城市，波兰边境',
    '🛁 卡罗维发利机场 - 世界著名温泉城市',
    '🍺 皮尔森机场 - 皮尔森啤酒发源地',
    '🍺 切斯凯布杰约维采机场 - 百威啤酒发源地'
  ]
};
