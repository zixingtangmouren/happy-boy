import { Context } from 'egg';
import koa2Connect from 'koa2-connect';
import { createServer } from 'vite';
import path from 'path';

export default () => {
  return async function viteDevServerMiddleware(ctx: Context, next) {
    if (!ctx.app.viteServer) {
      // 创建 Vite 服务器
      const vite = await createServer({
        configFile: path.resolve(__dirname, '../../../client/vite.config.ts'),
      });
      ctx.logger.info('Vite server created');
      // 保存服务器实例
      ctx.app.viteServer = vite;
    }

    await koa2Connect(ctx.app.viteServer.middlewares)(ctx, next);
  };
};
