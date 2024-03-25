import { Context } from 'egg';
import { createServer } from 'vite';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { pathToRegexp } from 'path-to-regexp';
import k2Connect from 'koa2-connect';

export default () => {
  return async function viteDevServerMiddleware(ctx: Context, next) {
    const { app, helper } = ctx;
    const { isRegexp, getServerAddress } = helper;

    // TODO: 创建服务从哪里读配置文件、以及相关资源
    // @ts-ignore
    if (!app.viteServer) {
      const viteServer = await createServer({
        server: { middlewareMode: true },
      });

      viteServer.listen(3000);

      // @ts-ignore
      app.viteServer = viteServer;
    } else {
      // TODO: 抽成独立的 middleware
      const { app, path, protocol } = ctx;
      const { targets = [] } = app.config.vitePlugin;

      for (const target of targets) {
        if ((isRegexp(target) ? target : pathToRegexp(target)).test(path)) {
          await k2Connect(
            createProxyMiddleware({
              // @ts-ignore
              target: `${protocol}://${getServerAddress(app.viteServer)}`,
              changeOrigin: true,
            })
          )(ctx, next);

          break;
        }
      }
    }

    await next();
  };
};
