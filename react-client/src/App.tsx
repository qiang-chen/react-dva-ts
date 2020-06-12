/**
 * @description 
 * @author cq
 * @Date 2020-05-28 17:42:55
 * @LastEditTime 2020-06-11 20:17:06
 * @LastEditors cq
 */
import React, { Suspense, useEffect } from 'react'
import { Router, routerRedux, Switch, Route } from "dva/router"
import { History } from 'history';
import { Layout } from 'antd';
import LeftNav from "@/components/LeftNav"
import RouteView from '@/routes/RouteView';
import { Dispatch } from '@/ts-types/dva';
import "./app.css"
import filterRoute from './utils/filterRoute';
import routeConfig from './routes/routeConfig';
import { getMenuList } from './api/app';
import Cmp from './routes/Cmp';
import NoFind from './pages/NoFond';
// import Route from './route';

const { ConnectedRouter } = routerRedux

const { Sider, Content } = Layout;

type AppProps = {
  history: History
  app: any
}

const namespace = "app"

//注意这里一定要注入history不然页面展示不出来  而且是结构出来的history
function App(props?: AppProps) {
  const { history, app } = props as AppProps;
  console.log(app);
  useEffect(() => {
    app._store.dispatch({ type: `${namespace}/getMenuList` });
  }, [])

  // if (!props) {
  //   return <div></div>
  // }
  
  return <ConnectedRouter history={history}>
    <Layout style={{ minHeight: '100%' }}>
      <Sider>
        <LeftNav ></LeftNav>
      </Sider>
      <Layout>
        <h1>我是头</h1>
        <Content style={{ margin: 20, backgroundColor: '#fff' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <RouteView
            pathname={app}
            />
                我是页面主体部分
            </Suspense>
        </Content>
        {/* <Footer style={{ textAlign: 'center', color: '#ccc' }}>推荐使用谷歌浏览器,可以获得更佳页面操作体验</Footer> */}
      </Layout>
    </Layout>
  </ConnectedRouter>
}


export default App