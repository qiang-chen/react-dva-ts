/**
 * @description
 * @author cq
 * @Date 2020-06-04 19:46:32
 * @LastEditTime 2020-06-09 17:21:42
 * @LastEditors cq
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 接口路由文件导出
 */


module.exports = app => {
  const { router, controller } = app;
  console.log(123);
  router.get('/Invincible/home/list', controller.home.getList);
};
