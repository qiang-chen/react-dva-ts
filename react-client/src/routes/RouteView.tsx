/**
 * @description 路由表循环
 * @author cq
 * @Date 2020-05-25 15:16:47
 * @LastEditTime 2020-06-08 15:30:38
 * @LastEditors cq
 */
import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import NoFind from "@/pages/NoFond/index"

type RouteViewProps = {
  children: any[]
}

const RouteView: FunctionComponent<RouteViewProps> = (props) => {
  const { children } = props;
  const deepRouteView = (children: any[]): any => {
    return children.map((item: any) => {
      if (item.children) {
        return deepRouteView(item.children);
      } else {
        return <Route path={item.path} key={item.path} render={(props) => {
          return <item.component {...props}></item.component>
        }}></Route>
      }
    })
  }
  return (
    <Switch>
      <Redirect exact from="/" to="/pages/antd/small"></Redirect>
      {deepRouteView(children)}
      <Route component={NoFind}></Route>
    </Switch>
  );
}
export default RouteView