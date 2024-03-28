import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.get('/happy/*', controller.home.index);

  router.all('/apis/xiao-liu-ren', controller.xiaoLiuRen.index);
};
