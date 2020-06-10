/* eslint-disable no-trailing-spaces */
/**
 * @description 
 * @author cq
 * @Date 2020-06-04 19:46:32
 * @LastEditTime 2020-06-10 10:23:19
 * @LastEditors cq
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getList() {
    let success = 'ok';
    let data = null;
    const ctx = this.ctx;
    try {
      data = await ctx.service.home.getList();

    } catch (error) {
      success = 'error';
    }
    ctx.body = {
      success,
      data,
    };
  }
  async addList() {
    let success = 'ok';
    let data = null;
    const ctx = this.ctx;
    try {
      data = await ctx.service.home.addList({ ...ctx.request.body });

    } catch (error) {
      success = 'error';
    }
    ctx.body = {
      success,
      data,
    };
  }
  async removeList() {
    let success = 'ok';
    let data = null;
    const ctx = this.ctx;
    try {
      data = await ctx.service.home.removeList({ ...ctx.request.body });
    } catch (error) {
      success = 'error';
    }
    ctx.body = {
      success,
      data,
    };
  }
}

module.exports = HomeController;
