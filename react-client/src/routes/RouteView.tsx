/**
 * @description 路由表循环
 * @author cq
 * @Date 2020-05-25 15:16:47
 * @LastEditTime 2020-06-12 15:05:00
 * @LastEditors cq
 */
import React, { FunctionComponent, Suspense } from 'react';
import NoFond from "@/pages/NoFond/index"
import routeConfig from "./routeConfig"
import { routerRedux, Switch, Route, } from 'dva/router'
import App from "@/App"
import { History } from 'history';

const { ConnectedRouter } = routerRedux
type RouteViewProps = {
  history: History
  app: any
}


const RouteView: FunctionComponent<RouteViewProps> = (props) => {
  const { history } = props;
  console.log(history);
  return (
    <ConnectedRouter history={history as History}>
      <Suspense fallback={<div>Loading...</div>}>
        <App>
          <Switch>
            {/* <Redirect exact from="/" to="/pages/antd/small"></Redirect> */}
            {routeConfig.map((item: any) => {
              return (
                <Route
                  path={item.path}
                  key={item.path}
                  exact
                  render={(props) => {
                    return <item.component {...props}></item.component>
                  }}
                ></Route>
              )
            })}
            <Route component={NoFond}></Route>
          </Switch>
        </App>
      </Suspense>
      
    </ConnectedRouter>
  );
}


export default RouteView