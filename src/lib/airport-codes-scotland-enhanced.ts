// 🏴󠁧󠁢󠁳󠁣󠁴󠁿 苏格兰机场数据库 - 增强版本
// Scotland Enhanced Airport Database
// 第六十批机场数据库 - 欧洲大洲继续

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
// 🏴󠁧󠁢󠁳󠁣󠁴󠁿 苏格兰机场数据库 - 15个主要机场
// 覆盖苏格兰主要地区：爱丁堡、格拉斯哥、阿伯丁、因弗内斯等
// 高地与群岛，苏格兰风笛故乡，威士忌王国
// ================================================================

export const scotlandEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 爱丁堡 - 苏格兰首府，重要航空枢纽
  // ================================================================

  {
    iata: 'EDI',
    icao: 'EGPH',
    chinese: '爱丁堡机场',
    english: 'Edinburgh Airport',
    city: '爱丁堡',
    province: '洛锡安',
    country: '英国苏格兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 55.9500, lng: -3.3725 },
    runways: 1,
    priority: 100, // 🥇 苏格兰最大国际机场，首府重要门户
    hub: ['British Airways', 'easyJet'],
    cargo: true
  },

  // ================================================================
  // 📍 格拉斯哥 - 苏格兰最大城市
  // ================================================================

  {
    iata: 'GLA',
    icao: 'EGPF',
    chinese: '格拉斯哥机场',
    english: 'Glasgow Airport',
    city: '格拉斯哥',
    province: '西苏格兰',
    country: '英国苏格兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 55.8719, lng: -4.4331 },
    runways: 1,
    priority: 98, // 🏭 苏格兰最大城市，工业中心
    cargo: true
  },

  // ================================================================
  // 📍 格拉斯哥普雷斯蒂克 - 西海岸重要机场
  // ================================================================

  {
    iata: 'PIK',
    icao: 'EGPK',
    chinese: '格拉斯哥普雷斯蒂克机场',
    english: 'Glasgow Prestwick Airport',
    city: '普雷斯蒂克',
    province: '西苏格兰',
    country: '英国苏格兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 55.5094, lng: -4.5867 },
    runways: 1,
    priority: 90, // ✈️ 廉价航空重要基地，货运枢纽
    cargo: true
  },

  // ================================================================
  // 📍 阿伯丁 - 北海石油之都
  // ================================================================

  {
    iata: 'ABZ',
    icao: 'EGPD',
    chinese: '阿伯丁机场',
    english: 'Aberdeen Airport',
    city: '阿伯丁',
    province: '东北苏格兰',
    country: '英国苏格兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 57.2019, lng: -2.1978 },
    runways: 1,
    priority: 95, // 🛢️ 北海石油之都，直升机海上作业基地
    cargo: true
  },

  // ================================================================
  // 📍 因弗内斯 - 高地首府
  // ================================================================

  {
    iata: 'INV',
    icao: 'EGPE',
    chinese: '因弗内斯机场',
    english: 'Inverness Airport',
    city: '因弗内斯',
    province: '高地',
    country: '英国苏格兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 57.5425, lng: -4.0475 },
    runways: 1,
    priority: 88, // 🏔️ 苏格兰高地首府，尼斯湖门户
    cargo: false
  },

  // ================================================================
  // 📍 邓迪 - 东海岸重要城市
  // ================================================================

  {
    iata: 'DND',
    icao: 'EGPN',
    chinese: '邓迪机场',
    english: 'Dundee Airport',
    city: '邓迪',
    province: '安格斯',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 56.4525, lng: -3.0258 },
    runways: 1,
    priority: 82, // 🎓 科技城市，大学城
    cargo: false
  },

  // ================================================================
  // 📍 设得兰群岛
  // ================================================================

  {
    iata: 'LSI',
    icao: 'EGPB',
    chinese: '萨姆堡机场',
    english: 'Sumburgh Airport',
    city: '萨姆堡',
    province: '设得兰群岛',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 59.8789, lng: -1.2956 },
    runways: 1,
    priority: 85, // 🛢️ 设得兰群岛，北海石油作业重要基地
    cargo: false
  },

  // ================================================================
  // 📍 奥克尼群岛
  // ================================================================

  {
    iata: 'KOI',
    icao: 'EGPA',
    chinese: '柯克沃尔机场',
    english: 'Kirkwall Airport',
    city: '柯克沃尔',
    province: '奥克尼群岛',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 58.9578, lng: -2.9050 },
    runways: 1,
    priority: 80, // 🗿 奥克尼群岛，史前文明遗址
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'WIC',
    icao: 'EGPC',
    chinese: '威克机场',
    english: 'Wick Airport',
    city: '威克',
    province: '高地',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 58.4539, lng: -3.0931 },
    runways: 1,
    priority: 78, // 🌊 苏格兰大陆最北端机场
    cargo: false
  },

  {
    iata: 'SYY',
    icao: 'EGPO',
    chinese: '斯托诺韦机场',
    english: 'Stornoway Airport',
    city: '斯托诺韦',
    province: '外赫布里底群岛',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 58.2156, lng: -6.3311 },
    runways: 1,
    priority: 75, // 🏝️ 外赫布里底群岛最大城市
    cargo: false
  },

  {
    iata: 'ILY',
    icao: 'EGPI',
    chinese: '艾莱岛机场',
    english: 'Islay Airport',
    city: '艾莱岛',
    province: '内赫布里底群岛',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 55.6819, lng: -6.2567 },
    runways: 1,
    priority: 73, // 🥃 威士忌圣地，麦芽威士忌故乡
    cargo: false
  },

  {
    iata: 'COL',
    icao: 'EGPC',
    chinese: '科伦赛机场',
    english: 'Coll Airport',
    city: '科伦赛',
    province: '内赫布里底群岛',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 56.6383, lng: -6.5506 },
    runways: 1,
    priority: 70, // 🏝️ 内赫布里底群岛小岛
    cargo: false
  },

  {
    iata: 'TEE',
    icao: 'EGPT',
    chinese: '蒂里机场',
    english: 'Tiree Airport',
    city: '蒂里',
    province: '内赫布里底群岛',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 56.4992, lng: -6.8692 },
    runways: 1,
    priority: 68, // 🌊 最西端岛屿机场
    cargo: false
  },

  {
    iata: 'BEB',
    icao: 'EGPR',
    chinese: '本贝丘拉机场',
    english: 'Benbecula Airport',
    city: '本贝丘拉',
    province: '外赫布里底群岛',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 57.4811, lng: -7.3628 },
    runways: 1,
    priority: 72, // 🏝️ 南北乌伊斯特岛之间
    cargo: false
  },

  {
    iata: 'BAL',
    icao: 'EGPB',
    chinese: '巴拉机场',
    english: 'Barra Airport',
    city: '巴拉',
    province: '外赫布里底群岛',
    country: '英国苏格兰',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 57.0228, lng: -7.4444 },
    runways: 1,
    priority: 69, // 🏖️ 世界唯一海滩机场，潮汐起降
    cargo: false
  }

];

// 导出统计信息
export const scotlandAirportStats = {
  totalAirports: scotlandEnhancedAirports.length,
  internationalAirports: scotlandEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: scotlandEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: scotlandEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(scotlandEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: scotlandEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '苏格兰全境完整覆盖',
  specialFeatures: [
    '🥇 爱丁堡机场 - 苏格兰最大国际机场，首府重要门户',
    '🏭 格拉斯哥机场 - 苏格兰最大城市，工业中心',
    '🛢️ 阿伯丁机场 - 北海石油之都，直升机海上作业基地',
    '🏔️ 因弗内斯机场 - 苏格兰高地首府，尼斯湖门户',
    '✈️ 普雷斯蒂克机场 - 廉价航空重要基地，货运枢纽',
    '🗿 奥克尼群岛机场 - 史前文明遗址，巨石阵',
    '🛢️ 设得兰群岛机场 - 北海石油作业重要基地',
    '🥃 艾莱岛机场 - 威士忌圣地，麦芽威士忌故乡',
    '🏖️ 巴拉机场 - 世界唯一海滩机场，潮汐起降',
    '🏝️ 赫布里底群岛 - 苏格兰高地与群岛完整航空网络'
  ]
};
