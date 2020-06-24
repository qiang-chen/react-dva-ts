/**
 * @description 
 * @author cq
 * @Date 2020-04-27 16:39:13
 * @LastEditTime 2020-06-24 14:00:17
 * @LastEditors cq
 */

import React from 'react'
const routeConfig: any[] = [
  {
    path: "/pages/antd/small",
    component: React.lazy(() =>
      import('@/pages/antd/small/index'))
  },
  {
    path: "/pages/antd/ui",
    component: React.lazy(() =>
      import('@/pages/antd/ui/index'))
  },
  {
    path: "/pages/antd/menu1",
    component: React.lazy(() =>
      import('@/pages/antd/menu1/index'))
  },
  {
    path: "/pages/antd/menu2",
    component: React.lazy(() =>
      import('@/pages/antd/menu2/index'))
  },
  {
    path: "/pages/antd/menu3",
    component: React.lazy(() =>
      import('@/pages/antd/menu3/index'))
  },
  {
    path: "/pages/antd/menu4",
    component: React.lazy(() =>
      import('@/pages/antd/menu4/index'))
  },
  {
    path: "/pages/antd/menu5",
    component: React.lazy(() =>
      import('@/pages/antd/menu5/index'))
  },
  {
    path: "/pages/left/l",
    component: React.lazy(() =>
      import('@/pages/antd/small/index'))
  },
  {
    path: "/pages/left/uih",
    name: "页面排版2",
    component: React.lazy(() =>
      import('@/pages/antd/ui/index'))
  },
  {
    path: "/pages/antd/indexedDB",
    name: "indexedDB测试",
    component: React.lazy(() =>
      import('@/pages/antd/indexedDB/index'))
  }
]

export default routeConfig