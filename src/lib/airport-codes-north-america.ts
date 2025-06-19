// 北美国际机场三字代码映射表
export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
}

// ================================================================
// 北美 NORTH AMERICA - 国际机场代码
// ================================================================

export const northAmericaAirports: { [key: string]: AirportInfo } = {

  // ================================================================
  // 🇺🇸 美国 UNITED STATES - 国际机场（第一批）
  // ================================================================

  // 东北部地区 NORTHEAST
  'NYC': { chinese: '纽约', english: 'New York City', country: '美国' },
  'JFK': { chinese: '纽约肯尼迪', english: 'New York John F. Kennedy', country: '美国' },
  'LGA': { chinese: '纽约拉瓜迪亚', english: 'New York LaGuardia', country: '美国' },
  'EWR': { chinese: '纽瓦克', english: 'Newark Liberty', country: '美国' },
  'BOS': { chinese: '波士顿', english: 'Boston Logan', country: '美国' },
  'DCA': { chinese: '华盛顿里根', english: 'Washington Reagan National', country: '美国' },
  'IAD': { chinese: '华盛顿杜勒斯', english: 'Washington Dulles', country: '美国' },
  'BWI': { chinese: '巴尔的摩', english: 'Baltimore Washington', country: '美国' },
  'PHL': { chinese: '费城', english: 'Philadelphia', country: '美国' },
  'PIT': { chinese: '匹兹堡', english: 'Pittsburgh', country: '美国' },
  'CLE': { chinese: '克利夫兰', english: 'Cleveland Hopkins', country: '美国' },
  'BUF': { chinese: '布法罗', english: 'Buffalo Niagara', country: '美国' },
  'ALB': { chinese: '奥尔巴尼', english: 'Albany', country: '美国' },
  'BGR': { chinese: '班戈', english: 'Bangor', country: '美国' },
  'PWM': { chinese: '波特兰', english: 'Portland Maine', country: '美国' },
  'BDL': { chinese: '哈特福德', english: 'Hartford Bradley', country: '美国' },
  'PVD': { chinese: '普罗维登斯', english: 'Providence', country: '美国' },

  // 东南部地区 SOUTHEAST
  'ATL': { chinese: '亚特兰大', english: 'Atlanta Hartsfield-Jackson', country: '美国' },
  'MIA': { chinese: '迈阿密', english: 'Miami', country: '美国' },
  'FLL': { chinese: '劳德代尔堡', english: 'Fort Lauderdale', country: '美国' },
  'PBI': { chinese: '西棕榈滩', english: 'West Palm Beach', country: '美国' },
  'MCO': { chinese: '奥兰多', english: 'Orlando', country: '美国' },
  'TPA': { chinese: '坦帕', english: 'Tampa', country: '美国' },
  'JAX': { chinese: '杰克逊维尔', english: 'Jacksonville', country: '美国' },
  'RSW': { chinese: '迈尔斯堡', english: 'Fort Myers Southwest Florida', country: '美国' },
  'CLT': { chinese: '夏洛特', english: 'Charlotte Douglas', country: '美国' },
  'RDU': { chinese: '罗利达勒姆', english: 'Raleigh-Durham', country: '美国' },
  'GSO': { chinese: '格林斯博罗', english: 'Greensboro', country: '美国' },
  'SAV': { chinese: '萨凡纳', english: 'Savannah', country: '美国' },
  'CHS': { chinese: '查尔斯顿', english: 'Charleston', country: '美国' },
  'MYR': { chinese: '默特尔比奇', english: 'Myrtle Beach', country: '美国' },
  'BNA': { chinese: '纳什维尔', english: 'Nashville', country: '美国' },
  'MEM': { chinese: '孟菲斯', english: 'Memphis', country: '美国' },
  'BHM': { chinese: '伯明翰', english: 'Birmingham', country: '美国' },
  'HSV': { chinese: '亨茨维尔', english: 'Huntsville', country: '美国' },
  'MOB': { chinese: '莫比尔', english: 'Mobile', country: '美国' },
  'MSY': { chinese: '新奥尔良', english: 'New Orleans Louis Armstrong', country: '美国' },
  'BTR': { chinese: '巴吞鲁日', english: 'Baton Rouge', country: '美国' },
  'LFT': { chinese: '拉法叶', english: 'Lafayette', country: '美国' },
  'SHV': { chinese: '什里夫波特', english: 'Shreveport', country: '美国' },
  'JAN': { chinese: '杰克逊', english: 'Jackson Mississippi', country: '美国' },
  'LIT': { chinese: '小石城', english: 'Little Rock', country: '美国' },
  'TUL': { chinese: '塔尔萨', english: 'Tulsa', country: '美国' },
  'OKC': { chinese: '俄克拉荷马城', english: 'Oklahoma City', country: '美国' },
  'XNA': { chinese: '本顿维尔', english: 'Bentonville Northwest Arkansas', country: '美国' },

  // ================================================================
  // 🇺🇸 美国 UNITED STATES - 国际机场（第二批）
  // ================================================================

  // 中西部地区 MIDWEST
  'ORD': { chinese: '芝加哥奥黑尔', english: 'Chicago O\'Hare', country: '美国' },
  'MDW': { chinese: '芝加哥中途', english: 'Chicago Midway', country: '美国' },
  'DTW': { chinese: '底特律', english: 'Detroit Wayne County', country: '美国' },
  'MSP': { chinese: '明尼阿波利斯', english: 'Minneapolis-St. Paul', country: '美国' },
  'MKE': { chinese: '密尔沃基', english: 'Milwaukee Mitchell', country: '美国' },
  'IND': { chinese: '印第安纳波利斯', english: 'Indianapolis', country: '美国' },
  'CVG': { chinese: '辛辛那提', english: 'Cincinnati Northern Kentucky', country: '美国' },
  'CMH': { chinese: '哥伦布', english: 'Columbus', country: '美国' },
  'STL': { chinese: '圣路易斯', english: 'St. Louis Lambert', country: '美国' },
  'MCI': { chinese: '堪萨斯城', english: 'Kansas City', country: '美国' },
  'OMA': { chinese: '奥马哈', english: 'Omaha Eppley', country: '美国' },
  'DSM': { chinese: '得梅因', english: 'Des Moines', country: '美国' },
  'MSN': { chinese: '麦迪逊', english: 'Madison', country: '美国' },
  'GRR': { chinese: '大急流城', english: 'Grand Rapids', country: '美国' },
  'FWA': { chinese: '韦恩堡', english: 'Fort Wayne', country: '美国' },

  // 西部地区 WEST
  'LAX': { chinese: '洛杉矶', english: 'Los Angeles', country: '美国' },
  'SFO': { chinese: '旧金山', english: 'San Francisco', country: '美国' },
  'SJC': { chinese: '圣何塞', english: 'San Jose', country: '美国' },
  'OAK': { chinese: '奥克兰', english: 'Oakland', country: '美国' },
  'BUR': { chinese: '伯班克', english: 'Burbank Hollywood', country: '美国' },
  'LGB': { chinese: '长滩', english: 'Long Beach', country: '美国' },
  'ONT': { chinese: '安大略', english: 'Ontario', country: '美国' },
  'SNA': { chinese: '橙县', english: 'Orange County John Wayne', country: '美国' },
  'SAN': { chinese: '圣地亚哥', english: 'San Diego', country: '美国' },
  'SMF': { chinese: '萨克拉门托', english: 'Sacramento', country: '美国' },
  'PDX': { chinese: '波特兰', english: 'Portland Oregon', country: '美国' },
  'SEA': { chinese: '西雅图', english: 'Seattle-Tacoma', country: '美国' },
  'BFI': { chinese: '西雅图波音', english: 'Seattle Boeing Field', country: '美国' },
  'DEN': { chinese: '丹佛', english: 'Denver', country: '美国' },
  'COS': { chinese: '科罗拉多斯普林斯', english: 'Colorado Springs', country: '美国' },
  'SLC': { chinese: '盐湖城', english: 'Salt Lake City', country: '美国' },
  'LAS': { chinese: '拉斯维加斯', english: 'Las Vegas McCarran', country: '美国' },
  'RNO': { chinese: '里诺', english: 'Reno-Tahoe', country: '美国' },
  'PHX': { chinese: '凤凰城', english: 'Phoenix Sky Harbor', country: '美国' },
  'TUS': { chinese: '图森', english: 'Tucson', country: '美国' },
  'ABQ': { chinese: '阿尔伯克基', english: 'Albuquerque', country: '美国' },
  'ELP': { chinese: '埃尔帕索', english: 'El Paso', country: '美国' },

  // 德克萨斯州 TEXAS
  'DFW': { chinese: '达拉斯沃思堡', english: 'Dallas Fort Worth', country: '美国' },
  'DAL': { chinese: '达拉斯拉夫菲尔德', english: 'Dallas Love Field', country: '美国' },
  'IAH': { chinese: '休斯敦布什', english: 'Houston Intercontinental', country: '美国' },
  'HOU': { chinese: '休斯敦霍比', english: 'Houston Hobby', country: '美国' },
  'AUS': { chinese: '奥斯汀', english: 'Austin-Bergstrom', country: '美国' },
  'SAT': { chinese: '圣安东尼奥', english: 'San Antonio', country: '美国' },

  // ================================================================
  // 🇺🇸 美国 UNITED STATES - 国际机场（第三批）
  // ================================================================

  // 夏威夷州 HAWAII
  'HNL': { chinese: '檀香山', english: 'Honolulu Daniel K. Inouye', country: '美国' },
  'OGG': { chinese: '茂宜岛', english: 'Maui Kahului', country: '美国' },
  'KOA': { chinese: '科纳', english: 'Kona', country: '美国' },
  'ITO': { chinese: '希洛', english: 'Hilo', country: '美国' },
  'LIH': { chinese: '考艾岛', english: 'Kauai Lihue', country: '美国' },

  // 阿拉斯加州 ALASKA
  'ANC': { chinese: '安克雷奇', english: 'Anchorage Ted Stevens', country: '美国' },
  'FAI': { chinese: '费尔班克斯', english: 'Fairbanks', country: '美国' },
  'JNU': { chinese: '朱诺', english: 'Juneau', country: '美国' },
  'KTN': { chinese: '凯奇坎', english: 'Ketchikan', country: '美国' },

  // 其他州补充
  'BZN': { chinese: '博兹曼', english: 'Bozeman Yellowstone', country: '美国' },
  'BOI': { chinese: '博伊西', english: 'Boise', country: '美国' },
  'BIL': { chinese: '比林斯', english: 'Billings Logan', country: '美国' },
  'GPI': { chinese: '卡利斯佩尔', english: 'Kalispell Glacier Park', country: '美国' },
  'JAC': { chinese: '杰克逊霍尔', english: 'Jackson Hole', country: '美国' },
  'SDF': { chinese: '路易维尔', english: 'Louisville', country: '美国' },
  'LEX': { chinese: '列克星敦', english: 'Lexington', country: '美国' },
  'RIC': { chinese: '里士满', english: 'Richmond', country: '美国' },
  'ORF': { chinese: '诺福克', english: 'Norfolk', country: '美国' },
  'ROA': { chinese: '罗阿诺克', english: 'Roanoke', country: '美国' },

  // ================================================================
  // 🇨🇦 加拿大 CANADA - 国际机场
  // ================================================================

  'YYZ': { chinese: '多伦多皮尔逊', english: 'Toronto Pearson', country: '加拿大' },
  'YTZ': { chinese: '多伦多岛屿', english: 'Toronto Billy Bishop', country: '加拿大' },
  'YVR': { chinese: '温哥华', english: 'Vancouver', country: '加拿大' },
  'YUL': { chinese: '蒙特利尔', english: 'Montreal Pierre Elliott Trudeau', country: '加拿大' },
  'YOW': { chinese: '渥太华', english: 'Ottawa Macdonald-Cartier', country: '加拿大' },
  'YYC': { chinese: '卡尔加里', english: 'Calgary', country: '加拿大' },
  'YEG': { chinese: '埃德蒙顿', english: 'Edmonton', country: '加拿大' },
  'YWG': { chinese: '温尼伯', english: 'Winnipeg Richardson', country: '加拿大' },
  'YHZ': { chinese: '哈利法克斯', english: 'Halifax Stanfield', country: '加拿大' },
  'YQB': { chinese: '魁北克城', english: 'Quebec City Jean Lesage', country: '加拿大' },
  'YYJ': { chinese: '维多利亚', english: 'Victoria', country: '加拿大' },
  'YKA': { chinese: '坎卢普斯', english: 'Kamloops', country: '加拿大' },
  'YXS': { chinese: '阿比蒂比王子港', english: 'Prince George', country: '加拿大' },
  'YQR': { chinese: '里贾纳', english: 'Regina', country: '加拿大' },
  'YXE': { chinese: '萨斯卡通', english: 'Saskatoon John G. Diefenbaker', country: '加拿大' },
  'YQT': { chinese: '桑德贝', english: 'Thunder Bay', country: '加拿大' },
  'YQM': { chinese: '蒙克顿', english: 'Moncton', country: '加拿大' },
  'YFC': { chinese: '弗雷德里克顿', english: 'Fredericton', country: '加拿大' },
  'YYT': { chinese: '圣约翰斯', english: 'St. John\'s', country: '加拿大' },

  // ================================================================
  // 🇲🇽 墨西哥 MEXICO - 国际机场
  // ================================================================

  'MEX': { chinese: '墨西哥城', english: 'Mexico City Benito Juarez', country: '墨西哥' },
  'CUN': { chinese: '坎昆', english: 'Cancun', country: '墨西哥' },
  'GDL': { chinese: '瓜达拉哈拉', english: 'Guadalajara Miguel Hidalgo', country: '墨西哥' },
  'MTY': { chinese: '蒙特雷', english: 'Monterrey General Mariano Escobedo', country: '墨西哥' },
  'TIJ': { chinese: '蒂华纳', english: 'Tijuana General Abelardo L. Rodriguez', country: '墨西哥' },
  'PVR': { chinese: '巴亚尔塔港', english: 'Puerto Vallarta Gustavo Diaz Ordaz', country: '墨西哥' },
  'SJD': { chinese: '洛斯卡沃斯', english: 'Los Cabos', country: '墨西哥' },
  'CZM': { chinese: '科苏梅尔', english: 'Cozumel', country: '墨西哥' },
  'MID': { chinese: '梅里达', english: 'Merida Manuel Crescencio Rejon', country: '墨西哥' },
  'VER': { chinese: '韦拉克鲁斯', english: 'Veracruz General Heriberto Jara', country: '墨西哥' },
  'ACA': { chinese: '阿卡普尔科', english: 'Acapulco General Juan N. Alvarez', country: '墨西哥' },
  'HUX': { chinese: '瓦哈卡', english: 'Huatulco Bahias de Huatulco', country: '墨西哥' },
  'ZIH': { chinese: '锡瓦塔内霍', english: 'Ixtapa-Zihuatanejo', country: '墨西哥' },
  'MZT': { chinese: '马萨特兰', english: 'Mazatlan General Rafael Buelna', country: '墨西哥' },
  'CUL': { chinese: '库利亚坎', english: 'Culiacan Federal de Bachigualato', country: '墨西哥' },
  'HMO': { chinese: '埃莫西约', english: 'Hermosillo General Ignacio Pesqueira Garcia', country: '墨西哥' },
  'CJS': { chinese: '华雷斯城', english: 'Ciudad Juarez Abraham Gonzalez', country: '墨西哥' },
  'LAP': { chinese: '拉巴斯', english: 'La Paz Manuel Marquez de Leon', country: '墨西哥' },
  'PXM': { chinese: '巴亚尔塔', english: 'Puerto Escondido', country: '墨西哥' },

  // ================================================================
  // 🇬🇱 格陵兰 GREENLAND - 国际机场
  // ================================================================

  'GOH': { chinese: '努克', english: 'Nuuk Godthab', country: '格陵兰' },
  'SFJ': { chinese: '康克鲁斯瓦格', english: 'Kangerlussuaq', country: '格陵兰' },

  // ================================================================
  // 🇧🇲 百慕大 BERMUDA - 国际机场
  // ================================================================

  'BDA': { chinese: '百慕大', english: 'Bermuda L.F. Wade', country: '百慕大' },

  // ================================================================
  // 其他北美领土和岛屿
  // ================================================================

  // 波多黎各 PUERTO RICO
  'SJU': { chinese: '圣胡安', english: 'San Juan Luis Munoz Marin', country: '波多黎各' },
  'BQN': { chinese: '阿瓜迪亚', english: 'Aguadilla Rafael Hernandez', country: '波多黎各' },
  'PSE': { chinese: '庞塞', english: 'Ponce Mercedita', country: '波多黎各' },

  // 美属维尔京群岛 US VIRGIN ISLANDS
  'STT': { chinese: '圣托马斯', english: 'St. Thomas Cyril E. King', country: '美属维尔京群岛' },
  'STX': { chinese: '圣克罗伊', english: 'St. Croix Henry E. Rohlsen', country: '美属维尔京群岛' },

  // 巴哈马 BAHAMAS
  'NAS': { chinese: '拿索', english: 'Nassau Lynden Pindling', country: '巴哈马' },
  'FPO': { chinese: '自由港', english: 'Freeport Grand Bahama', country: '巴哈马' },

  // 牙买加 JAMAICA
  'KIN': { chinese: '金斯敦', english: 'Kingston Norman Manley', country: '牙买加' },
  'MBJ': { chinese: '蒙特哥贝', english: 'Montego Bay Sangster', country: '牙买加' },

  // 古巴 CUBA
  'HAV': { chinese: '哈瓦那', english: 'Havana Jose Marti', country: '古巴' },
  'VRA': { chinese: '巴拉德罗', english: 'Varadero Juan Gualberto Gomez', country: '古巴' },

  // 海地 HAITI
  'PAP': { chinese: '太子港', english: 'Port-au-Prince Toussaint Louverture', country: '海地' },

  // 多米尼加共和国 DOMINICAN REPUBLIC
  'SDQ': { chinese: '圣多明各', english: 'Santo Domingo Las Americas', country: '多米尼加' },
  'PUJ': { chinese: '蓬塔卡纳', english: 'Punta Cana', country: '多米尼加' },
};
