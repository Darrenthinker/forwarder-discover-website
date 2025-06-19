// 🌍 撒哈拉以南非洲机场数据库 - 增强版本
// Sub-Saharan Africa Enhanced Airport Database
// 第七十九批机场数据库 - 非洲大陆南部航空网络

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
// 🌍 撒哈拉以南非洲机场数据库 - 30个主要机场
// 覆盖肯尼亚、津巴布韦、博茨瓦纳、纳米比亚
// 非洲大陆南部航空网络，连接东南非洲的重要航空走廊
// ================================================================

export const subSaharanAfricaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 肯尼亚 - 东非门户
  // ================================================================

  {
    iata: 'NBO',
    icao: 'HKJK',
    chinese: '内罗毕乔莫·肯雅塔国际机场',
    english: 'Nairobi Jomo Kenyatta International Airport',
    city: '内罗毕',
    province: '内罗毕',
    country: '肯尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -1.3192, lng: 36.9278 },
    runways: 2,
    priority: 100, // 🥇 肯尼亚首都，东非最重要枢纽
    hub: ['Kenya Airways'],
    cargo: true
  },

  {
    iata: 'MBA',
    icao: 'HKMO',
    chinese: '蒙巴萨莫伊国际机场',
    english: 'Mombasa Moi International Airport',
    city: '蒙巴萨',
    province: '海岸',
    country: '肯尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -4.0348, lng: 39.5942 },
    runways: 1,
    priority: 92, // 🌊 印度洋海岸重要港口，度假胜地
    cargo: true
  },

  {
    iata: 'KIS',
    icao: 'HKKI',
    chinese: '基苏木机场',
    english: 'Kisumu Airport',
    city: '基苏木',
    province: '基苏木',
    country: '肯尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -0.0861, lng: 34.7289 },
    runways: 1,
    priority: 85, // 🌊 维多利亚湖重要港口
    cargo: false
  },

  {
    iata: 'EDL',
    icao: 'HKEL',
    chinese: '埃尔多雷特机场',
    english: 'Eldoret Airport',
    city: '埃尔多雷特',
    province: '乌阿辛吉舒',
    country: '肯尼亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 0.4044, lng: 35.2389 },
    runways: 1,
    priority: 82, // 🏔️ 高原城市，农业中心
    cargo: false
  },

  {
    iata: 'MYD',
    icao: 'HKMY',
    chinese: '马林迪机场',
    english: 'Malindi Airport',
    city: '马林迪',
    province: '基利菲',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: -3.2297, lng: 40.1019 },
    runways: 1,
    priority: 78, // 🌊 印度洋海岸度假城市
    cargo: false
  },

  {
    iata: 'UAS',
    icao: 'HKBB',
    chinese: '桑布鲁机场',
    english: 'Samburu Airport',
    city: '桑布鲁',
    province: '桑布鲁',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 0.5367, lng: 37.5342 },
    runways: 1,
    priority: 75, // 🦁 野生动物保护区
    cargo: false
  },

  {
    iata: 'LOK',
    icao: 'HKLO',
    chinese: '洛德瓦尔机场',
    english: 'Lodwar Airport',
    city: '洛德瓦尔',
    province: '图尔卡纳',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EAT',
    coordinates: { lat: 3.1219, lng: 35.6086 },
    runways: 1,
    priority: 72, // 🏜️ 北部半干旱地区
    cargo: false
  },

  {
    iata: 'WIL',
    icao: 'HKNW',
    chinese: '威尔逊机场',
    english: 'Wilson Airport',
    city: '内罗毕',
    province: '内罗毕',
    country: '肯尼亚',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EAT',
    coordinates: { lat: -1.3217, lng: 36.8147 },
    runways: 2,
    priority: 80, // ✈️ 内罗毕国内机场，野生动物观光
    cargo: false
  },

  // ================================================================
  // 📍 津巴布韦 - 南部非洲重镇
  // ================================================================

  {
    iata: 'HRE',
    icao: 'FVHA',
    chinese: '哈拉雷罗伯特·穆加贝国际机场',
    english: 'Harare Robert Mugabe International Airport',
    city: '哈拉雷',
    province: '哈拉雷',
    country: '津巴布韦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -17.9318, lng: 31.0928 },
    runways: 1,
    priority: 96, // 🏛️ 津巴布韦首都，南部非洲重镇
    hub: ['Air Zimbabwe'],
    cargo: true
  },

  {
    iata: 'VFA',
    icao: 'FVVF',
    chinese: '维多利亚瀑布机场',
    english: 'Victoria Falls Airport',
    city: '维多利亚瀑布城',
    province: '马塔贝莱兰北',
    country: '津巴布韦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -18.0959, lng: 25.8397 },
    runways: 1,
    priority: 94, // 🌊 世界七大自然奇观，著名瀑布
    cargo: false
  },

  {
    iata: 'BUQ',
    icao: 'FVBU',
    chinese: '布拉瓦约机场',
    english: 'Bulawayo Airport',
    city: '布拉瓦约',
    province: '马塔贝莱兰南',
    country: '津巴布韦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -20.0175, lng: 28.6178 },
    runways: 2,
    priority: 88, // 🏭 津巴布韦第二大城市，工业中心
    cargo: true
  },

  {
    iata: 'GWE',
    icao: 'FVGW',
    chinese: '圭鲁机场',
    english: 'Gweru Airport',
    city: '圭鲁',
    province: '中部',
    country: '津巴布韦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -19.4364, lng: 29.8619 },
    runways: 1,
    priority: 75, // 🏭 中部重要工业城市
    cargo: false
  },

  {
    iata: 'MVZ',
    icao: 'FVMV',
    chinese: '马斯温戈机场',
    english: 'Masvingo Airport',
    city: '马斯温戈',
    province: '马斯温戈',
    country: '津巴布韦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -20.0553, lng: 30.8592 },
    runways: 1,
    priority: 78, // 🏛️ 大津巴布韦遗址门户
    cargo: false
  },

  {
    iata: 'UTA',
    icao: 'FVUT',
    chinese: '穆塔雷机场',
    english: 'Mutare Airport',
    city: '穆塔雷',
    province: '马尼卡兰',
    country: '津巴布韦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -18.9975, lng: 32.6278 },
    runways: 1,
    priority: 76, // 🏔️ 东部山区重镇
    cargo: false
  },

  {
    iata: 'HWN',
    icao: 'FVHW',
    chinese: '万基机场',
    english: 'Hwange Airport',
    city: '万基',
    province: '马塔贝莱兰北',
    country: '津巴布韦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -18.6297, lng: 26.5197 },
    runways: 1,
    priority: 80, // 🦁 万基国家公园，野生动物观光
    cargo: false
  },

  // ================================================================
  // 📍 博茨瓦纳 - 钻石之都
  // ================================================================

  {
    iata: 'GBE',
    icao: 'FBSK',
    chinese: '哈博罗内塞雷茨·卡马国际机场',
    english: 'Gaborone Sir Seretse Khama International Airport',
    city: '哈博罗内',
    province: '东南',
    country: '博茨瓦纳',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -24.5552, lng: 25.9182 },
    runways: 1,
    priority: 95, // 🏛️ 博茨瓦纳首都，钻石之都
    hub: ['Air Botswana'],
    cargo: true
  },

  {
    iata: 'FRW',
    icao: 'FBFT',
    chinese: '弗朗西斯敦机场',
    english: 'Francistown Airport',
    city: '弗朗西斯敦',
    province: '东北',
    country: '博茨瓦纳',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -21.1597, lng: 27.4742 },
    runways: 1,
    priority: 85, // 🏭 第二大城市，采矿中心
    cargo: false
  },

  {
    iata: 'MUB',
    icao: 'FBMN',
    chinese: '马翁机场',
    english: 'Maun Airport',
    city: '马翁',
    province: '西北',
    country: '博茨瓦纳',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -19.9726, lng: 23.4311 },
    runways: 1,
    priority: 90, // 🦛 奥卡万戈三角洲门户，野生动物天堂
    cargo: false
  },

  {
    iata: 'KHW',
    icao: 'FBKE',
    chinese: '卡萨内机场',
    english: 'Kasane Airport',
    city: '卡萨内',
    province: '西北',
    country: '博茨瓦纳',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -17.8328, lng: 25.1628 },
    runways: 1,
    priority: 87, // 🐘 乔贝国家公园门户，大象天堂
    cargo: false
  },

  {
    iata: 'ORP',
    icao: 'FBOR',
    chinese: '奥拉帕机场',
    english: 'Orapa Airport',
    city: '奥拉帕',
    province: '中部',
    country: '博茨瓦纳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -21.2669, lng: 25.3167 },
    runways: 1,
    priority: 83, // 💎 世界最大钻石矿，钻石开采中心
    cargo: true
  },

  {
    iata: 'JWA',
    icao: 'FBJW',
    chinese: '朱瓦嫩机场',
    english: 'Jwaneng Airport',
    city: '朱瓦嫩',
    province: '南部',
    country: '博茨瓦纳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -24.6892, lng: 24.6989 },
    runways: 1,
    priority: 81, // 💎 重要钻石矿区
    cargo: true
  },

  {
    iata: 'LBT',
    icao: 'FBLO',
    chinese: '洛巴策机场',
    english: 'Lobatse Airport',
    city: '洛巴策',
    province: '东南',
    country: '博茨瓦纳',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -25.2272, lng: 25.6769 },
    runways: 1,
    priority: 73, // 🏭 南部工业重镇
    cargo: false
  },

  // ================================================================
  // 📍 纳米比亚 - 大西洋海岸明珠
  // ================================================================

  {
    iata: 'WDH',
    icao: 'FYWH',
    chinese: '温得和克霍齐亚·库塔科国际机场',
    english: 'Windhoek Hosea Kutako International Airport',
    city: '温得和克',
    province: '霍马斯',
    country: '纳米比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -22.4799, lng: 17.4709 },
    runways: 1,
    priority: 98, // 🏛️ 纳米比亚首都，大西洋海岸门户
    hub: ['Air Namibia'],
    cargo: true
  },

  {
    iata: 'WVB',
    icao: 'FYWE',
    chinese: '温得和克埃罗斯机场',
    english: 'Windhoek Eros Airport',
    city: '温得和克',
    province: '霍马斯',
    country: '纳米比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -22.6122, lng: 17.0806 },
    runways: 2,
    priority: 82, // ✈️ 温得和克市内机场，商务航空
    cargo: false
  },

  {
    iata: 'WIS',
    icao: 'FYWS',
    chinese: '鲸湾港机场',
    english: 'Walvis Bay Airport',
    city: '鲸湾港',
    province: '埃龙戈',
    country: '纳米比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -22.9799, lng: 14.6453 },
    runways: 1,
    priority: 88, // 🌊 大西洋海岸重要港口
    cargo: true
  },

  {
    iata: 'SWP',
    icao: 'FYSM',
    chinese: '斯瓦科普蒙德机场',
    english: 'Swakopmund Airport',
    city: '斯瓦科普蒙德',
    province: '埃龙戈',
    country: '纳米比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -22.6622, lng: 14.5681 },
    runways: 1,
    priority: 85, // 🌊 大西洋海岸度假城市
    cargo: false
  },

  {
    iata: 'LUD',
    icao: 'FYLU',
    chinese: '吕德里茨机场',
    english: 'Luderitz Airport',
    city: '吕德里茨',
    province: '卡拉斯',
    country: '纳米比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -26.6875, lng: 15.2428 },
    runways: 1,
    priority: 78, // 🌊 南大西洋海岸重要港口
    cargo: false
  },

  {
    iata: 'OKU',
    icao: 'FYOO',
    chinese: '奥卡汉贾机场',
    english: 'Okahandja Airport',
    city: '奥卡汉贾',
    province: '奥乔宗朱帕',
    country: '纳米比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -21.9889, lng: 16.9169 },
    runways: 1,
    priority: 75, // 🏭 中部重要城市
    cargo: false
  },

  {
    iata: 'TSB',
    icao: 'FYTS',
    chinese: '楚梅布机场',
    english: 'Tsumeb Airport',
    city: '楚梅布',
    province: '奥沙纳',
    country: '纳米比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -19.2611, lng: 17.7319 },
    runways: 1,
    priority: 76, // 🏭 北部采矿重镇
    cargo: false
  },

  {
    iata: 'GOG',
    icao: 'FYGO',
    chinese: '戈巴比斯机场',
    english: 'Gobabis Airport',
    city: '戈巴比斯',
    province: '奥马哈克',
    country: '纳米比亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CAT',
    coordinates: { lat: -22.5000, lng: 18.9583 },
    runways: 1,
    priority: 72, // 🏜️ 东部半干旱地区
    cargo: false
  }

];

// 导出统计信息
export const subSaharanAfricaAirportStats = {
  totalAirports: subSaharanAfricaEnhancedAirports.length,
  internationalAirports: subSaharanAfricaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: subSaharanAfricaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: subSaharanAfricaEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(subSaharanAfricaEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(subSaharanAfricaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: subSaharanAfricaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '撒哈拉以南非洲四国完整覆盖',
  specialFeatures: [
    '🥇 内罗毕乔莫·肯雅塔机场 - 肯尼亚首都，东非最重要枢纽',
    '🏛️ 哈拉雷罗伯特·穆加贝机场 - 津巴布韦首都，南部非洲重镇',
    '🏛️ 哈博罗内塞雷茨·卡马机场 - 博茨瓦纳首都，钻石之都',
    '🏛️ 温得和克霍齐亚·库塔科机场 - 纳米比亚首都，大西洋海岸门户',
    '🌊 维多利亚瀑布机场 - 世界七大自然奇观，著名瀑布',
    '🦛 马翁机场 - 奥卡万戈三角洲门户，野生动物天堂',
    '🐘 卡萨内机场 - 乔贝国家公园门户，大象天堂',
    '🦁 万基机场 - 万基国家公园，野生动物观光',
    '💎 奥拉帕机场 - 世界最大钻石矿，钻石开采中心',
    '🌊 鲸湾港机场 - 大西洋海岸重要港口'
  ]
};
