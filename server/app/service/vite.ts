import { Service } from 'egg';
import { ViteDevServer, createServer } from 'vite';
import path from 'path';

let viteServer: ViteDevServer;

export default class ViteService extends Service {
  async getServer() {
    if (!viteServer) {
      // 创建 Vite 服务器
      const vite = await createServer({
        configFile: path.resolve(__dirname, '../../../client/vite.config.ts'),
      });

      this.ctx.logger.info('Vite server created');

      // 保存服务器实例
      viteServer = vite;
    }

    return viteServer;
  }
}
