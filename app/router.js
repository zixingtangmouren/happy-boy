/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.render);
  router.get('/dev', controller.home.devRender);
  router.get('/static/*', controller.home.devProxy);
};
