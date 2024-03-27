import { Controller } from 'egg';
import fs from 'fs';
import path from 'path';

export default class HomeController extends Controller {
  public async index() {
    this.ctx.logger.info('index >>>>', this.app.env);

    if (this.app.config.env === 'local') {
      // // await this.ctx.render('index.tpl');
      const server = await this.ctx.service.vite.getServer();
      // 使用vite服务输出视图
      const html = await server.transformIndexHtml(
        this.ctx.request.url,
        await fs.promises.readFile(
          path.join(__dirname, '../../../client/index.html'),
          'utf-8'
        )
      );

      this.ctx.body = await this.ctx.renderString(html, {
        SERVER_DATA: 'server template data',
        title: 'happy-boy',
      });
    } else {
      await this.ctx.render('index.html');
    }
  }
}
