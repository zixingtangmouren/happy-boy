import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};

  config.middleware = ['viteDevServer'];

  return config;
};
