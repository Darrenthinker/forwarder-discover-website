// 🇫🇷 南美洲海外领土机场数据库 - 增强版本
// South America Overseas Territories Enhanced Airport Database
// 第八十五批机场数据库 - 南美洲航空覆盖完善

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
// 🇫🇷 南美洲海外领土机场数据库 - 12个主要机场
// 覆盖法属圭亚那、福克兰群岛、南乔治亚和南桑威奇群岛
// 南美洲航空覆盖完善，欧洲在南美的航空门户
// ================================================================

export const southAmericaOverseasEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 法属圭亚那 - 法国海外省
  // ================================================================

  {
    iata: 'CAY',
    icao: 'SOCA',
    chinese: '卡延罗尚博国际机场',
    english: 'Cayenne – Félix Eboué Airport',
    city: '卡延',
    province: '卡延',
    country: '法属圭亚那',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GFT',
    coordinates: { lat: 4.8220, lng: -52.3608 },
    runways: 1,
    priority: 94, // 🏛️ 法属圭亚那首府，法国海外省
    hub: ['Air France', 'Air Caraïbes'],
    cargo: true
  },

  {
    iata: 'LDX',
    icao: 'SOLS',
    chinese: '圣洛朗迪马罗尼机场',
    english: 'Saint-Laurent-du-Maroni Airport',
    city: '圣洛朗迪马罗尼',
    province: '圣洛朗迪马罗尼',
    country: '法属圭亚那',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GFT',
    coordinates: { lat: 5.4831, lng: -54.0342 },
    runways: 1,
    priority: 82, // 🌊 马罗尼河重要城市
    cargo: false
  },

  {
    iata: 'OYP',
    icao: 'SOOM',
    chinese: '奥亚波克机场',
    english: 'Oyapock Airport',
    city: '圣乔治德洛亚波克',
    province: '圣乔治德洛亚波克',
    country: '法属圭亚那',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GFT',
    coordinates: { lat: 3.9083, lng: -51.8008 },
    runways: 1,
    priority: 78, // 🌍 巴西边境重要据点
    cargo: false
  },

  {
    iata: 'MPY',
    icao: 'SOOM',
    chinese: '马里帕苏拉机场',
    english: 'Maripasoula Airport',
    city: '马里帕苏拉',
    province: '马里帕苏拉',
    country: '法属圭亚那',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GFT',
    coordinates: { lat: 3.6575, lng: -54.0289 },
    runways: 1,
    priority: 75, // 🌲 内陆森林重镇
    cargo: false
  },

  {
    iata: 'CSH',
    icao: 'SOKS',
    chinese: '库鲁航天中心机场',
    english: 'Kourou Airport',
    city: '库鲁',
    province: '库鲁',
    country: '法属圭亚那',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GFT',
    coordinates: { lat: 5.2094, lng: -52.9261 },
    runways: 1,
    priority: 88, // 🚀 欧洲航天发射中心
    cargo: true
  },

  // ================================================================
  // 📍 福克兰群岛 - 英国海外领土
  // ================================================================

  {
    iata: 'MPN',
    icao: 'EGYP',
    chinese: '芒特普莱森特空军基地',
    english: 'RAF Mount Pleasant',
    city: '芒特普莱森特',
    province: '东福克兰',
    country: '福克兰群岛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'FKST',
    coordinates: { lat: -51.8228, lng: -58.4472 },
    runways: 1,
    priority: 90, // ✈️ 英国皇家空军基地，福克兰主要机场
    hub: ['FIGAS'],
    cargo: true
  },

  {
    iata: 'PSY',
    icao: 'SFAL',
    chinese: '斯坦利机场',
    english: 'Port Stanley Airport',
    city: '斯坦利',
    province: '东福克兰',
    country: '福克兰群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'FKST',
    coordinates: { lat: -51.6856, lng: -57.7767 },
    runways: 1,
    priority: 85, // 🏛️ 福克兰群岛首府
    cargo: false
  },

  {
    iata: 'FIK',
    icao: 'SFHI',
    chinese: '希尔湾机场',
    english: 'Hill Cove Airport',
    city: '希尔湾',
    province: '西福克兰',
    country: '福克兰群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'FKST',
    coordinates: { lat: -51.4947, lng: -60.2133 },
    runways: 1,
    priority: 78, // 🌊 西福克兰重要据点
    cargo: false
  },

  {
    iata: 'PEU',
    icao: 'SFPB',
    chinese: '卵石岛机场',
    english: 'Pebble Island Airport',
    city: '卵石岛',
    province: '西福克兰',
    country: '福克兰群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'FKST',
    coordinates: { lat: -51.2908, lng: -59.6133 },
    runways: 1,
    priority: 75, // 🏝️ 卵石岛野生动物保护区
    cargo: false
  },

  // ================================================================
  // 📍 南乔治亚和南桑威奇群岛 - 英国海外领土
  // ================================================================

  {
    iata: 'KEP',
    icao: 'FHKE',
    chinese: '爱德华国王角研究站机场',
    english: 'King Edward Point Airport',
    city: '爱德华国王角',
    province: '南乔治亚',
    country: '南乔治亚和南桑威奇群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GST',
    coordinates: { lat: -54.2833, lng: -36.4978 },
    runways: 1,
    priority: 80, // 🔬 科学研究站，亚南极地区
    cargo: false
  },

  // ================================================================
  // 📍 布韦岛 - 挪威属地（补充）
  // ================================================================

  {
    iata: 'BVT',
    icao: 'ENBV',
    chinese: '布韦岛机场',
    english: 'Bouvet Island Airport',
    city: '布韦岛',
    province: '布韦岛',
    country: '布韦岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'UTC',
    coordinates: { lat: -54.4208, lng: 3.3464 },
    runways: 1,
    priority: 72, // 🏝️ 世界最偏远岛屿
    cargo: false
  },

  // ================================================================
  // 📍 赫德岛和麦克唐纳群岛 - 澳大利亚属地（补充）
  // ================================================================

  {
    iata: 'HMD',
    icao: 'YHHM',
    chinese: '赫德岛机场',
    english: 'Heard Island Airport',
    city: '阿特拉斯湾',
    province: '赫德岛',
    country: '赫德岛和麦克唐纳群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TFT',
    coordinates: { lat: -53.1058, lng: 73.5314 },
    runways: 1,
    priority: 70, // 🌋 亚南极火山岛
    cargo: false
  }

];

// 导出统计信息
export const southAmericaOverseasAirportStats = {
  totalAirports: southAmericaOverseasEnhancedAirports.length,
  internationalAirports: southAmericaOverseasEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: southAmericaOverseasEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: southAmericaOverseasEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(southAmericaOverseasEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(southAmericaOverseasEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: southAmericaOverseasEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '南美洲海外领土完整覆盖',
  specialFeatures: [
    '🏛️ 卡延罗尚博国际机场 - 法属圭亚那首府，法国海外省',
    '🚀 库鲁航天中心机场 - 欧洲航天发射中心',
    '✈️ 芒特普莱森特空军基地 - 英国皇家空军基地，福克兰主要机场',
    '🏛️ 斯坦利机场 - 福克兰群岛首府',
    '🔬 爱德华国王角研究站机场 - 科学研究站，亚南极地区',
    '🌊 圣洛朗迪马罗尼机场 - 马罗尼河重要城市',
    '🌍 奥亚波克机场 - 巴西边境重要据点',
    '🌲 马里帕苏拉机场 - 内陆森林重镇',
    '🌊 希尔湾机场 - 西福克兰重要据点',
    '🏝️ 卵石岛机场 - 卵石岛野生动物保护区',
    '🏝️ 布韦岛机场 - 世界最偏远岛屿',
    '🌋 赫德岛机场 - 亚南极火山岛'
  ]
};
