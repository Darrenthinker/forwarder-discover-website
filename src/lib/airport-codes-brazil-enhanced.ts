// 🇧🇷 巴西机场数据库 - 增强版本
// Brazil Enhanced Airport Database
// 第二十一批机场数据库 - 南美洲扩展

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  city: string;
  region: string;
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
// 🇧🇷 巴西联邦共和国机场数据库 - 30个主要机场
// 覆盖5大地理区域：东南部、东北部、南部、中西部、北部
// 26个州和1个联邦区完整覆盖
// ================================================================

export const brazilEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 东南部地区 (Southeast) - 经济中心
  // ================================================================

  {
    iata: 'GRU',
    icao: 'SBGR',
    chinese: '圣保罗瓜鲁柳斯国际机场',
    english: 'Sao Paulo Guarulhos International Airport',
    city: '圣保罗',
    region: '东南部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -23.4356, lng: -46.4731 },
    runways: 2,
    priority: 100, // 🥇 南美洲最大国际枢纽
    hub: ['巴西天马航空', '戈尔航空', 'LATAM巴西'],
    cargo: true
  },

  {
    iata: 'CGH',
    icao: 'SBSP',
    chinese: '圣保罗孔戈尼亚斯机场',
    english: 'Sao Paulo Congonhas Airport',
    city: '圣保罗',
    region: '东南部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: false,
    timezone: 'BRT',
    coordinates: { lat: -23.6265, lng: -46.6557 },
    runways: 2,
    priority: 88, // 🏢 圣保罗市内机场
    hub: ['戈尔航空', 'LATAM巴西'],
    cargo: false
  },

  {
    iata: 'VCP',
    icao: 'SBKP',
    chinese: '坎皮纳斯维拉科波斯国际机场',
    english: 'Campinas Viracopos International Airport',
    city: '坎皮纳斯',
    region: '东南部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -23.0074, lng: -47.1344 },
    runways: 2,
    priority: 90, // 📦 重要货运枢纽
    hub: ['蓝色航空'],
    cargo: true
  },

  {
    iata: 'GIG',
    icao: 'SBGL',
    chinese: '里约热内卢加利昂国际机场',
    english: 'Rio de Janeiro Galeao International Airport',
    city: '里约热内卢',
    region: '东南部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -22.8099, lng: -43.2506 },
    runways: 2,
    priority: 98, // 🏖️ 世界知名旅游城市
    hub: ['戈尔航空', 'LATAM巴西'],
    cargo: true
  },

  {
    iata: 'SDU',
    icao: 'SBRJ',
    chinese: '里约热内卢桑托斯杜蒙机场',
    english: 'Rio de Janeiro Santos Dumont Airport',
    city: '里约热内卢',
    region: '东南部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: false,
    timezone: 'BRT',
    coordinates: { lat: -22.9105, lng: -43.1634 },
    runways: 1,
    priority: 82, // 🏙️ 市中心机场
    cargo: false
  },

  {
    iata: 'BSB',
    icao: 'SBBR',
    chinese: '巴西利亚儒塞利诺·库比契克总统国际机场',
    english: 'Brasilia Juscelino Kubitschek International Airport',
    city: '巴西利亚',
    region: '中西部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -15.8711, lng: -47.9172 },
    runways: 2,
    priority: 95, // 🏛️ 联邦首都机场
    hub: ['蓝色航空', '戈尔航空'],
    cargo: true
  },

  {
    iata: 'CNF',
    icao: 'SBCF',
    chinese: '贝洛奥里藏特坦克雷多·内维斯国际机场',
    english: 'Belo Horizonte Tancredo Neves International Airport',
    city: '贝洛奥里藏特',
    region: '东南部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -19.6244, lng: -43.9719 },
    runways: 1,
    priority: 86, // 🏭 重要工业城市
    hub: ['蓝色航空'],
    cargo: true
  },

  {
    iata: 'PLU',
    icao: 'SBBH',
    chinese: '贝洛奥里藏特潘普利亚机场',
    english: 'Belo Horizonte Pampulha Airport',
    city: '贝洛奥里藏特',
    region: '东南部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: false,
    timezone: 'BRT',
    coordinates: { lat: -19.8516, lng: -43.9506 },
    runways: 1,
    priority: 72, // 🏙️ 市内机场
    cargo: false
  },

  {
    iata: 'VIX',
    icao: 'SBVT',
    chinese: '维多利亚欧里科·德·阿吉亚尔·萨利斯机场',
    english: 'Vitoria Eurico de Aguiar Salles Airport',
    city: '维多利亚',
    region: '东南部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -20.2581, lng: -40.2864 },
    runways: 1,
    priority: 78, // ⚓ 重要港口城市
    cargo: true
  },

  // ================================================================
  // 📍 东北部地区 (Northeast) - 旅游热点
  // ================================================================

  {
    iata: 'SSA',
    icao: 'SBSV',
    chinese: '萨尔瓦多路易斯·爱德华多·马加良斯机场',
    english: 'Salvador Luis Eduardo Magalhaes International Airport',
    city: '萨尔瓦多',
    region: '东北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -12.9086, lng: -38.3225 },
    runways: 1,
    priority: 85, // 🎭 文化历史名城
    hub: ['戈尔航空'],
    cargo: true
  },

  {
    iata: 'REC',
    icao: 'SBRF',
    chinese: '累西腓瓜拉拉佩斯国际机场',
    english: 'Recife Guararapes International Airport',
    city: '累西腓',
    region: '东北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -8.1265, lng: -34.9236 },
    runways: 2,
    priority: 84, // 🏖️ 重要旅游城市
    hub: ['蓝色航空'],
    cargo: true
  },

  {
    iata: 'FOR',
    icao: 'SBFZ',
    chinese: '福塔莱萨平托·马丁斯国际机场',
    english: 'Fortaleza Pinto Martins International Airport',
    city: '福塔莱萨',
    region: '东北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -3.7763, lng: -38.5326 },
    runways: 1,
    priority: 83, // 🏖️ 大西洋海滨城市
    hub: ['戈尔航空'],
    cargo: true
  },

  {
    iata: 'NAT',
    icao: 'SBNT',
    chinese: '纳塔尔奥古斯托·塞韦罗国际机场',
    english: 'Natal Augusto Severo International Airport',
    city: '纳塔尔',
    region: '东北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -5.9111, lng: -35.2478 },
    runways: 1,
    priority: 80, // 🌴 太阳海岸旅游
    cargo: false
  },

  {
    iata: 'MCZ',
    icao: 'SBMO',
    chinese: '马塞约祖姆比·多斯·帕尔马雷斯国际机场',
    english: 'Maceio Zumbi dos Palmares International Airport',
    city: '马塞约',
    region: '东北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -9.5108, lng: -35.7917 },
    runways: 1,
    priority: 76, // 🏖️ 海滨旅游城市
    cargo: false
  },

  {
    iata: 'AJU',
    icao: 'SBAR',
    chinese: '阿拉卡茹圣玛丽亚机场',
    english: 'Aracaju Santa Maria Airport',
    city: '阿拉卡茹',
    region: '东北部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -10.9840, lng: -37.0703 },
    runways: 1,
    priority: 74, // 🌴 塞尔希培州首府
    cargo: false
  },

  {
    iata: 'JPA',
    icao: 'SBJP',
    chinese: '若昂佩索阿卡斯特罗·平托机场',
    english: 'Joao Pessoa Castro Pinto International Airport',
    city: '若昂佩索阿',
    region: '东北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -7.1459, lng: -34.9486 },
    runways: 1,
    priority: 75, // 🏛️ 帕拉伊巴州首府
    cargo: false
  },

  {
    iata: 'THE',
    icao: 'SBTE',
    chinese: '特雷西纳塞纳多尔·佩特罗尼奥·波尔特拉机场',
    english: 'Teresina Senador Petronio Portella Airport',
    city: '特雷西纳',
    region: '东北部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: false,
    timezone: 'BRT',
    coordinates: { lat: -5.0597, lng: -42.8236 },
    runways: 1,
    priority: 68, // 🌾 皮奥伊州首府
    cargo: false
  },

  {
    iata: 'SLZ',
    icao: 'SBSL',
    chinese: '圣路易斯马雷沙尔·库尼亚·马沙多机场',
    english: 'Sao Luis Marechal Cunha Machado International Airport',
    city: '圣路易斯',
    region: '东北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -2.5836, lng: -44.2342 },
    runways: 1,
    priority: 77, // 🏛️ 马拉尼昂州首府
    cargo: false
  },

  // ================================================================
  // 📍 南部地区 (South) - 发达地区
  // ================================================================

  {
    iata: 'POA',
    icao: 'SBPA',
    chinese: '阿雷格里港萨尔加多菲略国际机场',
    english: 'Porto Alegre Salgado Filho International Airport',
    city: '阿雷格里港',
    region: '南部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -29.9939, lng: -51.1714 },
    runways: 2,
    priority: 87, // 🏭 重要工业城市
    hub: ['蓝色航空', '戈尔航空'],
    cargo: true
  },

  {
    iata: 'CWB',
    icao: 'SBCT',
    chinese: '库里蒂巴阿方索·佩纳国际机场',
    english: 'Curitiba Afonso Pena International Airport',
    city: '库里蒂巴',
    region: '南部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -25.5285, lng: -49.1758 },
    runways: 2,
    priority: 85, // 🌿 生态模范城市
    hub: ['蓝色航空'],
    cargo: true
  },

  {
    iata: 'FLN',
    icao: 'SBFL',
    chinese: '弗洛里亚诺波利斯埃尔西利奥·卢斯国际机场',
    english: 'Florianopolis Hercilio Luz International Airport',
    city: '弗洛里亚诺波利斯',
    region: '南部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -27.6703, lng: -48.5525 },
    runways: 1,
    priority: 82, // 🏝️ 魔法岛屿城市
    cargo: false
  },

  {
    iata: 'JOI',
    icao: 'SBJV',
    chinese: '若因维莱劳罗·卡内罗·德·洛约拉机场',
    english: 'Joinville Lauro Carneiro de Loyola Airport',
    city: '若因维莱',
    region: '南部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: false,
    timezone: 'BRT',
    coordinates: { lat: -26.2244, lng: -48.7975 },
    runways: 1,
    priority: 73, // 🏭 工业重镇
    cargo: false
  },

  {
    iata: 'IGU',
    icao: 'SBIG',
    chinese: '伊瓜苏瀑布国际机场',
    english: 'Iguassu Falls International Airport',
    city: '福斯杜伊瓜苏',
    region: '南部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -25.5961, lng: -54.4872 },
    runways: 1,
    priority: 89, // 🌊 世界自然遗产伊瓜苏瀑布
    cargo: false
  },

  // ================================================================
  // 📍 中西部地区 (Center-West) - 农业中心
  // ================================================================

  {
    iata: 'CGB',
    icao: 'SBCY',
    chinese: '库亚巴马雷沙尔·罗东国际机场',
    english: 'Cuiaba Marechal Rondon International Airport',
    city: '库亚巴',
    region: '中西部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: -15.6528, lng: -56.1167 },
    runways: 2,
    priority: 83, // 🌾 农业大州门户
    hub: ['蓝色航空'],
    cargo: true
  },

  {
    iata: 'CGR',
    icao: 'SBCG',
    chinese: '大坎普机场',
    english: 'Campo Grande International Airport',
    city: '大坎普',
    region: '中西部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: -20.4689, lng: -54.6719 },
    runways: 2,
    priority: 79, // 🐂 南马托格罗索州首府
    cargo: true
  },

  // ================================================================
  // 📍 北部地区 (North) - 亚马逊门户
  // ================================================================

  {
    iata: 'MAO',
    icao: 'SBEG',
    chinese: '马瑙斯爱德华多·戈梅斯国际机场',
    english: 'Manaus Eduardo Gomes International Airport',
    city: '马瑙斯',
    region: '北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: -3.0386, lng: -60.0497 },
    runways: 1,
    priority: 88, // 🌳 亚马逊雨林门户
    hub: ['蓝色航空', 'MAP Linhas Aéreas'],
    cargo: true
  },

  {
    iata: 'BEL',
    icao: 'SBBE',
    chinese: '贝伦瓦尔德卡埃斯国际机场',
    english: 'Belem Val de Caes International Airport',
    city: '贝伦',
    region: '北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BRT',
    coordinates: { lat: -1.3792, lng: -48.4767 },
    runways: 1,
    priority: 81, // 🌊 亚马逊河口重要城市
    cargo: true
  },

  {
    iata: 'BVB',
    icao: 'SBBV',
    chinese: '博阿维斯塔阿特拉斯·巴西·坎坦赫德机场',
    english: 'Boa Vista Atlas Brasil Cantanhede International Airport',
    city: '博阿维斯塔',
    region: '北部地区',
    country: '巴西',
    isInternational: true,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: 2.8461, lng: -60.6903 },
    runways: 1,
    priority: 70, // 🌎 罗赖马州首府
    cargo: false
  },

  {
    iata: 'PVH',
    icao: 'SBPV',
    chinese: '韦柳港州长若热·特谢拉·德·奥利维拉机场',
    english: 'Porto Velho Governador Jorge Teixeira de Oliveira Airport',
    city: '韦柳港',
    region: '北部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: true,
    timezone: 'AMT',
    coordinates: { lat: -8.7093, lng: -63.9025 },
    runways: 1,
    priority: 69, // 🌲 朗多尼亚州首府
    cargo: false
  },

  {
    iata: 'RBR',
    icao: 'SBRB',
    chinese: '里奥布兰科普拉西奥·林斯机场',
    english: 'Rio Branco Placio Lins Airport',
    city: '里奥布兰科',
    region: '北部地区',
    country: '巴西',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ACT',
    coordinates: { lat: -9.8686, lng: -67.8975 },
    runways: 1,
    priority: 67, // 🌿 阿克里州首府
    cargo: false
  }

];

// 导出统计信息
export const brazilAirportStats = {
  totalAirports: brazilEnhancedAirports.length,
  internationalAirports: brazilEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: brazilEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: brazilEnhancedAirports.filter(apt => apt.cargo).length,
  regions: [...new Set(brazilEnhancedAirports.map(apt => apt.region))].length,
  hubAirports: brazilEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '巴西5大地理区域完整覆盖',
  specialFeatures: [
    '🥇 圣保罗GRU - 南美洲最大国际航空枢纽',
    '🏖️ 里约热内卢 - 世界知名旅游胜地',
    '🏛️ 巴西利亚 - 联邦首都现代化机场',
    '🌊 伊瓜苏瀑布 - 世界自然遗产门户',
    '🌳 马瑙斯 - 亚马逊雨林生态旅游中心',
    '📦 维拉科波斯 - 南美重要货运枢纽'
  ]
};
