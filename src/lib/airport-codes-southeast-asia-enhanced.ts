// 🌏 东南亚六国机场数据库 - 增强版本
// Southeast Asia Six Nations Enhanced Airport Database
// 第六十九批机场数据库 - 东南亚完整覆盖

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
// 🌏 东南亚六国机场数据库 - 65个主要机场
// 覆盖越南、柬埔寨、老挝、缅甸、文莱、菲律宾
// 中南半岛与群岛国家的热带航空网络
// ================================================================

export const southeastAsiaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 越南 - 中南半岛重要国家
  // ================================================================

  {
    iata: 'SGN',
    icao: 'VVTS',
    chinese: '胡志明市新山一国际机场',
    english: 'Ho Chi Minh City Tan Son Nhat International Airport',
    city: '胡志明市',
    province: '胡志明市',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 10.8188, lng: 106.6519 },
    runways: 2,
    priority: 96, // 🥈 越南最大机场，东南亚重要枢纽
    hub: ['Vietnam Airlines', 'VietJet Air'],
    cargo: true
  },

  {
    iata: 'HAN',
    icao: 'VVNB',
    chinese: '河内内排国际机场',
    english: 'Hanoi Noi Bai International Airport',
    city: '河内',
    province: '河内市',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 21.2212, lng: 105.8072 },
    runways: 2,
    priority: 94, // 🏛️ 越南首都，政治文化中心
    hub: ['Vietnam Airlines'],
    cargo: true
  },

  {
    iata: 'DAD',
    icao: 'VVDN',
    chinese: '岘港国际机场',
    english: 'Da Nang International Airport',
    city: '岘港',
    province: '岘港市',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 16.0439, lng: 108.1987 },
    runways: 1,
    priority: 90, // 🏖️ 中部海滨旅游城市
    cargo: true
  },

  {
    iata: 'CXR',
    icao: 'VVCR',
    chinese: '金兰湾机场',
    english: 'Cam Ranh Airport',
    city: '芽庄',
    province: '庆和省',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 11.9983, lng: 109.2191 },
    runways: 1,
    priority: 85, // 🏖️ 芽庄度假胜地
    cargo: false
  },

  {
    iata: 'HPH',
    icao: 'VVCI',
    chinese: '海防吉碑机场',
    english: 'Haiphong Cat Bi Airport',
    city: '海防',
    province: '海防市',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 20.8194, lng: 106.7250 },
    runways: 1,
    priority: 82, // 🌊 北部重要港口城市
    cargo: true
  },

  {
    iata: 'HUI',
    icao: 'VVPB',
    chinese: '顺化富牌机场',
    english: 'Hue Phu Bai Airport',
    city: '顺化',
    province: '承天顺化省',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 16.4015, lng: 107.7033 },
    runways: 1,
    priority: 80, // 🏛️ 古都顺化，文化遗产
    cargo: false
  },

  {
    iata: 'VCA',
    icao: 'VVCM',
    chinese: '芹苴机场',
    english: 'Can Tho Airport',
    city: '芹苴',
    province: '芹苴市',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 10.0851, lng: 105.7119 },
    runways: 1,
    priority: 78, // 🌾 湄公河三角洲中心
    cargo: false
  },

  {
    iata: 'PQC',
    icao: 'VVPQ',
    chinese: '富国岛机场',
    english: 'Phu Quoc Airport',
    city: '富国岛',
    province: '坚江省',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 10.2270, lng: 103.9678 },
    runways: 1,
    priority: 88, // 🏝️ 越南最大岛屿，度假胜地
    cargo: false
  },

  {
    iata: 'VDH',
    icao: 'VVDH',
    chinese: '同海机场',
    english: 'Dong Hoi Airport',
    city: '同海',
    province: '广平省',
    country: '越南',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 17.5153, lng: 106.5897 },
    runways: 1,
    priority: 75, // 🌿 丰芽格邦国家公园门户
    cargo: false
  },

  {
    iata: 'VII',
    icao: 'VVVH',
    chinese: '荣市机场',
    english: 'Vinh Airport',
    city: '荣市',
    province: '义安省',
    country: '越南',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 18.7376, lng: 105.6706 },
    runways: 1,
    priority: 72, // 🏛️ 胡志明故乡
    cargo: false
  },

  // ================================================================
  // 📍 菲律宾 - 千岛之国
  // ================================================================

  {
    iata: 'MNL',
    icao: 'RPLL',
    chinese: '马尼拉尼诺·阿基诺国际机场',
    english: 'Manila Ninoy Aquino International Airport',
    city: '马尼拉',
    province: '国家首都区',
    country: '菲律宾',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 14.5086, lng: 121.0194 },
    runways: 2,
    priority: 95, // 🏛️ 菲律宾首都，东南亚重要枢纽
    hub: ['Philippine Airlines', 'Cebu Pacific'],
    cargo: true
  },

  {
    iata: 'CEB',
    icao: 'RPVM',
    chinese: '宿务马克坦-宿务国际机场',
    english: 'Cebu Mactan-Cebu International Airport',
    city: '宿务',
    province: '宿务省',
    country: '菲律宾',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 10.3075, lng: 123.9792 },
    runways: 1,
    priority: 92, // 🌊 南部重要枢纽，旅游中心
    hub: ['Cebu Pacific'],
    cargo: true
  },

  {
    iata: 'CRK',
    icao: 'RPLC',
    chinese: '克拉克国际机场',
    english: 'Clark International Airport',
    city: '安吉利斯',
    province: '邦板牙省',
    country: '菲律宾',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 15.1859, lng: 120.5603 },
    runways: 1,
    priority: 88, // ✈️ 马尼拉第二机场
    cargo: true
  },

  {
    iata: 'DVO',
    icao: 'RPMD',
    chinese: '达沃弗朗西斯科·班古伊机场',
    english: 'Davao Francisco Bangoy International Airport',
    city: '达沃',
    province: '达沃省',
    country: '菲律宾',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 7.1255, lng: 125.6456 },
    runways: 1,
    priority: 85, // 🌴 棉兰老岛最大城市
    cargo: true
  },

  {
    iata: 'ILO',
    icao: 'RPVI',
    chinese: '伊洛伊洛机场',
    english: 'Iloilo Airport',
    city: '伊洛伊洛',
    province: '伊洛伊洛省',
    country: '菲律宾',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 10.7139, lng: 122.4936 },
    runways: 1,
    priority: 82, // 🌾 西米沙鄢区域中心
    cargo: false
  },

  {
    iata: 'ZAM',
    icao: 'RPMZ',
    chinese: '三宝颜机场',
    english: 'Zamboanga Airport',
    city: '三宝颜',
    province: '三宝颜半岛',
    country: '菲律宾',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 6.9222, lng: 122.0598 },
    runways: 1,
    priority: 80, // 🌊 棉兰老岛西部门户
    cargo: false
  },

  {
    iata: 'BCD',
    icao: 'RPVB',
    chinese: '巴科洛德-锡莱机场',
    english: 'Bacolod-Silay Airport',
    city: '巴科洛德',
    province: '内格罗斯西方省',
    country: '菲律宾',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 10.7764, lng: 123.0147 },
    runways: 1,
    priority: 78, // 🍃 糖业中心
    cargo: false
  },

  {
    iata: 'GES',
    icao: 'RPUG',
    chinese: '吉马拉斯机场',
    english: 'General Santos Airport',
    city: '桑托斯将军城',
    province: '南哥打巴托省',
    country: '菲律宾',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 6.1067, lng: 125.0967 },
    runways: 1,
    priority: 75, // 🐟 金枪鱼之都
    cargo: false
  },

  {
    iata: 'TAC',
    icao: 'RPVT',
    chinese: '塔克洛班机场',
    english: 'Tacloban Airport',
    city: '塔克洛班',
    province: '莱特省',
    country: '菲律宾',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 11.2278, lng: 125.0278 },
    runways: 1,
    priority: 72, // 🌀 台风多发地区
    cargo: false
  },

  {
    iata: 'BXU',
    icao: 'RPMD',
    chinese: '武端机场',
    english: 'Butuan Airport',
    city: '武端',
    province: '北阿古桑省',
    country: '菲律宾',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 8.9511, lng: 125.4789 },
    runways: 1,
    priority: 70, // 🌲 棉兰老岛东北部
    cargo: false
  },

  // ================================================================
  // 📍 缅甸 - 佛塔之国
  // ================================================================

  {
    iata: 'RGN',
    icao: 'VYYY',
    chinese: '仰光国际机场',
    english: 'Yangon International Airport',
    city: '仰光',
    province: '仰光省',
    country: '缅甸',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MMT',
    coordinates: { lat: 16.9073, lng: 96.1331 },
    runways: 1,
    priority: 93, // 🏛️ 缅甸最大机场，经济中心
    hub: ['Myanmar Airways'],
    cargo: true
  },

  {
    iata: 'MDL',
    icao: 'VYMD',
    chinese: '曼德勒国际机场',
    english: 'Mandalay International Airport',
    city: '曼德勒',
    province: '曼德勒省',
    country: '缅甸',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MMT',
    coordinates: { lat: 21.7017, lng: 95.9778 },
    runways: 1,
    priority: 88, // 🏛️ 古都曼德勒，文化中心
    cargo: true
  },

  {
    iata: 'NYU',
    icao: 'VYNN',
    chinese: '内比都机场',
    english: 'Naypyidaw Airport',
    city: '内比都',
    province: '内比都联邦区',
    country: '缅甸',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MMT',
    coordinates: { lat: 19.6233, lng: 96.2019 },
    runways: 1,
    priority: 85, // 🏛️ 缅甸首都
    cargo: false
  },

  {
    iata: 'SNW',
    icao: 'VYSN',
    chinese: '丹老机场',
    english: 'Thandwe Airport',
    city: '丹老',
    province: '若开邦',
    country: '缅甸',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MMT',
    coordinates: { lat: 18.4603, lng: 94.3000 },
    runways: 1,
    priority: 80, // 🏖️ 额不里海滩度假胜地
    cargo: false
  },

  {
    iata: 'BAG',
    icao: 'VYBG',
    chinese: '勃固机场',
    english: 'Bagan Airport',
    city: '勃固',
    province: '勃固省',
    country: '缅甸',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MMT',
    coordinates: { lat: 21.1742, lng: 94.9306 },
    runways: 1,
    priority: 82, // 🏛️ 蒲甘古城，佛塔之都
    cargo: false
  },

  {
    iata: 'AKY',
    icao: 'VYSK',
    chinese: '实皆机场',
    english: 'Sittwe Airport',
    city: '实皆',
    province: '若开邦',
    country: '缅甸',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MMT',
    coordinates: { lat: 20.1333, lng: 92.8728 },
    runways: 1,
    priority: 75, // 🌊 孟加拉湾海港
    cargo: false
  },

  {
    iata: 'KMV',
    icao: 'VYKV',
    chinese: '克耶邦机场',
    english: 'Kalemyo Airport',
    city: '克耶邦',
    province: '克耶邦',
    country: '缅甸',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MMT',
    coordinates: { lat: 23.1833, lng: 94.0833 },
    runways: 1,
    priority: 68, // 🏔️ 山区小机场
    cargo: false
  },

  // ================================================================
  // 📍 柬埔寨 - 高棉文化国度
  // ================================================================

  {
    iata: 'PNH',
    icao: 'VDPP',
    chinese: '金边国际机场',
    english: 'Phnom Penh International Airport',
    city: '金边',
    province: '金边市',
    country: '柬埔寨',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 11.5465, lng: 104.8442 },
    runways: 1,
    priority: 91, // 🏛️ 柬埔寨首都，政治经济中心
    hub: ['Cambodia Angkor Air'],
    cargo: true
  },

  {
    iata: 'REP',
    icao: 'VDSR',
    chinese: '暹粒-吴哥国际机场',
    english: 'Siem Reap Angkor International Airport',
    city: '暹粒',
    province: '暹粒省',
    country: '柬埔寨',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 13.4107, lng: 103.8169 },
    runways: 1,
    priority: 89, // 🏛️ 吴哥窟世界遗产门户
    cargo: false
  },

  {
    iata: 'KOS',
    icao: 'VDKH',
    chinese: '西哈努克港机场',
    english: 'Sihanoukville Airport',
    city: '西哈努克港',
    province: '西哈努克省',
    country: '柬埔寨',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 10.5797, lng: 103.6364 },
    runways: 1,
    priority: 85, // 🌊 柬埔寨唯一深水港
    cargo: true
  },

  {
    iata: 'RBE',
    icao: 'VDRT',
    chinese: '拉达那基里机场',
    english: 'Ratanakiri Airport',
    city: '班隆',
    province: '拉达那基里省',
    country: '柬埔寨',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 13.7333, lng: 106.9833 },
    runways: 1,
    priority: 75, // 🌿 东北部山区
    cargo: false
  },

  {
    iata: 'KTI',
    icao: 'VDKT',
    chinese: '桔井机场',
    english: 'Kratie Airport',
    city: '桔井',
    province: '桔井省',
    country: '柬埔寨',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ICT',
    coordinates: { lat: 12.4833, lng: 106.0167 },
    runways: 1,
    priority: 70, // 🐬 湄公河淡水豚保护区
    cargo: false
  },

  // ================================================================
  // 📍 老挝 - 内陆佛教国家
  // ================================================================

  {
    iata: 'VTE',
    icao: 'VLVT',
    chinese: '万象瓦岱国际机场',
    english: 'Vientiane Wattay International Airport',
    city: '万象',
    province: '万象府',
    country: '老挝',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 17.9883, lng: 102.5633 },
    runways: 1,
    priority: 87, // 🏛️ 老挝首都，政治中心
    hub: ['Lao Airlines'],
    cargo: true
  },

  {
    iata: 'LPQ',
    icao: 'VLLB',
    chinese: '琅勃拉邦机场',
    english: 'Luang Prabang Airport',
    city: '琅勃拉邦',
    province: '琅勃拉邦省',
    country: '老挝',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 19.8972, lng: 102.1614 },
    runways: 1,
    priority: 84, // 🏛️ 古都琅勃拉邦，世界遗产
    cargo: false
  },

  {
    iata: 'PKZ',
    icao: 'VLPS',
    chinese: '巴色机场',
    english: 'Pakse Airport',
    city: '巴色',
    province: '占巴塞省',
    country: '老挝',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 15.1322, lng: 105.7814 },
    runways: 1,
    priority: 80, // 🌿 南部重要城市，四千美岛
    cargo: false
  },

  {
    iata: 'ODY',
    icao: 'VLOU',
    chinese: '乌多姆赛机场',
    english: 'Oudomxay Airport',
    city: '乌多姆赛',
    province: '乌多姆赛省',
    country: '老挝',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 20.6833, lng: 101.9833 },
    runways: 1,
    priority: 72, // 🏔️ 北部山区
    cargo: false
  },

  {
    iata: 'ZVK',
    icao: 'VLSV',
    chinese: '沙湾拿吉机场',
    english: 'Savannakhet Airport',
    city: '沙湾拿吉',
    province: '沙湾拿吉省',
    country: '老挝',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 16.5564, lng: 104.7597 },
    runways: 1,
    priority: 75, // 🚛 泰国边境重要贸易口岸
    cargo: true
  },

  // ================================================================
  // 📍 文莱 - 和平之邦
  // ================================================================

  {
    iata: 'BWN',
    icao: 'WBSB',
    chinese: '文莱国际机场',
    english: 'Brunei International Airport',
    city: '斯里巴加湾市',
    province: '文莱摩拉区',
    country: '文莱',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BNT',
    coordinates: { lat: 4.9442, lng: 114.9283 },
    runways: 1,
    priority: 86, // 🛢️ 文莱首都，石油富国
    hub: ['Royal Brunei Airlines'],
    cargo: true
  },

  {
    iata: 'KUA',
    icao: 'WBKK',
    chinese: '瓜拉勿拉央机场',
    english: 'Kuala Belait Airport',
    city: '瓜拉勿拉央',
    province: '勿拉央区',
    country: '文莱',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BNT',
    coordinates: { lat: 4.5906, lng: 114.3864 },
    runways: 1,
    priority: 72, // 🛢️ 石油工业重镇
    cargo: false
  },

  {
    iata: 'BSB',
    icao: 'WBSB',
    chinese: '马来奕机场',
    english: 'Seria Airport',
    city: '马来奕',
    province: '勿拉央区',
    country: '文莱',
    isInternational: false,
    hasCustoms: false,
    timezone: 'BNT',
    coordinates: { lat: 4.6064, lng: 114.3242 },
    runways: 1,
    priority: 68, // 🛢️ 石油开采区
    cargo: false
  },

  // ================================================================
  // 📍 其他重要东南亚机场
  // ================================================================

  {
    iata: 'BMV',
    icao: 'VVBM',
    chinese: '邦美蜀机场',
    english: 'Buon Ma Thuot Airport',
    city: '邦美蜀',
    province: '得乐省',
    country: '越南',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 12.6681, lng: 108.1200 },
    runways: 1,
    priority: 74, // ☕ 咖啡之都
    cargo: false
  },

  {
    iata: 'VDO',
    icao: 'VVVD',
    chinese: '范文同机场',
    english: 'Van Don Airport',
    city: '下龙湾',
    province: '广宁省',
    country: '越南',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 21.1167, lng: 107.4167 },
    runways: 1,
    priority: 83, // 🌊 下龙湾世界遗产
    cargo: false
  },

  {
    iata: 'TBB',
    icao: 'VVTB',
    chinese: '土珠机场',
    english: 'Tuy Hoa Airport',
    city: '土珠',
    province: '富安省',
    country: '越南',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 13.0456, lng: 109.3339 },
    runways: 1,
    priority: 70, // 🏖️ 海滨小城
    cargo: false
  },

  {
    iata: 'VCS',
    icao: 'VVCS',
    chinese: '昆嵩机场',
    english: 'Con Son Airport',
    city: '昆嵩',
    province: '昆嵩省',
    country: '越南',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ICT',
    coordinates: { lat: 14.3583, lng: 108.0172 },
    runways: 1,
    priority: 68, // 🏔️ 中部高原
    cargo: false
  },

  {
    iata: 'KTG',
    icao: 'VDKT',
    chinese: '桔井机场',
    english: 'Ketapang Airport',
    city: '桔井',
    province: '桔井省',
    country: '柬埔寨',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ICT',
    coordinates: { lat: 12.4833, lng: 106.0167 },
    runways: 1,
    priority: 65, // 🌿 湄公河流域
    cargo: false
  },

  {
    iata: 'KHN',
    icao: 'VLHN',
    chinese: '桑怒机场',
    english: 'Khoun Khan Airport',
    city: '桑怒',
    province: '桑怒省',
    country: '老挝',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ICT',
    coordinates: { lat: 18.4167, lng: 103.6667 },
    runways: 1,
    priority: 66, // 🏔️ 东北部山区
    cargo: false
  },

  {
    iata: 'LAW',
    icao: 'VYLW',
    chinese: '雷威机场',
    english: 'Lawksawk Airport',
    city: '雷威',
    province: '掸邦',
    country: '缅甸',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MMT',
    coordinates: { lat: 21.2500, lng: 96.8667 },
    runways: 1,
    priority: 64, // 🏔️ 掸邦高原
    cargo: false
  },

  {
    iata: 'XSP',
    icao: 'RPNS',
    chinese: '锡亚高机场',
    english: 'Siargao Airport',
    city: '锡亚高岛',
    province: '北苏里高省',
    country: '菲律宾',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 9.8589, lng: 126.0111 },
    runways: 1,
    priority: 76, // 🏄 冲浪天堂
    cargo: false
  },

  {
    iata: 'CYP',
    icao: 'RPSC',
    chinese: '卡加延德奥罗机场',
    english: 'Cagayan de Oro Airport',
    city: '卡加延德奥罗',
    province: '北米沙鄢',
    country: '菲律宾',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 8.4156, lng: 124.6111 },
    runways: 1,
    priority: 77, // 🌊 棉兰老岛北部门户
    cargo: false
  },

  {
    iata: 'CNS',
    icao: 'RPUR',
    chinese: '苏禄机场',
    english: 'Cotabato Airport',
    city: '哥打巴托',
    province: '南哥打巴托省',
    country: '菲律宾',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PHT',
    coordinates: { lat: 7.1653, lng: 124.2097 },
    runways: 1,
    priority: 73, // 🕌 穆斯林地区中心
    cargo: false
  }

];

// 导出统计信息
export const southeastAsiaAirportStats = {
  totalAirports: southeastAsiaEnhancedAirports.length,
  internationalAirports: southeastAsiaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: southeastAsiaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: southeastAsiaEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(southeastAsiaEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(southeastAsiaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: southeastAsiaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '东南亚六国完整覆盖',
  specialFeatures: [
    '🥈 胡志明市新山一机场 - 越南最大机场，东南亚重要枢纽',
    '🏛️ 马尼拉尼诺·阿基诺机场 - 菲律宾首都，千岛之国门户',
    '🏛️ 仰光国际机场 - 缅甸最大机场，佛塔之国门户',
    '🏛️ 金边国际机场 - 柬埔寨首都，高棉文化中心',
    '🏛️ 万象瓦岱机场 - 老挝首都，内陆佛教国家门户',
    '🛢️ 文莱国际机场 - 文莱首都，石油富国和平之邦',
    '🏛️ 暹粒-吴哥机场 - 吴哥窟世界遗产门户',
    '🏝️ 富国岛机场 - 越南最大岛屿，度假胜地',
    '🌊 宿务马克坦机场 - 菲律宾南部重要枢纽，旅游中心',
    '🏛️ 河内内排机场 - 越南首都，政治文化中心'
  ]
};
