import { Controller } from 'egg';

export default class XiaoLiuRenController extends Controller {
  async index() {
    const result = this.service.xiaoLiuRen.generateResult(new Date());
    this.logger.info('ip:', this.ctx.ip, '  result:', result);
    this.ctx.body = {
      code: 200,
      message: 'success',
      result,
    };
  }
}
