'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { parseCargoText, calculateCargoMetrics, getCargoTypeByDensity, type CargoInfo, type CalculationResult, type DimensionDetail } from "@/lib/cargo-parser";
import { generateQuotes, type Quote } from "@/lib/freight-rates";
import { AirportSearch } from "@/components/airport-search";
import { findAirportByCode, type AirportSearchResult } from "@/lib/airport-search";
import { parseAddressAndFindAirports } from "@/lib/address-parser";

interface CargoInputProps {
  onQuotesGenerated: (quotes: Quote[]) => void;
}

export function CargoInput({ onQuotesGenerated }: CargoInputProps) {
  const [cargoText, setCargoText] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originAirport, setOriginAirport] = useState<AirportSearchResult | null>(null);
  const [destinationAirport, setDestinationAirport] = useState<AirportSearchResult | null>(null);
  const [parsedCargo, setParsedCargo] = useState<Partial<CargoInfo>>({});
  const [calculations, setCalculations] = useState<CalculationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 所有示例数据 - 恢复完整列表用于逐个测试和修复
  const sampleData = {
    traditional: `WAV设备及配件
2500 kgs ; 14.71 cbm ; 6托
货在广州
120x100x65 cm`,

    newFormat: `148*113*80/1
168*113*72.5/1
188.5*35.5*71/1
单个托盘120KG`,

    latest: "83*63*77CM, 135KG，一托",

    table: `HDL23938566-HDL23938566-收货(KG)235
实重kg 96.00 长cm 150 宽cm 46 高cm 59 件数 4 方数cbm 0.4071 计重 96.00`,

    boxSpec: "箱规：45*35*30cm，一件重是8.08kg 15箱",

    commodity: `Comm: 运动装备
数量：17箱
尺寸：每箱48 x 48 x 58 厘米
总重量：400 公斤`,

    // 🔥 新增：多crate格式示例
    multiCrate: `241 N Congress Ave, Delray Beach, FL 33445

Our order is ready, Here is the info.
crate 1: 300 sheets, 618kgs, 117X84x88cm
crate 2: 300 sheets, 618kgs, 117X84x88cm
crate 3: 275 sheets, 572kgs, 117X84x83cm
There are 3 crates/ 1808kgs/ 2.54m³ in total.`,

    simpleCrate: `crate 1: 200 sheets, 500kgs, 100X80x60cm
crate 2: 150 sheets, 400kgs, 90X70x50cm
2 crates/900kgs/0.51cbm`,

    pallet: `重量：23托 重量:9765 KGS
尺寸：1.2*1.0*1.54m
体积：42 CBM`,

    multiSize: `货在深圳   -TAS  4件/8.95方/1210kg
尺寸1336*706*2005*2件
2546*781*1300*2件
尺寸mm`,

    air: `DOH
3/908.3/5.66CBM
110X120X141cm
货在河南`,

    moreAirport: `LHR
2/456.7/3.2CBM
80X60X120cm
货在上海`,

    box: `JFK
木箱：1750*1050*1600MM, 480KG
木箱：1800*1470*1470MM, 250KG
2ptls/6.83cbm/730kg
货在佛山顺德`,

    electric: `LAX
音响设备 内置电池
120*80*60cm, 25KG
3件/1.44cbm/75kg
货在深圳`,

    battery: `FRA
移动电源 锂电池
50*30*20cm, 2KG
10件/0.3cbm/20kg
货在广州`,

    general: `LHR
纺织品
100*80*50cm, 15KG
5件/2.0cbm/75kg
货在义乌`,

    boxCount: "62*42*37cm，7箱，210kg",

    complex: "62*42*37cm，7箱，210kg   土耳其伊斯坦布尔  IST   空运帮忙报个价   根管锉之类的产品",

    singleItem: `159件，单件尺寸和重量是：53*26*33cm/6.5kg
总计:7.231cbm,1033.5kg
深圳或者广州出，到印度MAA
货物是汽车玩具，不带电`,

    chineseVolume: `空运到机场
香港到墨西哥MEX
16箱 135kg and 2.47方
电子产品（充电宝，充电头，数据线，镜子...）
带有品牌aekuy`,

    led: `710kg led发光手环（内置碱性干电池，有MSDS），41件，1.6个方，香港飞到捷克布拉格PRG机场
深圳交货，帮忙看下价格`,

    questionMark: `RLA510S?洗地机不带电池
Packing?size:?1300*600*1150mm
Packing?Weight:?110KG

RLA510?洗地机不带电池?
Packing?size:?1340*600*1150mm
Packing?Weight:130`,

    weightVolumePieces: `大家好，货物在江门，请看下深圳、广州那个好些？to?SYD
毛重大概500kg/7.01cbm/2?Wooden?Boxes:
?1?x?2520*1870*910?&?
1x?2500*1530*710?(mm)`,

    flexibleOrder: `测试不同顺序的数据格式：

格式1: 3件/105KG/0.3CBM
格式2: 2.5cbm/8件/200kg
格式3: 150KGS/5PCS/1.8方
格式4: 0.8方/120kg/4件
格式5: 6/250/2.1 (件数/重量/体积)`,

    palletDetail: `5个托盘总体积是6个方，重量是1036KG
228kg 1170-1020*1010mm 2托盘
194kg 1170 1020*1010mm 1托盘
159kg  1170 1020*700mm 1托盘
227kg 1360*1100*990mm 1托盘
普货  深圳BHM   预计下周货好`,

    delTriple: "DEL 751KG/42件/2.57CBM 货在广东",

    triple1: "42件/751KG/2.57CBM",
    triple2: "2.57CBM/751KG/42件",
    triple3: "751KG/2.57CBM/42件",
    triple4: "42件/2.57CBM/751KG",
    triple5: "2.57CBM/42件/751KG",

    ctns: `167 CTNS / 11.79 CBM / 634.60 KGS
53.8*32*41cm箱规`,

    ccu: "CCU 1028/1.63/35*35*35CM*38CTNS",

    khi: "KHI//3400KG//12.33CBM//145CTNS (1:275)  货在青岛",

    beg: "BEG   60ctn  618kg  2.41cbm  1:256  蓝牙耳机，带电，这个北京HU能接吗",

    pek: "PEK---VCP    120×80×127 厘米 1.22方 计费重753.6KG",

    simpleTriple: "120/3000KG/11.8CBM 到DUR 普货  1:250左右",

    bom: "BOM 460CTN/3270KG/34CBM/C.W5686KG/FOB NINGBO哪里有低价",

    gw: "BOM 460CTN/GW3270KG/34CBM/CW5686KG/FOB NINGBO",

    nw: "BOM 460CTN/NW2800KG/34CBM/CW5686KG/FOB NINGBO",

    newDimensionFormat: `148*113*80/1
168*113*72.5/1
188.5*35.5*71/1
单个托盘120KG`,

    tableFormat: `HDL23938566-HDL23938566-收货(KG)235
实重kg 96.00 长cm 150 宽cm 46 高cm 59 件数 4 方数cbm 0.4071 计重 96.00`,

    // 🔥 新增：中英文混合单位格式
    mixedUnits: `3 crates 1808 kgs 2.54 m³
货物装在木箱中，需要特殊搬运
Miami, FL 收货地址`,

    chineseUnits: `5箱 520千克 3.2立方米
电子设备，需要防潮包装
Los Angeles, CA`,

    reverseOrder: `2.54 m³ 1808 kgs 3 crates
普通货物，无特殊要求
New York, NY`,

    // 🔥 新增：欧洲地址解析示例
    europeUK: `150件电子设备，总重2.5吨，体积15立方米
收货地址：123 Oxford Street, London, W1D 2HX, UK
需要快速通关服务`,

    europeFrance: `180个包装箱，1850kg，体积12.8CBM
目的地：75001 Paris, France
香水和化妆品，需要温控运输`,

    europeGermany: `汽车配件，220件，重量3200kg，体积18.5方
交货地址：10117 Berlin, Germany
工业设备，标准包装`,

    europeItaly: `时尚服装，350件，1200kg，8.9CBM
收货地址：00186 Roma, Italy
高端时装，需要防潮包装`
  };

  // 自动解析货物信息
  useEffect(() => {
    if (cargoText.trim()) {
      const parsed = parseCargoText(cargoText);
      setParsedCargo(parsed);

      // 处理起运地
      if (parsed.origin) {
        setOrigin(parsed.origin);
        const airportResult = findAirportByCode(parsed.origin);
        if (airportResult) {
          setOriginAirport(airportResult);
          setOrigin(`${airportResult.code} - ${airportResult.chinese}`);
        }
      } else {
        setOrigin('');
        setOriginAirport(null);
      }

      // 处理目的地
      if (parsed.destination || parsed.destinationCode) {
        const destCode = parsed.destinationCode || parsed.destination;
        const airportResult = findAirportByCode(destCode);
        if (airportResult) {
          setDestinationAirport(airportResult);
          setDestination(`${airportResult.code} - ${airportResult.chinese} | ${airportResult.english} | ${airportResult.countryWithCode || airportResult.country || ''} · ${airportResult.continent || ''}`);
        } else {
          setDestination(destCode);
        }
      } else {
        // 尝试智能地址解析
        const lines = cargoText.split('\n');
        for (const line of lines) {
          const cleanLine = line.trim();
          if (cleanLine.length > 10) {
            const addressResult = parseAddressAndFindAirports(cleanLine);
            if (addressResult.success && addressResult.primaryAirport) {
              const airportResult = findAirportByCode(addressResult.primaryAirport.code);
              if (airportResult) {
                const isChinaAddress = addressResult.address?.country === '中国' ||
                                      addressResult.address?.country === 'China' ||
                                      airportResult.country === '中国';

                if (isChinaAddress) {
                  setOriginAirport(airportResult);
                  setOrigin(`${airportResult.code} - ${airportResult.chinese}`);
                } else {
                  setDestinationAirport(airportResult);
                  setDestination(`${airportResult.code} - ${airportResult.chinese} | ${airportResult.english} | ${airportResult.country || ''} · ${airportResult.continent || ''}`);
                }
                break;
              }
            }
          }
        }

        if (!destinationAirport) {
          setDestination('');
          setDestinationAirport(null);
        }
      }

      // 计算结果
      const calculations = calculateCargoMetrics(parsed, 'air');
      setCalculations(calculations);
    } else {
      setParsedCargo({});
      setCalculations(null);
      setOrigin('');
      setDestination('');
      setOriginAirport(null);
      setDestinationAirport(null);
    }

    // 只有在 destinationAirport 变化时才更新显示
    if (destinationAirport) {
      setDestination(`${destinationAirport.code} - ${destinationAirport.chinese} | ${destinationAirport.english} | ${destinationAirport.countryWithCode || destinationAirport.country || ''} · ${destinationAirport.continent || ''}`);
    }
  }, [cargoText, destinationAirport]);

  // 示例数据加载函数
  const loadSampleData = (key: string) => {
    setCargoText(sampleData[key as keyof typeof sampleData]);
  };

  // 生成报价
  const handleGenerateQuote = async () => {
    if (!destination.trim() || !calculations) {
      alert('请填写目的地信息');
      return;
    }

    setIsLoading(true);
    try {
      const modeCalc = calculateCargoMetrics(parsedCargo, 'air');
      const quotes = generateQuotes(
        origin,
        destination,
        modeCalc.chargeableWeight,
        modeCalc.totalVolume,
        'air'
      );

      onQuotesGenerated(quotes);
    } catch (error) {
      console.error('生成报价失败:', error);
      alert('生成报价失败，请检查输入信息');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* 货物信息输入 */}
      <Card>
        <CardHeader>
          <CardTitle>货物信息输入</CardTitle>
          <CardDescription>
            请输入货物详细信息，系统将自动解析并计算相关数值
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cargo-text">货物信息</Label>
            <Textarea
              id="cargo-text"
              placeholder="请输入货物名称、重量、体积、尺寸等信息..."
              value={cargoText}
              onChange={(e) => setCargoText(e.target.value)}
              rows={8}
              className="mt-2"
            />
            <div className="mt-2">
              <div className="grid grid-cols-8 gap-1">
                <Button variant="outline" size="sm" onClick={() => loadSampleData('traditional')}>传统格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('newFormat')}>批量格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('latest')}>单托格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('table')}>表格格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('boxSpec')}>箱规格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('commodity')}>商品格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('multiCrate')}>多Crate格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('simpleCrate')}>简化Crate示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('pallet')}>托盘格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('multiSize')}>多尺寸格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('air')}>空运格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('moreAirport')}>更多机场代码示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('box')}>木箱格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('electric')}>带电货物示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('battery')}>电池类示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('general')}>普通货物示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('boxCount')}>箱数格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('complex')}>复杂格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('singleItem')}>单件规格示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('chineseVolume')}>中文体积示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('led')}>LED产品示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('questionMark')}>问号字符修复示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('weightVolumePieces')}>重量/体积/件数格式</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('flexibleOrder')}>智能顺序识别</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('palletDetail')}>托盘详细格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('delTriple')}>DEL三元组示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('triple1')}>三元组格式1</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('triple2')}>三元组格式2</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('triple3')}>三元组格式3</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('triple4')}>三元组格式4</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('triple5')}>三元组格式5</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('ctns')}>CTNS格式+箱规示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('ccu')}>CCU新格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('khi')}>KHI双斜杠格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('beg')}>BEG新格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('pek')}>PEK新格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('simpleTriple')}>简化三元组格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('bom')}>BOM新格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('gw')}>GW格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('nw')}>NW格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('newDimensionFormat')}>新尺寸格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('tableFormat')}>表格格式示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('mixedUnits')}>中英混合单位示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('chineseUnits')}>中文单位示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('reverseOrder')}>反向顺序示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('europeUK')}>欧洲地址解析示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('europeFrance')}>欧洲地址解析示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('europeGermany')}>欧洲地址解析示例</Button>
                <Button variant="outline" size="sm" onClick={() => loadSampleData('europeItaly')}>欧洲地址解析示例</Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="transport-mode" className="text-sm font-medium text-gray-700">运输方式</Label>
              <Input
                id="transport-mode"
                value="国际空运"
                readOnly
                className="cursor-not-allowed h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="origin" className="text-sm font-medium text-gray-700">起运地</Label>
              <Input
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="请输入起运地城市或地区..."
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-sm font-medium text-gray-700">目的地</Label>
              <AirportSearch
                value={destination}
                placeholder="机场代码.城市.国家.航司.提单号..."
                className="h-10"
                onChange={(airport) => {
                  setDestinationAirport(airport);
                  if (airport) {
                    setDestination(`${airport.code} - ${airport.chinese} | ${airport.english} | ${airport.countryWithCode || airport.country || ''} · ${airport.continent || ''}`);
                  }
                }}
                onCodeChange={(code) => {
                  if (code.length === 3) {
                    setDestination(code);
                    const airportResult = findAirportByCode(code);
                    if (airportResult) {
                      setDestinationAirport(airportResult);
                      setDestination(`${airportResult.code} - ${airportResult.chinese} | ${airportResult.english} | ${airportResult.country || ''} · ${airportResult.continent || ''}`);
                    }
                  }
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 货物解析展示 */}
      {(parsedCargo.name || parsedCargo.dimensions) && (
        <Card>
          <CardHeader>
            <CardTitle>货物解析</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 gap-2 text-sm mb-4">
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs mb-1">名称</span>
                <span className="text-gray-900 font-medium truncate">
                  {parsedCargo.name || '未识别'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs mb-1">件数</span>
                <span className="text-gray-900 font-medium">
                  {parsedCargo.pieces || '-'} 件
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs mb-1">重量</span>
                <span className="text-gray-900 font-medium">
                  {parsedCargo.weight || '-'} kg
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs mb-1">体积</span>
                <span className="text-gray-900 font-medium">
                  {parsedCargo.volume ? Number(parsedCargo.volume).toFixed(3) : '-'} cbm
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs mb-1">起运地</span>
                <span className="text-gray-900 font-medium truncate">
                  {parsedCargo.origin || '等待确认'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-xs mb-1">目的地</span>
                <span className="text-gray-900 font-medium truncate">
                  {(parsedCargo.destination || parsedCargo.destinationCode) || '等待确认'}
                </span>
              </div>
            </div>

            {/* 尺寸明细 */}
            {parsedCargo.dimensionDetails && parsedCargo.dimensionDetails.length > 0 && (
              <div className="border-t pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">尺寸明细</h4>
                {parsedCargo.dimensionDetails.map((detail: DimensionDetail, index: number) => (
                  <div key={index} className="grid grid-cols-6 gap-2 py-2">
                    <span className="text-sm text-gray-700">
                      {detail.length} × {detail.width} × {detail.height} cm
                    </span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm text-gray-600">
                      {detail.quantity}{parsedCargo.packageType === 'pallets' ? '托' : '件'}
                    </span>
                    <span className="text-sm text-gray-600"></span>
                    <span className="text-sm font-medium text-blue-600">{detail.volume.toFixed(3)} cbm</span>
                    <span className="text-sm text-gray-600"></span>
                  </div>
                ))}
              </div>
            )}

          </CardContent>
        </Card>
      )}



      {/* 计算结果 */}
      {calculations && (
        <Card>
          <CardHeader>
            <CardTitle>计算结果</CardTitle>
          </CardHeader>
          <CardContent>



            <div className="grid grid-cols-6 gap-4 mb-4">
              <div className="p-3 bg-teal-50 rounded-lg text-center">
                <Label className="text-sm text-muted-foreground block mb-1">件数</Label>
                <p className="text-xl font-bold text-teal-600">
                  {calculations.totalPieces} 件
                </p>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <Label className="text-sm text-muted-foreground block mb-1">实际重量</Label>
                <p className="text-xl font-bold text-blue-600">
                  {calculations.totalWeight} kg
                </p>
              </div>

              <div className="p-3 bg-green-50 rounded-lg text-center">
                <Label className="text-sm text-muted-foreground block mb-1">总体积</Label>
                <p className="text-xl font-bold text-green-600">
                  {Number(calculations.totalVolume).toFixed(1)} cbm
                </p>
              </div>

              <div className="p-3 bg-orange-50 rounded-lg text-center">
                <Label className="text-sm text-muted-foreground block mb-1">体积重</Label>
                <p className="text-xl font-bold text-orange-600">
                  {Math.round(calculations.totalVolume * 167)} kg
                </p>
              </div>

              <div className="p-3 bg-red-50 rounded-lg text-center">
                <Label className="text-sm text-muted-foreground block mb-1">计费重量</Label>
                <p className="text-xl font-bold text-red-600">
                  {Math.max(calculations.totalWeight, Math.round(calculations.totalVolume * 167))} kg
                </p>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <Label className="text-sm text-muted-foreground block mb-1">货物比重 KG/CBM</Label>
                <p className="text-lg font-bold text-purple-600">
                  {calculations.density > 0 ? `1:${Math.round(calculations.density)}` : '计算中...'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {calculations.density >= 200 ? '重货' : calculations.density >= 100 ? '普货' : '轻货'}
                </p>
              </div>
            </div>


          </CardContent>
        </Card>
      )}

      {/* 生成报价按钮 */}
      <div className="flex justify-center">
        <Button
          onClick={handleGenerateQuote}
          disabled={!destination.trim() || !calculations || isLoading}
          size="lg"
          className="px-8"
        >
          {isLoading ? '生成报价中...' : '生成报价'}
        </Button>
      </div>
    </div>
  );
}
