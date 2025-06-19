// 🇿🇦 南非机场数据库 - 增强版本
// South Africa Enhanced Airport Database
// 第二十批机场数据库 - 非洲大洲开始

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
// 🇿🇦 南非共和国机场数据库 - 20个主要机场
// 覆盖9个省份：豪登省、西开普省、夸祖鲁-纳塔尔省、东开普省、
// 林波波省、普马兰加省、自由邦省、西北省、北开普省
// ================================================================

export const southAfricaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 豪登省 (Gauteng) - 经济中心
  // ================================================================

  {
    iata: 'JNB',
    icao: 'FAOR',
    chinese: '约翰内斯堡奥利弗·坦博国际机场',
    english: 'Johannesburg OR Tambo International Airport',
    city: '约翰内斯堡',
    province: '豪登省',
    country: '南非',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAST',
    coordinates: { lat: -26.1392, lng: 28.2460 },
    runways: 4,
    priority: 100, // 🥇 南非最大国际枢纽
    hub: ['南非航空', '芒果航空', 'LIFT航空'],
    cargo: true
  },

  {
    iata: 'HLA',
    icao: 'FALA',
    chinese: '兰塞里亚机场',
    english: 'Lanseria International Airport',
    city: '约翰内斯堡',
    province: '豪登省',
    country: '南非',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAST',
    coordinates: { lat: -25.9385, lng: 27.9261 },
    runways: 2,
    priority: 85, // 🏢 约翰内斯堡第二国际机场
    hub: ['Kulula.com'],
    cargo: true
  },

  {
    iata: 'PRY',
    icao: 'FAWB',
    chinese: '普勒托利亚万德比尔帕克机场',
    english: 'Pretoria Wonderboom Airport',
    city: '比勒陀利亚',
    province: '豪登省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -25.6539, lng: 28.1242 },
    runways: 2,
    priority: 75, // 🏛️ 行政首都机场
    cargo: false
  },

  // ================================================================
  // 📍 西开普省 (Western Cape) - 旅游中心
  // ================================================================

  {
    iata: 'CPT',
    icao: 'FACT',
    chinese: '开普敦国际机场',
    english: 'Cape Town International Airport',
    city: '开普敦',
    province: '西开普省',
    country: '南非',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAST',
    coordinates: { lat: -33.9649, lng: 18.6017 },
    runways: 2,
    priority: 98, // 🏔️ 立法首都，世界旅游胜地
    hub: ['FlySafair', 'Airlink'],
    cargo: true
  },

  {
    iata: 'GRJ',
    icao: 'FAGG',
    chinese: '乔治机场',
    english: 'George Airport',
    city: '乔治',
    province: '西开普省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -34.0056, lng: 22.3789 },
    runways: 1,
    priority: 78, // 🏖️ 花园大道旅游门户
    cargo: false
  },

  // ================================================================
  // 📍 夸祖鲁-纳塔尔省 (KwaZulu-Natal) - 港口省份
  // ================================================================

  {
    iata: 'DUR',
    icao: 'FALE',
    chinese: '德班沙卡国王国际机场',
    english: 'Durban King Shaka International Airport',
    city: '德班',
    province: '夸祖鲁-纳塔尔省',
    country: '南非',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAST',
    coordinates: { lat: -29.6144, lng: 31.1197 },
    runways: 1,
    priority: 92, // 🚢 重要港口城市机场
    hub: ['FlySafair'],
    cargo: true
  },

  {
    iata: 'PMB',
    icao: 'FAPM',
    chinese: '彼得马里茨堡机场',
    english: 'Pietermaritzburg Airport',
    city: '彼得马里茨堡',
    province: '夸祖鲁-纳塔尔省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -29.6490, lng: 30.3987 },
    runways: 2,
    priority: 65, // 🏛️ 省会城市机场
    cargo: false
  },

  {
    iata: 'RCB',
    icao: 'FARB',
    chinese: '理查兹湾机场',
    english: 'Richards Bay Airport',
    city: '理查兹湾',
    province: '夸祖鲁-纳塔尔省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -28.7410, lng: 32.0921 },
    runways: 1,
    priority: 70, // ⚓ 重要港口机场
    cargo: true
  },

  // ================================================================
  // 📍 东开普省 (Eastern Cape) - 历史文化
  // ================================================================

  {
    iata: 'PLZ',
    icao: 'FAPE',
    chinese: '伊丽莎白港首席达维德·斯图尔曼机场',
    english: 'Port Elizabeth Chief Dawid Stuurman International Airport',
    city: '纳尔逊·曼德拉湾',
    province: '东开普省',
    country: '南非',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAST',
    coordinates: { lat: -33.9850, lng: 25.6173 },
    runways: 2,
    priority: 88, // 🏭 重要港口工业城市
    hub: ['Airlink'],
    cargo: true
  },

  {
    iata: 'ELS',
    icao: 'FAEL',
    chinese: '东伦敦机场',
    english: 'East London Airport',
    city: '东伦敦',
    province: '东开普省',
    country: '南非',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SAST',
    coordinates: { lat: -33.0356, lng: 27.8259 },
    runways: 2,
    priority: 80, // 🏖️ 东开普重要城市
    cargo: false
  },

  // ================================================================
  // 📍 自由邦省 (Free State) - 农业中心
  // ================================================================

  {
    iata: 'BFN',
    icao: 'FABL',
    chinese: '布隆方丹机场',
    english: 'Bloemfontein Airport',
    city: '布隆方丹',
    province: '自由邦省',
    country: '南非',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SAST',
    coordinates: { lat: -29.0927, lng: 26.3024 },
    runways: 2,
    priority: 83, // ⚖️ 司法首都机场
    cargo: false
  },

  // ================================================================
  // 📍 普马兰加省 (Mpumalanga) - 旅游胜地
  // ================================================================

  {
    iata: 'MQP',
    icao: 'FAMN',
    chinese: '内尔斯普雷特机场',
    english: 'Nelspruit Mpumalanga Kruger Airport',
    city: '内尔斯普雷特',
    province: '普马兰加省',
    country: '南非',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAST',
    coordinates: { lat: -25.3832, lng: 31.1056 },
    runways: 1,
    priority: 86, // 🦁 克鲁格国家公园门户
    hub: ['Airlink'],
    cargo: false
  },

  // ================================================================
  // 📍 林波波省 (Limpopo) - 北部边境
  // ================================================================

  {
    iata: 'PTG',
    icao: 'FAPP',
    chinese: '波罗克瓦尼机场',
    english: 'Polokwane Airport',
    city: '波罗克瓦尼',
    province: '林波波省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -23.8453, lng: 29.4845 },
    runways: 1,
    priority: 72, // 🌍 省会城市机场
    cargo: false
  },

  // ================================================================
  // 📍 西北省 (North West) - 矿业重镇
  // ================================================================

  {
    iata: 'MBD',
    icao: 'FAMM',
    chinese: '马菲肯机场',
    english: 'Mmabatho Airport',
    city: '马菲肯',
    province: '西北省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -25.5444, lng: 25.5480 },
    runways: 1,
    priority: 68, // 💎 钻石之都附近
    cargo: false
  },

  {
    iata: 'KIM',
    icao: 'FAKM',
    chinese: '金伯利机场',
    english: 'Kimberley Airport',
    city: '金伯利',
    province: '北开普省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -28.8027, lng: 24.7651 },
    runways: 2,
    priority: 76, // 💎 钻石之都
    cargo: false
  },

  // ================================================================
  // 📍 北开普省 (Northern Cape) - 广袤内陆
  // ================================================================

  {
    iata: 'AGZ',
    icao: 'FAAG',
    chinese: '阿平顿机场',
    english: 'Aggeneys Airport',
    city: '阿平顿',
    province: '北开普省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -29.2817, lng: 18.8136 },
    runways: 1,
    priority: 55, // 🏜️ 偏远内陆机场
    cargo: false
  },

  // ================================================================
  // 📍 特殊旅游目的地机场
  // ================================================================

  {
    iata: 'HDS',
    icao: 'FAHS',
    chinese: '霍德斯普鲁特机场',
    english: 'Hoedspruit Airport',
    city: '霍德斯普鲁特',
    province: '林波波省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -24.3686, lng: 30.9287 },
    runways: 1,
    priority: 74, // 🦁 野生动物园门户
    cargo: false
  },

  {
    iata: 'SBU',
    icao: 'FASK',
    chinese: '斯库库扎机场',
    english: 'Skukuza Airport',
    city: '斯库库扎',
    province: '普马兰加省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -24.9608, lng: 31.5883 },
    runways: 1,
    priority: 77, // 🦁 克鲁格国家公园内机场
    cargo: false
  },

  {
    iata: 'UTN',
    icao: 'FAUP',
    chinese: '厄姆塔塔机场',
    english: 'Umtata Airport',
    city: '姆塔塔',
    province: '东开普省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -31.5478, lng: 28.6739 },
    runways: 1,
    priority: 66, // 🏔️ 特兰斯凯地区机场
    cargo: false
  },

  {
    iata: 'ULD',
    icao: 'FAUL',
    chinese: '乌兰迪机场',
    english: 'Ulundi Airport',
    city: '乌兰迪',
    province: '夸祖鲁-纳塔尔省',
    country: '南非',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SAST',
    coordinates: { lat: -28.3206, lng: 31.4158 },
    runways: 1,
    priority: 58, // 🏛️ 历史文化城市
    cargo: false
  }

];

// 导出统计信息
export const southAfricaAirportStats = {
  totalAirports: southAfricaEnhancedAirports.length,
  internationalAirports: southAfricaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: southAfricaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: southAfricaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(southAfricaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: southAfricaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '南非9个省份完整覆盖',
  specialFeatures: [
    '🥇 约翰内斯堡OR Tambo - 南非最大航空枢纽',
    '🏔️ 开普敦 - 世界知名旅游目的地',
    '🚢 德班 - 重要港口城市',
    '🦁 克鲁格国家公园机场群 - 野生动物观光',
    '💎 金伯利 - 钻石之都历史机场',
    '⚖️ 三个首都城市机场 - 行政、立法、司法'
  ]
};
