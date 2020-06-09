/**
 * @description axios拦截请求
 * @author cq
 * @Date 2020-06-09 14:39:52
 * @LastEditTime 2020-06-09 17:37:48
 * @LastEditors cq
 */
import axios from 'axios';
import { message } from "antd"
import ColumnGroup from 'antd/lib/table/ColumnGroup';

const request = axios.create({
  // baseURL: process.env.NODE_ENV === "development" ? "http://127.0.0.1:7004" : "生产域名"
})

//请求前拦截
request.interceptors.request.use((config) => {
  //可以统一配置请求头token
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  // config.method === "post" ? config.data = qs.stringify({ ...config.data }) : config.params = { ...config.params };
  //config.headers['authorization'] = jurisdiction.state.token
  return config;
})


//请求后拦截
request.interceptors.response.use(response => {
  return response.data;
}, error => {
    console.log(error)
  message.error("接口报错", error)
})


export default request;