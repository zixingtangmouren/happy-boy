// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportTestCode from '../../../app/model/testCode';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    TestCode: ReturnType<typeof ExportTestCode>;
    User: ReturnType<typeof ExportUser>;
  }
}
