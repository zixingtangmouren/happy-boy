import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};

  config.middleware = ['viteDevServer'];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'happy_development',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
