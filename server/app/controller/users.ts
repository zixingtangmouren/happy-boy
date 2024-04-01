import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    console.log('>>>>>', username, password);
    if (!username || !password) {
      this.ctx.body = {
        code: 1,
        message: '用户名或密码不能为空',
        result: null,
      };
      return;
    }

    const result = await ctx.service.users.getUserInfo(username, password);

    this.ctx.body = {
      code: result ? 0 : 1,
      message: result ? '登录成功' : '用户名或密码错误',
      result,
    };
  }

  public register() {
    // const { ctx } = this;
    // const { username, password } = ctx.request.body;
  }
}
