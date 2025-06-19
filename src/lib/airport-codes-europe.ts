// 欧洲国际机场三字代码映射表
export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
}

// ================================================================
// 欧洲 EUROPE - 国际机场代码
// ================================================================

export const europeAirports: { [key: string]: AirportInfo } = {

  // ================================================================
  // 🇬🇧 英国 UNITED KINGDOM - 国际机场（第一组）
  // ================================================================

  'LON': { chinese: '伦敦', english: 'London', country: '英国' },
  'LHR': { chinese: '伦敦希思罗', english: 'London Heathrow', country: '英国' },
  'LGW': { chinese: '伦敦盖特威克', english: 'London Gatwick', country: '英国' },
  'STN': { chinese: '伦敦斯坦斯特德', english: 'London Stansted', country: '英国' },
  'LTN': { chinese: '伦敦卢顿', english: 'London Luton', country: '英国' },
  'LCY': { chinese: '伦敦城市', english: 'London City', country: '英国' },
  'MAN': { chinese: '曼彻斯特', english: 'Manchester', country: '英国' },
  'BHX': { chinese: '伯明翰', english: 'Birmingham', country: '英国' },
  'EDI': { chinese: '爱丁堡', english: 'Edinburgh', country: '英国' },
  'GLA': { chinese: '格拉斯哥', english: 'Glasgow', country: '英国' },
  'LPL': { chinese: '利物浦', english: 'Liverpool John Lennon', country: '英国' },
  'BRS': { chinese: '布里斯托尔', english: 'Bristol', country: '英国' },
  'NCL': { chinese: '纽卡斯尔', english: 'Newcastle', country: '英国' },
  'LBA': { chinese: '利兹', english: 'Leeds Bradford', country: '英国' },
  'ABZ': { chinese: '阿伯丁', english: 'Aberdeen', country: '英国' },
  'BFS': { chinese: '贝尔法斯特', english: 'Belfast International', country: '英国' },

  // ================================================================
  // 🇫🇷 法国 FRANCE - 国际机场
  // ================================================================

  'PAR': { chinese: '巴黎', english: 'Paris', country: '法国' },
  'CDG': { chinese: '巴黎戴高乐', english: 'Paris Charles de Gaulle', country: '法国' },
  'ORY': { chinese: '巴黎奥利', english: 'Paris Orly', country: '法国' },
  'NCE': { chinese: '尼斯', english: 'Nice Cote d\'Azur', country: '法国' },
  'LYS': { chinese: '里昂', english: 'Lyon Saint-Exupery', country: '法国' },
  'MRS': { chinese: '马赛', english: 'Marseille Provence', country: '法国' },
  'TLS': { chinese: '图卢兹', english: 'Toulouse Blagnac', country: '法国' },
  'BOD': { chinese: '波尔多', english: 'Bordeaux Merignac', country: '法国' },
  'NTE': { chinese: '南特', english: 'Nantes Atlantique', country: '法国' },
  'SXB': { chinese: '斯特拉斯堡', english: 'Strasbourg', country: '法国' },

  // ================================================================
  // 🇩🇪 德国 GERMANY - 国际机场
  // ================================================================

  'FRA': { chinese: '法兰克福', english: 'Frankfurt am Main', country: '德国' },
  'MUC': { chinese: '慕尼黑', english: 'Munich Franz Josef Strauss', country: '德国' },
  'DUS': { chinese: '杜塞尔多夫', english: 'Dusseldorf', country: '德国' },
  'TXL': { chinese: '柏林泰格尔', english: 'Berlin Tegel', country: '德国' },
  'BER': { chinese: '柏林勃兰登堡', english: 'Berlin Brandenburg', country: '德国' },
  'HAM': { chinese: '汉堡', english: 'Hamburg', country: '德国' },
  'CGN': { chinese: '科隆', english: 'Cologne Bonn', country: '德国' },
  'STR': { chinese: '斯图加特', english: 'Stuttgart', country: '德国' },
  'HAJ': { chinese: '汉诺威', english: 'Hannover', country: '德国' },

  // ================================================================
  // 🇳🇱 荷兰 NETHERLANDS - 国际机场
  // ================================================================

  'AMS': { chinese: '阿姆斯特丹', english: 'Amsterdam Schiphol', country: '荷兰' },
  'EIN': { chinese: '埃因霍温', english: 'Eindhoven', country: '荷兰' },

  // ================================================================
  // 🇧🇪 比利时 BELGIUM - 国际机场
  // ================================================================

  'BRU': { chinese: '布鲁塞尔', english: 'Brussels', country: '比利时' },
  'CRL': { chinese: '布鲁塞尔沙勒罗瓦', english: 'Brussels South Charleroi', country: '比利时' },
  'ANR': { chinese: '安特卫普', english: 'Antwerp', country: '比利时' },

  // ================================================================
  // 🇱🇺 卢森堡 LUXEMBOURG - 国际机场
  // ================================================================

  'LUX': { chinese: '卢森堡', english: 'Luxembourg Findel', country: '卢森堡' },

  // ================================================================
  // 🇪🇸 西班牙 SPAIN - 国际机场（第二组）
  // ================================================================

  'MAD': { chinese: '马德里', english: 'Madrid Barajas', country: '西班牙' },
  'BCN': { chinese: '巴塞罗那', english: 'Barcelona El Prat', country: '西班牙' },
  'PMI': { chinese: '帕尔马', english: 'Palma de Mallorca', country: '西班牙' },
  'LAS': { chinese: '拉斯帕尔马斯', english: 'Las Palmas Gran Canaria', country: '西班牙' },
  'AGP': { chinese: '马拉加', english: 'Malaga Costa del Sol', country: '西班牙' },
  'SVQ': { chinese: '塞维利亚', english: 'Seville San Pablo', country: '西班牙' },
  'VLC': { chinese: '瓦伦西亚', english: 'Valencia', country: '西班牙' },
  'BIO': { chinese: '毕尔巴鄂', english: 'Bilbao', country: '西班牙' },
  'TFS': { chinese: '特内里费南', english: 'Tenerife South', country: '西班牙' },
  'ACE': { chinese: '兰萨罗特', english: 'Lanzarote', country: '西班牙' },
  'ALC': { chinese: '阿利坎特', english: 'Alicante', country: '西班牙' },
  'SDR': { chinese: '桑坦德', english: 'Santander', country: '西班牙' },

  // ================================================================
  // 🇮🇹 意大利 ITALY - 国际机场
  // ================================================================

  'FCO': { chinese: '罗马菲乌米奇诺', english: 'Rome Fiumicino', country: '意大利' },
  'CIA': { chinese: '罗马钱皮诺', english: 'Rome Ciampino', country: '意大利' },
  'MXP': { chinese: '米兰马尔彭萨', english: 'Milan Malpensa', country: '意大利' },
  'LIN': { chinese: '米兰利纳特', english: 'Milan Linate', country: '意大利' },
  'BGY': { chinese: '贝加莫', english: 'Bergamo Orio al Serio', country: '意大利' },
  'NAP': { chinese: '那不勒斯', english: 'Naples', country: '意大利' },
  'VCE': { chinese: '威尼斯', english: 'Venice Marco Polo', country: '意大利' },
  'BLQ': { chinese: '博洛尼亚', english: 'Bologna Guglielmo Marconi', country: '意大利' },
  'CTA': { chinese: '卡塔尼亚', english: 'Catania Fontanarossa', country: '意大利' },
  'PMO': { chinese: '巴勒莫', english: 'Palermo Falcone Borsellino', country: '意大利' },
  'FLR': { chinese: '佛罗伦萨', english: 'Florence Peretola', country: '意大利' },
  'PSA': { chinese: '比萨', english: 'Pisa Galileo Galilei', country: '意大利' },
  'CAG': { chinese: '卡利亚里', english: 'Cagliari Elmas', country: '意大利' },

  // ================================================================
  // 🇬🇷 希腊 GREECE - 国际机场
  // ================================================================

  'ATH': { chinese: '雅典', english: 'Athens Eleftherios Venizelos', country: '希腊' },
  'SKG': { chinese: '塞萨洛尼基', english: 'Thessaloniki Macedonia', country: '希腊' },
  'HER': { chinese: '伊拉克利翁', english: 'Heraklion Nikos Kazantzakis', country: '希腊' },
  'RHO': { chinese: '罗德岛', english: 'Rhodes Diagoras', country: '希腊' },
  'CFU': { chinese: '科孚岛', english: 'Corfu Ioannis Kapodistrias', country: '希腊' },
  'JTR': { chinese: '圣托里尼', english: 'Santorini', country: '希腊' },

  // ================================================================
  // 🇵🇹 葡萄牙 PORTUGAL - 国际机场
  // ================================================================

  'LIS': { chinese: '里斯本', english: 'Lisbon Humberto Delgado', country: '葡萄牙' },
  'OPO': { chinese: '波尔图', english: 'Porto Francisco Sa Carneiro', country: '葡萄牙' },
  'FAO': { chinese: '法鲁', english: 'Faro', country: '葡萄牙' },
  'FNC': { chinese: '丰沙尔', english: 'Funchal Madeira', country: '葡萄牙' },

  // ================================================================
  // 🇷🇺 俄罗斯 RUSSIA - 国际机场（第三组）
  // ================================================================

  // 莫斯科机场群
  'SVO': { chinese: '莫斯科谢列梅捷沃', english: 'Moscow Sheremetyevo', country: '俄罗斯' },
  'DME': { chinese: '莫斯科多莫杰多沃', english: 'Moscow Domodedovo', country: '俄罗斯' },
  'VKO': { chinese: '莫斯科伏努科沃', english: 'Moscow Vnukovo', country: '俄罗斯' },
  'ZIA': { chinese: '莫斯科茹科夫斯基', english: 'Moscow Zhukovsky', country: '俄罗斯' },

  // 圣彼得堡及西北部
  'LED': { chinese: '圣彼得堡', english: 'St. Petersburg Pulkovo', country: '俄罗斯' },

  // 伏尔加河流域
  'KZN': { chinese: '喀山', english: 'Kazan', country: '俄罗斯' },
  'KUF': { chinese: '萨马拉', english: 'Samara Kurumoch', country: '俄罗斯' },
  'UFA': { chinese: '乌法', english: 'Ufa', country: '俄罗斯' },
  'VOG': { chinese: '伏尔加格勒', english: 'Volgograd Gumrak', country: '俄罗斯' },
  'RTW': { chinese: '萨拉托夫', english: 'Saratov Gagarin', country: '俄罗斯' },

  // 乌拉尔地区
  'SVX': { chinese: '叶卡捷琳堡', english: 'Yekaterinburg Koltsovo', country: '俄罗斯' },
  'PEE': { chinese: '彼尔姆', english: 'Perm Bolshoye Savino', country: '俄罗斯' },
  'CEK': { chinese: '车里雅宾斯克', english: 'Chelyabinsk Balandino', country: '俄罗斯' },

  // 西伯利亚地区
  'OVB': { chinese: '新西伯利亚', english: 'Novosibirsk Tolmachevo', country: '俄罗斯' },
  'KEJ': { chinese: '克麦罗沃', english: 'Kemerovo', country: '俄罗斯' },
  'TOF': { chinese: '托木斯克', english: 'Tomsk Bogashevo', country: '俄罗斯' },
  'BAX': { chinese: '巴尔瑙尔', english: 'Barnaul', country: '俄罗斯' },
  'OMS': { chinese: '鄂木斯克', english: 'Omsk Tsentralny', country: '俄罗斯' },

  // 远东地区
  'VVO': { chinese: '符拉迪沃斯托克', english: 'Vladivostok', country: '俄罗斯' },
  'KHV': { chinese: '哈巴罗夫斯克', english: 'Khabarovsk Novy', country: '俄罗斯' },
  'YKS': { chinese: '雅库茨克', english: 'Yakutsk', country: '俄罗斯' },
  'GDX': { chinese: '马加丹', english: 'Magadan Sokol', country: '俄罗斯' },
  'PKC': { chinese: '彼得罗巴甫洛夫斯克', english: 'Petropavlovsk-Kamchatsky Elizovo', country: '俄罗斯' },
  'UUS': { chinese: '乌兰乌德', english: 'Ulan-Ude Mukhino', country: '俄罗斯' },
  'IKT': { chinese: '伊尔库茨克', english: 'Irkutsk', country: '俄罗斯' },
  'CHT': { chinese: '赤塔', english: 'Chita Kadala', country: '俄罗斯' },

  // 南部地区
  'KRR': { chinese: '克拉斯诺达尔', english: 'Krasnodar Pashkovsky', country: '俄罗斯' },
  'AER': { chinese: '索契', english: 'Sochi Adler', country: '俄罗斯' },
  'ROV': { chinese: '罗斯托夫', english: 'Rostov-on-Don', country: '俄罗斯' },
  'STW': { chinese: '斯塔夫罗波尔', english: 'Stavropol Shpakovskoye', country: '俄罗斯' },
  'MRV': { chinese: '矿水城', english: 'Mineralnye Vody', country: '俄罗斯' },

  // 北高加索地区
  'MCX': { chinese: '马哈奇卡拉', english: 'Makhachkala Uytash', country: '俄罗斯' },
  'GRV': { chinese: '格罗兹尼', english: 'Grozny Severny', country: '俄罗斯' },

  // ================================================================
  // 🇵🇱 波兰 POLAND - 国际机场
  // ================================================================

  'WAW': { chinese: '华沙', english: 'Warsaw Chopin', country: '波兰' },
  'KRK': { chinese: '克拉科夫', english: 'Krakow John Paul II', country: '波兰' },
  'GDN': { chinese: '格但斯克', english: 'Gdansk Lech Walesa', country: '波兰' },
  'WRO': { chinese: '弗罗茨瓦夫', english: 'Wroclaw Copernicus', country: '波兰' },
  'POZ': { chinese: '波兹南', english: 'Poznan Lawica', country: '波兰' },
  'KTW': { chinese: '卡托维兹', english: 'Katowice', country: '波兰' },

  // ================================================================
  // 🇨🇿 捷克 CZECH REPUBLIC - 国际机场
  // ================================================================

  'PRG': { chinese: '布拉格', english: 'Prague Vaclav Havel', country: '捷克' },
  'BRQ': { chinese: '布尔诺', english: 'Brno Turany', country: '捷克' },

  // ================================================================
  // 🇸🇰 斯洛伐克 SLOVAKIA - 国际机场
  // ================================================================

  'BTS': { chinese: '布拉迪斯拉发', english: 'Bratislava Milan Rastislav Stefanik', country: '斯洛伐克' },

  // ================================================================
  // 🇭🇺 匈牙利 HUNGARY - 国际机场
  // ================================================================

  'BUD': { chinese: '布达佩斯', english: 'Budapest Ferenc Liszt', country: '匈牙利' },
  'DEB': { chinese: '德布勒森', english: 'Debrecen', country: '匈牙利' },

  // ================================================================
  // 🇷🇴 罗马尼亚 ROMANIA - 国际机场
  // ================================================================

  'OTP': { chinese: '布加勒斯特', english: 'Bucharest Henri Coanda', country: '罗马尼亚' },
  'CLJ': { chinese: '克卢日', english: 'Cluj-Napoca Avram Iancu', country: '罗马尼亚' },
  'TSR': { chinese: '蒂米什瓦拉', english: 'Timisoara Traian Vuia', country: '罗马尼亚' },

  // ================================================================
  // 🇧🇬 保加利亚 BULGARIA - 国际机场
  // ================================================================

  'SOF': { chinese: '索菲亚', english: 'Sofia Vrazhdebna', country: '保加利亚' },
  'VAR': { chinese: '瓦尔纳', english: 'Varna', country: '保加利亚' },
  'BOJ': { chinese: '布尔加斯', english: 'Burgas Sarafovo', country: '保加利亚' },

  // ================================================================
  // 🇸🇪 瑞典 SWEDEN - 国际机场
  // ================================================================

  'ARN': { chinese: '斯德哥尔摩', english: 'Stockholm Arlanda', country: '瑞典' },
  'GOT': { chinese: '哥德堡', english: 'Gothenburg Landvetter', country: '瑞典' },
  'MMX': { chinese: '马尔默', english: 'Malmo Sturup', country: '瑞典' },

  // ================================================================
  // 🇳🇴 挪威 NORWAY - 国际机场
  // ================================================================

  'OSL': { chinese: '奥斯陆', english: 'Oslo Gardermoen', country: '挪威' },
  'BGO': { chinese: '卑尔根', english: 'Bergen Flesland', country: '挪威' },
  'TRD': { chinese: '特隆赫姆', english: 'Trondheim Vaernes', country: '挪威' },
  'SVG': { chinese: '斯塔万格', english: 'Stavanger Sola', country: '挪威' },

  // ================================================================
  // 🇩🇰 丹麦 DENMARK - 国际机场
  // ================================================================

  'CPH': { chinese: '哥本哈根', english: 'Copenhagen Kastrup', country: '丹麦' },
  'BLL': { chinese: '比隆德', english: 'Billund', country: '丹麦' },
  'AAL': { chinese: '奥尔堡', english: 'Aalborg', country: '丹麦' },

  // ================================================================
  // 🇫🇮 芬兰 FINLAND - 国际机场
  // ================================================================

  'HEL': { chinese: '赫尔辛基', english: 'Helsinki Vantaa', country: '芬兰' },
  'TMP': { chinese: '坦佩雷', english: 'Tampere Pirkkala', country: '芬兰' },
  'TKU': { chinese: '图尔库', english: 'Turku', country: '芬兰' },

  // ================================================================
  // 🇨🇭 瑞士 SWITZERLAND - 国际机场（第四组）
  // ================================================================

  'ZUR': { chinese: '苏黎世', english: 'Zurich', country: '瑞士' },
  'GVA': { chinese: '日内瓦', english: 'Geneva Cointrin', country: '瑞士' },
  'BSL': { chinese: '巴塞尔', english: 'Basel EuroAirport', country: '瑞士' },
  'BRN': { chinese: '伯尔尼', english: 'Bern Belp', country: '瑞士' },

  // ================================================================
  // 🇦🇹 奥地利 AUSTRIA - 国际机场
  // ================================================================

  'VIE': { chinese: '维也纳', english: 'Vienna Schwechat', country: '奥地利' },
  'SZG': { chinese: '萨尔茨堡', english: 'Salzburg W. A. Mozart', country: '奥地利' },
  'INN': { chinese: '因斯布鲁克', english: 'Innsbruck', country: '奥地利' },
  'GRZ': { chinese: '格拉茨', english: 'Graz Thalerhof', country: '奥地利' },

  // ================================================================
  // 🇮🇪 爱尔兰 IRELAND - 国际机场
  // ================================================================

  'DUB': { chinese: '都柏林', english: 'Dublin', country: '爱尔兰' },
  'ORK': { chinese: '科克', english: 'Cork', country: '爱尔兰' },
  'SNN': { chinese: '香农', english: 'Shannon', country: '爱尔兰' },

  // ================================================================
  // 🇮🇸 冰岛 ICELAND - 国际机场
  // ================================================================

  'KEF': { chinese: '凯夫拉维克', english: 'Keflavik Reykjavik', country: '冰岛' },
  'RKV': { chinese: '雷克雅未克', english: 'Reykjavik', country: '冰岛' },

  // ================================================================
  // 🇱🇹 立陶宛 LITHUANIA - 国际机场
  // ================================================================

  'VNO': { chinese: '维尔纽斯', english: 'Vilnius', country: '立陶宛' },
  'KUN': { chinese: '考纳斯', english: 'Kaunas', country: '立陶宛' },

  // ================================================================
  // 🇱🇻 拉脱维亚 LATVIA - 国际机场
  // ================================================================

  'RIX': { chinese: '里加', english: 'Riga', country: '拉脱维亚' },

  // ================================================================
  // 🇪🇪 爱沙尼亚 ESTONIA - 国际机场
  // ================================================================

  'TLL': { chinese: '塔林', english: 'Tallinn Lennart Meri', country: '爱沙尼亚' },

  // ================================================================
  // 🇺🇦 乌克兰 UKRAINE - 国际机场
  // ================================================================

  'KBP': { chinese: '基辅', english: 'Kiev Boryspil', country: '乌克兰' },
  'IEV': { chinese: '基辅朱利亚尼', english: 'Kiev Zhuliany', country: '乌克兰' },
  'ODS': { chinese: '敖德萨', english: 'Odessa', country: '乌克兰' },
  'HRK': { chinese: '哈尔科夫', english: 'Kharkiv', country: '乌克兰' },

  // ================================================================
  // 🇧🇾 白俄罗斯 BELARUS - 国际机场
  // ================================================================

  'MSQ': { chinese: '明斯克', english: 'Minsk National', country: '白俄罗斯' },

  // ================================================================
  // 🇲🇩 摩尔多瓦 MOLDOVA - 国际机场
  // ================================================================

  'KIV': { chinese: '基希讷乌', english: 'Chisinau', country: '摩尔多瓦' },

  // ================================================================
  // 🇷🇸 塞尔维亚 SERBIA - 国际机场
  // ================================================================

  'BEG': { chinese: '贝尔格莱德', english: 'Belgrade Nikola Tesla', country: '塞尔维亚' },
  'INI': { chinese: '尼什', english: 'Nis Constantine the Great', country: '塞尔维亚' },

  // ================================================================
  // 🇭🇷 克罗地亚 CROATIA - 国际机场
  // ================================================================

  'ZAG': { chinese: '萨格勒布', english: 'Zagreb Franjo Tudman', country: '克罗地亚' },
  'DBV': { chinese: '杜布罗夫尼克', english: 'Dubrovnik', country: '克罗地亚' },
  'SPU': { chinese: '斯普利特', english: 'Split', country: '克罗地亚' },

  // ================================================================
  // 🇸🇮 斯洛文尼亚 SLOVENIA - 国际机场
  // ================================================================

  'LJU': { chinese: '卢布尔雅那', english: 'Ljubljana Joze Pucnik', country: '斯洛文尼亚' },

  // ================================================================
  // 🇧🇦 波黑 BOSNIA AND HERZEGOVINA - 国际机场
  // ================================================================

  'SJJ': { chinese: '萨拉热窝', english: 'Sarajevo', country: '波黑' },

  // ================================================================
  // 🇲🇰 北马其顿 NORTH MACEDONIA - 国际机场
  // ================================================================

  'SKP': { chinese: '斯科普里', english: 'Skopje Alexander the Great', country: '北马其顿' },

  // ================================================================
  // 🇦🇱 阿尔巴尼亚 ALBANIA - 国际机场
  // ================================================================

  'TIA': { chinese: '地拉那', english: 'Tirana Mother Teresa', country: '阿尔巴尼亚' },

  // ================================================================
  // 🇲🇪 黑山 MONTENEGRO - 国际机场
  // ================================================================

  'TGD': { chinese: '波德戈里察', english: 'Podgorica Golubovci', country: '黑山' },
  'TIV': { chinese: '蒂瓦特', english: 'Tivat', country: '黑山' },

  // ================================================================
  // 🇽🇰 科索沃 KOSOVO - 国际机场
  // ================================================================

  'PRN': { chinese: '普里什蒂纳', english: 'Pristina Adem Jashari', country: '科索沃' },

  // ================================================================
  // 🇨🇾 塞浦路斯 CYPRUS - 国际机场
  // ================================================================

  'LCA': { chinese: '拉纳卡', english: 'Larnaca', country: '塞浦路斯' },
  'PFO': { chinese: '帕福斯', english: 'Paphos', country: '塞浦路斯' },

  // ================================================================
  // 🇲🇹 马耳他 MALTA - 国际机场
  // ================================================================

  'MLA': { chinese: '马耳他', english: 'Malta Luqa', country: '马耳他' },

};
