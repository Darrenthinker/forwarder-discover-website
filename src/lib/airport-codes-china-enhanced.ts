// 中国增强机场数据库 - 包含国际/国内机场类型和海关信息
// 数据来源：中国民航局官方数据 + 一类/二类航空口岸信息 + 维基百科

export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
  continent: string;
}

// ================================================================
// 🇨🇳 中国 CHINA - 50个主要机场（按重要性和地区排序）
// ================================================================

export const chinaAirportsEnhanced: { [key: string]: AirportInfo } = {

  // ================================================================
  // 第一等级：超级枢纽国际机场 (Priority: 95-100)
  // ================================================================

  'PVG': {
    chinese: '上海浦东',
    english: 'Shanghai Pudong International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 100,
    continent: '亚洲'
  },

  'HKG': {
    chinese: '香港',
    english: 'Hong Kong International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 99,  // 亚洲货运之王
    continent: '亚洲'
  },

  'CAN': {
    chinese: '广州白云',
    english: 'Guangzhou Baiyun International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 98,
    continent: '亚洲'
  },

  'PEK': {
    chinese: '北京首都',
    english: 'Beijing Capital International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 97,
    continent: '亚洲'
  },

  'SZX': {
    chinese: '深圳宝安',
    english: 'Shenzhen Bao\'an International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 96,
    continent: '亚洲'
  },

  'PKX': {
    chinese: '北京大兴',
    english: 'Beijing Daxing International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 95,
    continent: '亚洲'
  },

  'TFU': {
    chinese: '成都天府',
    english: 'Chengdu Tianfu International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 94,
    continent: '亚洲'
  },

  // ================================================================
  // 第二等级：主要国际枢纽机场 (Priority: 85-94)
  // ================================================================

  'HGH': {
    chinese: '杭州萧山',
    english: 'Hangzhou Xiaoshan International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 94,
    continent: '亚洲'
  },

  'CTU': {
    chinese: '成都双流',
    english: 'Chengdu Shuangliu International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 93,
    continent: '亚洲'
  },

  'SHA': {
    chinese: '上海虹桥',
    english: 'Shanghai Hongqiao International',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 92,
    continent: '亚洲'
  },

  'KMG': {
    chinese: '昆明长水',
    english: 'Kunming Changshui International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 91,
    continent: '亚洲'
  },

  'XMN': {
    chinese: '厦门高崎',
    english: 'Xiamen Gaoqi International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 90,
    continent: '亚洲'
  },

  'NKG': {
    chinese: '南京禄口',
    english: 'Nanjing Lukou International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 89,
    continent: '亚洲'
  },

  'WUH': {
    chinese: '武汉天河',
    english: 'Wuhan Tianhe International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 88,
    continent: '亚洲'
  },

  'EHU': {
    chinese: '鄂州花湖',
    english: 'Ezhou Huahu International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 85, // 🚛 专业货运机场，顺丰全球航空枢纽
    continent: '亚洲'
  },

  'CGO': {
    chinese: '郑州新郑',
    english: 'Zhengzhou Xinzheng International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 87,
    continent: '亚洲'
  },

  'TSN': {
    chinese: '天津滨海',
    english: 'Tianjin Binhai International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 86,
    continent: '亚洲'
  },

  'CKG': {
    chinese: '重庆江北',
    english: 'Chongqing Jiangbei International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 85,
    continent: '亚洲'
  },

  // ================================================================
  // 第三等级：重要国际机场 (Priority: 75-84)
  // ================================================================

  'TAO': {
    chinese: '青岛胶东',
    english: 'Qingdao Jiaodong International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 84,
    continent: '亚洲'
  },

  'SJW': {
    chinese: '石家庄正定',
    english: 'Shijiazhuang Zhengding International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 83,
    continent: '亚洲'
  },

  'MFM': {
    chinese: '澳门',
    english: 'Macau International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 82,  // 重要的国际机场
    continent: '亚洲'
  },

  'CSX': {
    chinese: '长沙黄花',
    english: 'Changsha Huanghua International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 81,
    continent: '亚洲'
  },

  'NNG': {
    chinese: '南宁吴圩',
    english: 'Nanning Wuxu International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 80,
    continent: '亚洲'
  },

  'FOC': {
    chinese: '福州长乐',
    english: 'Fuzhou Changle International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 79,
    continent: '亚洲'
  },

  'HAK': {
    chinese: '海口美兰',
    english: 'Haikou Meilan International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 79,
    continent: '亚洲'
  },

  'SYA': {
    chinese: '三亚凤凰',
    english: 'Sanya Phoenix International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 78,
    continent: '亚洲'
  },

  'HRB': {
    chinese: '哈尔滨太平',
    english: 'Harbin Taiping International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 77,
    continent: '亚洲'
  },

  'SHE': {
    chinese: '沈阳桃仙',
    english: 'Shenyang Taoxian International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 76,
    continent: '亚洲'
  },

  'DLC': {
    chinese: '大连周水子',
    english: 'Dalian Zhoushuizi International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 75,
    continent: '亚洲'
  },

  // ================================================================
  // 第四等级：地区性国际机场 (Priority: 65-74)
  // ================================================================

  'LJG': {
    chinese: '丽江三义',
    english: 'Lijiang Sanyi Airport',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 74,
    continent: '亚洲'
  },

  'JJN': {
    chinese: '泉州晋江',
    english: 'Quanzhou Jinjiang Airport',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 73,
    continent: '亚洲'
  },

  'WNZ': {
    chinese: '温州龙湾',
    english: 'Wenzhou Longwan International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 72,
    continent: '亚洲'
  },

  'URC': {
    chinese: '乌鲁木齐地窝堡',
    english: 'Urumqi Diwopu International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 71,
    continent: '亚洲'
  },

  'LHW': {
    chinese: '兰州中川',
    english: 'Lanzhou Zhongchuan International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 70,
    continent: '亚洲'
  },

  'XIY': {
    chinese: '西安咸阳',
    english: 'Xi\'an Xianyang International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 69,
    continent: '亚洲'
  },

  'TYN': {
    chinese: '太原武宿',
    english: 'Taiyuan Wusu International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 68,
    continent: '亚洲'
  },

  'HET': {
    chinese: '呼和浩特白塔',
    english: 'Hohhot Baita International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 67,
    continent: '亚洲'
  },

  'YNT': {
    chinese: '烟台蓬莱',
    english: 'Yantai Penglai International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 66,
    continent: '亚洲'
  },

  'WEH': {
    chinese: '威海大水泊',
    english: 'Weihai Dashuipo Airport',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 65,
    continent: '亚洲'
  },

  // ================================================================
  // 第五等级：重要国内机场 (Priority: 55-64)
  // ================================================================

  'NGB': {
    chinese: '宁波栎社',
    english: 'Ningbo Lishe International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 64,
    continent: '亚洲'
  },

  'HFE': {
    chinese: '合肥新桥',
    english: 'Hefei Xinqiao International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 63,
    continent: '亚洲'
  },

  'NAN': {
    chinese: '南昌昌北',
    english: 'Nanchang Changbei International',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 62,
    continent: '亚洲'
  },

  'JMU': {
    chinese: '佳木斯东郊',
    english: 'Jiamusi Dongjiao Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 61,
    continent: '亚洲'
  },

  'MDG': {
    chinese: '牡丹江海浪',
    english: 'Mudanjiang Hailang Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 60,
    continent: '亚洲'
  },

  'YCU': {
    chinese: '运城关公',
    english: 'Yuncheng Guangong Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 59,
    continent: '亚洲'
  },

  'JGS': {
    chinese: '井冈山',
    english: 'Jinggangshan Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 58,
    continent: '亚洲'
  },

  'LYG': {
    chinese: '连云港白塔埠',
    english: 'Lianyungang Baitabu Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 57,
    continent: '亚洲'
  },

  'YIW': {
    chinese: '义乌',
    english: 'Yiwu Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 56,
    continent: '亚洲'
  },

  'ACX': {
    chinese: '兴义万峰林',
    english: 'Xingyi Wanfenglin Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 55,
    continent: '亚洲'
  },

  // ================================================================
  // 第六等级：特殊地区机场 (Priority: 45-54)
  // ================================================================

  'LXA': {
    chinese: '拉萨贡嘎',
    english: 'Lhasa Gonggar Airport',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 54,
    continent: '亚洲'
  },

  'INC': {
    chinese: '银川河东',
    english: 'Yinchuan Hedong Airport',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 53,
    continent: '亚洲'
  },

  'XNN': {
    chinese: '西宁曹家堡',
    english: 'Xining Caojiabao Airport',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 52,
    continent: '亚洲'
  },

  'KRL': {
    chinese: '库尔勒',
    english: 'Korla Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 51,
    continent: '亚洲'
  },

  'KHG': {
    chinese: '喀什',
    english: 'Kashgar Airport',
    country: '中国',
    type: 'international',
    customs: true,
    priority: 50,
    continent: '亚洲'
  },

  'IQN': {
    chinese: '庆阳',
    english: 'Qingyang Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 49,
    continent: '亚洲'
  },

  'JIC': {
    chinese: '金昌',
    english: 'Jinchang Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 48,
    continent: '亚洲'
  },

  'THQ': {
    chinese: '天水麦积山',
    english: 'Tianshui Maijishan Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 47,
    continent: '亚洲'
  },

  'DNH': {
    chinese: '敦煌',
    english: 'Dunhuang Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 46,
    continent: '亚洲'
  },

  'JGN': {
    chinese: '嘉峪关',
    english: 'Jiayuguan Airport',
    country: '中国',
    type: 'domestic',
    customs: false,
    priority: 45,
    continent: '亚洲'
  }

};

export const CHINA_AIRPORT_STATS = {
  total: 52,        // 50 + 2 (香港澳门已直接集成)
  international: 42, // 40 + 2 (香港澳门直接集成)
  domestic: 10,
  regional: 0,
  withCustoms: 42,   // 40 + 2 (香港澳门直接集成)
  topTier: 7,       // Priority 95+ (包含HKG)
  secondTier: 12,   // Priority 85-94 (包含MFM)
  thirdTier: 10,    // Priority 75-84
  fourthTier: 10,   // Priority 65-74
  fifthTier: 10,    // Priority 55-64
  sixthTier: 3      // Priority 45-54
};

export default chinaAirportsEnhanced;
