import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.get('/happy/*', controller.home.index);
  router.all('/apis/xiao-liu-ren', controller.xiaoLiuRen.index);
  router.post('/apis/login', controller.users.login);
  router.get('/*', controller.home.redirect);
};
