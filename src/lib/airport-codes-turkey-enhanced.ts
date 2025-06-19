// 🇹🇷 土耳其机场数据库 - 增强版本
// Turkey Enhanced Airport Database
// 第二十五批机场数据库 - 欧洲大洲继续

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
// 🇹🇷 土耳其共和国机场数据库 - 20个主要机场
// 覆盖7大地区：马尔马拉、爱琴海、地中海、中安纳托利亚、
// 黑海、东安纳托利亚、东南安纳托利亚
// 横跨欧亚大陆，连接三大洲的战略枢纽
// ================================================================

export const turkeyEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 伊斯坦布尔大都市区 - 欧亚交汇点
  // ================================================================

  {
    iata: 'IST',
    icao: 'LTFM',
    chinese: '伊斯坦布尔机场',
    english: 'Istanbul Airport',
    city: '伊斯坦布尔',
    province: '伊斯坦布尔省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 41.2753, lng: 28.7519 },
    runways: 3,
    priority: 100, // 🥇 世界最大机场之一，土耳其新国门
    hub: ['土耳其航空', '飞马航空'],
    cargo: true
  },

  {
    iata: 'SAW',
    icao: 'LTFJ',
    chinese: '萨比哈·格克琴国际机场',
    english: 'Sabiha Gokcen International Airport',
    city: '伊斯坦布尔',
    province: '伊斯坦布尔省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 40.8986, lng: 29.3092 },
    runways: 1,
    priority: 95, // 🌆 伊斯坦布尔亚洲侧重要门户
    hub: ['飞马航空', 'AnadoluJet'],
    cargo: true
  },

  // ================================================================
  // 📍 安卡拉 - 首都及中安纳托利亚地区
  // ================================================================

  {
    iata: 'ESB',
    icao: 'LTAC',
    chinese: '埃森博阿国际机场',
    english: 'Esenboga International Airport',
    city: '安卡拉',
    province: '安卡拉省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 40.1281, lng: 32.9951 },
    runways: 2,
    priority: 92, // 🏛️ 首都国际机场
    hub: ['土耳其航空'],
    cargo: true
  },

  // ================================================================
  // 📍 地中海地区 - 旅游度假胜地
  // ================================================================

  {
    iata: 'AYT',
    icao: 'LTAI',
    chinese: '安塔利亚机场',
    english: 'Antalya Airport',
    city: '安塔利亚',
    province: '安塔利亚省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 36.8987, lng: 30.8005 },
    runways: 2,
    priority: 98, // 🏖️ 地中海度假胜地门户
    hub: ['土耳其航空', 'SunExpress'],
    cargo: false
  },

  {
    iata: 'DLM',
    icao: 'LTBS',
    chinese: '达拉曼机场',
    english: 'Dalaman Airport',
    city: '达拉曼',
    province: '穆拉省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 36.7131, lng: 28.7925 },
    runways: 1,
    priority: 85, // 🌊 爱琴海海岸旅游门户
    hub: ['SunExpress'],
    cargo: false
  },

  {
    iata: 'ADA',
    icao: 'LTAF',
    chinese: '阿达纳萨基普·萨班哲机场',
    english: 'Adana Sakirpasa Airport',
    city: '阿达纳',
    province: '阿达纳省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 35.2804, lng: 35.2806 },
    runways: 1,
    priority: 80, // 🌾 地中海农业重镇
    cargo: true
  },

  // ================================================================
  // 📍 爱琴海地区 - 西部经济中心
  // ================================================================

  {
    iata: 'ADB',
    icao: 'LTBJ',
    chinese: '伊兹密尔阿德南·门德雷斯机场',
    english: 'Izmir Adnan Menderes Airport',
    city: '伊兹密尔',
    province: '伊兹密尔省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 38.2924, lng: 27.1569 },
    runways: 1,
    priority: 90, // 🏭 爱琴海重要工业港口城市
    hub: ['土耳其航空', 'SunExpress'],
    cargo: true
  },

  {
    iata: 'BJV',
    icao: 'LTFE',
    chinese: '博德鲁姆-米拉斯机场',
    english: 'Bodrum-Milas Airport',
    city: '博德鲁姆',
    province: '穆拉省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 37.2506, lng: 27.6642 },
    runways: 1,
    priority: 83, // 🏖️ 爱琴海度假胜地
    cargo: false
  },

  // ================================================================
  // 📍 卡帕多奇亚和中安纳托利亚
  // ================================================================

  {
    iata: 'NAV',
    icao: 'LTAZ',
    chinese: '内夫谢希尔卡帕多奇亚机场',
    english: 'Nevsehir Cappadocia Airport',
    city: '内夫谢希尔',
    province: '内夫谢希尔省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 38.7719, lng: 34.5347 },
    runways: 1,
    priority: 88, // 🎈 卡帕多奇亚热气球旅游胜地
    cargo: false
  },

  {
    iata: 'KYA',
    icao: 'LTAU',
    chinese: '科尼亚机场',
    english: 'Konya Airport',
    city: '科尼亚',
    province: '科尼亚省',
    country: '土耳其',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 37.9792, lng: 32.5619 },
    runways: 1,
    priority: 75, // 🕌 苏菲派圣地，安纳托利亚中心
    cargo: false
  },

  // ================================================================
  // 📍 黑海地区
  // ================================================================

  {
    iata: 'TZX',
    icao: 'LTCG',
    chinese: '特拉布宗机场',
    english: 'Trabzon Airport',
    city: '特拉布宗',
    province: '特拉布宗省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 40.9950, lng: 39.7897 },
    runways: 1,
    priority: 82, // 🌊 黑海重要港口城市
    hub: ['土耳其航空'],
    cargo: false
  },

  {
    iata: 'SZF',
    icao: 'LTFH',
    chinese: '萨姆松-乔尔鲁机场',
    english: 'Samsun-Carsamba Airport',
    city: '萨姆松',
    province: '萨姆松省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 41.2544, lng: 36.5672 },
    runways: 1,
    priority: 78, // 🌊 黑海南岸重要城市
    cargo: false
  },

  // ================================================================
  // 📍 东安纳托利亚地区
  // ================================================================

  {
    iata: 'ERZ',
    icao: 'LTCE',
    chinese: '埃尔祖鲁姆机场',
    english: 'Erzurum Airport',
    city: '埃尔祖鲁姆',
    province: '埃尔祖鲁姆省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 39.9564, lng: 41.1781 },
    runways: 1,
    priority: 76, // 🏔️ 东安纳托利亚高原重镇
    cargo: false
  },

  {
    iata: 'VAN',
    icao: 'LTCI',
    chinese: '凡湖机场',
    english: 'Van Ferit Melen Airport',
    city: '凡',
    province: '凡省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 38.4681, lng: 43.3322 },
    runways: 1,
    priority: 74, // 🏔️ 凡湖地区门户
    cargo: false
  },

  {
    iata: 'ERC',
    icao: 'LTCD',
    chinese: '埃尔詹机场',
    english: 'Ercan Airport',
    city: '埃尔詹',
    province: '卡尔斯省',
    country: '土耳其',
    isInternational: false,
    hasCustoms: false,
    timezone: 'TRT',
    coordinates: { lat: 40.6008, lng: 43.1169 },
    runways: 1,
    priority: 68, // 🗻 东部边境地区
    cargo: false
  },

  // ================================================================
  // 📍 东南安纳托利亚地区
  // ================================================================

  {
    iata: 'GZT',
    icao: 'LTAJ',
    chinese: '加济安泰普机场',
    english: 'Gaziantep Airport',
    city: '加济安泰普',
    province: '加济安泰普省',
    country: '土耳其',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 36.9472, lng: 37.4786 },
    runways: 1,
    priority: 81, // 🏭 东南重要工业城市
    hub: ['土耳其航空'],
    cargo: true
  },

  {
    iata: 'MLX',
    icao: 'LTCN',
    chinese: '马拉蒂亚机场',
    english: 'Malatya Airport',
    city: '马拉蒂亚',
    province: '马拉蒂亚省',
    country: '土耳其',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 38.4353, lng: 38.0917 },
    runways: 1,
    priority: 72, // 🍑 杏子之城
    cargo: false
  },

  {
    iata: 'DIY',
    icao: 'LTCC',
    chinese: '迪亚巴克尔机场',
    english: 'Diyarbakir Airport',
    city: '迪亚巴克尔',
    province: '迪亚巴克尔省',
    country: '土耳其',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TRT',
    coordinates: { lat: 37.8939, lng: 40.2011 },
    runways: 1,
    priority: 70, // 🏛️ 库尔德文化中心
    cargo: false
  },

  // ================================================================
  // 📍 马尔马拉地区其他城市
  // ================================================================

  {
    iata: 'BDM',
    icao: 'LTBG',
    chinese: '班德尔马机场',
    english: 'Bandirma Airport',
    city: '班德尔马',
    province: '巴勒克埃西尔省',
    country: '土耳其',
    isInternational: false,
    hasCustoms: false,
    timezone: 'TRT',
    coordinates: { lat: 40.3181, lng: 27.9778 },
    runways: 1,
    priority: 65, // 🌊 马尔马拉海地区
    cargo: false
  },

  // ================================================================
  // 📍 中安纳托利亚其他重要城市
  // ================================================================

  {
    iata: 'KZR',
    icao: 'LTAP',
    chinese: '恰纳卡莱机场',
    english: 'Canakkale Airport',
    city: '恰纳卡莱',
    province: '恰纳卡莱省',
    country: '土耳其',
    isInternational: false,
    hasCustoms: false,
    timezone: 'TRT',
    coordinates: { lat: 40.1378, lng: 26.4267 },
    runways: 1,
    priority: 67, // 🏛️ 特洛伊古城门户
    cargo: false
  }

];

// 导出统计信息
export const turkeyAirportStats = {
  totalAirports: turkeyEnhancedAirports.length,
  internationalAirports: turkeyEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: turkeyEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: turkeyEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(turkeyEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: turkeyEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '土耳其7大地理区域完整覆盖',
  specialFeatures: [
    '🥇 伊斯坦布尔机场 - 世界最大机场之一，欧亚交汇点',
    '🌆 萨比哈·格克琴机场 - 伊斯坦布尔亚洲侧重要门户',
    '🏖️ 安塔利亚机场 - 地中海度假胜地超级枢纽',
    '🎈 卡帕多奇亚机场 - 世界遗产热气球旅游胜地',
    '🏛️ 埃森博阿机场 - 安卡拉首都国际门户',
    '🌊 爱琴海机场群 - 伊兹密尔、博德鲁姆度假航空网络'
  ]
};
