// 🌊 大洋洲其他岛国机场数据库 - 增强版本
// Oceania Other Island Nations Enhanced Airport Database
// 第八十三批机场数据库 - 太平洋岛国航空网络完善

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
// 🌊 大洋洲其他岛国机场数据库 - 25个主要机场
// 覆盖萨摩亚、库克群岛、纽埃、托克劳、基里巴斯、瑙鲁、马绍尔群岛、密克罗尼西亚
// 太平洋岛国航空网络完善，连接波利尼西亚与美拉尼西亚的航空走廊
// ================================================================

export const oceaniaOtherEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 萨摩亚 - 波利尼西亚心脏
  // ================================================================

  {
    iata: 'APW',
    icao: 'NSFA',
    chinese: '法里奥洛国际机场',
    english: 'Faleolo International Airport',
    city: '阿皮亚',
    province: '阿皮亚',
    country: '萨摩亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'WST',
    coordinates: { lat: -13.8297, lng: -172.0081 },
    runways: 1,
    priority: 95, // 🏛️ 萨摩亚首都，波利尼西亚心脏
    hub: ['Samoa Airways'],
    cargo: true
  },

  {
    iata: 'MUX',
    icao: 'NSMA',
    chinese: '马奥塔机场',
    english: 'Maota Airport',
    city: '萨瓦伊岛',
    province: '萨瓦伊',
    country: '萨摩亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'WST',
    coordinates: { lat: -13.7425, lng: -172.6278 },
    runways: 1,
    priority: 78, // 🌊 萨瓦伊岛门户
    cargo: false
  },

  // ================================================================
  // 📍 库克群岛 - 南太平洋度假天堂
  // ================================================================

  {
    iata: 'RAR',
    icao: 'NCRG',
    chinese: '拉罗汤加国际机场',
    english: 'Rarotonga International Airport',
    city: '阿瓦鲁阿',
    province: '拉罗汤加',
    country: '库克群岛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CKT',
    coordinates: { lat: -21.2026, lng: -159.8056 },
    runways: 1,
    priority: 92, // 🏛️ 库克群岛首都，南太平洋度假天堂
    hub: ['Air Rarotonga'],
    cargo: true
  },

  {
    iata: 'AIU',
    icao: 'NCAI',
    chinese: '艾图塔基机场',
    english: 'Aitutaki Airport',
    city: '艾图塔基',
    province: '艾图塔基',
    country: '库克群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CKT',
    coordinates: { lat: -18.8306, lng: -159.7642 },
    runways: 1,
    priority: 88, // 🏝️ 世界最美泻湖，度假胜地
    cargo: false
  },

  {
    iata: 'MGS',
    icao: 'NCMN',
    chinese: '芒阿伊阿机场',
    english: 'Mangaia Airport',
    city: '芒阿伊阿',
    province: '芒阿伊阿',
    country: '库克群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CKT',
    coordinates: { lat: -21.8956, lng: -157.9075 },
    runways: 1,
    priority: 75, // 🌴 南部群岛重要岛屿
    cargo: false
  },

  // ================================================================
  // 📍 纽埃 - 珊瑚岛国
  // ================================================================

  {
    iata: 'IUE',
    icao: 'NIUE',
    chinese: '纽埃国际机场',
    english: 'Niue International Airport',
    city: '阿洛菲',
    province: '阿洛菲',
    country: '纽埃',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NUT',
    coordinates: { lat: -19.0797, lng: -169.9256 },
    runways: 1,
    priority: 85, // 🏛️ 纽埃首都，珊瑚岛国
    cargo: false
  },

  // ================================================================
  // 📍 托克劳 - 南太平洋环礁
  // ================================================================

  {
    iata: 'TKL',
    icao: 'NTKS',
    chinese: '托克劳机场',
    english: 'Tokelau Airport',
    city: '法卡奥福',
    province: '法卡奥福',
    country: '托克劳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TKT',
    coordinates: { lat: -9.3817, lng: -171.2125 },
    runways: 1,
    priority: 72, // 🌊 托克劳环礁门户
    cargo: false
  },

  // ================================================================
  // 📍 基里巴斯 - 跨越四个半球的国家
  // ================================================================

  {
    iata: 'TRW',
    icao: 'NGTA',
    chinese: '塔拉瓦国际机场',
    english: 'Tarawa International Airport',
    city: '南塔拉瓦',
    province: '塔拉瓦',
    country: '基里巴斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GILT',
    coordinates: { lat: 1.3816, lng: 173.1472 },
    runways: 1,
    priority: 90, // 🏛️ 基里巴斯首都，跨越四个半球
    hub: ['Air Kiribati'],
    cargo: true
  },

  {
    iata: 'CXI',
    icao: 'PLCH',
    chinese: '卡西迪岛机场',
    english: 'Cassidy International Airport',
    city: '基里地马地',
    province: '莱恩群岛',
    country: '基里巴斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'LINT',
    coordinates: { lat: 1.9861, lng: -157.3500 },
    runways: 1,
    priority: 86, // 🌊 圣诞岛，世界最大环礁
    cargo: false
  },

  {
    iata: 'KUC',
    icao: 'NGKU',
    chinese: '库里亚机场',
    english: 'Kuria Airport',
    city: '库里亚',
    province: '吉尔伯特群岛',
    country: '基里巴斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'GILT',
    coordinates: { lat: 0.2167, lng: 173.6333 },
    runways: 1,
    priority: 70, // 🌴 吉尔伯特群岛
    cargo: false
  },

  // ================================================================
  // 📍 瑙鲁 - 世界最小岛国
  // ================================================================

  {
    iata: 'INU',
    icao: 'ANYN',
    chinese: '瑙鲁国际机场',
    english: 'Nauru International Airport',
    city: '亚伦',
    province: '亚伦',
    country: '瑙鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NRT',
    coordinates: { lat: -0.5472, lng: 166.9194 },
    runways: 1,
    priority: 88, // 🏛️ 瑙鲁首都，世界最小岛国
    hub: ['Nauru Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 马绍尔群岛 - 核试验历史见证
  // ================================================================

  {
    iata: 'MAJ',
    icao: 'PKMJ',
    chinese: '马朱罗国际机场',
    english: 'Marshall Islands International Airport',
    city: '马朱罗',
    province: '马朱罗',
    country: '马绍尔群岛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MHT',
    coordinates: { lat: 7.0647, lng: 171.2722 },
    runways: 1,
    priority: 92, // 🏛️ 马绍尔群岛首都，太平洋战略要地
    hub: ['Air Marshall Islands'],
    cargo: true
  },

  {
    iata: 'KWA',
    icao: 'PKWA',
    chinese: '夸贾林环礁机场',
    english: 'Kwajalein Atoll Airport',
    city: '夸贾林',
    province: '夸贾林',
    country: '马绍尔群岛',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MHT',
    coordinates: { lat: 8.7208, lng: 167.7319 },
    runways: 1,
    priority: 85, // ✈️ 美军导弹试验基地
    cargo: true
  },

  {
    iata: 'ENI',
    icao: 'PKEN',
    chinese: '埃尼韦托克机场',
    english: 'Enewetak Airport',
    city: '埃尼韦托克',
    province: '埃尼韦托克',
    country: '马绍尔群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MHT',
    coordinates: { lat: 11.3403, lng: 162.3306 },
    runways: 1,
    priority: 78, // ☢️ 核试验历史遗址
    cargo: false
  },

  // ================================================================
  // 📍 密克罗尼西亚联邦 - 太平洋群岛联邦
  // ================================================================

  {
    iata: 'PNI',
    icao: 'PTPN',
    chinese: '波纳佩国际机场',
    english: 'Pohnpei International Airport',
    city: '帕利基尔',
    province: '波纳佩',
    country: '密克罗尼西亚联邦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PONT',
    coordinates: { lat: 6.9850, lng: 158.2086 },
    runways: 1,
    priority: 90, // 🏛️ 密克罗尼西亚首都，太平洋群岛联邦
    hub: ['Caroline Islands Air'],
    cargo: true
  },

  {
    iata: 'TKK',
    icao: 'PTTK',
    chinese: '楚克国际机场',
    english: 'Chuuk International Airport',
    city: '韦诺',
    province: '楚克',
    country: '密克罗尼西亚联邦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CHUT',
    coordinates: { lat: 7.4617, lng: 151.8428 },
    runways: 1,
    priority: 88, // 🌊 楚克泻湖，世界著名潜水地
    cargo: false
  },

  {
    iata: 'YAP',
    icao: 'PTYA',
    chinese: '雅浦国际机场',
    english: 'Yap International Airport',
    city: '科洛尼亚',
    province: '雅浦',
    country: '密克罗尼西亚联邦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'YAPT',
    coordinates: { lat: 9.4992, lng: 138.0825 },
    runways: 1,
    priority: 86, // 🗿 石币文化，传统密克罗尼西亚
    cargo: false
  },

  {
    iata: 'KSA',
    icao: 'PTKS',
    chinese: '科斯拉伊机场',
    english: 'Kosrae Airport',
    city: '托福尔',
    province: '科斯拉伊',
    country: '密克罗尼西亚联邦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'KOST',
    coordinates: { lat: 5.3569, lng: 162.9583 },
    runways: 1,
    priority: 82, // 🌺 太平洋花园岛
    cargo: false
  },

  // ================================================================
  // 📍 帕劳 - 潜水天堂
  // ================================================================

  {
    iata: 'ROR',
    icao: 'PTRO',
    chinese: '罗曼·莫图国际机场',
    english: 'Roman Tmetuchl International Airport',
    city: '恩格鲁穆德',
    province: '艾拉伊',
    country: '帕劳',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PWT',
    coordinates: { lat: 7.3672, lng: 134.5439 },
    runways: 1,
    priority: 94, // 🏛️ 帕劳首都，世界顶级潜水天堂
    hub: ['Belau Air'],
    cargo: true
  },

  {
    iata: 'PWB',
    icao: 'PTPW',
    chinese: '安格奥尔机场',
    english: 'Angaur Airport',
    city: '安格奥尔',
    province: '安格奥尔',
    country: '帕劳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PWT',
    coordinates: { lat: 6.9069, lng: 134.1450 },
    runways: 1,
    priority: 75, // 🌊 南部群岛
    cargo: false
  },

  // ================================================================
  // 📍 美属萨摩亚 - 美国领土
  // ================================================================

  {
    iata: 'PPG',
    icao: 'NSTU',
    chinese: '帕果帕果国际机场',
    english: 'Pago Pago International Airport',
    city: '帕果帕果',
    province: '东区',
    country: '美属萨摩亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SST',
    coordinates: { lat: -14.3306, lng: -170.7106 },
    runways: 1,
    priority: 90, // 🏛️ 美属萨摩亚首府，太平洋美军基地
    hub: ['Polynesian Airlines'],
    cargo: true
  },

  // ================================================================
  // 📍 关岛 - 太平洋战略枢纽（补充）
  // ================================================================

  {
    iata: 'UAM',
    icao: 'PGUA',
    chinese: '安德森空军基地',
    english: 'Andersen Air Force Base',
    city: '雅加',
    province: '雅加',
    country: '关岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ChST',
    coordinates: { lat: 13.5839, lng: 144.9306 },
    runways: 2,
    priority: 88, // ✈️ 美军太平洋战略基地
    cargo: true
  },

  // ================================================================
  // 📍 北马里亚纳群岛 - 太平洋度假胜地（补充）
  // ================================================================

  {
    iata: 'TNI',
    icao: 'PGWT',
    chinese: '天宁岛机场',
    english: 'West Tinian Airport',
    city: '圣何塞',
    province: '天宁岛',
    country: '北马里亚纳群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ChST',
    coordinates: { lat: 14.9992, lng: 145.6194 },
    runways: 1,
    priority: 82, // 🌊 天宁岛度假胜地
    cargo: false
  },

  {
    iata: 'ROP',
    icao: 'PGRO',
    chinese: '罗塔机场',
    english: 'Rota Airport',
    city: '松松',
    province: '罗塔',
    country: '北马里亚纳群岛',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ChST',
    coordinates: { lat: 14.1742, lng: 145.2431 },
    runways: 1,
    priority: 80, // 🌺 罗塔岛自然保护区
    cargo: false
  }

];

// 导出统计信息
export const oceaniaOtherAirportStats = {
  totalAirports: oceaniaOtherEnhancedAirports.length,
  internationalAirports: oceaniaOtherEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: oceaniaOtherEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: oceaniaOtherEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(oceaniaOtherEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(oceaniaOtherEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: oceaniaOtherEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '大洋洲其他岛国完整覆盖',
  specialFeatures: [
    '🏛️ 法里奥洛国际机场 - 萨摩亚首都，波利尼西亚心脏',
    '🏛️ 拉罗汤加国际机场 - 库克群岛首都，南太平洋度假天堂',
    '🏝️ 艾图塔基机场 - 世界最美泻湖，度假胜地',
    '🏛️ 纽埃国际机场 - 纽埃首都，珊瑚岛国',
    '🏛️ 塔拉瓦国际机场 - 基里巴斯首都，跨越四个半球',
    '🌊 卡西迪岛机场 - 圣诞岛，世界最大环礁',
    '🏛️ 瑙鲁国际机场 - 瑙鲁首都，世界最小岛国',
    '🏛️ 马朱罗国际机场 - 马绍尔群岛首都，太平洋战略要地',
    '✈️ 夸贾林环礁机场 - 美军导弹试验基地',
    '🏛️ 波纳佩国际机场 - 密克罗尼西亚首都，太平洋群岛联邦',
    '🌊 楚克国际机场 - 楚克泻湖，世界著名潜水地',
    '🗿 雅浦国际机场 - 石币文化，传统密克罗尼西亚',
    '🏛️ 罗曼·莫图国际机场 - 帕劳首都，世界顶级潜水天堂',
    '🏛️ 帕果帕果国际机场 - 美属萨摩亚首府，太平洋美军基地'
  ]
};
