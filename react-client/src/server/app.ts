/**
 * @description 公共请求
 * @author cq
 * @Date 2020-06-10 16:54:46
 * @LastEditTime 2020-06-10 18:18:23
 * @LastEditors cq
 */
import * as app from "@/api/app";
import request from "@/utils/request";

//删除一条数据
type serverGetMenuListState = Partial<{
  identity: string
}>
export async function serverGetMenuList(data: serverGetMenuListState) {
  return request(app.getMenuList, {
    method: 'get',
    params: {
      ...data
    }
  })
}