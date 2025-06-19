// 西班牙增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：西班牙民航管理局官方数据 + IATA官方数据库 + 维基百科

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇪🇸 西班牙 SPAIN - 25个主要机场（按重要性排序）
// ================================================================

export const spainAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'MAD': {
    chinese: '马德里巴拉哈斯',
    english: 'Adolfo Suárez Madrid-Barajas Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 100
  },

  'BCN': {
    chinese: '巴塞罗那埃尔普拉特',
    english: 'Josep Tarradellas Barcelona-El Prat Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 98
  },

  'PMI': {
    chinese: '帕尔马马略卡',
    english: 'Palma de Mallorca Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 96
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'AGP': {
    chinese: '马拉加太阳海岸',
    english: 'Málaga-Costa del Sol Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 94
  },

  'VLC': {
    chinese: '瓦伦西亚',
    english: 'Valencia Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 92
  },

  'SVQ': {
    chinese: '塞维利亚',
    english: 'Seville Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 90
  },

  'BIO': {
    chinese: '毕尔巴鄂',
    english: 'Bilbao Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 88
  },

  'ALC': {
    chinese: '阿利坎特埃尔切',
    english: 'Alicante-Elche Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 86
  },

  'TFS': {
    chinese: '特内里费南部',
    english: 'Tenerife South Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'LPA': {
    chinese: '拉斯帕尔马斯大加那利',
    english: 'Las Palmas de Gran Canaria Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 84
  },

  'SCQ': {
    chinese: '圣地亚哥德孔波斯特拉',
    english: 'Santiago de Compostela Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 83
  },

  'IBZ': {
    chinese: '伊比沙岛',
    english: 'Ibiza Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 82
  },

  'GRO': {
    chinese: '赫罗纳布拉瓦海岸',
    english: 'Girona-Costa Brava Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 81
  },

  'OVD': {
    chinese: '阿斯图里亚斯',
    english: 'Asturias Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 80
  },

  'REU': {
    chinese: '雷乌斯',
    english: 'Reus Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 79
  },

  'VGO': {
    chinese: '维戈',
    english: 'Vigo Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 78
  },

  'MAH': {
    chinese: '梅诺卡岛',
    english: 'Menorca Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 77
  },

  'XRY': {
    chinese: '赫雷斯德拉弗龙特拉',
    english: 'Jerez Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 76
  },

  'GRX': {
    chinese: '格拉纳达',
    english: 'Granada Airport',
    country: '西班牙',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：地区性机场 (Priority: 65-74)
  // ================================================================

  'LCG': {
    chinese: '拉科鲁尼亚',
    english: 'A Coruña Airport',
    country: '西班牙',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'SDR': {
    chinese: '桑坦德',
    english: 'Santander Airport',
    country: '西班牙',
    type: 'domestic',
    customs: false,
    priority: 73
  },

  'PNA': {
    chinese: '潘普洛纳',
    english: 'Pamplona Airport',
    country: '西班牙',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'VLL': {
    chinese: '巴利亚多利德',
    english: 'Valladolid Airport',
    country: '西班牙',
    type: 'domestic',
    customs: false,
    priority: 71
  },

  'LEI': {
    chinese: '阿尔梅里亚',
    english: 'Almería Airport',
    country: '西班牙',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'EAS': {
    chinese: '圣塞瓦斯蒂安',
    english: 'San Sebastián Airport',
    country: '西班牙',
    type: 'domestic',
    customs: false,
    priority: 69
  }

};

// 导出机场数量统计
export const SPAIN_AIRPORT_STATS = {
  total: 25,
  international: 19,
  domestic: 6,
  regional: 0,
  withCustoms: 19,
  topTier: 3,       // Priority 95+
  secondTier: 6,    // Priority 85-94
  thirdTier: 10,    // Priority 75-84
  fourthTier: 6     // Priority 65-74
};

export default spainAirportsEnhanced;
