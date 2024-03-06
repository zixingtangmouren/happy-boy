const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async render() {
    const { ctx } = this;
    const result = await ctx.service.xiaoLiuRen.generateResult(new Date());
    await ctx.render('index.html', {
      name: result,
    });
  }

  async devRender() {
    const { ctx } = this;
    const res = await ctx.curl('http://localhost:5173/static');
    const html = res.data.toString();
    const scripts = ctx.helper.extractScriptContents(html);
    await ctx.render('index.html', {
      scripts,
    });
  }

  async devProxy() {
    const { ctx } = this;
    const { path, method } = ctx;
    ctx.logger.info('proxy', path, method);
    const res = await ctx.curl('http://localhost:5173' + path);
    ctx.set('Content-Type', 'text/javascript; charset=UTF-8');
    ctx.body = res.data;
  }
}

module.exports = HomeController;
