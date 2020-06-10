/* eslint-disable no-trailing-spaces */
/**
 * @description 
 * @author cq
 * @Date 2020-06-09 17:12:24
 * @LastEditTime 2020-06-10 11:00:49
 * @LastEditors cq
 */
'use strict';
const { Service } = require('egg');

class User extends Service {
  async getList() {
    const result = await this.app.mysql.select('home_list');
    return result;
  }
  async addList(opt) {
    console.log(opt);
    const result = await this.app.mysql.insert('home_list', { ...opt });
    return result;
  }
  async removeList(opt) {
    console.log(opt);
    const { id } = opt;
    const result = await this.app.mysql.delete('home_list', {
      id,
    });
    return result;
  }
  // async updateList(opt) {
  //   console.log(opt);
  //   const { id } = opt;
  //   // 修改数据，将会根据主键 ID 查找，并更新
  //   const row = {
  //     id,
  //     name: 'fengmk2',
  //     otherField: 'other field value', 
  //     modifiedAt: this.app.mysql.literals.now,
  //   };
  //   const result = await this.app.mysql.update('posts', row); 
  //   return result;
  // }
}

module.exports = User;
