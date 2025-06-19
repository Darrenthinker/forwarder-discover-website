// 🌊 太平洋岛国五国机场数据库 - 增强版本
// Pacific Islands Five Nations Enhanced Airport Database
// 第七十五批机场数据库 - 太平洋岛屿航空网络

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
// 🌊 太平洋岛国五国机场数据库 - 25个主要机场
// 覆盖斐济、巴布亚新几内亚、所罗门群岛、汤加、瓦努阿图
// 太平洋岛屿航空网络，连接大洋洲与太平洋岛国的度假航空走廊
// ================================================================

export const pacificIslandsEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 斐济 - 南太平洋珍珠
  // ================================================================

  {
    iata: 'NAN',
    icao: 'NFFN',
    chinese: '南迪国际机场',
    english: 'Nadi International Airport',
    city: '南迪',
    province: '西部区',
    country: '斐济',
    isInternational: true,
    hasCustoms: true,
    timezone: 'FJT',
    coordinates: { lat: -17.7553, lng: 177.4433 },
    runways: 1,
    priority: 100, // 🥇 斐济最大机场，南太平洋重要枢纽
    hub: ['Fiji Airways'],
    cargo: true
  },

  {
    iata: 'SUV',
    icao: 'NFSU',
    chinese: '苏瓦纳乌索里机场',
    english: 'Suva Nausori Airport',
    city: '苏瓦',
    province: '中央区',
    country: '斐济',
    isInternational: true,
    hasCustoms: true,
    timezone: 'FJT',
    coordinates: { lat: -18.0433, lng: 178.5592 },
    runways: 1,
    priority: 88, // 🏛️ 斐济首都机场
    cargo: false
  },

  {
    iata: 'LBS',
    icao: 'NFNL',
    chinese: '劳托卡机场',
    english: 'Labasa Airport',
    city: '劳托卡',
    province: '北部区',
    country: '斐济',
    isInternational: false,
    hasCustoms: true,
    timezone: 'FJT',
    coordinates: { lat: -16.4667, lng: 179.3400 },
    runways: 1,
    priority: 75, // 🌴 北部主要城市
    cargo: false
  },

  {
    iata: 'SVU',
    icao: 'NFSO',
    chinese: '萨武萨武机场',
    english: 'Savusavu Airport',
    city: '萨武萨武',
    province: '北部区',
    country: '斐济',
    isInternational: false,
    hasCustoms: true,
    timezone: 'FJT',
    coordinates: { lat: -16.8028, lng: 179.3411 },
    runways: 1,
    priority: 78, // 🌺 温泉度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 巴布亚新几内亚 - 美拉尼西亚门户
  // ================================================================

  {
    iata: 'POM',
    icao: 'AYPY',
    chinese: '莫尔兹比港杰克逊国际机场',
    english: 'Port Moresby Jacksons International Airport',
    city: '莫尔兹比港',
    province: '国家首都区',
    country: '巴布亚新几内亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -9.4439, lng: 147.2200 },
    runways: 1,
    priority: 96, // 🏛️ 巴布亚新几内亚首都，美拉尼西亚门户
    hub: ['Air Niugini'],
    cargo: true
  },

  {
    iata: 'LAE',
    icao: 'AYNZ',
    chinese: '莱城机场',
    english: 'Lae Nadzab Airport',
    city: '莱城',
    province: '莫罗贝省',
    country: '巴布亚新几内亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -6.5697, lng: 146.7258 },
    runways: 1,
    priority: 85, // 🏭 工业中心，第二大城市
    cargo: true
  },

  {
    iata: 'MAG',
    icao: 'AYMD',
    chinese: '马当机场',
    english: 'Madang Airport',
    city: '马当',
    province: '马当省',
    country: '巴布亚新几内亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -5.2069, lng: 145.7869 },
    runways: 1,
    priority: 80, // 🌊 北海岸重要港口
    cargo: false
  },

  {
    iata: 'WWK',
    icao: 'AYWK',
    chinese: '韦瓦克机场',
    english: 'Wewak Airport',
    city: '韦瓦克',
    province: '东塞皮克省',
    country: '巴布亚新几内亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -3.5833, lng: 143.6692 },
    runways: 1,
    priority: 78, // 🌿 东北部重要城市
    cargo: false
  },

  {
    iata: 'RAB',
    icao: 'AYTK',
    chinese: '拉包尔机场',
    english: 'Rabaul Airport',
    city: '拉包尔',
    province: '东新不列颠省',
    country: '巴布亚新几内亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -4.3406, lng: 152.3800 },
    runways: 1,
    priority: 82, // 🌋 火山活动区，历史重要性
    cargo: false
  },

  {
    iata: 'UNG',
    icao: 'AYGU',
    chinese: '乌恩古机场',
    english: 'Kiunga Airport',
    city: '乌恩古',
    province: '西部省',
    country: '巴布亚新几内亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -6.1258, lng: 141.2819 },
    runways: 1,
    priority: 76, // 🌿 西部边境城市
    cargo: false
  },

  // ================================================================
  // 📍 所罗门群岛 - 二战历史重地
  // ================================================================

  {
    iata: 'HIR',
    icao: 'AGGH',
    chinese: '霍尼亚拉亨德森国际机场',
    english: 'Honiara Henderson International Airport',
    city: '霍尼亚拉',
    province: '瓜达尔卡纳尔省',
    country: '所罗门群岛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SBT',
    coordinates: { lat: -9.4280, lng: 160.0550 },
    runways: 1,
    priority: 92, // 🏛️ 所罗门群岛首都，二战历史重地
    hub: ['Solomon Airlines'],
    cargo: true
  },

  {
    iata: 'MUA',
    icao: 'AGGM',
    chinese: '穆达机场',
    english: 'Munda Airport',
    city: '穆达',
    province: '西部省',
    country: '所罗门群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SBT',
    coordinates: { lat: -8.3281, lng: 157.2631 },
    runways: 1,
    priority: 80, // ✈️ 二战机场，现为旅游门户
    cargo: false
  },

  {
    iata: 'GZO',
    icao: 'AGGN',
    chinese: '吉佐机场',
    english: 'Gizo Airport',
    city: '吉佐',
    province: '西部省',
    country: '所罗门群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SBT',
    coordinates: { lat: -8.0978, lng: 156.8642 },
    runways: 1,
    priority: 75, // 🏝️ 西部群岛中心
    cargo: false
  },

  // ================================================================
  // 📍 汤加 - 波利尼西亚王国
  // ================================================================

  {
    iata: 'TBU',
    icao: 'NFTF',
    chinese: '努库阿洛法富阿阿莫图国际机场',
    english: 'Nuku\'alofa Fua\'amotu International Airport',
    city: '努库阿洛法',
    province: '汤加塔布岛',
    country: '汤加',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TOT',
    coordinates: { lat: -21.2411, lng: -175.1492 },
    runways: 1,
    priority: 90, // 🏛️ 汤加首都，波利尼西亚王国
    cargo: true
  },

  {
    iata: 'HPA',
    icao: 'NFTO',
    chinese: '哈阿派机场',
    english: 'Ha\'apai Airport',
    city: '哈阿派',
    province: '哈阿派群岛',
    country: '汤加',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TOT',
    coordinates: { lat: -19.7767, lng: -174.3417 },
    runways: 1,
    priority: 72, // 🏝️ 中部群岛
    cargo: false
  },

  {
    iata: 'VVU',
    icao: 'NFTV',
    chinese: '瓦瓦乌机场',
    english: 'Vava\'u Airport',
    city: '瓦瓦乌',
    province: '瓦瓦乌群岛',
    country: '汤加',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TOT',
    coordinates: { lat: -18.5850, lng: -173.9622 },
    runways: 1,
    priority: 78, // 🐋 观鲸胜地
    cargo: false
  },

  // ================================================================
  // 📍 瓦努阿图 - 火山岛国
  // ================================================================

  {
    iata: 'VLI',
    icao: 'NVVV',
    chinese: '维拉港保尔维拉国际机场',
    english: 'Port Vila Bauerfield International Airport',
    city: '维拉港',
    province: '谢法省',
    country: '瓦努阿图',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VUT',
    coordinates: { lat: -17.6933, lng: 168.3197 },
    runways: 1,
    priority: 94, // 🏛️ 瓦努阿图首都，火山岛国门户
    hub: ['Air Vanuatu'],
    cargo: true
  },

  {
    iata: 'SON',
    icao: 'NVSS',
    chinese: '卢甘维尔桑托机场',
    english: 'Luganville Santo Airport',
    city: '卢甘维尔',
    province: '桑马省',
    country: '瓦努阿图',
    isInternational: false,
    hasCustoms: true,
    timezone: 'VUT',
    coordinates: { lat: -15.5050, lng: 167.2197 },
    runways: 1,
    priority: 83, // 🌊 最大岛屿，潜水胜地
    cargo: false
  },

  {
    iata: 'TAH',
    icao: 'NVSA',
    chinese: '塔纳机场',
    english: 'Tanna Airport',
    city: '塔纳',
    province: '塔菲亚省',
    country: '瓦努阿图',
    isInternational: false,
    hasCustoms: true,
    timezone: 'VUT',
    coordinates: { lat: -19.4553, lng: 169.2233 },
    runways: 1,
    priority: 81, // 🌋 活火山观光，原始文化
    cargo: false
  },

  // ================================================================
  // 📍 其他重要太平洋岛屿机场
  // ================================================================

  {
    iata: 'KTF',
    icao: 'AYTK',
    chinese: '塔里机场',
    english: 'Tari Airport',
    city: '塔里',
    province: '南高地省',
    country: '巴布亚新几内亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -5.8450, lng: 142.9481 },
    runways: 1,
    priority: 74, // 🏔️ 高地部落文化中心
    cargo: false
  },

  {
    iata: 'KVG',
    icao: 'AYKV',
    chinese: '卡维恩机场',
    english: 'Kavieng Airport',
    city: '卡维恩',
    province: '新爱尔兰省',
    country: '巴布亚新几内亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -2.5794, lng: 150.8081 },
    runways: 1,
    priority: 77, // 🏝️ 新爱尔兰省府，潜水胜地
    cargo: false
  },

  {
    iata: 'GUR',
    icao: 'AYGU',
    chinese: '古鲁机场',
    english: 'Alotau Gurney Airport',
    city: '阿洛陶',
    province: '米尔恩湾省',
    country: '巴布亚新几内亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PGT',
    coordinates: { lat: -10.3172, lng: 150.3306 },
    runways: 1,
    priority: 76, // 🌊 东南部重要港口
    cargo: false
  },

  {
    iata: 'INU',
    icao: 'AGGI',
    chinese: '伊努机场',
    english: 'Kirakira Airport',
    city: '基拉基拉',
    province: '马基拉乌拉瓦省',
    country: '所罗门群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SBT',
    coordinates: { lat: -10.4494, lng: 161.8981 },
    runways: 1,
    priority: 73, // 🏝️ 东南部岛屿
    cargo: false
  },

  {
    iata: 'EPI',
    icao: 'NVSE',
    chinese: '埃皮岛机场',
    english: 'Epi Airport',
    city: '埃皮岛',
    province: '谢法省',
    country: '瓦努阿图',
    isInternational: false,
    hasCustoms: true,
    timezone: 'VUT',
    coordinates: { lat: -16.6833, lng: 168.3744 },
    runways: 1,
    priority: 70, // 🌺 小岛机场
    cargo: false
  }

];

// 导出统计信息
export const pacificIslandsAirportStats = {
  totalAirports: pacificIslandsEnhancedAirports.length,
  internationalAirports: pacificIslandsEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: pacificIslandsEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: pacificIslandsEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(pacificIslandsEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(pacificIslandsEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: pacificIslandsEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '太平洋岛国五国完整覆盖',
  specialFeatures: [
    '🥇 南迪国际机场 - 斐济最大机场，南太平洋重要枢纽',
    '🏛️ 莫尔兹比港杰克逊机场 - 巴布亚新几内亚首都，美拉尼西亚门户',
    '🏛️ 霍尼亚拉亨德森机场 - 所罗门群岛首都，二战历史重地',
    '🏛️ 努库阿洛法富阿阿莫图机场 - 汤加首都，波利尼西亚王国',
    '🏛️ 维拉港保尔维拉机场 - 瓦努阿图首都，火山岛国门户',
    '🌺 热带度假航空网络 - 世界顶级度假目的地完整覆盖',
    '🌋 火山群岛机场 - 环太平洋火山带航空支持网络',
    '🐠 珊瑚礁潜水航空网络 - 海洋生物多样性保护区门户',
    '🏝️ 美拉尼西亚+波利尼西亚文化 - 太平洋原住民文化航空网络',
    '✈️ 二战历史航空网络 - 太平洋战争重要战场纪念地门户'
  ]
};
