// 🌍 北非三国机场数据库 - 增强版本
// North Africa Three Nations Enhanced Airport Database
// 第七十六批机场数据库 - 北非航空网络

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
// 🌍 北非三国机场数据库 - 30个主要机场
// 覆盖摩洛哥、阿尔及利亚、突尼斯
// 北非航空网络，连接地中海与撒哈拉沙漠的北非航空走廊
// ================================================================

export const northAfricaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 摩洛哥 - 马格里布明珠
  // ================================================================

  {
    iata: 'CMN',
    icao: 'GMMN',
    chinese: '卡萨布兰卡穆罕默德五世国际机场',
    english: 'Casablanca Mohammed V International Airport',
    city: '卡萨布兰卡',
    province: '卡萨布兰卡-塞塔特',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 33.3675, lng: -7.5897 },
    runways: 3,
    priority: 100, // 🥇 摩洛哥最大机场，北非重要枢纽
    hub: ['Royal Air Maroc'],
    cargo: true
  },

  {
    iata: 'RAK',
    icao: 'GMMX',
    chinese: '马拉喀什梅纳拉机场',
    english: 'Marrakech Menara Airport',
    city: '马拉喀什',
    province: '马拉喀什-萨菲',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 31.6069, lng: -8.0363 },
    runways: 1,
    priority: 95, // 🏛️ 红城马拉喀什，世界遗产古城
    cargo: true
  },

  {
    iata: 'RBA',
    icao: 'GMME',
    chinese: '拉巴特萨勒机场',
    english: 'Rabat-Salé Airport',
    city: '拉巴特',
    province: '拉巴特-萨勒-凯尼特拉',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 34.0515, lng: -6.7515 },
    runways: 1,
    priority: 92, // 🏛️ 摩洛哥首都，政治中心
    cargo: true
  },

  {
    iata: 'FEZ',
    icao: 'GMFF',
    chinese: '非斯萨伊斯机场',
    english: 'Fez–Saïs Airport',
    city: '非斯',
    province: '非斯-梅克内斯',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 33.9273, lng: -4.9781 },
    runways: 1,
    priority: 88, // 🏛️ 世界遗产古城，摩洛哥精神之都
    cargo: false
  },

  {
    iata: 'TNG',
    icao: 'GMTN',
    chinese: '丹吉尔伊本·巴图塔机场',
    english: 'Tangier Ibn Battouta Airport',
    city: '丹吉尔',
    province: '丹吉尔-得土安-胡塞马',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 35.7269, lng: -5.9169 },
    runways: 1,
    priority: 90, // 🌊 直布罗陀海峡门户，连接欧非大陆
    cargo: true
  },

  {
    iata: 'AGA',
    icao: 'GMAD',
    chinese: '阿加迪尔阿尔马西拉机场',
    english: 'Agadir–Al Massira Airport',
    city: '阿加迪尔',
    province: '苏斯-马萨',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 30.3281, lng: -9.4131 },
    runways: 1,
    priority: 85, // 🌊 大西洋海岸度假胜地
    cargo: false
  },

  {
    iata: 'OUD',
    icao: 'GMFO',
    chinese: '乌季达安格德机场',
    english: 'Oujda Angads Airport',
    city: '乌季达',
    province: '东部',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 34.7872, lng: -1.9239 },
    runways: 1,
    priority: 82, // 🌍 摩洛哥-阿尔及利亚边境重要城市
    cargo: false
  },

  {
    iata: 'NDR',
    icao: 'GMMH',
    chinese: '纳祖尔机场',
    english: 'Nador International Airport',
    city: '纳祖尔',
    province: '东部',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 34.9886, lng: -3.0283 },
    runways: 1,
    priority: 80, // 🌊 地中海海岸重要港口
    cargo: false
  },

  {
    iata: 'CAS',
    icao: 'GMAN',
    chinese: '安法机场',
    english: 'Anfa Airport',
    city: '卡萨布兰卡',
    province: '卡萨布兰卡-塞塔特',
    country: '摩洛哥',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 33.5547, lng: -7.6614 },
    runways: 1,
    priority: 75, // ✈️ 卡萨布兰卡商务机场
    cargo: false
  },

  {
    iata: 'EUN',
    icao: 'GMML',
    chinese: '拉尤恩哈桑一世机场',
    english: 'Laâyoune Hassan I Airport',
    city: '拉尤恩',
    province: '拉尤恩-萨基亚·阿姆拉',
    country: '摩洛哥',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WET',
    coordinates: { lat: 27.1517, lng: -13.2194 },
    runways: 1,
    priority: 78, // 🏜️ 西撒哈拉地区重要城市
    cargo: false
  },

  // ================================================================
  // 📍 阿尔及利亚 - 非洲最大国家
  // ================================================================

  {
    iata: 'ALG',
    icao: 'DAAG',
    chinese: '阿尔及尔胡阿里·布迈丁国际机场',
    english: 'Algiers Houari Boumediene Airport',
    city: '阿尔及尔',
    province: '阿尔及尔',
    country: '阿尔及利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 36.6910, lng: 3.2154 },
    runways: 2,
    priority: 98, // 🏛️ 阿尔及利亚首都，马格里布中心
    hub: ['Air Algérie'],
    cargo: true
  },

  {
    iata: 'ORN',
    icao: 'DAOO',
    chinese: '奥兰艾哈迈德·本·贝拉机场',
    english: 'Oran Ahmed Ben Bella Airport',
    city: '奥兰',
    province: '奥兰',
    country: '阿尔及利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 35.6239, lng: -0.6211 },
    runways: 1,
    priority: 90, // 🏛️ 西部重要城市，地中海港口
    cargo: true
  },

  {
    iata: 'CZL',
    icao: 'DABC',
    chinese: '君士坦丁穆罕默德·布迪亚夫机场',
    english: 'Constantine Mohamed Boudiaf Airport',
    city: '君士坦丁',
    province: '君士坦丁',
    country: '阿尔及利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 36.2760, lng: 6.6204 },
    runways: 1,
    priority: 88, // 🏛️ 东部重要城市，悬崖古城
    cargo: false
  },

  {
    iata: 'AAE',
    icao: 'DABB',
    chinese: '安纳巴拉比·塔比·乌阿里机场',
    english: 'Annaba Rabah Bitat Airport',
    city: '安纳巴',
    province: '安纳巴',
    country: '阿尔及利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 36.8222, lng: 7.8092 },
    runways: 1,
    priority: 85, // 🌊 地中海海岸重要港口
    cargo: false
  },

  {
    iata: 'TLM',
    icao: 'DAON',
    chinese: '特莱姆森齐奈丁·齐丹机场',
    english: 'Tlemcen Zenata Airport',
    city: '特莱姆森',
    province: '特莱姆森',
    country: '阿尔及利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 35.0167, lng: -1.4500 },
    runways: 1,
    priority: 82, // 🏛️ 西北部历史文化城市
    cargo: false
  },

  {
    iata: 'BJA',
    icao: 'DAAE',
    chinese: '贝雅机场',
    english: 'Béjaïa Soummam Airport',
    city: '贝雅',
    province: '贝雅',
    country: '阿尔及利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 36.7119, lng: 5.0693 },
    runways: 1,
    priority: 80, // 🌊 地中海海岸，柏柏尔文化中心
    cargo: false
  },

  {
    iata: 'BSK',
    icao: 'DAUB',
    chinese: '比斯克拉机场',
    english: 'Biskra Airport',
    city: '比斯克拉',
    province: '比斯克拉',
    country: '阿尔及利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 34.7933, lng: 5.7381 },
    runways: 1,
    priority: 75, // 🏜️ 撒哈拉沙漠门户，椰枣绿洲
    cargo: false
  },

  {
    iata: 'GHA',
    icao: 'DAUG',
    chinese: '加尔代亚机场',
    english: 'Ghardaïa Noumerat Airport',
    city: '加尔代亚',
    province: '加尔代亚',
    country: '阿尔及利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 32.3842, lng: 3.7942 },
    runways: 1,
    priority: 78, // 🏛️ 姆扎卜河谷，世界遗产
    cargo: false
  },

  {
    iata: 'TMR',
    icao: 'DAAT',
    chinese: '塔曼拉塞特机场',
    english: 'Tamanrasset Airport',
    city: '塔曼拉塞特',
    province: '塔曼拉塞特',
    country: '阿尔及利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 22.8115, lng: 5.4508 },
    runways: 1,
    priority: 83, // 🏜️ 撒哈拉沙漠心脏，图阿雷格文化中心
    cargo: false
  },

  {
    iata: 'HME',
    icao: 'DAOH',
    chinese: '哈西梅萨乌德机场',
    english: 'Hassi Messaoud Airport',
    city: '哈西梅萨乌德',
    province: '瓦尔格拉',
    country: '阿尔及利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 31.6730, lng: 6.1404 },
    runways: 1,
    priority: 87, // 🛢️ 阿尔及利亚石油中心
    cargo: true
  },

  // ================================================================
  // 📍 突尼斯 - 迦太基文明
  // ================================================================

  {
    iata: 'TUN',
    icao: 'DTTA',
    chinese: '突尼斯迦太基国际机场',
    english: 'Tunis–Carthage International Airport',
    city: '突尼斯',
    province: '突尼斯',
    country: '突尼斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 36.8510, lng: 10.2272 },
    runways: 1,
    priority: 96, // 🏛️ 突尼斯首都，古代迦太基文明门户
    hub: ['Tunisair'],
    cargo: true
  },

  {
    iata: 'MIR',
    icao: 'DTMB',
    chinese: '莫纳斯提尔哈比卜·布尔吉巴机场',
    english: 'Monastir Habib Bourguiba International Airport',
    city: '莫纳斯提尔',
    province: '莫纳斯提尔',
    country: '突尼斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 35.7581, lng: 10.7547 },
    runways: 1,
    priority: 89, // 🌊 地中海度假胜地，总统故乡
    cargo: false
  },

  {
    iata: 'DJE',
    icao: 'DTTJ',
    chinese: '杰尔巴-杰尔吉斯国际机场',
    english: 'Djerba–Zarzis International Airport',
    city: '杰尔巴',
    province: '梅德宁',
    country: '突尼斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 33.8750, lng: 10.7755 },
    runways: 1,
    priority: 92, // 🏝️ 地中海珍珠，度假天堂
    cargo: false
  },

  {
    iata: 'SFA',
    icao: 'DTTS',
    chinese: '斯法克斯塔尔机场',
    english: 'Sfax–Thyna International Airport',
    city: '斯法克斯',
    province: '斯法克斯',
    country: '突尼斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 34.7178, lng: 10.6908 },
    runways: 1,
    priority: 86, // 🏛️ 经济重镇，橄榄油之都
    cargo: true
  },

  {
    iata: 'GAE',
    icao: 'DTTG',
    chinese: '加夫萨机场',
    english: 'Gafsa Airport',
    city: '加夫萨',
    province: '加夫萨',
    country: '突尼斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 34.4219, lng: 8.8225 },
    runways: 1,
    priority: 76, // 🏜️ 内陆重要城市，磷酸盐中心
    cargo: true
  },

  {
    iata: 'TOE',
    icao: 'DTTO',
    chinese: '托泽尔纳夫塔机场',
    english: 'Tozeur–Nefta International Airport',
    city: '托泽尔',
    province: '托泽尔',
    country: '突尼斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 33.9397, lng: 8.1106 },
    runways: 1,
    priority: 84, // 🏜️ 撒哈拉沙漠绿洲，椰枣之都
    cargo: false
  },

  {
    iata: 'GAQ',
    icao: 'DTTB',
    chinese: '加贝斯马塔马机场',
    english: 'Gabès Matmata Airport',
    city: '加贝斯',
    province: '加贝斯',
    country: '突尼斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 33.8769, lng: 10.1031 },
    runways: 1,
    priority: 81, // 🌊 地中海南岸重要港口
    cargo: false
  },

  {
    iata: 'TBJ',
    icao: 'DTKA',
    chinese: '塔巴卡机场',
    english: 'Tabarka–Aïn Draham International Airport',
    city: '塔巴卡',
    province: '雅南杜贝',
    country: '突尼斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 36.9797, lng: 8.8769 },
    runways: 1,
    priority: 79, // 🌊 地中海西北角，森林度假区
    cargo: false
  },

  {
    iata: 'KED',
    icao: 'DTNH',
    chinese: '凯鲁万机场',
    english: 'Kairouan Airport',
    city: '凯鲁万',
    province: '凯鲁万',
    country: '突尼斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 35.6658, lng: 10.1278 },
    runways: 1,
    priority: 77, // 🕌 伊斯兰教第四圣城，世界遗产
    cargo: false
  },

  {
    iata: 'EBM',
    icao: 'DTMN',
    chinese: '哈马马特机场',
    english: 'Enfidha–Hammamet International Airport',
    city: '恩菲达',
    province: '苏塞',
    country: '突尼斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 36.0756, lng: 10.4386 },
    runways: 1,
    priority: 88, // 🌊 哈马马特度假区新机场
    cargo: false
  }

];

// 导出统计信息
export const northAfricaAirportStats = {
  totalAirports: northAfricaEnhancedAirports.length,
  internationalAirports: northAfricaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: northAfricaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: northAfricaEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(northAfricaEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(northAfricaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: northAfricaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '北非三国完整覆盖',
  specialFeatures: [
    '🥇 卡萨布兰卡穆罕默德五世机场 - 摩洛哥最大机场，北非重要枢纽',
    '🏛️ 阿尔及尔胡阿里·布迈丁机场 - 阿尔及利亚首都，马格里布中心',
    '🏛️ 突尼斯迦太基机场 - 突尼斯首都，古代迦太基文明门户',
    '🌊 地中海北非海岸航空网络 - 连接欧洲与非洲的重要航空走廊',
    '🏜️ 撒哈拉沙漠门户机场 - 世界最大沙漠航空支持网络',
    '🏺 柏柏尔文化航空网络 - 北非原住民文化保护与旅游支持',
    '🕌 马格里布伊斯兰文化 - 阿拉伯-柏柏尔文化融合航空网络',
    '🏛️ 世界遗产古城 - 马拉喀什+非斯+凯鲁万+加尔代亚古城群',
    '🌊 直布罗陀海峡门户 - 连接欧洲与非洲的战略航空通道',
    '🛢️ 能源经济支持 - 阿尔及利亚石油天然气航空物流网络'
  ]
};
