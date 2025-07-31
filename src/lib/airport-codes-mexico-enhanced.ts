// 墨西哥增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：墨西哥民航局官方数据 + IATA官方数据库 + 维基百科

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇲🇽 墨西哥 MEXICO - 20个主要机场（按重要性排序）
// ================================================================

export const mexicoAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'MEX': {
    chinese: '墨西哥城',
    english: 'Mexico City Benito Juarez International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 100
  },

  'CUN': {
    chinese: '坎昆',
    english: 'Cancun International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 98
  },

  'GDL': {
    chinese: '瓜达拉哈拉',
    english: 'Guadalajara Miguel Hidalgo y Costilla International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 96
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'MTY': {
    chinese: '蒙特雷',
    english: 'Monterrey International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 94
  },

  'TIJ': {
    chinese: '蒂华纳',
    english: 'Tijuana General Abelardo L. Rodríguez International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 92
  },

  'PVR': {
    chinese: '巴亚尔塔港',
    english: 'Puerto Vallarta Gustavo Díaz Ordaz International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 90
  },

  'SJD': {
    chinese: '洛斯卡波斯',
    english: 'Los Cabos International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 88
  },

  'MZT': {
    chinese: '马萨特兰',
    english: 'Mazatlán General Rafael Buelna International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 86
  },

  'MID': {
    chinese: '梅里达',
    english: 'Mérida Manuel Crescencio Rejón International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 85
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'VER': {
    chinese: '韦拉克鲁斯',
    english: 'Veracruz Heriberto Jara International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 84
  },

  'CZM': {
    chinese: '科苏梅尔',
    english: 'Cozumel International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 83
  },

  'ACA': {
    chinese: '阿卡普尔科',
    english: 'Acapulco General Juan N. Álvarez International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 82
  },

  'HUX': {
    chinese: '瓦哈卡',
    english: 'Huatulco Bahías de International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 81
  },

  'BJX': {
    chinese: '巴希奥',
    english: 'León/Bajío International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 80
  },

  'LAP': {
    chinese: '拉巴斯',
    english: 'La Paz Manuel Márquez de León International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 79
  },

  'ZIH': {
    chinese: '伊斯塔帕',
    english: 'Ixtapa-Zihuatanejo International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 78
  },

  'CLQ': {
    chinese: '科利马',
    english: 'Colima National',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 77
  },

  'QRO': {
    chinese: '克雷塔罗',
    english: 'Santiago de Querétaro International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 76
  },

  'AGU': {
    chinese: '阿瓜斯卡连特斯',
    english: 'Aguascalientes Jesús Terán Peredo International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 75
  },

  // ================================================================
  // 第四等级：新兴国际机场 (Priority: 65-74)
  // ================================================================

  'NLU': {
    chinese: '墨西哥城圣卢西亚',
    english: 'Felipe Ángeles International',
    country: '墨西哥',
    type: 'international',
    customs: true,
    priority: 74
  }

};

// 导出机场数量统计
export const MEXICO_AIRPORT_STATS = {
  total: 20,
  international: 20,
  domestic: 0,
  regional: 0,
  withCustoms: 20,
  topTier: 3,       // Priority 95+
  secondTier: 6,    // Priority 85-94
  thirdTier: 10,    // Priority 75-84
  fourthTier: 1     // Priority 65-74
};

export default mexicoAirportsEnhanced;
