const { Service } = require('egg');

class XiaoLiuRenService extends Service {
  // 生成结果
  async generateResult(solarDate) {
    const { convertToLunar, getTimeHour } = this.ctx.helper;
    const lunarDate = convertToLunar(solarDate);
    const timeHour = getTimeHour(solarDate);
    const tag = [lunarDate[0], lunarDate[1], timeHour];
    const positions = ['大安', '留连', '速喜', '赤口', '小吉', '空亡'];

    const result = [];

    let currentPosition = 0;
    tag.forEach((index) => {
      currentPosition = (currentPosition + (index - 1)) % 6;
      result.push(positions[currentPosition]);
    });

    return result.join(' - ');
  }
}

module.exports = XiaoLiuRenService;
