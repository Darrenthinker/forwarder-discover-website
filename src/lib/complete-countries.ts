// 完整的全球国家和地区数据库
// Complete Global Countries and Territories Database

import { shouldExcludeCountry, COUNTRY_ALIASES } from './country-aliases';

export interface CountryInfo {
  chinese: string;
  english: string;
  code: string; // ISO 3166-1 alpha-2 code
  continent: string;
  hasAirport: boolean;
  capital?: string;
  type: 'country' | 'territory' | 'region'; // 区分主权国家、属地、特殊地区
  sovereignty?: string; // 对于地区，标明隶属国家
  note?: string; // 特殊说明
}

// 全球完整国家和地区数据库 - 精确分类为197个国家 + 地区
export const completeCountriesDatabase: CountryInfo[] = [

  // 亚洲 (47个国家 + 2个地区)
  // 东亚 5个国家
  { chinese: '中国', english: 'China', code: 'CN', continent: '亚洲', hasAirport: true, capital: '北京', type: 'country' },
  { chinese: '日本', english: 'Japan', code: 'JP', continent: '亚洲', hasAirport: true, capital: '东京', type: 'country' },
  { chinese: '韩国', english: 'South Korea', code: 'KR', continent: '亚洲', hasAirport: true, capital: '首尔', type: 'country' },
  { chinese: '朝鲜', english: 'North Korea', code: 'KP', continent: '亚洲', hasAirport: true, capital: '平壤', type: 'country' },
  { chinese: '蒙古', english: 'Mongolia', code: 'MN', continent: '亚洲', hasAirport: true, capital: '乌兰巴托', type: 'country' },

  // 东南亚 11个国家
  { chinese: '印度尼西亚', english: 'Indonesia', code: 'ID', continent: '亚洲', hasAirport: true, capital: '雅加达', type: 'country' },
  { chinese: '菲律宾', english: 'Philippines', code: 'PH', continent: '亚洲', hasAirport: true, capital: '马尼拉', type: 'country' },
  { chinese: '越南', english: 'Vietnam', code: 'VN', continent: '亚洲', hasAirport: true, capital: '河内', type: 'country' },
  { chinese: '泰国', english: 'Thailand', code: 'TH', continent: '亚洲', hasAirport: true, capital: '曼谷', type: 'country' },
  { chinese: '缅甸', english: 'Myanmar', code: 'MM', continent: '亚洲', hasAirport: true, capital: '内比都', type: 'country' },
  { chinese: '马来西亚', english: 'Malaysia', code: 'MY', continent: '亚洲', hasAirport: true, capital: '吉隆坡', type: 'country' },
  { chinese: '柬埔寨', english: 'Cambodia', code: 'KH', continent: '亚洲', hasAirport: true, capital: '金边', type: 'country' },
  { chinese: '老挝', english: 'Laos', code: 'LA', continent: '亚洲', hasAirport: true, capital: '万象', type: 'country' },
  { chinese: '新加坡', english: 'Singapore', code: 'SG', continent: '亚洲', hasAirport: true, capital: '新加坡', type: 'country' },
  { chinese: '文莱', english: 'Brunei', code: 'BN', continent: '亚洲', hasAirport: true, capital: '斯里巴加湾市', type: 'country' },
  { chinese: '东帝汶', english: 'East Timor', code: 'TL', continent: '亚洲', hasAirport: true, capital: '帝力', type: 'country' },

  // 南亚 7个国家
  { chinese: '印度', english: 'India', code: 'IN', continent: '亚洲', hasAirport: true, capital: '新德里', type: 'country' },
  { chinese: '巴基斯坦', english: 'Pakistan', code: 'PK', continent: '亚洲', hasAirport: true, capital: '伊斯兰堡', type: 'country' },
  { chinese: '孟加拉国', english: 'Bangladesh', code: 'BD', continent: '亚洲', hasAirport: true, capital: '达卡', type: 'country' },
  { chinese: '斯里兰卡', english: 'Sri Lanka', code: 'LK', continent: '亚洲', hasAirport: true, capital: '科伦坡', type: 'country' },
  { chinese: '尼泊尔', english: 'Nepal', code: 'NP', continent: '亚洲', hasAirport: true, capital: '加德满都', type: 'country' },
  { chinese: '不丹', english: 'Bhutan', code: 'BT', continent: '亚洲', hasAirport: true, capital: '廷布', type: 'country' },
  { chinese: '马尔代夫', english: 'Maldives', code: 'MV', continent: '亚洲', hasAirport: true, capital: '马累', type: 'country' },

  // 中亚 5个国家
  { chinese: '哈萨克斯坦', english: 'Kazakhstan', code: 'KZ', continent: '亚洲', hasAirport: true, capital: '努尔苏丹', type: 'country' },
  { chinese: '乌兹别克斯坦', english: 'Uzbekistan', code: 'UZ', continent: '亚洲', hasAirport: true, capital: '塔什干', type: 'country' },
  { chinese: '吉尔吉斯斯坦', english: 'Kyrgyzstan', code: 'KG', continent: '亚洲', hasAirport: true, capital: '比什凯克', type: 'country' },
  { chinese: '土库曼斯坦', english: 'Turkmenistan', code: 'TM', continent: '亚洲', hasAirport: true, capital: '阿什哈巴德', type: 'country' },
  { chinese: '塔吉克斯坦', english: 'Tajikistan', code: 'TJ', continent: '亚洲', hasAirport: true, capital: '杜尚别', type: 'country' },

  // 西亚 19个国家
  { chinese: '土耳其', english: 'Turkey', code: 'TR', continent: '亚洲', hasAirport: true, capital: '安卡拉', type: 'country' },
  { chinese: '伊朗', english: 'Iran', code: 'IR', continent: '亚洲', hasAirport: true, capital: '德黑兰', type: 'country' },
  { chinese: '伊拉克', english: 'Iraq', code: 'IQ', continent: '亚洲', hasAirport: true, capital: '巴格达', type: 'country' },
  { chinese: '沙特阿拉伯', english: 'Saudi Arabia', code: 'SA', continent: '亚洲', hasAirport: true, capital: '利雅得', type: 'country' },
  { chinese: '阿联酋', english: 'United Arab Emirates', code: 'AE', continent: '亚洲', hasAirport: true, capital: '阿布扎比', type: 'country' },
  { chinese: '叙利亚', english: 'Syria', code: 'SY', continent: '亚洲', hasAirport: true, capital: '大马士革', type: 'country' },
  { chinese: '黎巴嫩', english: 'Lebanon', code: 'LB', continent: '亚洲', hasAirport: true, capital: '贝鲁特', type: 'country' },
  { chinese: '以色列', english: 'Israel', code: 'IL', continent: '亚洲', hasAirport: true, capital: '耶路撒冷', type: 'country' },
  { chinese: '巴勒斯坦', english: 'Palestine', code: 'PS', continent: '亚洲', hasAirport: false, capital: '拉马拉', type: 'country', note: '联合国观察员国，无国际机场' },
  { chinese: '约旦', english: 'Jordan', code: 'JO', continent: '亚洲', hasAirport: true, capital: '安曼', type: 'country' },
  { chinese: '科威特', english: 'Kuwait', code: 'KW', continent: '亚洲', hasAirport: true, capital: '科威特城', type: 'country' },
  { chinese: '卡塔尔', english: 'Qatar', code: 'QA', continent: '亚洲', hasAirport: true, capital: '多哈', type: 'country' },
  { chinese: '巴林', english: 'Bahrain', code: 'BH', continent: '亚洲', hasAirport: true, capital: '麦纳麦', type: 'country' },
  { chinese: '阿曼', english: 'Oman', code: 'OM', continent: '亚洲', hasAirport: true, capital: '马斯喀特', type: 'country' },
  { chinese: '也门', english: 'Yemen', code: 'YE', continent: '亚洲', hasAirport: true, capital: '萨那', type: 'country' },
  { chinese: '阿富汗', english: 'Afghanistan', code: 'AF', continent: '亚洲', hasAirport: true, capital: '喀布尔', type: 'country' },
  { chinese: '格鲁吉亚', english: 'Georgia', code: 'GE', continent: '亚洲', hasAirport: true, capital: '第比利斯', type: 'country' },
  { chinese: '亚美尼亚', english: 'Armenia', code: 'AM', continent: '亚洲', hasAirport: true, capital: '埃里温', type: 'country' },
  { chinese: '阿塞拜疆', english: 'Azerbaijan', code: 'AZ', continent: '亚洲', hasAirport: true, capital: '巴库', type: 'country' },

  // 西亚（塞浦路斯）
  { chinese: '塞浦路斯', english: 'Cyprus', code: 'CY', continent: '亚洲', hasAirport: true, capital: '尼科西亚', type: 'country' },

  // 欧洲 (44个国家 + 地区)
  // 北欧 5个国家
  { chinese: '冰岛', english: 'Iceland', code: 'IS', continent: '欧洲', hasAirport: true, capital: '雷克雅未克', type: 'country' },
  { chinese: '丹麦', english: 'Denmark', code: 'DK', continent: '欧洲', hasAirport: true, capital: '哥本哈根', type: 'country' },
  { chinese: '挪威', english: 'Norway', code: 'NO', continent: '欧洲', hasAirport: true, capital: '奥斯陆', type: 'country' },
  { chinese: '瑞典', english: 'Sweden', code: 'SE', continent: '欧洲', hasAirport: true, capital: '斯德哥尔摩', type: 'country' },
  { chinese: '芬兰', english: 'Finland', code: 'FI', continent: '欧洲', hasAirport: true, capital: '赫尔辛基', type: 'country' },

  // 西欧 7个国家
  { chinese: '英国', english: 'United Kingdom', code: 'GB', continent: '欧洲', hasAirport: true, capital: '伦敦', type: 'country' },
  { chinese: '爱尔兰', english: 'Ireland', code: 'IE', continent: '欧洲', hasAirport: true, capital: '都柏林', type: 'country' },
  { chinese: '荷兰', english: 'Netherlands', code: 'NL', continent: '欧洲', hasAirport: true, capital: '阿姆斯特丹', type: 'country' },
  { chinese: '比利时', english: 'Belgium', code: 'BE', continent: '欧洲', hasAirport: true, capital: '布鲁塞尔', type: 'country' },
  { chinese: '卢森堡', english: 'Luxembourg', code: 'LU', continent: '欧洲', hasAirport: true, capital: '卢森堡市', type: 'country' },
  { chinese: '法国', english: 'France', code: 'FR', continent: '欧洲', hasAirport: true, capital: '巴黎', type: 'country' },
  { chinese: '摩纳哥', english: 'Monaco', code: 'MC', continent: '欧洲', hasAirport: false, capital: '摩纳哥', type: 'country', note: '使用法国尼斯机场' },

  // 中欧 8个国家
  { chinese: '德国', english: 'Germany', code: 'DE', continent: '欧洲', hasAirport: true, capital: '柏林', type: 'country' },
  { chinese: '瑞士', english: 'Switzerland', code: 'CH', continent: '欧洲', hasAirport: true, capital: '伯尔尼', type: 'country' },
  { chinese: '列支敦士登', english: 'Liechtenstein', code: 'LI', continent: '欧洲', hasAirport: false, capital: '瓦杜兹', type: 'country', note: '使用瑞士苏黎世机场' },
  { chinese: '波兰', english: 'Poland', code: 'PL', continent: '欧洲', hasAirport: true, capital: '华沙', type: 'country' },
  { chinese: '捷克', english: 'Czech Republic', code: 'CZ', continent: '欧洲', hasAirport: true, capital: '布拉格', type: 'country' },
  { chinese: '斯洛伐克', english: 'Slovakia', code: 'SK', continent: '欧洲', hasAirport: true, capital: '布拉迪斯拉发', type: 'country' },
  { chinese: '奥地利', english: 'Austria', code: 'AT', continent: '欧洲', hasAirport: true, capital: '维也纳', type: 'country' },
  { chinese: '匈牙利', english: 'Hungary', code: 'HU', continent: '欧洲', hasAirport: true, capital: '布达佩斯', type: 'country' },

  // 东欧 7个国家
  { chinese: '爱沙尼亚', english: 'Estonia', code: 'EE', continent: '欧洲', hasAirport: true, capital: '塔林', type: 'country' },
  { chinese: '拉脱维亚', english: 'Latvia', code: 'LV', continent: '欧洲', hasAirport: true, capital: '里加', type: 'country' },
  { chinese: '立陶宛', english: 'Lithuania', code: 'LT', continent: '欧洲', hasAirport: true, capital: '维尔纽斯', type: 'country' },
  { chinese: '白俄罗斯', english: 'Belarus', code: 'BY', continent: '欧洲', hasAirport: true, capital: '明斯克', type: 'country' },
  { chinese: '乌克兰', english: 'Ukraine', code: 'UA', continent: '欧洲', hasAirport: true, capital: '基辅', type: 'country' },
  { chinese: '摩尔多瓦', english: 'Moldova', code: 'MD', continent: '欧洲', hasAirport: true, capital: '基希讷乌', type: 'country' },
  { chinese: '俄罗斯', english: 'Russia', code: 'RU', continent: '欧洲', hasAirport: true, capital: '莫斯科', type: 'country' },

  // 南欧 17个国家
  { chinese: '葡萄牙', english: 'Portugal', code: 'PT', continent: '欧洲', hasAirport: true, capital: '里斯本', type: 'country' },
  { chinese: '西班牙', english: 'Spain', code: 'ES', continent: '欧洲', hasAirport: true, capital: '马德里', type: 'country' },
  { chinese: '安道尔', english: 'Andorra', code: 'AD', continent: '欧洲', hasAirport: false, capital: '安道尔城', type: 'country', note: '使用西班牙巴塞罗那机场' },
  { chinese: '意大利', english: 'Italy', code: 'IT', continent: '欧洲', hasAirport: true, capital: '罗马', type: 'country' },
  { chinese: '圣马力诺', english: 'San Marino', code: 'SM', continent: '欧洲', hasAirport: false, capital: '圣马力诺', type: 'country', note: '使用意大利里米尼机场' },
  { chinese: '梵蒂冈', english: 'Vatican City', code: 'VA', continent: '欧洲', hasAirport: false, capital: '梵蒂冈', type: 'country', note: '世界最小国家，使用罗马机场' },
  { chinese: '马耳他', english: 'Malta', code: 'MT', continent: '欧洲', hasAirport: true, capital: '瓦莱塔', type: 'country' },
  { chinese: '斯洛文尼亚', english: 'Slovenia', code: 'SI', continent: '欧洲', hasAirport: true, capital: '卢布尔雅那', type: 'country' },
  { chinese: '克罗地亚', english: 'Croatia', code: 'HR', continent: '欧洲', hasAirport: true, capital: '萨格勒布', type: 'country' },
  { chinese: '波黑', english: 'Bosnia and Herzegovina', code: 'BA', continent: '欧洲', hasAirport: true, capital: '萨拉热窝', type: 'country' },
  { chinese: '黑山', english: 'Montenegro', code: 'ME', continent: '欧洲', hasAirport: true, capital: '波德戈里察', type: 'country' },
  { chinese: '塞尔维亚', english: 'Serbia', code: 'RS', continent: '欧洲', hasAirport: true, capital: '贝尔格莱德', type: 'country' },
  { chinese: '阿尔巴尼亚', english: 'Albania', code: 'AL', continent: '欧洲', hasAirport: true, capital: '地拉那', type: 'country' },
  { chinese: '北马其顿', english: 'North Macedonia', code: 'MK', continent: '欧洲', hasAirport: true, capital: '斯科普里', type: 'country' },
  { chinese: '保加利亚', english: 'Bulgaria', code: 'BG', continent: '欧洲', hasAirport: true, capital: '索菲亚', type: 'country' },
  { chinese: '希腊', english: 'Greece', code: 'GR', continent: '欧洲', hasAirport: true, capital: '雅典', type: 'country' },
  { chinese: '罗马尼亚', english: 'Romania', code: 'RO', continent: '欧洲', hasAirport: true, capital: '布加勒斯特', type: 'country' },

  // 欧洲地区
  { chinese: '法罗群岛', english: 'Faroe Islands', code: 'FO', continent: '欧洲', hasAirport: true, capital: '托尔斯港', type: 'territory', sovereignty: '丹麦' },
  { chinese: '直布罗陀', english: 'Gibraltar', code: 'GI', continent: '欧洲', hasAirport: true, capital: '直布罗陀', type: 'territory', sovereignty: '英国' },

  // 北美洲 (23个国家 + 地区)
  // 北美 2个国家
  { chinese: '加拿大', english: 'Canada', code: 'CA', continent: '北美洲', hasAirport: true, capital: '渥太华', type: 'country' },
  { chinese: '美国', english: 'United States', code: 'US', continent: '北美洲', hasAirport: true, capital: '华盛顿', type: 'country' },

  // 中美洲 8个国家
  { chinese: '墨西哥', english: 'Mexico', code: 'MX', continent: '北美洲', hasAirport: true, capital: '墨西哥城', type: 'country' },
  { chinese: '危地马拉', english: 'Guatemala', code: 'GT', continent: '北美洲', hasAirport: true, capital: '危地马拉城', type: 'country' },
  { chinese: '伯利兹', english: 'Belize', code: 'BZ', continent: '北美洲', hasAirport: true, capital: '贝尔莫潘', type: 'country' },
  { chinese: '萨尔瓦多', english: 'El Salvador', code: 'SV', continent: '北美洲', hasAirport: true, capital: '圣萨尔瓦多', type: 'country' },
  { chinese: '洪都拉斯', english: 'Honduras', code: 'HN', continent: '北美洲', hasAirport: true, capital: '特古西加尔巴', type: 'country' },
  { chinese: '尼加拉瓜', english: 'Nicaragua', code: 'NI', continent: '北美洲', hasAirport: true, capital: '马那瓜', type: 'country' },
  { chinese: '哥斯达黎加', english: 'Costa Rica', code: 'CR', continent: '北美洲', hasAirport: true, capital: '圣何塞', type: 'country' },
  { chinese: '巴拿马', english: 'Panama', code: 'PA', continent: '北美洲', hasAirport: true, capital: '巴拿马城', type: 'country' },

  // 加勒比地区 13个国家
  { chinese: '巴哈马', english: 'Bahamas', code: 'BS', continent: '北美洲', hasAirport: true, capital: '拿骚', type: 'country' },
  { chinese: '古巴', english: 'Cuba', code: 'CU', continent: '北美洲', hasAirport: true, capital: '哈瓦那', type: 'country' },
  { chinese: '牙买加', english: 'Jamaica', code: 'JM', continent: '北美洲', hasAirport: true, capital: '金斯敦', type: 'country' },
  { chinese: '海地', english: 'Haiti', code: 'HT', continent: '北美洲', hasAirport: true, capital: '太子港', type: 'country' },
  { chinese: '多米尼加', english: 'Dominican Republic', code: 'DO', continent: '北美洲', hasAirport: true, capital: '圣多明各', type: 'country' },
  { chinese: '圣基茨和尼维斯', english: 'Saint Kitts and Nevis', code: 'KN', continent: '北美洲', hasAirport: true, capital: '巴斯特尔', type: 'country' },
  { chinese: '安提瓜和巴布达', english: 'Antigua and Barbuda', code: 'AG', continent: '北美洲', hasAirport: true, capital: '圣约翰斯', type: 'country' },
  { chinese: '多米尼克', english: 'Dominica', code: 'DM', continent: '北美洲', hasAirport: true, capital: '罗索', type: 'country' },
  { chinese: '圣卢西亚', english: 'Saint Lucia', code: 'LC', continent: '北美洲', hasAirport: true, capital: '卡斯特里', type: 'country' },
  { chinese: '巴巴多斯', english: 'Barbados', code: 'BB', continent: '北美洲', hasAirport: true, capital: '布里奇敦', type: 'country' },
  { chinese: '圣文森特和格林纳丁斯', english: 'Saint Vincent and the Grenadines', code: 'VC', continent: '北美洲', hasAirport: true, capital: '金斯敦', type: 'country' },
  { chinese: '格林纳达', english: 'Grenada', code: 'GD', continent: '北美洲', hasAirport: true, capital: '圣乔治', type: 'country' },
  { chinese: '特立尼达和多巴哥', english: 'Trinidad and Tobago', code: 'TT', continent: '北美洲', hasAirport: true, capital: '西班牙港', type: 'country' },
  // 北美洲地区
  { chinese: '百慕大', english: 'Bermuda', code: 'BM', continent: '北美洲', hasAirport: true, capital: '汉密尔顿', type: 'territory', sovereignty: '英国' },
  { chinese: '格陵兰', english: 'Greenland', code: 'GL', continent: '北美洲', hasAirport: true, capital: '努克', type: 'territory', sovereignty: '丹麦' },
  { chinese: '开曼群岛', english: 'Cayman Islands', code: 'KY', continent: '北美洲', hasAirport: true, capital: '乔治敦', type: 'territory', sovereignty: '英国' },
  { chinese: '英属维尔京群岛', english: 'British Virgin Islands', code: 'VG', continent: '北美洲', hasAirport: true, capital: '罗德城', type: 'territory', sovereignty: '英国' },
  { chinese: '安圭拉', english: 'Anguilla', code: 'AI', continent: '北美洲', hasAirport: true, capital: '瓦利', type: 'territory', sovereignty: '英国' },
  { chinese: '蒙特塞拉特', english: 'Montserrat', code: 'MS', continent: '北美洲', hasAirport: true, capital: '普利茅斯', type: 'territory', sovereignty: '英国' },
  { chinese: '特克斯和凯科斯群岛', english: 'Turks and Caicos Islands', code: 'TC', continent: '北美洲', hasAirport: true, capital: '科伯恩城', type: 'territory', sovereignty: '英国' },
  { chinese: '美属维尔京群岛', english: 'US Virgin Islands', code: 'VI', continent: '北美洲', hasAirport: true, capital: '夏洛特阿马利亚', type: 'territory', sovereignty: '美国' },
  { chinese: '波多黎各', english: 'Puerto Rico', code: 'PR', continent: '北美洲', hasAirport: true, capital: '圣胡安', type: 'territory', sovereignty: '美国', note: '自治邦' },
  { chinese: '阿鲁巴', english: 'Aruba', code: 'AW', continent: '北美洲', hasAirport: true, capital: '奥拉涅斯塔德', type: 'territory', sovereignty: '荷兰' },
  { chinese: '库拉索', english: 'Curaçao', code: 'CW', continent: '北美洲', hasAirport: true, capital: '威廉斯塔德', type: 'territory', sovereignty: '荷兰' },
  { chinese: '荷属圣马丁', english: 'Sint Maarten', code: 'SX', continent: '北美洲', hasAirport: true, capital: '菲利普斯堡', type: 'territory', sovereignty: '荷兰' },
  { chinese: '法属圣马丁', english: 'Saint Martin', code: 'MF', continent: '北美洲', hasAirport: true, capital: '马里戈', type: 'territory', sovereignty: '法国' },
  { chinese: '圣巴泰勒米', english: 'Saint Barthélemy', code: 'BL', continent: '北美洲', hasAirport: true, capital: '古斯塔维亚', type: 'territory', sovereignty: '法国' },
  { chinese: '瓜德罗普', english: 'Guadeloupe', code: 'GP', continent: '北美洲', hasAirport: true, capital: '巴斯特尔', type: 'territory', sovereignty: '法国', note: '海外省' },
  { chinese: '马提尼克', english: 'Martinique', code: 'MQ', continent: '北美洲', hasAirport: true, capital: '法兰西堡', type: 'territory', sovereignty: '法国', note: '海外省' },

  // 南美洲 (12个国家 + 地区)
  // 北部 4个国家
  { chinese: '哥伦比亚', english: 'Colombia', code: 'CO', continent: '南美洲', hasAirport: true, capital: '波哥大', type: 'country' },
  { chinese: '委内瑞拉', english: 'Venezuela', code: 'VE', continent: '南美洲', hasAirport: true, capital: '加拉加斯', type: 'country' },
  { chinese: '圭亚那', english: 'Guyana', code: 'GY', continent: '南美洲', hasAirport: true, capital: '乔治敦', type: 'country' },
  { chinese: '苏里南', english: 'Suriname', code: 'SR', continent: '南美洲', hasAirport: true, capital: '帕拉马里博', type: 'country' },

  // 西部 3个国家
  { chinese: '厄瓜多尔', english: 'Ecuador', code: 'EC', continent: '南美洲', hasAirport: true, capital: '基多', type: 'country' },
  { chinese: '秘鲁', english: 'Peru', code: 'PE', continent: '南美洲', hasAirport: true, capital: '利马', type: 'country' },
  { chinese: '玻利维亚', english: 'Bolivia', code: 'BO', continent: '南美洲', hasAirport: true, capital: '苏克雷', type: 'country', note: '政府所在地拉巴斯' },

  // 东部 1个国家
  { chinese: '巴西', english: 'Brazil', code: 'BR', continent: '南美洲', hasAirport: true, capital: '巴西利亚', type: 'country' },

  // 南部 4个国家
  { chinese: '智利', english: 'Chile', code: 'CL', continent: '南美洲', hasAirport: true, capital: '圣地亚哥', type: 'country' },
  { chinese: '阿根廷', english: 'Argentina', code: 'AR', continent: '南美洲', hasAirport: true, capital: '布宜诺斯艾利斯', type: 'country' },
  { chinese: '乌拉圭', english: 'Uruguay', code: 'UY', continent: '南美洲', hasAirport: true, capital: '蒙得维的亚', type: 'country' },
  { chinese: '巴拉圭', english: 'Paraguay', code: 'PY', continent: '南美洲', hasAirport: true, capital: '亚松森', type: 'country' },

  // 南美洲地区
  { chinese: '法属圭亚那', english: 'French Guiana', code: 'GF', continent: '南美洲', hasAirport: true, capital: '卡延', type: 'territory', sovereignty: '法国' },
  { chinese: '福克兰群岛', english: 'Falkland Islands', code: 'FK', continent: '南美洲', hasAirport: true, capital: '斯坦利', type: 'territory', sovereignty: '英国' },
  { chinese: '南乔治亚和南桑威奇群岛', english: 'South Georgia and South Sandwich Islands', code: 'GS', continent: '南美洲', hasAirport: false, capital: '爱德华国王角', type: 'territory', sovereignty: '英国', note: '科研站' },

  // 非洲 (54个国家 + 地区)
  // 北非 5个国家
  { chinese: '埃及', english: 'Egypt', code: 'EG', continent: '非洲', hasAirport: true, capital: '开罗', type: 'country' },
  { chinese: '利比亚', english: 'Libya', code: 'LY', continent: '非洲', hasAirport: true, capital: '的黎波里', type: 'country' },
  { chinese: '突尼斯', english: 'Tunisia', code: 'TN', continent: '非洲', hasAirport: true, capital: '突尼斯市', type: 'country' },
  { chinese: '阿尔及利亚', english: 'Algeria', code: 'DZ', continent: '非洲', hasAirport: true, capital: '阿尔及尔', type: 'country' },
  { chinese: '摩洛哥', english: 'Morocco', code: 'MA', continent: '非洲', hasAirport: true, capital: '拉巴特', type: 'country' },

  // 西非 16个国家
  { chinese: '毛里塔尼亚', english: 'Mauritania', code: 'MR', continent: '非洲', hasAirport: true, capital: '努瓦克肖特', type: 'country' },
  { chinese: '塞内加尔', english: 'Senegal', code: 'SN', continent: '非洲', hasAirport: true, capital: '达喀尔', type: 'country' },
  { chinese: '冈比亚', english: 'Gambia', code: 'GM', continent: '非洲', hasAirport: true, capital: '班珠尔', type: 'country' },
  { chinese: '马里', english: 'Mali', code: 'ML', continent: '非洲', hasAirport: true, capital: '巴马科', type: 'country' },
  { chinese: '布基纳法索', english: 'Burkina Faso', code: 'BF', continent: '非洲', hasAirport: true, capital: '瓦加杜古', type: 'country' },
  { chinese: '几内亚', english: 'Guinea', code: 'GN', continent: '非洲', hasAirport: true, capital: '科纳克里', type: 'country' },
  { chinese: '几内亚比绍', english: 'Guinea-Bissau', code: 'GW', continent: '非洲', hasAirport: true, capital: '比绍', type: 'country' },
  { chinese: '佛得角', english: 'Cape Verde', code: 'CV', continent: '非洲', hasAirport: true, capital: '普拉亚', type: 'country' },
  { chinese: '塞拉利昂', english: 'Sierra Leone', code: 'SL', continent: '非洲', hasAirport: true, capital: '弗里敦', type: 'country' },
  { chinese: '利比里亚', english: 'Liberia', code: 'LR', continent: '非洲', hasAirport: true, capital: '蒙罗维亚', type: 'country' },
  { chinese: '科特迪瓦', english: 'Ivory Coast', code: 'CI', continent: '非洲', hasAirport: true, capital: '亚穆苏克罗', type: 'country' },
  { chinese: '加纳', english: 'Ghana', code: 'GH', continent: '非洲', hasAirport: true, capital: '阿克拉', type: 'country' },
  { chinese: '多哥', english: 'Togo', code: 'TG', continent: '非洲', hasAirport: true, capital: '洛美', type: 'country' },
  { chinese: '贝宁', english: 'Benin', code: 'BJ', continent: '非洲', hasAirport: true, capital: '波多诺伏', type: 'country' },
  { chinese: '尼日尔', english: 'Niger', code: 'NE', continent: '非洲', hasAirport: true, capital: '尼亚美', type: 'country' },
  { chinese: '尼日利亚', english: 'Nigeria', code: 'NG', continent: '非洲', hasAirport: true, capital: '阿布贾', type: 'country' },

  // 中非 8个国家
  { chinese: '乍得', english: 'Chad', code: 'TD', continent: '非洲', hasAirport: true, capital: '恩贾梅纳', type: 'country' },
  { chinese: '中非', english: 'Central African Republic', code: 'CF', continent: '非洲', hasAirport: true, capital: '班吉', type: 'country' },
  { chinese: '喀麦隆', english: 'Cameroon', code: 'CM', continent: '非洲', hasAirport: true, capital: '雅温得', type: 'country' },
  { chinese: '赤道几内亚', english: 'Equatorial Guinea', code: 'GQ', continent: '非洲', hasAirport: true, capital: '马拉博', type: 'country' },
  { chinese: '加蓬', english: 'Gabon', code: 'GA', continent: '非洲', hasAirport: true, capital: '利伯维尔', type: 'country' },
  { chinese: '刚果共和国', english: 'Republic of the Congo', code: 'CG', continent: '非洲', hasAirport: true, capital: '布拉柴维尔', type: 'country' },
  { chinese: '刚果民主共和国', english: 'Democratic Republic of the Congo', code: 'CD', continent: '非洲', hasAirport: true, capital: '金沙萨', type: 'country' },
  { chinese: '圣多美和普林西比', english: 'Sao Tome and Principe', code: 'ST', continent: '非洲', hasAirport: true, capital: '圣多美', type: 'country' },

  // 东非 12个国家
  { chinese: '苏丹', english: 'Sudan', code: 'SD', continent: '非洲', hasAirport: true, capital: '喀土穆', type: 'country' },
  { chinese: '南苏丹', english: 'South Sudan', code: 'SS', continent: '非洲', hasAirport: true, capital: '朱巴', type: 'country' },
  { chinese: '埃塞俄比亚', english: 'Ethiopia', code: 'ET', continent: '非洲', hasAirport: true, capital: '亚的斯亚贝巴', type: 'country' },
  { chinese: '厄立特里亚', english: 'Eritrea', code: 'ER', continent: '非洲', hasAirport: true, capital: '阿斯马拉', type: 'country' },
  { chinese: '索马里', english: 'Somalia', code: 'SO', continent: '非洲', hasAirport: true, capital: '摩加迪沙', type: 'country' },
  { chinese: '吉布提', english: 'Djibouti', code: 'DJ', continent: '非洲', hasAirport: true, capital: '吉布提市', type: 'country' },
  { chinese: '肯尼亚', english: 'Kenya', code: 'KE', continent: '非洲', hasAirport: true, capital: '内罗毕', type: 'country' },
  { chinese: '坦桑尼亚', english: 'Tanzania', code: 'TZ', continent: '非洲', hasAirport: true, capital: '多多马', type: 'country' },
  { chinese: '乌干达', english: 'Uganda', code: 'UG', continent: '非洲', hasAirport: true, capital: '坎帕拉', type: 'country' },
  { chinese: '卢旺达', english: 'Rwanda', code: 'RW', continent: '非洲', hasAirport: true, capital: '基加利', type: 'country' },
  { chinese: '布隆迪', english: 'Burundi', code: 'BI', continent: '非洲', hasAirport: true, capital: '布琼布拉', type: 'country' },
  { chinese: '塞舌尔', english: 'Seychelles', code: 'SC', continent: '非洲', hasAirport: true, capital: '维多利亚', type: 'country' },

  // 南非 13个国家
  { chinese: '安哥拉', english: 'Angola', code: 'AO', continent: '非洲', hasAirport: true, capital: '罗安达', type: 'country' },
  { chinese: '赞比亚', english: 'Zambia', code: 'ZM', continent: '非洲', hasAirport: true, capital: '卢萨卡', type: 'country' },
  { chinese: '马拉维', english: 'Malawi', code: 'MW', continent: '非洲', hasAirport: true, capital: '利隆圭', type: 'country' },
  { chinese: '莫桑比克', english: 'Mozambique', code: 'MZ', continent: '非洲', hasAirport: true, capital: '马普托', type: 'country' },
  { chinese: '纳米比亚', english: 'Namibia', code: 'NA', continent: '非洲', hasAirport: true, capital: '温得和克', type: 'country' },
  { chinese: '博茨瓦纳', english: 'Botswana', code: 'BW', continent: '非洲', hasAirport: true, capital: '哈博罗内', type: 'country' },
  { chinese: '津巴布韦', english: 'Zimbabwe', code: 'ZW', continent: '非洲', hasAirport: true, capital: '哈拉雷', type: 'country' },
  { chinese: '南非', english: 'South Africa', code: 'ZA', continent: '非洲', hasAirport: true, capital: '比勒陀利亚', type: 'country' },
  { chinese: '斯威士兰', english: 'Eswatini', code: 'SZ', continent: '非洲', hasAirport: true, capital: '姆巴巴纳', type: 'country' },
  { chinese: '莱索托', english: 'Lesotho', code: 'LS', continent: '非洲', hasAirport: true, capital: '马塞卢', type: 'country' },
  { chinese: '马达加斯加', english: 'Madagascar', code: 'MG', continent: '非洲', hasAirport: true, capital: '安塔那那利佛', type: 'country' },
  { chinese: '毛里求斯', english: 'Mauritius', code: 'MU', continent: '非洲', hasAirport: true, capital: '路易港', type: 'country' },
  { chinese: '科摩罗', english: 'Comoros', code: 'KM', continent: '非洲', hasAirport: true, capital: '莫罗尼', type: 'country' },

  // 非洲地区
  { chinese: '留尼汪', english: 'Reunion', code: 'RE', continent: '非洲', hasAirport: true, capital: '圣但尼', type: 'territory', sovereignty: '法国' },
  { chinese: '马约特', english: 'Mayotte', code: 'YT', continent: '非洲', hasAirport: true, capital: '马穆楚', type: 'territory', sovereignty: '法国' },
  { chinese: '圣赫勒拿', english: 'Saint Helena', code: 'SH', continent: '非洲', hasAirport: true, capital: '詹姆斯敦', type: 'territory', sovereignty: '英国' },
  { chinese: '西撒哈拉', english: 'Western Sahara', code: 'EH', continent: '非洲', hasAirport: false, capital: '阿尤恩', type: 'territory', sovereignty: '摩洛哥实际控制' },

  // 大洋洲 (14个国家 + 地区)
  // 主要国家 2个
  { chinese: '澳大利亚', english: 'Australia', code: 'AU', continent: '大洋洲', hasAirport: true, capital: '堪培拉', type: 'country' },
  { chinese: '新西兰', english: 'New Zealand', code: 'NZ', continent: '大洋洲', hasAirport: true, capital: '惠灵顿', type: 'country' },

  // 美拉尼西亚 4个国家
  { chinese: '巴布亚新几内亚', english: 'Papua New Guinea', code: 'PG', continent: '大洋洲', hasAirport: true, capital: '莫尔兹比港', type: 'country' },
  { chinese: '所罗门群岛', english: 'Solomon Islands', code: 'SB', continent: '大洋洲', hasAirport: true, capital: '霍尼亚拉', type: 'country' },
  { chinese: '瓦努阿图', english: 'Vanuatu', code: 'VU', continent: '大洋洲', hasAirport: true, capital: '维拉港', type: 'country' },
  { chinese: '斐济', english: 'Fiji', code: 'FJ', continent: '大洋洲', hasAirport: true, capital: '苏瓦', type: 'country' },

  // 密克罗尼西亚 5个国家
  { chinese: '帕劳', english: 'Palau', code: 'PW', continent: '大洋洲', hasAirport: true, capital: '恩吉鲁穆德', type: 'country' },
  { chinese: '密克罗尼西亚联邦', english: 'Federated States of Micronesia', code: 'FM', continent: '大洋洲', hasAirport: true, capital: '帕利基尔', type: 'country' },
  { chinese: '马绍尔群岛', english: 'Marshall Islands', code: 'MH', continent: '大洋洲', hasAirport: true, capital: '马朱罗', type: 'country' },
  { chinese: '瑙鲁', english: 'Nauru', code: 'NR', continent: '大洋洲', hasAirport: true, capital: '亚伦', type: 'country' },
  { chinese: '基里巴斯', english: 'Kiribati', code: 'KI', continent: '大洋洲', hasAirport: true, capital: '塔拉瓦', type: 'country' },

  // 波利尼西亚 3个国家
  { chinese: '图瓦卢', english: 'Tuvalu', code: 'TV', continent: '大洋洲', hasAirport: true, capital: '富纳富提', type: 'country' },
  { chinese: '萨摩亚', english: 'Samoa', code: 'WS', continent: '大洋洲', hasAirport: true, capital: '阿皮亚', type: 'country' },
  { chinese: '汤加', english: 'Tonga', code: 'TO', continent: '大洋洲', hasAirport: true, capital: '努库阿洛法', type: 'country' },

  // 大洋洲地区
  { chinese: '新喀里多尼亚', english: 'New Caledonia', code: 'NC', continent: '大洋洲', hasAirport: true, capital: '努美阿', type: 'territory', sovereignty: '法国' },
  { chinese: '法属波利尼西亚', english: 'French Polynesia', code: 'PF', continent: '大洋洲', hasAirport: true, capital: '帕皮提', type: 'territory', sovereignty: '法国' },
  { chinese: '瓦利斯和富图纳', english: 'Wallis and Futuna', code: 'WF', continent: '大洋洲', hasAirport: true, capital: '马塔乌图', type: 'territory', sovereignty: '法国' },
  { chinese: '库克群岛', english: 'Cook Islands', code: 'CK', continent: '大洋洲', hasAirport: true, capital: '阿瓦鲁阿', type: 'territory', sovereignty: '新西兰', note: '自由联合' },
  { chinese: '纽埃', english: 'Niue', code: 'NU', continent: '大洋洲', hasAirport: true, capital: '阿洛菲', type: 'territory', sovereignty: '新西兰', note: '自由联合' },
  { chinese: '托克劳', english: 'Tokelau', code: 'TK', continent: '大洋洲', hasAirport: false, capital: '努库诺努', type: 'territory', sovereignty: '新西兰', note: '无机场' },
  { chinese: '诺福克岛', english: 'Norfolk Island', code: 'NF', continent: '大洋洲', hasAirport: true, capital: '金斯顿', type: 'territory', sovereignty: '澳大利亚' },
  { chinese: '圣诞岛', english: 'Christmas Island', code: 'CX', continent: '大洋洲', hasAirport: true, capital: '飞鱼湾', type: 'territory', sovereignty: '澳大利亚' },
  { chinese: '科科斯群岛', english: 'Cocos (Keeling) Islands', code: 'CC', continent: '大洋洲', hasAirport: true, capital: '西岛', type: 'territory', sovereignty: '澳大利亚' },
  { chinese: '皮特凯恩群岛', english: 'Pitcairn Islands', code: 'PN', continent: '大洋洲', hasAirport: false, capital: '亚当斯敦', type: 'territory', sovereignty: '英国', note: '无机场' },
  { chinese: '关岛', english: 'Guam', code: 'GU', continent: '大洋洲', hasAirport: true, capital: '阿加尼亚', type: 'territory', sovereignty: '美国' },
  { chinese: '美属萨摩亚', english: 'American Samoa', code: 'AS', continent: '大洋洲', hasAirport: true, capital: '帕果帕果', type: 'territory', sovereignty: '美国' },
  { chinese: '北马里亚纳群岛', english: 'Northern Mariana Islands', code: 'MP', continent: '大洋洲', hasAirport: true, capital: '塞班', type: 'territory', sovereignty: '美国' },

];

// 统计信息
export const completeCountriesStats = {
  totalEntries: completeCountriesDatabase.length,
  countries: completeCountriesDatabase.filter(c => c.type === 'country').length,
  territories: completeCountriesDatabase.filter(c => c.type === 'territory').length,
  byContinent: {
    '亚洲': {
      total: completeCountriesDatabase.filter(c => c.continent === '亚洲').length,
      countries: completeCountriesDatabase.filter(c => c.continent === '亚洲' && c.type === 'country').length,
      territories: completeCountriesDatabase.filter(c => c.continent === '亚洲' && c.type === 'territory').length
    },
    '欧洲': {
      total: completeCountriesDatabase.filter(c => c.continent === '欧洲').length,
      countries: completeCountriesDatabase.filter(c => c.continent === '欧洲' && c.type === 'country').length,
      territories: completeCountriesDatabase.filter(c => c.continent === '欧洲' && c.type === 'territory').length
    },
    '北美洲': {
      total: completeCountriesDatabase.filter(c => c.continent === '北美洲').length,
      countries: completeCountriesDatabase.filter(c => c.continent === '北美洲' && c.type === 'country').length,
      territories: completeCountriesDatabase.filter(c => c.continent === '北美洲' && c.type === 'territory').length
    },
    '南美洲': {
      total: completeCountriesDatabase.filter(c => c.continent === '南美洲').length,
      countries: completeCountriesDatabase.filter(c => c.continent === '南美洲' && c.type === 'country').length,
      territories: completeCountriesDatabase.filter(c => c.continent === '南美洲' && c.type === 'territory').length
    },
    '非洲': {
      total: completeCountriesDatabase.filter(c => c.continent === '非洲').length,
      countries: completeCountriesDatabase.filter(c => c.continent === '非洲' && c.type === 'country').length,
      territories: completeCountriesDatabase.filter(c => c.continent === '非洲' && c.type === 'territory').length
    },
    '大洋洲': {
      total: completeCountriesDatabase.filter(c => c.continent === '大洋洲').length,
      countries: completeCountriesDatabase.filter(c => c.continent === '大洋洲' && c.type === 'country').length,
      territories: completeCountriesDatabase.filter(c => c.continent === '大洋洲' && c.type === 'territory').length
    }
  },
  withAirports: completeCountriesDatabase.filter(c => c.hasAirport).length,
  withoutAirports: completeCountriesDatabase.filter(c => !c.hasAirport).length
};

// 查询函数
export function getAllCompleteCountries(): CountryInfo[] {
  return completeCountriesDatabase;
}

export function getCountriesByContinent(continent: string): CountryInfo[] {
  return completeCountriesDatabase.filter(country => country.continent === continent);
}

export function getCountriesWithAirports(): CountryInfo[] {
  return completeCountriesDatabase.filter(country => country.hasAirport);
}

export function getCountriesWithoutAirports(): CountryInfo[] {
  return completeCountriesDatabase.filter(country => !country.hasAirport);
}

export function searchCompleteCountries(query: string): CountryInfo[] {
  const searchTerm = query.toLowerCase();

  const results = completeCountriesDatabase.filter(country => {
    const chineseMatch = country.chinese.toLowerCase().includes(searchTerm);
    const englishMatch = country.english.toLowerCase().includes(searchTerm);
    const codeMatch = country.code.toLowerCase().includes(searchTerm);
    const capitalMatch = country.capital?.toLowerCase().includes(searchTerm);

    // 🔥 新增：别名匹配支持
    let aliasMatch = false;
    const countryAlias = COUNTRY_ALIASES.find(alias => alias.standard === country.chinese);
    if (countryAlias) {
      aliasMatch = countryAlias.aliases.some(alias => 
        alias.toLowerCase().includes(searchTerm) || searchTerm.includes(alias.toLowerCase())
      );
    }

    // 如果有匹配但应该被排除，则跳过 (防止印度/印尼混淆)
    if ((chineseMatch || englishMatch || aliasMatch) && shouldExcludeCountry(query.trim(), country.chinese)) {
      return false;
    }

    return chineseMatch || englishMatch || codeMatch || capitalMatch || aliasMatch;
  });

  // 按匹配优先级排序：精确匹配 > 开头匹配 > 包含匹配
  return results.sort((a, b) => {
    const aChineseLower = a.chinese.toLowerCase();
    const bChineseLower = b.chinese.toLowerCase();
    const aEnglishLower = a.english.toLowerCase();
    const bEnglishLower = b.english.toLowerCase();

    // 精确匹配优先级最高
    const aExactMatch = aChineseLower === searchTerm || aEnglishLower === searchTerm;
    const bExactMatch = bChineseLower === searchTerm || bEnglishLower === searchTerm;

    if (aExactMatch && !bExactMatch) return -1;
    if (!aExactMatch && bExactMatch) return 1;

    // 开头匹配优先级次之
    const aStartsMatch = aChineseLower.startsWith(searchTerm) || aEnglishLower.startsWith(searchTerm);
    const bStartsMatch = bChineseLower.startsWith(searchTerm) || bEnglishLower.startsWith(searchTerm);

    if (aStartsMatch && !bStartsMatch) return -1;
    if (!aStartsMatch && bStartsMatch) return 1;

    // 最后按字母顺序
    return a.chinese.localeCompare(b.chinese);
  });
}

export function getCountryByCode(code: string): CountryInfo | null {
  return completeCountriesDatabase.find(country =>
    country.code.toLowerCase() === code.toLowerCase()
  ) || null;
}
