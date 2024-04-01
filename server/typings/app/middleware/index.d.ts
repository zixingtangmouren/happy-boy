// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportViteDevServer from '../../../app/middleware/viteDevServer';

declare module 'egg' {
  interface IMiddleware {
    viteDevServer: typeof ExportViteDevServer;
  }
}
