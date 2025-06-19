// 🇪🇸 西班牙巴利阿里群岛机场数据库 - 增强版本
// Balearic Islands Enhanced Airport Database
// 第六十三批机场数据库 - 地中海南岸扩展继续

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
// 🇪🇸 西班牙巴利阿里群岛机场数据库 - 12个主要机场
// 覆盖地中海重要岛屿：马略卡岛、伊维萨岛、梅诺卡岛、福门特拉岛
// 地中海派对岛屿，欧洲夏季度假天堂，电音文化圣地
// ================================================================

export const spainBalearicEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 马略卡岛 - 巴利阿里群岛最大岛屿
  // ================================================================

  {
    iata: 'PMI',
    icao: 'LEPA',
    chinese: '帕尔马马略卡机场',
    english: 'Palma de Mallorca Airport',
    city: '帕尔马',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 39.5517, lng: 2.7388 },
    runways: 4,
    priority: 100, // 🥇 巴利阿里群岛最大机场，地中海重要度假枢纽
    hub: ['Vueling', 'Air Europa'],
    cargo: true
  },

  {
    iata: 'SQW',
    icao: 'LESQ',
    chinese: '索列尔机场',
    english: 'Sóller Airport',
    city: '索列尔',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 39.7919, lng: 2.7133 },
    runways: 1,
    priority: 78, // 🚁 马略卡岛北部，直升机和小型机场
    cargo: false
  },

  // ================================================================
  // 📍 伊维萨岛 - 世界派对之都
  // ================================================================

  {
    iata: 'IBZ',
    icao: 'LEIB',
    chinese: '伊维萨机场',
    english: 'Ibiza Airport',
    city: '伊维萨',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 38.8729, lng: 1.3731 },
    runways: 1,
    priority: 98, // 🎵 世界派对之都，电音文化圣地
    hub: ['Vueling'],
    cargo: false
  },

  {
    iata: 'ESI',
    icao: 'LEIS',
    chinese: '伊维萨圣安东尼奥机场',
    english: 'Ibiza San Antonio Airport',
    city: '圣安东尼奥',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 38.9714, lng: 1.3064 },
    runways: 1,
    priority: 82, // 🌅 著名日落观赏点，西海岸度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 梅诺卡岛 - 联合国教科文组织生物圈保护区
  // ================================================================

  {
    iata: 'MAH',
    icao: 'LEMH',
    chinese: '梅诺卡机场',
    english: 'Menorca Airport',
    city: '马翁',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 39.8626, lng: 4.2187 },
    runways: 1,
    priority: 92, // 🌿 生物圈保护区，宁静度假天堂
    cargo: false
  },

  {
    iata: 'CDU',
    icao: 'LECI',
    chinese: '西乌达德拉机场',
    english: 'Ciutadella Airport',
    city: '西乌达德拉',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 40.0420, lng: 3.8167 },
    runways: 1,
    priority: 80, // 🏛️ 梅诺卡岛古都，历史文化中心
    cargo: false
  },

  // ================================================================
  // 📍 福门特拉岛 - 处女岛屿
  // ================================================================

  {
    iata: 'FMT',
    icao: 'LEFO',
    chinese: '福门特拉机场',
    english: 'Formentera Airport',
    city: '圣弗朗西斯科哈维尔',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 38.6597, lng: 1.4269 },
    runways: 1,
    priority: 75, // 🏖️ 处女岛屿，原始海滩天堂
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场和直升机场
  // ================================================================

  {
    iata: 'PMV',
    icao: 'LEPM',
    chinese: '帕尔马军用机场',
    english: 'Palma Military Airport',
    city: '帕尔马',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 39.5633, lng: 2.7422 },
    runways: 2,
    priority: 70, // ✈️ 西班牙空军基地，军民两用
    cargo: true
  },

  {
    iata: 'IBS',
    icao: 'LEHS',
    chinese: '伊维萨南部直升机场',
    english: 'Ibiza South Heliport',
    city: '伊维萨',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 38.8556, lng: 1.3958 },
    runways: 1,
    priority: 68, // 🚁 VIP直升机服务，豪华度假专用
    cargo: false
  },

  {
    iata: 'ACM',
    icao: 'LEAL',
    chinese: '阿尔库迪亚机场',
    english: 'Alcudia Airport',
    city: '阿尔库迪亚',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 39.8556, lng: 3.1297 },
    runways: 1,
    priority: 76, // 🏖️ 马略卡岛北部海滨度假胜地
    cargo: false
  },

  {
    iata: 'CAM',
    icao: 'LECA',
    chinese: '卡拉米略尔机场',
    english: 'Cala Millor Airport',
    city: '卡拉米略尔',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 39.5917, lng: 3.3833 },
    runways: 1,
    priority: 74, // 🌊 马略卡岛东海岸，黄金海滩
    cargo: false
  },

  {
    iata: 'ESA',
    icao: 'LESA',
    chinese: '萨拉曼卡机场',
    english: 'Es Vedra Airport',
    city: '圣约瑟普',
    province: '巴利阿里群岛',
    country: '西班牙',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 38.8944, lng: 1.2944 },
    runways: 1,
    priority: 72, // 🗿 神秘岩石岛屿，灵性能量中心
    cargo: false
  }

];

// 导出统计信息
export const spainBalearicAirportStats = {
  totalAirports: spainBalearicEnhancedAirports.length,
  internationalAirports: spainBalearicEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: spainBalearicEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: spainBalearicEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(spainBalearicEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: spainBalearicEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '西班牙巴利阿里群岛完整覆盖',
  specialFeatures: [
    '🥇 帕尔马马略卡机场 - 巴利阿里群岛最大机场，地中海重要度假枢纽',
    '🎵 伊维萨机场 - 世界派对之都，电音文化圣地',
    '🌿 梅诺卡机场 - 联合国教科文组织生物圈保护区，宁静度假天堂',
    '🏖️ 福门特拉机场 - 处女岛屿，原始海滩天堂',
    '🌅 圣安东尼奥机场 - 著名日落观赏点，西海岸度假胜地',
    '🏛️ 西乌达德拉机场 - 梅诺卡岛古都，历史文化中心',
    '🚁 VIP直升机服务 - 豪华度假专用，岛际快速交通',
    '🏖️ 黄金海滩网络 - 阿尔库迪亚、卡拉米略尔海滨度假完整覆盖',
    '🌊 地中海派对岛屿 - 欧洲夏季度假天堂完整航空门户',
    '🗿 神秘能量中心 - Es Vedra岩石岛屿，灵性旅游特色'
  ]
};
