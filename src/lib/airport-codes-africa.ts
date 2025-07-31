// 非洲国际机场三字代码映射表
export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
  type?: 'international' | 'domestic' | 'regional' | 'military';
  customs?: boolean;
  priority?: number;
}

// ================================================================
// 非洲 AFRICA - 国际机场代码
// ================================================================

export const africaAirports: { [key: string]: AirportInfo } = {

  // ================================================================
  // 🇪🇬 埃及 EGYPT - 国际机场（北非第一组）
  // ================================================================

  'CAI': { chinese: '开罗', english: 'Cairo', country: '埃及' },
  'HRG': { chinese: '赫尔格达', english: 'Hurghada', country: '埃及' },
  'SSH': { chinese: '沙姆沙伊赫', english: 'Sharm El Sheikh', country: '埃及' },
  'LXR': { chinese: '卢克索', english: 'Luxor', country: '埃及' },
  'HBE': { chinese: '亚历山大', english: 'Alexandria Borg El Arab', country: '埃及' },
  'ASW': { chinese: '阿斯旺', english: 'Aswan', country: '埃及' },

  // ================================================================
  // 🇲🇦 摩洛哥 MOROCCO - 国际机场
  // ================================================================

  'CMN': { chinese: '卡萨布兰卡', english: 'Casablanca Mohammed V', country: '摩洛哥' },
  'RAK': { chinese: '马拉喀什', english: 'Marrakech Menara', country: '摩洛哥' },
  'FEZ': { chinese: '非斯', english: 'Fez Saiss', country: '摩洛哥' },
  'TNG': { chinese: '丹吉尔', english: 'Tangier Ibn Battouta', country: '摩洛哥' },
  'RBA': { chinese: '拉巴特', english: 'Rabat Sale', country: '摩洛哥' },
  'AGA': { chinese: '阿加迪尔', english: 'Agadir Al Massira', country: '摩洛哥' },

  // ================================================================
  // 🇩🇿 阿尔及利亚 ALGERIA - 国际机场
  // ================================================================

  'ALG': { chinese: '阿尔及尔', english: 'Algiers Houari Boumediene', country: '阿尔及利亚' },
  'ORN': { chinese: '奥兰', english: 'Oran Ahmed Ben Bella', country: '阿尔及利亚' },
  'CZL': { chinese: '君士坦丁', english: 'Constantine Mohamed Boudiaf', country: '阿尔及利亚' },

  // ================================================================
  // 🇹🇳 突尼斯 TUNISIA - 国际机场
  // ================================================================

  'TUN': { chinese: '突尼斯', english: 'Tunis Carthage', country: '突尼斯' },
  'MIR': { chinese: '莫纳斯提尔', english: 'Monastir Habib Bourguiba', country: '突尼斯' },
  'DJE': { chinese: '杰尔巴', english: 'Djerba Zarzis', country: '突尼斯' },

  // ================================================================
  // 🇱🇾 利比亚 LIBYA - 国际机场
  // ================================================================

  'TIP': { 
    chinese: '的黎波里国际机场', 
    english: 'Tripoli International Airport', 
    country: '利比亚',
    type: 'international',
    customs: true,
    priority: 95  // 🥇 利比亚最主要国际机场，北非重要门户
  },
  'BEN': { 
    chinese: '班加西贝尼纳国际机场', 
    english: 'Benghazi Benina International Airport', 
    country: '利比亚',
    type: 'international',
    customs: true,
    priority: 92  // 🏛️ 利比亚东部最重要机场
  },
  'MJI': { 
    chinese: '的黎波里米蒂加机场', 
    english: 'Tripoli Mitiga Airport', 
    country: '利比亚',
    type: 'international',
    customs: true,
    priority: 88  // 🛡️ 的黎波里替代机场，重要民用机场
  },
  'MRA': { 
    chinese: '米苏拉塔国际机场', 
    english: 'Misrata International Airport', 
    country: '利比亚',
    type: 'international',
    customs: true,
    priority: 85  // 🏭 重要工业城市机场
  },
  'SEB': { 
    chinese: '塞卜哈机场', 
    english: 'Sabha Airport', 
    country: '利比亚',
    type: 'domestic',
    customs: false,
    priority: 75  // 🏜️ 南部沙漠地区机场
  },

  // ================================================================
  // 🇸🇩 苏丹 SUDAN - 国际机场
  // ================================================================

  'KRT': { chinese: '喀土穆', english: 'Khartoum', country: '苏丹' },

  // ================================================================
  // 🇳🇬 尼日利亚 NIGERIA - 国际机场（西非第二组）
  // ================================================================

  'LOS': { chinese: '拉各斯', english: 'Lagos Murtala Muhammed', country: '尼日利亚' },
  'ABV': { chinese: '阿布贾', english: 'Abuja Nnamdi Azikiwe', country: '尼日利亚' },
  'KAN': { chinese: '卡诺', english: 'Kano Mallam Aminu Kano', country: '尼日利亚' },
  'PHC': { chinese: '哈科特港', english: 'Port Harcourt', country: '尼日利亚' },

  // ================================================================
  // 🇬🇭 加纳 GHANA - 国际机场
  // ================================================================

  'ACC': { chinese: '阿克拉', english: 'Accra Kotoka', country: '加纳' },

  // ================================================================
  // 🇸🇳 塞内加尔 SENEGAL - 国际机场
  // ================================================================

  'DSS': { chinese: '达喀尔', english: 'Dakar Blaise Diagne', country: '塞内加尔' },

  // ================================================================
  // 🇬🇳 几内亚 GUINEA - 国际机场
  // ================================================================

  'CKY': { chinese: '科纳克里', english: 'Conakry Gbessia', country: '几内亚' },

  // ================================================================
  // 🇨🇮 科特迪瓦 CÔTE D'IVOIRE - 国际机场
  // ================================================================

  'ABJ': { chinese: '阿比让', english: 'Abidjan Felix Houphouet Boigny', country: '科特迪瓦' },

  // ================================================================
  // 🇪🇹 埃塞俄比亚 ETHIOPIA - 国际机场（东非第三组）
  // ================================================================

  'ADD': { chinese: '亚的斯亚贝巴', english: 'Addis Ababa Bole', country: '埃塞俄比亚' },

  // ================================================================
  // 🇰🇪 肯尼亚 KENYA - 国际机场
  // ================================================================

  'NBO': { chinese: '内罗毕', english: 'Nairobi Jomo Kenyatta', country: '肯尼亚' },
  'MBA': { chinese: '蒙巴萨', english: 'Mombasa Moi', country: '肯尼亚' },

  // ================================================================
  // 🇹🇿 坦桑尼亚 TANZANIA - 国际机场
  // ================================================================

  'DAR': { chinese: '达累斯萨拉姆', english: 'Dar es Salaam Julius Nyerere', country: '坦桑尼亚' },
  'JRO': { chinese: '乞力马扎罗', english: 'Kilimanjaro', country: '坦桑尼亚' },
  'ZNZ': { chinese: '桑给巴尔', english: 'Zanzibar Abeid Amani Karume', country: '坦桑尼亚' },

  // ================================================================
  // 🇺🇬 乌干达 UGANDA - 国际机场
  // ================================================================

  'EBB': { chinese: '恩德培', english: 'Entebbe', country: '乌干达' },

  // ================================================================
  // 🇷🇼 卢旺达 RWANDA - 国际机场
  // ================================================================

  'KGL': { chinese: '基加利', english: 'Kigali', country: '卢旺达' },

  // ================================================================
  // 🇨🇲 喀麦隆 CAMEROON - 国际机场（中非第四组）
  // ================================================================

  'DLA': { chinese: '杜阿拉', english: 'Douala', country: '喀麦隆' },
  'NSI': { chinese: '雅温得', english: 'Yaounde Nsimalen', country: '喀麦隆' },

  // ================================================================
  // 🇨🇩 刚果民主共和国 DR CONGO - 国际机场
  // ================================================================

  'FIH': { chinese: '金沙萨', english: 'Kinshasa N\'djili', country: '刚果民主共和国' },
  'LBV': { chinese: '利伯维尔', english: 'Libreville Leon M\'ba', country: '加蓬' },

  // ================================================================
  // 🇦🇴 安哥拉 ANGOLA - 国际机场
  // ================================================================

  'LAD': { chinese: '罗安达', english: 'Luanda Quatro de Fevereiro', country: '安哥拉' },

  // ================================================================
  // 🇿🇦 南非 SOUTH AFRICA - 国际机场（南非第五组）
  // ================================================================

  'JNB': { chinese: '约翰内斯堡', english: 'Johannesburg OR Tambo', country: '南非' },
  'CPT': { chinese: '开普敦', english: 'Cape Town', country: '南非' },
  'DUR': { chinese: '德班', english: 'Durban King Shaka', country: '南非' },
  'PLZ': { chinese: '伊丽莎白港', english: 'Port Elizabeth Chief Dawid Stuurman', country: '南非' },

  // ================================================================
  // 🇿🇼 津巴布韦 ZIMBABWE - 国际机场
  // ================================================================

  'HRE': { chinese: '哈拉雷', english: 'Harare Robert Gabriel Mugabe', country: '津巴布韦' },

  // ================================================================
  // 🇧🇼 博茨瓦纳 BOTSWANA - 国际机场
  // ================================================================

  'GBE': { chinese: '哈博罗内', english: 'Gaborone Sir Seretse Khama', country: '博茨瓦纳' },

  // ================================================================
  // 🇳🇦 纳米比亚 NAMIBIA - 国际机场
  // ================================================================

  'WDH': { chinese: '温得和克', english: 'Windhoek Hosea Kutako', country: '纳米比亚' },

  // ================================================================
  // 🇿🇲 赞比亚 ZAMBIA - 国际机场
  // ================================================================

  'LUN': { chinese: '卢萨卡', english: 'Lusaka Kenneth Kaunda', country: '赞比亚' },

  // ================================================================
  // 🇲🇺 毛里求斯 MAURITIUS - 国际机场（印度洋岛屿）
  // ================================================================

  'MRU': { chinese: '毛里求斯', english: 'Mauritius Sir Seewoosagur Ramgoolam', country: '毛里求斯' },

  // ================================================================
  // 🇸🇨 塞舌尔 SEYCHELLES - 国际机场
  // ================================================================

  'SEZ': { chinese: '塞舌尔', english: 'Seychelles', country: '塞舌尔' },

};
