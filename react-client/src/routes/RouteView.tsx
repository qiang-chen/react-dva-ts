/**
 * @description 路由表循环
 * @author cq
 * @Date 2020-05-25 15:16:47
 * @LastEditTime 2020-06-16 17:33:22
 * @LastEditors cq
 */
import React, { FunctionComponent, Suspense } from 'react';
import NoFond from "@/pages/NoFond/index"
import routeConfig from "./routeConfig"
import { routerRedux, Switch, Route, Redirect, } from 'dva/router'
import App from "@/App"
import { History } from 'history';

const { ConnectedRouter } = routerRedux
type RouteViewProps = {
  history: History
  app: any
}


const RouteView: FunctionComponent<RouteViewProps> = (props) => {
  const { history } = props;
  return (
    <ConnectedRouter history={history as History}>
      <App>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Redirect exact from="/" to="/pages/antd/small" />
            {routeConfig.map((item: any) => {
              return (
                <Route
                  path={item.path}
                  key={item.path}
                  render={(props) => {
                    return <item.component {...props}></item.component>
                  }}
                ></Route>
              )
            })}
            <Route component={NoFond}></Route>
          </Switch>
        </Suspense>
      </App>
    </ConnectedRouter>
  );
}


export default RouteView