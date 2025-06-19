// 🏔️ 南美洲其他国家机场数据库 - 增强版本
// South America Other Countries Enhanced Airport Database
// 第八十批机场数据库 - 南美洲航空网络完善

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
// 🏔️ 南美洲其他国家机场数据库 - 20个主要机场
// 覆盖乌拉圭、巴拉圭、圭亚那、苏里南
// 南美洲航空网络完善，连接大西洋与内陆的南美航空走廊
// ================================================================

export const southAmericaOtherEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 乌拉圭 - 拉普拉塔河口明珠
  // ================================================================

  {
    iata: 'MVD',
    icao: 'SUMU',
    chinese: '蒙得维的亚卡拉斯科国际机场',
    english: 'Montevideo Carrasco International Airport',
    city: '蒙得维的亚',
    province: '卡内洛内斯',
    country: '乌拉圭',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UYT',
    coordinates: { lat: -34.8384, lng: -56.0308 },
    runways: 1,
    priority: 100, // 🥇 乌拉圭首都，拉普拉塔河口门户
    hub: ['PLUNA'],
    cargo: true
  },

  {
    iata: 'PDP',
    icao: 'SULS',
    chinese: '埃斯特角城拉古纳·德尔·索斯机场',
    english: 'Punta del Este Laguna del Sauce Airport',
    city: '埃斯特角城',
    province: '马尔多纳多',
    country: '乌拉圭',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UYT',
    coordinates: { lat: -34.8553, lng: -55.0942 },
    runways: 1,
    priority: 88, // 🌊 南美洲里维埃拉，度假胜地
    cargo: false
  },

  {
    iata: 'RVY',
    icao: 'SURI',
    chinese: '里维拉机场',
    english: 'Rivera Airport',
    city: '里维拉',
    province: '里维拉',
    country: '乌拉圭',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UYT',
    coordinates: { lat: -30.9747, lng: -55.4761 },
    runways: 1,
    priority: 78, // 🌍 乌拉圭-巴西边境重要城市
    cargo: false
  },

  {
    iata: 'STY',
    icao: 'SUSR',
    chinese: '萨尔托新贝林机场',
    english: 'Salto Nueva Hesperides Airport',
    city: '萨尔托',
    province: '萨尔托',
    country: '乌拉圭',
    isInternational: false,
    hasCustoms: true,
    timezone: 'UYT',
    coordinates: { lat: -31.4386, lng: -57.9853 },
    runways: 1,
    priority: 75, // 🌊 乌拉圭河重要港口
    cargo: false
  },

  {
    iata: 'PAY',
    icao: 'SUPD',
    chinese: '派桑杜坦西机场',
    english: 'Paysandú Tydeo Larre Borges Airport',
    city: '派桑杜',
    province: '派桑杜',
    country: '乌拉圭',
    isInternational: false,
    hasCustoms: true,
    timezone: 'UYT',
    coordinates: { lat: -32.3683, lng: -58.0619 },
    runways: 1,
    priority: 72, // 🌊 乌拉圭河重要港口
    cargo: false
  },

  // ================================================================
  // 📍 巴拉圭 - 南美洲心脏
  // ================================================================

  {
    iata: 'ASU',
    icao: 'SGAS',
    chinese: '亚松森西尔维奥·佩蒂罗西国际机场',
    english: 'Asunción Silvio Pettirossi International Airport',
    city: '亚松森',
    province: '中央',
    country: '巴拉圭',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PYT',
    coordinates: { lat: -25.2398, lng: -57.5196 },
    runways: 1,
    priority: 96, // 🏛️ 巴拉圭首都，南美洲心脏
    hub: ['Líneas Aéreas Paraguayas'],
    cargo: true
  },

  {
    iata: 'CIO',
    icao: 'SGCO',
    chinese: '东方市埃内斯托·科尔特斯机场',
    english: 'Ciudad del Este Ernesto Cortissoz Airport',
    city: '东方市',
    province: '上巴拉那',
    country: '巴拉圭',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PYT',
    coordinates: { lat: -25.4544, lng: -54.8431 },
    runways: 1,
    priority: 85, // 🌊 巴拉那河重要港口，三国边境
    cargo: true
  },

  {
    iata: 'ENC',
    icao: 'SGEN',
    chinese: '恩卡纳西翁机场',
    english: 'Encarnación Airport',
    city: '恩卡纳西翁',
    province: '伊塔普亚',
    country: '巴拉圭',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PYT',
    coordinates: { lat: -27.2281, lng: -55.8336 },
    runways: 1,
    priority: 80, // 🌊 巴拉那河南部重要港口
    cargo: false
  },

  {
    iata: 'PCJ',
    icao: 'SGPC',
    chinese: '佩德罗胡安卡瓦列罗机场',
    english: 'Pedro Juan Caballero Airport',
    city: '佩德罗胡安卡瓦列罗',
    province: '阿曼拜',
    country: '巴拉圭',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PYT',
    coordinates: { lat: -22.6389, lng: -55.8306 },
    runways: 1,
    priority: 76, // 🌍 巴拉圭-巴西边境重要城市
    cargo: false
  },

  {
    iata: 'COC',
    icao: 'SGCO',
    chinese: '康塞普西翁机场',
    english: 'Concepción Airport',
    city: '康塞普西翁',
    province: '康塞普西翁',
    country: '巴拉圭',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PYT',
    coordinates: { lat: -23.4422, lng: -57.4306 },
    runways: 1,
    priority: 73, // 🌾 北部农业重镇
    cargo: false
  },

  // ================================================================
  // 📍 圭亚那 - 大西洋海岸门户
  // ================================================================

  {
    iata: 'GEO',
    icao: 'SYCJ',
    chinese: '乔治敦切迪·贾根国际机场',
    english: 'Georgetown Cheddi Jagan International Airport',
    city: '乔治敦',
    province: '德梅拉拉-马海斯',
    country: '圭亚那',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GYT',
    coordinates: { lat: 6.4985, lng: -58.2542 },
    runways: 1,
    priority: 94, // 🏛️ 圭亚那首都，大西洋海岸门户
    hub: ['Caribbean Airlines'],
    cargo: true
  },

  {
    iata: 'OGL',
    icao: 'SYOG',
    chinese: '奥格尔机场',
    english: 'Ogle Airport',
    city: '乔治敦',
    province: '德梅拉拉-马海斯',
    country: '圭亚那',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GYT',
    coordinates: { lat: 6.8069, lng: -58.1056 },
    runways: 1,
    priority: 80, // ✈️ 乔治敦国内机场
    cargo: false
  },

  {
    iata: 'LTM',
    icao: 'SYLT',
    chinese: '莱瑟姆机场',
    english: 'Lethem Airport',
    city: '莱瑟姆',
    province: '上塔库图-上埃塞奎博',
    country: '圭亚那',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GYT',
    coordinates: { lat: 3.3733, lng: -59.7908 },
    runways: 1,
    priority: 75, // 🌍 圭亚那-巴西边境重要城市
    cargo: false
  },

  {
    iata: 'KAI',
    icao: 'SYEC',
    chinese: '凯图尔瀑布机场',
    english: 'Kaieteur Falls Airport',
    city: '凯图尔瀑布',
    province: '波塔罗-锡帕鲁尼',
    country: '圭亚那',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GYT',
    coordinates: { lat: 5.1756, lng: -59.4811 },
    runways: 1,
    priority: 82, // 🌊 世界最大单级瀑布，自然奇观
    cargo: false
  },

  {
    iata: 'AHL',
    icao: 'SYAH',
    chinese: '阿纳机场',
    english: 'Annai Airport',
    city: '阿纳',
    province: '上塔库图-上埃塞奎博',
    country: '圭亚那',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GYT',
    coordinates: { lat: 3.9594, lng: -59.1275 },
    runways: 1,
    priority: 70, // 🌴 圭亚那高地，生态旅游
    cargo: false
  },

  // ================================================================
  // 📍 苏里南 - 加勒比海南岸明珠
  // ================================================================

  {
    iata: 'PBM',
    icao: 'SMJP',
    chinese: '帕拉马里博约翰·阿道夫·企鹅国际机场',
    english: 'Paramaribo Johan Adolf Pengel International Airport',
    city: '帕拉马里博',
    province: '帕拉',
    country: '苏里南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SRT',
    coordinates: { lat: 5.4528, lng: -55.1878 },
    runways: 1,
    priority: 92, // 🏛️ 苏里南首都，加勒比海南岸门户
    hub: ['Surinam Airways'],
    cargo: true
  },

  {
    iata: 'ORG',
    icao: 'SMZO',
    chinese: '帕拉马里博泽奥多里亚机场',
    english: 'Paramaribo Zorg en Hoop Airport',
    city: '帕拉马里博',
    province: '帕拉',
    country: '苏里南',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SRT',
    coordinates: { lat: 5.8111, lng: -55.1906 },
    runways: 1,
    priority: 78, // ✈️ 帕拉马里博市内机场
    cargo: false
  },

  {
    iata: 'AGI',
    icao: 'SMWA',
    chinese: '瓦吉尼根机场',
    english: 'Wageningen Airport',
    city: '瓦吉尼根',
    province: '尼克里',
    country: '苏里南',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SRT',
    coordinates: { lat: 5.8403, lng: -56.6722 },
    runways: 1,
    priority: 72, // 🌾 西部农业重镇
    cargo: false
  },

  {
    iata: 'SMZ',
    icao: 'SMST',
    chinese: '斯托尔曼岛机场',
    english: 'Stoelmans Eiland Airport',
    city: '斯托尔曼岛',
    province: '锡帕利维尼',
    country: '苏里南',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SRT',
    coordinates: { lat: 4.3500, lng: -54.4167 },
    runways: 1,
    priority: 68, // 🌴 东南部内陆重镇
    cargo: false
  },

  {
    iata: 'ICK',
    icao: 'SMNI',
    chinese: '尼尤尼克里机场',
    english: 'Nieuw Nickerie Airport',
    city: '尼尤尼克里',
    province: '尼克里',
    country: '苏里南',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SRT',
    coordinates: { lat: 5.9556, lng: -57.0394 },
    runways: 1,
    priority: 74, // 🌊 苏里南河口重要港口
    cargo: false
  }

];

// 导出统计信息
export const southAmericaOtherAirportStats = {
  totalAirports: southAmericaOtherEnhancedAirports.length,
  internationalAirports: southAmericaOtherEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: southAmericaOtherEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: southAmericaOtherEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(southAmericaOtherEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(southAmericaOtherEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: southAmericaOtherEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '南美洲其他四国完整覆盖',
  specialFeatures: [
    '🥇 蒙得维的亚卡拉斯科机场 - 乌拉圭首都，拉普拉塔河口门户',
    '🏛️ 亚松森西尔维奥·佩蒂罗西机场 - 巴拉圭首都，南美洲心脏',
    '🏛️ 乔治敦切迪·贾根机场 - 圭亚那首都，大西洋海岸门户',
    '🏛️ 帕拉马里博约翰·阿道夫·企鹅机场 - 苏里南首都，加勒比海南岸门户',
    '🌊 埃斯特角城机场 - 南美洲里维埃拉，度假胜地',
    '🌊 凯图尔瀑布机场 - 世界最大单级瀑布，自然奇观',
    '🌊 大西洋南美海岸航空网络 - 连接巴西与阿根廷的南美东岸走廊',
    '🏔️ 内陆南美航空网络 - 巴拉圭内陆航空支持',
    '🌴 圭亚那高地航空网络 - 南美洲北部雨林与高地航空支持',
    '🌍 三国边境航空网络 - 巴拉圭、巴西、阿根廷边境地区航空支持'
  ]
};
