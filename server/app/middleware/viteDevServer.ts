import { Context } from 'egg';
import koa2Connect from 'koa2-connect';

export default () => {
  return async function viteDevServerMiddleware(ctx: Context, next) {
    const { service } = ctx;

    const server = await service.vite.getServer();

    await koa2Connect(server.middlewares)(ctx, next);
  };
};
