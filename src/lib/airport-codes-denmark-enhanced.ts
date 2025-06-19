// 🇩🇰 丹麦机场数据库 - 增强版本
// Denmark Enhanced Airport Database
// 第三十批机场数据库 - 欧洲大洲继续

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
// 🇩🇰 丹麦王国机场数据库 - 8个主要机场
// 覆盖丹麦主要地区：日德兰半岛、西兰岛、菲英岛、博恩霍尔姆岛
// 北欧重要航空枢纽，连接欧洲与斯堪的纳维亚的门户
// ================================================================

export const denmarkEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 哥本哈根 - 丹麦首都，北欧最大航空枢纽
  // ================================================================

  {
    iata: 'CPH',
    icao: 'EKCH',
    chinese: '哥本哈根凯斯楚普机场',
    english: 'Copenhagen Kastrup Airport',
    city: '哥本哈根',
    province: '首都大区',
    country: '丹麦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 55.6180, lng: 12.6561 },
    runways: 3,
    priority: 100, // 🥇 北欧最大航空枢纽，斯堪的纳维亚门户
    hub: ['北欧航空', 'Danish Air Transport'],
    cargo: true
  },

  // ================================================================
  // 📍 比隆 - 乐高之乡，日德兰半岛
  // ================================================================

  {
    iata: 'BLL',
    icao: 'EKBI',
    chinese: '比隆机场',
    english: 'Billund Airport',
    city: '比隆',
    province: '南丹麦大区',
    country: '丹麦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 55.7403, lng: 9.1522 },
    runways: 1,
    priority: 92, // 🧱 乐高总部机场，国际旅游门户
    cargo: true
  },

  // ================================================================
  // 📍 奥尔堡 - 北日德兰重要城市
  // ================================================================

  {
    iata: 'AAL',
    icao: 'EKYT',
    chinese: '奥尔堡机场',
    english: 'Aalborg Airport',
    city: '奥尔堡',
    province: '北日德兰大区',
    country: '丹麦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 57.0928, lng: 9.8492 },
    runways: 1,
    priority: 88, // 🏭 北日德兰工业中心
    cargo: false
  },

  // ================================================================
  // 📍 奥胡斯 - 丹麦第二大城市
  // ================================================================

  {
    iata: 'AAR',
    icao: 'EKAH',
    chinese: '奥胡斯机场',
    english: 'Aarhus Airport',
    city: '奥胡斯',
    province: '中日德兰大区',
    country: '丹麦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 56.3000, lng: 10.6190 },
    runways: 1,
    priority: 85, // 🏛️ 丹麦第二大城市，文化教育中心
    cargo: false
  },

  // ================================================================
  // 📍 埃斯比约 - 西海岸重要港口
  // ================================================================

  {
    iata: 'EBJ',
    icao: 'ESDF',
    chinese: '埃斯比约机场',
    english: 'Esbjerg Airport',
    city: '埃斯比约',
    province: '南丹麦大区',
    country: '丹麦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 55.5258, lng: 8.5539 },
    runways: 1,
    priority: 80, // 🚢 西海岸重要港口城市
    cargo: false
  },

  // ================================================================
  // 📍 欧登塞 - 菲英岛，安徒生故乡
  // ================================================================

  {
    iata: 'ODE',
    icao: 'EKOD',
    chinese: '欧登塞机场',
    english: 'Odense Airport',
    city: '欧登塞',
    province: '南丹麦大区',
    country: '丹麦',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 55.4764, lng: 10.3311 },
    runways: 1,
    priority: 78, // 📚 安徒生故乡，菲英岛中心
    cargo: false
  },

  // ================================================================
  // 📍 卡鲁普 - 西兰岛西部
  // ================================================================

  {
    iata: 'KRP',
    icao: 'EKKL',
    chinese: '卡鲁普机场',
    english: 'Karup Airport',
    city: '卡鲁普',
    province: '中日德兰大区',
    country: '丹麦',
    isInternational: false,
    hasCustoms: false,
    timezone: 'CET',
    coordinates: { lat: 56.2975, lng: 9.1244 },
    runways: 1,
    priority: 75, // ✈️ 区域性航空训练基地
    cargo: false
  },

  // ================================================================
  // 📍 罗恩 - 博恩霍尔姆岛
  // ================================================================

  {
    iata: 'RNN',
    icao: 'EKRN',
    chinese: '博恩霍尔姆机场',
    english: 'Bornholm Airport',
    city: '罗恩',
    province: '首都大区',
    country: '丹麦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CET',
    coordinates: { lat: 55.0633, lng: 14.7597 },
    runways: 1,
    priority: 72, // 🏝️ 波罗的海岛屿门户
    cargo: false
  }

];

// 导出统计信息
export const denmarkAirportStats = {
  totalAirports: denmarkEnhancedAirports.length,
  internationalAirports: denmarkEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: denmarkEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: denmarkEnhancedAirports.filter(apt => apt.cargo).length,
  regions: [...new Set(denmarkEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: denmarkEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '丹麦主要地区完整覆盖',
  specialFeatures: [
    '🥇 哥本哈根机场 - 北欧最大航空枢纽，斯堪的纳维亚门户',
    '🧱 比隆机场 - 乐高总部机场，国际旅游门户',
    '🏭 奥尔堡机场 - 北日德兰工业中心',
    '🏛️ 奥胡斯机场 - 丹麦第二大城市，文化教育中心',
    '📚 欧登塞机场 - 安徒生故乡，菲英岛中心',
    '🏝️ 博恩霍尔姆机场 - 波罗的海岛屿门户'
  ]
};
