/* eslint-disable no-trailing-spaces */
/**
 * @description 
 * @author cq
 * @Date 2020-06-04 19:46:32
 * @LastEditTime 2020-06-09 17:09:15
 * @LastEditors cq
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // eslint-disable-next-line key-spacing
  mysql : {
    enable: true,
    package: 'egg-mysql',
  },
};
