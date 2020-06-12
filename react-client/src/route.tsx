/**
 * @description 
 * @author cq
 * @Date 2020-06-10 20:49:34
 * @LastEditTime 2020-06-11 09:57:16
 * @LastEditors cq
 */
/**
 * @description 
 * @author cq
 * @Date 2020-05-28 17:42:55
 * @LastEditTime 2020-06-10 20:45:24
 * @LastEditors cq
 */
import React from 'react'
import { History } from 'history';
import { Layout } from 'antd';
import RootState from "@/ts-types/models"
import "./app.css"
import App from "./App"
const { Sider, Content } = Layout;

type AppProps = {
  history: History
}

//注意这里一定要注入history不然页面展示不出来  而且是结构出来的history
function Route(props?: AppProps & RootState) {
  if (!props) {
    return <div></div>
  }
  return <div>
    
  </div>


}

export default Route