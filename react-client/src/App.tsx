/**
 * @description 
 * @author cq
 * @Date 2020-05-28 17:42:55
 * @LastEditTime 2020-06-05 19:01:50
 * @LastEditors cq
 */
import React, { Suspense } from 'react'
import { Router } from "dva/router"
import { History } from 'history';
import { Layout } from 'antd';
import LeftNav from "@/components/LeftNav"
import RouteView from '@/routes/RouteView';
import routeConfig from "@/routes/routeConfig"
import "./app.css"

const { Sider, Content } = Layout;

type DvaApp = Readonly<{
  _models: any;
  _store: any;
  _plugin: any;
  use: (...args: any[]) => any;
  model: any;
  start: any;
}>

type AppProps = {
  history: History
  app?: any
}

//注意这里一定要注入history不然页面展示不出来  而且是结构出来的history
function App(props?: AppProps) {
  if (!props) {
    return <div></div>
  }
  const { history } = props;
  return <Router history={history}>
    <Layout style={{ minHeight: '100%' }}>
      <Sider>
        <LeftNav></LeftNav>
      </Sider>
      <Layout>
        <h1>我是头</h1>
        <Content style={{ margin: 20, backgroundColor: '#fff' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <RouteView
              children={routeConfig}
            // location={props}
            />
                我是页面主体部分
            </Suspense>
        </Content>
        {/* <Footer style={{ textAlign: 'center', color: '#ccc' }}>推荐使用谷歌浏览器,可以获得更佳页面操作体验</Footer> */}
      </Layout>
    </Layout>
  </Router>
}

export default App