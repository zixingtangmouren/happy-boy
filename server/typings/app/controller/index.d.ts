// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHappyMap from '../../../app/controller/happyMap';
import ExportHappySearch from '../../../app/controller/happySearch';
import ExportHome from '../../../app/controller/home';
import ExportUsers from '../../../app/controller/users';
import ExportXiaoLiuRen from '../../../app/controller/xiaoLiuRen';

declare module 'egg' {
  interface IController {
    happyMap: ExportHappyMap;
    happySearch: ExportHappySearch;
    home: ExportHome;
    users: ExportUsers;
    xiaoLiuRen: ExportXiaoLiuRen;
  }
}
