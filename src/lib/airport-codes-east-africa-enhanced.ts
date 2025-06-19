// 🦁 非洲东部五国机场数据库 - 增强版本
// East Africa Five Nations Enhanced Airport Database
// 第七十一批机场数据库 - 东非大裂谷航空网络

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
// 🦁 非洲东部五国机场数据库 - 50个主要机场
// 覆盖肯尼亚、坦桑尼亚、乌干达、卢旺达、埃塞俄比亚
// 东非大裂谷航空网络，连接野生动物迁徙走廊与古人类发源地
// ================================================================

export const eastAfricaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 肯尼亚 - 东非门户
  // ================================================================

  {
    iata: 'NBO',
    icao: 'HKJK',
    chinese: '内罗毕乔莫·肯雅塔国际机场',
    english: 'Nairobi Jomo Kenyatta International Airport',
    city: '内罗毕',
    province: '内罗毕县',
    country: '肯尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -1.3192, lng: 36.9278 },
    runways: 2,
    priority: 100, // 🥇 肯尼亚最大机场，东非重要枢纽
    hub: ['Kenya Airways'],
    cargo: true
  },

  {
    iata: 'MBA',
    icao: 'HKMO',
    chinese: '蒙巴萨莫伊国际机场',
    english: 'Mombasa Moi International Airport',
    city: '蒙巴萨',
    province: '海岸省',
    country: '肯尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -4.0348, lng: 39.5942 },
    runways: 1,
    priority: 92, // 🌊 印度洋重要港口，海滨旅游中心
    cargo: true
  },

  {
    iata: 'KIS',
    icao: 'HKKI',
    chinese: '基苏木机场',
    english: 'Kisumu Airport',
    city: '基苏木',
    province: '尼安萨省',
    country: '肯尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -0.0861, lng: 34.7289 },
    runways: 1,
    priority: 85, // 🌊 维多利亚湖港口城市
    cargo: false
  },

  {
    iata: 'EDL',
    icao: 'HKEL',
    chinese: '埃尔多雷特机场',
    english: 'Eldoret Airport',
    city: '埃尔多雷特',
    province: '裂谷省',
    country: '肯尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 0.4044, lng: 35.2389 },
    runways: 1,
    priority: 82, // 🏃 马拉松运动员故乡
    cargo: true
  },

  {
    iata: 'MYD',
    icao: 'HKML',
    chinese: '马林迪机场',
    english: 'Malindi Airport',
    city: '马林迪',
    province: '海岸省',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -3.2297, lng: 40.1019 },
    runways: 1,
    priority: 78, // 🏖️ 海岸度假胜地
    cargo: false
  },

  {
    iata: 'LOK',
    icao: 'HKLK',
    chinese: '洛德瓦尔机场',
    english: 'Lodwar Airport',
    city: '洛德瓦尔',
    province: '图尔卡纳县',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 3.1219, lng: 35.6086 },
    runways: 1,
    priority: 75, // 🦴 图尔卡纳湖，古人类化石发现地
    cargo: false
  },

  {
    iata: 'WIL',
    icao: 'HKWJ',
    chinese: '威尔逊机场',
    english: 'Wilson Airport',
    city: '内罗毕',
    province: '内罗毕县',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -1.3218, lng: 36.8147 },
    runways: 2,
    priority: 88, // 🦁 通往马赛马拉的小型机场
    cargo: false
  },

  {
    iata: 'UAS',
    icao: 'HKGA',
    chinese: '加里萨机场',
    english: 'Garissa Airport',
    city: '加里萨',
    province: '东北省',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -0.4633, lng: 39.6481 },
    runways: 1,
    priority: 73, // 🐪 索马里边境重要城市
    cargo: false
  },

  // ================================================================
  // 📍 坦桑尼亚 - 乞力马扎罗与塞伦盖蒂
  // ================================================================

  {
    iata: 'DAR',
    icao: 'HTDA',
    chinese: '达累斯萨拉姆尼雷尔国际机场',
    english: 'Dar es Salaam Julius Nyerere International Airport',
    city: '达累斯萨拉姆',
    province: '达累斯萨拉姆区',
    country: '坦桑尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -6.8781, lng: 39.2026 },
    runways: 2,
    priority: 98, // 🏛️ 坦桑尼亚最大机场，经济中心
    hub: ['Precision Air'],
    cargo: true
  },

  {
    iata: 'JRO',
    icao: 'HTKJ',
    chinese: '乞力马扎罗国际机场',
    english: 'Kilimanjaro International Airport',
    city: '阿鲁沙',
    province: '阿鲁沙区',
    country: '坦桑尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -3.4290, lng: 37.0747 },
    runways: 1,
    priority: 95, // 🏔️ 非洲最高峰门户，野生动物园中心
    cargo: true
  },

  {
    iata: 'ZNZ',
    icao: 'HTZA',
    chinese: '桑给巴尔阿贝德·阿曼·卡鲁梅机场',
    english: 'Zanzibar Abeid Amani Karume International Airport',
    city: '桑给巴尔城',
    province: '桑给巴尔',
    country: '坦桑尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -6.2221, lng: 39.2249 },
    runways: 1,
    priority: 93, // 🏝️ 香料岛，印度洋旅游胜地
    cargo: false
  },

  {
    iata: 'MWZ',
    icao: 'HTMW',
    chinese: '姆万扎机场',
    english: 'Mwanza Airport',
    city: '姆万扎',
    province: '姆万扎区',
    country: '坦桑尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -2.4445, lng: 32.9327 },
    runways: 1,
    priority: 85, // 🌊 维多利亚湖南岸重要港口
    cargo: true
  },

  {
    iata: 'DOD',
    icao: 'HTDO',
    chinese: '多多马机场',
    english: 'Dodoma Airport',
    city: '多多马',
    province: '多多马区',
    country: '坦桑尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -6.1704, lng: 35.7526 },
    runways: 1,
    priority: 80, // 🏛️ 坦桑尼亚首都
    cargo: false
  },

  {
    iata: 'TBO',
    icao: 'HTTB',
    chinese: '塔波拉机场',
    english: 'Tabora Airport',
    city: '塔波拉',
    province: '塔波拉区',
    country: '坦桑尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -5.0764, lng: 32.8333 },
    runways: 1,
    priority: 75, // 🛤️ 中央铁路枢纽
    cargo: false
  },

  {
    iata: 'MBI',
    icao: 'HTMB',
    chinese: '姆贝亚机场',
    english: 'Mbeya Airport',
    city: '姆贝亚',
    province: '姆贝亚区',
    country: '坦桑尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -8.9194, lng: 33.4639 },
    runways: 1,
    priority: 78, // 🏔️ 南部高地重要城市
    cargo: false
  },

  {
    iata: 'BKZ',
    icao: 'HTBK',
    chinese: '布科巴机场',
    english: 'Bukoba Airport',
    city: '布科巴',
    province: '卡盖拉区',
    country: '坦桑尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -1.3322, lng: 31.8112 },
    runways: 1,
    priority: 72, // 🌊 维多利亚湖西岸
    cargo: false
  },

  // ================================================================
  // 📍 乌干达 - 非洲明珠
  // ================================================================

  {
    iata: 'EBB',
    icao: 'HUEN',
    chinese: '恩德培国际机场',
    english: 'Entebbe International Airport',
    city: '恩德培',
    province: '中部区',
    country: '乌干达',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 0.0424, lng: 32.4435 },
    runways: 1,
    priority: 90, // 🏛️ 乌干达主要国际机场，维多利亚湖畔
    hub: ['Uganda Airlines'],
    cargo: true
  },

  {
    iata: 'KLA',
    icao: 'HUKF',
    chinese: '坎帕拉卡朱克机场',
    english: 'Kampala Kajjansi Airport',
    city: '坎帕拉',
    province: '中部区',
    country: '乌干达',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 0.2006, lng: 32.5508 },
    runways: 1,
    priority: 82, // 🏛️ 乌干达首都附近机场
    cargo: false
  },

  {
    iata: 'GUL',
    icao: 'HUGU',
    chinese: '古卢机场',
    english: 'Gulu Airport',
    city: '古卢',
    province: '北部区',
    country: '乌干达',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 2.8056, lng: 32.2719 },
    runways: 1,
    priority: 75, // 🛡️ 北部重要城市
    cargo: false
  },

  {
    iata: 'KSE',
    icao: 'HUKS',
    chinese: '卡塞塞机场',
    english: 'Kasese Airport',
    city: '卡塞塞',
    province: '西部区',
    country: '乌干达',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 0.1833, lng: 30.1000 },
    runways: 1,
    priority: 78, // 🏔️ 鲁文佐里山脉门户
    cargo: false
  },

  {
    iata: 'SRT',
    icao: 'HUSO',
    chinese: '索罗提机场',
    english: 'Soroti Airport',
    city: '索罗提',
    province: '东部区',
    country: '乌干达',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 1.7275, lng: 33.6222 },
    runways: 1,
    priority: 73, // 🌾 东部农业区
    cargo: false
  },

  {
    iata: 'MBQ',
    icao: 'HUMB',
    chinese: '姆巴拉拉机场',
    english: 'Mbarara Airport',
    city: '姆巴拉拉',
    province: '西部区',
    country: '乌干达',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -0.6136, lng: 30.6481 },
    runways: 1,
    priority: 76, // 🐄 西南部畜牧业中心
    cargo: false
  },

  // ================================================================
  // 📍 卢旺达 - 千丘之国
  // ================================================================

  {
    iata: 'KGL',
    icao: 'HRYR',
    chinese: '基加利国际机场',
    english: 'Kigali International Airport',
    city: '基加利',
    province: '基加利市',
    country: '卢旺达',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -1.9686, lng: 30.1395 },
    runways: 1,
    priority: 88, // 🏛️ 卢旺达首都，千丘之国门户
    hub: ['RwandAir'],
    cargo: true
  },

  {
    iata: 'KME',
    icao: 'HRYK',
    chinese: '卡门贝机场',
    english: 'Kamembe Airport',
    city: '卡门贝',
    province: '西部省',
    country: '卢旺达',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -2.4622, lng: 28.9078 },
    runways: 1,
    priority: 78, // 🦍 尼永圭雷国家公园门户
    cargo: false
  },

  {
    iata: 'RHG',
    icao: 'HRYR',
    chinese: '鲁亨盖里机场',
    english: 'Ruhengeri Airport',
    city: '鲁亨盖里',
    province: '北部省',
    country: '卢旺达',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -1.4986, lng: 29.6361 },
    runways: 1,
    priority: 80, // 🦍 山地大猩猩保护区门户
    cargo: false
  },

  // ================================================================
  // 📍 埃塞俄比亚 - 非洲屋脊
  // ================================================================

  {
    iata: 'ADD',
    icao: 'HAAB',
    chinese: '亚的斯亚贝巴博莱国际机场',
    english: 'Addis Ababa Bole International Airport',
    city: '亚的斯亚贝巴',
    province: '亚的斯亚贝巴',
    country: '埃塞俄比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 8.9806, lng: 38.7989 },
    runways: 2,
    priority: 99, // 🏛️ 埃塞俄比亚首都，非洲联盟总部，非洲重要枢纽
    hub: ['Ethiopian Airlines'],
    cargo: true
  },

  {
    iata: 'DIR',
    icao: 'HADR',
    chinese: '迪雷达瓦机场',
    english: 'Dire Dawa Airport',
    city: '迪雷达瓦',
    province: '迪雷达瓦州',
    country: '埃塞俄比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 9.6247, lng: 41.8542 },
    runways: 1,
    priority: 82, // 🛤️ 重要铁路枢纽
    cargo: true
  },

  {
    iata: 'BJR',
    icao: 'HABC',
    chinese: '巴赫达尔机场',
    english: 'Bahir Dar Airport',
    city: '巴赫达尔',
    province: '阿姆哈拉州',
    country: '埃塞俄比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 11.6081, lng: 37.3217 },
    runways: 1,
    priority: 78, // 🌊 塔纳湖畔，青尼罗河源头
    cargo: false
  },

  {
    iata: 'GON',
    icao: 'HAGN',
    chinese: '贡德尔机场',
    english: 'Gondar Airport',
    city: '贡德尔',
    province: '阿姆哈拉州',
    country: '埃塞俄比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 12.5197, lng: 37.4342 },
    runways: 1,
    priority: 80, // 🏰 古都贡德尔，世界遗产
    cargo: false
  },

  {
    iata: 'MQX',
    icao: 'HAMA',
    chinese: '马考勒机场',
    english: 'Makale Airport',
    city: '马考勒',
    province: '提格雷州',
    country: '埃塞俄比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 13.4674, lng: 39.5336 },
    runways: 1,
    priority: 75, // 🏔️ 北部高原重要城市
    cargo: false
  },

  {
    iata: 'JIM',
    icao: 'HAJM',
    chinese: '吉马机场',
    english: 'Jimma Airport',
    city: '吉马',
    province: '奥罗米亚州',
    country: '埃塞俄比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 7.6661, lng: 36.8161 },
    runways: 1,
    priority: 77, // ☕ 咖啡产区中心
    cargo: false
  },

  {
    iata: 'AWA',
    icao: 'HAAW',
    chinese: '阿瓦萨机场',
    english: 'Awassa Airport',
    city: '阿瓦萨',
    province: '南方民族州',
    country: '埃塞俄比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 7.0669, lng: 38.5000 },
    runways: 1,
    priority: 76, // 🌊 阿瓦萨湖畔
    cargo: false
  },

  {
    iata: 'ASO',
    icao: 'HASO',
    chinese: '阿索萨机场',
    english: 'Asosa Airport',
    city: '阿索萨',
    province: '本尚古勒-古马兹州',
    country: '埃塞俄比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 10.0197, lng: 34.5864 },
    runways: 1,
    priority: 72, // 🛡️ 苏丹边境重要城市
    cargo: false
  },

  {
    iata: 'GAM',
    icao: 'HAGM',
    chinese: '甘贝拉机场',
    english: 'Gambela Airport',
    city: '甘贝拉',
    province: '甘贝拉州',
    country: '埃塞俄比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 8.1286, lng: 34.5631 },
    runways: 1,
    priority: 70, // 🌾 西南部农业区
    cargo: false
  },

  {
    iata: 'JIJ',
    icao: 'HAJJ',
    chinese: '吉吉加机场',
    english: 'Jijiga Airport',
    city: '吉吉加',
    province: '索马里州',
    country: '埃塞俄比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 9.3325, lng: 42.9122 },
    runways: 1,
    priority: 74, // 🐪 东部索马里族聚居区
    cargo: false
  },

  // ================================================================
  // 📍 其他重要东非机场
  // ================================================================

  {
    iata: 'ARK',
    icao: 'HTAR',
    chinese: '阿鲁沙机场',
    english: 'Arusha Airport',
    city: '阿鲁沙',
    province: '阿鲁沙区',
    country: '坦桑尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -3.3678, lng: 36.6333 },
    runways: 1,
    priority: 85, // 🦁 东非野生动物园首都
    cargo: false
  },

  {
    iata: 'SEI',
    icao: 'HTSE',
    chinese: '塞伦盖蒂机场',
    english: 'Seronera Airport',
    city: '塞伦盖蒂',
    province: '马拉区',
    country: '坦桑尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EAT',
    coordinates: { lat: -2.4561, lng: 34.8225 },
    runways: 1,
    priority: 90, // 🦁 塞伦盖蒂国家公园，动物大迁徙
    cargo: false
  },

  {
    iata: 'LAU',
    icao: 'HTLA',
    chinese: '劳机场',
    english: 'Lamu Airport',
    city: '劳岛',
    province: '海岸省',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -2.2522, lng: 40.9131 },
    runways: 1,
    priority: 76, // 🏝️ 古老斯瓦希里文化岛屿
    cargo: false
  }

];

// 导出统计信息
export const eastAfricaAirportStats = {
  totalAirports: eastAfricaEnhancedAirports.length,
  internationalAirports: eastAfricaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: eastAfricaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: eastAfricaEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(eastAfricaEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(eastAfricaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: eastAfricaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '东非五国完整覆盖',
  specialFeatures: [
    '🥇 内罗毕乔莫·肯雅塔机场 - 肯尼亚最大机场，东非重要枢纽',
    '🏛️ 亚的斯亚贝巴博莱机场 - 埃塞俄比亚首都，非洲联盟总部',
    '🏛️ 达累斯萨拉姆尼雷尔机场 - 坦桑尼亚最大机场，经济中心',
    '🏔️ 乞力马扎罗国际机场 - 非洲最高峰门户，野生动物园中心',
    '🏛️ 恩德培国际机场 - 乌干达主要机场，维多利亚湖畔',
    '🏛️ 基加利国际机场 - 卢旺达首都，千丘之国门户',
    '🏝️ 桑给巴尔机场 - 香料岛，印度洋旅游胜地',
    '🦁 塞伦盖蒂机场 - 动物大迁徙观赏门户',
    '🦍 山地大猩猩保护区门户 - 卢旺达和乌干达大猩猩旅游',
    '☕ 埃塞俄比亚咖啡产区 - 世界咖啡发源地航空网络'
  ]
};
