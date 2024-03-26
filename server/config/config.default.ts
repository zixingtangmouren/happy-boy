import { EggAppConfig, PowerPartial } from 'egg';

interface BizConfig {}

export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  config.keys = appInfo.name + 'tang_happty_body';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return config;
};
