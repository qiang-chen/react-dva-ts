/**
 * @description
 * @author cq
 * @Date 2020-06-04 19:46:32
 * @LastEditTime 2020-06-10 18:13:07
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
  router.post('/Invincible/home/list/add', controller.home.addList);
  router.delete('/Invincible/home/list/remove', controller.home.removeList);
  router.get('/Invincible/list/menu', controller.app.getList);
};
