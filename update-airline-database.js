// 更新航司数据库脚本
const fs = require('fs');

// 从planespotters.net获取的数据（去掉照片数据）
const planespottersData = `
ABC Air Hungary	 Hungary		10
Aeroexpress Regional (current)	Aeroexpress Regional	 Hungary	2	12
ASL Airlines Hungary (current)	ASL Airlines Hungary	 Hungary		99
Budapest Aircraft Service (current)	Budapest Aircraft Service	 Hungary	3	93
Cityline Hungary	 Hungary		39
Farnair Hungary	 Hungary		3
Fleet Air International (current)	Fleet Air International	 Hungary	10	249
Hunair Hungarian Airlines	 Hungary		
Hungary Airlines (current)	Hungary Airlines	 Hungary	1	2
Malév Express (current)	Malév Express	 Hungary		12
Malév Hungarian Airlines (current)	Malév Hungarian Airlines	 Hungary		788
SkyEurope Airlines Hungary (current)	SkyEurope Airlines Hungary	 Hungary		30
Smartwings Hungary (current)	Smartwings Hungary	 Hungary	1	57
Sólyom Hungarian Airways (current)	Sólyom Hungarian Airways	 Hungary		15
Travel Service Hungary (current)	Travel Service Hungary	 Hungary		168
Wizz Air (current)	Wizz Air	 Hungary	101	6662
Air Atlanta Icelandic (current)	Air Atlanta Icelandic	 Iceland	9	333
Air Iceland Connect (current)	Air Iceland Connect	 Iceland	6	21
Air Viking (current)	Air Viking	 Iceland		
Atlantsflug - Atlantic Island Air	 Iceland		1
Bluebird Cargo (current)	Bluebird Cargo	 Iceland		109
Bluebird Nordic (current)	Bluebird Nordic	 Iceland		185
Eagle Air Iceland (current)	Eagle Air Iceland	 Iceland		27
Eagle Air of Iceland (current)	Eagle Air of Iceland	 Iceland		6
Flugfelag Islands - Air Iceland (current)	Flugfelag Islands - Air Iceland	 Iceland		54
Flugfélag Norðurlands (current)	Flugfélag Norðurlands	 Iceland		1
Flugfelag Vængir	 Iceland		
Icejet (current)	Icejet	 Iceland		11
Iceland Express (current)	Iceland Express	 Iceland		44
Icelandair (current)	Icelandair	 Iceland	49	2844
Íscargo (current)	Íscargo	 Iceland		2
Íslandsflug (current)	Íslandsflug	 Iceland		32
JetX Airlines	 Iceland		22
Landsflug (current)	Landsflug	 Iceland		1
Loftleidir Icelandic (current)	Loftleidir Icelandic	 Iceland		3
MD Airlines	 Iceland		6
MK Flugfélagið	 Iceland		1
Niceair (current)	Niceair	 Iceland		23
Norlandair (current)	Norlandair	 Iceland	3	5
PLAY (current)	PLAY	 Iceland	7	319
Primera Air	 Iceland		16
Thor Air Cargo	 Iceland		
WOW air (current)	WOW air	 Iceland		522
Afcom Cargo (current)	Afcom Cargo	 India	2	
Air Asiatic	 India		
Air Carnival (current)	Air Carnival	 India		2
Air Costa (current)	Air Costa	 India		5
Air Deccan (current)	Air Deccan	 India		14
Air India (current)	Air India	 India	191	3418
Air India Express (current)	Air India Express	 India	114	269
Air One Aviation (current)	Air One Aviation	 India	2	3
Air Pegasus (current)	Air Pegasus	 India		2
Air Sahara (current)	Air Sahara	 India		7
AirAsia India (current)	AirAsia India	 India		89
AIX Connect	 India		53
Akasa Air (current)	Akasa Air	 India	30	99
AkashGanga Airlines	 India		1
Alliance Air (current)	Alliance Air	 India	20	61
Archana Airways	 India		
Aryan Cargo Express	 India		3
Blue Dart Aviation (current)	Blue Dart Aviation	 India	8	69
Carewell Aviation (current)	Carewell Aviation	 India	1	1
CityLink Airways	 India		
Club One Air	 India	1	3
Continental Aviation	 India		
Damania Airways	 India		
Deccan 360	 India		10
East West Airlines	 India		
Empire Aviation India (current)	Empire Aviation India	 India		
First Flight (current)	First Flight	 India		1
FLY91 (current)	FLY91	 India	3	4
Flybig Airlines (current)	Flybig Airlines	 India	4	11
GMR Aviation (current)	GMR Aviation	 India	1	
Go First (current)	Go First	 India		25
GoAir (current)	GoAir	 India		260
Huns Air (current)	Huns Air	 India		
India Fly Safe Aviation	 India	1	
Indian Airlines (current)	Indian Airlines	 India		107
IndiGo (current)	IndiGo	 India	414	2203
Indus Air	 India		
Jagson Airlines (current)	Jagson Airlines	 India		
Jet Airways (current)	Jet Airways	 India		1123
JetKonnect (current)	JetKonnect	 India		24
JetLite (current)	JetLite	 India		23
JetSetGo (current)	JetSetGo	 India	1	1
Kingfisher Airlines (current)	Kingfisher Airlines	 India		191
MDLR Airlines (current)	MDLR Airlines	 India		1
Modiluft	 India		2
Mytri Aviation (current)	Mytri Aviation	 India	2	
Paramount Airways	 India		5
Poonawalla Aviation (current)	Poonawalla Aviation	 India		12
Pradhaan Air Express (current)	Pradhaan Air Express	 India	1	7
QuikJet Airlines (current)	QuikJet Airlines	 India	2	11
Rajair	 India		1
Sahara Airlines (current)	Sahara Airlines	 India		
Sapphire Airlines	 India	1	
SBS Private Jet	 India	1	
Simplifly Deccan (current)	Simplifly Deccan	 India		13
Skyline NEPC	 India		
SpiceJet (current)	SpiceJet	 India	55	618
Star Air (current)	Star Air	 India	9	19
Star Aviation	 India		
TruJet (current)	TruJet	 India		6
VIF Airways (current)	VIF Airways	 India		
Visaa Airways	 India		
Vistara (current)	Vistara	 India		598
VSR Aviation (current)	VSR Aviation	 India	4	5
Zoom Air (current)	Zoom Air	 India	5	4
`;

// 已知的IATA成员航司（从现有数据库和常识判断）
const iataMembers = {
  'Hungary': ['Wizz Air', 'Malév Hungarian Airlines'],
  'Iceland': ['Icelandair', 'WOW air', 'PLAY'],
  'India': ['Air India', 'Air India Express', 'IndiGo', 'SpiceJet', 'Vistara', 'GoAir', 'AirAsia India', 'Alliance Air', 'Blue Dart Aviation', 'Star Air']
};

// 解析数据
function parsePlanespottersData(data) {
  const lines = data.trim().split('\n');
  const airlines = [];
  
  for (const line of lines) {
    if (!line.trim()) continue;
    
    const parts = line.split('\t');
    if (parts.length >= 4) {
      const airlineName = parts[0].trim();
      const country = parts[1].trim();
      const fleet = parts[2].trim();
      
      airlines.push({
        name: airlineName,
        country: country,
        fleet: fleet ? parseInt(fleet) : 0
      });
    }
  }
  
  return airlines;
}

// 判断是否为IATA成员
function isIATAMember(airlineName, country) {
  const countryMembers = iataMembers[country] || [];
  return countryMembers.some(member => 
    airlineName.toLowerCase().includes(member.toLowerCase()) ||
    member.toLowerCase().includes(airlineName.toLowerCase())
  );
}

// 按国家分组并排序
function processByCountry(airlines) {
  const countries = {};
  
  // 按国家分组
  airlines.forEach(airline => {
    if (!countries[airline.country]) {
      countries[airline.country] = [];
    }
    countries[airline.country].push(airline);
  });
  
  // 处理每个国家
  Object.keys(countries).forEach(country => {
    console.log(`\n=== 处理 ${country} ===`);
    const countryAirlines = countries[country];
    
    // 排序：IATA成员优先，然后按机队规模排序
    countryAirlines.sort((a, b) => {
      const aIsIATA = isIATAMember(a.name, country);
      const bIsIATA = isIATAMember(b.name, country);
      
      // 首先按IATA成员排序
      if (aIsIATA && !bIsIATA) return -1;
      if (!aIsIATA && bIsIATA) return 1;
      
      // 然后按机队规模排序
      return b.fleet - a.fleet;
    });
    
    console.log(`\n${country} 航司排序 (IATA成员优先，按机队规模排序):`);
    console.log('格式: [IATA] 航司名称 | 机队数量\n');
    
    let iataCount = 0;
    let nonIataCount = 0;
    
    countryAirlines.forEach((airline, index) => {
      const isIATA = isIATAMember(airline.name, country);
      const prefix = isIATA ? '[IATA]' : '[非IATA]';
      
      if (airline.fleet > 0) {
        console.log(`${index + 1}. ${prefix} ${airline.name} | ${airline.fleet}架`);
        if (isIATA) iataCount++; else nonIataCount++;
      } else {
        console.log(`${index + 1}. ${prefix} ${airline.name} | 无飞机数据`);
        if (isIATA) iataCount++; else nonIataCount++;
      }
    });
    
    console.log(`\n${country} 统计:`);
    console.log(`- 总航司数量: ${countryAirlines.length}家`);
    console.log(`- IATA成员: ${iataCount}家`);
    console.log(`- 非IATA成员: ${nonIataCount}家`);
    console.log(`- 有飞机数据的航司: ${countryAirlines.filter(a => a.fleet > 0).length}家`);
  });
  
  return countries;
}

// 生成TypeScript代码片段
function generateTypeScriptCode(airlines) {
  const countries = {};
  
  // 按国家分组
  airlines.forEach(airline => {
    if (!countries[airline.country]) {
      countries[airline.country] = [];
    }
    countries[airline.country].push(airline);
  });
  
  let tsCode = '\n// 新增航司数据 - 按国家分组\n';
  
  Object.keys(countries).forEach(country => {
    const countryAirlines = countries[country];
    
    // 排序
    countryAirlines.sort((a, b) => {
      const aIsIATA = isIATAMember(a.name, country);
      const bIsIATA = isIATAMember(b.name, country);
      
      if (aIsIATA && !bIsIATA) return -1;
      if (!aIsIATA && bIsIATA) return 1;
      
      return b.fleet - a.fleet;
    });
    
    tsCode += `\n  // ${country} 航空公司 (IATA成员优先，按机队规模排序)\n`;
    
    countryAirlines.forEach(airline => {
      const isIATA = isIATAMember(airline.name, country);
      const comment = isIATA ? '// IATA成员' : '// 非IATA成员';
      
      // 生成英文名称（简化处理）
      const englishName = airline.name.replace(/\(current\)/g, '').trim();
      
      tsCode += `  {\n`;
      tsCode += `    code: 'XX', // 需要补充IATA代码\n`;
      tsCode += `    prefix: 'XXX', // 需要补充提单前缀\n`;
      tsCode += `    name: { chinese: '${airline.name}', english: '${englishName}' },\n`;
      tsCode += `    country: '${country}',\n`;
      tsCode += `    countryCode: '${getCountryCode(country)}',\n`;
      tsCode += `    type: 'FSC', // 需要根据实际情况调整\n`;
      tsCode += `    fleetSize: ${airline.fleet || 0},\n`;
      tsCode += `    active: true\n`;
      tsCode += `  }, ${comment}\n`;
    });
  });
  
  return tsCode;
}

// 获取国家代码
function getCountryCode(country) {
  const countryCodes = {
    'Hungary': 'HU',
    'Iceland': 'IS', 
    'India': 'IN'
  };
  return countryCodes[country] || 'XX';
}

// 处理数据
console.log('开始处理航司数据...\n');
const airlines = parsePlanespottersData(planespottersData);
const countries = processByCountry(airlines);

// 生成总体统计
console.log('\n=== 总体统计 ===');
console.log(`总航司数量: ${airlines.length}`);
console.log(`涉及国家数量: ${Object.keys(countries).length}`);
console.log(`有飞机数据的航司: ${airlines.filter(a => a.fleet > 0).length}家`);

// 生成TypeScript代码
const tsCode = generateTypeScriptCode(airlines);
console.log('\n=== 生成的TypeScript代码片段 ===');
console.log(tsCode);

// 保存结果
fs.writeFileSync('airline-update-results.txt', 
  `航司数据更新结果\n` +
  `总航司数量: ${airlines.length}\n` +
  `涉及国家数量: ${Object.keys(countries).length}\n` +
  `有飞机数据的航司: ${airlines.filter(a => a.fleet > 0).length}家\n\n` +
  `TypeScript代码片段:\n${tsCode}`
);

console.log('\n结果已保存到 airline-update-results.txt'); 