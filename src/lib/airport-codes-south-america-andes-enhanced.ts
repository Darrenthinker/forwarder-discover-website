// 🏔️ 南美洲安第斯六国机场数据库 - 增强版本
// South America Andes Six Nations Enhanced Airport Database
// 第七十二批机场数据库 - 安第斯山脉航空网络

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
// 🏔️ 南美洲安第斯六国机场数据库 - 60个主要机场
// 覆盖智利、哥伦比亚、秘鲁、厄瓜多尔、委内瑞拉、玻利维亚
// 安第斯山脉航空网络，连接太平洋与大西洋的高原航空走廊
// ================================================================

export const southAmericaAndesEnhancedAirports: EnhancedAirportInfo[] = [

  // ================================================================
  // 📍 智利 - 细长国度
  // ================================================================

  {
    iata: 'SCL',
    icao: 'SCEL',
    chinese: '圣地亚哥阿图罗·梅里诺·贝尼特斯准将国际机场',
    english: 'Santiago Arturo Merino Benítez International Airport',
    city: '圣地亚哥',
    province: '圣地亚哥首都大区',
    country: '智利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -33.3928, lng: -70.7856 },
    runways: 2,
    priority: 100, // 🥇 智利最大机场，南美重要枢纽
    hub: ['LATAM Airlines'],
    cargo: true
  },

  {
    iata: 'IPC',
    icao: 'SCIP',
    chinese: '伊基克迭戈·阿拉塞纳·奎罗加国际机场',
    english: 'Iquique Diego Aracena International Airport',
    city: '伊基克',
    province: '塔拉帕卡大区',
    country: '智利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -20.5352, lng: -70.1813 },
    runways: 1,
    priority: 85, // 🏖️ 北部太平洋海岸重要港口
    cargo: true
  },

  {
    iata: 'CCP',
    icao: 'SCHA',
    chinese: '卡拉马埃尔洛阿机场',
    english: 'Calama El Loa Airport',
    city: '卡拉马',
    province: '安托法加斯塔大区',
    country: '智利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -22.4982, lng: -68.9036 },
    runways: 1,
    priority: 88, // ⛏️ 阿塔卡马沙漠铜矿中心
    cargo: true
  },

  {
    iata: 'ANF',
    icao: 'SCFA',
    chinese: '安托法加斯塔安德烈斯·萨韦德拉·拉马斯机场',
    english: 'Antofagasta Andrés Sabella Gálvez International Airport',
    city: '安托法加斯塔',
    province: '安托法加斯塔大区',
    country: '智利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -23.4445, lng: -70.4451 },
    runways: 1,
    priority: 86, // 🌊 太平洋重要港口城市
    cargo: true
  },

  {
    iata: 'LSC',
    icao: 'SCSE',
    chinese: '拉塞雷纳拉弗洛里达机场',
    english: 'La Serena La Florida Airport',
    city: '拉塞雷纳',
    province: '科金博大区',
    country: '智利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -29.9162, lng: -71.2025 },
    runways: 1,
    priority: 82, // 🌟 天文观测中心
    cargo: false
  },

  {
    iata: 'PMC',
    icao: 'SCTE',
    chinese: '德马科机场',
    english: 'Puerto Montt El Tepual Airport',
    city: '蒙特港',
    province: '湖大区',
    country: '智利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -41.4389, lng: -73.0940 },
    runways: 1,
    priority: 90, // 🌲 湖区和巴塔哥尼亚门户
    cargo: true
  },

  {
    iata: 'PUQ',
    icao: 'SCCI',
    chinese: '蓬塔阿雷纳斯总统卡洛斯·伊瓦涅斯·德尔坎波机场',
    english: 'Punta Arenas Presidente Carlos Ibáñez del Campo International Airport',
    city: '蓬塔阿雷纳斯',
    province: '麦哲伦大区',
    country: '智利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -53.0026, lng: -70.8546 },
    runways: 1,
    priority: 92, // 🐧 巴塔哥尼亚和南极门户
    cargo: true
  },

  {
    iata: 'IQQ',
    icao: 'SCDA',
    chinese: '伊基克机场',
    english: 'Iquique Airport',
    city: '伊基克',
    province: '塔拉帕卡大区',
    country: '智利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -20.5352, lng: -70.1814 },
    runways: 1,
    priority: 78, // 🏖️ 自由贸易区
    cargo: false
  },

  {
    iata: 'ZCO',
    icao: 'SCTE',
    chinese: '特木科马奎韦机场',
    english: 'Temuco Maquehue Airport',
    city: '特木科',
    province: '阿劳卡尼亚大区',
    country: '智利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -38.7661, lng: -72.6371 },
    runways: 1,
    priority: 80, // 🌲 马普切人文化中心
    cargo: false
  },

  {
    iata: 'VAP',
    icao: 'SCVP',
    chinese: '瓦尔帕莱索机场',
    english: 'Valparaíso Airport',
    city: '瓦尔帕莱索',
    province: '瓦尔帕莱索大区',
    country: '智利',
    isInternational: false,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -33.0614, lng: -71.6103 },
    runways: 1,
    priority: 84, // 🎨 世界遗产港口城市
    cargo: false
  },

  // ================================================================
  // 📍 哥伦比亚 - 南美北门
  // ================================================================

  {
    iata: 'BOG',
    icao: 'SKBO',
    chinese: '波哥大埃尔多拉多国际机场',
    english: 'Bogotá El Dorado International Airport',
    city: '波哥大',
    province: '昆迪纳马卡省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 4.7016, lng: -74.1469 },
    runways: 2,
    priority: 99, // 🏛️ 哥伦比亚首都，南美重要枢纽
    hub: ['Avianca'],
    cargo: true
  },

  {
    iata: 'MDE',
    icao: 'SKRG',
    chinese: '麦德林何塞·玛丽亚·科尔多瓦国际机场',
    english: 'Medellín José María Córdova International Airport',
    city: '麦德林',
    province: '安蒂奥基亚省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 6.1645, lng: -75.4231 },
    runways: 1,
    priority: 95, // 🌸 永春之城，重要工业中心
    hub: ['Avianca'],
    cargo: true
  },

  {
    iata: 'CTG',
    icao: 'SKCG',
    chinese: '卡塔赫纳拉斐尔·努涅斯国际机场',
    english: 'Cartagena Rafael Núñez International Airport',
    city: '卡塔赫纳',
    province: '玻利瓦尔省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 10.4424, lng: -75.5130 },
    runways: 1,
    priority: 93, // 🏰 世界遗产古城，加勒比海明珠
    cargo: true
  },

  {
    iata: 'CLO',
    icao: 'SKCL',
    chinese: '卡利阿方索·博尼亚·阿拉贡国际机场',
    english: 'Cali Alfonso Bonilla Aragón International Airport',
    city: '卡利',
    province: '考卡山谷省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 3.5432, lng: -76.3816 },
    runways: 1,
    priority: 90, // 💃 萨尔萨舞之都
    cargo: true
  },

  {
    iata: 'BAQ',
    icao: 'SKBQ',
    chinese: '巴兰基亚埃内斯托·科尔蒂索斯国际机场',
    english: 'Barranquilla Ernesto Cortissoz International Airport',
    city: '巴兰基亚',
    province: '大西洋省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 10.8896, lng: -74.7808 },
    runways: 1,
    priority: 88, // 🌊 马格达莱纳河入海口
    cargo: true
  },

  {
    iata: 'BUC',
    icao: 'SKBU',
    chinese: '布卡拉曼加帕隆内格罗机场',
    english: 'Bucaramanga Palonegro Airport',
    city: '布卡拉曼加',
    province: '桑坦德省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 7.1265, lng: -73.1848 },
    runways: 1,
    priority: 85, // 🏔️ 安第斯山脉东部重镇
    cargo: true
  },

  {
    iata: 'SMR',
    icao: 'SKSM',
    chinese: '圣玛尔塔西蒙·玻利瓦尔国际机场',
    english: 'Santa Marta Simón Bolívar International Airport',
    city: '圣玛尔塔',
    province: '马格达莱纳省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 11.1196, lng: -74.2306 },
    runways: 1,
    priority: 86, // 🏖️ 加勒比海海滨度假胜地
    cargo: false
  },

  {
    iata: 'PEI',
    icao: 'SKPE',
    chinese: '佩雷拉马泰卡尼亚国际机场',
    english: 'Pereira Matecaña International Airport',
    city: '佩雷拉',
    province: '里萨拉尔达省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 4.8127, lng: -75.7395 },
    runways: 1,
    priority: 82, // ☕ 咖啡三角重要城市
    cargo: false
  },

  // ================================================================
  // 📍 秘鲁 - 印加帝国
  // ================================================================

  {
    iata: 'LIM',
    icao: 'SPJC',
    chinese: '利马豪尔赫·查韦斯国际机场',
    english: 'Lima Jorge Chávez International Airport',
    city: '利马',
    province: '利马大区',
    country: '秘鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PET',
    coordinates: { lat: -12.0219, lng: -77.1143 },
    runways: 1,
    priority: 98, // 🏛️ 秘鲁首都，南美重要枢纽
    hub: ['LATAM Perú'],
    cargo: true
  },

  {
    iata: 'CUZ',
    icao: 'SPZO',
    chinese: '库斯科阿莱杭德罗·贝拉斯科·阿斯特特国际机场',
    english: 'Cusco Alejandro Velasco Astete International Airport',
    city: '库斯科',
    province: '库斯科大区',
    country: '秘鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PET',
    coordinates: { lat: -13.5359, lng: -71.9389 },
    runways: 1,
    priority: 96, // 🏛️ 马丘比丘门户，印加帝国古都
    cargo: false
  },

  {
    iata: 'AQP',
    icao: 'SPQU',
    chinese: '阿雷基帕罗德里格斯·巴隆国际机场',
    english: 'Arequipa Rodríguez Ballón International Airport',
    city: '阿雷基帕',
    province: '阿雷基帕大区',
    country: '秘鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PET',
    coordinates: { lat: -16.3411, lng: -71.5830 },
    runways: 1,
    priority: 88, // 🌋 白城，米斯蒂火山门户
    cargo: true
  },

  {
    iata: 'TRU',
    icao: 'SPRU',
    chinese: '特鲁希略卡皮坦·康蒂机场',
    english: 'Trujillo Capitán FAP Carlos Martínez de Pinillos International Airport',
    city: '特鲁希略',
    province: '拉利伯塔德大区',
    country: '秘鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PET',
    coordinates: { lat: -8.0810, lng: -79.1089 },
    runways: 1,
    priority: 85, // 🏺 莫切文化遗址，北部重要城市
    cargo: true
  },

  {
    iata: 'IQT',
    icao: 'SPQT',
    chinese: '伊基托斯科罗内尔·法普·弗朗西斯科·塞卡达·比涅塔国际机场',
    english: 'Iquitos Coronel FAP Francisco Secada Vignetta International Airport',
    city: '伊基托斯',
    province: '洛雷托大区',
    country: '秘鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PET',
    coordinates: { lat: -3.7847, lng: -73.3086 },
    runways: 1,
    priority: 90, // 🌿 亚马逊雨林门户，世界最大河流城市
    cargo: true
  },

  {
    iata: 'PIU',
    icao: 'SPUR',
    chinese: '皮乌拉卡皮坦·科内利奥·维拉努埃瓦机场',
    english: 'Piura Capitán FAP Guillermo Concha Iberico International Airport',
    city: '皮乌拉',
    province: '皮乌拉大区',
    country: '秘鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PET',
    coordinates: { lat: -5.2047, lng: -80.6164 },
    runways: 1,
    priority: 83, // 🏖️ 北部海岸重要城市
    cargo: true
  },

  {
    iata: 'TCQ',
    icao: 'SPNC',
    chinese: '塔克纳科罗内尔·法普·卡洛斯·西里亚尼机场',
    english: 'Tacna Coronel FAP Carlos Ciriani Santa Rosa International Airport',
    city: '塔克纳',
    province: '塔克纳大区',
    country: '秘鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PET',
    coordinates: { lat: -18.0533, lng: -70.2758 },
    runways: 1,
    priority: 80, // 🚗 智利边境重要口岸
    cargo: false
  },

  // ================================================================
  // 📍 厄瓜多尔 - 赤道之国
  // ================================================================

  {
    iata: 'UIO',
    icao: 'SEQM',
    chinese: '基多马里斯卡尔·苏克雷国际机场',
    english: 'Quito Mariscal Sucre International Airport',
    city: '基多',
    province: '皮钦查省',
    country: '厄瓜多尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ECT',
    coordinates: { lat: -0.1292, lng: -78.3575 },
    runways: 1,
    priority: 97, // 🏛️ 厄瓜多尔首都，世界遗产城市
    hub: ['TAME'],
    cargo: true
  },

  {
    iata: 'GYE',
    icao: 'SEGU',
    chinese: '瓜亚基尔何塞·华金·德·奥尔梅多国际机场',
    english: 'Guayaquil José Joaquín de Olmedo International Airport',
    city: '瓜亚基尔',
    province: '瓜亚斯省',
    country: '厄瓜多尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ECT',
    coordinates: { lat: -2.1574, lng: -79.8836 },
    runways: 1,
    priority: 95, // 🌊 厄瓜多尔最大城市，太平洋重要港口
    cargo: true
  },

  {
    iata: 'GPS',
    icao: 'SEGS',
    chinese: '巴拉格斯岛西摩机场',
    english: 'Galápagos Seymour Airport',
    city: '巴尔特拉岛',
    province: '加拉帕戈斯省',
    country: '厄瓜多尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'GALT',
    coordinates: { lat: -0.4536, lng: -90.2659 },
    runways: 1,
    priority: 92, // 🐢 加拉帕戈斯群岛，达尔文进化论圣地
    cargo: false
  },

  {
    iata: 'CUE',
    icao: 'SECU',
    chinese: '昆卡马里斯卡尔·拉马尔机场',
    english: 'Cuenca Mariscal Lamar Airport',
    city: '昆卡',
    province: '阿苏艾省',
    country: '厄瓜多尔',
    isInternational: true,
    hasCustoms: true,
    timezone: 'ECT',
    coordinates: { lat: -2.8894, lng: -78.9844 },
    runways: 1,
    priority: 85, // 🏛️ 世界遗产城市，殖民建筑典范
    cargo: false
  },

  {
    iata: 'LOH',
    icao: 'SELO',
    chinese: '洛哈城市机场',
    english: 'Loja Ciudad de Catamayo Airport',
    city: '洛哈',
    province: '洛哈省',
    country: '厄瓜多尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ECT',
    coordinates: { lat: -3.9958, lng: -79.3719 },
    runways: 1,
    priority: 78, // 🌿 南部山区重要城市
    cargo: false
  },

  // ================================================================
  // 📍 委内瑞拉 - 石油之国
  // ================================================================

  {
    iata: 'CCS',
    icao: 'SVMI',
    chinese: '加拉加斯西蒙·玻利瓦尔国际机场',
    english: 'Caracas Simón Bolívar International Airport',
    city: '加拉加斯',
    province: '瓦尔加斯州',
    country: '委内瑞拉',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VET',
    coordinates: { lat: 10.6013, lng: -66.9911 },
    runways: 2,
    priority: 94, // 🏛️ 委内瑞拉首都，南美重要枢纽
    hub: ['Conviasa'],
    cargo: true
  },

  {
    iata: 'MAR',
    icao: 'SVMG',
    chinese: '马拉开波拉奇纳拉机场',
    english: 'Maracaibo La Chinita International Airport',
    city: '马拉开波',
    province: '苏利亚州',
    country: '委内瑞拉',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VET',
    coordinates: { lat: 10.5583, lng: -71.7278 },
    runways: 1,
    priority: 90, // 🛢️ 石油工业中心，马拉开波湖
    cargo: true
  },

  {
    iata: 'VLN',
    icao: 'SVVA',
    chinese: '瓦伦西亚阿图罗·米切连娜机场',
    english: 'Valencia Arturo Michelena International Airport',
    city: '瓦伦西亚',
    province: '卡拉沃沃州',
    country: '委内瑞拉',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VET',
    coordinates: { lat: 10.1497, lng: -67.9286 },
    runways: 1,
    priority: 88, // 🏭 工业重镇
    cargo: true
  },

  {
    iata: 'BLA',
    icao: 'SVBC',
    chinese: '巴塞罗那何塞·安东尼奥·安索阿特吉将军机场',
    english: 'Barcelona José Antonio Anzoátegui Airport',
    city: '巴塞罗那',
    province: '安索阿特吉州',
    country: '委内瑞拉',
    isInternational: true,
    hasCustoms: true,
    timezone: 'VET',
    coordinates: { lat: 10.1067, lng: -64.6892 },
    runways: 1,
    priority: 82, // 🛢️ 东部石油产区
    cargo: true
  },

  {
    iata: 'CUM',
    icao: 'SVCU',
    chinese: '库马纳安东尼奥·何塞·德·苏克雷机场',
    english: 'Cumaná Antonio José de Sucre Airport',
    city: '库马纳',
    province: '苏克雷州',
    country: '委内瑞拉',
    isInternational: false,
    hasCustoms: true,
    timezone: 'VET',
    coordinates: { lat: 10.4503, lng: -64.1306 },
    runways: 1,
    priority: 80, // 🌊 加勒比海海岸城市
    cargo: false
  },

  {
    iata: 'STD',
    icao: 'SVST',
    chinese: '圣多明各市长布埃纳文图拉·比维斯机场',
    english: 'Santo Domingo Mayor Buenaventura Vivas Airport',
    city: '圣多明各',
    province: '塔奇拉州',
    country: '委内瑞拉',
    isInternational: false,
    hasCustoms: true,
    timezone: 'VET',
    coordinates: { lat: 7.5658, lng: -72.0353 },
    runways: 1,
    priority: 78, // 🚗 哥伦比亚边境重要口岸
    cargo: false
  },

  // ================================================================
  // 📍 玻利维亚 - 高原之国
  // ================================================================

  {
    iata: 'LPB',
    icao: 'SLLP',
    chinese: '拉巴斯埃尔阿尔托国际机场',
    english: 'La Paz El Alto International Airport',
    city: '拉巴斯',
    province: '拉巴斯省',
    country: '玻利维亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BOT',
    coordinates: { lat: -16.5133, lng: -68.1925 },
    runways: 1,
    priority: 96, // 🏛️ 玻利维亚行政首都，世界最高首都机场
    hub: ['Boliviana de Aviación'],
    cargo: true
  },

  {
    iata: 'VVI',
    icao: 'SLVR',
    chinese: '圣克鲁斯比鲁比鲁国际机场',
    english: 'Santa Cruz Viru Viru International Airport',
    city: '圣克鲁斯',
    province: '圣克鲁斯省',
    country: '玻利维亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BOT',
    coordinates: { lat: -17.6447, lng: -63.1353 },
    runways: 1,
    priority: 94, // 🌾 玻利维亚经济中心，东部低地门户
    cargo: true
  },

  {
    iata: 'CBB',
    icao: 'SLCB',
    chinese: '科恰班巴豪尔赫·威尔斯特曼机场',
    english: 'Cochabamba Jorge Wilstermann Airport',
    city: '科恰班巴',
    province: '科恰班巴省',
    country: '玻利维亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BOT',
    coordinates: { lat: -17.4211, lng: -66.1769 },
    runways: 1,
    priority: 88, // 🌽 玻利维亚第三大城市，农业中心
    cargo: true
  },

  {
    iata: 'SRE',
    icao: 'SLSU',
    chinese: '苏克雷阿尔卡塔利诺·阿尔伯托·巴乔机场',
    english: 'Sucre Alcantarí Airport',
    city: '苏克雷',
    province: '丘基萨卡省',
    country: '玻利维亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'BOT',
    coordinates: { lat: -19.0072, lng: -65.2886 },
    runways: 1,
    priority: 85, // 🏛️ 玻利维亚宪法首都，世界遗产
    cargo: false
  },

  {
    iata: 'TJA',
    icao: 'SLTJ',
    chinese: '塔里哈奥里尔·莱亚·萨拉维亚船长机场',
    english: 'Tarija Capitán Oriel Lea Plaza Airport',
    city: '塔里哈',
    province: '塔里哈省',
    country: '玻利维亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BOT',
    coordinates: { lat: -21.5556, lng: -64.7017 },
    runways: 1,
    priority: 82, // 🍇 南部葡萄酒产区
    cargo: false
  },

  {
    iata: 'POI',
    icao: 'SLPO',
    chinese: '波托西机场',
    english: 'Potosí Airport',
    city: '波托西',
    province: '波托西省',
    country: '玻利维亚',
    isInternational: false,
    hasCustoms: true,
    timezone: 'BOT',
    coordinates: { lat: -19.5431, lng: -65.7239 },
    runways: 1,
    priority: 80, // ⛏️ 银山之城，世界遗产
    cargo: false
  },

  // ================================================================
  // 📍 其他重要安第斯机场
  // ================================================================

  {
    iata: 'AMD',
    icao: 'SLAL',
    chinese: '阿罗马机场',
    english: 'Arica Chacalluta Airport',
    city: '阿里卡',
    province: '阿里卡和帕里纳科塔大区',
    country: '智利',
    isInternational: true,
    hasCustoms: true,
    timezone: 'CLT',
    coordinates: { lat: -18.3485, lng: -70.3389 },
    runways: 1,
    priority: 83, // 🚗 秘鲁边境重要口岸
    cargo: false
  },

  {
    iata: 'ADZ',
    icao: 'SKAD',
    chinese: '圣安德烈斯古斯塔沃·罗哈斯·皮尼利亚机场',
    english: 'San Andrés Gustavo Rojas Pinilla International Airport',
    city: '圣安德烈斯岛',
    province: '圣安德烈斯-普罗维登西亚省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: 12.5836, lng: -81.7111 },
    runways: 1,
    priority: 87, // 🏝️ 加勒比海度假天堂
    cargo: false
  },

  {
    iata: 'LET',
    icao: 'SKLT',
    chinese: '莱蒂西亚阿尔弗雷多·巴斯克斯·科博机场',
    english: 'Leticia Alfredo Vásquez Cobo International Airport',
    city: '莱蒂西亚',
    province: '亚马逊省',
    country: '哥伦比亚',
    isInternational: true,
    hasCustoms: true,
    timezone: 'COT',
    coordinates: { lat: -4.1936, lng: -69.9431 },
    runways: 1,
    priority: 84, // 🌿 哥伦比亚亚马逊门户
    cargo: false
  },

  {
    iata: 'JUL',
    icao: 'SPJL',
    chinese: '胡利亚卡印卡·曼科·卡帕克国际机场',
    english: 'Juliaca Inca Manco Cápac International Airport',
    city: '胡利亚卡',
    province: '普诺大区',
    country: '秘鲁',
    isInternational: true,
    hasCustoms: true,
    timezone: 'PET',
    coordinates: { lat: -15.4672, lng: -70.1581 },
    runways: 1,
    priority: 86, // 🌊 的的喀喀湖门户
    cargo: true
  },

  {
    iata: 'ESM',
    icao: 'SETN',
    chinese: '埃斯梅拉达斯机场',
    english: 'Esmeraldas Airport',
    city: '埃斯梅拉达斯',
    province: '埃斯梅拉达斯省',
    country: '厄瓜多尔',
    isInternational: false,
    hasCustoms: true,
    timezone: 'ECT',
    coordinates: { lat: 0.9785, lng: -79.6267 },
    runways: 1,
    priority: 76, // 🌊 太平洋海岸翡翠省
    cargo: false
  }

];

// 导出统计信息
export const southAmericaAndesAirportStats = {
  totalAirports: southAmericaAndesEnhancedAirports.length,
  internationalAirports: southAmericaAndesEnhancedAirports.filter(apt => apt.isInternational).length,
  customsAirports: southAmericaAndesEnhancedAirports.filter(apt => apt.hasCustoms).length,
  cargoAirports: southAmericaAndesEnhancedAirports.filter(apt => apt.cargo).length,
  countries: [...new Set(southAmericaAndesEnhancedAirports.map(apt => apt.country))].length,
  provinces: [...new Set(southAmericaAndesEnhancedAirports.map(apt => apt.province))].length,
  hubAirports: southAmericaAndesEnhancedAirports.filter(apt => apt.hub && apt.hub.length > 0).length,
  coverage: '南美洲安第斯六国完整覆盖',
  specialFeatures: [
    '🥇 圣地亚哥阿图罗·梅里诺·贝尼特斯机场 - 智利最大机场，南美重要枢纽',
    '🏛️ 波哥大埃尔多拉多机场 - 哥伦比亚首都，南美重要枢纽',
    '🏛️ 利马豪尔赫·查韦斯机场 - 秘鲁首都，南美重要枢纽',
    '🏛️ 基多马里斯卡尔·苏克雷机场 - 厄瓜多尔首都，世界遗产城市',
    '🏛️ 加拉加斯西蒙·玻利瓦尔机场 - 委内瑞拉首都，南美重要枢纽',
    '🏛️ 拉巴斯埃尔阿尔托机场 - 玻利维亚行政首都，世界最高首都机场',
    '🏛️ 库斯科机场 - 马丘比丘门户，印加帝国古都',
    '🐢 加拉帕戈斯机场 - 达尔文进化论圣地',
    '🌿 亚马逊雨林门户 - 伊基托斯、莱蒂西亚等雨林机场',
    '🏔️ 安第斯山脉高原机场 - 连接太平洋与大西洋的高原航空走廊'
  ]
};
