/* eslint-disable no-trailing-spaces */
/**
 * @description 
 * @author cq
 * @Date 2020-06-09 17:12:24
 * @LastEditTime 2020-06-10 19:50:42
 * @LastEditors cq
 */
'use strict';
const { Service } = require('egg');

class User extends Service {
  async getList(opt) {
    const { identity } = opt;
    // const result = await this.app.mysql.get('menu_list', { user_type: [ identity ] });
    const $sql = `SELECT * FROM menu_list WHERE user_type LIKE '%${identity}%'`;
    const result = await this.app.mysql.query($sql);
    return result;
  }
}

module.exports = User;
