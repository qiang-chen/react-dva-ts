/**
 * @description
 * @author cq
 * @Date 2020-06-04 19:46:32
 * @LastEditTime 2020-07-07 10:11:48
 * @LastEditors cq
 */


'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591270058630_9234';

  config.security = {
    csrf: false,
  };
  // add your middleware config here
  config.middleware = [];
  config.multipart = {
    mode: 'file',
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'qiang123',
      // 数据库名
      database: 'data_test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
