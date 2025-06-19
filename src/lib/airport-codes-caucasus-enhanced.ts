// 🏔️ 高加索三国机场数据库 - 增强版本
// Caucasus Three Nations Enhanced Airport Database
// 第七十七批机场数据库 - 高加索航空网络

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
// 🏔️ 高加索三国机场数据库 - 15个主要机场
// 覆盖格鲁吉亚、亚美尼亚、阿塞拜疆
// 高加索航空网络，连接欧亚大陆的高加索航空走廊
// ================================================================

export const caucasusEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 格鲁吉亚 - 高加索明珠
  // ================================================================

  {
    iata: 'TBS',
    icao: 'UGTB',
    chinese: '第比利斯绍塔·鲁斯塔维利国际机场',
    english: 'Tbilisi Shota Rustaveli International Airport',
    city: '第比利斯',
    province: '第比利斯',
    country: '格鲁吉亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GET',
    coordinates: { lat: 41.6692, lng: 44.9547 },
    runways: 1,
    priority: 100, // 🥇 格鲁吉亚首都，高加索重要枢纽
    hub: ['Georgian Airways'],
    cargo: true
  },

  {
    iata: 'BUS',
    icao: 'UGKO',
    chinese: '巴统机场',
    english: 'Batumi Airport',
    city: '巴统',
    province: '阿扎尔',
    country: '格鲁吉亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GET',
    coordinates: { lat: 41.6102, lng: 41.5997 },
    runways: 1,
    priority: 88, // 🌊 黑海海岸重要港口，度假胜地
    cargo: false
  },

  {
    iata: 'KUT',
    icao: 'UGKO',
    chinese: '库塔伊西大卫建造者机场',
    english: 'Kutaisi David the Builder Airport',
    city: '库塔伊西',
    province: '伊梅列季',
    country: '格鲁吉亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GET',
    coordinates: { lat: 42.1761, lng: 42.4828 },
    runways: 1,
    priority: 85, // 🏛️ 古代格鲁吉亚王国首都
    cargo: false
  },

  {
    iata: 'SUI',
    icao: 'UGSS',
    chinese: '苏胡米机场',
    english: 'Sukhumi Airport',
    city: '苏胡米',
    province: '阿布哈兹',
    country: '格鲁吉亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GET',
    coordinates: { lat: 42.8581, lng: 41.1289 },
    runways: 1,
    priority: 75, // 🌊 黑海海岸，阿布哈兹地区
    cargo: false
  },

  {
    iata: 'LET',
    icao: 'UGML',
    chinese: '列蒂机场',
    english: 'Leti Airport',
    city: '列蒂',
    province: '萨梅格雷洛-泽莫·斯瓦涅季',
    country: '格鲁吉亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GET',
    coordinates: { lat: 42.3819, lng: 42.8833 },
    runways: 1,
    priority: 70, // 🏔️ 高加索山区机场
    cargo: false
  },

  // ================================================================
  // 📍 亚美尼亚 - 古代文明摇篮
  // ================================================================

  {
    iata: 'EVN',
    icao: 'UDYZ',
    chinese: '埃里温兹瓦尔特诺茨国际机场',
    english: 'Yerevan Zvartnots International Airport',
    city: '埃里温',
    province: '埃里温',
    country: '亚美尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: 40.1473, lng: 44.3959 },
    runways: 2,
    priority: 98, // 🏛️ 亚美尼亚首都，古代文明门户
    hub: ['Armenia Aircompany'],
    cargo: true
  },

  {
    iata: 'LWN',
    icao: 'UDSG',
    chinese: '久姆里希拉克机场',
    english: 'Gyumri Shirak Airport',
    city: '久姆里',
    province: '希拉克',
    country: '亚美尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: 40.7504, lng: 43.8593 },
    runways: 1,
    priority: 80, // 🏛️ 亚美尼亚第二大城市
    cargo: false
  },

  {
    iata: 'KPS',
    icao: 'UDKS',
    chinese: '卡帕纳机场',
    english: 'Kapan Airport',
    city: '卡帕纳',
    province: '休尼克',
    country: '亚美尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: 39.2069, lng: 46.4306 },
    runways: 1,
    priority: 72, // 🏔️ 南部山区城市
    cargo: false
  },

  {
    iata: 'VAN',
    icao: 'UDVA',
    chinese: '瓦纳佐尔机场',
    english: 'Vanadzor Airport',
    city: '瓦纳佐尔',
    province: '洛里',
    country: '亚美尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: 40.9044, lng: 44.4081 },
    runways: 1,
    priority: 75, // 🏭 工业城市，第三大城市
    cargo: false
  },

  // ================================================================
  // 📍 阿塞拜疆 - 火焰之国
  // ================================================================

  {
    iata: 'GYD',
    icao: 'UBBB',
    chinese: '巴库盖达尔·阿利耶夫国际机场',
    english: 'Baku Heydar Aliyev International Airport',
    city: '巴库',
    province: '巴库',
    country: '阿塞拜疆',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AZT',
    coordinates: { lat: 40.4675, lng: 50.0467 },
    runways: 2,
    priority: 99, // 🥇 阿塞拜疆首都，里海石油中心
    hub: ['Azerbaijan Airlines'],
    cargo: true
  },

  {
    iata: 'GNJ',
    icao: 'UBBG',
    chinese: '甘贾机场',
    english: 'Ganja Airport',
    city: '甘贾',
    province: '甘贾',
    country: '阿塞拜疆',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AZT',
    coordinates: { lat: 40.7377, lng: 46.3197 },
    runways: 1,
    priority: 85, // 🏛️ 阿塞拜疆第二大城市
    cargo: false
  },

  {
    iata: 'LLK',
    icao: 'UBBL',
    chinese: '连科兰机场',
    english: 'Lankaran Airport',
    city: '连科兰',
    province: '连科兰',
    country: '阿塞拜疆',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AZT',
    coordinates: { lat: 38.7464, lng: 48.8180 },
    runways: 1,
    priority: 78, // 🌊 里海南岸重要港口
    cargo: false
  },

  {
    iata: 'NAJ',
    icao: 'UBBN',
    chinese: '纳希切万机场',
    english: 'Nakhchivan Airport',
    city: '纳希切万',
    province: '纳希切万自治共和国',
    country: '阿塞拜疆',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AZT',
    coordinates: { lat: 39.1888, lng: 45.4584 },
    runways: 1,
    priority: 82, // 🏛️ 自治共和国首府
    cargo: false
  },

  {
    iata: 'ZAQ',
    icao: 'UBBZ',
    chinese: '扎卡塔雷机场',
    english: 'Zagatala Airport',
    city: '扎卡塔雷',
    province: '扎卡塔雷',
    country: '阿塞拜疆',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AZT',
    coordinates: { lat: 41.5622, lng: 46.6675 },
    runways: 1,
    priority: 76, // 🏔️ 高加索山麓城市
    cargo: false
  },

  {
    iata: 'SIZ',
    icao: 'UBBS',
    chinese: '舍基机场',
    english: 'Sheki Airport',
    city: '舍基',
    province: '舍基',
    country: '阿塞拜疆',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AZT',
    coordinates: { lat: 41.2111, lng: 47.1708 },
    runways: 1,
    priority: 74, // 🏛️ 古代丝绸之路重镇
    cargo: false
  }

];

// 导出统计信息
export const caucasusAirportStats = {
  totalAirports: caucasusEnhancedAirports.length,
  internationalAirports: caucasusEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: caucasusEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: caucasusEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(caucasusEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(caucasusEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: caucasusEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '高加索三国完整覆盖',
  specialFeatures: [
    '🥇 第比利斯绍塔·鲁斯塔维利机场 - 格鲁吉亚首都，高加索重要枢纽',
    '🏛️ 埃里温兹瓦尔特诺茨机场 - 亚美尼亚首都，古代文明门户',
    '🥇 巴库盖达尔·阿利耶夫机场 - 阿塞拜疆首都，里海石油中心',
    '🌊 里海西岸航空网络 - 连接中亚与高加索的能源走廊',
    '🏔️ 高加索山脉航空网络 - 欧洲与亚洲分界线航空支持',
    '🍷 高加索酒文化航空网络 - 世界葡萄酒发源地旅游支持',
    '⛪ 古代基督教文化 - 早期基督教国家航空网络',
    '🏛️ 古代丝绸之路 - 东西方文明交汇的航空支持',
    '🌊 黑海海岸航空网络 - 巴统度假胜地门户',
    '🛢️ 里海石油经济 - 阿塞拜疆石油天然气航空物流网络'
  ]
};
