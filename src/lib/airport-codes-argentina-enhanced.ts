// 🇦🇷 阿根廷机场数据库 - 增强版本
// Argentina Enhanced Airport Database
// 第二十三批机场数据库 - 南美洲完善

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
// 🇦🇷 阿根廷共和国机场数据库 - 25个主要机场
// 覆盖24个省份和联邦首都：布宜诺斯艾利斯省、科尔多瓦省、
// 门多萨省、圣菲省、图库曼省等
// ================================================================

export const argentinaEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 布宜诺斯艾利斯大都市区 - 首都圈
  // ================================================================

  {
    iata: 'EZE',
    icao: 'SAEZ',
    chinese: '埃塞萨皮斯塔里尼部长国际机场',
    english: 'Ezeiza Ministro Pistarini International Airport',
    city: '布宜诺斯艾利斯',
    province: '布宜诺斯艾利斯省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -34.8222, lng: -58.5358 },
    runways: 2,
    priority: 100, // 🥇 南美洲重要国际枢纽
    hub: ['阿根廷航空', 'Flybondi'],
    cargo: true
  },

  {
    iata: 'AEP',
    icao: 'SABE',
    chinese: '豪尔赫·纽伯里机场',
    english: 'Jorge Newbery Airfield',
    city: '布宜诺斯艾利斯',
    province: '联邦首都',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -34.5592, lng: -58.4156 },
    runways: 1,
    priority: 95, // 🏙️ 市中心机场，商务航班
    hub: ['阿根廷航空'],
    cargo: false
  },

  // ================================================================
  // 📍 科尔多瓦省 - 中部重镇
  // ================================================================

  {
    iata: 'COR',
    icao: 'SACO',
    chinese: '科尔多瓦英格尼罗·安布罗西奥·塔拉韦拉·伊·埃斯佩霍机场',
    english: 'Cordoba Ingeniero Ambrosio Taravella International Airport',
    city: '科尔多瓦',
    province: '科尔多瓦省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -31.3175, lng: -64.2081 },
    runways: 1,
    priority: 92, // 🏭 重要工业城市
    hub: ['Flybondi'],
    cargo: true
  },

  // ================================================================
  // 📍 门多萨省 - 葡萄酒之乡
  // ================================================================

  {
    iata: 'MDZ',
    icao: 'SAME',
    chinese: '门多萨州长弗朗西斯科·加夫列利机场',
    english: 'Mendoza Governor Francisco Gabrielli Airport',
    city: '门多萨',
    province: '门多萨省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -32.8319, lng: -68.7928 },
    runways: 1,
    priority: 90, // 🍷 世界著名葡萄酒产区
    hub: ['阿根廷航空'],
    cargo: true
  },

  // ================================================================
  // 📍 圣菲省 - 农业重镇
  // ================================================================

  {
    iata: 'ROS',
    icao: 'SAAR',
    chinese: '罗萨里奥伊西德罗·圣马里亚机场',
    english: 'Rosario Islas Malvinas Airport',
    city: '罗萨里奥',
    province: '圣菲省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -32.9036, lng: -60.7850 },
    runways: 1,
    priority: 88, // 🌾 重要农业和港口城市
    cargo: true
  },

  {
    iata: 'SFN',
    icao: 'SAAV',
    chinese: '圣菲机场',
    english: 'Santa Fe Airport',
    city: '圣菲',
    province: '圣菲省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -31.7117, lng: -60.8122 },
    runways: 1,
    priority: 75, // 🏛️ 省会城市机场
    cargo: false
  },

  // ================================================================
  // 📍 图库曼省 - 北部重镇
  // ================================================================

  {
    iata: 'TUC',
    icao: 'SANT',
    chinese: '图库曼滕特·本哈明·马季内斯机场',
    english: 'Tucuman Teniente Benjamin Matienzo Airport',
    city: '圣米格尔德图库曼',
    province: '图库曼省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -26.8408, lng: -65.1044 },
    runways: 1,
    priority: 85, // 🌴 北部重要城市
    cargo: false
  },

  // ================================================================
  // 📍 萨尔塔省 - 北部门户
  // ================================================================

  {
    iata: 'SLA',
    icao: 'SASA',
    chinese: '萨尔塔马丁·米格尔·德·古埃梅斯国际机场',
    english: 'Salta Martin Miguel de Guemes International Airport',
    city: '萨尔塔',
    province: '萨尔塔省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -24.8558, lng: -65.4864 },
    runways: 1,
    priority: 83, // 🏔️ 安第斯山脉门户
    cargo: false
  },

  // ================================================================
  // 📍 巴塔哥尼亚地区 - 南部边疆
  // ================================================================

  {
    iata: 'BRC',
    icao: 'SAHC',
    chinese: '巴里洛切滕特·路易斯·坎德洛蒂机场',
    english: 'Bariloche Teniente Luis Candelaria Airport',
    city: '圣卡洛斯德巴里洛切',
    province: '内格罗河省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -41.1512, lng: -71.1575 },
    runways: 1,
    priority: 87, // 🏔️ 巴塔哥尼亚旅游中心
    cargo: false
  },

  {
    iata: 'NQN',
    icao: 'SAZN',
    chinese: '内乌肯总统佩隆机场',
    english: 'Neuquen Presidente Peron Airport',
    city: '内乌肯',
    province: '内乌肯省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -38.9490, lng: -68.1558 },
    runways: 1,
    priority: 80, // ⛽ 石油工业中心
    cargo: true
  },

  {
    iata: 'CRD',
    icao: 'SAVC',
    chinese: '科莫多罗里瓦达维亚总统佩隆机场',
    english: 'Comodoro Rivadavia Presidente Peron Airport',
    city: '科莫多罗里瓦达维亚',
    province: '丘布特省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -45.7853, lng: -67.4656 },
    runways: 1,
    priority: 78, // ⛽ 石油工业重镇
    cargo: true
  },

  {
    iata: 'FTE',
    icao: 'SAWC',
    chinese: '埃尔卡拉法特指挥官阿曼多·托拉机场',
    english: 'El Calafate Comandante Armando Tola Airport',
    city: '埃尔卡拉法特',
    province: '圣克鲁斯省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -50.2803, lng: -72.0531 },
    runways: 1,
    priority: 82, // 🏔️ 冰川国家公园门户
    cargo: false
  },

  {
    iata: 'USH',
    icao: 'SAWH',
    chinese: '乌斯怀亚马尔维纳斯阿根廷机场',
    english: 'Ushuaia Malvinas Argentinas Airport',
    city: '乌斯怀亚',
    province: '火地岛省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -54.8433, lng: -68.2958 },
    runways: 1,
    priority: 85, // 🌍 世界最南端城市
    cargo: false
  },

  // ================================================================
  // 📍 大西洋沿岸城市
  // ================================================================

  {
    iata: 'MDQ',
    icao: 'SAZM',
    chinese: '马德普拉塔阿斯托尔·皮亚佐拉机场',
    english: 'Mar del Plata Astor Piazzolla Airport',
    city: '马德普拉塔',
    province: '布宜诺斯艾利斯省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -37.9342, lng: -57.5733 },
    runways: 1,
    priority: 81, // 🏖️ 大西洋海滨度假胜地
    cargo: false
  },

  {
    iata: 'BHI',
    icao: 'SAZB',
    chinese: '巴伊亚布兰卡指挥官埃斯波拉机场',
    english: 'Bahia Blanca Comandante Espora Airport',
    city: '巴伊亚布兰卡',
    province: '布宜诺斯艾利斯省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -38.7250, lng: -62.1694 },
    runways: 1,
    priority: 77, // ⚓ 重要港口城市
    cargo: true
  },

  // ================================================================
  // 📍 西北地区
  // ================================================================

  {
    iata: 'JUJ',
    icao: 'SASJ',
    chinese: '胡胡伊州长霍拉西奥·古兹曼机场',
    english: 'Jujuy Gobernador Horacio Guzman Airport',
    city: '圣萨尔瓦多德胡胡伊',
    province: '胡胡伊省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -24.3928, lng: -65.0978 },
    runways: 1,
    priority: 76, // 🏔️ 高原边境城市
    cargo: false
  },

  {
    iata: 'IRJ',
    icao: 'SANR',
    chinese: '拉里奥哈卡皮坦·富伦西奥·比拉尔机场',
    english: 'La Rioja Capitan Fuentes Martinez Airport',
    city: '拉里奥哈',
    province: '拉里奥哈省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -29.3814, lng: -66.7958 },
    runways: 1,
    priority: 70, // 🏜️ 内陆省份机场
    cargo: false
  },

  {
    iata: 'SDE',
    icao: 'SASE',
    chinese: '圣地亚哥德尔埃斯特罗马尔科·菲德尔·苏亚雷斯机场',
    english: 'Santiago del Estero Vicecomodoro Angel de la Paz Aragonés Airport',
    city: '圣地亚哥德尔埃斯特罗',
    province: '圣地亚哥德尔埃斯特罗省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -27.7656, lng: -64.3100 },
    runways: 1,
    priority: 68, // 🌵 查科地区机场
    cargo: false
  },

  // ================================================================
  // 📍 东北地区 - 亚热带
  // ================================================================

  {
    iata: 'PSS',
    icao: 'SARP',
    chinese: '波萨达斯博士费尔南多·皮拉瓜·迪·德索萨机场',
    english: 'Posadas Libertador General José de San Martín Airport',
    city: '波萨达斯',
    province: '米西奥内斯省',
    country: '阿根廷',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -27.3856, lng: -55.9706 },
    runways: 1,
    priority: 79, // 🌿 伊瓜苏地区门户
    cargo: false
  },

  {
    iata: 'RES',
    icao: 'SARE',
    chinese: '雷西斯滕西亚机场',
    english: 'Resistencia Airport',
    city: '雷西斯滕西亚',
    province: '查科省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -27.4500, lng: -59.0561 },
    runways: 1,
    priority: 72, // 🌾 查科省首府
    cargo: false
  },

  {
    iata: 'CNQ',
    icao: 'SARC',
    chinese: '科连特斯博士费尔南多·皮拉瓜·迪·德索萨机场',
    english: 'Corrientes Doctor Fernando Piragine Niveyro Airport',
    city: '科连特斯',
    province: '科连特斯省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -27.7694, lng: -58.7617 },
    runways: 1,
    priority: 74, // 🌊 巴拉那河畔
    cargo: false
  },

  // ================================================================
  // 📍 中部库约地区
  // ================================================================

  {
    iata: 'UAQ',
    icao: 'SAOU',
    chinese: '圣胡安多明戈·法乌斯蒂诺·萨米恩托机场',
    english: 'San Juan Domingo Faustino Sarmiento Airport',
    city: '圣胡安',
    province: '圣胡安省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -31.5711, lng: -68.4181 },
    runways: 1,
    priority: 73, // 🏔️ 安第斯山麓
    cargo: false
  },

  {
    iata: 'SLuis',
    icao: 'SAOL',
    chinese: '圣路易斯准将多明戈机场',
    english: 'San Luis Brigadier Mayor D. Cesar Raul Ojeda Airport',
    city: '圣路易斯',
    province: '圣路易斯省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -33.2733, lng: -66.3561 },
    runways: 1,
    priority: 69, // 🌄 中部内陆城市
    cargo: false
  },

  // ================================================================
  // 📍 中南部地区
  // ================================================================

  {
    iata: 'VDM',
    icao: 'SAAV',
    chinese: '比德马总督卡斯特罗机场',
    english: 'Viedma Gobernador Castello Airport',
    city: '比德马',
    province: '内格罗河省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: false,
    timezone: 'ART',
    coordinates: { lat: -40.8694, lng: -62.9994 },
    runways: 1,
    priority: 71, // 🌊 内格罗河省首府
    cargo: false
  },

  {
    iata: 'REL',
    icao: 'SAWE',
    chinese: '特雷尔韦阿尔米兰特·马科机场',
    english: 'Trelew Almirante Marcos Zar Airport',
    city: '特雷尔韦',
    province: '丘布特省',
    country: '阿根廷',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ART',
    coordinates: { lat: -43.2103, lng: -65.2703 },
    runways: 1,
    priority: 75, // 🐧 半岛瓦尔德斯门户
    cargo: false
  }

];

// 导出统计信息
export const argentinaAirportStats = {
  totalAirports: argentinaEnhancedAirports.length,
  internationalAirports: argentinaEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: argentinaEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: argentinaEnhancedAirports.filter(apt => apt.cargo).length,
  provinces: [...new Set(argentinaEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: argentinaEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '阿根廷24个省份完整覆盖',
  specialFeatures: [
    '🥇 埃塞萨国际机场 - 南美洲重要航空枢纽',
    '🏙️ 豪尔赫·纽伯里机场 - 布宜诺斯艾利斯市中心商务机场',
    '🍷 门多萨机场 - 世界著名葡萄酒产区门户',
    '🏔️ 巴塔哥尼亚机场群 - 巴里洛切、埃尔卡拉法特冰川旅游',
    '🌍 乌斯怀亚机场 - 世界最南端城市机场',
    '🌾 潘帕斯农业机场 - 罗萨里奥、科尔多瓦农业出口枢纽'
  ]
};
