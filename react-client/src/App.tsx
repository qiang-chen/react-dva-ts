/**
 * @description 
 * @author cq
 * @Date 2020-05-28 17:42:55
 * @LastEditTime 2020-06-19 17:00:01
 * @LastEditors cq
 */
import React, { useEffect, ReactNode, } from 'react'
import { withRouter } from "dva/router"
import { Layout } from 'antd';
import LeftNav from "@/components/LeftNav"
import { Dispatch } from '@/ts-types/dva';
import { connect } from 'dva';
import { RootState } from '@/ts-types/models';
import appState from '@/ts-types/models/app';
import { History } from 'history';
import NoFond from "@/pages/NoFond/index"
import "./app.css"

const { Sider, Content } = Layout;

type AppProps = {
  dispatch: Dispatch
  children: ReactNode
  history: History
}

const namespace = "app"

//注意这里一定要注入history不然页面展示不出来  而且是结构出来的history
function App({ dispatch, children, app, history }: AppProps & RootState & appState) {
  const { menuList } = app as appState;
  useEffect(() => {
    dispatch({ type: `${namespace}/getMenuList` });
  }, [])
  return <>
    <Layout style={{ minHeight: '100%' }}>
      <Sider>
        <LeftNav location={history.location} menuList={menuList}></LeftNav>
      </Sider>
      <Layout>
        <h1>我是头</h1>
        <Content style={{ margin: 20, backgroundColor: '#fff' }}>
          {menuList.findIndex(item => item.menu_path === history.location.pathname) > -1 || history.location.pathname === "/" ? children : <NoFond />}
           我是页面主体部分
        </Content>
        {/* <Footer style={{ textAlign: 'center', color: '#ccc' }}>推荐使用谷歌浏览器,可以获得更佳页面操作体验</Footer> */}
      </Layout>
    </Layout>
  </>
}

const mapStateToProps = ({
  app,
}: RootState) => ({
  app,
})

export default withRouter(connect(mapStateToProps)(App))
// export default App