import { DefaultConfig } from './config.default';
import path from 'path';

export default () => {
  const config: DefaultConfig = {};

  config.static = {
    prefix: '/static', // 自定义的静态资源访问前缀
    dir: [path.join(__dirname, '/app/public')], // 静态资源所在的目录，默认为 public
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'happy_production',
  };

  return config;
};
