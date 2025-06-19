// 🇷🇺 俄罗斯机场数据库 - 增强版本
// Russia Enhanced Airport Database
// 第二十四批机场数据库 - 欧洲大洲完善（第1部分）

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  city: string;
  region: string;
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
// 🇷🇺 俄罗斯联邦机场数据库 - 40个主要机场
// 覆盖11个时区，从加里宁格勒到堪察加半岛
// 跨欧亚大陆最大国家的完整航空网络
// ================================================================

export const russiaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 莫斯科大都市区 - 联邦中心
  // ================================================================

  {
    iata: 'SVO',
    icao: 'UUEE',
    chinese: '莫斯科谢列梅捷沃国际机场',
    english: 'Moscow Sheremetyevo International Airport',
    city: '莫斯科',
    region: '莫斯科州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 55.9736, lng: 37.4125 },
    runways: 3,
    priority: 100, // 🥇 俄罗斯最大国际枢纽
    hub: ['俄罗斯航空', '俄罗斯全球航空'],
    cargo: true
  },

  {
    iata: 'DME',
    icao: 'UUDD',
    chinese: '莫斯科多莫杰多沃国际机场',
    english: 'Moscow Domodedovo International Airport',
    city: '莫斯科',
    region: '莫斯科州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 55.4088, lng: 37.9063 },
    runways: 2,
    priority: 98, // 🌍 重要国际门户
    hub: ['S7航空', 'UTair'],
    cargo: true
  },

  {
    iata: 'VKO',
    icao: 'UUWW',
    chinese: '莫斯科伏努科沃国际机场',
    english: 'Moscow Vnukovo International Airport',
    city: '莫斯科',
    region: '莫斯科州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 55.5914, lng: 37.2615 },
    runways: 2,
    priority: 95, // 🏛️ 政府专用与商业并行
    hub: ['俄罗斯航空', 'Pobeda'],
    cargo: true
  },

  {
    iata: 'ZIA',
    icao: 'UUMO',
    chinese: '莫斯科茹科夫斯基国际机场',
    english: 'Moscow Zhukovsky International Airport',
    city: '莫斯科',
    region: '莫斯科州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 55.5531, lng: 38.1500 },
    runways: 1,
    priority: 85, // 🛩️ 新兴国际机场
    cargo: false
  },

  // ================================================================
  // 📍 圣彼得堡 - 北方首都
  // ================================================================

  {
    iata: 'LED',
    icao: 'ULLI',
    chinese: '圣彼得堡普尔科沃机场',
    english: 'Saint Petersburg Pulkovo Airport',
    city: '圣彼得堡',
    region: '圣彼得堡市',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 59.8003, lng: 30.2625 },
    runways: 2,
    priority: 92, // 🏰 北方首都门户
    hub: ['俄罗斯航空'],
    cargo: true
  },

  // ================================================================
  // 📍 西伯利亚地区 - 亚洲部分
  // ================================================================

  {
    iata: 'SVX',
    icao: 'USSS',
    chinese: '叶卡捷琳堡科利佐沃国际机场',
    english: 'Yekaterinburg Koltsovo Airport',
    city: '叶卡捷琳堡',
    region: '斯维尔德洛夫斯克州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 56.7431, lng: 60.8027 },
    runways: 2,
    priority: 88, // 🏭 乌拉尔工业中心
    hub: ['乌拉尔航空'],
    cargo: true
  },

  {
    iata: 'OVB',
    icao: 'UNNT',
    chinese: '新西伯利亚托尔马切沃机场',
    english: 'Novosibirsk Tolmachevo Airport',
    city: '新西伯利亚',
    region: '新西伯利亚州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NOVT',
    coordinates: { lat: 55.0127, lng: 82.6507 },
    runways: 2,
    priority: 90, // 🌏 西伯利亚最大机场
    hub: ['S7航空'],
    cargo: true
  },

  {
    iata: 'KEJ',
    icao: 'UNKE',
    chinese: '克麦罗沃机场',
    english: 'Kemerovo Airport',
    city: '克麦罗沃',
    region: '克麦罗沃州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'NOVT',
    coordinates: { lat: 55.2706, lng: 86.1072 },
    runways: 1,
    priority: 75, // ⛏️ 煤炭工业中心
    cargo: false
  },

  {
    iata: 'BAX',
    icao: 'UNBB',
    chinese: '巴尔瑙尔机场',
    english: 'Barnaul Airport',
    city: '巴尔瑙尔',
    region: '阿尔泰边疆区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ALMT',
    coordinates: { lat: 53.3638, lng: 83.5385 },
    runways: 1,
    priority: 72, // 🌾 阿尔泰农业区
    cargo: false
  },

  {
    iata: 'TOF',
    icao: 'UNTT',
    chinese: '托木斯克机场',
    english: 'Tomsk Airport',
    city: '托木斯克',
    region: '托木斯克州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'OMST',
    coordinates: { lat: 56.3803, lng: 85.2082 },
    runways: 1,
    priority: 70, // 🎓 大学城机场
    cargo: false
  },

  // ================================================================
  // 📍 远东地区
  // ================================================================

  {
    iata: 'VVO',
    icao: 'UHWW',
    chinese: '符拉迪沃斯托克国际机场',
    english: 'Vladivostok International Airport',
    city: '符拉迪沃斯托克',
    region: '滨海边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VLAT',
    coordinates: { lat: 43.3989, lng: 132.1486 },
    runways: 1,
    priority: 87, // 🌊 远东门户
    hub: ['俄罗斯航空'],
    cargo: true
  },

  {
    iata: 'KHV',
    icao: 'UHHH',
    chinese: '哈巴罗夫斯克新机场',
    english: 'Khabarovsk Novy Airport',
    city: '哈巴罗夫斯克',
    region: '哈巴罗夫斯克边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VLAT',
    coordinates: { lat: 48.5280, lng: 135.1883 },
    runways: 1,
    priority: 84, // 🌲 远东林业中心
    cargo: true
  },

  {
    iata: 'YKS',
    icao: 'UEEE',
    chinese: '雅库茨克机场',
    english: 'Yakutsk Airport',
    city: '雅库茨克',
    region: '萨哈共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YAKT',
    coordinates: { lat: 62.0933, lng: 129.7708 },
    runways: 1,
    priority: 78, // 💎 钻石开采中心
    cargo: true
  },

  {
    iata: 'PKC',
    icao: 'UHPP',
    chinese: '彼得罗巴甫洛夫斯克机场',
    english: 'Petropavlovsk-Kamchatsky Airport',
    city: '彼得罗巴甫洛夫斯克',
    region: '堪察加边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PETT',
    coordinates: { lat: 53.1679, lng: 158.4536 },
    runways: 1,
    priority: 80, // 🌋 堪察加半岛门户
    cargo: false
  },

  {
    iata: 'MAG',
    icao: 'UHMM',
    chinese: '马加丹索科尔机场',
    english: 'Magadan Sokol Airport',
    city: '马加丹',
    region: '马加丹州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MAGT',
    coordinates: { lat: 59.9108, lng: 150.7194 },
    runways: 1,
    priority: 73, // ❄️ 东北极地门户
    cargo: false
  },

  {
    iata: 'UUS',
    icao: 'UENM',
    chinese: '南萨哈林斯克机场',
    english: 'Yuzhno-Sakhalinsk Airport',
    city: '南萨哈林斯克',
    region: '萨哈林州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAKT',
    coordinates: { lat: 46.8886, lng: 142.7175 },
    runways: 1,
    priority: 76, // 🏝️ 萨哈林岛机场
    cargo: false
  },

  // ================================================================
  // 📍 南部地区
  // ================================================================

  {
    iata: 'ROV',
    icao: 'URRR',
    chinese: '顿河畔罗斯托夫机场',
    english: 'Rostov-on-Don Airport',
    city: '顿河畔罗斯托夫',
    region: '罗斯托夫州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 47.2583, lng: 39.8181 },
    runways: 2,
    priority: 82, // 🌾 南部农业中心
    hub: ['Azur Air'],
    cargo: true
  },

  {
    iata: 'KRR',
    icao: 'URKK',
    chinese: '克拉斯诺达尔机场',
    english: 'Krasnodar Airport',
    city: '克拉斯诺达尔',
    region: '克拉斯诺达尔边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 45.0347, lng: 39.1706 },
    runways: 1,
    priority: 85, // 🏖️ 黑海度假门户
    cargo: false
  },

  {
    iata: 'AER',
    icao: 'URSS',
    chinese: '索契阿德列尔机场',
    english: 'Sochi Adler Airport',
    city: '索契',
    region: '克拉斯诺达尔边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 43.4499, lng: 39.9561 },
    runways: 1,
    priority: 89, // 🏂 冬奥会城市
    hub: ['俄罗斯航空'],
    cargo: false
  },

  {
    iata: 'STW',
    icao: 'URMT',
    chinese: '斯塔夫罗波尔机场',
    english: 'Stavropol Airport',
    city: '斯塔夫罗波尔',
    region: '斯塔夫罗波尔边疆区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 45.1092, lng: 42.1128 },
    runways: 1,
    priority: 71, // 🌄 高加索门户
    cargo: false
  },

  // ================================================================
  // 📍 伏尔加河流域
  // ================================================================

  {
    iata: 'KZN',
    icao: 'UWKD',
    chinese: '喀山机场',
    english: 'Kazan Airport',
    city: '喀山',
    region: '鞑靼斯坦共和国',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 55.6067, lng: 49.2786 },
    runways: 1,
    priority: 86, // 🕌 鞑靼文化中心
    hub: ['俄罗斯航空'],
    cargo: true
  },

  {
    iata: 'UFA',
    icao: 'UWUU',
    chinese: '乌法机场',
    english: 'Ufa Airport',
    city: '乌法',
    region: '巴什科尔托斯坦共和国',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YEKT',
    coordinates: { lat: 54.5575, lng: 55.8744 },
    runways: 1,
    priority: 81, // 🛢️ 石油工业中心
    cargo: true
  },

  {
    iata: 'VOG',
    icao: 'URWW',
    chinese: '伏尔加格勒机场',
    english: 'Volgograd Airport',
    city: '伏尔加格勒',
    region: '伏尔加格勒州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'VOLT',
    coordinates: { lat: 48.7828, lng: 44.3456 },
    runways: 1,
    priority: 77, // 🏛️ 历史名城（斯大林格勒）
    cargo: false
  },

  {
    iata: 'GOJ',
    icao: 'UWGG',
    chinese: '下诺夫哥罗德机场',
    english: 'Nizhny Novgorod Airport',
    city: '下诺夫哥罗德',
    region: '下诺夫哥罗德州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 56.2306, lng: 43.7842 },
    runways: 1,
    priority: 79, // 🏭 工业重镇
    cargo: false
  },

  {
    iata: 'PEZ',
    icao: 'UWPP',
    chinese: '奔萨机场',
    english: 'Penza Airport',
    city: '奔萨',
    region: '奔萨州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MSK',
    coordinates: { lat: 53.1106, lng: 45.0211 },
    runways: 1,
    priority: 68, // 🌾 农业地区
    cargo: false
  },

  {
    iata: 'SYZ',
    icao: 'UWWS',
    chinese: '希伯尔任机场',
    english: 'Shibiryn Airport',
    city: '萨马拉',
    region: '萨马拉州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SAMT',
    coordinates: { lat: 53.5044, lng: 50.1642 },
    runways: 1,
    priority: 83, // 🚀 航空航天工业
    cargo: true
  },

  // ================================================================
  // 📍 西北地区
  // ================================================================

  {
    iata: 'MMK',
    icao: 'ULMM',
    chinese: '摩尔曼斯克机场',
    english: 'Murmansk Airport',
    city: '摩尔曼斯克',
    region: '摩尔曼斯克州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 68.7817, lng: 32.7508 },
    runways: 1,
    priority: 74, // ❄️ 北极港口城市
    cargo: false
  },

  {
    iata: 'ARH',
    icao: 'ULAA',
    chinese: '阿尔汉格尔斯克机场',
    english: 'Arkhangelsk Airport',
    city: '阿尔汉格尔斯克',
    region: '阿尔汉格尔斯克州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 64.6003, lng: 40.7167 },
    runways: 1,
    priority: 69, // 🌲 木材工业中心
    cargo: true
  },

  {
    iata: 'PES',
    icao: 'ULPB',
    chinese: '彼得罗扎沃茨克机场',
    english: 'Petrozavodsk Airport',
    city: '彼得罗扎沃茨克',
    region: '卡累利阿共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MSK',
    coordinates: { lat: 61.8852, lng: 34.1547 },
    runways: 1,
    priority: 65, // 🏞️ 卡累利阿首府
    cargo: false
  },

  // ================================================================
  // 📍 中央联邦区其他城市
  // ================================================================

  {
    iata: 'LPK',
    icao: 'UUOL',
    chinese: '利佩茨克机场',
    english: 'Lipetsk Airport',
    city: '利佩茨克',
    region: '利佩茨克州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MSK',
    coordinates: { lat: 52.7028, lng: 39.5378 },
    runways: 1,
    priority: 67, // 🏭 钢铁工业城市
    cargo: false
  },

  {
    iata: 'VGD',
    icao: 'ULWW',
    chinese: '沃洛格达机场',
    english: 'Vologda Airport',
    city: '沃洛格达',
    region: '沃洛格达州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MSK',
    coordinates: { lat: 59.2825, lng: 39.9561 },
    runways: 1,
    priority: 63, // 🌾 农业地区
    cargo: false
  },

  // ================================================================
  // 📍 欧洲部分其他重要城市
  // ================================================================

  {
    iata: 'KGD',
    icao: 'UMKK',
    chinese: '加里宁格勒机场',
    english: 'Kaliningrad Airport',
    city: '加里宁格勒',
    region: '加里宁格勒州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 54.8900, lng: 20.5925 },
    runways: 1,
    priority: 84, // 🌊 波罗的海飞地
    cargo: false
  },

  {
    iata: 'TBW',
    icao: 'UUEM',
    chinese: '坦波夫机场',
    english: 'Tambov Airport',
    city: '坦波夫',
    region: '坦波夫州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MSK',
    coordinates: { lat: 52.8064, lng: 41.4828 },
    runways: 1,
    priority: 62, // 🌾 农业地区
    cargo: false
  },

  // ================================================================
  // 📍 西伯利亚东部
  // ================================================================

  {
    iata: 'IKT',
    icao: 'UIII',
    chinese: '伊尔库茨克机场',
    english: 'Irkutsk Airport',
    city: '伊尔库茨克',
    region: '伊尔库茨克州',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRKT',
    coordinates: { lat: 52.2681, lng: 104.3889 },
    runways: 1,
    priority: 88, // 🏔️ 贝加尔湖门户
    hub: ['Angara Airlines'],
    cargo: true
  },

  {
    iata: 'ULN',
    icao: 'ULAN',
    chinese: '乌兰乌德机场',
    english: 'Ulan-Ude Airport',
    city: '乌兰乌德',
    region: '布里亚特共和国',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'IRKT',
    coordinates: { lat: 51.8078, lng: 107.4386 },
    runways: 1,
    priority: 72, // 🏔️ 蒙古边境
    cargo: false
  },

  {
    iata: 'CTA',
    icao: 'UNKS',
    chinese: '赤塔机场',
    english: 'Chita Airport',
    city: '赤塔',
    region: '外贝加尔边疆区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'YAKT',
    coordinates: { lat: 52.0264, lng: 113.3056 },
    runways: 1,
    priority: 70, // 🚂 跨西伯利亚铁路重镇
    cargo: false
  },

  // ================================================================
  // 📍 北部地区
  // ================================================================

  {
    iata: 'NNM',
    icao: 'UERP',
    chinese: '纳里扬马尔机场',
    english: 'Naryan-Mar Airport',
    city: '纳里扬马尔',
    region: '涅涅茨自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MSK',
    coordinates: { lat: 67.6400, lng: 53.1219 },
    runways: 1,
    priority: 64, // ❄️ 北极圈内
    cargo: false
  },

  {
    iata: 'SLY',
    icao: 'UENS',
    chinese: '萨列哈尔德机场',
    english: 'Salekhard Airport',
    city: '萨列哈尔德',
    region: '亚马尔-涅涅茨自治区',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'YEKT',
    coordinates: { lat: 66.5908, lng: 66.6111 },
    runways: 1,
    priority: 66, // ⛽ 天然气开采中心
    cargo: false
  },

  // ================================================================
  // 📍 高加索地区联邦主体
  // ================================================================

  {
    iata: 'MCX',
    icao: 'URMM',
    chinese: '马哈奇卡拉机场',
    english: 'Makhachkala Airport',
    city: '马哈奇卡拉',
    region: '达吉斯坦共和国',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 42.8167, lng: 47.6528 },
    runways: 1,
    priority: 75, // 🌊 里海沿岸
    cargo: false
  },

  {
    iata: 'GRV',
    icao: 'URGN',
    chinese: '格罗兹尼机场',
    english: 'Grozny Airport',
    city: '格罗兹尼',
    region: '车臣共和国',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 43.2981, lng: 45.6975 },
    runways: 1,
    priority: 73, // 🏔️ 高加索山区
    cargo: false
  },

  // ================================================================
  // 📍 额外西伯利亚城市
  // ================================================================

  {
    iata: 'KRO',
    icao: 'UNKL',
    chinese: '克拉斯诺亚尔斯克叶梅利亚诺沃机场',
    english: 'Krasnoyarsk Yemelyanovo Airport',
    city: '克拉斯诺亚尔斯克',
    region: '克拉斯诺亚尔斯克边疆区',
    country: '俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'KRAT',
    coordinates: { lat: 56.1731, lng: 92.4933 },
    runways: 2,
    priority: 87, // 🌲 西伯利亚中心
    hub: ['NordStar'],
    cargo: true
  },

  {
    iata: 'NOZ',
    icao: 'UNOO',
    chinese: '新库兹涅茨克机场',
    english: 'Novokuznetsk Airport',
    city: '新库兹涅茨克',
    region: '克麦罗沃州',
    country: '俄罗斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'NOVT',
    coordinates: { lat: 53.8114, lng: 86.8775 },
    runways: 1,
    priority: 68, // 🏭 钢铁工业城市
    cargo: false
  }

];

// 导出统计信息
export const russiaAirportStats = {
  totalAirports: russiaEnhancedAirports.length,
  internationalAirports: russiaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: russiaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: russiaEnhancedAirports.filter(apt => apt.cargo).length,
  regions: [...new Set(russiaEnhancedAirports.map(apt => apt.region))].length,
  hubAirports: russiaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '俄罗斯11个时区跨欧亚大陆完整覆盖',
  specialFeatures: [
    '🥇 谢列梅捷沃国际机场 - 俄罗斯最大航空枢纽',
    '🏰 圣彼得堡普尔科沃 - 北方首都历史文化门户',
    '🌏 新西伯利亚机场 - 西伯利亚最大航空枢纽',
    '🌊 符拉迪沃斯托克 - 远东太平洋门户',
    '🏂 索契阿德列尔 - 冬奥会城市和黑海度假胜地',
    '🏔️ 伊尔库茨克机场 - 贝加尔湖旅游门户'
  ]
};
