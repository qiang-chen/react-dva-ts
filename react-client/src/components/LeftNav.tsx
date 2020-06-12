/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @description 左侧导航条
 * @author cq
 * @Date 2020-05-25 14:39:55
 * @LastEditTime 2020-06-12 14:41:56
 * @LastEditors cq
 */
import React, { FunctionComponent, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, withRouter} from "dva/router"
import routeConfig from "../routes/routeConfig"
import RootState from "@/ts-types/models"
import { connect } from 'dva';
import appState from "@/ts-types/models/app";
import arrayToTree from "@/utils/arrayToTree"

const { SubMenu } = Menu;
type deepMenuProps = {
  location: any
}

const DeepMenu: FunctionComponent<deepMenuProps & RootState> = ({ location, app }) => {
  const { menuList } = app as appState;
  const [openKey, setOpenKey] = useState("");
  const findDefault = (routeConfig: any[], curObj: any): any => {
    for (let i = 0; i < routeConfig.length; i++) {
      if (routeConfig[i].children) {
        curObj = routeConfig[i]
        return findDefault(routeConfig[i].children, curObj)
      } else {
        if (routeConfig[i].path === location.pathname) {
          return curObj
        }
      }
    }
  }

  useEffect(() => {
    const obj = findDefault(routeConfig, {});
    if (!obj) {
      return
    }
    if (Object.keys(obj)) {
      setOpenKey(obj.path)
    }
  }, []);

  const getMenuNOdes = (menuList: any[]) => {
    // const path = props.location.pathname;
    return menuList && menuList.reduce((pre, item) => {
      // 向pre添加<Menu.Item>
      if (!item.children) {
        pre.push((
          <Menu.Item key={item.menu_path}>
            <Link to={item.menu_path}>
              <UserOutlined />
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        ));
      } else {
        pre.push((
          <SubMenu
            key={item.menu_path}
            title={
              <span>
                <UserOutlined />
                <span>{item.name}</span>
              </span>
            }>
            {getMenuNOdes(item.children)}
          </SubMenu>
        ));
      }
      return pre;
    }, []);
  }
  return (
    <>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[openKey]}
      >
        {/* {getMenuNOdes(filterMenu(routeConfig, menuList,[]))}*/}
        {getMenuNOdes(arrayToTree(menuList, 'id', 'pid'))}
      </Menu>
    </>
  );
}


const mapStateToProps = ({
  app,
}: RootState) => ({
  app
})

export default connect(mapStateToProps)(withRouter(DeepMenu))