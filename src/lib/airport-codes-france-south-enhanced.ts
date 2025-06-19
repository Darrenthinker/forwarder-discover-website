// 🇫🇷 法国南部机场数据库 - 增强版本
// Southern France Enhanced Airport Database
// 第六十二批机场数据库 - 地中海南岸扩展继续

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
// 🇫🇷 法国南部机场数据库 - 16个主要机场
// 覆盖地中海南岸重要地区：蔚蓝海岸、普罗旺斯、朗格多克、科西嘉岛
// 法国里维埃拉，薰衣草之乡，戛纳电影节故乡
// ================================================================

export const franceSouthEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 蔚蓝海岸大区 - 法国里维埃拉
  // ================================================================

  {
    iata: 'NCE',
    icao: 'LFMN',
    chinese: '尼斯蔚蓝海岸机场',
    english: 'Nice Côte d\'Azur Airport',
    city: '尼斯',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.6584, lng: 7.2159 },
    runways: 2,
    priority: 100, // 🥇 蔚蓝海岸最大机场，法国里维埃拉门户
    hub: ['Air France', 'easyJet'],
    cargo: true
  },

  {
    iata: 'CEQ',
    icao: 'LFMQ',
    chinese: '戛纳曼德琉机场',
    english: 'Cannes-Mandelieu Airport',
    city: '戛纳',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.5420, lng: 6.9535 },
    runways: 1,
    priority: 95, // 🎬 戛纳电影节门户，豪华旅游专机基地
    cargo: false
  },

  {
    iata: 'CTT',
    icao: 'LFMC',
    chinese: '勒卡斯特莱机场',
    english: 'Le Castellet Airport',
    city: '勒卡斯特莱',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.2520, lng: 5.7858 },
    runways: 1,
    priority: 85, // 🏁 保罗·里卡德赛道，一级方程式法国大奖赛
    cargo: false
  },

  // ================================================================
  // 📍 马赛普罗旺斯地区 - 地中海重要港口
  // ================================================================

  {
    iata: 'MRS',
    icao: 'LFML',
    chinese: '马赛普罗旺斯机场',
    english: 'Marseille Provence Airport',
    city: '马赛',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.4393, lng: 5.2214 },
    runways: 2,
    priority: 98, // 🏛️ 普罗旺斯地区最大机场，地中海重要港口
    hub: ['Air France', 'Ryanair'],
    cargo: true
  },

  {
    iata: 'AVN',
    icao: 'LFMV',
    chinese: '阿维尼翁机场',
    english: 'Avignon-Provence Airport',
    city: '阿维尼翁',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.9073, lng: 4.9018 },
    runways: 1,
    priority: 88, // 🏰 教皇之城，普罗旺斯文化中心
    cargo: false
  },

  // ================================================================
  // 📍 土伦瓦尔地区
  // ================================================================

  {
    iata: 'TLN',
    icao: 'LFTH',
    chinese: '土伦耶尔机场',
    english: 'Toulon-Hyères Airport',
    city: '土伦',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.0973, lng: 6.1460 },
    runways: 1,
    priority: 92, // ⚓ 重要海军基地，黄金群岛门户
    cargo: true
  },

  // ================================================================
  // 📍 朗格多克大区 - 地中海西部
  // ================================================================

  {
    iata: 'MPL',
    icao: 'LFMT',
    chinese: '蒙彼利埃地中海机场',
    english: 'Montpellier-Méditerranée Airport',
    city: '蒙彼利埃',
    province: '奥克西塔尼大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.5762, lng: 3.9630 },
    runways: 1,
    priority: 90, // 🎓 大学城，朗格多克地区重要门户
    cargo: true
  },

  {
    iata: 'BZR',
    icao: 'LFMU',
    chinese: '贝济耶卡普达格德机场',
    english: 'Béziers Cap d\'Agde Airport',
    city: '贝济耶',
    province: '奥克西塔尼大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.3235, lng: 3.3539 },
    runways: 1,
    priority: 82, // 🍷 朗格多克葡萄酒产区，运河之城
    cargo: false
  },

  {
    iata: 'PGF',
    icao: 'LFMP',
    chinese: '佩皮尼昂-里韦萨尔特机场',
    english: 'Perpignan-Rivesaltes Airport',
    city: '佩皮尼昂',
    province: '奥克西塔尼大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 42.7404, lng: 2.8707 },
    runways: 1,
    priority: 86, // 🇪🇸 加泰罗尼亚文化，法西边境重要城市
    cargo: true
  },

  // ================================================================
  // 📍 科西嘉岛 - 地中海明珠
  // ================================================================

  {
    iata: 'AJA',
    icao: 'LFKJ',
    chinese: '阿雅克肖拿破仑波拿巴机场',
    english: 'Ajaccio Napoleon Bonaparte Airport',
    city: '阿雅克肖',
    province: '科西嘉岛',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 41.9236, lng: 8.8029 },
    runways: 1,
    priority: 94, // 👑 拿破仑出生地，科西嘉岛首府
    cargo: true
  },

  {
    iata: 'BIA',
    icao: 'LFKB',
    chinese: '巴斯蒂亚波雷塔机场',
    english: 'Bastia-Poretta Airport',
    city: '巴斯蒂亚',
    province: '科西嘉岛',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 42.5527, lng: 9.4837 },
    runways: 1,
    priority: 89, // 🏛️ 科西嘉岛北部重要港口
    cargo: false
  },

  {
    iata: 'FSC',
    icao: 'LFKC',
    chinese: '菲加里苏德科西嘉机场',
    english: 'Figari Sud-Corse Airport',
    city: '菲加里',
    province: '科西嘉岛',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 41.5006, lng: 9.0978 },
    runways: 1,
    priority: 84, // 🌊 科西嘉岛南部，博尼法乔门户
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'GAT',
    icao: 'LFMG',
    chinese: '加普塔朗机场',
    english: 'Gap-Tallard Airport',
    city: '加普',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 44.4564, lng: 6.0374 },
    runways: 1,
    priority: 78, // 🏔️ 南阿尔卑斯山门户，滑翔运动中心
    cargo: false
  },

  {
    iata: 'CCF',
    icao: 'LFKF',
    chinese: '卡尔卡松萨尔瓦泰机场',
    english: 'Carcassonne Airport',
    city: '卡尔卡松',
    province: '奥克西塔尼大区',
    country: '法国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.2160, lng: 2.3069 },
    runways: 1,
    priority: 87, // 🏰 中世纪古城，世界文化遗产
    cargo: false
  },

  {
    iata: 'MEN',
    icao: 'LFMD',
    chinese: '芒通蔚蓝海岸机场',
    english: 'Menton Côte d\'Azur Airport',
    city: '芒通',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.7737, lng: 7.4411 },
    runways: 1,
    priority: 80, // 🍋 柠檬之城，法意边境度假胜地
    cargo: false
  },

  {
    iata: 'QXB',
    icao: 'LFMA',
    chinese: '艾克斯普罗旺斯机场',
    english: 'Aix-en-Provence Airport',
    city: '艾克斯普罗旺斯',
    province: '普罗旺斯-阿尔卑斯-蔚蓝海岸大区',
    country: '法国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.5055, lng: 5.3678 },
    runways: 1,
    priority: 83, // 🎨 塞尚故乡，普罗旺斯艺术中心
    cargo: false
  }

];

// 导出统计信息
export const franceSouthAirportStats = {
  totalAirports: franceSouthEnhancedAirports.length,
  internationalAirports: franceSouthEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: franceSouthEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: franceSouthEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(franceSouthEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: franceSouthEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '法国南部地中海地区完整覆盖',
  specialFeatures: [
    '🥇 尼斯蔚蓝海岸机场 - 法国里维埃拉最大门户，蔚蓝海岸枢纽',
    '🏛️ 马赛普罗旺斯机场 - 普罗旺斯地区最大机场，地中海重要港口',
    '🎬 戛纳曼德琉机场 - 戛纳电影节门户，豪华旅游专机基地',
    '👑 阿雅克肖机场 - 拿破仑出生地，科西嘉岛首府',
    '⚓ 土伦耶尔机场 - 重要海军基地，黄金群岛门户',
    '🎓 蒙彼利埃机场 - 大学城，朗格多克地区重要门户',
    '🏰 卡尔卡松机场 - 中世纪古城，世界文化遗产',
    '🏰 阿维尼翁机场 - 教皇之城，普罗旺斯文化中心',
    '🌊 蔚蓝海岸度假天堂 - 尼斯、戛纳、芒通完整航空网络',
    '🌿 薰衣草之乡 - 普罗旺斯薰衣草田、向日葵花海门户'
  ]
};
