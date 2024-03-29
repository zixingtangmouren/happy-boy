import { Context } from 'egg';

export default {
  getAssets(this: Context) {
    if (this.app.config.env === 'local') {
      return {
        js: '<script type="module" src="/static/src/main.tsx"></script>',
        css: '',
      };
    } else {
      return {
        js: this.app.locals.js.join(''),
        css: this.app.locals.css.join(''),
      };
    }
  },
};
