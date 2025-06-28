// 亚洲国际机场三字代码映射表
export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type?: 'international' | 'domestic' | 'regional';
  customs?: boolean;
  priority?: number;
}

// ================================================================
// 亚洲 ASIA - 国际机场代码
// ================================================================

export const asiaAirports: { [key: string]: AirportInfo } = {

  // ================================================================
  // 🇨🇳 中国 CHINA - 国际机场
  // ================================================================

  // 华北地区
  'BJS': { chinese: '北京', english: 'Beijing', country: '中国' },
  'PEK': { chinese: '北京首都', english: 'Beijing Capital', country: '中国' },
  'PKX': { chinese: '北京大兴', english: 'Beijing Daxing', country: '中国' },
  'TSN': { chinese: '天津', english: 'Tianjin', country: '中国' },
  'SJW': { chinese: '石家庄', english: 'Shijiazhuang', country: '中国' },
  'TYN': { chinese: '太原', english: 'Taiyuan', country: '中国' },
  'HET': { chinese: '呼和浩特', english: 'Hohhot', country: '中国' },

  // 华东地区
  'PVG': { chinese: '上海浦东', english: 'Shanghai Pudong', country: '中国' },
  'SHA': { chinese: '上海虹桥', english: 'Shanghai Hongqiao', country: '中国' },
  'NKG': { chinese: '南京', english: 'Nanjing', country: '中国' },
  'HGH': { chinese: '杭州', english: 'Hangzhou', country: '中国' },
  'NGB': { chinese: '宁波', english: 'Ningbo', country: '中国' },
  'WNZ': { chinese: '温州', english: 'Wenzhou', country: '中国' },
  'HFE': { chinese: '合肥', english: 'Hefei', country: '中国' },
  'JNA': { chinese: '济南', english: 'Jinan', country: '中国' },
  'TAO': { chinese: '青岛', english: 'Qingdao', country: '中国' },
  'YNT': { chinese: '烟台', english: 'Yantai', country: '中国' },
  'WEH': { chinese: '威海', english: 'Weihai', country: '中国' },
  'NCG': { chinese: '南昌', english: 'Nanchang', country: '中国' },
  'FOC': { chinese: '福州', english: 'Fuzhou', country: '中国' },
  'XMN': { chinese: '厦门', english: 'Xiamen', country: '中国' },
  'JJN': { chinese: '泉州', english: 'Quanzhou', country: '中国' },

  // 华南地区
  'CAN': { chinese: '广州', english: 'Guangzhou', country: '中国' },
  'SZX': { chinese: '深圳', english: 'Shenzhen', country: '中国' },
  'ZUH': { chinese: '珠海', english: 'Zhuhai', country: '中国' },
  'FOS': { chinese: '佛山', english: 'Foshan', country: '中国' },
  'HAK': { chinese: '海口', english: 'Haikou', country: '中国' },
  'SYX': { chinese: '三亚', english: 'Sanya', country: '中国' },
  'NNG': { chinese: '南宁', english: 'Nanning', country: '中国' },
  'KWL': { chinese: '桂林', english: 'Guilin', country: '中国' },
  'BHY': { chinese: '北海', english: 'Beihai', country: '中国' },

  // 华中地区
  'WUH': { chinese: '武汉', english: 'Wuhan', country: '中国' },
  'CSX': { chinese: '长沙', english: 'Changsha', country: '中国' },
  'CKG': { chinese: '重庆', english: 'Chongqing', country: '中国' },
  'CGO': { chinese: '郑州', english: 'Zhengzhou', country: '中国' },

  // 西南地区
  'CTU': { chinese: '成都', english: 'Chengdu', country: '中国' },
  'KMG': { chinese: '昆明', english: 'Kunming', country: '中国' },
  'GYS': { chinese: '贵阳', english: 'Guiyang', country: '中国' },
  'LJG': { chinese: '丽江', english: 'Lijiang', country: '中国' },
  'DLU': { chinese: '大理', english: 'Dali', country: '中国' },
  'JHG': { chinese: '西双版纳', english: 'Xishuangbanna', country: '中国' },
  'LZY': { chinese: '林芝', english: 'Linzhi', country: '中国' },
  'LXA': { chinese: '拉萨', english: 'Lhasa', country: '中国' },

  // 西北地区
  'XIY': { chinese: '西安', english: 'Xi\'an', country: '中国' },
  'LHW': { chinese: '兰州', english: 'Lanzhou', country: '中国' },
  'INC': { chinese: '银川', english: 'Yinchuan', country: '中国' },
  'XNN': { chinese: '西宁', english: 'Xining', country: '中国' },
  'URC': { chinese: '乌鲁木齐', english: 'Urumqi', country: '中国' },
  'KHG': { chinese: '喀什', english: 'Kashgar', country: '中国' },
  'HTN': { chinese: '和田', english: 'Hotan', country: '中国' },
  'IQN': { chinese: '伊宁', english: 'Yining', country: '中国' },
  'KRL': { chinese: '库尔勒', english: 'Korla', country: '中国' },

  // 东北地区
  'SHE': { chinese: '沈阳', english: 'Shenyang', country: '中国' },
  'DLC': { chinese: '大连', english: 'Dalian', country: '中国' },
  'CGQ': { chinese: '长春', english: 'Changchun', country: '中国' },
  'HRB': { chinese: '哈尔滨', english: 'Harbin', country: '中国' },
  'MDG': { chinese: '牡丹江', english: 'Mudanjiang', country: '中国' },
  'DDG': { chinese: '丹东', english: 'Dandong', country: '中国' },
  'JMU': { chinese: '佳木斯', english: 'Jiamusi', country: '中国' },

  // ================================================================
  // 🇭🇰 香港 HONG KONG - 国际机场
  // ================================================================

  'HKG': { chinese: '香港', english: 'Hong Kong', country: '中国' },

  // ================================================================
  // 🇲🇴 澳门 MACAU - 国际机场
  // ================================================================

  'MFM': { chinese: '澳门', english: 'Macau', country: '中国' },

  // ================================================================
  // 🇹🇼 台湾 TAIWAN - 国际机场
  // ================================================================

  'TPE': { 
    chinese: '台北桃园', 
    english: 'Taipei Taoyuan', 
    country: '台湾',
    type: 'international',
    customs: true,
    priority: 95  // 台湾最大国际机场
  },
  'TSA': { 
    chinese: '台北松山', 
    english: 'Taipei Songshan', 
    country: '台湾',
    type: 'international',
    customs: true,
    priority: 90  // 台北第二机场，重要国际航线
  },
  'KHH': { 
    chinese: '高雄', 
    english: 'Kaohsiung', 
    country: '台湾',
    type: 'international',
    customs: true,
    priority: 85  // 南台湾最大国际机场
  },
  'RMQ': { 
    chinese: '台中', 
    english: 'Taichung', 
    country: '台湾',
    type: 'international',
    customs: true,
    priority: 80  // 中台湾主要国际机场
  },
  'TNN': { 
    chinese: '台南', 
    english: 'Tainan', 
    country: '台湾',
    type: 'domestic',
    customs: false,
    priority: 75  // 重要地区机场
  },
  'HUN': { 
    chinese: '花莲', 
    english: 'Hualien', 
    country: '台湾',
    type: 'domestic',
    customs: false,
    priority: 70  // 东部主要机场
  },
  'TTT': { 
    chinese: '台东', 
    english: 'Taitung', 
    country: '台湾',
    type: 'domestic',
    customs: false,
    priority: 65  // 东部地区机场
  },
  'KNH': { 
    chinese: '金门', 
    english: 'Kinmen', 
    country: '台湾',
    type: 'domestic',
    customs: false,
    priority: 60  // 离岛机场
  },
  'LZN': { 
    chinese: '南竿', 
    english: 'Matsu Nangan', 
    country: '台湾',
    type: 'domestic',
    customs: false,
    priority: 55  // 离岛机场
  },
  'MZG': { 
    chinese: '马公', 
    english: 'Magong', 
    country: '台湾',
    type: 'domestic',
    customs: false,
    priority: 55  // 离岛机场
  },

  // ================================================================
  // 🇯🇵 日本 JAPAN - 国际机场
  // ================================================================

  // 关东地区
  'TYO': { chinese: '东京', english: 'Tokyo', country: '日本' },
  'NRT': { chinese: '东京成田', english: 'Tokyo Narita', country: '日本' },
  'HND': { chinese: '东京羽田', english: 'Tokyo Haneda', country: '日本' },

  // 关西地区
  'KIX': { chinese: '大阪关西', english: 'Osaka Kansai', country: '日本' },
  'ITM': { chinese: '大阪伊丹', english: 'Osaka Itami', country: '日本' },
  'NGO': { chinese: '名古屋', english: 'Nagoya Chubu Centrair', country: '日本' },
  'UKB': { chinese: '神户', english: 'Kobe', country: '日本' },

  // 其他地区
  'CTS': { chinese: '札幌新千岁', english: 'Sapporo Chitose', country: '日本' },
  'FUK': { chinese: '福冈', english: 'Fukuoka', country: '日本' },
  'KMI': { chinese: '宫崎', english: 'Miyazaki', country: '日本' },
  'KMJ': { chinese: '熊本', english: 'Kumamoto', country: '日本' },
  'KGS': { chinese: '鹿儿岛', english: 'Kagoshima', country: '日本' },
  'OKA': { chinese: '冲绳那霸', english: 'Okinawa Naha', country: '日本' },
  'OIT': { chinese: '大分', english: 'Oita', country: '日本' },
  'SDJ': { chinese: '仙台', english: 'Sendai', country: '日本' },
  'KMQ': { chinese: '小松', english: 'Komatsu', country: '日本' },
  'TOY': { chinese: '富山', english: 'Toyama', country: '日本' },
  'HIJ': { chinese: '广岛', english: 'Hiroshima', country: '日本' },
  'OKJ': { chinese: '冈山', english: 'Okayama', country: '日本' },
  'TAK': { chinese: '高松', english: 'Takamatsu', country: '日本' },
  'MYJ': { chinese: '松山', english: 'Matsuyama', country: '日本' },
  'AOJ': { chinese: '青森', english: 'Aomori', country: '日本' },
  'AKJ': { chinese: '旭川', english: 'Asahikawa', country: '日本' },
  'HKD': { chinese: '函馆', english: 'Hakodate', country: '日本' },

  // ================================================================
  // 🇰🇷 韩国 SOUTH KOREA - 国际机场
  // ================================================================

  'ICN': { chinese: '首尔仁川', english: 'Seoul Incheon', country: '韩国' },
  'GMP': { chinese: '首尔金浦', english: 'Seoul Gimpo', country: '韩国' },
  'PUS': { chinese: '釜山', english: 'Busan Gimhae', country: '韩国' },
  'TAE': { chinese: '大邱', english: 'Daegu', country: '韩国' },
  'CJU': { chinese: '济州', english: 'Jeju', country: '韩国' },
  'KWJ': { chinese: '光州', english: 'Gwangju', country: '韩国' },
  'YNY': { chinese: '襄阳', english: 'Yangyang', country: '韩国' },
  'RSU': { chinese: '丽水', english: 'Yeosu', country: '韩国' },
  'CJJ': { chinese: '清州', english: 'Cheongju', country: '韩国' },
  'MWX': { chinese: '务安', english: 'Muan', country: '韩国' },

  // ================================================================
  // 🇰🇵 朝鲜 NORTH KOREA - 国际机场
  // ================================================================

  'FNJ': { chinese: '平壤', english: 'Pyongyang Sunan', country: '朝鲜', type: 'international', customs: true, priority: 90 },

  // ================================================================
  // 🇰🇵 朝鲜 NORTH KOREA - 国内机场
  // ================================================================

  'DSO': { chinese: '善德', english: 'Sondok', country: '朝鲜', type: 'domestic', customs: false, priority: 30 },
  'YJS': { chinese: '三池渊', english: 'Samjiyon', country: '朝鲜', type: 'domestic', customs: false, priority: 25 },
  'WOS': { chinese: '元山', english: 'Wonsan', country: '朝鲜', type: 'domestic', customs: false, priority: 35 },

  // ================================================================
  // 🇹🇭 泰国 THAILAND - 国际机场
  // ================================================================

  'BKK': { chinese: '曼谷素万那普', english: 'Bangkok Suvarnabhumi', country: '泰国' },
  'DMK': { chinese: '曼谷廊曼', english: 'Bangkok Don Mueang', country: '泰国' },
  'HKT': { chinese: '普吉', english: 'Phuket', country: '泰国' },
  'CNX': { chinese: '清迈', english: 'Chiang Mai', country: '泰国' },
  'HDY': { chinese: '合艾', english: 'Hat Yai', country: '泰国' },
  'USM': { chinese: '苏梅', english: 'Koh Samui', country: '泰国' },
  'UTP': { chinese: '芭堤雅', english: 'U-Tapao Pattaya', country: '泰国' },
  'KBV': { chinese: '甲米', english: 'Krabi', country: '泰国' },
  'URT': { chinese: '素叻他尼', english: 'Surat Thani', country: '泰国' },
  'TDX': { chinese: '董里', english: 'Trang', country: '泰国' },
  'NST': { chinese: '洛坤', english: 'Nakhon Si Thammarat', country: '泰国' },
  'CEI': { chinese: '清莱', english: 'Chiang Rai', country: '泰国' },
  'PHS': { chinese: '帕岸', english: 'Phitsanulok', country: '泰国' },
  'LOE': { chinese: '黎府', english: 'Loei', country: '泰国' },
  'ROI': { chinese: '黎逸', english: 'Roi Et', country: '泰国' },
  'KKC': { chinese: '孔敬', english: 'Khon Kaen', country: '泰国' },
  'UBP': { chinese: '乌汶', english: 'Ubon Ratchathani', country: '泰国' },

  // ================================================================
  // 🇸🇬 新加坡 SINGAPORE - 国际机场
  // ================================================================

  'SIN': { chinese: '新加坡', english: 'Singapore Changi', country: '新加坡' },

  // ================================================================
  // 🇲🇾 马来西亚 MALAYSIA - 国际机场
  // ================================================================

  'KUL': { chinese: '吉隆坡', english: 'Kuala Lumpur', country: '马来西亚' },
  'PEN': { chinese: '槟城', english: 'Penang', country: '马来西亚' },
  'JHB': { chinese: '新山', english: 'Johor Bahru', country: '马来西亚' },
  'LGK': { chinese: '兰卡威', english: 'Langkawi', country: '马来西亚' },
  'KCH': { chinese: '古晋', english: 'Kuching', country: '马来西亚' },
  'BKI': { chinese: '亚庇', english: 'Kota Kinabalu', country: '马来西亚' },
  'MYY': { chinese: '美里', english: 'Miri', country: '马来西亚' },
  'KBR': { chinese: '哥打巴鲁', english: 'Kota Bharu', country: '马来西亚' },
  'AOR': { chinese: '亚罗士打', english: 'Alor Setar', country: '马来西亚' },
  'IPH': { chinese: '怡保', english: 'Ipoh', country: '马来西亚' },
  'KUA': { chinese: '关丹', english: 'Kuantan', country: '马来西亚' },
  'LAD': { chinese: '拉布安', english: 'Labuan', country: '马来西亚' },

  // ================================================================
  // 🇮🇩 印度尼西亚 INDONESIA - 国际机场
  // ================================================================

  'CGK': { chinese: '雅加达', english: 'Jakarta Soekarno-Hatta', country: '印尼' },
  'HLP': { chinese: '雅加达哈利姆', english: 'Jakarta Halim Perdanakusuma', country: '印尼' },
  'DPS': { chinese: '巴厘岛', english: 'Bali Ngurah Rai', country: '印尼' },
  'SUB': { chinese: '泗水', english: 'Surabaya Juanda', country: '印尼' },
  'MDN': { chinese: '棉兰', english: 'Medan Kualanamu', country: '印尼' },
  'UPG': { chinese: '望加锡', english: 'Makassar Sultan Hasanuddin', country: '印尼' },
  'BPN': { chinese: '巴厘巴板', english: 'Balikpapan Sepinggan', country: '印尼' },
  'PLM': { chinese: '巨港', english: 'Palembang Sultan Mahmud Badaruddin II', country: '印尼' },
  'PKU': { chinese: '北干巴鲁', english: 'Pekanbaru Sultan Syarif Kasim II', country: '印尼' },
  'PNK': { chinese: '坤甸', english: 'Pontianak Supadio', country: '印尼' },
  'BTH': { chinese: '巴淡', english: 'Batam Hang Nadim', country: '印尼' },
  'YOG': { chinese: '日惹', english: 'Yogyakarta Adisutcipto', country: '印尼' },
  'SRG': { chinese: '三宝垄', english: 'Semarang Ahmad Yani', country: '印尼' },
  'SOC': { chinese: '梭罗', english: 'Solo Adisumarmo', country: '印尼' },
  'TKG': { chinese: '班达楠榜', english: 'Bandar Lampung Radin Inten II', country: '印尼' },
  'BDO': { chinese: '万隆', english: 'Bandung Husein Sastranegara', country: '印尼' },

  // ================================================================
  // 🇵🇭 菲律宾 PHILIPPINES - 国际机场（第一部分）
  // ================================================================

  'MNL': { chinese: '马尼拉', english: 'Manila Ninoy Aquino', country: '菲律宾' },
  'CEB': { chinese: '宿务', english: 'Cebu Mactan', country: '菲律宾' },
  'DVO': { chinese: '达沃', english: 'Davao Francisco Bangoy', country: '菲律宾' },
  'ILO': { chinese: '伊洛伊洛', english: 'Iloilo', country: '菲律宾' },
  'ZAM': { chinese: '三宝颜', english: 'Zamboanga', country: '菲律宾' },
  'CRK': { chinese: '克拉克', english: 'Clark', country: '菲律宾' },
  'TAG': { chinese: '塔比拉兰', english: 'Tagbilaran', country: '菲律宾' },
  'KLO': { chinese: '卡利博', english: 'Kalibo', country: '菲律宾' },
  'BCD': { chinese: '巴科洛德', english: 'Bacolod', country: '菲律宾' },
  'CGY': { chinese: '卡加延德奥罗', english: 'Cagayan de Oro', country: '菲律宾' },
  'GES': { chinese: '圣何塞', english: 'General Santos', country: '菲律宾' },
  'TAC': { chinese: '塔克洛班', english: 'Tacloban Daniel Z. Romualdez', country: '菲律宾' },
  'PPS': { chinese: '公主港', english: 'Puerto Princesa', country: '菲律宾' },
  'USU': { chinese: '布苏安加', english: 'Busuanga', country: '菲律宾' },
  'MPH': { chinese: '卡蒂克兰', english: 'Caticlan', country: '菲律宾' },
  'TUG': { chinese: '图盖加劳', english: 'Tuguegarao', country: '菲律宾' },
  'LAO': { chinese: '拉瓦格', english: 'Laoag', country: '菲律宾' },
  'RXS': { chinese: '洛哈斯', english: 'Roxas', country: '菲律宾' },
  'DGT': { chinese: '杜马格特', english: 'Dumaguete', country: '菲律宾' },
  'SUG': { chinese: '苏里高', english: 'Surigao', country: '菲律宾' },
  'BXU': { chinese: '布图安', english: 'Butuan Bancasi', country: '菲律宾' },
  'SFS': { chinese: '苏比克湾', english: 'Subic Bay', country: '菲律宾' },

  // ================================================================
  // 🇮🇳 印度 INDIA - 国际机场（主要机场）
  // ================================================================

  'DEL': { chinese: '新德里', english: 'New Delhi Indira Gandhi', country: '印度' },
  'BOM': { chinese: '孟买', english: 'Mumbai Chhatrapati Shivaji', country: '印度' },
  'BLR': { chinese: '班加罗尔', english: 'Bangalore Kempegowda', country: '印度' },
  'MAA': { chinese: '金奈', english: 'Chennai', country: '印度' },
  'CCU': { chinese: '加尔各答', english: 'Kolkata Netaji Subhas Chandra Bose', country: '印度' },
  'HYD': { chinese: '海德拉巴', english: 'Hyderabad Rajiv Gandhi', country: '印度' },
  'COK': { chinese: '科钦', english: 'Kochi', country: '印度' },
  'AMD': { chinese: '艾哈迈达巴德', english: 'Ahmedabad Sardar Vallabhbhai Patel', country: '印度' },
  'PNQ': { chinese: '浦那', english: 'Pune', country: '印度' },
  'GOI': { chinese: '果阿', english: 'Goa Dabolim', country: '印度' },
  'TRV': { chinese: '特里凡得琅', english: 'Trivandrum', country: '印度' },
  'JAI': { chinese: '斋浦尔', english: 'Jaipur', country: '印度' },
  'LKO': { chinese: '勒克瑙', english: 'Lucknow', country: '印度' },
  'IXC': { chinese: '昌迪加尔', english: 'Chandigarh', country: '印度' },
  'SXR': { chinese: '斯利那加', english: 'Srinagar', country: '印度' },
  'IXL': { chinese: '列城', english: 'Leh', country: '印度' },

  // ================================================================
  // 🇵🇰 巴基斯坦 PAKISTAN - 国际机场
  // ================================================================

  'KHI': { chinese: '卡拉奇', english: 'Karachi Jinnah', country: '巴基斯坦' },
  'LHE': { chinese: '拉合尔', english: 'Lahore Allama Iqbal', country: '巴基斯坦' },
  'ISB': { chinese: '伊斯兰堡', english: 'Islamabad', country: '巴基斯坦' },
  'PEW': { chinese: '白沙瓦', english: 'Peshawar', country: '巴基斯坦' },
  'UET': { chinese: '奎达', english: 'Quetta', country: '巴基斯坦' },
  'MUX': { chinese: '木尔坦', english: 'Multan', country: '巴基斯坦' },

  // ================================================================
  // 🇧🇩 孟加拉国 BANGLADESH - 国际机场
  // ================================================================

  'DAC': { chinese: '达卡', english: 'Dhaka Hazrat Shahjalal', country: '孟加拉国' },
  'CGP': { chinese: '吉大港', english: 'Chittagong Shah Amanat', country: '孟加拉国' },

  // ================================================================
  // 🇱🇰 斯里兰卡 SRI LANKA - 国际机场
  // ================================================================

  'CMB': { chinese: '科伦坡', english: 'Colombo Bandaranaike', country: '斯里兰卡' },
  'HRI': { chinese: '汉班托塔', english: 'Hambantota Mattala Rajapaksa', country: '斯里兰卡' },

  // ================================================================
  // 🇳🇵 尼泊尔 NEPAL - 国际机场
  // ================================================================

  'KTM': { chinese: '加德满都', english: 'Kathmandu Tribhuvan', country: '尼泊尔' },
  'PKR': { chinese: '博卡拉', english: 'Pokhara', country: '尼泊尔' },

  // ================================================================
  // 🇧🇹 不丹 BHUTAN - 国际机场
  // ================================================================

  'PBH': { chinese: '廷布', english: 'Thimphu Paro', country: '不丹' },

  // ================================================================
  // 🇦🇪 阿联酋 UNITED ARAB EMIRATES - 国际机场
  // ================================================================

  'DXB': { chinese: '迪拜', english: 'Dubai', country: '阿联酋' },
  'DWC': { chinese: '迪拜世界中心', english: 'Dubai World Central', country: '阿联酋' },
  'AUH': { chinese: '阿布扎比', english: 'Abu Dhabi', country: '阿联酋' },
  'SHJ': { chinese: '沙迦', english: 'Sharjah', country: '阿联酋' },
  'RKT': { chinese: '哈伊马角', english: 'Ras Al Khaimah', country: '阿联酋' },

  // ================================================================
  // 🇸🇦 沙特阿拉伯 SAUDI ARABIA - 国际机场
  // ================================================================

  'RUH': { chinese: '利雅得', english: 'Riyadh King Khalid', country: '沙特阿拉伯' },
  'JED': { chinese: '吉达', english: 'Jeddah King Abdulaziz', country: '沙特阿拉伯' },
  'DMM': { chinese: '达曼', english: 'Dammam King Fahd', country: '沙特阿拉伯' },
  'MED': { chinese: '麦地那', english: 'Medina Prince Mohammad bin Abdulaziz', country: '沙特阿拉伯' },
  'AHB': { chinese: '阿卜哈', english: 'Abha', country: '沙特阿拉伯' },
  'TUU': { chinese: '塔布克', english: 'Tabuk', country: '沙特阿拉伯' },

  // ================================================================
  // 🇶🇦 卡塔尔 QATAR - 国际机场
  // ================================================================

  'DOH': { chinese: '多哈', english: 'Doha Hamad', country: '卡塔尔' },
  'XJD': { chinese: '乌代德', english: 'Al Udeid', country: '卡塔尔' },

  // ================================================================
  // 🇰🇼 科威特 KUWAIT - 国际机场
  // ================================================================

  'KWI': { chinese: '科威特城', english: 'Kuwait City', country: '科威特' },

  // ================================================================
  // 🇧🇭 巴林 BAHRAIN - 国际机场
  // ================================================================

  'BAH': { chinese: '巴林国际机场', english: 'Bahrain International Airport', country: '巴林' },

  // ================================================================
  // 🇴🇲 阿曼 OMAN - 国际机场
  // ================================================================

  'MCT': { chinese: '马斯喀特', english: 'Muscat', country: '阿曼' },
  'SLL': { chinese: '塞拉莱', english: 'Salalah', country: '阿曼' },

  // ================================================================
  // 🇮🇷 伊朗 IRAN - 国际机场
  // ================================================================

  'IKA': { chinese: '德黑兰', english: 'Tehran Imam Khomeini', country: '伊朗' },
  'ISF': { chinese: '伊斯法罕', english: 'Isfahan', country: '伊朗' },
  'SYZ': { chinese: '设拉子', english: 'Shiraz', country: '伊朗' },
  'MHD': { chinese: '马什哈德', english: 'Mashhad', country: '伊朗' },

  // ================================================================
  // 🇮🇶 伊拉克 IRAQ - 国际机场
  // ================================================================

  'BGW': { chinese: '巴格达', english: 'Baghdad', country: '伊拉克' },
  'BSR': { chinese: '巴士拉', english: 'Basra', country: '伊拉克' },
  'EBL': { chinese: '埃尔比勒', english: 'Erbil', country: '伊拉克' },

  // ================================================================
  // 🇰🇿 哈萨克斯坦 KAZAKHSTAN - 国际机场
  // ================================================================

  'ALA': { chinese: '阿拉木图', english: 'Almaty', country: '哈萨克斯坦' },
  'NQZ': { chinese: '努尔苏丹', english: 'Nur-Sultan Nazarbayev', country: '哈萨克斯坦' },
  'CIT': { chinese: '希姆肯特', english: 'Shymkent', country: '哈萨克斯坦' },
  'AKX': { chinese: '阿克套', english: 'Aktau', country: '哈萨克斯坦' },

  // ================================================================
  // 🇺🇿 乌兹别克斯坦 UZBEKISTAN - 国际机场
  // ================================================================

  'TAS': { chinese: '塔什干', english: 'Tashkent', country: '乌兹别克斯坦' },
  'SKD': { chinese: '撒马尔罕', english: 'Samarkand', country: '乌兹别克斯坦' },
  'BHK': { chinese: '布哈拉', english: 'Bukhara', country: '乌兹别克斯坦' },
  'UGC': { chinese: '乌尔根奇', english: 'Urgench', country: '乌兹别克斯坦' },

  // ================================================================
  // 🇰🇬 吉尔吉斯斯坦 KYRGYZSTAN - 国际机场
  // ================================================================

  'FRU': { chinese: '比什凯克', english: 'Bishkek Manas', country: '吉尔吉斯斯坦' },
  'OSS': { chinese: '奥什', english: 'Osh', country: '吉尔吉斯斯坦' },

  // ================================================================
  // 🇹🇯 塔吉克斯坦 TAJIKISTAN - 国际机场
  // ================================================================

  'DYU': { chinese: '杜尚别', english: 'Dushanbe', country: '塔吉克斯坦' },

  // ================================================================
  // 🇹🇲 土库曼斯坦 TURKMENISTAN - 国际机场
  // ================================================================

  'ASB': { chinese: '阿什哈巴德', english: 'Ashgabat', country: '土库曼斯坦' },

  // ================================================================
  // 🇦🇫 阿富汗 AFGHANISTAN - 国际机场
  // ================================================================

  'KBL': { chinese: '喀布尔', english: 'Kabul Hamid Karzai', country: '阿富汗' },
  'HEA': { chinese: '赫拉特', english: 'Herat', country: '阿富汗' },
  'MZR': { chinese: '马扎里沙里夫', english: 'Mazar-i-Sharif', country: '阿富汗' },

  // ================================================================
  // 🇱🇦 老挝 LAOS - 国际机场
  // ================================================================

  'VTE': { chinese: '万象', english: 'Vientiane Wattay', country: '老挝' },
  'LPQ': { chinese: '琅勃拉邦', english: 'Luang Prabang', country: '老挝' },

  // ================================================================
  // 🇰🇭 柬埔寨 CAMBODIA - 国际机场
  // ================================================================

  'PNH': { chinese: '金边', english: 'Phnom Penh', country: '柬埔寨' },
  'REP': { chinese: '暹粒', english: 'Siem Reap', country: '柬埔寨' },

  // ================================================================
  // 🇻🇳 越南 VIETNAM - 国际机场
  // ================================================================

  'SGN': { chinese: '胡志明市', english: 'Ho Chi Minh City Tan Son Nhat', country: '越南' },
  'HAN': { chinese: '河内', english: 'Hanoi Noi Bai', country: '越南' },
  'DAD': { chinese: '岘港', english: 'Da Nang', country: '越南' },
  'CXR': { chinese: '芽庄', english: 'Nha Trang Cam Ranh', country: '越南' },
  'PQC': { chinese: '富国岛', english: 'Phu Quoc', country: '越南' },

  // ================================================================
  // 🇲🇲 缅甸 MYANMAR - 国际机场
  // ================================================================

  'RGN': { chinese: '仰光', english: 'Yangon', country: '缅甸' },
  'NYU': { chinese: '内比都', english: 'Naypyidaw', country: '缅甸' },
  'MDL': { chinese: '曼德勒', english: 'Mandalay', country: '缅甸' },

  // ================================================================
  // 🇧🇳 文莱 BRUNEI - 国际机场
  // ================================================================

  'BWN': { chinese: '斯里巴加湾', english: 'Bandar Seri Begawan', country: '文莱' },

  // ================================================================
  // 🇹🇱 东帝汶 TIMOR-LESTE - 国际机场
  // ================================================================

  'DIL': { chinese: '帝力尼古劳·洛巴托总统国际机场', english: 'Presidente Nicolau Lobato International Airport', country: '东帝汶' },
  'AUT': { chinese: '阿陶罗机场', english: 'Atauro Airport', country: '东帝汶' },
  'BCH': { chinese: '包考机场', english: 'Baucau Airport', country: '东帝汶' },
  'UNI': { chinese: '马洛玛机场', english: 'Maliana Airport', country: '东帝汶' },

  // ================================================================
  // 🇲🇳 蒙古 MONGOLIA - 国际机场
  // ================================================================

  'ULN': { chinese: '乌兰巴托', english: 'Ulaanbaatar Chinggis Khaan', country: '蒙古' },
};
