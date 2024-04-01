import 'egg';

declare module 'egg' {
  interface Application {
    viteServer?: import('vite').ViteDevServer;
    Sequelize: import('sequelize').Sequelize;
  }
}
