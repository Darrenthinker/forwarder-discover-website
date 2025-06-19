// 处理planespotters.net航司数据脚本 - 按国家分批处理
const fs = require('fs');

// 解析planespotters.net数据
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
      const photos = parts[3].trim();
      
      airlines.push({
        name: airlineName,
        country: country,
        fleet: fleet ? parseInt(fleet) : 0,
        photos: photos ? parseInt(photos) : 0
      });
    }
  }
  
  return airlines;
}

// 按国家分组处理数据
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
    
    // 按机队规模排序
    countryAirlines.sort((a, b) => b.fleet - a.fleet);
    
    console.log(`\n${country} 航司机队规模排序:`);
    console.log('格式: 航司名称 | 机队数量 | 照片数量\n');
    
    let validCount = 0;
    countryAirlines.forEach((airline, index) => {
      if (airline.fleet > 0) {
        console.log(`${index + 1}. ${airline.name} | ${airline.fleet}架 | ${airline.photos}张照片`);
        validCount++;
      }
    });
    
    console.log(`\n${country} 总计: ${countryAirlines.length}家航司，有飞机数据的: ${validCount}家`);
    
    // 保存每个国家的结果
    const output = countryAirlines.map((airline, index) => 
      `${index + 1}. ${airline.name} | ${airline.fleet}架 | ${airline.photos}张照片`
    ).join('\n');
    
    const filename = `airline-fleet-${country.replace(/\s+/g, '-')}.txt`;
    fs.writeFileSync(filename, output);
    console.log(`结果已保存到 ${filename}`);
  });
  
  return countries;
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

// 保存总体结果
const allAirlines = airlines.sort((a, b) => b.fleet - a.fleet);
const allOutput = allAirlines.map((airline, index) => 
  `${index + 1}. ${airline.name} | ${airline.country} | ${airline.fleet}架 | ${airline.photos}张照片`
).join('\n');

fs.writeFileSync('airline-fleet-all-countries.txt', allOutput);
console.log('\n总体结果已保存到 airline-fleet-all-countries.txt'); 