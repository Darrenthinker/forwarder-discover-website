// 🌍 中非国家机场数据库 - 增强版本
// Central Africa Countries Enhanced Airport Database
// 第八十四批机场数据库 - 非洲航空网络完善

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
// 🌍 中非国家机场数据库 - 22个主要机场
// 覆盖中非共和国、乍得、刚果共和国、赤道几内亚、加蓬、圣多美和普林西比
// 中部非洲航空网络完善，连接撒哈拉以南与几内亚湾的重要航空走廊
// ================================================================

export const centralAfricaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 中非共和国 - 非洲心脏
  // ================================================================

  {
    iata: 'BGF',
    icao: 'FEFF',
    chinese: '班吉·姆波科国际机场',
    english: 'Bangui M\'Poko International Airport',
    city: '班吉',
    province: '翁贝拉-姆波科',
    country: '中非共和国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 4.3985, lng: 18.5189 },
    runways: 1,
    priority: 92, // 🏛️ 中非共和国首都，非洲心脏
    hub: ['TAAG Angola Airlines'],
    cargo: true
  },

  {
    iata: 'BBT',
    icao: 'FEBT',
    chinese: '贝贝拉蒂机场',
    english: 'Berberati Airport',
    city: '贝贝拉蒂',
    province: '曼巴雷-卡代',
    country: '中非共和国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 4.2617, lng: 15.7856 },
    runways: 1,
    priority: 75, // 🌲 西南部森林重镇
    cargo: false
  },

  {
    iata: 'NDL',
    icao: 'FEND',
    chinese: '恩代莱机场',
    english: 'Ndele Airport',
    city: '恩代莱',
    province: '巴明吉-班戈兰',
    country: '中非共和国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 8.4169, lng: 20.6522 },
    runways: 1,
    priority: 72, // 🌾 北部萨瓦纳地区
    cargo: false
  },

  // ================================================================
  // 📍 乍得 - 撒哈拉南缘
  // ================================================================

  {
    iata: 'NDJ',
    icao: 'FTTJ',
    chinese: '恩贾梅纳国际机场',
    english: 'N\'Djamena International Airport',
    city: '恩贾梅纳',
    province: '恩贾梅纳',
    country: '乍得',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 12.1337, lng: 15.0340 },
    runways: 1,
    priority: 95, // 🏛️ 乍得首都，撒哈拉南缘重要门户
    hub: ['Toumai Air Tchad'],
    cargo: true
  },

  {
    iata: 'AEH',
    icao: 'FTTA',
    chinese: '阿贝歇机场',
    english: 'Abeche Airport',
    city: '阿贝歇',
    province: '瓦达伊',
    country: '乍得',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 13.8469, lng: 20.8442 },
    runways: 1,
    priority: 85, // 🌍 东部重要城市，苏丹边境
    cargo: true
  },

  {
    iata: 'MQQ',
    icao: 'FTTM',
    chinese: '蒙杜机场',
    english: 'Moundou Airport',
    city: '蒙杜',
    province: '西洛贡',
    country: '乍得',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 8.6242, lng: 16.0714 },
    runways: 1,
    priority: 80, // 🌊 洛贡河重要港口
    cargo: false
  },

  {
    iata: 'OGR',
    icao: 'FTTO',
    chinese: '邦戈尔机场',
    english: 'Bongor Airport',
    city: '邦戈尔',
    province: '马约-克比东',
    country: '乍得',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 10.2806, lng: 15.3742 },
    runways: 1,
    priority: 76, // 🌾 中部农业重镇
    cargo: false
  },

  // ================================================================
  // 📍 刚果共和国 - 刚果河北岸
  // ================================================================

  {
    iata: 'BZV',
    icao: 'FCBB',
    chinese: '布拉柴维尔马亚-玛亚国际机场',
    english: 'Brazzaville Maya-Maya Airport',
    city: '布拉柴维尔',
    province: '布拉柴维尔',
    country: '刚果共和国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: -4.2517, lng: 15.2531 },
    runways: 1,
    priority: 94, // 🏛️ 刚果共和国首都，刚果河北岸
    hub: ['ECAir'],
    cargo: true
  },

  {
    iata: 'PNR',
    icao: 'FCPP',
    chinese: '黑角安东尼奥·阿戈斯蒂尼奥·内托机场',
    english: 'Pointe-Noire Agostinho Neto Airport',
    city: '黑角',
    province: '黑角',
    country: '刚果共和国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: -4.8161, lng: 11.8864 },
    runways: 1,
    priority: 90, // 🌊 大西洋重要港口，石油中心
    cargo: true
  },

  {
    iata: 'DIS',
    icao: 'FCPL',
    chinese: '洛安戈机场',
    english: 'Loango Airport',
    city: '洛安戈',
    province: '库伊卢',
    country: '刚果共和国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: -4.6578, lng: 11.8531 },
    runways: 1,
    priority: 78, // 🌊 海岸线重要据点
    cargo: false
  },

  // ================================================================
  // 📍 赤道几内亚 - 几内亚湾石油国
  // ================================================================

  {
    iata: 'SSG',
    icao: 'FGSL',
    chinese: '马拉博国际机场',
    english: 'Malabo International Airport',
    city: '马拉博',
    province: '比奥科北',
    country: '赤道几内亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 3.7558, lng: 8.7086 },
    runways: 1,
    priority: 88, // 🏛️ 赤道几内亚首都，比奥科岛
    hub: ['Ceiba Intercontinental'],
    cargo: true
  },

  {
    iata: 'BSG',
    icao: 'FGBT',
    chinese: '巴塔机场',
    english: 'Bata Airport',
    city: '巴塔',
    province: '利托拉尔',
    country: '赤道几内亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 1.9055, lng: 9.8056 },
    runways: 1,
    priority: 86, // 🌍 大陆部分最大城市
    cargo: true
  },

  {
    iata: 'ANO',
    icao: 'FGAN',
    chinese: '安诺本机场',
    english: 'Annobon Airport',
    city: '圣安东尼奥德帕莱',
    province: '安诺本',
    country: '赤道几内亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: -1.4097, lng: 5.6311 },
    runways: 1,
    priority: 75, // 🏝️ 安诺本岛门户
    cargo: false
  },

  // ================================================================
  // 📍 加蓬 - 热带雨林之国
  // ================================================================

  {
    iata: 'LBV',
    icao: 'FOOL',
    chinese: '利伯维尔莱昂·姆巴国际机场',
    english: 'Libreville Leon M\'ba International Airport',
    city: '利伯维尔',
    province: '河口',
    country: '加蓬',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 0.4586, lng: 9.4122 },
    runways: 1,
    priority: 96, // 🏛️ 加蓬首都，几内亚湾重要门户
    hub: ['SN Brussels Airlines'],
    cargo: true
  },

  {
    iata: 'POG',
    icao: 'FOOG',
    chinese: '让蒂尔港机场',
    english: 'Port-Gentil Airport',
    city: '让蒂尔港',
    province: '奥果韦海洋',
    country: '加蓬',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: -0.7117, lng: 8.7542 },
    runways: 1,
    priority: 88, // 🛢️ 石油工业中心
    cargo: true
  },

  {
    iata: 'FOU',
    icao: 'FOOB',
    chinese: '弗朗斯维尔机场',
    english: 'Franceville Airport',
    city: '弗朗斯维尔',
    province: '上奥果韦',
    country: '加蓬',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: -1.6564, lng: 13.4383 },
    runways: 1,
    priority: 82, // 🏔️ 东南部山区重镇
    cargo: false
  },

  {
    iata: 'OYE',
    icao: 'FOOY',
    chinese: '奥耶姆机场',
    english: 'Oyem Airport',
    city: '奥耶姆',
    province: '沃勒-恩特姆',
    country: '加蓬',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 1.5431, lng: 11.5811 },
    runways: 1,
    priority: 78, // 🌲 北部森林重镇
    cargo: false
  },

  // ================================================================
  // 📍 圣多美和普林西比 - 几内亚湾岛国
  // ================================================================

  {
    iata: 'TMS',
    icao: 'FPST',
    chinese: '圣多美国际机场',
    english: 'Sao Tome International Airport',
    city: '圣多美',
    province: '圣多美',
    country: '圣多美和普林西比',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 0.3781, lng: 6.7122 },
    runways: 1,
    priority: 90, // 🏛️ 圣多美和普林西比首都，几内亚湾岛国
    hub: ['STP Airways'],
    cargo: true
  },

  {
    iata: 'PCP',
    icao: 'FPPR',
    chinese: '普林西比机场',
    english: 'Principe Airport',
    city: '圣安东尼奥',
    province: '普林西比',
    country: '圣多美和普林西比',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 1.6633, lng: 7.4111 },
    runways: 1,
    priority: 80, // 🏝️ 普林西比岛门户
    cargo: false
  },

  // ================================================================
  // 📍 刚果民主共和国东部（补充）
  // ================================================================

  {
    iata: 'GOM',
    icao: 'FZIC',
    chinese: '戈马国际机场',
    english: 'Goma International Airport',
    city: '戈马',
    province: '北基伍',
    country: '刚果民主共和国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -1.6708, lng: 29.2383 },
    runways: 1,
    priority: 85, // 🌋 基伍湖重要城市，火山地区
    cargo: true
  },

  {
    iata: 'BKY',
    icao: 'FZIR',
    chinese: '布卡武卡万格拉机场',
    english: 'Bukavu Kavumu Airport',
    city: '布卡武',
    province: '南基伍',
    country: '刚果民主共和国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -2.3089, lng: 28.8081 },
    runways: 1,
    priority: 82, // 🌊 基伍湖南岸重镇
    cargo: false
  },

  {
    iata: 'BNI',
    icao: 'FZBN',
    chinese: '尼阿拉机场',
    english: 'Nyala Airport',
    city: '尼阿拉',
    province: '南达尔富尔',
    country: '苏丹',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: 12.0536, lng: 24.9586 },
    runways: 1,
    priority: 78, // 🌾 达尔富尔地区重镇
    cargo: false
  }

];

// 导出统计信息
export const centralAfricaAirportStats = {
  totalAirports: centralAfricaEnhancedAirports.length,
  internationalAirports: centralAfricaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: centralAfricaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: centralAfricaEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(centralAfricaEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(centralAfricaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: centralAfricaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '中非国家完整覆盖',
  specialFeatures: [
    '🏛️ 利伯维尔莱昂·姆巴国际机场 - 加蓬首都，几内亚湾重要门户',
    '🏛️ 恩贾梅纳国际机场 - 乍得首都，撒哈拉南缘重要门户',
    '🏛️ 布拉柴维尔马亚-玛亚国际机场 - 刚果共和国首都，刚果河北岸',
    '🏛️ 班吉·姆波科国际机场 - 中非共和国首都，非洲心脏',
    '🏛️ 圣多美国际机场 - 圣多美和普林西比首都，几内亚湾岛国',
    '🏛️ 马拉博国际机场 - 赤道几内亚首都，比奥科岛',
    '🌊 黑角安东尼奥·阿戈斯蒂尼奥·内托机场 - 大西洋重要港口，石油中心',
    '🛢️ 让蒂尔港机场 - 石油工业中心',
    '🌍 阿贝歇机场 - 东部重要城市，苏丹边境',
    '🌍 巴塔机场 - 大陆部分最大城市',
    '🌋 戈马国际机场 - 基伍湖重要城市，火山地区',
    '🌊 蒙杜机场 - 洛贡河重要港口',
    '🏔️ 弗朗斯维尔机场 - 东南部山区重镇',
    '🏝️ 普林西比机场 - 普林西比岛门户'
  ]
};
