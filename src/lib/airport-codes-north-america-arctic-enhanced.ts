// 🌨️ 北美阿拉斯加+育空地区机场数据库 - 增强版本
// North America Alaska & Yukon Enhanced Airport Database
// 第七十批机场数据库 - 北极圈北美航空网络

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
// 🌨️ 北美阿拉斯加+育空地区机场数据库 - 35个主要机场
// 覆盖阿拉斯加州、育空地区、西北地区、努纳武特地区
// 北极圈北美航空网络，连接北美大陆最后的重要区域
// ================================================================

export const northAmericaArcticEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 阿拉斯加州 - 美国最大州
  // ================================================================

  {
    iata: 'ANC',
    icao: 'PANC',
    chinese: '安克雷奇泰德·史蒂文斯国际机场',
    english: 'Anchorage Ted Stevens International Airport',
    city: '安克雷奇',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 61.2181, lng: -149.9003 },
    runways: 3,
    priority: 100, // 🥇 阿拉斯加最大机场，北极圈重要枢纽
    hub: ['Alaska Airlines'],
    cargo: true
  },

  {
    iata: 'FAI',
    icao: 'PAFA',
    chinese: '费尔班克斯国际机场',
    english: 'Fairbanks International Airport',
    city: '费尔班克斯',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 64.8378, lng: -147.8560 },
    runways: 2,
    priority: 95, // 🌌 北极光观赏中心，阿拉斯加内陆最大机场
    hub: ['Alaska Airlines'],
    cargo: true
  },

  {
    iata: 'JNU',
    icao: 'PAJN',
    chinese: '朱诺国际机场',
    english: 'Juneau International Airport',
    city: '朱诺',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 58.3548, lng: -134.5763 },
    runways: 1,
    priority: 92, // 🏛️ 阿拉斯加州首府
    cargo: true
  },

  {
    iata: 'KTN',
    icao: 'PAKT',
    chinese: '凯奇坎国际机场',
    english: 'Ketchikan International Airport',
    city: '凯奇坎',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 55.3556, lng: -131.7136 },
    runways: 1,
    priority: 85, // 🐻 阿拉斯加东南部门户，鲑鱼之都
    cargo: false
  },

  {
    iata: 'SIT',
    icao: 'PASI',
    chinese: '锡特卡洛基·古滕贝格机场',
    english: 'Sitka Rocky Gutierrez Airport',
    city: '锡特卡',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 57.0471, lng: -135.3616 },
    runways: 1,
    priority: 82, // 🦅 俄裔美国历史文化中心
    cargo: false
  },

  {
    iata: 'BET',
    icao: 'PABE',
    chinese: '伯塞尔机场',
    english: 'Bethel Airport',
    city: '伯塞尔',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 60.7798, lng: -161.8376 },
    runways: 2,
    priority: 80, // 🛶 尤皮克爱斯基摩人文化中心
    cargo: true
  },

  {
    iata: 'ADQ',
    icao: 'PADQ',
    chinese: '科迪亚克机场',
    english: 'Kodiak Airport',
    city: '科迪亚克',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 57.7500, lng: -152.4939 },
    runways: 2,
    priority: 85, // 🐻 科迪亚克棕熊栖息地
    cargo: true
  },

  {
    iata: 'OME',
    icao: 'PAOM',
    chinese: '诺姆机场',
    english: 'Nome Airport',
    city: '诺姆',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 64.5122, lng: -165.4453 },
    runways: 2,
    priority: 78, // ⛏️ 淘金热历史小镇
    cargo: false
  },

  {
    iata: 'BRW',
    icao: 'PABR',
    chinese: '巴罗维利·罗杰斯·威尔·罗杰斯纪念机场',
    english: 'Barrow Wiley Post-Will Rogers Memorial Airport',
    city: '巴罗（乌特恰吉维克）',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 71.2854, lng: -156.7661 },
    runways: 2,
    priority: 88, // ❄️ 美国最北城市，因纽特人文化中心
    cargo: true
  },

  {
    iata: 'AKN',
    icao: 'PAKN',
    chinese: '阿拉斯加金岛机场',
    english: 'King Salmon Airport',
    city: '金鲑鱼',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 58.6768, lng: -156.6493 },
    runways: 2,
    priority: 75, // 🎣 鲑鱼捕捞和野生动物观察中心
    cargo: false
  },

  {
    iata: 'DUT',
    icao: 'PADU',
    chinese: '达奇港机场',
    english: 'Dutch Harbor Airport',
    city: '达奇港',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 53.9001, lng: -166.5436 },
    runways: 1,
    priority: 82, // 🦀 阿留申群岛渔业中心
    cargo: true
  },

  {
    iata: 'WRG',
    icao: 'PAWG',
    chinese: '兰格尔机场',
    english: 'Wrangell Airport',
    city: '兰格尔',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 56.4844, lng: -132.3698 },
    runways: 1,
    priority: 70, // 🌲 通加斯国家森林门户
    cargo: false
  },

  {
    iata: 'PSG',
    icao: 'PAPG',
    chinese: '彼得斯堡詹姆斯·约翰逊机场',
    english: 'Petersburg James A. Johnson Airport',
    city: '彼得斯堡',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 56.8017, lng: -132.9453 },
    runways: 1,
    priority: 72, // 🐟 小威尼斯，挪威渔业文化
    cargo: false
  },

  {
    iata: 'YAK',
    icao: 'PAYA',
    chinese: '雅库塔特机场',
    english: 'Yakutat Airport',
    city: '雅库塔特',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 59.5033, lng: -139.6603 },
    runways: 1,
    priority: 75, // 🏔️ 冰川湾国家公园门户
    cargo: false
  },

  {
    iata: 'CDV',
    icao: 'PACV',
    chinese: '科尔多瓦机场',
    english: 'Cordova Airport',
    city: '科尔多瓦',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 60.4919, lng: -145.4776 },
    runways: 1,
    priority: 73, // 🐦 铜河三角洲候鸟迁徙站
    cargo: false
  },

  // ================================================================
  // 📍 加拿大育空地区 - 北方领土
  // ================================================================

  {
    iata: 'YXY',
    icao: 'CYXY',
    chinese: '怀特霍斯埃里克·尼尔森机场',
    english: 'Whitehorse Erik Nielsen Airport',
    city: '怀特霍斯',
    province: '育空地区',
    country: '加拿大',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PST',
    coordinates: { lat: 60.7097, lng: -135.0676 },
    runways: 2,
    priority: 93, // 🏛️ 育空地区首府，克朗代克淘金热历史
    hub: ['Air North'],
    cargo: true
  },

  {
    iata: 'YDA',
    icao: 'CYDA',
    chinese: '道森城机场',
    english: 'Dawson City Airport',
    city: '道森城',
    province: '育空地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PST',
    coordinates: { lat: 64.0431, lng: -139.1276 },
    runways: 1,
    priority: 85, // ⛏️ 克朗代克淘金热历史中心
    cargo: false
  },

  {
    iata: 'YWL',
    icao: 'CYWL',
    chinese: '沃森湖机场',
    english: 'Watson Lake Airport',
    city: '沃森湖',
    province: '育空地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PST',
    coordinates: { lat: 60.1164, lng: -128.8225 },
    runways: 1,
    priority: 78, // 🪧 路标森林小镇
    cargo: false
  },

  {
    iata: 'YOC',
    icao: 'CYOC',
    chinese: '旧克罗机场',
    english: 'Old Crow Airport',
    city: '旧克罗',
    province: '育空地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: false,
    timezone: 'PST',
    coordinates: { lat: 67.5706, lng: -139.8392 },
    runways: 1,
    priority: 72, // 🦌 第一民族文化保护区
    cargo: false
  },

  {
    iata: 'YEV',
    icao: 'CYEV',
    chinese: '因纽维克机场',
    english: 'Inuvik Airport',
    city: '因纽维克',
    province: '西北地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MST',
    coordinates: { lat: 68.3042, lng: -133.4828 },
    runways: 1,
    priority: 82, // 🌌 北极圈内重要枢纽，极光观赏
    cargo: true
  },

  // ================================================================
  // 📍 加拿大西北地区 - 北方领土
  // ================================================================

  {
    iata: 'YZF',
    icao: 'CYZF',
    chinese: '黄刀镇机场',
    english: 'Yellowknife Airport',
    city: '黄刀镇',
    province: '西北地区',
    country: '加拿大',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MST',
    coordinates: { lat: 62.4628, lng: -114.4403 },
    runways: 2,
    priority: 96, // 🏛️ 西北地区首府，钻石开采中心
    hub: ['Canadian North', 'Air Tindi'],
    cargo: true
  },

  {
    iata: 'YFH',
    icao: 'CYFH',
    chinese: '海堡史密斯机场',
    english: 'Fort Smith Airport',
    city: '海堡史密斯',
    province: '西北地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MST',
    coordinates: { lat: 60.0203, lng: -111.9619 },
    runways: 1,
    priority: 75, // 🌲 伍德布法罗国家公园门户
    cargo: false
  },

  {
    iata: 'YHY',
    icao: 'CYHY',
    chinese: '海堡好望角机场',
    english: 'Hay River Airport',
    city: '海堡好望角',
    province: '西北地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MST',
    coordinates: { lat: 60.8396, lng: -115.7828 },
    runways: 1,
    priority: 73, // 🚢 大奴湖航运中心
    cargo: true
  },

  {
    iata: 'YNM',
    icao: 'CYNM',
    chinese: '马尼托巴机场',
    english: 'Marigot Airport',
    city: '马尼托巴',
    province: '西北地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MST',
    coordinates: { lat: 61.7661, lng: -121.3372 },
    runways: 1,
    priority: 68, // 🌲 北方针叶林地区
    cargo: false
  },

  {
    iata: 'YTH',
    icao: 'CYTH',
    chinese: '汤普森机场',
    english: 'Thompson Airport',
    city: '汤普森',
    province: '马尼托巴省',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CST',
    coordinates: { lat: 55.8011, lng: -97.8642 },
    runways: 2,
    priority: 80, // ⛏️ 镍矿开采中心
    cargo: true
  },

  // ================================================================
  // 📍 加拿大努纳武特地区 - 北极领土
  // ================================================================

  {
    iata: 'YFB',
    icao: 'CYFB',
    chinese: '伊卡卢伊特机场',
    english: 'Iqaluit Airport',
    city: '伊卡卢伊特',
    province: '努纳武特地区',
    country: '加拿大',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EST',
    coordinates: { lat: 63.7564, lng: -68.5558 },
    runways: 1,
    priority: 90, // 🏛️ 努纳武特地区首府，因纽特人文化中心
    cargo: true
  },

  {
    iata: 'YRB',
    icao: 'CYRB',
    chinese: '兰金因莱特机场',
    english: 'Rankin Inlet Airport',
    city: '兰金因莱特',
    province: '努纳武特地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CST',
    coordinates: { lat: 62.8114, lng: -92.1158 },
    runways: 1,
    priority: 75, // ⛏️ 哈德逊湾矿业中心
    cargo: true
  },

  {
    iata: 'YCY',
    icao: 'CYCY',
    chinese: '剑桥湾机场',
    english: 'Cambridge Bay Airport',
    city: '剑桥湾',
    province: '努纳武特地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MST',
    coordinates: { lat: 69.1081, lng: -105.1175 },
    runways: 1,
    priority: 78, // 🧭 西北航道重要站点
    cargo: false
  },

  {
    iata: 'YBK',
    icao: 'CYBK',
    chinese: '贝克湖机场',
    english: 'Baker Lake Airport',
    city: '贝克湖',
    province: '努纳武特地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CST',
    coordinates: { lat: 64.2989, lng: -96.0778 },
    runways: 1,
    priority: 72, // 🦌 驯鹿迁徙路线中心
    cargo: false
  },

  {
    iata: 'YHI',
    icao: 'CYHI',
    chinese: '阿勒特机场',
    english: 'Alert Airport',
    city: '阿勒特',
    province: '努纳武特地区',
    country: '加拿大',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EST',
    coordinates: { lat: 82.5178, lng: -62.2806 },
    runways: 1,
    priority: 85, // ❄️ 世界最北永久定居点，天气站
    cargo: false
  },

  // ================================================================
  // 📍 其他重要北极地区机场
  // ================================================================

  {
    iata: 'CXH',
    icao: 'PACX',
    chinese: '冷湾机场',
    english: 'Cold Bay Airport',
    city: '冷湾',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 55.2062, lng: -162.7244 },
    runways: 1,
    priority: 76, // 🦢 阿拉斯加半岛国家野生动物保护区
    cargo: false
  },

  {
    iata: 'SGY',
    icao: 'PAGY',
    chinese: '史卡圭机场',
    english: 'Skagway Airport',
    city: '史卡圭',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 59.4601, lng: -135.3158 },
    runways: 1,
    priority: 74, // 🚂 白口渡口铁路历史小镇
    cargo: false
  },

  {
    iata: 'ENA',
    icao: 'PAFA',
    chinese: '肯纳机场',
    english: 'Kenai Airport',
    city: '肯纳',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 60.5731, lng: -151.2453 },
    runways: 2,
    priority: 77, // 🎣 肯纳半岛钓鱼胜地
    cargo: false
  },

  {
    iata: 'SCC',
    icao: 'PASC',
    chinese: '死马机场',
    english: 'Deadhorse Airport',
    city: '死马',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 70.1947, lng: -148.4656 },
    runways: 2,
    priority: 88, // 🛢️ 普拉德霍湾油田中心
    cargo: true
  },

  {
    iata: 'GAL',
    icao: 'PAGN',
    chinese: '加利纳机场',
    english: 'Galena Airport',
    city: '加利纳',
    province: '阿拉斯加州',
    country: '美国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AKST',
    coordinates: { lat: 64.7361, lng: -156.9375 },
    runways: 2,
    priority: 71, // 🏔️ 育空河流域小镇
    cargo: false
  }

];

// 导出统计信息
export const northAmericaArcticAirportStats = {
  totalAirports: northAmericaArcticEnhancedAirports.length,
  internationalAirports: northAmericaArcticEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: northAmericaArcticEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: northAmericaArcticEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(northAmericaArcticEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(northAmericaArcticEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: northAmericaArcticEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '北美阿拉斯加+育空地区完整覆盖',
  specialFeatures: [
    '🥇 安克雷奇泰德·史蒂文斯机场 - 阿拉斯加最大机场，北极圈重要枢纽',
    '🏛️ 黄刀镇机场 - 西北地区首府，钻石开采中心',
    '🌌 费尔班克斯机场 - 北极光观赏中心，阿拉斯加内陆最大机场',
    '🏛️ 怀特霍斯机场 - 育空地区首府，克朗代克淘金热历史',
    '🏛️ 伊卡卢伊特机场 - 努纳武特地区首府，因纽特人文化中心',
    '❄️ 巴罗机场 - 美国最北城市，因纽特人文化中心',
    '❄️ 阿勒特机场 - 世界最北永久定居点，天气站',
    '🛢️ 死马机场 - 普拉德霍湾油田中心',
    '⛏️ 道森城机场 - 克朗代克淘金热历史中心',
    '🌌 因纽维克机场 - 北极圈内重要枢纽，极光观赏'
  ]
};
