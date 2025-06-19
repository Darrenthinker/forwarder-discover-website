// 大洋洲国际机场三字代码映射表
export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
}

// ================================================================
// 大洋洲 OCEANIA - 国际机场代码
// ================================================================

export const oceaniaAirports: { [key: string]: AirportInfo } = {

  // ================================================================
  // 🇦🇺 澳大利亚 AUSTRALIA - 国际机场
  // ================================================================

  // 主要国际机场
  'SYD': { chinese: '悉尼', english: 'Sydney Kingsford Smith', country: '澳大利亚' },
  'MEL': { chinese: '墨尔本', english: 'Melbourne Tullamarine', country: '澳大利亚' },
  'BNE': { chinese: '布里斯班', english: 'Brisbane', country: '澳大利亚' },
  'PER': { chinese: '珀斯', english: 'Perth', country: '澳大利亚' },
  'ADL': { chinese: '阿德莱德', english: 'Adelaide', country: '澳大利亚' },
  'DRW': { chinese: '达尔文', english: 'Darwin', country: '澳大利亚' },
  'CNS': { chinese: '凯恩斯', english: 'Cairns', country: '澳大利亚' },
  'OOL': { chinese: '黄金海岸', english: 'Gold Coast Coolangatta', country: '澳大利亚' },
  'CBR': { chinese: '堪培拉', english: 'Canberra', country: '澳大利亚' },
  'TSV': { chinese: '汤斯维尔', english: 'Townsville', country: '澳大利亚' },
  'HBA': { chinese: '霍巴特', english: 'Hobart', country: '澳大利亚' },
  'LST': { chinese: '朗塞斯顿', english: 'Launceston', country: '澳大利亚' },
  'AVV': { chinese: '阿瓦隆', english: 'Avalon Melbourne', country: '澳大利亚' },
  'NTL': { chinese: '纽卡斯尔', english: 'Newcastle Williamtown', country: '澳大利亚' },

  // ================================================================
  // 🇳🇿 新西兰 NEW ZEALAND - 国际机场
  // ================================================================

  'AKL': { chinese: '奥克兰', english: 'Auckland', country: '新西兰' },
  'CHC': { chinese: '基督城', english: 'Christchurch', country: '新西兰' },
  'WLG': { chinese: '惠灵顿', english: 'Wellington', country: '新西兰' },
  'ZQN': { chinese: '皇后镇', english: 'Queenstown', country: '新西兰' },
  'DUD': { chinese: '达尼丁', english: 'Dunedin', country: '新西兰' },
  'HLZ': { chinese: '汉密尔顿', english: 'Hamilton', country: '新西兰' },
  'NPL': { chinese: '新普利茅斯', english: 'New Plymouth', country: '新西兰' },
  'ROT': { chinese: '罗托鲁阿', english: 'Rotorua', country: '新西兰' },

  // ================================================================
  // 🇫🇯 斐济 FIJI - 国际机场
  // ================================================================

  'NAN': { chinese: '楠迪', english: 'Nadi', country: '斐济' },
  'SUV': { chinese: '苏瓦', english: 'Suva Nausori', country: '斐济' },
  'LBS': { chinese: '拉巴萨', english: 'Labasa', country: '斐济' },
  'SVU': { chinese: '萨武萨武', english: 'Savusavu', country: '斐济' },

  // ================================================================
  // 🇵🇬 巴布亚新几内亚 PAPUA NEW GUINEA - 国际机场
  // ================================================================

  'POM': { chinese: '莫尔兹比港', english: 'Port Moresby Jacksons', country: '巴布亚新几内亚' },
  'LAE': { chinese: '莱城', english: 'Lae Nadzab', country: '巴布亚新几内亚' },
  'MAG': { chinese: '马当', english: 'Madang', country: '巴布亚新几内亚' },
  'HGU': { chinese: '芒特哈根', english: 'Mount Hagen', country: '巴布亚新几内亚' },
  'RAB': { chinese: '拉包尔', english: 'Rabaul Tokua', country: '巴布亚新几内亚' },
  'WWK': { chinese: '韦瓦克', english: 'Wewak', country: '巴布亚新几内亚' },
  'DAU': { chinese: '达鲁', english: 'Daru', country: '巴布亚新几内亚' },
  'VAI': { chinese: '万尼莫', english: 'Vanimo', country: '巴布亚新几内亚' },

  // ================================================================
  // 🇳🇨 新喀里多尼亚 NEW CALEDONIA (法属) - 国际机场
  // ================================================================

  'NOU': { chinese: '努美阿', english: 'Noumea La Tontouta', country: '新喀里多尼亚' },
  'GEA': { chinese: '马尔', english: 'Magenta', country: '新喀里多尼亚' },
  'ILP': { chinese: '松岛', english: 'Ile des Pins', country: '新喀里多尼亚' },
  'BMY': { chinese: '贝勒普', english: 'Belep', country: '新喀里多尼亚' },

  // ================================================================
  // 🇻🇺 瓦努阿图 VANUATU - 国际机场
  // ================================================================

  'VLI': { chinese: '维拉港', english: 'Port Vila Bauerfield', country: '瓦努阿图' },
  'SON': { chinese: '桑托', english: 'Santo Pekoa', country: '瓦努阿图' },
  'TAH': { chinese: '坦纳', english: 'Tanna', country: '瓦努阿图' },
  'AWD': { chinese: '安布里姆', english: 'Aniwa', country: '瓦努阿图' },

  // ================================================================
  // 🇸🇧 所罗门群岛 SOLOMON ISLANDS - 国际机场
  // ================================================================

  'HIR': { chinese: '霍尼亚拉', english: 'Honiara Henderson', country: '所罗门群岛' },
  'MUA': { chinese: '蒙达', english: 'Munda', country: '所罗门群岛' },
  'GZO': { chinese: '吉佐', english: 'Gizo', country: '所罗门群岛' },

  // ================================================================
  // 🇵🇫 法属波利尼西亚 FRENCH POLYNESIA - 国际机场
  // ================================================================

  'PPT': { chinese: '帕皮提', english: 'Papeete Tahiti Faa\'a', country: '法属波利尼西亚' },
  'BOB': { chinese: '博拉博拉', english: 'Bora Bora', country: '法属波利尼西亚' },
  'MOZ': { chinese: '摩雷阿', english: 'Moorea', country: '法属波利尼西亚' },
  'HUH': { chinese: '胡阿欣', english: 'Huahine', country: '法属波利尼西亚' },
  'RFP': { chinese: '拉亚特阿', english: 'Raiatea', country: '法属波利尼西亚' },
  'GMR': { chinese: '甘比尔', english: 'Mangareva', country: '法属波利尼西亚' },
  'NHV': { chinese: '马库萨斯', english: 'Marquesas Nuku Hiva', country: '法属波利尼西亚' },

  // ================================================================
  // 🇼🇸 萨摩亚 SAMOA - 国际机场
  // ================================================================

  'APW': { chinese: '阿皮亚', english: 'Apia Faleolo', country: '萨摩亚' },

  // ================================================================
  // 🇹🇴 汤加 TONGA - 国际机场
  // ================================================================

  'TBU': { chinese: '努库阿洛法', english: 'Nuku\'alofa Fua\'amotu', country: '汤加' },
  'EUA': { chinese: '厄瓦', english: 'Eua', country: '汤加' },
  'HPA': { chinese: '哈派', english: 'Ha\'apai', country: '汤加' },
  'VBV': { chinese: '瓦瓦乌', english: 'Vava\'u', country: '汤加' },

  // ================================================================
  // 🇨🇰 库克群岛 COOK ISLANDS - 国际机场
  // ================================================================

  'RAR': { chinese: '拉罗汤加', english: 'Rarotonga', country: '库克群岛' },
  'AIT': { chinese: '艾图塔基', english: 'Aitutaki', country: '库克群岛' },
  'MOI': { chinese: '毛克', english: 'Mauke', country: '库克群岛' },
  'MUK': { chinese: '米蒂阿罗', english: 'Mitiaro', country: '库克群岛' },
  'PYE': { chinese: '彭林', english: 'Penrhyn', country: '库克群岛' },

  // ================================================================
  // 🇺🇸 美国太平洋领土 - 国际机场
  // ================================================================

  // 关岛 GUAM
  'GUM': { chinese: '关岛', english: 'Guam Antonio B. Won Pat', country: '关岛' },

  // 北马里亚纳群岛 NORTHERN MARIANA ISLANDS
  'SPN': { chinese: '塞班', english: 'Saipan', country: '北马里亚纳群岛' },
  'ROP': { chinese: '罗塔', english: 'Rota', country: '北马里亚纳群岛' },
  'TNI': { chinese: '天宁', english: 'Tinian', country: '北马里亚纳群岛' },

  // 美属萨摩亚 AMERICAN SAMOA
  'PPG': { chinese: '帕果帕果', english: 'Pago Pago', country: '美属萨摩亚' },

  // ================================================================
  // 🇵🇼 帕劳 PALAU - 国际机场
  // ================================================================

  'ROR': { chinese: '科罗尔', english: 'Koror', country: '帕劳' },
  'PBG': { chinese: '巴贝尔达奥布', english: 'Babeldaob', country: '帕劳' },

  // ================================================================
  // 🇫🇲 密克罗尼西亚联邦 FEDERATED STATES OF MICRONESIA - 国际机场
  // ================================================================

  'PNI': { chinese: '波纳佩', english: 'Pohnpei', country: '密克罗尼西亚联邦' },
  'TKK': { chinese: '楚克', english: 'Chuuk', country: '密克罗尼西亚联邦' },
  'YAP': { chinese: '雅浦', english: 'Yap', country: '密克罗尼西亚联邦' },
  'KSA': { chinese: '科斯雷', english: 'Kosrae', country: '密克罗尼西亚联邦' },

  // ================================================================
  // 🇲🇭 马绍尔群岛 MARSHALL ISLANDS - 国际机场
  // ================================================================

  'MAJ': { chinese: '马朱罗', english: 'Majuro Marshall Islands', country: '马绍尔群岛' },
  'KWA': { chinese: '夸贾林', english: 'Kwajalein', country: '马绍尔群岛' },

  // ================================================================
  // 🇳🇷 瑙鲁 NAURU - 国际机场
  // ================================================================

  'INU': { chinese: '瑙鲁', english: 'Nauru', country: '瑙鲁' },

  // ================================================================
  // 🇰🇮 基里巴斯 KIRIBATI - 国际机场
  // ================================================================

  'TRW': { chinese: '塔拉瓦', english: 'Tarawa Bonriki', country: '基里巴斯' },
  'CXI': { chinese: '圣诞岛', english: 'Christmas Island Cassidy', country: '基里巴斯' },

  // ================================================================
  // 🇹🇻 图瓦卢 TUVALU - 国际机场
  // ================================================================

  'FUN': { chinese: '富纳富提', english: 'Funafuti', country: '图瓦卢' },
};
