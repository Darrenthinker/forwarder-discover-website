// 🇱🇾 利比亚机场数据 - 增强版
// Libya Enhanced Airport Data
// 国家代码: LY | 时区: EET (GMT+2) | 货币: LYD (利比亚第纳尔)

export interface EnhancedAirportInfo {
  iata: string;
  icao: string;
  chinese: string;
  english: string;
  country: string;
  type: 'international' | 'domestic' | 'regional' | 'military';
  customs: boolean;
  priority: number; // 1-100, 数字越大优先级越高
  hub?: boolean;
  cargo?: boolean;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  runways?: number;
  timezone?: string;
  elevation?: number; // 米
}

// ================================================================
// 🇱🇾 利比亚国家机场数据库 - 5个主要机场
// 覆盖主要城市：的黎波里、班加西、米苏拉塔
// 北非重要航空枢纽，地中海南岸门户
// ================================================================

export const LIBYA_AIRPORTS: EnhancedAirportInfo[] = [
  
  // ================================================================
  // 📍 的黎波里地区 - 政治经济中心
  // ================================================================

  {
    iata: 'TIP',
    icao: 'HLLT',
    chinese: '的黎波里国际机场',
    english: 'Tripoli International Airport',
    country: '利比亚',
    type: 'international',
    customs: true,
    priority: 95, // 🥇 利比亚最主要国际机场，北非重要门户
    hub: true,
    cargo: true,
    coordinates: {
      latitude: 32.6694,
      longitude: 13.1581
    },
    runways: 2,
    timezone: 'EET',
    elevation: 80 // 263英尺 = 80米
  },

  {
    iata: 'MJI', // 注：一些资料显示为无IATA代码或使用TIP作为主要代码
    icao: 'HLLM',
    chinese: '的黎波里米蒂加机场',
    english: 'Tripoli Mitiga Airport',
    country: '利比亚',
    type: 'international',
    customs: true,
    priority: 88, // 🛡️ 军民两用机场，目前民航主要使用
    hub: false,
    cargo: true,
    coordinates: {
      latitude: 32.8944,
      longitude: 13.2778
    },
    runways: 1,
    timezone: 'EET',
    elevation: 11 // 36英尺 = 11米
  },

  // ================================================================
  // 📍 班加西地区 - 东部经济中心
  // ================================================================

  {
    iata: 'BEN',
    icao: 'HLLB',
    chinese: '班加西贝尼纳国际机场',
    english: 'Benghazi Benina International Airport',
    country: '利比亚',
    type: 'international',
    customs: true,
    priority: 92, // 🏛️ 利比亚东部最重要机场，昔兰尼加地区门户
    hub: true,
    cargo: true,
    coordinates: {
      latitude: 32.0969,
      longitude: 20.2695
    },
    runways: 1,
    timezone: 'EET',
    elevation: 132
  },

  // ================================================================
  // 📍 中部地区机场
  // ================================================================

  {
    iata: 'MRA',
    icao: 'HLMS',
    chinese: '米苏拉塔国际机场',
    english: 'Misrata International Airport',
    country: '利比亚',
    type: 'international',
    customs: true,
    priority: 85, // 🏭 重要工业城市，地中海中部门户
    hub: false,
    cargo: true,
    coordinates: {
      latitude: 32.3256,
      longitude: 15.0619
    },
    runways: 1,
    timezone: 'EET',
    elevation: 60
  },

  // ================================================================
  // 📍 南部地区机场
  // ================================================================

  {
    iata: 'SEB',
    icao: 'HLLS',
    chinese: '塞卜哈机场',
    english: 'Sabha Airport',
    country: '利比亚',
    type: 'domestic',
    customs: false,
    priority: 75, // 🏜️ 南部沙漠地区重要航空枢纽
    hub: false,
    cargo: false,
    coordinates: {
      latitude: 27.0187,
      longitude: 14.4725
    },
    runways: 1,
    timezone: 'EET',
    elevation: 432
  }
];

// ================================================================
// 📊 利比亚机场统计信息
// ================================================================

export const LIBYA_AIRPORT_STATS = {
  totalAirports: 5,
  internationalAirports: 4,
  domesticAirports: 1,
  cargoHubs: 4,
  passengerHubs: 2,
  coverage: '覆盖利比亚主要城市和地区',
  notes: [
    '🛡️ 的黎波里国际机场(TIP)目前因安全原因暂停运营，民航转至米蒂加机场(HLLM)',
    '🌍 班加西贝尼纳机场是利比亚东部最重要的航空门户',
    '🏭 米苏拉塔机场服务重要工业区，连接地中海贸易',
    '🏜️ 塞卜哈机场是连接南部沙漠地区的重要纽带',
    '⚠️ 由于政治局势，部分机场运营状况可能发生变化'
  ]
};

export default LIBYA_AIRPORTS; 