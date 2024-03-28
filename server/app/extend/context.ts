import { Context } from 'egg';

export default {
  getAssets(this: Context) {
    if (this.app.config.env === 'local') {
      return {
        js: '<script type="module" src="./src/main.tsx"></script>',
        css: '',
      };
    } else {
      return {
        js: '<script src="/public/assets/main-DPnZKiAO.js"></script>',
        css: '<link rel="stylesheet" href="/public/assets/main-BEyngAT-.css">',
      };
    }
  },
};
