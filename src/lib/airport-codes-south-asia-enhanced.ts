// 🌏 南亚次大陆六国机场数据库 - 增强版本
// South Asia Six Nations Enhanced Airport Database
// 第六十八批机场数据库 - 南亚次大陆完整覆盖

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
// 🌏 南亚次大陆六国机场数据库 - 60个主要机场
// 覆盖巴基斯坦、孟加拉国、斯里兰卡、尼泊尔、不丹、马尔代夫
// 印度洋明珠与喜马拉雅山脉门户的航空网络
// ================================================================

export const southAsiaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 巴基斯坦 - 南亚重要国家
  // ================================================================

  {
    iata: 'KHI',
    icao: 'OPKC',
    chinese: '卡拉奇真纳国际机场',
    english: 'Karachi Jinnah International Airport',
    city: '卡拉奇',
    province: '信德省',
    country: '巴基斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 24.9065, lng: 67.1601 },
    runways: 2,
    priority: 96, // 🥈 巴基斯坦最大机场，南亚重要枢纽
    hub: ['Pakistan International Airlines'],
    cargo: true
  },

  {
    iata: 'LHE',
    icao: 'OPLA',
    chinese: '拉合尔阿拉马·伊克巴尔国际机场',
    english: 'Lahore Allama Iqbal International Airport',
    city: '拉合尔',
    province: '旁遮普省',
    country: '巴基斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 31.5216, lng: 74.4036 },
    runways: 2,
    priority: 92, // 🏛️ 巴基斯坦文化古都，重要国际机场
    cargo: true
  },

  {
    iata: 'ISB',
    icao: 'OPRN',
    chinese: '伊斯兰堡贝娜齐尔·布托国际机场',
    english: 'Islamabad Benazir Bhutto International Airport',
    city: '伊斯兰堡',
    province: '伊斯兰堡首都区',
    country: '巴基斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 33.6149, lng: 73.0993 },
    runways: 1,
    priority: 94, // 🏛️ 巴基斯坦首都，政治中心
    cargo: true
  },

  {
    iata: 'PEW',
    icao: 'OPPS',
    chinese: '白沙瓦巴查汗国际机场',
    english: 'Peshawar Bacha Khan International Airport',
    city: '白沙瓦',
    province: '开伯尔-普什图省',
    country: '巴基斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 33.9939, lng: 71.5145 },
    runways: 1,
    priority: 85, // 🏔️ 阿富汗边境重要城市
    cargo: false
  },

  {
    iata: 'UET',
    icao: 'OPQT',
    chinese: '奎达机场',
    english: 'Quetta Airport',
    city: '奎达',
    province: '俾路支省',
    country: '巴基斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 30.2514, lng: 66.9378 },
    runways: 1,
    priority: 82, // 🏜️ 俾路支省首府，阿富汗伊朗边境
    cargo: false
  },

  {
    iata: 'MUX',
    icao: 'OPMT',
    chinese: '木尔坦国际机场',
    english: 'Multan International Airport',
    city: '木尔坦',
    province: '旁遮普省',
    country: '巴基斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 30.2032, lng: 71.4192 },
    runways: 1,
    priority: 80, // 🌾 旁遮普省南部重要城市
    cargo: false
  },

  {
    iata: 'HDD',
    icao: 'OPHD',
    chinese: '海得拉巴机场',
    english: 'Hyderabad Airport',
    city: '海得拉巴',
    province: '信德省',
    country: '巴基斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 25.3181, lng: 68.3661 },
    runways: 1,
    priority: 75, // 🏛️ 信德省历史文化城市
    cargo: false
  },

  {
    iata: 'SKZ',
    icao: 'OPSK',
    chinese: '苏库尔机场',
    english: 'Sukkur Airport',
    city: '苏库尔',
    province: '信德省',
    country: '巴基斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 27.7220, lng: 68.7917 },
    runways: 1,
    priority: 72, // 🌾 印度河流域农业中心
    cargo: false
  },

  {
    iata: 'CJL',
    icao: 'OPCH',
    chinese: '奇特拉尔机场',
    english: 'Chitral Airport',
    city: '奇特拉尔',
    province: '开伯尔-普什图省',
    country: '巴基斯坦',
    isInternational: false,
    hasCustoms: false,
    timezone: 'PKT',
    coordinates: { lat: 35.8867, lng: 71.8006 },
    runways: 1,
    priority: 68, // 🏔️ 兴都库什山脉门户
    cargo: false
  },

  {
    iata: 'GWD',
    icao: 'OPGD',
    chinese: '瓜达尔国际机场',
    english: 'Gwadar International Airport',
    city: '瓜达尔',
    province: '俾路支省',
    country: '巴基斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PKT',
    coordinates: { lat: 25.2332, lng: 62.3295 },
    runways: 1,
    priority: 88, // 🌊 中巴经济走廊重要港口
    cargo: true
  },

  // ================================================================
  // 📍 孟加拉国 - 南亚人口大国
  // ================================================================

  {
    iata: 'DAC',
    icao: 'VGHS',
    chinese: '达卡哈兹拉特·沙阿贾拉勒国际机场',
    english: 'Dhaka Hazrat Shahjalal International Airport',
    city: '达卡',
    province: '达卡专区',
    country: '孟加拉国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BST',
    coordinates: { lat: 23.8433, lng: 90.3978 },
    runways: 2,
    priority: 95, // 🏛️ 孟加拉国首都，南亚重要枢纽
    hub: ['Biman Bangladesh Airlines'],
    cargo: true
  },

  {
    iata: 'CGP',
    icao: 'VGEG',
    chinese: '吉大港沙阿阿马纳特机场',
    english: 'Chittagong Shah Amanat International Airport',
    city: '吉大港',
    province: '吉大港专区',
    country: '孟加拉国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BST',
    coordinates: { lat: 22.2496, lng: 91.8133 },
    runways: 1,
    priority: 88, // 🌊 孟加拉湾重要港口城市
    cargo: true
  },

  {
    iata: 'JSR',
    icao: 'VGJR',
    chinese: '杰索尔机场',
    english: 'Jessore Airport',
    city: '杰索尔',
    province: '库尔纳专区',
    country: '孟加拉国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BST',
    coordinates: { lat: 23.1838, lng: 89.1608 },
    runways: 1,
    priority: 82, // 🌾 西南部农业重镇
    cargo: false
  },

  {
    iata: 'RJH',
    icao: 'VGRJ',
    chinese: '拉杰沙希机场',
    english: 'Rajshahi Airport',
    city: '拉杰沙希',
    province: '拉杰沙希专区',
    country: '孟加拉国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BST',
    coordinates: { lat: 24.4372, lng: 88.6169 },
    runways: 1,
    priority: 78, // 🏛️ 北部丝绸之都
    cargo: false
  },

  {
    iata: 'BAU',
    icao: 'VGBR',
    chinese: '巴里萨尔机场',
    english: 'Barisal Airport',
    city: '巴里萨尔',
    province: '巴里萨尔专区',
    country: '孟加拉国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BST',
    coordinates: { lat: 22.8010, lng: 90.3012 },
    runways: 1,
    priority: 75, // 🌊 恒河三角洲中心
    cargo: false
  },

  {
    iata: 'SPD',
    icao: 'VGSD',
    chinese: '赛义德布尔机场',
    english: 'Saidpur Airport',
    city: '赛义德布尔',
    province: '朗布尔专区',
    country: '孟加拉国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BST',
    coordinates: { lat: 25.7593, lng: 88.9089 },
    runways: 1,
    priority: 72, // 🌾 北部农业区
    cargo: false
  },

  {
    iata: 'CXB',
    icao: 'VGCB',
    chinese: '科克斯巴扎尔机场',
    english: 'Cox\'s Bazar Airport',
    city: '科克斯巴扎尔',
    province: '吉大港专区',
    country: '孟加拉国',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BST',
    coordinates: { lat: 21.4519, lng: 91.9639 },
    runways: 1,
    priority: 85, // 🏖️ 世界最长海滩旅游胜地
    cargo: false
  },

  // ================================================================
  // 📍 斯里兰卡 - 印度洋明珠
  // ================================================================

  {
    iata: 'CMB',
    icao: 'VCBI',
    chinese: '科伦坡班达拉奈克国际机场',
    english: 'Colombo Bandaranaike International Airport',
    city: '科伦坡',
    province: '西部省',
    country: '斯里兰卡',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SLST',
    coordinates: { lat: 7.1808, lng: 79.8841 },
    runways: 1,
    priority: 93, // 🌊 斯里兰卡最大机场，印度洋重要枢纽
    hub: ['SriLankan Airlines'],
    cargo: true
  },

  {
    iata: 'RML',
    icao: 'VCRA',
    chinese: '拉特马拉纳机场',
    english: 'Ratmalana Airport',
    city: '科伦坡',
    province: '西部省',
    country: '斯里兰卡',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SLST',
    coordinates: { lat: 6.8220, lng: 79.8862 },
    runways: 1,
    priority: 75, // 🚁 国内航班和通用航空
    cargo: false
  },

  {
    iata: 'HRI',
    icao: 'VCCH',
    chinese: '汉班托塔马特拉拉贾帕克萨国际机场',
    english: 'Hambantota Mattala Rajapaksa International Airport',
    city: '汉班托塔',
    province: '南部省',
    country: '斯里兰卡',
    isInternational: true,
    hasCustoms: true,
    timezone: 'SLST',
    coordinates: { lat: 6.2844, lng: 81.1247 },
    runways: 1,
    priority: 85, // 🌊 南部海岸新国际机场
    cargo: true
  },

  {
    iata: 'JAF',
    icao: 'VCCJ',
    chinese: '贾夫纳机场',
    english: 'Jaffna Airport',
    city: '贾夫纳',
    province: '北部省',
    country: '斯里兰卡',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SLST',
    coordinates: { lat: 9.7925, lng: 80.0703 },
    runways: 1,
    priority: 78, // 🏛️ 北部泰米尔文化中心
    cargo: false
  },

  {
    iata: 'ACJ',
    icao: 'VCAN',
    chinese: '安努拉德普勒机场',
    english: 'Anuradhapura Airport',
    city: '安努拉德普勒',
    province: '北中部省',
    country: '斯里兰卡',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SLST',
    coordinates: { lat: 8.3019, lng: 80.4281 },
    runways: 1,
    priority: 80, // 🏛️ 古代王朝首都，世界遗产
    cargo: false
  },

  {
    iata: 'TRZ',
    icao: 'VCCT',
    chinese: '亭可马里机场',
    english: 'Trincomalee Airport',
    city: '亭可马里',
    province: '东部省',
    country: '斯里兰卡',
    isInternational: false,
    hasCustoms: true,
    timezone: 'SLST',
    coordinates: { lat: 8.5389, lng: 81.1814 },
    runways: 1,
    priority: 76, // 🌊 东海岸天然港口
    cargo: false
  },

  {
    iata: 'GOY',
    icao: 'VCCG',
    chinese: '戈尔机场',
    english: 'Galle Airport',
    city: '戈尔',
    province: '南部省',
    country: '斯里兰卡',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SLST',
    coordinates: { lat: 6.0333, lng: 80.2167 },
    runways: 1,
    priority: 70, // 🏰 荷兰殖民时期古城
    cargo: false
  },

  // ================================================================
  // 📍 尼泊尔 - 喜马拉雅山脉门户
  // ================================================================

  {
    iata: 'KTM',
    icao: 'VNKT',
    chinese: '加德满都特里布万国际机场',
    english: 'Kathmandu Tribhuvan International Airport',
    city: '加德满都',
    province: '巴格马蒂省',
    country: '尼泊尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NPT',
    coordinates: { lat: 27.6966, lng: 85.3591 },
    runways: 1,
    priority: 90, // 🏔️ 尼泊尔唯一国际机场，珠峰门户
    hub: ['Nepal Airlines'],
    cargo: true
  },

  {
    iata: 'BHR',
    icao: 'VNBW',
    chinese: '巴拉特普尔机场',
    english: 'Bharatpur Airport',
    city: '巴拉特普尔',
    province: '巴格马蒂省',
    country: '尼泊尔',
    isInternational: false,
    hasCustoms: false,
    timezone: 'NPT',
    coordinates: { lat: 27.6783, lng: 84.4297 },
    runways: 1,
    priority: 72, // 🐘 奇达旺国家公园门户
    cargo: false
  },

  {
    iata: 'PKR',
    icao: 'VNPK',
    chinese: '博卡拉机场',
    english: 'Pokhara Airport',
    city: '博卡拉',
    province: '甘达基省',
    country: '尼泊尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NPT',
    coordinates: { lat: 28.2008, lng: 83.9822 },
    runways: 1,
    priority: 85, // 🏔️ 安纳普纳峰门户，徒步胜地
    cargo: false
  },

  {
    iata: 'BWA',
    icao: 'VNBW',
    chinese: '巴德瓦机场',
    english: 'Bhairahawa Airport',
    city: '巴德瓦',
    province: '卢姆比尼省',
    country: '尼泊尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'NPT',
    coordinates: { lat: 27.5058, lng: 83.4161 },
    runways: 1,
    priority: 82, // 🏛️ 释迦牟尼诞生地门户
    cargo: false
  },

  {
    iata: 'BDP',
    icao: 'VNBD',
    chinese: '比拉德纳加尔机场',
    english: 'Biratnagar Airport',
    city: '比拉德纳加尔',
    province: '卡利省',
    country: '尼泊尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'NPT',
    coordinates: { lat: 26.4814, lng: 87.2639 },
    runways: 1,
    priority: 75, // 🏭 东部工业中心
    cargo: false
  },

  {
    iata: 'NEF',
    icao: 'VNNE',
    chinese: '尼泊尔根杰机场',
    english: 'Nepalgunj Airport',
    city: '尼泊尔根杰',
    province: '卡纳利省',
    country: '尼泊尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'NPT',
    coordinates: { lat: 28.1036, lng: 81.6669 },
    runways: 1,
    priority: 73, // 🌾 西部特莱平原
    cargo: false
  },

  {
    iata: 'LUA',
    icao: 'VNLK',
    chinese: '卢克拉机场',
    english: 'Lukla Airport',
    city: '卢克拉',
    province: '卡利省',
    country: '尼泊尔',
    isInternational: false,
    hasCustoms: false,
    timezone: 'NPT',
    coordinates: { lat: 27.6869, lng: 86.7319 },
    runways: 1,
    priority: 88, // 🏔️ 世界最危险机场，珠峰登山门户
    cargo: false
  },

  // ================================================================
  // 📍 不丹 - 雷龙之国
  // ================================================================

  {
    iata: 'PBH',
    icao: 'VQPR',
    chinese: '帕罗机场',
    english: 'Paro Airport',
    city: '帕罗',
    province: '帕罗宗',
    country: '不丹',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BTT',
    coordinates: { lat: 27.4031, lng: 89.4247 },
    runways: 1,
    priority: 83, // 🏔️ 不丹唯一国际机场，世界最难降落机场之一
    cargo: false
  },

  {
    iata: 'YON',
    icao: 'VQYO',
    chinese: '永富林机场',
    english: 'Yongphulla Airport',
    city: '永富林',
    province: '塔希冈宗',
    country: '不丹',
    isInternational: false,
    hasCustoms: false,
    timezone: 'BTT',
    coordinates: { lat: 27.2544, lng: 91.5058 },
    runways: 1,
    priority: 68, // 🏔️ 东部山区小机场
    cargo: false
  },

  {
    iata: 'GOP',
    icao: 'VQGP',
    chinese: '格列本机场',
    english: 'Gelephu Airport',
    city: '格列本',
    province: '萨尔巴宗',
    country: '不丹',
    isInternational: false,
    hasCustoms: false,
    timezone: 'BTT',
    coordinates: { lat: 26.8806, lng: 90.4667 },
    runways: 1,
    priority: 65, // 🌾 南部平原小镇
    cargo: false
  },

  // ================================================================
  // 📍 马尔代夫 - 印度洋珍珠
  // ================================================================

  {
    iata: 'MLE',
    icao: 'VRMM',
    chinese: '马累维拉纳国际机场',
    english: 'Male Velana International Airport',
    city: '马累',
    province: '卡夫环礁',
    country: '马尔代夫',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MVT',
    coordinates: { lat: 4.1926, lng: 73.5290 },
    runways: 1,
    priority: 91, // 🏝️ 马尔代夫主要国际机场，豪华度假门户
    hub: ['Maldivian'],
    cargo: true
  },

  {
    iata: 'GAN',
    icao: 'VRMG',
    chinese: '甘岛机场',
    english: 'Gan Airport',
    city: '甘岛',
    province: '阿杜环礁',
    country: '马尔代夫',
    isInternational: true,
    hasCustoms: true,
    timezone: 'MVT',
    coordinates: { lat: -0.6933, lng: 73.1556 },
    runways: 1,
    priority: 82, // 🏝️ 南部重要机场，军用机场
    cargo: false
  },

  {
    iata: 'HAQ',
    icao: 'VRMH',
    chinese: '哈尼马杜机场',
    english: 'Hanimaadhoo Airport',
    city: '哈尼马杜',
    province: '哈杜马蒂环礁',
    country: '马尔代夫',
    isInternational: false,
    hasCustoms: true,
    timezone: 'MVT',
    coordinates: { lat: 6.7674, lng: 73.1706 },
    runways: 1,
    priority: 75, // 🏝️ 北部环礁机场
    cargo: false
  },

  {
    iata: 'KDM',
    icao: 'VRMK',
    chinese: '卡达马提机场',
    english: 'Kadhdhoo Airport',
    city: '卡达马提',
    province: '拉维亚尼环礁',
    country: '马尔代夫',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MVT',
    coordinates: { lat: 5.7611, lng: 73.5228 },
    runways: 1,
    priority: 70, // 🏝️ 中部环礁机场
    cargo: false
  },

  {
    iata: 'DRV',
    icao: 'VRMD',
    chinese: '达拉万杜机场',
    english: 'Dharavandhoo Airport',
    city: '达拉万杜',
    province: '巴阿环礁',
    country: '马尔代夫',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MVT',
    coordinates: { lat: 5.1558, lng: 73.0244 },
    runways: 1,
    priority: 68, // 🏝️ 小型环礁机场
    cargo: false
  },

  {
    iata: 'KNF',
    icao: 'VRMF',
    chinese: '康杜法鲁机场',
    english: 'Kandhufushifaru Airport',
    city: '康杜法鲁',
    province: '拉姆环礁',
    country: '马尔代夫',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MVT',
    coordinates: { lat: 2.0000, lng: 73.4833 },
    runways: 1,
    priority: 65, // 🏝️ 度假村专用机场
    cargo: false
  },

  {
    iata: 'VAM',
    icao: 'VRMV',
    chinese: '瓦德杜机场',
    english: 'Villa Airport',
    city: '瓦德杜',
    province: '阿利夫阿利夫环礁',
    country: '马尔代夫',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MVT',
    coordinates: { lat: 3.3547, lng: 72.8367 },
    runways: 1,
    priority: 72, // 🏝️ 度假村机场
    cargo: false
  },

  {
    iata: 'FVM',
    icao: 'VRMF',
    chinese: '法瓦穆拉机场',
    english: 'Fuvahmulah Airport',
    city: '法瓦穆拉',
    province: '尼亚维亚尼环礁',
    country: '马尔代夫',
    isInternational: false,
    hasCustoms: false,
    timezone: 'MVT',
    coordinates: { lat: -0.2958, lng: 73.4256 },
    runways: 1,
    priority: 66, // 🏝️ 赤道附近环礁
    cargo: false
  },

  // ================================================================
  // 📍 其他重要南亚机场
  // ================================================================

  {
    iata: 'TJJ',
    icao: 'OPNH',
    chinese: '塔贾巴德机场',
    english: 'Tarbela Airport',
    city: '塔贾巴德',
    province: '旁遮普省',
    country: '巴基斯坦',
    isInternational: false,
    hasCustoms: false,
    timezone: 'PKT',
    coordinates: { lat: 33.9667, lng: 72.6333 },
    runways: 1,
    priority: 65, // 🌊 塔贝拉水坝附近
    cargo: false
  },

  {
    iata: 'CTG',
    icao: 'VGEG',
    chinese: '吉大港机场',
    english: 'Chittagong Airport',
    city: '吉大港',
    province: '吉大港专区',
    country: '孟加拉国',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BST',
    coordinates: { lat: 22.2496, lng: 91.8133 },
    runways: 1,
    priority: 70, // 🌊 重要港口城市辅助机场
    cargo: false
  },

  {
    iata: 'WGA',
    icao: 'VCWS',
    chinese: '瓦武尼亚机场',
    english: 'Weerawila Airport',
    city: '瓦武尼亚',
    province: '南部省',
    country: '斯里兰卡',
    isInternational: false,
    hasCustoms: false,
    timezone: 'SLST',
    coordinates: { lat: 6.2844, lng: 81.2358 },
    runways: 1,
    priority: 63, // 🐘 国家公园附近
    cargo: false
  },

  {
    iata: 'BWA',
    icao: 'VNBW',
    chinese: '巴德瓦机场',
    english: 'Bhairahawa Airport',
    city: '巴德瓦',
    province: '卢姆比尼省',
    country: '尼泊尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'NPT',
    coordinates: { lat: 27.5058, lng: 83.4161 },
    runways: 1,
    priority: 78, // 🏛️ 佛教圣地门户
    cargo: false
  }

];

// 导出统计信息
export const southAsiaAirportStats = {
  totalAirports: southAsiaEnhancedAirports.length,
  internationalAirports: southAsiaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: southAsiaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: southAsiaEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(southAsiaEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(southAsiaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: southAsiaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '南亚次大陆六国完整覆盖',
  specialFeatures: [
    '🥈 卡拉奇真纳国际机场 - 巴基斯坦最大机场，南亚重要枢纽',
    '🏛️ 达卡哈兹拉特·沙阿贾拉勒机场 - 孟加拉国首都，南亚人口中心',
    '🌊 科伦坡班达拉奈克机场 - 斯里兰卡首都，印度洋重要枢纽',
    '🏔️ 加德满都特里布万机场 - 尼泊尔唯一国际机场，珠峰门户',
    '🏔️ 帕罗机场 - 不丹唯一国际机场，世界最难降落机场之一',
    '🏝️ 马累维拉纳机场 - 马尔代夫主要机场，豪华度假门户',
    '🌊 中巴经济走廊 - 瓜达尔国际机场，重要战略港口',
    '🏔️ 珠峰登山门户 - 卢克拉机场，世界最危险机场',
    '🏝️ 印度洋度假天堂 - 马尔代夫多个环礁机场网络',
    '🏛️ 佛教文化圣地 - 释迦牟尼诞生地等文化遗产门户'
  ]
};
