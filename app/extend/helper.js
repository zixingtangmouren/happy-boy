const lunar = require('chinese-lunar');

// 获取农历月份、日期
function convertToLunar(solarDate) {
  const lunarDate = lunar.solarToLunar(solarDate);
  const month = lunarDate.month;
  const day = lunarDate.day;
  return [month, day];
}

// 获取时辰
function getTimeHour(solarDate) {
  const hour = solarDate.getHours();
  if (hour >= 23 || hour < 1) {
    return 1;
  } else if (hour >= 1 && hour < 3) {
    return 2;
  } else if (hour >= 3 && hour < 5) {
    return 3;
  } else if (hour >= 5 && hour < 7) {
    return 4;
  } else if (hour >= 7 && hour < 9) {
    return 5;
  } else if (hour >= 9 && hour < 11) {
    return 6;
  } else if (hour >= 11 && hour < 13) {
    return 7;
  } else if (hour >= 13 && hour < 15) {
    return 8;
  } else if (hour >= 15 && hour < 17) {
    return 9;
  } else if (hour >= 17 && hour < 19) {
    return 10;
  } else if (hour >= 19 && hour < 21) {
    return 11;
  } else if (hour >= 21 && hour < 23) {
    return 12;
  }
}

function extractScriptContents(html) {
  const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  const matches = html.matchAll(scriptRegex);
  const scriptContents = [];

  for (const match of matches) {
    // match[1] 是捕获组中的内容，即 <script> 标签之间的文本
    scriptContents.push(match[0].trim());
  }
  return scriptContents;
}

module.exports = {
  convertToLunar,
  getTimeHour,
  extractScriptContents,
};
