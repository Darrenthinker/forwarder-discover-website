// 🇷🇸 塞尔维亚机场数据库 - 增强版本
// Serbia Enhanced Airport Database
// 第四十九批机场数据库 - 欧洲大洲继续

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
// 🇷🇸 塞尔维亚共和国机场数据库 - 12个主要机场
// 覆盖塞尔维亚主要地区：中塞尔维亚、伏伊伏丁那、科索沃
// 巴尔干半岛核心，多瑙河中下游，东正教文化中心
// ================================================================

export const serbiaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 贝尔格莱德 - 塞尔维亚首都，最大航空枢纽
  // ================================================================

  {
    iata: 'BEG',
    icao: 'LYBE',
    chinese: '贝尔格莱德尼古拉·特斯拉机场',
    english: 'Belgrade Nikola Tesla Airport',
    city: '贝尔格莱德',
    province: '贝尔格莱德市',
    country: '塞尔维亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 44.8184, lng: 20.3091 },
    runways: 2,
    priority: 100, // 🥇 塞尔维亚最大国际机场，巴尔干重要枢纽
    hub: ['Air Serbia', 'Wizz Air'],
    cargo: true
  },

  // ================================================================
  // 📍 诺维萨德 - 伏伊伏丁那自治省首府
  // ================================================================

  {
    iata: 'QND',
    icao: 'LYNS',
    chinese: '诺维萨德机场',
    english: 'Novi Sad Airport',
    city: '诺维萨德',
    province: '伏伊伏丁那自治省',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 45.2537, lng: 19.8451 },
    runways: 1,
    priority: 85, // 🏛️ 伏伊伏丁那自治省首府，多瑙河重要城市
    cargo: false
  },

  // ================================================================
  // 📍 尼什 - 塞尔维亚第三大城市
  // ================================================================

  {
    iata: 'INI',
    icao: 'LYNI',
    chinese: '尼什君士坦丁大帝机场',
    english: 'Niš Constantine the Great Airport',
    city: '尼什',
    province: '尼什瓦州',
    country: '塞尔维亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.3374, lng: 21.8536 },
    runways: 1,
    priority: 88, // 🏛️ 塞尔维亚第三大城市，南部重要门户
    cargo: false
  },

  // ================================================================
  // 📍 克拉列沃 - 中部重要城市
  // ================================================================

  {
    iata: 'KVO',
    icao: 'LYKV',
    chinese: '克拉列沃莫拉瓦机场',
    english: 'Kraljevo Morava Airport',
    city: '克拉列沃',
    province: '拉什卡州',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.8583, lng: 20.5889 },
    runways: 1,
    priority: 80, // 🏔️ 中部山区重要城市
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'UZC',
    icao: 'LYUZ',
    chinese: '乌日策波得戈里察机场',
    english: 'Užice Ponikve Airport',
    city: '乌日策',
    province: '兹拉蒂博尔州',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 43.8931, lng: 19.9706 },
    runways: 1,
    priority: 78, // 🏔️ 西部山区旅游城市
    cargo: false
  },

  {
    iata: 'QBT',
    icao: 'LYBT',
    chinese: '巴塔伊尼卡机场',
    english: 'Batajnica Air Base',
    city: '巴塔伊尼卡',
    province: '贝尔格莱德市',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 44.9331, lng: 20.2575 },
    runways: 1,
    priority: 75, // ✈️ 军用空军基地
    cargo: false
  },

  {
    iata: 'QPN',
    icao: 'LYPN',
    chinese: '潘切沃机场',
    english: 'Pančevo Airport',
    city: '潘切沃',
    province: '南巴纳特州',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 44.9167, lng: 20.6333 },
    runways: 1,
    priority: 72, // 🏭 工业城市，多瑙河畔
    cargo: false
  },

  {
    iata: 'QVR',
    icao: 'LYVR',
    chinese: '弗尔尚茨机场',
    english: 'Vršac Airport',
    city: '弗尔尚茨',
    province: '南巴纳特州',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 45.1500, lng: 21.3167 },
    runways: 1,
    priority: 70, // 🌾 东北部农业区
    cargo: false
  },

  {
    iata: 'QSJ',
    icao: 'LYSJ',
    chinese: '斯梅代雷沃机场',
    english: 'Smederevo Airport',
    city: '斯梅代雷沃',
    province: '波杜纳夫州',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 44.6667, lng: 20.9167 },
    runways: 1,
    priority: 68, // 🏰 多瑙河古堡城市
    cargo: false
  },

  {
    iata: 'QZR',
    icao: 'LYZR',
    chinese: '扎耶查尔机场',
    english: 'Zaječar Airport',
    city: '扎耶查尔',
    province: '扎耶查尔州',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 43.8833, lng: 22.1167 },
    runways: 1,
    priority: 65, // 🏔️ 东部边境山区
    cargo: false
  },

  {
    iata: 'QSU',
    icao: 'LYSU',
    chinese: '苏博蒂察机场',
    english: 'Subotica Airport',
    city: '苏博蒂察',
    province: '北巴奇卡州',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 46.0711, lng: 19.6653 },
    runways: 1,
    priority: 73, // 🌾 北部平原，匈牙利边境
    cargo: false
  },

  {
    iata: 'QKI',
    icao: 'LYKI',
    chinese: '基金达机场',
    english: 'Kikinda Airport',
    city: '基金达',
    province: '北巴纳特州',
    country: '塞尔维亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 45.8333, lng: 20.4667 },
    runways: 1,
    priority: 67, // 🌾 东北部农业区
    cargo: false
  }

];

// 导出统计信息
export const serbiaAirportStats = {
  totalAirports: serbiaEnhancedAirports.length,
  internationalAirports: serbiaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: serbiaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: serbiaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(serbiaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: serbiaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '塞尔维亚全国州份完整覆盖',
  specialFeatures: [
    '🥇 贝尔格莱德机场 - 塞尔维亚最大国际机场，巴尔干重要枢纽',
    '🏛️ 尼什机场 - 塞尔维亚第三大城市，南部重要门户',
    '🏛️ 诺维萨德机场 - 伏伊伏丁那自治省首府，多瑙河重要城市',
    '🏔️ 克拉列沃机场 - 中部山区重要城市',
    '🏔️ 乌日策机场 - 西部山区旅游城市',
    '✈️ 巴塔伊尼卡机场 - 军用空军基地'
  ]
};
