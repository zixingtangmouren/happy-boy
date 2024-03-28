import { Controller } from 'egg';
import fs from 'fs';
import path from 'path';

export default class HomeController extends Controller {
  public async index() {
    if (this.app.config.env === 'local') {
      const server = await this.ctx.app.viteServer!;
      // 使用vite服务输出视图
      const html = await server.transformIndexHtml(
        this.ctx.request.url,
        await fs.promises.readFile(
          path.join(__dirname, '../view/index.html'),
          'utf-8'
        )
      );

      const assets = this.ctx.getAssets();

      this.ctx.body = await this.ctx.renderString(html, {
        ...assets,
      });
    } else {
      await this.ctx.render('index.html');
    }
  }
}
