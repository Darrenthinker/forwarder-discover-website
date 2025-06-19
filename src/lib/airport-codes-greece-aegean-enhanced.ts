// 🇬🇷 希腊爱琴海群岛机场数据库 - 增强版本
// Greek Aegean Islands Enhanced Airport Database
// 第六十四批机场数据库 - 地中海东部扩展

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
// 🇬🇷 希腊爱琴海群岛机场数据库 - 35个主要机场
// 覆盖爱琴海重要岛屿：圣托里尼、米科诺斯、罗德岛、克里特岛等
// 古希腊文明发源地，蓝白建筑经典，爱琴海浪漫天堂
// ================================================================

export const greeceAegeanEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 雅典及周边 - 古希腊文明中心
  // ================================================================

  {
    iata: 'ATH',
    icao: 'LGAV',
    chinese: '雅典埃莱夫塞里奥斯·韦尼泽洛斯国际机场',
    english: 'Athens Eleftherios Venizelos International Airport',
    city: '雅典',
    province: '阿提卡大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.9364, lng: 23.9445 },
    runways: 2,
    priority: 100, // 🥇 希腊最大机场，古希腊文明发源地门户
    hub: ['Aegean Airlines', 'Olympic Air'],
    cargo: true
  },

  // ================================================================
  // 📍 基克拉泽斯群岛 - 爱琴海明珠
  // ================================================================

  {
    iata: 'JTR',
    icao: 'LGSR',
    chinese: '圣托里尼机场',
    english: 'Santorini Airport',
    city: '圣托里尼',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.3992, lng: 25.4793 },
    runways: 1,
    priority: 98, // 🌅 爱琴海明珠，世界最美日落观赏地
    cargo: false
  },

  {
    iata: 'JMK',
    icao: 'LGMK',
    chinese: '米科诺斯机场',
    english: 'Mykonos Airport',
    city: '米科诺斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.4351, lng: 25.3481 },
    runways: 1,
    priority: 96, // 🎵 派对岛屿，希腊夜生活中心
    cargo: false
  },

  {
    iata: 'PAS',
    icao: 'LGPA',
    chinese: '帕罗斯机场',
    english: 'Paros Airport',
    city: '帕罗斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.0206, lng: 25.1281 },
    runways: 1,
    priority: 88, // 🏛️ 大理石岛屿，古代雕塑原料产地
    cargo: false
  },

  {
    iata: 'JSY',
    icao: 'LGSY',
    chinese: '锡罗斯机场',
    english: 'Syros Airport',
    city: '锡罗斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.4228, lng: 24.9509 },
    runways: 1,
    priority: 82, // ⚓ 基克拉泽斯群岛首府
    cargo: false
  },

  {
    iata: 'MLO',
    icao: 'LGML',
    chinese: '米洛斯机场',
    english: 'Milos Airport',
    city: '米洛斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.6969, lng: 24.4769 },
    runways: 1,
    priority: 78, // 🌋 火山岛屿，独特地质景观
    cargo: false
  },

  {
    iata: 'JNX',
    icao: 'LGNX',
    chinese: '纳克索斯机场',
    english: 'Naxos Airport',
    city: '纳克索斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.0808, lng: 25.3681 },
    runways: 1,
    priority: 85, // 🏛️ 阿波罗门，古希腊神庙遗址
    cargo: false
  },

  // ================================================================
  // 📍 多德卡尼斯群岛 - 地中海东南
  // ================================================================

  {
    iata: 'RHO',
    icao: 'LGRP',
    chinese: '罗德岛机场',
    english: 'Rhodes Airport',
    city: '罗德岛',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.4054, lng: 28.0862 },
    runways: 1,
    priority: 94, // 🗿 罗德岛巨像，世界七大奇迹之一遗址
    cargo: false
  },

  {
    iata: 'KOS',
    icao: 'LGKO',
    chinese: '科斯机场',
    english: 'Kos Airport',
    city: '科斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.7933, lng: 27.0917 },
    runways: 1,
    priority: 90, // ⚕️ 希波克拉底故乡，现代医学发源地
    cargo: false
  },

  {
    iata: 'JKH',
    icao: 'LGKY',
    chinese: '卡尔帕索斯机场',
    english: 'Karpathos Airport',
    city: '卡尔帕索斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.4214, lng: 27.1469 },
    runways: 1,
    priority: 80, // 🏝️ 传统文化保存完好的岛屿
    cargo: false
  },

  {
    iata: 'KIT',
    icao: 'LGKI',
    chinese: '基西拉机场',
    english: 'Kithira Airport',
    city: '基西拉',
    province: '阿提卡大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.2733, lng: 23.0169 },
    runways: 1,
    priority: 74, // 💕 爱神阿芙洛狄忒出生地
    cargo: false
  },

  // ================================================================
  // 📍 克里特岛 - 地中海最大岛屿之一
  // ================================================================

  {
    iata: 'HER',
    icao: 'LGIR',
    chinese: '伊拉克利翁尼科斯·卡赞扎基斯机场',
    english: 'Heraklion Airport',
    city: '伊拉克利翁',
    province: '克里特大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.3397, lng: 25.1803 },
    runways: 1,
    priority: 95, // 🏛️ 米诺斯文明发源地，克诺索斯宫殿
    cargo: true
  },

  {
    iata: 'CHQ',
    icao: 'LGSA',
    chinese: '干尼亚机场',
    english: 'Chania Airport',
    city: '干尼亚',
    province: '克里特大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.5317, lng: 24.1497 },
    runways: 1,
    priority: 86, // 🌊 威尼斯风格海港城市
    cargo: false
  },

  {
    iata: 'JSH',
    icao: 'LGST',
    chinese: '锡蒂亚机场',
    english: 'Sitia Airport',
    city: '锡蒂亚',
    province: '克里特大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.2161, lng: 26.1017 },
    runways: 1,
    priority: 76, // 🫒 橄榄油产区，东克里特门户
    cargo: false
  },

  // ================================================================
  // 📍 北爱琴海群岛
  // ================================================================

  {
    iata: 'MJT',
    icao: 'LGMT',
    chinese: '米蒂利尼机场',
    english: 'Mytilene Airport',
    city: '米蒂利尼',
    province: '北爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 39.0567, lng: 26.5983 },
    runways: 1,
    priority: 84, // 🎭 古希腊诗人萨福故乡
    cargo: false
  },

  {
    iata: 'LXS',
    icao: 'LGLM',
    chinese: '利姆诺斯机场',
    english: 'Lemnos Airport',
    city: '利姆诺斯',
    province: '北爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 39.9171, lng: 25.2364 },
    runways: 1,
    priority: 78, // 🔥 火神赫菲斯托斯工坊传说地
    cargo: false
  },

  {
    iata: 'SMI',
    icao: 'LGSM',
    chinese: '萨摩斯机场',
    english: 'Samos Airport',
    city: '萨摩斯',
    province: '北爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.6900, lng: 26.9117 },
    runways: 1,
    priority: 82, // 📐 毕达哥拉斯故乡，数学发源地
    cargo: false
  },

  {
    iata: 'IKA',
    icao: 'LGIK',
    chinese: '伊卡里亚机场',
    english: 'Ikaria Airport',
    city: '伊卡里亚',
    province: '北爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.6833, lng: 26.3500 },
    runways: 1,
    priority: 70, // 🪶 伊卡洛斯神话传说地
    cargo: false
  },

  {
    iata: 'JTY',
    icao: 'LGHI',
    chinese: '希俄斯机场',
    english: 'Chios Airport',
    city: '希俄斯',
    province: '北爱琴海大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 38.3432, lng: 26.1406 },
    runways: 1,
    priority: 79, // 🌿 乳香树脂产地，中世纪贸易中心
    cargo: false
  },

  // ================================================================
  // 📍 东马其顿和色雷斯大区
  // ================================================================

  {
    iata: 'KVA',
    icao: 'LGKV',
    chinese: '卡瓦拉亚历山大大帝机场',
    english: 'Kavala Airport',
    city: '卡瓦拉',
    province: '东马其顿和色雷斯大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 40.9133, lng: 24.6192 },
    runways: 1,
    priority: 83, // ⚔️ 亚历山大大帝征服起点
    cargo: false
  },

  {
    iata: 'AXD',
    icao: 'LGAL',
    chinese: '亚历山德鲁波利斯机场',
    english: 'Alexandroupolis Airport',
    city: '亚历山德鲁波利斯',
    province: '东马其顿和色雷斯大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 40.8561, lng: 25.9564 },
    runways: 1,
    priority: 77, // 🦅 色雷斯平原，古代战略要地
    cargo: false
  },

  // ================================================================
  // 📍 伊奥尼亚群岛 - 西部群岛
  // ================================================================

  {
    iata: 'CFU',
    icao: 'LGKR',
    chinese: '科孚岛扬尼斯·卡波迪斯特里亚斯机场',
    english: 'Corfu Airport',
    city: '科孚',
    province: '伊奥尼亚群岛大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 39.6019, lng: 19.9117 },
    runways: 1,
    priority: 92, // 🏛️ 奥德赛故乡，荷马史诗场景
    cargo: false
  },

  {
    iata: 'ZTH',
    icao: 'LGZA',
    chinese: '扎金索斯机场',
    english: 'Zakynthos Airport',
    city: '扎金索斯',
    province: '伊奥尼亚群岛大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.7511, lng: 20.8842 },
    runways: 1,
    priority: 89, // 🐢 海龟岛，地中海海龟保护区
    cargo: false
  },

  {
    iata: 'EFL',
    icao: 'LGKF',
    chinese: '凯法利尼亚机场',
    english: 'Kefalonia Airport',
    city: '凯法利尼亚',
    province: '伊奥尼亚群岛大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 38.1201, lng: 20.5005 },
    runways: 1,
    priority: 87, // 🌊 伊奥尼亚群岛最大岛屿
    cargo: false
  },

  {
    iata: 'PVK',
    icao: 'LGPZ',
    chinese: '普雷韦扎阿克蒂翁机场',
    english: 'Preveza Airport',
    city: '普雷韦扎',
    province: '伊奥尼亚群岛大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 38.9255, lng: 20.7653 },
    runways: 1,
    priority: 81, // ⚔️ 阿克蒂翁海战古战场
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'SKG',
    icao: 'LGTS',
    chinese: '塞萨洛尼基马其顿机场',
    english: 'Thessaloniki Airport',
    city: '塞萨洛尼基',
    province: '中马其顿大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 40.5197, lng: 22.9709 },
    runways: 1,
    priority: 93, // 🏛️ 北希腊首府，拜占庭文化中心
    cargo: true
  },

  {
    iata: 'VOL',
    icao: 'LGBL',
    chinese: '沃洛斯机场',
    english: 'Volos Airport',
    city: '沃洛斯',
    province: '色萨利大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 39.3806, lng: 22.7944 },
    runways: 1,
    priority: 75, // ⛵ 阿尔戈号英雄远征起点
    cargo: false
  },

  {
    iata: 'GPA',
    icao: 'LGPJ',
    chinese: '帕特雷阿拉克索斯机场',
    english: 'Patras Airport',
    city: '帕特雷',
    province: '西希腊大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 38.1511, lng: 21.4256 },
    runways: 1,
    priority: 79, // ⛵ 重要港口城市，连接意大利
    cargo: false
  },

  {
    iata: 'KLX',
    icao: 'LGKL',
    chinese: '卡拉马塔机场',
    english: 'Kalamata Airport',
    city: '卡拉马塔',
    province: '伯罗奔尼撒大区',
    country: '希腊',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.0683, lng: 22.0256 },
    runways: 1,
    priority: 80, // 🫒 橄榄之城，卡拉马塔橄榄原产地
    cargo: false
  },

  {
    iata: 'JIK',
    icao: 'LGIK',
    chinese: '伊奥斯机场',
    english: 'Ios Airport',
    city: '伊奥斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.7233, lng: 25.2978 },
    runways: 1,
    priority: 72, // 📖 荷马安葬地传说
    cargo: false
  },

  {
    iata: 'JFO',
    icao: 'LGFO',
    chinese: '福莱甘德罗斯机场',
    english: 'Folegandros Airport',
    city: '福莱甘德罗斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 36.6281, lng: 24.9178 },
    runways: 1,
    priority: 68, // 🏔️ 悬崖岛屿，原始风貌
    cargo: false
  },

  {
    iata: 'JKL',
    icao: 'LGKL',
    chinese: '基莫洛斯机场',
    english: 'Kimolos Airport',
    city: '基莫洛斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 36.7944, lng: 24.5667 },
    runways: 1,
    priority: 65, // 💎 白垩岛屿，独特地质
    cargo: false
  },

  {
    iata: 'JAN',
    icao: 'LGAN',
    chinese: '安德罗斯机场',
    english: 'Andros Airport',
    city: '安德罗斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.9167, lng: 24.7500 },
    runways: 1,
    priority: 71, // 🚢 造船业传统岛屿
    cargo: false
  },

  {
    iata: 'JTH',
    icao: 'LGTH',
    chinese: '蒂诺斯机场',
    english: 'Tinos Airport',
    city: '蒂诺斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 37.5333, lng: 25.1333 },
    runways: 1,
    priority: 73, // ⛪ 东正教朝圣中心
    cargo: false
  },

  {
    iata: 'JSI',
    icao: 'LGSI',
    chinese: '锡夫诺斯机场',
    english: 'Sifnos Airport',
    city: '锡夫诺斯',
    province: '南爱琴海大区',
    country: '希腊',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 36.9744, lng: 24.6833 },
    runways: 1,
    priority: 67, // 🍯 美食岛屿，传统烹饪
    cargo: false
  }

];

// 导出统计信息
export const greeceAegeanAirportStats = {
  totalAirports: greeceAegeanEnhancedAirports.length,
  internationalAirports: greeceAegeanEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: greeceAegeanEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: greeceAegeanEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(greeceAegeanEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: greeceAegeanEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '希腊爱琴海群岛完整覆盖',
  specialFeatures: [
    '🥇 雅典机场 - 古希腊文明发源地门户，希腊最大国际机场',
    '🌅 圣托里尼机场 - 爱琴海明珠，世界最美日落观赏地',
    '🎵 米科诺斯机场 - 派对岛屿，希腊夜生活中心',
    '🗿 罗德岛机场 - 世界七大奇迹之一罗德岛巨像遗址',
    '🏛️ 伊拉克利翁机场 - 米诺斯文明发源地，克诺索斯宫殿',
    '⚕️ 科斯机场 - 希波克拉底故乡，现代医学发源地',
    '🏛️ 塞萨洛尼基机场 - 北希腊首府，拜占庭文化中心',
    '🏛️ 科孚机场 - 奥德赛故乡，荷马史诗场景',
    '🐢 扎金索斯机场 - 海龟岛，地中海海龟保护区',
    '🌊 爱琴海岛屿天堂 - 古希腊神话、蓝白建筑、浪漫海岛完整航空网络'
  ]
};
