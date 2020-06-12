/**
 * @description 路由筛选
 * @author cq
 * @Date 2020-06-11 17:21:09
 * @LastEditTime 2020-06-11 17:49:11
 * @LastEditors cq
 */

const filterRoute = (routeConfig: any[], menuList: any[]) => {
  return routeConfig.reduce((pre, cur) => {
    if (menuList.findIndex(item => item.menu_path === cur.path) != -1) {
      pre.push(cur)
    }
    return pre
  }, [])
}

export default filterRoute