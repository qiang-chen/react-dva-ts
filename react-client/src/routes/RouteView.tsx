/**
 * @description 路由表循环
 * @author cq
 * @Date 2020-05-25 15:16:47
 * @LastEditTime 2020-06-11 20:29:48
 * @LastEditors cq
 */
import React, { FunctionComponent } from 'react';
import NoFind from "@/pages/NoFond/index"
import routeConfig from "./routeConfig"
import RootState from "@/ts-types/models"
import { connect } from 'dva';
import dynamic from 'dva/dynamic'
import { routerRedux, Switch, Route, } from 'dva/router'
import appState from "@/ts-types/models/app"
import filterRoute from "@/utils/filterRoute"
import Cmp from './Cmp'

type RouteViewProps = {
  pathname: any
}

const RouteView: FunctionComponent<RouteViewProps & RootState> = ({ app, pathname }) => {
  // const { menuList } = app as appState;

  console.log(222);
  
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/pages/antd/small"></Redirect> */}
      {routeConfig.map((item: any) => {
        return (
          <Route
            path={item.path}
            key={item.path}
            exact
            render={(props) => {
              console.log(111);
              console.log(item.path);
              // return <Cmp xxxx={item.path} />
              return <item.component {...props}></item.component>
            }}
          ></Route>
        )
      })}
      <Route component={NoFind}></Route>
    </Switch>
  );
}

// const mapStateToProps = ({
//   app,
//   routing,
// }: RootState) => ({
//   app,
//     pathname: routing.location.pathname
// })

// export default connect(mapStateToProps)(RouteView)
export default RouteView