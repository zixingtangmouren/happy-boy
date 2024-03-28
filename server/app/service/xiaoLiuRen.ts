import { Service } from 'egg';
import lunar from 'chinese-lunar';

export default class XiaoLiuRenService extends Service {
  convertToLunar(solarDate) {
    const lunarDate = lunar.solarToLunar(solarDate);
    const month = lunarDate.month;
    const day = lunarDate.day;
    return [month, day];
  }

  getTimeHour(solarDate) {
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

  generateResult(solarDate) {
    const lunarDate = this.convertToLunar(solarDate);
    const timeHour = this.getTimeHour(solarDate);
    const tag = [lunarDate[0], lunarDate[1], timeHour];
    const positions = ['大安', '留连', '速喜', '赤口', '小吉', '空亡'];

    const result: string[] = [];

    let currentPosition = 0;
    tag.forEach((index) => {
      currentPosition = (currentPosition + (index - 1)) % 6;
      result.push(positions[currentPosition]);
    });

    return result.join(' - ');
    //return ['大安', '空亡', '空亡'].join(' - ');
  }
}
