// 🌍 非洲西部五国机场数据库 - 增强版本
// West Africa Five Nations Enhanced Airport Database
// 第七十四批机场数据库 - 西非航空网络

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
// 🌍 非洲西部五国机场数据库 - 40个主要机场
// 覆盖尼日利亚、加纳、塞内加尔、科特迪瓦、喀麦隆
// 西非航空网络，连接大西洋与萨赫勒地区的西非经济走廊
// ================================================================

export const westAfricaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 尼日利亚 - 非洲人口第一大国
  // ================================================================

  {
    iata: 'LOS',
    icao: 'DNMM',
    chinese: '拉各斯穆尔塔拉·穆罕默德国际机场',
    english: 'Lagos Murtala Muhammed International Airport',
    city: '拉各斯',
    province: '拉各斯州',
    country: '尼日利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 6.5774, lng: 3.3211 },
    runways: 2,
    priority: 100, // 🥇 尼日利亚最大机场，西非重要枢纽
    hub: ['Arik Air', 'Air Peace'],
    cargo: true
  },

  {
    iata: 'ABV',
    icao: 'DNAA',
    chinese: '阿布贾纳姆迪·阿齐基韦国际机场',
    english: 'Abuja Nnamdi Azikiwe International Airport',
    city: '阿布贾',
    province: '联邦首都区',
    country: '尼日利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 9.0068, lng: 7.2632 },
    runways: 1,
    priority: 95, // 🏛️ 尼日利亚首都，西非政治中心
    hub: ['Arik Air'],
    cargo: true
  },

  {
    iata: 'KAN',
    icao: 'DNKA',
    chinese: '卡诺马拉姆·阿米努·卡诺国际机场',
    english: 'Kano Mallam Aminu Kano International Airport',
    city: '卡诺',
    province: '卡诺州',
    country: '尼日利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 12.0476, lng: 8.5242 },
    runways: 1,
    priority: 88, // 🏛️ 北部重要商业中心，豪萨文化中心
    cargo: true
  },

  {
    iata: 'PHC',
    icao: 'DNPO',
    chinese: '哈科特港国际机场',
    english: 'Port Harcourt International Airport',
    city: '哈科特港',
    province: '河流州',
    country: '尼日利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 5.0155, lng: 6.9496 },
    runways: 1,
    priority: 92, // 🛢️ 石油工业中心，尼日尔河三角洲门户
    cargo: true
  },

  {
    iata: 'IBA',
    icao: 'DNIL',
    chinese: '伊巴丹机场',
    english: 'Ibadan Airport',
    city: '伊巴丹',
    province: '奥约州',
    country: '尼日利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 7.3624, lng: 3.9783 },
    runways: 1,
    priority: 80, // 🏛️ 约鲁巴文化中心
    cargo: false
  },

  {
    iata: 'CBQ',
    icao: 'DNCA',
    chinese: '卡拉巴尔机场',
    english: 'Calabar Airport',
    city: '卡拉巴尔',
    province: '克罗斯河州',
    country: '尼日利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 4.9761, lng: 8.3472 },
    runways: 1,
    priority: 82, // 🌊 大西洋海岸重要港口
    cargo: false
  },

  {
    iata: 'MIU',
    icao: 'DNMI',
    chinese: '迈杜古里机场',
    english: 'Maiduguri Airport',
    city: '迈杜古里',
    province: '博尔诺州',
    country: '尼日利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 11.8553, lng: 13.0808 },
    runways: 1,
    priority: 78, // 🏜️ 萨赫勒地区重要城市
    cargo: false
  },

  {
    iata: 'ILR',
    icao: 'DNIL',
    chinese: '伊洛林机场',
    english: 'Ilorin Airport',
    city: '伊洛林',
    province: '夸拉州',
    country: '尼日利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 8.4402, lng: 4.4939 },
    runways: 1,
    priority: 76, // 🌾 中部农业区重要城市
    cargo: false
  },

  // ================================================================
  // 📍 加纳 - 黄金海岸
  // ================================================================

  {
    iata: 'ACC',
    icao: 'DGAA',
    chinese: '阿克拉科托卡国际机场',
    english: 'Accra Kotoka International Airport',
    city: '阿克拉',
    province: '大阿克拉区',
    country: '加纳',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 5.6056, lng: -0.1669 },
    runways: 1,
    priority: 96, // 🏛️ 加纳首都，黄金海岸门户
    hub: ['Africa World Airlines'],
    cargo: true
  },

  {
    iata: 'KMS',
    icao: 'DGSI',
    chinese: '库马西机场',
    english: 'Kumasi Airport',
    city: '库马西',
    province: '阿散蒂区',
    country: '加纳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 6.7147, lng: -1.5908 },
    runways: 1,
    priority: 85, // 🏛️ 阿散蒂王国古都，黄金贸易中心
    cargo: false
  },

  {
    iata: 'TML',
    icao: 'DGTM',
    chinese: '塔马利机场',
    english: 'Tamale Airport',
    city: '塔马利',
    province: '北部区',
    country: '加纳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 9.5572, lng: -0.8633 },
    runways: 1,
    priority: 78, // 🌾 北部农业区重要城市
    cargo: false
  },

  {
    iata: 'TKD',
    icao: 'DGTK',
    chinese: '塔科拉迪机场',
    english: 'Takoradi Airport',
    city: '塔科拉迪',
    province: '西部区',
    country: '加纳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 4.8961, lng: -1.7747 },
    runways: 1,
    priority: 82, // 🛢️ 西部石油港口城市
    cargo: true
  },

  // ================================================================
  // 📍 塞内加尔 - 西非大西洋门户
  // ================================================================

  {
    iata: 'DSS',
    icao: 'GOBD',
    chinese: '达喀尔布莱兹·迪亚涅国际机场',
    english: 'Dakar Blaise Diagne International Airport',
    city: '达喀尔',
    province: '达喀尔区',
    country: '塞内加尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 14.6704, lng: -17.0732 },
    runways: 1,
    priority: 94, // 🏛️ 塞内加尔首都，西非大西洋门户
    hub: ['Air Senegal'],
    cargo: true
  },

  {
    iata: 'DKR',
    icao: 'GOOY',
    chinese: '达喀尔利奥波德·塞达尔·桑戈尔国际机场',
    english: 'Dakar Léopold Sédar Senghor International Airport',
    city: '达喀尔',
    province: '达喀尔区',
    country: '塞内加尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 14.7397, lng: -17.4902 },
    runways: 1,
    priority: 88, // 🏛️ 达喀尔旧机场，历史重要性
    cargo: true
  },

  {
    iata: 'CSK',
    icao: 'GOGS',
    chinese: '卡萨芒斯机场',
    english: 'Cap Skiring Airport',
    city: '卡萨芒斯',
    province: '济金绍尔区',
    country: '塞内加尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 12.3953, lng: -16.7461 },
    runways: 1,
    priority: 75, // 🏖️ 南部旅游度假区
    cargo: false
  },

  {
    iata: 'XLS',
    icao: 'GOSS',
    chinese: '圣路易机场',
    english: 'Saint-Louis Airport',
    city: '圣路易',
    province: '圣路易区',
    country: '塞内加尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 16.0514, lng: -16.4631 },
    runways: 1,
    priority: 77, // 🏛️ 世界遗产古城，塞内加尔河门户
    cargo: false
  },

  // ================================================================
  // 📍 科特迪瓦 - 象牙海岸
  // ================================================================

  {
    iata: 'ABJ',
    icao: 'DIAP',
    chinese: '阿比让费利克斯·乌弗埃-博瓦尼国际机场',
    english: 'Abidjan Félix-Houphouët-Boigny International Airport',
    city: '阿比让',
    province: '拉贡区',
    country: '科特迪瓦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 5.2614, lng: -3.9263 },
    runways: 1,
    priority: 97, // 🏛️ 科特迪瓦经济首都，西非重要枢纽
    hub: ['Air Côte d\'Ivoire'],
    cargo: true
  },

  {
    iata: 'BYK',
    icao: 'DIBK',
    chinese: '布瓦凯机场',
    english: 'Bouaké Airport',
    city: '布瓦凯',
    province: '瓦卢埃区',
    country: '科特迪瓦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 7.7388, lng: -5.0764 },
    runways: 1,
    priority: 80, // 🌾 中部农业区重要城市
    cargo: false
  },

  {
    iata: 'MJC',
    icao: 'DIMN',
    chinese: '曼机场',
    english: 'Man Airport',
    city: '曼',
    province: '十八山区',
    country: '科特迪瓦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 7.2722, lng: -7.5897 },
    runways: 1,
    priority: 76, // 🏔️ 西部山区重要城市
    cargo: false
  },

  {
    iata: 'SPY',
    icao: 'DISP',
    chinese: '圣佩德罗机场',
    english: 'San Pedro Airport',
    city: '圣佩德罗',
    province: '巴斯-萨桑德拉区',
    country: '科特迪瓦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 4.7467, lng: -6.6608 },
    runways: 1,
    priority: 83, // 🌊 重要港口城市，可可出口中心
    cargo: true
  },

  // ================================================================
  // 📍 喀麦隆 - 中非门户
  // ================================================================

  {
    iata: 'NSI',
    icao: 'FKYS',
    chinese: '雅温得恩西马兰国际机场',
    english: 'Yaoundé Nsimalen International Airport',
    city: '雅温得',
    province: '中央省',
    country: '喀麦隆',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 3.7223, lng: 11.5533 },
    runways: 1,
    priority: 93, // 🏛️ 喀麦隆首都，中非门户
    hub: ['Camair-Co'],
    cargo: true
  },

  {
    iata: 'DLA',
    icao: 'FKKD',
    chinese: '杜阿拉国际机场',
    english: 'Douala International Airport',
    city: '杜阿拉',
    province: '滨海省',
    country: '喀麦隆',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 4.0061, lng: 9.7195 },
    runways: 1,
    priority: 95, // 🌊 喀麦隆最大港口，经济中心
    cargo: true
  },

  {
    iata: 'GOU',
    icao: 'FKKM',
    chinese: '加鲁阿机场',
    english: 'Garoua Airport',
    city: '加鲁阿',
    province: '北部省',
    country: '喀麦隆',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 9.3358, lng: 13.3700 },
    runways: 1,
    priority: 85, // 🏜️ 北部重要城市，萨赫勒地区门户
    cargo: false
  },

  {
    iata: 'BFX',
    icao: 'FKKJ',
    chinese: '巴富萨姆机场',
    english: 'Bafoussam Airport',
    city: '巴富萨姆',
    province: '西部省',
    country: '喀麦隆',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 5.5369, lng: 10.3542 },
    runways: 1,
    priority: 78, // 🏔️ 西部高原重要城市
    cargo: false
  },

  {
    iata: 'FOM',
    icao: 'FKKI',
    chinese: '丰班机场',
    english: 'Foumban Airport',
    city: '丰班',
    province: '西部省',
    country: '喀麦隆',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 5.6369, lng: 10.7581 },
    runways: 1,
    priority: 75, // 🏛️ 巴穆姆王国古都
    cargo: false
  },

  {
    iata: 'MVR',
    icao: 'FKKL',
    chinese: '马鲁阿机场',
    english: 'Maroua Airport',
    city: '马鲁阿',
    province: '极北省',
    country: '喀麦隆',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 10.4517, lng: 14.2572 },
    runways: 1,
    priority: 77, // 🏜️ 萨赫勒地区重要城市
    cargo: false
  },

  // ================================================================
  // 📍 其他重要西非机场
  // ================================================================

  {
    iata: 'ENU',
    icao: 'DNEN',
    chinese: '埃努古机场',
    english: 'Enugu Airport',
    city: '埃努古',
    province: '埃努古州',
    country: '尼日利亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 6.4742, lng: 7.5619 },
    runways: 1,
    priority: 84, // 🏛️ 东南部重要城市，伊博文化中心
    cargo: false
  },

  {
    iata: 'JOS',
    icao: 'DNJO',
    chinese: '乔斯机场',
    english: 'Jos Airport',
    city: '乔斯',
    province: '高原州',
    country: '尼日利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 9.6383, lng: 8.8700 },
    runways: 1,
    priority: 79, // 🏔️ 高原地区重要城市
    cargo: false
  },

  {
    iata: 'GME',
    icao: 'DGMR',
    chinese: '戈梅机场',
    english: 'Gombe Airport',
    city: '贡贝',
    province: '贡贝州',
    country: '尼日利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 10.2981, lng: 11.1669 },
    runways: 1,
    priority: 74, // 🌾 东北部农业区
    cargo: false
  },

  {
    iata: 'SKO',
    icao: 'DNSO',
    chinese: '索科托机场',
    english: 'Sokoto Airport',
    city: '索科托',
    province: '索科托州',
    country: '尼日利亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 12.9163, lng: 5.2072 },
    runways: 1,
    priority: 81, // 🏛️ 历史苏丹国都城
    cargo: false
  },

  {
    iata: 'WA',
    icao: 'DGWA',
    chinese: '瓦机场',
    english: 'Wa Airport',
    city: '瓦',
    province: '上西部区',
    country: '加纳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 10.0831, lng: -2.5075 },
    runways: 1,
    priority: 72, // 🌾 西北部重要城市
    cargo: false
  },

  {
    iata: 'THI',
    icao: 'GOGG',
    chinese: '蒂埃斯机场',
    english: 'Thiès Airport',
    city: '蒂埃斯',
    province: '蒂埃斯区',
    country: '塞内加尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 14.7097, lng: -16.9256 },
    runways: 1,
    priority: 73, // 🚄 重要铁路枢纽
    cargo: false
  },

  {
    iata: 'OUA',
    icao: 'DIOU',
    chinese: '瓦希瓜亚机场',
    english: 'Ouahigouya Airport',
    city: '瓦希瓜亚',
    province: '萨瓦纳区',
    country: '科特迪瓦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GMT',
    coordinates: { lat: 9.5597, lng: -2.4203 },
    runways: 1,
    priority: 71, // 🌾 北部萨瓦纳地区
    cargo: false
  },

  {
    iata: 'NGE',
    icao: 'FKKF',
    chinese: '恩冈代雷机场',
    english: 'N\'Gaoundéré Airport',
    city: '恩冈代雷',
    province: '阿达马瓦省',
    country: '喀麦隆',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 7.3569, lng: 13.5589 },
    runways: 1,
    priority: 76, // 🏔️ 中部高原重要城市
    cargo: false
  },

  {
    iata: 'BTA',
    icao: 'FKKY',
    chinese: '贝尔图阿机场',
    english: 'Bertoua Airport',
    city: '贝尔图阿',
    province: '东部省',
    country: '喀麦隆',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WAT',
    coordinates: { lat: 4.5386, lng: 13.7256 },
    runways: 1,
    priority: 74, // 🌲 东部森林区重要城市
    cargo: false
  }

];

// 导出统计信息
export const westAfricaAirportStats = {
  totalAirports: westAfricaEnhancedAirports.length,
  internationalAirports: westAfricaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: westAfricaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: westAfricaEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(westAfricaEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(westAfricaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: westAfricaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '非洲西部五国完整覆盖',
  specialFeatures: [
    '🥇 拉各斯穆尔塔拉·穆罕默德机场 - 尼日利亚最大机场，西非重要枢纽',
    '🏛️ 阿布贾纳姆迪·阿齐基韦机场 - 尼日利亚首都，西非政治中心',
    '🏛️ 阿克拉科托卡机场 - 加纳首都，黄金海岸门户',
    '🏛️ 达喀尔布莱兹·迪亚涅机场 - 塞内加尔首都，西非大西洋门户',
    '🏛️ 阿比让费利克斯·乌弗埃-博瓦尼机场 - 科特迪瓦经济首都',
    '🏛️ 雅温得恩西马兰机场 - 喀麦隆首都，中非门户',
    '🌊 大西洋海岸航空网络 - 连接欧洲与西非的重要航空走廊',
    '🥇 可可经济带机场 - 世界最大可可产区航空网络',
    '🛢️ 石油经济走廊 - 几内亚湾石油开采航空支持网络',
    '🌍 西非经济共同体 - ECOWAS地区重要航空枢纽'
  ]
};
