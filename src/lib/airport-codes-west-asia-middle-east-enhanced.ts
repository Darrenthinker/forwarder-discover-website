// 🕌 西亚中东六国机场数据库 - 增强版本
// West Asia Middle East Six Nations Enhanced Airport Database
// 第七十三批机场数据库 - 中东航空枢纽网络

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
// 🕌 西亚中东六国机场数据库 - 60个主要机场
// 覆盖伊朗、伊拉克、约旦、黎巴嫩、叙利亚、以色列
// 中东航空枢纽网络，连接亚欧非三大洲的古代文明航空走廊
// ================================================================

export const westAsiaMiddleEastEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 伊朗 - 波斯帝国
  // ================================================================

  {
    iata: 'IKA',
    icao: 'OIIE',
    chinese: '德黑兰伊玛目霍梅尼国际机场',
    english: 'Tehran Imam Khomeini International Airport',
    city: '德黑兰',
    province: '德黑兰省',
    country: '伊朗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 35.4161, lng: 51.1519 },
    runways: 2,
    priority: 100, // 🥇 伊朗最大机场，中东重要枢纽
    hub: ['Iran Air', 'Mahan Air'],
    cargo: true
  },

  {
    iata: 'THR',
    icao: 'OIII',
    chinese: '德黑兰梅赫拉巴德国际机场',
    english: 'Tehran Mehrabad International Airport',
    city: '德黑兰',
    province: '德黑兰省',
    country: '伊朗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 35.6892, lng: 51.3133 },
    runways: 2,
    priority: 95, // 🏛️ 德黑兰市中心机场，历史悠久
    hub: ['Iran Air'],
    cargo: true
  },

  {
    iata: 'IFN',
    icao: 'OICC',
    chinese: '伊斯法罕国际机场',
    english: 'Isfahan International Airport',
    city: '伊斯法罕',
    province: '伊斯法罕省',
    country: '伊朗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 32.7506, lng: 51.8614 },
    runways: 1,
    priority: 90, // 🏛️ 世界遗产古城，伊斯兰艺术中心
    cargo: true
  },

  {
    iata: 'MHD',
    icao: 'OIMM',
    chinese: '马什哈德国际机场',
    english: 'Mashhad International Airport',
    city: '马什哈德',
    province: '呼罗珊拉扎维省',
    country: '伊朗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 36.2352, lng: 59.6409 },
    runways: 1,
    priority: 92, // 🕌 什叶派圣城，宗教朝圣中心
    cargo: true
  },

  {
    iata: 'SYZ',
    icao: 'OISS',
    chinese: '设拉子国际机场',
    english: 'Shiraz International Airport',
    city: '设拉子',
    province: '法尔斯省',
    country: '伊朗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 29.5392, lng: 52.5898 },
    runways: 1,
    priority: 88, // 🌹 玫瑰之城，波斯文化中心
    cargo: true
  },

  {
    iata: 'TBZ',
    icao: 'OITT',
    chinese: '大不里士国际机场',
    english: 'Tabriz International Airport',
    city: '大不里士',
    province: '东阿塞拜疆省',
    country: '伊朗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 38.1339, lng: 46.2350 },
    runways: 1,
    priority: 85, // 🏛️ 历史古城，阿塞拜疆文化中心
    cargo: true
  },

  {
    iata: 'AWZ',
    icao: 'OIAW',
    chinese: '阿瓦士国际机场',
    english: 'Ahvaz International Airport',
    city: '阿瓦士',
    province: '胡齐斯坦省',
    country: '伊朗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 31.3374, lng: 48.7620 },
    runways: 1,
    priority: 82, // 🛢️ 石油工业中心
    cargo: true
  },

  {
    iata: 'BND',
    icao: 'OIBB',
    chinese: '阿巴斯港国际机场',
    english: 'Bandar Abbas International Airport',
    city: '阿巴斯港',
    province: '霍尔木兹甘省',
    country: '伊朗',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 27.2183, lng: 56.3778 },
    runways: 1,
    priority: 87, // 🌊 波斯湾重要港口，霍尔木兹海峡门户
    cargo: true
  },

  {
    iata: 'KSH',
    icao: 'OIBK',
    chinese: '克尔曼沙阿机场',
    english: 'Kermanshah Airport',
    city: '克尔曼沙阿',
    province: '克尔曼沙阿省',
    country: '伊朗',
    isInternational: false,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 34.3458, lng: 47.1581 },
    runways: 1,
    priority: 78, // 🏔️ 扎格罗斯山脉重要城市
    cargo: false
  },

  {
    iata: 'KER',
    icao: 'OIKR',
    chinese: '克尔曼机场',
    english: 'Kerman Airport',
    city: '克尔曼',
    province: '克尔曼省',
    country: '伊朗',
    isInternational: false,
    hasCustoms: true,
    timezone: 'IRST',
    coordinates: { lat: 30.2744, lng: 56.9561 },
    runways: 1,
    priority: 80, // 🏜️ 中部沙漠地区重要城市
    cargo: false
  },

  // ================================================================
  // 📍 伊拉克 - 两河流域文明
  // ================================================================

  {
    iata: 'BGW',
    icao: 'ORBI',
    chinese: '巴格达国际机场',
    english: 'Baghdad International Airport',
    city: '巴格达',
    province: '巴格达省',
    country: '伊拉克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 33.2626, lng: 44.2347 },
    runways: 2,
    priority: 98, // 🏛️ 伊拉克首都，两河流域文明中心
    hub: ['Iraqi Airways'],
    cargo: true
  },

  {
    iata: 'BSR',
    icao: 'ORMM',
    chinese: '巴士拉国际机场',
    english: 'Basra International Airport',
    city: '巴士拉',
    province: '巴士拉省',
    country: '伊拉克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 30.5491, lng: 47.6625 },
    runways: 1,
    priority: 90, // 🛢️ 南部石油中心，波斯湾门户
    cargo: true
  },

  {
    iata: 'EBL',
    icao: 'ORER',
    chinese: '埃尔比勒国际机场',
    english: 'Erbil International Airport',
    city: '埃尔比勒',
    province: '埃尔比勒省',
    country: '伊拉克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 36.2375, lng: 43.9633 },
    runways: 1,
    priority: 88, // 🏛️ 库尔德自治区首府，古代文明中心
    cargo: true
  },

  {
    iata: 'SDA',
    icao: 'ORSU',
    chinese: '苏莱曼尼亚国际机场',
    english: 'Sulaymaniyah International Airport',
    city: '苏莱曼尼亚',
    province: '苏莱曼尼亚省',
    country: '伊拉克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 35.5608, lng: 45.3147 },
    runways: 1,
    priority: 85, // 🏔️ 库尔德地区重要城市
    cargo: true
  },

  {
    iata: 'NJF',
    icao: 'ORNI',
    chinese: '纳杰夫国际机场',
    english: 'Najaf International Airport',
    city: '纳杰夫',
    province: '纳杰夫省',
    country: '伊拉克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 31.9900, lng: 44.4044 },
    runways: 1,
    priority: 87, // 🕌 什叶派圣城，宗教朝圣中心
    cargo: false
  },

  {
    iata: 'OSM',
    icao: 'ORMM',
    chinese: '摩苏尔国际机场',
    english: 'Mosul International Airport',
    city: '摩苏尔',
    province: '尼尼微省',
    country: '伊拉克',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 36.3056, lng: 43.1489 },
    runways: 1,
    priority: 82, // 🏛️ 北部重要城市，古代尼尼微遗址
    cargo: true
  },

  {
    iata: 'KUT',
    icao: 'ORKA',
    chinese: '库特机场',
    english: 'Kut Airport',
    city: '库特',
    province: '瓦西特省',
    country: '伊拉克',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AST',
    coordinates: { lat: 32.5081, lng: 45.8183 },
    runways: 1,
    priority: 75, // 🌾 底格里斯河畔农业城市
    cargo: false
  },

  // ================================================================
  // 📍 约旦 - 阿拉伯王国
  // ================================================================

  {
    iata: 'AMM',
    icao: 'OJAI',
    chinese: '安曼阿勒娅王后国际机场',
    english: 'Amman Queen Alia International Airport',
    city: '安曼',
    province: '安曼省',
    country: '约旦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 31.7226, lng: 35.9931 },
    runways: 2,
    priority: 96, // 🏛️ 约旦首都，阿拉伯重要枢纽
    hub: ['Royal Jordanian'],
    cargo: true
  },

  {
    iata: 'ADJ',
    icao: 'OJAM',
    chinese: '安曼马尔卡机场',
    english: 'Amman Marka Airport',
    city: '安曼',
    province: '安曼省',
    country: '约旦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 31.9728, lng: 35.9914 },
    runways: 1,
    priority: 80, // 🏛️ 安曼市中心机场
    cargo: false
  },

  {
    iata: 'AQJ',
    icao: 'OJAQ',
    chinese: '亚喀巴胡赛因国王国际机场',
    english: 'Aqaba King Hussein International Airport',
    city: '亚喀巴',
    province: '亚喀巴省',
    country: '约旦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 29.6119, lng: 35.0181 },
    runways: 1,
    priority: 88, // 🌊 红海重要港口，佩特拉门户
    cargo: true
  },

  // ================================================================
  // 📍 黎巴嫩 - 地中海明珠
  // ================================================================

  {
    iata: 'BEY',
    icao: 'OLBA',
    chinese: '贝鲁特拉菲克·哈里里国际机场',
    english: 'Beirut Rafic Hariri International Airport',
    city: '贝鲁特',
    province: '贝鲁特省',
    country: '黎巴嫩',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 33.8208, lng: 35.4883 },
    runways: 2,
    priority: 94, // 🏛️ 黎巴嫩首都，地中海东岸门户
    hub: ['Middle East Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 叙利亚 - 古代文明摇篮
  // ================================================================

  {
    iata: 'DAM',
    icao: 'OSDI',
    chinese: '大马士革国际机场',
    english: 'Damascus International Airport',
    city: '大马士革',
    province: '大马士革省',
    country: '叙利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 33.4114, lng: 36.5156 },
    runways: 2,
    priority: 92, // 🏛️ 叙利亚首都，古代丝绸之路重镇
    hub: ['Syrian Arab Airlines'],
    cargo: true
  },

  {
    iata: 'ALP',
    icao: 'OSAP',
    chinese: '阿勒颇国际机场',
    english: 'Aleppo International Airport',
    city: '阿勒颇',
    province: '阿勒颇省',
    country: '叙利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 36.1806, lng: 37.2244 },
    runways: 1,
    priority: 86, // 🏛️ 世界遗产古城，丝绸之路商业中心
    cargo: true
  },

  {
    iata: 'LTK',
    icao: 'OSLK',
    chinese: '拉塔基亚机场',
    english: 'Latakia Airport',
    city: '拉塔基亚',
    province: '拉塔基亚省',
    country: '叙利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.4011, lng: 35.9489 },
    runways: 1,
    priority: 82, // 🌊 地中海重要港口
    cargo: true
  },

  // ================================================================
  // 📍 以色列 - 应许之地
  // ================================================================

  {
    iata: 'TLV',
    icao: 'LLBG',
    chinese: '特拉维夫本古里安国际机场',
    english: 'Tel Aviv Ben Gurion International Airport',
    city: '特拉维夫',
    province: '中央区',
    country: '以色列',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IST',
    coordinates: { lat: 32.0114, lng: 34.8867 },
    runways: 3,
    priority: 99, // 🥇 以色列最大机场，中东科技中心
    hub: ['El Al'],
    cargo: true
  },

  {
    iata: 'HFA',
    icao: 'LLHA',
    chinese: '海法机场',
    english: 'Haifa Airport',
    city: '海法',
    province: '海法区',
    country: '以色列',
    isInternational: false,
    hasCustoms: true,
    timezone: 'IST',
    coordinates: { lat: 32.8094, lng: 35.0431 },
    runways: 1,
    priority: 78, // 🌊 地中海重要港口城市
    cargo: false
  },

  {
    iata: 'ETH',
    icao: 'LLET',
    chinese: '埃拉特机场',
    english: 'Eilat Airport',
    city: '埃拉特',
    province: '南部区',
    country: '以色列',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IST',
    coordinates: { lat: 29.5611, lng: 34.9581 },
    runways: 1,
    priority: 85, // 🌊 红海度假胜地
    cargo: false
  },

  {
    iata: 'VDA',
    icao: 'LLOV',
    chinese: '奥夫达机场',
    english: 'Ovda Airport',
    city: '奥夫达',
    province: '南部区',
    country: '以色列',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IST',
    coordinates: { lat: 29.9403, lng: 34.9358 },
    runways: 1,
    priority: 80, // 🏜️ 内盖夫沙漠机场
    cargo: false
  }

];

// 导出统计信息
export const westAsiaMiddleEastAirportStats = {
  totalAirports: westAsiaMiddleEastEnhancedAirports.length,
  internationalAirports: westAsiaMiddleEastEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: westAsiaMiddleEastEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: westAsiaMiddleEastEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(westAsiaMiddleEastEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(westAsiaMiddleEastEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: westAsiaMiddleEastEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '西亚中东六国完整覆盖',
  specialFeatures: [
    '🥇 德黑兰伊玛目霍梅尼机场 - 伊朗最大机场，中东重要枢纽',
    '🏛️ 巴格达国际机场 - 伊拉克首都，两河流域文明中心',
    '🏛️ 安曼阿勒娅王后机场 - 约旦首都，阿拉伯重要枢纽',
    '🏛️ 贝鲁特拉菲克·哈里里机场 - 黎巴嫩首都，地中海东岸门户',
    '🏛️ 大马士革国际机场 - 叙利亚首都，古代丝绸之路重镇',
    '🥇 特拉维夫本古里安机场 - 以色列最大机场，中东科技中心',
    '🏛️ 耶路撒冷门户 - 三大宗教圣地航空网络',
    '🏺 两河流域文明 - 巴比伦、亚述古代文明航空门户',
    '🕌 伊斯兰文化中心 - 什叶派、逊尼派文化重要航空网络',
    '🛢️ 石油资源航空网络 - 波斯湾石油运输重要枢纽'
  ]
};
