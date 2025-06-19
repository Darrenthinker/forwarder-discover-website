// 测试第141行立即提取逻辑
const testText = `WAW设备及配件
2500 kgs ; 14.71 cbm ; 6托
货在广州`;

// 模拟normalizeText处理
const correctedText = testText.replace(/\?/g, '').replace(/ +/g, ' ').trim();
console.log('标准化后的文本:', correctedText);

// 模拟机场代码识别逻辑（第127-137行）
const airportCodeMatches = correctedText.match(/\b([A-Z]{3})\b/g);
console.log('机场代码匹配:', airportCodeMatches);

if (airportCodeMatches) {
  for (const code of airportCodeMatches) {
    // 假设WAW是有效的机场代码
    if (code === 'WAW') {
      console.log(`识别到机场代码: ${code}`);

      // 模拟第136-143行的立即提取逻辑
      const firstLine = correctedText.split('\n')[0]?.trim();
      console.log('第一行:', firstLine);
      console.log('第一行包含代码:', firstLine && firstLine.includes(code));

      if (firstLine && firstLine.includes(code)) {
        const afterAirportCode = firstLine.split(code)[1]?.trim();
        console.log('机场代码后的内容:', afterAirportCode);
        console.log('长度检查:', afterAirportCode && afterAirportCode.length >= 2 && afterAirportCode.length <= 20);

        if (afterAirportCode && afterAirportCode.length >= 2 && afterAirportCode.length <= 20) {
          console.log(`✅ 应该设置产品名称为: ${afterAirportCode}`);
        }
      }
      break;
    }
  }
}
