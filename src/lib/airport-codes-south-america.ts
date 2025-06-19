// 南美国际机场三字代码映射表
export interface AirportInfo {
  chinese: string;
  english: string;
  country: string;
}

// ================================================================
// 南美 SOUTH AMERICA - 国际机场代码
// ================================================================

export const southAmericaAirports: { [key: string]: AirportInfo } = {

  // ================================================================
  // 🇧🇷 巴西 BRAZIL - 国际机场
  // ================================================================

  // 东南部地区
  'GRU': { chinese: '圣保罗瓜鲁柳斯', english: 'Sao Paulo Guarulhos', country: '巴西' },
  'CGH': { chinese: '圣保罗孔戈尼亚斯', english: 'Sao Paulo Congonhas', country: '巴西' },
  'VCP': { chinese: '坎皮纳斯', english: 'Campinas Viracopos', country: '巴西' },
  'GIG': { chinese: '里约热内卢加利昂', english: 'Rio de Janeiro Galeao', country: '巴西' },
  'SDU': { chinese: '里约热内卢桑托斯', english: 'Rio de Janeiro Santos Dumont', country: '巴西' },
  'BSB': { chinese: '巴西利亚', english: 'Brasilia Juscelino Kubitschek', country: '巴西' },
  'CNF': { chinese: '贝洛奥里藏特', english: 'Belo Horizonte Confins', country: '巴西' },
  'PLU': { chinese: '贝洛奥里藏特潘普利亚', english: 'Belo Horizonte Pampulha', country: '巴西' },
  'VIX': { chinese: '维多利亚', english: 'Vitoria Eurico de Aguiar Salles', country: '巴西' },

  // 东北部地区
  'SSA': { chinese: '萨尔瓦多', english: 'Salvador Luis Eduardo Magalhaes', country: '巴西' },
  'REC': { chinese: '累西腓', english: 'Recife Guararapes', country: '巴西' },
  'FOR': { chinese: '福塔莱萨', english: 'Fortaleza Pinto Martins', country: '巴西' },
  'NAT': { chinese: '纳塔尔', english: 'Natal Augusto Severo', country: '巴西' },
  'MCZ': { chinese: '马塞约', english: 'Maceio Zumbi dos Palmares', country: '巴西' },
  'AJU': { chinese: '阿拉卡茹', english: 'Aracaju Santa Maria', country: '巴西' },
  'JPA': { chinese: '若昂佩索阿', english: 'Joao Pessoa Castro Pinto', country: '巴西' },
  'THE': { chinese: '特雷西纳', english: 'Teresina Senador Petronio Portella', country: '巴西' },
  'SLZ': { chinese: '圣路易斯', english: 'Sao Luis Marechal Cunha Machado', country: '巴西' },

  // 南部地区
  'POA': { chinese: '阿雷格里港', english: 'Porto Alegre Salgado Filho', country: '巴西' },
  'CWB': { chinese: '库里蒂巴', english: 'Curitiba Afonso Pena', country: '巴西' },
  'FLN': { chinese: '弗洛里亚诺波利斯', english: 'Florianopolis Hercilio Luz', country: '巴西' },
  'JOI': { chinese: '若因维莱', english: 'Joinville Lauro Carneiro de Loyola', country: '巴西' },
  'IGU': { chinese: '伊瓜苏', english: 'Iguassu Falls', country: '巴西' },

  // 中西部地区
  'CGB': { chinese: '库亚巴', english: 'Cuiaba Marechal Rondon', country: '巴西' },
  'CGR': { chinese: '大坎普', english: 'Campo Grande', country: '巴西' },

  // 北部地区
  'MAO': { chinese: '马瑙斯', english: 'Manaus Eduardo Gomes', country: '巴西' },
  'BEL': { chinese: '贝伦', english: 'Belem Val de Caes', country: '巴西' },
  'BVB': { chinese: '博阿维斯塔', english: 'Boa Vista Atlas Brasil Cantanhede', country: '巴西' },
  'PVH': { chinese: '韦柳港', english: 'Porto Velho Governador Jorge Teixeira de Oliveira', country: '巴西' },
  'RBR': { chinese: '里奥布兰科', english: 'Rio Branco Placio Lins', country: '巴西' },
  'MCP': { chinese: '马卡帕', english: 'Macapa Alberto Alcolumbre', country: '巴西' },
  'PNZ': { chinese: '佩特罗利纳', english: 'Petrolina Senador Nilo Coelho', country: '巴西' },

  // ================================================================
  // 🇦🇷 阿根廷 ARGENTINA - 国际机场
  // ================================================================

  'EZE': { chinese: '布宜诺斯艾利斯埃塞萨', english: 'Buenos Aires Ezeiza', country: '阿根廷' },
  'AEP': { chinese: '布宜诺斯艾利斯豪尔赫', english: 'Buenos Aires Jorge Newbery Airfield', country: '阿根廷' },
  'COR': { chinese: '科尔多瓦', english: 'Cordoba Ingeniero Aeronautico Ambrosio Taravella', country: '阿根廷' },
  'MDZ': { chinese: '门多萨', english: 'Mendoza Governor Francisco Gabrielli', country: '阿根廷' },
  'ROS': { chinese: '罗萨里奥', english: 'Rosario Islas Malvinas', country: '阿根廷' },
  'SLA': { chinese: '萨尔塔', english: 'Salta Martin Miguel de Guemes', country: '阿根廷' },
  'TUC': { chinese: '图库曼', english: 'Tucuman Benjamin Matienzo', country: '阿根廷' },
  'IGR': { chinese: '伊瓜苏', english: 'Iguazu Cataratas del Iguazu', country: '阿根廷' },
  'BRC': { chinese: '巴里洛切', english: 'Bariloche Teniente Luis Candelaria', country: '阿根廷' },
  'NQN': { chinese: '内乌肯', english: 'Neuquen Juan Domingo Peron', country: '阿根廷' },
  'FTE': { chinese: '埃尔卡拉法特', english: 'El Calafate Comandante Armando Tola', country: '阿根廷' },
  'USH': { chinese: '乌斯怀亚', english: 'Ushuaia Malvinas Argentinas', country: '阿根廷' },

  // ================================================================
  // 🇨🇱 智利 CHILE - 国际机场
  // ================================================================

  'SCL': { chinese: '圣地亚哥', english: 'Santiago Arturo Merino Benitez', country: '智利' },
  'LSC': { chinese: '拉塞雷纳', english: 'La Serena La Florida', country: '智利' },
  'CCP': { chinese: '康塞普西翁', english: 'Concepcion Carriel Sur', country: '智利' },
  'ZCO': { chinese: '特木科', english: 'Temuco Maquehue', country: '智利' },
  'PUQ': { chinese: '蓬塔阿雷纳斯', english: 'Punta Arenas Carlos Ibanez del Campo', country: '智利' },
  'IPC': { chinese: '复活节岛', english: 'Easter Island Mataveri', country: '智利' },
  'ANF': { chinese: '安托法加斯塔', english: 'Antofagasta Andres Sabella Galvez', country: '智利' },
  'CJC': { chinese: '卡拉马', english: 'Calama El Loa', country: '智利' },
  'IQQ': { chinese: '伊基克', english: 'Iquique Diego Aracena', country: '智利' },
  'ARI': { chinese: '阿里卡', english: 'Arica Chacalluta', country: '智利' },

  // ================================================================
  // 🇵🇪 秘鲁 PERU - 国际机场
  // ================================================================

  'LIM': { chinese: '利马', english: 'Lima Jorge Chavez', country: '秘鲁' },
  'CUZ': { chinese: '库斯科', english: 'Cusco Alejandro Velasco Astete', country: '秘鲁' },
  'AQP': { chinese: '阿雷基帕', english: 'Arequipa Rodriguez Ballon', country: '秘鲁' },
  'TRU': { chinese: '特鲁希略', english: 'Trujillo Carlos Martinez de Pinillos', country: '秘鲁' },
  'PIU': { chinese: '皮乌拉', english: 'Piura Capitan Guillermo Concha Iberico', country: '秘鲁' },
  'IQT': { chinese: '伊基托斯', english: 'Iquitos Coronel Francisco Secada Vignetta', country: '秘鲁' },
  'TCQ': { chinese: '塔克纳', english: 'Tacna Coronel Carlos Ciriani Santa Rosa', country: '秘鲁' },

  // ================================================================
  // 🇨🇴 哥伦比亚 COLOMBIA - 国际机场
  // ================================================================

  'BOG': { chinese: '波哥大', english: 'Bogota El Dorado', country: '哥伦比亚' },
  'MDE': { chinese: '麦德林', english: 'Medellin Jose Maria Cordova', country: '哥伦比亚' },
  'CLO': { chinese: '卡利', english: 'Cali Alfonso Bonilla Aragon', country: '哥伦比亚' },
  'BAQ': { chinese: '巴兰基亚', english: 'Barranquilla Ernesto Cortissoz', country: '哥伦比亚' },
  'CTG': { chinese: '卡塔赫纳', english: 'Cartagena Rafael Nunez', country: '哥伦比亚' },
  'SMR': { chinese: '圣玛尔塔', english: 'Santa Marta Simon Bolivar', country: '哥伦比亚' },
  'BGA': { chinese: '布卡拉曼加', english: 'Bucaramanga Palonegro', country: '哥伦比亚' },
  'PEI': { chinese: '佩雷拉', english: 'Pereira Matecana', country: '哥伦比亚' },

  // ================================================================
  // 🇻🇪 委内瑞拉 VENEZUELA - 国际机场
  // ================================================================

  'CCS': { chinese: '加拉加斯', english: 'Caracas Simon Bolivar', country: '委内瑞拉' },
  'MAR': { chinese: '马拉凯博', english: 'Maracaibo La Chinita', country: '委内瑞拉' },
  'VLN': { chinese: '巴伦西亚', english: 'Valencia Arturo Michelena', country: '委内瑞拉' },
  'BLA': { chinese: '巴塞罗那', english: 'Barcelona General Jose Antonio Anzoategui', country: '委内瑞拉' },

  // ================================================================
  // 🇪🇨 厄瓜多尔 ECUADOR - 国际机场
  // ================================================================

  'UIO': { chinese: '基多', english: 'Quito Mariscal Sucre', country: '厄瓜多尔' },
  'GYE': { chinese: '瓜亚基尔', english: 'Guayaquil Jose Joaquin de Olmedo', country: '厄瓜多尔' },
  'GPS': { chinese: '加拉帕戈斯', english: 'Galapagos Seymour', country: '厄瓜多尔' },

  // ================================================================
  // 🇧🇴 玻利维亚 BOLIVIA - 国际机场
  // ================================================================

  'LPB': { chinese: '拉巴斯', english: 'La Paz El Alto', country: '玻利维亚' },
  'SRE': { chinese: '苏克雷', english: 'Sucre Alcantari', country: '玻利维亚' },
  'CBB': { chinese: '科恰班巴', english: 'Cochabamba Jorge Wilstermann', country: '玻利维亚' },
  'VVI': { chinese: '圣克鲁斯', english: 'Santa Cruz Viru Viru', country: '玻利维亚' },

  // ================================================================
  // 🇵🇾 巴拉圭 PARAGUAY - 国际机场
  // ================================================================

  'ASU': { chinese: '亚松森', english: 'Asuncion Silvio Pettirossi', country: '巴拉圭' },

  // ================================================================
  // 🇺🇾 乌拉圭 URUGUAY - 国际机场
  // ================================================================

  'MVD': { chinese: '蒙得维的亚', english: 'Montevideo Carrasco', country: '乌拉圭' },
  'PDP': { chinese: '埃斯特角城', english: 'Punta del Este Capitan de Corbeta Carlos A. Curbelo', country: '乌拉圭' },

  // ================================================================
  // 🇸🇷 苏里南 SURINAME - 国际机场
  // ================================================================

  'PBM': { chinese: '帕拉马里博', english: 'Paramaribo Johan Adolf Pengel', country: '苏里南' },

  // ================================================================
  // 🇬🇾 圭亚那 GUYANA - 国际机场
  // ================================================================

  'GEO': { chinese: '乔治敦', english: 'Georgetown Cheddi Jagan', country: '圭亚那' },

  // ================================================================
  // 🇬🇫 法属圭亚那 FRENCH GUIANA - 国际机场
  // ================================================================

  'CAY': { chinese: '卡宴', english: 'Cayenne Felix Eboue', country: '法属圭亚那' },
};
