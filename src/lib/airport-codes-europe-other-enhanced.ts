// 🇪🇺 欧洲其他重要国家机场数据库 - 增强版本
// Europe Other Important Countries Enhanced Airport Database
// 第八十二批机场数据库 - 欧洲航空网络完善

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
// 🇪🇺 欧洲其他重要国家机场数据库 - 18个主要机场
// 覆盖白俄罗斯、摩尔多瓦、马耳他、塞浦路斯
// 欧洲航空网络完善，连接东欧、地中海、东地中海的重要航空走廊
// ================================================================

export const europeOtherEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 白俄罗斯 - 东欧门户
  // ================================================================

  {
    iata: 'MSQ',
    icao: 'UMMS',
    chinese: '明斯克国际机场',
    english: 'Minsk National Airport',
    city: '明斯克',
    province: '明斯克州',
    country: '白俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 53.8825, lng: 28.0307 },
    runways: 2,
    priority: 100, // 🥇 白俄罗斯首都，东欧重要枢纽
    hub: ['Belavia'],
    cargo: true
  },

  {
    iata: 'GME',
    icao: 'UMGG',
    chinese: '戈梅利机场',
    english: 'Gomel Airport',
    city: '戈梅利',
    province: '戈梅利州',
    country: '白俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 52.5270, lng: 31.0167 },
    runways: 1,
    priority: 85, // 🌊 第聂伯河重要港口
    cargo: false
  },

  {
    iata: 'VTB',
    icao: 'UMII',
    chinese: '维捷布斯克机场',
    english: 'Vitebsk Airport',
    city: '维捷布斯克',
    province: '维捷布斯克州',
    country: '白俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 55.1264, lng: 30.3506 },
    runways: 1,
    priority: 82, // 🏔️ 北部重要城市
    cargo: false
  },

  {
    iata: 'BQT',
    icao: 'UMBB',
    chinese: '布列斯特机场',
    english: 'Brest Airport',
    city: '布列斯特',
    province: '布列斯特州',
    country: '白俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 52.1083, lng: 23.8981 },
    runways: 1,
    priority: 88, // 🌍 欧盟边境重要城市
    cargo: true
  },

  {
    iata: 'GNA',
    icao: 'UMMG',
    chinese: '格罗德诺机场',
    english: 'Grodno Airport',
    city: '格罗德诺',
    province: '格罗德诺州',
    country: '白俄罗斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 53.6022, lng: 24.0539 },
    runways: 1,
    priority: 80, // 🏰 历史名城，立陶宛边境
    cargo: false
  },

  {
    iata: 'MVQ',
    icao: 'UMMM',
    chinese: '莫吉廖夫机场',
    english: 'Mogilev Airport',
    city: '莫吉廖夫',
    province: '莫吉廖夫州',
    country: '白俄罗斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MSK',
    coordinates: { lat: 53.9547, lng: 30.0975 },
    runways: 1,
    priority: 78, // 🌊 第聂伯河东岸重镇
    cargo: false
  },

  // ================================================================
  // 📍 摩尔多瓦 - 葡萄酒之国
  // ================================================================

  {
    iata: 'KIV',
    icao: 'LUKK',
    chinese: '基希讷乌国际机场',
    english: 'Chisinau International Airport',
    city: '基希讷乌',
    province: '基希讷乌',
    country: '摩尔多瓦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 46.9277, lng: 28.9311 },
    runways: 1,
    priority: 96, // 🏛️ 摩尔多瓦首都，葡萄酒之国门户
    hub: ['Air Moldova'],
    cargo: true
  },

  {
    iata: 'BZY',
    icao: 'LUBL',
    chinese: '巴尔季机场',
    english: 'Balti Airport',
    city: '巴尔季',
    province: '巴尔季',
    country: '摩尔多瓦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 47.8383, lng: 27.7814 },
    runways: 1,
    priority: 85, // 🏭 北部工业重镇
    cargo: false
  },

  {
    iata: 'CKC',
    icao: 'LUKC',
    chinese: '卡胡尔机场',
    english: 'Cahul Airport',
    city: '卡胡尔',
    province: '卡胡尔',
    country: '摩尔多瓦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 45.9139, lng: 28.2031 },
    runways: 1,
    priority: 78, // 🌊 多瑙河支流重要城市
    cargo: false
  },

  // ================================================================
  // 📍 马耳他 - 地中海心脏
  // ================================================================

  {
    iata: 'MLA',
    icao: 'LMML',
    chinese: '马耳他国际机场',
    english: 'Malta International Airport',
    city: '瓦莱塔',
    province: '南港',
    country: '马耳他',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 35.8575, lng: 14.4775 },
    runways: 1,
    priority: 98, // 🏛️ 马耳他首都，地中海心脏
    hub: ['Air Malta'],
    cargo: true
  },

  {
    iata: 'GSC',
    icao: 'LMGO',
    chinese: '戈佐机场',
    english: 'Gozo Airport',
    city: '维多利亚',
    province: '戈佐',
    country: '马耳他',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 36.0278, lng: 14.2722 },
    runways: 1,
    priority: 82, // 🏝️ 戈佐岛，蓝窗遗址
    cargo: false
  },

  // ================================================================
  // 📍 塞浦路斯 - 东地中海明珠
  // ================================================================

  {
    iata: 'LCA',
    icao: 'LCLK',
    chinese: '拉纳卡国际机场',
    english: 'Larnaca International Airport',
    city: '拉纳卡',
    province: '拉纳卡',
    country: '塞浦路斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 34.8751, lng: 33.6249 },
    runways: 1,
    priority: 94, // 🌊 塞浦路斯主要机场，东地中海明珠
    hub: ['Cyprus Airways'],
    cargo: true
  },

  {
    iata: 'PFO',
    icao: 'LCPH',
    chinese: '帕福斯国际机场',
    english: 'Paphos International Airport',
    city: '帕福斯',
    province: '帕福斯',
    country: '塞浦路斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 34.7180, lng: 32.4856 },
    runways: 1,
    priority: 90, // 🏺 阿芙罗狄忒诞生地，考古胜地
    cargo: false
  },

  {
    iata: 'NIC',
    icao: 'LCNC',
    chinese: '尼科西亚国际机场',
    english: 'Nicosia International Airport',
    city: '尼科西亚',
    province: '尼科西亚',
    country: '塞浦路斯',
    isInternational: false,
    hasCustoms: false,
    timezone: 'EET',
    coordinates: { lat: 35.1542, lng: 33.2747 },
    runways: 1,
    priority: 75, // 🏛️ 塞浦路斯首都（已关闭机场）
    cargo: false
  },

  {
    iata: 'ECN',
    icao: 'LCEN',
    chinese: '埃尔詹机场',
    english: 'Ercan Airport',
    city: '尼科西亚',
    province: '吉尔内',
    country: '塞浦路斯',
    isInternational: true,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.1547, lng: 33.4961 },
    runways: 1,
    priority: 86, // 🌍 北塞浦路斯主要机场
    cargo: false
  },

  {
    iata: 'GEC',
    icao: 'LCGK',
    chinese: '盖奇特科伊机场',
    english: 'Gecitkoy Airport',
    city: '吉尔内',
    province: '吉尔内',
    country: '塞浦路斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 35.2847, lng: 33.3756 },
    runways: 1,
    priority: 72, // ✈️ 北部小型机场
    cargo: false
  },

  {
    iata: 'AKT',
    icao: 'LCRA',
    chinese: '阿克罗蒂里皇家空军基地',
    english: 'RAF Akrotiri',
    city: '阿克罗蒂里',
    province: '利马索尔',
    country: '塞浦路斯',
    isInternational: false,
    hasCustoms: true,
    timezone: 'EET',
    coordinates: { lat: 34.5908, lng: 32.9878 },
    runways: 1,
    priority: 80, // ✈️ 英国皇家空军基地
    cargo: true
  }

];

// 导出统计信息
export const europeOtherAirportStats = {
  totalAirports: europeOtherEnhancedAirports.length,
  internationalAirports: europeOtherEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: europeOtherEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: europeOtherEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(europeOtherEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(europeOtherEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: europeOtherEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '欧洲其他重要四国完整覆盖',
  specialFeatures: [
    '🥇 明斯克国际机场 - 白俄罗斯首都，东欧重要枢纽',
    '🏛️ 基希讷乌国际机场 - 摩尔多瓦首都，葡萄酒之国门户',
    '🏛️ 马耳他国际机场 - 马耳他首都，地中海心脏',
    '🌊 拉纳卡国际机场 - 塞浦路斯主要机场，东地中海明珠',
    '🏺 帕福斯国际机场 - 阿芙罗狄忒诞生地，考古胜地',
    '🌍 布列斯特机场 - 欧盟边境重要城市',
    '🌊 戈梅利机场 - 第聂伯河重要港口',
    '🏭 巴尔季机场 - 摩尔多瓦北部工业重镇',
    '🏝️ 戈佐机场 - 戈佐岛，蓝窗遗址',
    '🌍 埃尔詹机场 - 北塞浦路斯主要机场'
  ]
};
