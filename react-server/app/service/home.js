/* eslint-disable no-trailing-spaces */
/**
 * @description 
 * @author cq
 * @Date 2020-06-09 17:12:24
 * @LastEditTime 2020-06-09 17:23:28
 * @LastEditors cq
 */
'use strict';
const { Service } = require('egg');

class User extends Service {
  async getList() {
    const results = await this.app.mysql.select('home_list');
    return results;
  }
}

module.exports = User;
