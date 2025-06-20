// 机场三字代码映射表
export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type?: 'international' | 'domestic' | 'regional';
}

export const airportCodes: { [key: string]: AirportInfo } = {
'DOH': {
      chinese: '多哈',
      english: 'Doha',
      country: '卡塔尔'
    },
  'DXB': {
      chinese: '迪拜',
      english: 'Dubai',
      country: '阿联酋'
    },
  'AUH': {
      chinese: '阿布扎比',
      english: 'Abu Dhabi',
      country: '阿联酋'
    },
  'KWI': {
      chinese: '科威特',
      english: 'Kuwait',
      country: '科威特'
    },
  'BAH': {
      chinese: '巴林',
      english: 'Bahrain',
      country: '巴林'
    },
  'RUH': {
      chinese: '利雅得',
      english: 'Riyadh',
      country: '沙特阿拉伯'
    },
  'JED': {
      chinese: '吉达',
      english: 'Jeddah',
      country: '沙特阿拉伯'
    },
  'MCT': {
      chinese: '马斯喀特',
      english: 'Muscat',
      country: '阿曼'
    },
  'TLV': {
      chinese: '特拉维夫',
      english: 'Tel Aviv',
      country: '以色列'
    },
  'AMM': {
      chinese: '安曼',
      english: 'Amman',
      country: '约旦'
    },
  'BGW': {
      chinese: '巴格达',
      english: 'Baghdad',
      country: '伊拉克'
    },
  'IKA': {
      chinese: '德黑兰',
      english: 'Tehran',
      country: '伊朗'
    },
  'LHR': {
      chinese: '伦敦',
      english: 'London Heathrow',
      country: '英国'
    },
  'LGW': {
      chinese: '伦敦盖特威克',
      english: 'London Gatwick',
      country: '英国'
    },
  'STN': {
      chinese: '伦敦斯坦斯特德',
      english: 'London Stansted',
      country: '英国'
    },
  'CDG': {
      chinese: '巴黎',
      english: 'Paris Charles de Gaulle',
      country: '法国'
    },
  'ORY': {
      chinese: '巴黎奥利',
      english: 'Paris Orly',
      country: '法国'
    },
  'FRA': {
      chinese: '法兰克福',
      english: 'Frankfurt',
      country: '德国'
    },
  'MUC': {
      chinese: '慕尼黑',
      english: 'Munich',
      country: '德国'
    },
  'DUS': {
      chinese: '杜塞尔多夫',
      english: 'Dusseldorf',
      country: '德国'
    },
  'HAM': {
      chinese: '汉堡',
      english: 'Hamburg',
      country: '德国'
    },
  'AMS': {
      chinese: '阿姆斯特丹',
      english: 'Amsterdam',
      country: '荷兰'
    },
  'FCO': {
      chinese: '罗马',
      english: 'Rome Fiumicino',
      country: '意大利'
    },
  'MXP': {
      chinese: '米兰',
      english: 'Milan Malpensa',
      country: '意大利'
    },
  'MAD': {
      chinese: '马德里',
      english: 'Madrid',
      country: '西班牙'
    },
  'BCN': {
      chinese: '巴塞罗那',
      english: 'Barcelona',
      country: '西班牙'
    },
  'VIE': {
      chinese: '维也纳',
      english: 'Vienna',
      country: '奥地利'
    },
  'ZUR': {
      chinese: '苏黎世',
      english: 'Zurich',
      country: '瑞士'
    },
  'GVA': {
      chinese: '日内瓦',
      english: 'Geneva',
      country: '瑞士'
    },
  'CPH': {
      chinese: '哥本哈根',
      english: 'Copenhagen',
      country: '丹麦'
    },
  'ARN': {
      chinese: '斯德哥尔摩',
      english: 'Stockholm',
      country: '瑞典'
    },
  'OSL': {
      chinese: '奥斯陆',
      english: 'Oslo',
      country: '挪威'
    },
  'HEL': {
      chinese: '赫尔辛基',
      english: 'Helsinki',
      country: '芬兰'
    },
  'BRU': {
      chinese: '布鲁塞尔',
      english: 'Brussels',
      country: '比利时'
    },
  'WAW': {
      chinese: '华沙',
      english: 'Warsaw',
      country: '波兰'
    },
  'PRG': {
      chinese: '布拉格',
      english: 'Prague',
      country: '捷克'
    },
  'BUD': {
      chinese: '布达佩斯',
      english: 'Budapest',
      country: '匈牙利'
    },
  'ATH': {
      chinese: '雅典',
      english: 'Athens',
      country: '希腊'
    },
  'IST': {
      chinese: '伊斯坦布尔',
      english: 'Istanbul',
      country: '土耳其'
    },
  'NRT': {
      chinese: '东京成田',
      english: 'Tokyo Narita',
      country: '日本'
    },
  'HND': {
      chinese: '东京羽田',
      english: 'Tokyo Haneda',
      country: '日本'
    },
  'KIX': {
      chinese: '大阪关西',
      english: 'Osaka Kansai',
      country: '日本'
    },
  'NGO': {
      chinese: '名古屋',
      english: 'Nagoya',
      country: '日本'
    },
  'ICN': {
      chinese: '首尔仁川',
      english: 'Seoul Incheon',
      country: '韩国'
    },
  'GMP': {
      chinese: '首尔金浦',
      english: 'Seoul Gimpo',
      country: '韩国'
    },
  'PUS': {
      chinese: '釜山',
      english: 'Busan',
      country: '韩国'
    },
  'BKK': {
      chinese: '曼谷素万那普',
      english: 'Bangkok Suvarnabhumi',
      country: '泰国'
    },
  'DMK': {
      chinese: '曼谷廊曼',
      english: 'Bangkok Don Mueang',
      country: '泰国'
    },
  'SIN': {
      chinese: '新加坡',
      english: 'Singapore',
      country: '新加坡'
    },
  'KUL': {
      chinese: '吉隆坡',
      english: 'Kuala Lumpur',
      country: '马来西亚'
    },
  'CGK': {
      chinese: '雅加达',
      english: 'Jakarta',
      country: '印尼'
    },
  'MNL': {
      chinese: '马尼拉',
      english: 'Manila',
      country: '菲律宾'
    },
  'HKG': {
      chinese: '香港',
      english: 'Hong Kong',
      country: '中国'
    },
  'TPE': {
      chinese: '台北桃园',
      english: 'Taipei Taoyuan',
      country: '中国台湾'
    },
  'TSA': {
      chinese: '台北松山',
      english: 'Taipei Songshan',
      country: '中国台湾'
    },
  'KHH': {
      chinese: '高雄',
      english: 'Kaohsiung',
      country: '中国台湾'
    },
  'MFM': {
      chinese: '澳门',
      english: 'Macau',
      country: '中国'
    },
  'BOM': {
      chinese: '孟买',
      english: 'Mumbai',
      country: '印度'
    },
  'DEL': {
      chinese: '新德里',
      english: 'New Delhi',
      country: '印度'
    },
  'BLR': {
      chinese: '班加罗尔',
      english: 'Bangalore',
      country: '印度'
    },
  'MAA': {
      chinese: '金奈',
      english: 'Chennai',
      country: '印度'
    },
  'HYD': {
      chinese: '海得拉巴',
      english: 'Hyderabad',
      country: '印度'
    },
  'CCU': {
      chinese: '加尔各答',
      english: 'Kolkata',
      country: '印度'
    },
  'CMB': {
      chinese: '科伦坡',
      english: 'Colombo',
      country: '斯里兰卡'
    },
  'DAC': {
      chinese: '达卡',
      english: 'Dhaka',
      country: '孟加拉国'
    },
  'KTM': {
      chinese: '加德满都',
      english: 'Kathmandu',
      country: '尼泊尔'
    },
  'KHI': {
      chinese: '卡拉奇',
      english: 'Karachi',
      country: '巴基斯坦'
    },
  'RGN': {
      chinese: '仰光',
      english: 'Yangon',
      country: '缅甸'
    },
  'VTE': {
      chinese: '万象',
      english: 'Vientiane',
      country: '老挝'
    },
  'PNH': {
      chinese: '金边',
      english: 'Phnom Penh',
      country: '柬埔寨'
    },
  'SGN': {
      chinese: '胡志明市',
      english: 'Ho Chi Minh City',
      country: '越南'
    },
  'HAN': {
      chinese: '河内',
      english: 'Hanoi',
      country: '越南'
    },
  'PEK': {
      chinese: '北京首都',
      english: 'Beijing Capital',
      country: '中国'
    },
  'PKX': {
      chinese: '北京大兴',
      english: 'Beijing Daxing',
      country: '中国'
    },
  'PVG': {
      chinese: '上海浦东',
      english: 'Shanghai Pudong',
      country: '中国'
    },
  'SHA': {
      chinese: '上海虹桥',
      english: 'Shanghai Hongqiao',
      country: '中国'
    },
  'CAN': {
      chinese: '广州',
      english: 'Guangzhou',
      country: '中国'
    },
  'SZX': {
      chinese: '深圳',
      english: 'Shenzhen',
      country: '中国'
    },
  'CTU': {
      chinese: '成都',
      english: 'Chengdu',
      country: '中国'
    },
  'KMG': {
      chinese: '昆明',
      english: 'Kunming',
      country: '中国'
    },
  'XIY': {
      chinese: '西安',
      english: 'Xi'an',
      country: '中国'
    },
  'WUH': {
      chinese: '武汉',
      english: 'Wuhan',
      country: '中国'
    },
  'CSX': {
      chinese: '长沙',
      english: 'Changsha',
      country: '中国'
    },
  'NKG': {
      chinese: '南京',
      english: 'Nanjing',
      country: '中国'
    },
  'HGH': {
      chinese: '杭州',
      english: 'Hangzhou',
      country: '中国'
    },
  'FOC': {
      chinese: '福州',
      english: 'Fuzhou',
      country: '中国'
    },
  'XMN': {
      chinese: '厦门',
      english: 'Xiamen',
      country: '中国'
    },
  'NNG': {
      chinese: '南宁',
      english: 'Nanning',
      country: '中国'
    },
  'HAK': {
      chinese: '海口',
      english: 'Haikou',
      country: '中国'
    },
  'SYX': {
      chinese: '三亚',
      english: 'Sanya',
      country: '中国'
    },
  'URC': {
      chinese: '乌鲁木齐',
      english: 'Urumqi',
      country: '中国'
    },
  'LHW': {
      chinese: '兰州',
      english: 'Lanzhou',
      country: '中国'
    },
  'INC': {
      chinese: '银川',
      english: 'Yinchuan',
      country: '中国'
    },
  'XNN': {
      chinese: '西宁',
      english: 'Xining',
      country: '中国'
    },
  'TSN': {
      chinese: '天津',
      english: 'Tianjin',
      country: '中国'
    },
  'SJW': {
      chinese: '石家庄',
      english: 'Shijiazhuang',
      country: '中国'
    },
  'TYN': {
      chinese: '太原',
      english: 'Taiyuan',
      country: '中国'
    },
  'HET': {
      chinese: '呼和浩特',
      english: 'Hohhot',
      country: '中国'
    },
  'SHE': {
      chinese: '沈阳',
      english: 'Shenyang',
      country: '中国'
    },
  'DLC': {
      chinese: '大连',
      english: 'Dalian',
      country: '中国'
    },
  'CGQ': {
      chinese: '长春',
      english: 'Changchun',
      country: '中国'
    },
  'HRB': {
      chinese: '哈尔滨',
      english: 'Harbin',
      country: '中国'
    },
  'CAI': {
      chinese: '开罗',
      english: 'Cairo',
      country: '埃及'
    },
  'JNB': {
      chinese: '约翰内斯堡',
      english: 'Johannesburg',
      country: '南非'
    },
  'CPT': {
      chinese: '开普敦',
      english: 'Cape Town',
      country: '南非'
    },
  'DUR': {
      chinese: '德班',
      english: 'Durban',
      country: '南非'
    },
  'ADD': {
      chinese: '亚的斯亚贝巴',
      english: 'Addis Ababa',
      country: '埃塞俄比亚'
    },
  'LOS': {
      chinese: '拉各斯',
      english: 'Lagos',
      country: '尼日利亚'
    },
  'ABV': {
      chinese: '阿布贾',
      english: 'Abuja',
      country: '尼日利亚'
    },
  'ACC': {
      chinese: '阿克拉',
      english: 'Accra',
      country: '加纳'
    },
  'CAS': {
      chinese: '卡萨布兰卡',
      english: 'Casablanca',
      country: '摩洛哥'
    },
  'TUN': {
      chinese: '突尼斯',
      english: 'Tunis',
      country: '突尼斯'
    },
  'ALG': {
      chinese: '阿尔及尔',
      english: 'Algiers',
      country: '阿尔及利亚'
    },
  'NBO': {
      chinese: '内罗毕',
      english: 'Nairobi',
      country: '肯尼亚'
    },
  'DAR': {
      chinese: '达累斯萨拉姆',
      english: 'Dar es Salaam',
      country: '坦桑尼亚'
    },
  'KGL': {
      chinese: '基加利',
      english: 'Kigali',
      country: '卢旺达'
    },
  'EBB': {
      chinese: '恩德培',
      english: 'Entebbe',
      country: '乌干达'
    },
  'GRU': {
      chinese: '圣保罗',
      english: 'Sao Paulo Guarulhos',
      country: '巴西'
    },
  'GIG': {
      chinese: '里约热内卢',
      english: 'Rio de Janeiro',
      country: '巴西'
    },
  'BSB': {
      chinese: '巴西利亚',
      english: 'Brasilia',
      country: '巴西'
    },
  'FOR': {
      chinese: '福塔莱萨',
      english: 'Fortaleza',
      country: '巴西'
    },
  'VCP': {
      chinese: '坎皮纳斯',
      english: 'Campinas Viracopos',
      country: '巴西'
    },
  'CNF': {
      chinese: '贝洛奥里藏特',
      english: 'Belo Horizonte',
      country: '巴西'
    },
  'REC': {
      chinese: '累西腓',
      english: 'Recife',
      country: '巴西'
    },
  'SSA': {
      chinese: '萨尔瓦多',
      english: 'Salvador',
      country: '巴西'
    },
  'BOG': {
      chinese: '波哥大',
      english: 'Bogota',
      country: '哥伦比亚'
    },
  'LIM': {
      chinese: '利马',
      english: 'Lima',
      country: '秘鲁'
    },
  'SCL': {
      chinese: '圣地亚哥',
      english: 'Santiago',
      country: '智利'
    },
  'EZE': {
      chinese: '布宜诺斯艾利斯',
      english: 'Buenos Aires Ezeiza',
      country: '阿根廷'
    },
  'CCS': {
      chinese: '加拉加斯',
      english: 'Caracas',
      country: '委内瑞拉'
    },
  'UIO': {
      chinese: '基多',
      english: 'Quito',
      country: '厄瓜多尔'
    },
  'GYE': {
      chinese: '瓜亚基尔',
      english: 'Guayaquil',
      country: '厄瓜多尔'
    },
  'LPB': {
      chinese: '拉巴斯',
      english: 'La Paz',
      country: '玻利维亚'
    },
  'ASU': {
      chinese: '亚松森',
      english: 'Asuncion',
      country: '巴拉圭'
    },
  'MVD': {
      chinese: '蒙得维的亚',
      english: 'Montevideo',
      country: '乌拉圭'
    },
  'JFK': {
      chinese: '纽约肯尼迪',
      english: 'New York JFK',
      country: '美国'
    },
  'LGA': {
      chinese: '纽约拉瓜迪亚',
      english: 'New York LaGuardia',
      country: '美国'
    },
  'EWR': {
      chinese: '纽约纽瓦克',
      english: 'New York Newark',
      country: '美国'
    },
  'LAX': {
      chinese: '洛杉矶',
      english: 'Los Angeles',
      country: '美国'
    },
  'SFO': {
      chinese: '旧金山',
      english: 'San Francisco',
      country: '美国'
    },
  'ORD': {
      chinese: '芝加哥奥黑尔',
      english: 'Chicago O'Hare',
      country: '美国'
    },
  'MDW': {
      chinese: '芝加哥中途',
      english: 'Chicago Midway',
      country: '美国'
    },
  'MIA': {
      chinese: '迈阿密',
      english: 'Miami',
      country: '美国'
    },
  'FLL': {
      chinese: '劳德代尔堡',
      english: 'Fort Lauderdale',
      country: '美国'
    },
  'ATL': {
      chinese: '亚特兰大',
      english: 'Atlanta',
      country: '美国'
    },
  'DFW': {
      chinese: '达拉斯',
      english: 'Dallas Fort Worth',
      country: '美国'
    },
  'IAH': {
      chinese: '休斯顿',
      english: 'Houston Intercontinental',
      country: '美国'
    },
  'HOU': {
      chinese: '休斯顿霍比',
      english: 'Houston Hobby',
      country: '美国'
    },
  'DEN': {
      chinese: '丹佛',
      english: 'Denver',
      country: '美国'
    },
  'PHX': {
      chinese: '凤凰城',
      english: 'Phoenix',
      country: '美国'
    },
  'LAS': {
      chinese: '拉斯维加斯',
      english: 'Las Vegas',
      country: '美国'
    },
  'SEA': {
      chinese: '西雅图',
      english: 'Seattle',
      country: '美国'
    },
  'PDX': {
      chinese: '波特兰',
      english: 'Portland',
      country: '美国'
    },
  'SAN': {
      chinese: '圣地亚哥',
      english: 'San Diego',
      country: '美国'
    },
  'BOS': {
      chinese: '波士顿',
      english: 'Boston',
      country: '美国'
    },
  'BWI': {
      chinese: '巴尔的摩',
      english: 'Baltimore Washington',
      country: '美国'
    },
  'DCA': {
      chinese: '华盛顿里根',
      english: 'Washington Reagan',
      country: '美国'
    },
  'IAD': {
      chinese: '华盛顿杜勒斯',
      english: 'Washington Dulles',
      country: '美国'
    },
  'DTW': {
      chinese: '底特律',
      english: 'Detroit',
      country: '美国'
    },
  'MSP': {
      chinese: '明尼阿波利斯',
      english: 'Minneapolis',
      country: '美国'
    },
  'CLT': {
      chinese: '夏洛特',
      english: 'Charlotte',
      country: '美国'
    },
  'TPA': {
      chinese: '坦帕',
      english: 'Tampa',
      country: '美国'
    },
  'MCO': {
      chinese: '奥兰多',
      english: 'Orlando',
      country: '美国'
    },
  'SLC': {
      chinese: '盐湖城',
      english: 'Salt Lake City',
      country: '美国'
    },
  'STL': {
      chinese: '圣路易斯',
      english: 'St. Louis',
      country: '美国'
    },
  'MSY': {
      chinese: '新奥尔良',
      english: 'New Orleans',
      country: '美国'
    },
  'PHL': {
      chinese: '费城',
      english: 'Philadelphia',
      country: '美国'
    },
  'PIT': {
      chinese: '匹兹堡',
      english: 'Pittsburgh',
      country: '美国'
    },
  'CVG': {
      chinese: '辛辛那提',
      english: 'Cincinnati',
      country: '美国'
    },
  'CLE': {
      chinese: '克利夫兰',
      english: 'Cleveland',
      country: '美国'
    },
  'MKE': {
      chinese: '密尔沃基',
      english: 'Milwaukee',
      country: '美国'
    },
  'IND': {
      chinese: '印第安纳波利斯',
      english: 'Indianapolis',
      country: '美国'
    },
  'MEM': {
      chinese: '孟菲斯',
      english: 'Memphis',
      country: '美国'
    },
  'BNA': {
      chinese: '纳什维尔',
      english: 'Nashville',
      country: '美国'
    },
  'RDU': {
      chinese: '罗利达勒姆',
      english: 'Raleigh Durham',
      country: '美国'
    },
  'SAT': {
      chinese: '圣安东尼奥',
      english: 'San Antonio',
      country: '美国'
    },
  'AUS': {
      chinese: '奥斯汀',
      english: 'Austin',
      country: '美国'
    },
  'OKC': {
      chinese: '俄克拉荷马城',
      english: 'Oklahoma City',
      country: '美国'
    },
  'SMF': {
      chinese: '萨克拉门托',
      english: 'Sacramento',
      country: '美国'
    },
  'SJC': {
      chinese: '圣何塞',
      english: 'San Jose',
      country: '美国'
    },
  'OAK': {
      chinese: '奥克兰',
      english: 'Oakland',
      country: '美国'
    },
  'BUR': {
      chinese: '伯班克',
      english: 'Burbank',
      country: '美国'
    },
  'SNA': {
      chinese: '橙县',
      english: 'Orange County',
      country: '美国'
    },
  'HNL': {
      chinese: '檀香山',
      english: 'Honolulu',
      country: '美国'
    },
  'ANC': {
      chinese: '安克雷奇',
      english: 'Anchorage',
      country: '美国'
    },
  'YYZ': {
      chinese: '多伦多',
      english: 'Toronto Pearson',
      country: '加拿大'
    },
  'YVR': {
      chinese: '温哥华',
      english: 'Vancouver',
      country: '加拿大'
    },
  'YUL': {
      chinese: '蒙特利尔',
      english: 'Montreal',
      country: '加拿大'
    },
  'YYC': {
      chinese: '卡尔加里',
      english: 'Calgary',
      country: '加拿大'
    },
  'YEG': {
      chinese: '埃德蒙顿',
      english: 'Edmonton',
      country: '加拿大'
    },
  'YWG': {
      chinese: '温尼伯',
      english: 'Winnipeg',
      country: '加拿大'
    },
  'YOW': {
      chinese: '渥太华',
      english: 'Ottawa',
      country: '加拿大'
    },
  'YHZ': {
      chinese: '哈利法克斯',
      english: 'Halifax',
      country: '加拿大'
    },
  'YQB': {
      chinese: '魁北克城',
      english: 'Quebec City',
      country: '加拿大'
    },
  'MEX': {
      chinese: '墨西哥城',
      english: 'Mexico City',
      country: '墨西哥'
    },
  'CUN': {
      chinese: '坎昆',
      english: 'Cancun',
      country: '墨西哥'
    },
  'GDL': {
      chinese: '瓜达拉哈拉',
      english: 'Guadalajara',
      country: '墨西哥'
    },
  'MTY': {
      chinese: '蒙特雷',
      english: 'Monterrey',
      country: '墨西哥'
    },
  'TIJ': {
      chinese: '蒂华纳',
      english: 'Tijuana',
      country: '墨西哥'
    },
  'PVR': {
      chinese: '巴亚尔塔港',
      english: 'Puerto Vallarta',
      country: '墨西哥'
    },
  'SJD': {
      chinese: '洛斯卡波斯',
      english: 'Los Cabos',
      country: '墨西哥'
    },
  'MZT': {
      chinese: '马萨特兰',
      english: 'Mazatlan',
      country: '墨西哥'
    },
  'SYD': {
      chinese: '悉尼',
      english: 'Sydney',
      country: '澳大利亚'
    },
  'MEL': {
      chinese: '墨尔本',
      english: 'Melbourne',
      country: '澳大利亚'
    },
  'BNE': {
      chinese: '布里斯班',
      english: 'Brisbane',
      country: '澳大利亚'
    },
  'PER': {
      chinese: '珀斯',
      english: 'Perth',
      country: '澳大利亚'
    },
  'ADL': {
      chinese: '阿德莱德',
      english: 'Adelaide',
      country: '澳大利亚'
    },
  'DRW': {
      chinese: '达尔文',
      english: 'Darwin',
      country: '澳大利亚'
    },
  'CNS': {
      chinese: '凯恩斯',
      english: 'Cairns',
      country: '澳大利亚'
    },
  'GCM': {
      chinese: '黄金海岸',
      english: 'Gold Coast',
      country: '澳大利亚'
    },
  'AKL': {
      chinese: '奥克兰',
      english: 'Auckland',
      country: '新西兰'
    },
  'CHC': {
      chinese: '基督城',
      english: 'Christchurch',
      country: '新西兰'
    },
  'WLG': {
      chinese: '惠灵顿',
      english: 'Wellington',
      country: '新西兰'
    },
  'ZQN': {
      chinese: '皇后镇',
      english: 'Queenstown',
      country: '新西兰'
    },
  'NAN': {
      chinese: '楠迪',
      english: 'Nadi',
      country: '斐济'
    },
  'SUV': {
      chinese: '苏瓦',
      english: 'Suva',
      country: '斐济'
    },
  'APW': {
      chinese: '阿皮亚',
      english: 'Apia',
      country: '萨摩亚'
    },
  'NOU': {
      chinese: '努美阿',
      english: 'Noumea',
      country: '新喀里多尼亚'
    },
  'PPT': {
      chinese: '帕皮提',
      english: 'Papeete',
      country: '法属波利尼西亚'
    },
  'DPS': {
      chinese: '巴厘岛',
      english: 'Bali',
      country: '印尼'
    },
  'SUB': {
      chinese: '泗水',
      english: 'Surabaya',
      country: '印尼'
    },
  'MDN': {
      chinese: '棉兰',
      english: 'Medan',
      country: '印尼'
    },
  'UPG': {
      chinese: '望加锡',
      english: 'Makassar',
      country: '印尼'
    },
  'PEN': {
      chinese: '槟城',
      english: 'Penang',
      country: '马来西亚'
    },
  'JHB': {
      chinese: '新山',
      english: 'Johor Bahru',
      country: '马来西亚'
    },
  'KCH': {
      chinese: '古晋',
      english: 'Kuching',
      country: '马来西亚'
    },
  'BKI': {
      chinese: '亚庇',
      english: 'Kota Kinabalu',
      country: '马来西亚'
    },
  'HKT': {
      chinese: '普吉',
      english: 'Phuket',
      country: '泰国'
    },
  'CNX': {
      chinese: '清迈',
      english: 'Chiang Mai',
      country: '泰国'
    },
  'HHQ': {
      chinese: '华欣',
      english: 'Hua Hin',
      country: '泰国'
    },
  'USM': {
      chinese: '苏梅',
      english: 'Koh Samui',
      country: '泰国'
    },
  'CEB': {
      chinese: '宿务',
      english: 'Cebu',
      country: '菲律宾'
    },
  'DVO': {
      chinese: '达沃',
      english: 'Davao',
      country: '菲律宾'
    },
  'ILO': {
      chinese: '伊洛伊洛',
      english: 'Iloilo',
      country: '菲律宾'
    },
  'MDL': {
      chinese: '曼德勒',
      english: 'Mandalay',
      country: '缅甸'
    },
  'NYU': {
      chinese: '内比都',
      english: 'Naypyidaw',
      country: '缅甸'
    },
  'BWN': {
      chinese: '斯里巴加湾',
      english: 'Bandar Seri Begawan',
      country: '文莱'
    },
  'DIL': {
      chinese: '帝力尼古劳·洛巴托总统国际机场',
      english: 'Presidente Nicolau Lobato International Airport',
      country: '东帝汶',
      type: 'international'
    },
  'AUT': {
      chinese: '阿陶罗机场',
      english: 'Atauro Airport',
      country: '东帝汶',
      type: 'domestic'
    },
  'BCH': {
      chinese: '包考机场',
      english: 'Baucau Airport',
      country: '东帝汶',
      type: 'domestic'
    },
  'UNI': {
      chinese: '马洛玛机场',
      english: 'Maliana Airport',
      country: '东帝汶',
      type: 'domestic'
    },
  'MAN': {
      chinese: '曼彻斯特',
      english: 'Manchester',
      country: '英国'
    },
  'LTN': {
      chinese: '伦敦卢顿',
      english: 'London Luton',
      country: '英国'
    },
  'BHX': {
      chinese: '伯明翰',
      english: 'Birmingham',
      country: '英国'
    },
  'GLA': {
      chinese: '格拉斯哥',
      english: 'Glasgow',
      country: '英国'
    },
  'EDI': {
      chinese: '爱丁堡',
      english: 'Edinburgh',
      country: '英国'
    },
  'NCL': {
      chinese: '纽卡斯尔',
      english: 'Newcastle',
      country: '英国'
    },
  'LPL': {
      chinese: '利物浦',
      english: 'Liverpool',
      country: '英国'
    },
  'BFS': {
      chinese: '贝尔法斯特',
      english: 'Belfast',
      country: '英国'
    },
  'TXL': {
      chinese: '柏林泰格尔',
      english: 'Berlin Tegel',
      country: '德国'
    },
  'BER': {
      chinese: '柏林勃兰登堡',
      english: 'Berlin Brandenburg',
      country: '德国'
    },
  'CGN': {
      chinese: '科隆',
      english: 'Cologne',
      country: '德国'
    },
  'STR': {
      chinese: '斯图加特',
      english: 'Stuttgart',
      country: '德国'
    },
  'NUE': {
      chinese: '纽伦堡',
      english: 'Nuremberg',
      country: '德国'
    },
  'HAJ': {
      chinese: '汉诺威',
      english: 'Hannover',
      country: '德国'
    },
  'LEJ': {
      chinese: '莱比锡',
      english: 'Leipzig',
      country: '德国'
    },
  'DRS': {
      chinese: '德累斯顿',
      english: 'Dresden',
      country: '德国'
    },
  'NCE': {
      chinese: '尼斯',
      english: 'Nice',
      country: '法国'
    },
  'LYS': {
      chinese: '里昂',
      english: 'Lyon',
      country: '法国'
    },
  'MRS': {
      chinese: '马赛',
      english: 'Marseille',
      country: '法国'
    },
  'TLS': {
      chinese: '图卢兹',
      english: 'Toulouse',
      country: '法国'
    },
  'BOD': {
      chinese: '波尔多',
      english: 'Bordeaux',
      country: '法国'
    },
  'NTE': {
      chinese: '南特',
      english: 'Nantes',
      country: '法国'
    },
  'LIL': {
      chinese: '里尔',
      english: 'Lille',
      country: '法国'
    },
  'SXB': {
      chinese: '斯特拉斯堡',
      english: 'Strasbourg',
      country: '法国'
    },
  'VCE': {
      chinese: '威尼斯',
      english: 'Venice',
      country: '意大利'
    },
  'NAP': {
      chinese: '那不勒斯',
      english: 'Naples',
      country: '意大利'
    },
  'BLQ': {
      chinese: '博洛尼亚',
      english: 'Bologna',
      country: '意大利'
    },
  'FLR': {
      chinese: '佛罗伦萨',
      english: 'Florence',
      country: '意大利'
    },
  'PSA': {
      chinese: '比萨',
      english: 'Pisa',
      country: '意大利'
    },
  'TRN': {
      chinese: '都灵',
      english: 'Turin',
      country: '意大利'
    },
  'CTA': {
      chinese: '卡塔尼亚',
      english: 'Catania',
      country: '意大利'
    },
  'PMO': {
      chinese: '巴勒莫',
      english: 'Palermo',
      country: '意大利'
    },
  'CAG': {
      chinese: '卡利亚里',
      english: 'Cagliari',
      country: '意大利'
    },
  'AGP': {
      chinese: '马拉加',
      english: 'Malaga',
      country: '西班牙'
    },
  'SVQ': {
      chinese: '塞维利亚',
      english: 'Seville',
      country: '西班牙'
    },
  'VLC': {
      chinese: '瓦伦西亚',
      english: 'Valencia',
      country: '西班牙'
    },
  'BIO': {
      chinese: '毕尔巴鄂',
      english: 'Bilbao',
      country: '西班牙'
    },
  'SDR': {
      chinese: '桑坦德',
      english: 'Santander',
      country: '西班牙'
    },
  'LPA': {
      chinese: '拉斯帕尔马斯',
      english: 'Las Palmas',
      country: '西班牙'
    },
  'TFS': {
      chinese: '特内里费',
      english: 'Tenerife',
      country: '西班牙'
    },
  'PMI': {
      chinese: '帕尔马',
      english: 'Palma',
      country: '西班牙'
    },
  'IBZ': {
      chinese: '伊维萨',
      english: 'Ibiza',
      country: '西班牙'
    },
  'LIS': {
      chinese: '里斯本',
      english: 'Lisbon',
      country: '葡萄牙'
    },
  'OPO': {
      chinese: '波尔图',
      english: 'Porto',
      country: '葡萄牙'
    },
  'FAO': {
      chinese: '法鲁',
      english: 'Faro',
      country: '葡萄牙'
    },
  'FNC': {
      chinese: '丰沙尔',
      english: 'Funchal',
      country: '葡萄牙'
    },
  'GOT': {
      chinese: '哥德堡',
      english: 'Gothenburg',
      country: '瑞典'
    },
  'MMX': {
      chinese: '马尔默',
      english: 'Malmo',
      country: '瑞典'
    },
  'BGO': {
      chinese: '卑尔根',
      english: 'Bergen',
      country: '挪威'
    },
  'TRD': {
      chinese: '特隆赫姆',
      english: 'Trondheim',
      country: '挪威'
    },
  'TRF': {
      chinese: '桑德尔福德',
      english: 'Sandefjord',
      country: '挪威'
    },
  'TMP': {
      chinese: '坦佩雷',
      english: 'Tampere',
      country: '芬兰'
    },
  'TKU': {
      chinese: '图尔库',
      english: 'Turku',
      country: '芬兰'
    },
  'AAL': {
      chinese: '奥尔堡',
      english: 'Aalborg',
      country: '丹麦'
    },
  'BLL': {
      chinese: '比隆',
      english: 'Billund',
      country: '丹麦'
    },
  'AAR': {
      chinese: '奥胡斯',
      english: 'Aarhus',
      country: '丹麦'
    },
  'SVO': {
      chinese: '莫斯科谢列梅捷沃',
      english: 'Moscow Sheremetyevo',
      country: '俄罗斯'
    },
  'DME': {
      chinese: '莫斯科多莫杰多沃',
      english: 'Moscow Domodedovo',
      country: '俄罗斯'
    },
  'VKO': {
      chinese: '莫斯科伏努科沃',
      english: 'Moscow Vnukovo',
      country: '俄罗斯'
    },
  'LED': {
      chinese: '圣彼得堡',
      english: 'St. Petersburg',
      country: '俄罗斯'
    },
  'KZN': {
      chinese: '喀山',
      english: 'Kazan',
      country: '俄罗斯'
    },
  'ROV': {
      chinese: '罗斯托夫',
      english: 'Rostov-on-Don',
      country: '俄罗斯'
    },
  'YEK': {
      chinese: '叶卡捷琳堡',
      english: 'Yekaterinburg',
      country: '俄罗斯'
    },
  'OVB': {
      chinese: '新西伯利亚',
      english: 'Novosibirsk',
      country: '俄罗斯'
    },
  'KBP': {
      chinese: '基辅',
      english: 'Kiev',
      country: '乌克兰'
    },
  'IEV': {
      chinese: '基辅茹良',
      english: 'Kiev Zhulyany',
      country: '乌克兰'
    },
  'ODS': {
      chinese: '敖德萨',
      english: 'Odessa',
      country: '乌克兰'
    },
  'LWO': {
      chinese: '利沃夫',
      english: 'Lviv',
      country: '乌克兰'
    },
  'MSQ': {
      chinese: '明斯克',
      english: 'Minsk',
      country: '白俄罗斯'
    },
  'RIX': {
      chinese: '里加',
      english: 'Riga',
      country: '拉脱维亚'
    },
  'TLL': {
      chinese: '塔林',
      english: 'Tallinn',
      country: '爱沙尼亚'
    },
  'VNO': {
      chinese: '维尔纽斯',
      english: 'Vilnius',
      country: '立陶宛'
    },
  'KUN': {
      chinese: '考纳斯',
      english: 'Kaunas',
      country: '立陶宛'
    },
  'BEG': {
      chinese: '贝尔格莱德',
      english: 'Belgrade',
      country: '塞尔维亚'
    },
  'ZAG': {
      chinese: '萨格勒布',
      english: 'Zagreb',
      country: '克罗地亚'
    },
  'SPU': {
      chinese: '斯普利特',
      english: 'Split',
      country: '克罗地亚'
    },
  'DBV': {
      chinese: '杜布罗夫尼克',
      english: 'Dubrovnik',
      country: '克罗地亚'
    },
  'LJU': {
      chinese: '卢布尔雅那',
      english: 'Ljubljana',
      country: '斯洛文尼亚'
    },
  'SJJ': {
      chinese: '萨拉热窝',
      english: 'Sarajevo',
      country: '波黑'
    },
  'SKP': {
      chinese: '斯科普里',
      english: 'Skopje',
      country: '北马其顿'
    },
  'TGD': {
      chinese: '波德戈里察',
      english: 'Podgorica',
      country: '黑山'
    },
  'TIA': {
      chinese: '地拉那',
      english: 'Tirana',
      country: '阿尔巴尼亚'
    },
  'OTP': {
      chinese: '布加勒斯特',
      english: 'Bucharest',
      country: '罗马尼亚'
    },
  'CLJ': {
      chinese: '克卢日',
      english: 'Cluj-Napoca',
      country: '罗马尼亚'
    },
  'SOF': {
      chinese: '索菲亚',
      english: 'Sofia',
      country: '保加利亚'
    },
  'VAR': {
      chinese: '瓦尔纳',
      english: 'Varna',
      country: '保加利亚'
    },
  'HRG': {
      chinese: '赫尔格达',
      english: 'Hurghada',
      country: '埃及'
    },
  'SSH': {
      chinese: '沙姆沙伊赫',
      english: 'Sharm El Sheikh',
      country: '埃及'
    },
  'LXR': {
      chinese: '卢克索',
      english: 'Luxor',
      country: '埃及'
    },
  'CMN': {
      chinese: '卡萨布兰卡',
      english: 'Casablanca',
      country: '摩洛哥'
    },
  'RAK': {
      chinese: '马拉喀什',
      english: 'Marrakech',
      country: '摩洛哥'
    },
  'FEZ': {
      chinese: '非斯',
      english: 'Fez',
      country: '摩洛哥'
    },
  'MIR': {
      chinese: '莫纳斯提尔',
      english: 'Monastir',
      country: '突尼斯'
    },
  'TIP': {
      chinese: '的黎波里',
      english: 'Tripoli',
      country: '利比亚'
    },
  'BEN': {
      chinese: '班加西',
      english: 'Benghazi',
      country: '利比亚'
    },
  'KAN': {
      chinese: '卡诺',
      english: 'Kano',
      country: '尼日利亚'
    },
  'ABJ': {
      chinese: '阿比让',
      english: 'Abidjan',
      country: '科特迪瓦'
    },
  'DKR': {
      chinese: '达喀尔',
      english: 'Dakar',
      country: '塞内加尔'
    },
  'BAK': {
      chinese: '巴马科',
      english: 'Bamako',
      country: '马里'
    },
  'OUA': {
      chinese: '瓦加杜古',
      english: 'Ouagadougou',
      country: '布基纳法索'
    },
  'COO': {
      chinese: '科托努',
      english: 'Cotonou',
      country: '贝宁'
    },
  'LFW': {
      chinese: '洛美',
      english: 'Lome',
      country: '多哥'
    },
  'CON': {
      chinese: '科纳克里',
      english: 'Conakry',
      country: '几内亚'
    },
  'FNA': {
      chinese: '弗里敦',
      english: 'Freetown',
      country: '塞拉利昂'
    },
  'ROB': {
      chinese: '蒙罗维亚',
      english: 'Monrovia',
      country: '利比里亚'
    },
  'BJL': {
      chinese: '班珠尔',
      english: 'Banjul',
      country: '冈比亚'
    },
  'BXO': {
      chinese: '比绍',
      english: 'Bissau',
      country: '几内亚比绍'
    },
  'RAI': {
      chinese: '佛得角',
      english: 'Praia',
      country: '佛得角'
    },
  'MBA': {
      chinese: '蒙巴萨',
      english: 'Mombasa',
      country: '肯尼亚'
    },
  'KRT': {
      chinese: '喀土穆',
      english: 'Khartoum',
      country: '苏丹'
    },
  'JUB': {
      chinese: '朱巴',
      english: 'Juba',
      country: '南苏丹'
    },
  'DOD': {
      chinese: '多多马',
      english: 'Dodoma',
      country: '坦桑尼亚'
    },
  'JRO': {
      chinese: '乞力马扎罗',
      english: 'Kilimanjaro',
      country: '坦桑尼亚'
    },
  'BJM': {
      chinese: '布琼布拉',
      english: 'Bujumbura',
      country: '布隆迪'
    },
  'ASM': {
      chinese: '阿斯马拉',
      english: 'Asmara',
      country: '厄立特里亚'
    },
  'JIB': {
      chinese: '吉布提',
      english: 'Djibouti',
      country: '吉布提'
    },
  'MGQ': {
      chinese: '摩加迪沙',
      english: 'Mogadishu',
      country: '索马里'
    },
  'HGA': {
      chinese: '哈尔格萨',
      english: 'Hargeisa',
      country: '索马里兰'
    },
  'PLZ': {
      chinese: '伊丽莎白港',
      english: 'Port Elizabeth',
      country: '南非'
    },
  'BFN': {
      chinese: '布隆方丹',
      english: 'Bloemfontein',
      country: '南非'
    },
  'WDH': {
      chinese: '温得和克',
      english: 'Windhoek',
      country: '纳米比亚'
    },
  'GBE': {
      chinese: '哈博罗内',
      english: 'Gaborone',
      country: '博茨瓦纳'
    },
  'MSU': {
      chinese: '马塞卢',
      english: 'Maseru',
      country: '莱索托'
    },
  'MTS': {
      chinese: '马普托',
      english: 'Maputo',
      country: '莫桑比克'
    },
  'BEW': {
      chinese: '贝拉',
      english: 'Beira',
      country: '莫桑比克'
    },
  'MPM': {
      chinese: '马普托',
      english: 'Maputo',
      country: '莫桑比克'
    },
  'HRE': {
      chinese: '哈拉雷',
      english: 'Harare',
      country: '津巴布韦'
    },
  'BUQ': {
      chinese: '布拉瓦约',
      english: 'Bulawayo',
      country: '津巴布韦'
    },
  'LUN': {
      chinese: '卢萨卡',
      english: 'Lusaka',
      country: '赞比亚'
    },
  'NDL': {
      chinese: '恩多拉',
      english: 'Ndola',
      country: '赞比亚'
    },
  'LVI': {
      chinese: '利文斯顿',
      english: 'Livingstone',
      country: '赞比亚'
    },
  'LLW': {
      chinese: '利隆圭',
      english: 'Lilongwe',
      country: '马拉维'
    },
  'BLZ': {
      chinese: '布兰太尔',
      english: 'Blantyre',
      country: '马拉维'
    },
  'MRU': {
      chinese: '路易港',
      english: 'Port Louis',
      country: '毛里求斯'
    },
  'RUN': {
      chinese: '圣但尼',
      english: 'Saint Denis',
      country: '留尼汪'
    },
  'SEZ': {
      chinese: '马埃岛',
      english: 'Mahe',
      country: '塞舌尔'
    },
  'TNR': {
      chinese: '安塔那那利佛',
      english: 'Antananarivo',
      country: '马达加斯加'
    }
  };

// 根据机场代码获取城市名称
export function getAirportCity(code: string): string | null {
  const upperCode = code.toUpperCase();
  const airport = airportCodes[upperCode];
  return airport ? airport.chinese : null;
}

// 根据机场代码获取完整信息
export function getAirportInfo(code: string): AirportInfo | null {
  const upperCode = code.toUpperCase();
  return airportCodes[upperCode] || null;
}

// 格式化机场显示 - 返回与搜索一致的格式 "WAW - 华沙 | Warsaw Chopin | 波兰 PL · 欧洲"
export function formatAirportDisplay(code: string): string {
  const upperCode = code.toUpperCase();
  const airport = airportCodes[upperCode];
  if (airport) {
    // 使用与搜索结果一致的格式
    const countryWithCode = airport.countryWithCode || airport.country;
    return `${upperCode} - ${airport.chinese} | ${airport.english} | ${countryWithCode} · ${airport.continent}`;
  }
  return upperCode;
}
