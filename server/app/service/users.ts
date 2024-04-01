import { Service } from 'egg';

export default class UserService extends Service {
  // 获取用户信息
  async getUserInfo(username: string, password: string) {
    const { ctx } = this;
    const userInfo = await ctx.model.User.findOne({
      where: {
        username,
        password,
      },
    });

    return userInfo;
  }

  async addUser(username: string, password: string, test_code: string) {
    const { ctx } = this;

    const isExit = await this.verifyUserExit(username);
    if (!isExit) return false;

    const isOk = await this.verifyTestCode(test_code);
    if (!isOk) return false;

    // ctx.model.TestCode.update({

    // });

    // const userInfo = await ctx.model.User.create({
    //   username,
    //   password,
    //   test_code_id,
    // });

    return userInfo;
  }

  async verifyUserExit(username: string) {
    const { ctx } = this;
    const userInfo = await ctx.model.User.findOne({
      where: {
        username,
      },
    });

    return !!userInfo;
  }

  async verifyTestCode(test_code: string) {
    const { ctx } = this;
    const testCodeItem = await ctx.model.TestCode.findOne({
      where: {
        test_code,
      },
    });

    if (!testCodeItem || testCodeItem.used) {
      return false;
    }

    return true;
  }
}
