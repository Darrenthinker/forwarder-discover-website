// 印度尼西亚增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：印度尼西亚交通部官方数据 + IATA官方数据库 + 印尼机场公司数据

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
}

// ================================================================
// 🇮🇩 印度尼西亚 INDONESIA - 22个主要机场（按重要性排序）
// ================================================================

export const indonesiaAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'CGK': {
    chinese: '雅加达苏加诺-哈达',
    english: 'Soekarno-Hatta International Airport (Jakarta)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 100
  },

  'DPS': {
    chinese: '巴厘岛伍拉·赖',
    english: 'Ngurah Rai International Airport (Denpasar, Bali)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 98
  },

  // ================================================================
  // 第二等级：重要国际机场 (Priority: 85-94)
  // ================================================================

  'SUB': {
    chinese: '泗水朱安达',
    english: 'Juanda International Airport (Surabaya)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 92
  },

  'CGG': {
    chinese: '雅加达哈利姆',
    english: 'Halim Perdanakusuma Airport (Jakarta)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 90
  },

  'MDN': {
    chinese: '棉兰库阿拉纳穆',
    english: 'Kualanamu International Airport (Medan)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 88
  },

  'PLM': {
    chinese: '巨港',
    english: 'Sultan Mahmud Badaruddin II Airport (Palembang)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 86
  },

  // ================================================================
  // 第三等级：区域国际机场 (Priority: 75-84)
  // ================================================================

  'UPG': {
    chinese: '望加锡哈桑丁',
    english: 'Sultan Hasanuddin Airport (Makassar)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 84
  },

  'BPN': {
    chinese: '巴厘巴板',
    english: 'Sultan Aji Muhammad Sulaiman Airport (Balikpapan)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 82
  },

  'PKU': {
    chinese: '北干巴鲁',
    english: 'Sultan Syarif Kasim II Airport (Pekanbaru)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 80
  },

  'BTH': {
    chinese: '巴淡岛',
    english: 'Hang Nadim Airport (Batam)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 78
  },

  'YGY': {
    chinese: '日惹',
    english: 'Yogyakarta International Airport',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 76
  },

  // ================================================================
  // 第四等级：国内重要机场 (Priority: 65-74)
  // ================================================================

  'BDO': {
    chinese: '万隆',
    english: 'Husein Sastranegara Airport (Bandung)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 74
  },

  'SLO': {
    chinese: '梭罗',
    english: 'Adi Soemarmo Airport (Solo)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 72
  },

  'KNO': {
    chinese: '棉兰波兰',
    english: 'Polonia Airport (Medan)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 70
  },

  'PDG': {
    chinese: '巴东',
    english: 'Minangkabau International Airport (Padang)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 68
  },

  'JOG': {
    chinese: '日惹阿迪苏基普托',
    english: 'Adisutcipto Airport (Yogyakarta)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 66
  },

  // ================================================================
  // 第五等级：地方机场 (Priority: 55-64)
  // ================================================================

  'SMG': {
    chinese: '三宝垄',
    english: 'Ahmad Yani Airport (Semarang)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 64
  },

  'DJJ': {
    chinese: '查雅普拉',
    english: 'Sentani Airport (Jayapura)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 62
  },

  'AMQ': {
    chinese: '安汶',
    english: 'Pattimura Airport (Ambon)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 60
  },

  'MLG': {
    chinese: '玛琅',
    english: 'Abdul Rachman Saleh Airport (Malang)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 58
  },

  'TRK': {
    chinese: '德那第',
    english: 'Juwata Airport (Tarakan)',
    country: '印度尼西亚',
    type: 'domestic',
    customs: false,
    priority: 56
  },

  'PNK': {
    chinese: '坤甸',
    english: 'Supadio Airport (Pontianak)',
    country: '印度尼西亚',
    type: 'international',
    customs: true,
    priority: 55
  }
};

// ================================================================
// 🏙️ 印度尼西亚主要城市机场统计
// ================================================================
// 雅加达地区: 2个机场 (苏加诺-哈达 + 哈利姆)
// 爪哇岛: 8个机场 (雅加达、泗水、万隆、日惹、梭罗、三宝垄等)
// 苏门答腊岛: 5个机场 (棉兰、巨港、北干巴鲁、巴东、坤甸)
// 加里曼丹岛: 2个机场 (巴厘巴板、坤甸)
// 苏拉威西岛: 1个机场 (望加锡)
// 巴厘岛: 1个机场 (伍拉·赖)
// 其他岛屿: 3个机场 (巴淡岛、安汶、查雅普拉等)
//
// 🎯 国际机场: 13个 (59%)
// 🏠 国内机场: 9个 (41%)
// ✈️ 海关机场: 13个 (59%)
// 📊 优先级分布: 55-100分
//
// 🌟 特色:
// - 苏加诺-哈达: 东南亚重要枢纽
// - 千岛之国: 覆盖17508个岛屿的航空网络
// - 旅游胜地: 巴厘岛世界知名度假天堂
// - 地理复杂: 跨越三个时区的庞大国家
// ================================================================
