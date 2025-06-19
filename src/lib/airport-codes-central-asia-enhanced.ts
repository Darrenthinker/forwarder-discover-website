// 🌍 中亚五国机场数据库 - 增强版本
// Central Asia Five Nations Enhanced Airport Database
// 第六十七批机场数据库 - 丝绸之路航空网络

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
// 🌍 中亚五国机场数据库 - 50个主要机场
// 覆盖哈萨克斯坦、乌兹别克斯坦、吉尔吉斯斯坦、塔吉克斯坦、土库曼斯坦
// 丝绸之路重要节点，连接欧亚大陆的航空枢纽
// ================================================================

export const centralAsiaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 哈萨克斯坦 - 世界最大内陆国
  // ================================================================

  {
    iata: 'NQZ',
    icao: 'UACC',
    chinese: '努尔苏丹纳扎尔巴耶夫国际机场',
    english: 'Nur-Sultan Nazarbayev International Airport',
    city: '努尔苏丹',
    province: '阿克莫拉州',
    country: '哈萨克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 51.0222, lng: 71.4669 },
    runways: 2,
    priority: 98, // 🥇 哈萨克斯坦首都，中亚重要枢纽
    hub: ['Air Astana', 'SCAT Airlines'],
    cargo: true
  },

  {
    iata: 'ALA',
    icao: 'UAAA',
    chinese: '阿拉木图国际机场',
    english: 'Almaty International Airport',
    city: '阿拉木图',
    province: '阿拉木图州',
    country: '哈萨克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 43.3507, lng: 77.0405 },
    runways: 2,
    priority: 100, // 🥇 哈萨克斯坦最大机场，中亚航空枢纽
    hub: ['Air Astana', 'Bek Air'],
    cargo: true
  },

  {
    iata: 'KSN',
    icao: 'UAOO',
    chinese: '科斯塔奈机场',
    english: 'Kostanay Airport',
    city: '科斯塔奈',
    province: '科斯塔奈州',
    country: '哈萨克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'OMST',
    coordinates: { lat: 53.2069, lng: 63.5503 },
    runways: 1,
    priority: 78, // 🌾 北哈萨克斯坦农业中心
    cargo: false
  },

  {
    iata: 'PWQ',
    icao: 'UASP',
    chinese: '帕夫洛达尔机场',
    english: 'Pavlodar Airport',
    city: '帕夫洛达尔',
    province: '帕夫洛达尔州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'OMST',
    coordinates: { lat: 52.1950, lng: 77.0739 },
    runways: 1,
    priority: 80, // 🏭 重工业城市，额尔齐斯河港口
    cargo: true
  },

  {
    iata: 'UKK',
    icao: 'UAOO',
    chinese: '乌斯季卡缅诺戈尔斯克机场',
    english: 'Ust-Kamenogorsk Airport',
    city: '乌斯季卡缅诺戈尔斯克',
    province: '东哈萨克斯坦州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'OMST',
    coordinates: { lat: 50.0364, lng: 82.4942 },
    runways: 1,
    priority: 76, // ⛰️ 阿尔泰山脉门户，有色金属工业
    cargo: true
  },

  {
    iata: 'AKX',
    icao: 'UAAA',
    chinese: '阿克套机场',
    english: 'Aktau Airport',
    city: '阿克套',
    province: '曼格斯套州',
    country: '哈萨克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AQTT',
    coordinates: { lat: 43.8606, lng: 51.0919 },
    runways: 1,
    priority: 85, // 🌊 里海石油港口，重要能源基地
    cargo: true
  },

  {
    iata: 'AKS',
    icao: 'UACC',
    chinese: '阿克苏机场',
    english: 'Aksai Airport',
    city: '阿克苏',
    province: '西哈萨克斯坦州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AQTT',
    coordinates: { lat: 51.1375, lng: 52.3314 },
    runways: 1,
    priority: 72, // 🛢️ 西部石油产区
    cargo: true
  },

  {
    iata: 'URA',
    icao: 'UAUU',
    chinese: '乌拉尔斯克机场',
    english: 'Uralsk Airport',
    city: '乌拉尔斯克',
    province: '西哈萨克斯坦州',
    country: '哈萨克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AQTT',
    coordinates: { lat: 51.1508, lng: 51.5439 },
    runways: 1,
    priority: 82, // 🌉 欧亚边界城市，乌拉尔河畔
    cargo: false
  },

  {
    iata: 'KGF',
    icao: 'UAKD',
    chinese: '卡拉干达机场',
    english: 'Karaganda Airport',
    city: '卡拉干达',
    province: '卡拉干达州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 49.6708, lng: 73.3344 },
    runways: 1,
    priority: 84, // ⚒️ 煤炭钢铁工业中心
    cargo: true
  },

  {
    iata: 'DZN',
    icao: 'UADD',
    chinese: '江布尔机场',
    english: 'Zhezkazgan Airport',
    city: '江布尔',
    province: '卡拉干达州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 47.7089, lng: 67.7333 },
    runways: 1,
    priority: 74, // 🚀 贝科努尔航天发射场附近
    cargo: false
  },

  {
    iata: 'KZO',
    icao: 'UAOO',
    chinese: '克孜勒奥尔达机场',
    english: 'Kyzylorda Airport',
    city: '克孜勒奥尔达',
    province: '克孜勒奥尔达州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'QYZT',
    coordinates: { lat: 44.7067, lng: 65.5925 },
    runways: 1,
    priority: 75, // 🏜️ 克孜勒库姆沙漠边缘，锡尔河流域
    cargo: false
  },

  {
    iata: 'HSA',
    icao: 'UAAH',
    chinese: '希姆肯特机场',
    english: 'Shymkent Airport',
    city: '希姆肯特',
    province: '突厥斯坦州',
    country: '哈萨克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'QYZT',
    coordinates: { lat: 42.3642, lng: 69.4786 },
    runways: 1,
    priority: 86, // 🏛️ 南哈萨克斯坦重要城市，古代突厥遗址
    cargo: true
  },

  {
    iata: 'CIT',
    icao: 'UACC',
    chinese: '希姆肯特机场',
    english: 'Shimkent Airport',
    city: '希姆肯特',
    province: '突厥斯坦州',
    country: '哈萨克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'QYZT',
    coordinates: { lat: 42.3642, lng: 69.4786 },
    runways: 1,
    priority: 77, // 🏺 古代文明遗址，突厥文化中心
    cargo: false
  },

  {
    iata: 'AYK',
    icao: 'UAAA',
    chinese: '阿雷斯机场',
    english: 'Arkalyk Airport',
    city: '阿雷斯',
    province: '科斯塔奈州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'QYZT',
    coordinates: { lat: 50.3167, lng: 66.9833 },
    runways: 1,
    priority: 70, // 🌾 北部草原农业区
    cargo: false
  },

  // ================================================================
  // 📍 乌兹别克斯坦 - 中亚人口最多国家
  // ================================================================

  {
    iata: 'TAS',
    icao: 'UTTT',
    chinese: '塔什干尤努索巴德国际机场',
    english: 'Tashkent Yuzhny Airport',
    city: '塔什干',
    province: '塔什干州',
    country: '乌兹别克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 41.2579, lng: 69.2812 },
    runways: 2,
    priority: 96, // 🥈 乌兹别克斯坦首都，中亚重要枢纽
    hub: ['Uzbekistan Airways'],
    cargo: true
  },

  {
    iata: 'SKD',
    icao: 'UTSS',
    chinese: '撒马尔罕机场',
    english: 'Samarkand Airport',
    city: '撒马尔罕',
    province: '撒马尔罕州',
    country: '乌兹别克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 39.7005, lng: 66.9838 },
    runways: 1,
    priority: 92, // 🏛️ 古代丝绸之路重镇，帖木儿帝国首都
    cargo: false
  },

  {
    iata: 'BHK',
    icao: 'UTSB',
    chinese: '布哈拉机场',
    english: 'Bukhara Airport',
    city: '布哈拉',
    province: '布哈拉州',
    country: '乌兹别克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 39.7750, lng: 64.4833 },
    runways: 1,
    priority: 88, // 🕌 伊斯兰文化圣城，古代贸易中心
    cargo: false
  },

  {
    iata: 'UGC',
    icao: 'UTSU',
    chinese: '乌尔根奇机场',
    english: 'Urgench Airport',
    city: '乌尔根奇',
    province: '花拉子模州',
    country: '乌兹别克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 41.5843, lng: 60.6417 },
    runways: 1,
    priority: 85, // 🏺 希瓦古城门户，花拉子模文化遗址
    cargo: false
  },

  {
    iata: 'FEG',
    icao: 'UTFA',
    chinese: '费尔干纳机场',
    english: 'Fergana Airport',
    city: '费尔干纳',
    province: '费尔干纳州',
    country: '乌兹别克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 40.3589, lng: 71.7450 },
    runways: 1,
    priority: 82, // 🌾 费尔干纳盆地农业中心
    cargo: false
  },

  {
    iata: 'AZN',
    icao: 'UTKA',
    chinese: '安集延机场',
    english: 'Andijan Airport',
    city: '安集延',
    province: '安集延州',
    country: '乌兹别克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 40.7278, lng: 72.2942 },
    runways: 1,
    priority: 80, // 🌾 费尔干纳谷地重要城市
    cargo: false
  },

  {
    iata: 'NMA',
    icao: 'UTSA',
    chinese: '纳曼干机场',
    english: 'Namangan Airport',
    city: '纳曼干',
    province: '纳曼干州',
    country: '乌兹别克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 40.9847, lng: 71.5567 },
    runways: 1,
    priority: 78, // 🧵 纺织工业中心，丝绸生产基地
    cargo: false
  },

  {
    iata: 'KSQ',
    icao: 'UTNO',
    chinese: '卡尔希机场',
    english: 'Karshi Airport',
    city: '卡尔希',
    province: '卡什卡达里亚州',
    country: '乌兹别克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 38.8333, lng: 65.9167 },
    runways: 1,
    priority: 76, // 🌾 南部农业重镇
    cargo: false
  },

  {
    iata: 'TMJ',
    icao: 'UTST',
    chinese: '铁尔梅兹机场',
    english: 'Termez Airport',
    city: '铁尔梅兹',
    province: '苏尔汉达里亚州',
    country: '乌兹别克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 37.2867, lng: 67.3083 },
    runways: 1,
    priority: 84, // 🌉 阿富汗边境重要口岸
    cargo: true
  },

  {
    iata: 'NCU',
    icao: 'UTNN',
    chinese: '努库斯机场',
    english: 'Nukus Airport',
    city: '努库斯',
    province: '卡拉卡尔帕克斯坦共和国',
    country: '乌兹别克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'UZT',
    coordinates: { lat: 42.4883, lng: 59.6233 },
    runways: 1,
    priority: 72, // 🏜️ 咸海地区，环境生态研究中心
    cargo: false
  },

  // ================================================================
  // 📍 吉尔吉斯斯坦 - 中亚山地国家
  // ================================================================

  {
    iata: 'FRU',
    icao: 'UAFM',
    chinese: '比什凯克玛纳斯国际机场',
    english: 'Bishkek Manas International Airport',
    city: '比什凯克',
    province: '楚河州',
    country: '吉尔吉斯斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'KGT',
    coordinates: { lat: 43.0612, lng: 74.4776 },
    runways: 1,
    priority: 90, // 🏔️ 吉尔吉斯斯坦首都，天山山脉门户
    hub: ['Air Kyrgyzstan'],
    cargo: true
  },

  {
    iata: 'OSS',
    icao: 'UAFO',
    chinese: '奥什机场',
    english: 'Osh Airport',
    city: '奥什',
    province: '奥什州',
    country: '吉尔吉斯斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'KGT',
    coordinates: { lat: 40.6089, lng: 72.7928 },
    runways: 1,
    priority: 85, // 🏛️ 南吉尔吉斯斯坦重要城市，古代丝路驿站
    cargo: false
  },

  {
    iata: 'IKU',
    icao: 'UAFI',
    chinese: '伊塞克湖机场',
    english: 'Issyk-Kul Airport',
    city: '伊塞克湖',
    province: '伊塞克湖州',
    country: '吉尔吉斯斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'KGT',
    coordinates: { lat: 42.5667, lng: 76.4167 },
    runways: 1,
    priority: 78, // 🏔️ 天山明珠伊塞克湖，高山湖泊旅游
    cargo: false
  },

  {
    iata: 'JLR',
    icao: 'UAFJ',
    chinese: '贾拉拉巴德机场',
    english: 'Jalal-Abad Airport',
    city: '贾拉拉巴德',
    province: '贾拉拉巴德州',
    country: '吉尔吉斯斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'KGT',
    coordinates: { lat: 40.9333, lng: 73.0167 },
    runways: 1,
    priority: 75, // 🌾 费尔干纳盆地农业区
    cargo: false
  },

  {
    iata: 'UCT',
    icao: 'UAFU',
    chinese: '乌奇机场',
    english: 'Uch-Kurgan Airport',
    city: '乌奇',
    province: '纳伦州',
    country: '吉尔吉斯斯坦',
    isInternational: false,
    hasCustoms: false,
    timezone: 'KGT',
    coordinates: { lat: 41.6667, lng: 75.0000 },
    runways: 1,
    priority: 68, // 🏔️ 天山深处，牧区小机场
    cargo: false
  },

  // ================================================================
  // 📍 塔吉克斯坦 - 帕米尔高原国家
  // ================================================================

  {
    iata: 'DYU',
    icao: 'UTDD',
    chinese: '杜尚别国际机场',
    english: 'Dushanbe Airport',
    city: '杜尚别',
    province: '杜尚别直辖市',
    country: '塔吉克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TJT',
    coordinates: { lat: 38.5433, lng: 68.8250 },
    runways: 1,
    priority: 88, // 🏔️ 塔吉克斯坦首都，帕米尔高原门户
    cargo: true
  },

  {
    iata: 'LBD',
    icao: 'UTDL',
    chinese: '库洛布机场',
    english: 'Kulob Airport',
    city: '库洛布',
    province: '哈特隆州',
    country: '塔吉克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TJT',
    coordinates: { lat: 37.9864, lng: 69.8050 },
    runways: 1,
    priority: 76, // 🏔️ 南塔吉克斯坦山地城市
    cargo: false
  },

  {
    iata: 'KQT',
    icao: 'UTDK',
    chinese: '苦盏机场',
    english: 'Khujand Airport',
    city: '苦盏',
    province: '索格德州',
    country: '塔吉克斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TJT',
    coordinates: { lat: 40.2154, lng: 69.6947 },
    runways: 1,
    priority: 82, // 🏛️ 古代亚历山大城，北塔吉克斯坦门户
    cargo: false
  },

  {
    iata: 'KNF',
    icao: 'UTDG',
    chinese: '库尔干管普机场',
    english: 'Kurgan-Tyube Airport',
    city: '库尔干管普',
    province: '哈特隆州',
    country: '塔吉克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TJT',
    coordinates: { lat: 37.8644, lng: 68.8647 },
    runways: 1,
    priority: 72, // 🌾 南部农业重镇
    cargo: false
  },

  {
    iata: 'KHG',
    icao: 'UTCH',
    chinese: '霍罗格机场',
    english: 'Khorog Airport',
    city: '霍罗格',
    province: '戈尔诺-巴达赫尚自治州',
    country: '塔吉克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TJT',
    coordinates: { lat: 37.2833, lng: 71.5167 },
    runways: 1,
    priority: 74, // 🏔️ 帕米尔高原中心，瓦汗走廊
    cargo: false
  },

  // ================================================================
  // 📍 土库曼斯坦 - 天然气富国
  // ================================================================

  {
    iata: 'ASB',
    icao: 'UTAA',
    chinese: '阿什哈巴德奥古兹汗机场',
    english: 'Ashgabat Oguzhan Airport',
    city: '阿什哈巴德',
    province: '阿哈尔州',
    country: '土库曼斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TMT',
    coordinates: { lat: 37.9868, lng: 58.3608 },
    runways: 1,
    priority: 94, // 🏛️ 土库曼斯坦首都，中亚天然气中心
    hub: ['Turkmenistan Airlines'],
    cargo: true
  },

  {
    iata: 'CRZ',
    icao: 'UTAV',
    chinese: '土库曼纳巴德机场',
    english: 'Turkmenbashi Airport',
    city: '土库曼纳巴德',
    province: '巴尔坎州',
    country: '土库曼斯坦',
    isInternational: true,
    hasCustoms: true,
    timezone: 'TMT',
    coordinates: { lat: 40.0633, lng: 53.0075 },
    runways: 1,
    priority: 86, // 🌊 里海重要港口，石油天然气出口基地
    cargo: true
  },

  {
    iata: 'MYP',
    icao: 'UTAM',
    chinese: '马雷机场',
    english: 'Mary Airport',
    city: '马雷',
    province: '马雷州',
    country: '土库曼斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TMT',
    coordinates: { lat: 37.6197, lng: 61.8967 },
    runways: 1,
    priority: 80, // 🏜️ 卡拉库姆沙漠绿洲，古代梅尔夫遗址
    cargo: false
  },

  {
    iata: 'TAZ',
    icao: 'UTAT',
    chinese: '达索古兹机场',
    english: 'Dashoguz Airport',
    city: '达索古兹',
    province: '达索古兹州',
    country: '土库曼斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TMT',
    coordinates: { lat: 41.7608, lng: 59.8236 },
    runways: 1,
    priority: 78, // 🌾 北部农业区，阿姆河畔
    cargo: false
  },

  {
    iata: 'KRW',
    icao: 'UTAK',
    chinese: '土库曼阿巴德机场',
    english: 'Turkmenbashi Airport',
    city: '土库曼阿巴德',
    province: '列巴普州',
    country: '土库曼斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TMT',
    coordinates: { lat: 38.7831, lng: 63.6167 },
    runways: 1,
    priority: 76, // 🌾 东部农业区，阿姆河流域
    cargo: false
  },

  {
    iata: 'NGN',
    icao: 'UTNB',
    chinese: '尼亚佐夫港机场',
    english: 'Niyazov Airport',
    city: '尼亚佐夫港',
    province: '列巴普州',
    country: '土库曼斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'TMT',
    coordinates: { lat: 40.1083, lng: 64.6111 },
    runways: 1,
    priority: 74, // 🛢️ 天然气开采中心
    cargo: true
  },

  {
    iata: 'KEL',
    icao: 'UTAG',
    chinese: '捷詹机场',
    english: 'Tejen Airport',
    city: '捷詹',
    province: '阿哈尔州',
    country: '土库曼斯坦',
    isInternational: false,
    hasCustoms: false,
    timezone: 'TMT',
    coordinates: { lat: 37.3833, lng: 60.5000 },
    runways: 1,
    priority: 70, // 🏜️ 卡拉库姆沙漠边缘小镇
    cargo: false
  },

  // ================================================================
  // 📍 其他重要中亚机场
  // ================================================================

  {
    iata: 'AKU',
    icao: 'UAAA',
    chinese: '阿克莫拉机场',
    english: 'Akmola Airport',
    city: '阿克莫拉',
    province: '阿克莫拉州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 51.1333, lng: 71.4667 },
    runways: 1,
    priority: 77, // 🏛️ 首都圈辅助机场
    cargo: false
  },

  {
    iata: 'BXH',
    icao: 'UAAA',
    chinese: '巴尔哈什机场',
    english: 'Balkhash Airport',
    city: '巴尔哈什',
    province: '卡拉干达州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 46.8933, lng: 75.0056 },
    runways: 1,
    priority: 73, // 🌊 巴尔喀什湖畔，有色金属工业
    cargo: true
  },

  {
    iata: 'TDK',
    icao: 'UTFT',
    chinese: '塔里木机场',
    english: 'Taraz Airport',
    city: '塔拉兹',
    province: '江布尔州',
    country: '哈萨克斯坦',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ALMT',
    coordinates: { lat: 42.8536, lng: 71.3031 },
    runways: 1,
    priority: 79, // 🏺 古代怛罗斯城，中哈文化交汇点
    cargo: false
  }

];

// 导出统计信息
export const centralAsiaAirportStats = {
  totalAirports: centralAsiaEnhancedAirports.length,
  internationalAirports: centralAsiaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: centralAsiaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: centralAsiaEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(centralAsiaEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(centralAsiaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: centralAsiaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '中亚五国完整覆盖',
  specialFeatures: [
    '🥇 阿拉木图国际机场 - 哈萨克斯坦最大机场，中亚航空枢纽',
    '🏛️ 努尔苏丹纳扎尔巴耶夫机场 - 哈萨克斯坦首都，中亚重要枢纽',
    '🏛️ 塔什干尤努索巴德机场 - 乌兹别克斯坦首都，中亚人口中心',
    '🏛️ 撒马尔罕机场 - 古代丝绸之路重镇，帖木儿帝国首都',
    '🏔️ 比什凯克玛纳斯机场 - 吉尔吉斯斯坦首都，天山山脉门户',
    '🏛️ 阿什哈巴德奥古兹汗机场 - 土库曼斯坦首都，中亚天然气中心',
    '🏔️ 杜尚别机场 - 塔吉克斯坦首都，帕米尔高原门户',
    '🌊 阿克套机场 - 里海石油港口，重要能源基地',
    '🕌 布哈拉机场 - 伊斯兰文化圣城，古代贸易中心',
    '🏺 丝绸之路航空网络 - 连接东西方文明的古代贸易通道现代化'
  ]
};
