// app.ts
import { Application, IBoot } from 'egg';
import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve(__dirname, './app/public/.vite/manifest.json');

export default class FooBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  async configWillLoad() {
    // 预备调用 configDidLoad，
    // Config 和 plugin 文件已被引用，
    // 这是修改配置的最后机会。
    this.app.locals = {
      title: 'egg-vite-demo',
    };

    console.log('this.app.env', this.app.env);

    if (this.app.env === 'prod') {
      const content = await fs.promises.readFile(manifestPath, 'utf-8');
      const manifest = JSON.parse(content);

      const js: string[] = [];
      const css: string[] = [];

      Object.keys(manifest).forEach((key) => {
        const assetObj = manifest[key];
        if (assetObj.isEntry) {
          js.push(`<script type="module" src="/static/${assetObj.file}"></script>`);

          if (assetObj.css.length) {
            assetObj.css.forEach((cssFile: string) => {
              css.push(`<link rel="stylesheet" href="/static/${cssFile}" />`);
            });
          }
        }
      });

      this.app.locals.js = js;
      this.app.locals.css = css;
    }
  }

  configDidLoad() {
    // Config 和 plugin 文件已加载。

    console.log(this.app.env);
  }

  async didLoad() {
    // 所有文件已加载，此时可以启动插件。
  }

  async willReady() {
    // 所有插件已启动，这里可以执行一些在应用准备好之前的操作。
  }

  async didReady() {
    // Worker 已准备好，可以执行一些不会阻塞应用启动的操作。
  }

  async serverDidReady() {
    // 服务器已监听。
  }

  async beforeClose() {
    // 应用关闭前执行的操作。
  }
}
