// 🇮🇹 意大利南部机场数据库 - 增强版本
// Southern Italy Enhanced Airport Database
// 第六十一批机场数据库 - 地中海南岸扩展开始

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
// 🇮🇹 意大利南部机场数据库 - 18个主要机场
// 覆盖地中海南岸重要地区：西西里岛、撒丁岛、那不勒斯、普利亚等
// 地中海度假天堂，古罗马文明遗址，欧洲阳光海岸
// ================================================================

export const italySouthEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 西西里岛 - 地中海最大岛屿
  // ================================================================

  {
    iata: 'CTA',
    icao: 'LICC',
    chinese: '卡塔尼亚丰塔纳罗萨机场',
    english: 'Catania-Fontanarossa Airport',
    city: '卡塔尼亚',
    province: '西西里大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 37.4676, lng: 15.0664 },
    runways: 1,
    priority: 100, // 🥇 西西里岛最大机场，埃特纳火山门户
    hub: ['Alitalia', 'Volotea'],
    cargo: true
  },

  {
    iata: 'PMO',
    icao: 'LICJ',
    chinese: '巴勒莫法尔科内博尔塞利诺机场',
    english: 'Palermo Airport',
    city: '巴勒莫',
    province: '西西里大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 38.1759, lng: 13.0910 },
    runways: 1,
    priority: 98, // 🏛️ 西西里首府，诺曼底文化中心
    cargo: true
  },

  {
    iata: 'TPS',
    icao: 'LICT',
    chinese: '特拉帕尼比尔吉机场',
    english: 'Trapani-Birgi Airport',
    city: '特拉帕尼',
    province: '西西里大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 37.9114, lng: 12.4880 },
    runways: 1,
    priority: 88, // 🌊 西西里西端，地中海战略要地
    cargo: false
  },

  {
    iata: 'CMP',
    icao: 'LICB',
    chinese: '兰佩杜萨机场',
    english: 'Lampedusa Airport',
    city: '兰佩杜萨',
    province: '西西里大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 35.4986, lng: 12.6181 },
    runways: 1,
    priority: 85, // 🏝️ 意大利最南端岛屿，非洲门户
    cargo: false
  },

  // ================================================================
  // 📍 撒丁岛 - 地中海翡翠海岸
  // ================================================================

  {
    iata: 'CAG',
    icao: 'LIEE',
    chinese: '卡利亚里埃尔马斯机场',
    english: 'Cagliari Elmas Airport',
    city: '卡利亚里',
    province: '撒丁大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 39.2515, lng: 9.0543 },
    runways: 1,
    priority: 96, // 🏛️ 撒丁岛首府，古罗马遗址
    cargo: true
  },

  {
    iata: 'OLB',
    icao: 'LIEO',
    chinese: '奥尔比亚翡翠海岸机场',
    english: 'Olbia Costa Smeralda Airport',
    city: '奥尔比亚',
    province: '撒丁大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 40.8987, lng: 9.5176 },
    runways: 1,
    priority: 92, // 💎 翡翠海岸度假胜地，豪华旅游门户
    cargo: false
  },

  {
    iata: 'AHO',
    icao: 'LIEA',
    chinese: '阿尔盖罗费蒂利亚机场',
    english: 'Alghero-Fertilia Airport',
    city: '阿尔盖罗',
    province: '撒丁大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 40.6322, lng: 8.2908 },
    runways: 1,
    priority: 90, // 🌊 撒丁岛西北海岸，珊瑚之城
    cargo: false
  },

  // ================================================================
  // 📍 坎帕尼亚大区 - 那不勒斯湾
  // ================================================================

  {
    iata: 'NAP',
    icao: 'LIRN',
    chinese: '那不勒斯国际机场',
    english: 'Naples International Airport',
    city: '那不勒斯',
    province: '坎帕尼亚大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 40.8860, lng: 14.2908 },
    runways: 1,
    priority: 95, // 🌋 维苏威火山，庞贝古城门户
    cargo: true
  },

  {
    iata: 'QSR',
    icao: 'LIRQ',
    chinese: '卡普里岛直升机场',
    english: 'Capri Heliport',
    city: '卡普里',
    province: '坎帕尼亚大区',
    country: '意大利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 40.5514, lng: 14.2233 },
    runways: 1,
    priority: 83, // 💎 蓝洞奇观，地中海豪华岛屿
    cargo: false
  },

  // ================================================================
  // 📍 普利亚大区 - 意大利脚跟
  // ================================================================

  {
    iata: 'BRI',
    icao: 'LIBD',
    chinese: '巴里国际机场',
    english: 'Bari Karol Wojtyła Airport',
    city: '巴里',
    province: '普利亚大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 41.1389, lng: 16.7606 },
    runways: 1,
    priority: 94, // ⛪ 圣尼古拉朝圣地，亚得里亚海门户
    cargo: true
  },

  {
    iata: 'BDS',
    icao: 'LIBR',
    chinese: '布林迪西萨伦托机场',
    english: 'Brindisi Airport',
    city: '布林迪西',
    province: '普利亚大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 40.6576, lng: 17.9470 },
    runways: 1,
    priority: 87, // 🌊 萨伦托半岛，亚得里亚海与爱奥尼亚海交汇
    cargo: false
  },

  // ================================================================
  // 📍 卡拉布里亚大区 - 意大利脚尖
  // ================================================================

  {
    iata: 'REG',
    icao: 'LICR',
    chinese: '雷焦卡拉布里亚机场',
    english: 'Reggio Calabria Airport',
    city: '雷焦卡拉布里亚',
    province: '卡拉布里亚大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 38.0717, lng: 15.6516 },
    runways: 1,
    priority: 86, // 🌊 意大利脚尖，墨西拿海峡门户
    cargo: false
  },

  {
    iata: 'CRV',
    icao: 'LIBS',
    chinese: '克罗托内机场',
    english: 'Crotone Airport',
    city: '克罗托内',
    province: '卡拉布里亚大区',
    country: '意大利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 38.9972, lng: 17.0803 },
    runways: 1,
    priority: 78, // 🏛️ 古希腊殖民地，爱奥尼亚海岸
    cargo: false
  },

  // ================================================================
  // 📍 巴西利卡塔大区
  // ================================================================

  {
    iata: 'BZE',
    icao: 'LIBZ',
    chinese: '巴西利卡塔机场',
    english: 'Basilicata Airport',
    city: '马泰拉',
    province: '巴西利卡塔大区',
    country: '意大利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 40.6094, lng: 16.7764 },
    runways: 1,
    priority: 80, // 🏛️ 马泰拉石窟城，欧洲文化之都
    cargo: false
  },

  // ================================================================
  // 📍 阿布鲁佐大区
  // ================================================================

  {
    iata: 'PSR',
    icao: 'LIBP',
    chinese: '佩斯卡拉机场',
    english: 'Pescara Airport',
    city: '佩斯卡拉',
    province: '阿布鲁佐大区',
    country: '意大利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 42.4317, lng: 14.1811 },
    runways: 1,
    priority: 84, // 🌊 亚得里亚海海滨度假城市
    cargo: false
  },

  // ================================================================
  // 📍 其他重要机场
  // ================================================================

  {
    iata: 'LMP',
    icao: 'LICP',
    chinese: '佩拉杰群岛机场',
    english: 'Pelagie Islands Airport',
    city: '佩拉杰群岛',
    province: '西西里大区',
    country: '意大利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 35.6867, lng: 12.6061 },
    runways: 1,
    priority: 75, // 🏝️ 地中海南部群岛
    cargo: false
  },

  {
    iata: 'TAR',
    icao: 'LIBG',
    chinese: '塔兰托机场',
    english: 'Taranto-Grottaglie Airport',
    city: '塔兰托',
    province: '普利亚大区',
    country: '意大利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 40.5178, lng: 17.4033 },
    runways: 1,
    priority: 82, // ⚓ 重要海军基地，塔兰托大海战历史
    cargo: false
  },

  {
    iata: 'FOG',
    icao: 'LIBF',
    chinese: '福贾机场',
    english: 'Foggia Airport',
    city: '福贾',
    province: '普利亚大区',
    country: '意大利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 41.4331, lng: 15.5450 },
    runways: 1,
    priority: 76, // 🌾 普利亚平原农业中心
    cargo: false
  }

];

// 导出统计信息
export const italySouthAirportStats = {
  totalAirports: italySouthEnhancedAirports.length,
  internationalAirports: italySouthEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: italySouthEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: italySouthEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(italySouthEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: italySouthEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '意大利南部地中海地区完整覆盖',
  specialFeatures: [
    '🥇 卡塔尼亚机场 - 西西里岛最大机场，埃特纳火山门户',
    '🏛️ 巴勒莫机场 - 西西里首府，诺曼底文化中心',
    '💎 奥尔比亚机场 - 撒丁岛翡翠海岸度假胜地',
    '🌋 那不勒斯机场 - 维苏威火山，庞贝古城门户',
    '⛪ 巴里机场 - 圣尼古拉朝圣地，亚得里亚海门户',
    '🏝️ 兰佩杜萨机场 - 意大利最南端岛屿，非洲门户',
    '💎 卡普里岛直升机场 - 蓝洞奇观，地中海豪华岛屿',
    '🏛️ 马泰拉机场 - 马泰拉石窟城，欧洲文化之都',
    '🌊 地中海度假天堂 - 西西里岛、撒丁岛完整航空网络',
    '🏛️ 古罗马文明遗址 - 庞贝、阿格里真托等世界文化遗产门户'
  ]
};
