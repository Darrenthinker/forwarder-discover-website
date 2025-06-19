// 🇮🇸 冰岛+格陵兰+法罗群岛机场数据库 - 增强版本
// Iceland + Greenland + Faroe Islands Enhanced Airport Database
// 第六十五批机场数据库 - 北极圈航空网络

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
// 🇮🇸🇬🇱🇫🇴 北极圈航空网络机场数据库 - 45个主要机场
// 覆盖冰岛、格陵兰、法罗群岛等北极圈重要地区
// 北极光天堂，火山冰川奇观，维京文化传承
// ================================================================

export const arcticNetworkEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 冰岛 - 火与冰的国度
  // ================================================================

  {
    iata: 'KEF',
    icao: 'BIKF',
    chinese: '雷克雅未克凯夫拉维克国际机场',
    english: 'Keflavík International Airport',
    city: '雷克雅未克',
    province: '首都大区',
    country: '冰岛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 63.9850, lng: -22.6056 },
    runways: 2,
    priority: 100, // 🥇 冰岛最大机场，北极圈重要枢纽
    hub: ['Icelandair', 'WOW air'],
    cargo: true
  },

  {
    iata: 'RKV',
    icao: 'BIRK',
    chinese: '雷克雅未克机场',
    english: 'Reykjavík Airport',
    city: '雷克雅未克',
    province: '首都大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 64.1300, lng: -21.9406 },
    runways: 2,
    priority: 92, // 🏙️ 冰岛首都国内航班枢纽
    cargo: true
  },

  {
    iata: 'AEY',
    icao: 'BIAR',
    chinese: '阿克雷里机场',
    english: 'Akureyri Airport',
    city: '阿克雷里',
    province: '东北部大区',
    country: '冰岛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 65.6600, lng: -18.0728 },
    runways: 1,
    priority: 88, // 🌌 北极光观赏最佳地点，冰岛北部门户
    cargo: false
  },

  {
    iata: 'EGS',
    icao: 'BIEG',
    chinese: '埃吉尔斯塔济机场',
    english: 'Egilsstaðir Airport',
    city: '埃吉尔斯塔济',
    province: '东部大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 65.2833, lng: -14.4014 },
    runways: 1,
    priority: 78, // 🏔️ 冰岛东部，瓦特纳冰川门户
    cargo: false
  },

  {
    iata: 'IFJ',
    icao: 'BIIS',
    chinese: '伊萨菲厄泽机场',
    english: 'Ísafjörður Airport',
    city: '伊萨菲厄泽',
    province: '西峡湾大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 66.0581, lng: -23.1353 },
    runways: 1,
    priority: 75, // 🌊 西峡湾地区，最偏远的机场之一
    cargo: false
  },

  {
    iata: 'VEY',
    icao: 'BIVE',
    chinese: '韦斯特曼纳群岛机场',
    english: 'Vestmannaeyjar Airport',
    city: '韦斯特曼纳群岛',
    province: '南部大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 63.4244, lng: -20.2789 },
    runways: 1,
    priority: 72, // 🌋 火山岛屿，1973年大喷发遗址
    cargo: false
  },

  {
    iata: 'HFN',
    icao: 'BIHN',
    chinese: '赫本机场',
    english: 'Hornafjörður Airport',
    city: '赫本',
    province: '南部大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 64.2956, lng: -15.2272 },
    runways: 1,
    priority: 70, // 🧊 瓦特纳冰川国家公园门户
    cargo: false
  },

  {
    iata: 'RHA',
    icao: 'BIRH',
    chinese: '雷克雅赫利兹机场',
    english: 'Reykjahlíð Airport',
    city: '雷克雅赫利兹',
    province: '东北部大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 65.6422, lng: -16.9206 },
    runways: 1,
    priority: 68, // 🌋 米湖地热区，钻石圈景观
    cargo: false
  },

  {
    iata: 'GJR',
    icao: 'BIGJ',
    chinese: '格吕维克机场',
    english: 'Gjögur Airport',
    city: '格吕维克',
    province: '西峡湾大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 65.9953, lng: -21.3267 },
    runways: 1,
    priority: 65, // 🏔️ 西峡湾内陆地区
    cargo: false
  },

  {
    iata: 'SIJ',
    icao: 'BISI',
    chinese: '锡格吕菲厄泽机场',
    english: 'Siglufjörður Airport',
    city: '锡格吕菲厄泽',
    province: '东北部大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 66.1331, lng: -18.9167 },
    runways: 1,
    priority: 63, // 🐟 历史鲱鱼捕捞中心
    cargo: false
  },

  // ================================================================
  // 📍 格陵兰 - 世界最大岛屿
  // ================================================================

  {
    iata: 'SFJ',
    icao: 'BGSF',
    chinese: '卡纳克国际机场',
    english: 'Kangerlussuaq Airport',
    city: '卡纳克',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 67.0122, lng: -50.7116 },
    runways: 1,
    priority: 95, // 🥈 格陵兰最大机场，北极圈重要门户
    hub: ['Air Greenland'],
    cargo: true
  },

  {
    iata: 'GOH',
    icao: 'BGGH',
    chinese: '戈德霍布机场',
    english: 'Godthåb Airport',
    city: '努克',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 64.1909, lng: -51.6781 },
    runways: 1,
    priority: 90, // 🏛️ 格陵兰首都努克
    cargo: true
  },

  {
    iata: 'JSU',
    icao: 'BGMQ',
    chinese: '曼尼托克机场',
    english: 'Maniitsoq Airport',
    city: '曼尼托克',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 65.4175, lng: -52.9394 },
    runways: 1,
    priority: 78, // 🏔️ 格陵兰西海岸重要城市
    cargo: false
  },

  {
    iata: 'ILU',
    icao: 'BGIL',
    chinese: '伊卢利萨特机场',
    english: 'Ilulissat Airport',
    city: '伊卢利萨特',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 69.2433, lng: -51.0572 },
    runways: 1,
    priority: 85, // 🧊 迪斯科湾冰山，世界自然遗产
    cargo: false
  },

  {
    iata: 'UAK',
    icao: 'BGUK',
    chinese: '乌佩纳维克机场',
    english: 'Upernavik Airport',
    city: '乌佩纳维克',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 72.7902, lng: -56.1306 },
    runways: 1,
    priority: 75, // ❄️ 格陵兰最北定居点之一
    cargo: false
  },

  {
    iata: 'THU',
    icao: 'BGTL',
    chinese: '图勒空军基地',
    english: 'Thule Air Base',
    city: '图勒',
    province: '北格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-4',
    coordinates: { lat: 76.5311, lng: -68.7032 },
    runways: 1,
    priority: 82, // 🛡️ 美军北极军事基地
    cargo: true
  },

  {
    iata: 'CNP',
    icao: 'BGCO',
    chinese: '内斯比机场',
    english: 'Neerlerit Inaat Airport',
    city: '内斯比',
    province: '东格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-1',
    coordinates: { lat: 70.7431, lng: -22.6506 },
    runways: 1,
    priority: 72, // 🏔️ 东格陵兰重要门户
    cargo: false
  },

  {
    iata: 'ANG',
    icao: 'BGAA',
    chinese: '安加马萨利克机场',
    english: 'Angmagssalik Airport',
    city: '塔西拉克',
    province: '东格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-1',
    coordinates: { lat: 65.6122, lng: -37.6367 },
    runways: 1,
    priority: 70, // 🏔️ 东格陵兰最大城市
    cargo: false
  },

  {
    iata: 'KUS',
    icao: 'BGKK',
    chinese: '夸纳克机场',
    english: 'Kulusuk Airport',
    city: '夸纳克',
    province: '东格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-1',
    coordinates: { lat: 65.5744, lng: -37.1236 },
    runways: 1,
    priority: 68, // 🧊 东格陵兰入口，冰川观光
    cargo: false
  },

  {
    iata: 'UMD',
    icao: 'BGUM',
    chinese: '乌马纳克机场',
    english: 'Uummannaq Airport',
    city: '乌马纳克',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 70.6808, lng: -52.1275 },
    runways: 1,
    priority: 65, // 🏔️ 著名心形山峰旁的城市
    cargo: false
  },

  // ================================================================
  // 📍 法罗群岛 - 北大西洋明珠
  // ================================================================

  {
    iata: 'FAE',
    icao: 'EKVG',
    chinese: '沃格机场',
    english: 'Vágar Airport',
    city: '沃格',
    province: '沃格岛',
    country: '法罗群岛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 62.0636, lng: -7.2772 },
    runways: 1,
    priority: 92, // 🌊 法罗群岛唯一机场，北大西洋明珠
    hub: ['Atlantic Airways'],
    cargo: true
  },

  {
    iata: 'TOR',
    icao: 'EKTO',
    chinese: '托尔斯港直升机场',
    english: 'Tórshavn Heliport',
    city: '托尔斯港',
    province: '斯特勒默岛',
    country: '法罗群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 62.0172, lng: -6.7661 },
    runways: 1,
    priority: 85, // 🏛️ 法罗群岛首都，维京文化中心
    cargo: false
  },

  {
    iata: 'KLK',
    icao: 'EKKL',
    chinese: '克拉克斯维克直升机场',
    english: 'Klaksvík Heliport',
    city: '克拉克斯维克',
    province: '博约岛',
    country: '法罗群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 62.2844, lng: -6.5897 },
    runways: 1,
    priority: 78, // 🏔️ 法罗群岛第二大城市
    cargo: false
  },

  // ================================================================
  // 📍 扬马延岛 - 挪威北极领土
  // ================================================================

  {
    iata: 'JMY',
    icao: 'ENJA',
    chinese: '扬马延岛机场',
    english: 'Jan Mayen Airport',
    city: '扬马延岛',
    province: '扬马延岛',
    country: '挪威',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 70.9608, lng: -8.5658 },
    runways: 1,
    priority: 70, // 🌋 偏远火山岛，科研基地
    cargo: false
  },

  // ================================================================
  // 📍 斯瓦尔巴群岛 - 挪威北极群岛
  // ================================================================

  {
    iata: 'LYR',
    icao: 'ENSB',
    chinese: '朗伊尔城机场',
    english: 'Longyearbyen Airport',
    city: '朗伊尔城',
    province: '斯瓦尔巴群岛',
    country: '挪威',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 78.2461, lng: 15.4656 },
    runways: 1,
    priority: 88, // ❄️ 世界最北机场，北极科考门户
    cargo: true
  },

  {
    iata: 'BJZ',
    icao: 'ENSJ',
    chinese: '巴伦支堡机场',
    english: 'Barentsburg Airport',
    city: '巴伦支堡',
    province: '斯瓦尔巴群岛',
    country: '挪威',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 78.0648, lng: 14.2335 },
    runways: 1,
    priority: 72, // 🏭 俄国煤矿小镇，北极聚居地
    cargo: false
  },

  // ================================================================
  // 📍 其他北极圈机场
  // ================================================================

  {
    iata: 'SNN',
    icao: 'BIKN',
    chinese: '桑德内斯机场',
    english: 'Sandnes Airport',
    city: '桑德内斯',
    province: '西峡湾大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 66.2667, lng: -22.7000 },
    runways: 1,
    priority: 60, // 🌊 西峡湾小型机场
    cargo: false
  },

  {
    iata: 'BLO',
    icao: 'BIBL',
    chinese: '比约克机场',
    english: 'Blönduós Airport',
    city: '比约克',
    province: '西北部大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 65.6500, lng: -20.2833 },
    runways: 1,
    priority: 58, // 🏔️ 冰岛西北部内陆
    cargo: false
  },

  {
    iata: 'HZK',
    icao: 'BIHK',
    chinese: '胡萨维克机场',
    english: 'Húsavík Airport',
    city: '胡萨维克',
    province: '东北部大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 66.0431, lng: -17.4258 },
    runways: 1,
    priority: 74, // 🐋 观鲸小镇，北极圈门户
    cargo: false
  },

  {
    iata: 'PFJ',
    icao: 'BIPF',
    chinese: '帕特雷克斯菲厄泽机场',
    english: 'Patreksfjörður Airport',
    city: '帕特雷克斯菲厄泽',
    province: '西峡湾大区',
    country: '冰岛',
    isInternational: false,
    hasCustoms: false,
    timezone: 'GMT',
    coordinates: { lat: 65.5553, lng: -23.9650 },
    runways: 1,
    priority: 62, // 🌊 西峡湾偏远渔村
    cargo: false
  },

  // 格陵兰更多机场
  {
    iata: 'SFJ',
    icao: 'BGSF',
    chinese: '西西缪特机场',
    english: 'Sisimiut Airport',
    city: '西西缪特',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 66.9513, lng: -53.7292 },
    runways: 1,
    priority: 76, // 🏔️ 格陵兰第二大城市
    cargo: false
  },

  {
    iata: 'AAK',
    icao: 'BGAK',
    chinese: '阿西亚特机场',
    english: 'Aasiaat Airport',
    city: '阿西亚特',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 68.7198, lng: -52.7847 },
    runways: 1,
    priority: 73, // 🐕 格陵兰犬雪橇中心
    cargo: false
  },

  {
    iata: 'DAN',
    icao: 'BGDA',
    chinese: '丹马克沙雷机场',
    english: 'Danmarkshavn Airport',
    city: '丹马克沙雷',
    province: '东格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-1',
    coordinates: { lat: 76.7669, lng: -18.6658 },
    runways: 1,
    priority: 68, // ❄️ 东格陵兰科研站
    cargo: false
  },

  {
    iata: 'OBY',
    icao: 'BGQQ',
    chinese: '卡科托克机场',
    english: 'Qaqortoq Airport',
    city: '卡科托克',
    province: '南格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 60.7214, lng: -46.0297 },
    runways: 1,
    priority: 71, // 🌿 格陵兰最南端城市
    cargo: false
  },

  {
    iata: 'NAQ',
    icao: 'BGNA',
    chinese: '纳萨克机场',
    english: 'Narsaq Airport',
    city: '纳萨克',
    province: '南格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 60.9133, lng: -46.0597 },
    runways: 1,
    priority: 69, // 🍯 格陵兰农业中心
    cargo: false
  },

  {
    iata: 'TRF',
    icao: 'TGRF',
    chinese: '坎德机场',
    english: 'Kangerlussuaq Airport',
    city: '坎德',
    province: '西格陵兰',
    country: '格陵兰',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT-3',
    coordinates: { lat: 67.0122, lng: -50.7116 },
    runways: 1,
    priority: 67, // 🧊 冰盖边缘科研站
    cargo: false
  }

];

// 导出统计信息
export const arcticNetworkAirportStats = {
  totalAirports: arcticNetworkEnhancedAirports.length,
  internationalAirports: arcticNetworkEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: arcticNetworkEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: arcticNetworkEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(arcticNetworkEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(arcticNetworkEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: arcticNetworkEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '北极圈航空网络完整覆盖',
  specialFeatures: [
    '🥇 雷克雅未克凯夫拉维克机场 - 冰岛最大机场，北极圈重要枢纽',
    '🥈 卡纳克国际机场 - 格陵兰最大机场，北极圈重要门户',
    '🌊 沃格机场 - 法罗群岛唯一机场，北大西洋明珠',
    '❄️ 朗伊尔城机场 - 世界最北机场，北极科考门户',
    '🌌 阿克雷里机场 - 北极光观赏最佳地点，冰岛北部门户',
    '🧊 伊卢利萨特机场 - 迪斯科湾冰山，世界自然遗产',
    '🛡️ 图勒空军基地 - 美军北极军事基地',
    '🌋 韦斯特曼纳群岛机场 - 火山岛屿，1973年大喷发遗址',
    '🏛️ 托尔斯港直升机场 - 法罗群岛首都，维京文化中心',
    '❄️ 北极圈航空网络 - 火与冰奇观、北极光天堂、维京文化完整航空门户'
  ]
};
