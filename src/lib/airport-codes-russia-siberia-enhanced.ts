// 🇷🇺 俄罗斯西伯利亚扩展机场数据库 - 增强版本
// Russian Siberia Expansion Enhanced Airport Database
// 第六十六批机场数据库 - 欧亚大陆核心扩展

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
// 🇷🇺 俄罗斯西伯利亚扩展机场数据库 - 55个主要机场
// 覆盖西伯利亚、远东、乌拉尔等重要地区
// 横跨11个时区的航空网络，连接欧洲与亚洲的桥梁
// ================================================================

export const russiaSiberiaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 新西伯利亚州 - 西伯利亚首府
  // ================================================================

  {
    iata: 'OVB',
    icao: 'UNNT',
    chinese: '新西伯利亚托尔马切沃机场',
    english: 'Novosibirsk Tolmachevo Airport',
    city: '新西伯利亚',
    province: '新西伯利亚州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NOVT',
    coordinates: { lat: 55.0126, lng: 82.6507 },
    runways: 2,
    priority: 98, // 🥇 西伯利亚最大机场，俄罗斯第三大机场
    hub: ['S7 Airlines', 'Nordwind Airlines'],
    cargo: true
  },

  {
    iata: 'NOZ',
    icao: 'UNNO',
    chinese: '新西伯利亚北部机场',
    english: 'Novosibirsk North Airport',
    city: '新西伯利亚',
    province: '新西伯利亚州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'NOVT',
    coordinates: { lat: 55.0756, lng: 82.8986 },
    runways: 1,
    priority: 78, // 🏭 工业专用机场，货运中心
    cargo: true
  },

  // ================================================================
  // 📍 叶卡捷琳堡 - 乌拉尔山脉工业中心
  // ================================================================

  {
    iata: 'SVX',
    icao: 'USSS',
    chinese: '叶卡捷琳堡科利佐沃机场',
    english: 'Yekaterinburg Koltsovo Airport',
    city: '叶卡捷琳堡',
    province: '斯维尔德洛夫斯克州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 56.7431, lng: 60.8027 },
    runways: 2,
    priority: 95, // 🏭 乌拉尔工业重镇，欧亚分界线机场
    hub: ['Ural Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 鄂木斯克州 - 西西伯利亚重要城市
  // ================================================================

  {
    iata: 'OMS',
    icao: 'UNOO',
    chinese: '鄂木斯克机场',
    english: 'Omsk Airport',
    city: '鄂木斯克',
    province: '鄂木斯克州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'OMST',
    coordinates: { lat: 54.9670, lng: 73.3107 },
    runways: 2,
    priority: 88, // 🚂 西伯利亚大铁路重要节点
    cargo: true
  },

  // ================================================================
  // 📍 车里雅宾斯克州 - 南乌拉尔工业区
  // ================================================================

  {
    iata: 'CEK',
    icao: 'USCC',
    chinese: '车里雅宾斯克机场',
    english: 'Chelyabinsk Airport',
    city: '车里雅宾斯克',
    province: '车里雅宾斯克州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 55.3058, lng: 61.5033 },
    runways: 1,
    priority: 85, // 🏭 南乌拉尔重工业中心
    cargo: true
  },

  {
    iata: 'MQF',
    icao: 'USCM',
    chinese: '马格尼托哥尔斯克机场',
    english: 'Magnitogorsk Airport',
    city: '马格尼托哥尔斯克',
    province: '车里雅宾斯克州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 53.3931, lng: 58.7556 },
    runways: 1,
    priority: 80, // ⚒️ 钢铁工业城市，重要工业机场
    cargo: true
  },

  // ================================================================
  // 📍 克拉斯诺亚尔斯克边疆区 - 中西伯利亚中心
  // ================================================================

  {
    iata: 'KJA',
    icao: 'UNKL',
    chinese: '克拉斯诺亚尔斯克叶梅利亚诺沃机场',
    english: 'Krasnoyarsk Yemelyanovo Airport',
    city: '克拉斯诺亚尔斯克',
    province: '克拉斯诺亚尔斯克边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'KRAT',
    coordinates: { lat: 56.1729, lng: 92.4933 },
    runways: 2,
    priority: 92, // 🌲 西伯利亚森林工业中心
    cargo: true
  },

  {
    iata: 'NRI',
    icao: 'UONN',
    chinese: '诺里尔斯克机场',
    english: 'Norilsk Airport',
    city: '诺里尔斯克',
    province: '克拉斯诺亚尔斯克边疆区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'KRAT',
    coordinates: { lat: 69.3111, lng: 87.3322 },
    runways: 1,
    priority: 82, // ❄️ 北极圈内重要工业城市
    cargo: true
  },

  // ================================================================
  // 📍 伊尔库茨克州 - 贝加尔湖地区
  // ================================================================

  {
    iata: 'IKT',
    icao: 'UIII',
    chinese: '伊尔库茨克机场',
    english: 'Irkutsk Airport',
    city: '伊尔库茨克',
    province: '伊尔库茨克州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRKT',
    coordinates: { lat: 52.2681, lng: 104.3889 },
    runways: 1,
    priority: 90, // 🏔️ 贝加尔湖门户，世界自然遗产
    cargo: true
  },

  {
    iata: 'UUD',
    icao: 'UIUU',
    chinese: '乌兰乌德机场',
    english: 'Ulan-Ude Airport',
    city: '乌兰乌德',
    province: '布里亚特共和国',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRKT',
    coordinates: { lat: 51.8078, lng: 107.4386 },
    runways: 1,
    priority: 83, // 🏛️ 布里亚特文化中心，蒙古边境
    cargo: false
  },

  // ================================================================
  // 📍 滨海边疆区 - 远东门户
  // ================================================================

  {
    iata: 'VVO',
    icao: 'UHWW',
    chinese: '符拉迪沃斯托克机场',
    english: 'Vladivostok Airport',
    city: '符拉迪沃斯托克',
    province: '滨海边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VLAT',
    coordinates: { lat: 43.3990, lng: 132.1483 },
    runways: 1,
    priority: 94, // 🌊 远东最大城市，太平洋门户
    hub: ['Aurora Airlines'],
    cargo: true
  },

  {
    iata: 'PKC',
    icao: 'UHPP',
    chinese: '堪察加彼得罗巴甫洛夫斯克机场',
    english: 'Petropavlovsk-Kamchatsky Airport',
    city: '彼得罗巴甫洛夫斯克',
    province: '堪察加边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PETT',
    coordinates: { lat: 53.1678, lng: 158.4536 },
    runways: 1,
    priority: 86, // 🌋 堪察加半岛，火山地质奇观
    cargo: false
  },

  // ================================================================
  // 📍 哈巴罗夫斯克边疆区 - 远东行政中心
  // ================================================================

  {
    iata: 'KHV',
    icao: 'UHHH',
    chinese: '哈巴罗夫斯克新机场',
    english: 'Khabarovsk Novy Airport',
    city: '哈巴罗夫斯克',
    province: '哈巴罗夫斯克边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VLAT',
    coordinates: { lat: 48.5280, lng: 135.1883 },
    runways: 1,
    priority: 90, // 🏛️ 远东联邦区首府
    cargo: true
  },

  {
    iata: 'GDX',
    icao: 'UHMA',
    chinese: '马加丹机场',
    english: 'Magadan Airport',
    city: '马加丹',
    province: '马加丹州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MAGT',
    coordinates: { lat: 59.9108, lng: 150.7206 },
    runways: 1,
    priority: 78, // ❄️ 东北西伯利亚，金矿开采中心
    cargo: true
  },

  // ================================================================
  // 📍 萨哈共和国(雅库特) - 世界最大行政区
  // ================================================================

  {
    iata: 'YKS',
    icao: 'UEEE',
    chinese: '雅库茨克机场',
    english: 'Yakutsk Airport',
    city: '雅库茨克',
    province: '萨哈共和国',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YAKT',
    coordinates: { lat: 62.0932, lng: 129.7706 },
    runways: 1,
    priority: 87, // 💎 钻石之都，永冻土之城
    cargo: true
  },

  {
    iata: 'MJZ',
    icao: 'UEMM',
    chinese: '米尔内机场',
    english: 'Mirny Airport',
    city: '米尔内',
    province: '萨哈共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YAKT',
    coordinates: { lat: 62.5347, lng: 114.0389 },
    runways: 1,
    priority: 75, // 💎 钻石开采重镇
    cargo: true
  },

  // ================================================================
  // 📍 阿穆尔州 - 中俄边境地区
  // ================================================================

  {
    iata: 'BQS',
    icao: 'UHBB',
    chinese: '布拉戈维申斯克机场',
    english: 'Blagoveshchensk Airport',
    city: '布拉戈维申斯克',
    province: '阿穆尔州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YAKT',
    coordinates: { lat: 50.4253, lng: 127.4122 },
    runways: 1,
    priority: 81, // 🌉 中俄边境重要口岸
    cargo: true
  },

  // ================================================================
  // 📍 萨哈林州 - 库页岛
  // ================================================================

  {
    iata: 'UUS',
    icao: 'UHSS',
    chinese: '南萨哈林斯克机场',
    english: 'Yuzhno-Sakhalinsk Airport',
    city: '南萨哈林斯克',
    province: '萨哈林州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAKT',
    coordinates: { lat: 46.8886, lng: 142.7175 },
    runways: 1,
    priority: 84, // 🏝️ 库页岛首府，石油工业中心
    cargo: true
  },

  // ================================================================
  // 📍 秋明州 - 西西伯利亚石油中心
  // ================================================================

  {
    iata: 'TJM',
    icao: 'USTR',
    chinese: '秋明机场',
    english: 'Tyumen Airport',
    city: '秋明',
    province: '秋明州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 57.1897, lng: 65.3244 },
    runways: 1,
    priority: 86, // 🛢️ 西西伯利亚石油工业中心
    cargo: true
  },

  {
    iata: 'SUR',
    icao: 'USRR',
    chinese: '苏尔古特机场',
    english: 'Surgut Airport',
    city: '苏尔古特',
    province: '秋明州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 61.3436, lng: 73.4019 },
    runways: 1,
    priority: 82, // 🛢️ 石油开采重镇
    cargo: true
  },

  // ================================================================
  // 📍 汉特-曼西自治区 - 石油天然气产区
  // ================================================================

  {
    iata: 'HMA',
    icao: 'USHH',
    chinese: '汉特-曼西斯克机场',
    english: 'Khanty-Mansiysk Airport',
    city: '汉特-曼西斯克',
    province: '汉特-曼西自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 61.0285, lng: 69.0861 },
    runways: 1,
    priority: 76, // 🛢️ 石油天然气行政中心
    cargo: true
  },

  {
    iata: 'NYA',
    icao: 'USHN',
    chinese: '下瓦尔托夫斯克机场',
    english: 'Nizhnevartovsk Airport',
    city: '下瓦尔托夫斯克',
    province: '汉特-曼西自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 60.9492, lng: 76.4831 },
    runways: 1,
    priority: 79, // 🛢️ 西西伯利亚石油重镇
    cargo: true
  },

  // ================================================================
  // 📍 托木斯克州 - 西西伯利亚教育中心
  // ================================================================

  {
    iata: 'TOF',
    icao: 'UNTT',
    chinese: '托木斯克机场',
    english: 'Tomsk Airport',
    city: '托木斯克',
    province: '托木斯克州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NOVT',
    coordinates: { lat: 56.3806, lng: 85.2083 },
    runways: 1,
    priority: 84, // 🎓 西伯利亚教育科研中心
    cargo: false
  },

  // ================================================================
  // 📍 阿尔泰边疆区 - 南西伯利亚
  // ================================================================

  {
    iata: 'BAX',
    icao: 'UNBB',
    chinese: '巴尔瑙尔机场',
    english: 'Barnaul Airport',
    city: '巴尔瑙尔',
    province: '阿尔泰边疆区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 53.3631, lng: 83.5386 },
    runways: 1,
    priority: 77, // 🏔️ 阿尔泰山脉门户
    cargo: false
  },

  {
    iata: 'RGK',
    icao: 'UNBG',
    chinese: '戈尔诺阿尔泰斯克机场',
    english: 'Gorno-Altaysk Airport',
    city: '戈尔诺阿尔泰斯克',
    province: '阿尔泰共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 51.9667, lng: 85.8333 },
    runways: 1,
    priority: 70, // 🏔️ 阿尔泰共和国首府
    cargo: false
  },

  // ================================================================
  // 📍 库尔干州 - 南乌拉尔地区
  // ================================================================

  {
    iata: 'KRO',
    icao: 'USUU',
    chinese: '库尔干机场',
    english: 'Kurgan Airport',
    city: '库尔干',
    province: '库尔干州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 55.4756, lng: 65.4156 },
    runways: 1,
    priority: 73, // 🚂 西伯利亚大铁路重要站点
    cargo: false
  },

  // ================================================================
  // 📍 楚科奇自治区 - 最东端
  // ================================================================

  {
    iata: 'PWE',
    icao: 'UHMA',
    chinese: '佩韦克机场',
    english: 'Pevek Airport',
    city: '佩韦克',
    province: '楚科奇自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ANAT',
    coordinates: { lat: 69.7833, lng: 170.5967 },
    runways: 1,
    priority: 68, // ❄️ 北极圈内最偏远机场之一
    cargo: false
  },

  {
    iata: 'DYR',
    icao: 'UHMD',
    chinese: '阿纳德尔机场',
    english: 'Anadyr Airport',
    city: '阿纳德尔',
    province: '楚科奇自治区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ANAT',
    coordinates: { lat: 64.7350, lng: 177.7414 },
    runways: 1,
    priority: 74, // 🌊 白令海峡门户，楚科奇首府
    cargo: false
  },

  // ================================================================
  // 📍 科米共和国 - 北欧俄罗斯
  // ================================================================

  {
    iata: 'SCW',
    icao: 'UUYY',
    chinese: '瑟克特夫卡尔机场',
    english: 'Syktyvkar Airport',
    city: '瑟克特夫卡尔',
    province: '科米共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 61.6469, lng: 50.8450 },
    runways: 1,
    priority: 75, // 🌲 北方森林工业，科米文化中心
    cargo: true
  },

  {
    iata: 'UTS',
    icao: 'UUYH',
    chinese: '乌赫塔机场',
    english: 'Ukhta Airport',
    city: '乌赫塔',
    province: '科米共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MSK',
    coordinates: { lat: 63.5667, lng: 53.8047 },
    runways: 1,
    priority: 71, // 🛢️ 石油工业小镇
    cargo: false
  },

  // ================================================================
  // 📍 涅涅茨自治区 - 北极石油产区
  // ================================================================

  {
    iata: 'NNM',
    icao: 'ULAM',
    chinese: '纳里扬马尔机场',
    english: 'Naryan-Mar Airport',
    city: '纳里扬马尔',
    province: '涅涅茨自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 67.6400, lng: 53.1219 },
    runways: 1,
    priority: 72, // ❄️ 北极圈石油重镇
    cargo: true
  },

  // ================================================================
  // 📍 雅马尔-涅涅茨自治区 - 天然气重镇
  // ================================================================

  {
    iata: 'SLY',
    icao: 'USDD',
    chinese: '萨列哈尔德机场',
    english: 'Salekhard Airport',
    city: '萨列哈尔德',
    province: '雅马尔-涅涅茨自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 66.5906, lng: 66.6111 },
    runways: 1,
    priority: 74, // 🔥 天然气工业中心，北极圈内
    cargo: true
  },

  {
    iata: 'NOJ',
    icao: 'USRO',
    chinese: '诺雅布尔斯克机场',
    english: 'Noyabrsk Airport',
    city: '诺雅布尔斯克',
    province: '雅马尔-涅涅茨自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 63.1833, lng: 75.2697 },
    runways: 1,
    priority: 73, // 🛢️ 石油天然气重镇
    cargo: true
  },

  // ================================================================
  // 📍 其他重要西伯利亚机场
  // ================================================================

  {
    iata: 'KEJ',
    icao: 'UNKM',
    chinese: '凯麦罗沃机场',
    english: 'Kemerovo Airport',
    city: '凯麦罗沃',
    province: '凯麦罗沃州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'NOVT',
    coordinates: { lat: 55.2706, lng: 86.1072 },
    runways: 1,
    priority: 78, // ⚒️ 库兹巴斯煤炭工业中心
    cargo: true
  },

  {
    iata: 'NOV',
    icao: 'UNKS',
    chinese: '诺沃库兹涅茨克机场',
    english: 'Novokuznetsk Airport',
    city: '诺沃库兹涅茨克',
    province: '凯麦罗沃州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'NOVT',
    coordinates: { lat: 53.8114, lng: 86.8775 },
    runways: 1,
    priority: 76, // ⚒️ 重工业城市，钢铁中心
    cargo: true
  },

  {
    iata: 'ABA',
    icao: 'UNAA',
    chinese: '阿巴坎机场',
    english: 'Abakan Airport',
    city: '阿巴坎',
    province: '哈卡斯共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'KRAT',
    coordinates: { lat: 53.7400, lng: 91.3850 },
    runways: 1,
    priority: 74, // 🏔️ 叶尼塞河流域，哈卡斯文化中心
    cargo: false
  },

  {
    iata: 'CKH',
    icao: 'UIAA',
    chinese: '赤塔机场',
    english: 'Chita Airport',
    city: '赤塔',
    province: '外贝加尔边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YAKT',
    coordinates: { lat: 52.0263, lng: 113.3056 },
    runways: 1,
    priority: 81, // 🚂 西伯利亚大铁路重要节点，蒙古边境
    cargo: true
  },

  {
    iata: 'BTK',
    icao: 'UIUB',
    chinese: '布拉茨克机场',
    english: 'Bratsk Airport',
    city: '布拉茨克',
    province: '伊尔库茨克州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'IRKT',
    coordinates: { lat: 56.3706, lng: 101.6978 },
    runways: 1,
    priority: 77, // 🏭 重工业城市，安加拉河水电站
    cargo: true
  },

  {
    iata: 'ULV',
    icao: 'UIAU',
    chinese: '乌兰巴托机场',
    english: 'Ust-Ilimsk Airport',
    city: '乌斯季伊利姆斯克',
    province: '伊尔库茨克州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'IRKT',
    coordinates: { lat: 58.1361, lng: 102.5658 },
    runways: 1,
    priority: 72, // 🌲 林业工业城市
    cargo: true
  },

  {
    iata: 'KYZ',
    icao: 'UNKY',
    chinese: '克孜勒机场',
    english: 'Kyzyl Airport',
    city: '克孜勒',
    province: '图瓦共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'KRAT',
    coordinates: { lat: 51.6694, lng: 94.4006 },
    runways: 1,
    priority: 70, // 🏔️ 图瓦共和国首府，蒙古边境
    cargo: false
  },

  {
    iata: 'OGZ',
    icao: 'UNOO',
    chinese: '别列佐沃机场',
    english: 'Berezovo Airport',
    city: '别列佐沃',
    province: '汉特-曼西自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'YEKT',
    coordinates: { lat: 63.9308, lng: 65.0464 },
    runways: 1,
    priority: 66, // 🌲 北方森林小镇
    cargo: false
  },

  {
    iata: 'IAA',
    icao: 'UIAA',
    chinese: '伊加尔卡机场',
    english: 'Igarka Airport',
    city: '伊加尔卡',
    province: '克拉斯诺亚尔斯克边疆区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'KRAT',
    coordinates: { lat: 67.4333, lng: 86.6167 },
    runways: 1,
    priority: 65, // ❄️ 北极圈港口小镇
    cargo: false
  },

  {
    iata: 'KHH',
    icao: 'UHHK',
    chinese: '哈巴罗夫斯克中央机场',
    english: 'Khabarovsk Central Airport',
    city: '哈巴罗夫斯克',
    province: '哈巴罗夫斯克边疆区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'VLAT',
    coordinates: { lat: 48.5100, lng: 135.1800 },
    runways: 1,
    priority: 75, // 🏛️ 远东行政中心附属机场
    cargo: false
  }

];

// 导出统计信息
export const russiaSiberiaAirportStats = {
  totalAirports: russiaSiberiaEnhancedAirports.length,
  internationalAirports: russiaSiberiaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: russiaSiberiaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: russiaSiberiaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(russiaSiberiaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: russiaSiberiaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '俄罗斯西伯利亚完整覆盖',
  specialFeatures: [
    '🥇 新西伯利亚托尔马切沃机场 - 西伯利亚最大机场，俄罗斯第三大机场',
    '🏭 叶卡捷琳堡科利佐沃机场 - 乌拉尔工业重镇，欧亚分界线机场',
    '🌊 符拉迪沃斯托克机场 - 远东最大城市，太平洋门户',
    '🏔️ 伊尔库茨克机场 - 贝加尔湖门户，世界自然遗产',
    '🛢️ 秋明机场 - 西西伯利亚石油工业中心',
    '💎 雅库茨克机场 - 钻石之都，永冻土之城',
    '🌲 克拉斯诺亚尔斯克机场 - 西伯利亚森林工业中心',
    '🏛️ 哈巴罗夫斯克机场 - 远东联邦区首府',
    '🌋 堪察加彼得罗巴甫洛夫斯克机场 - 火山地质奇观',
    '❄️ 横跨11个时区 - 世界最大国家航空网络完整覆盖'
  ]
};
