/**
 * @description 
 * @author cq
 * @Date 2020-06-09 13:54:42
 * @LastEditTime 2020-06-09 19:15:19
 * @LastEditors cq
 */
import * as antdSmall from "@/api/antdSmall";
import request from "@/utils/request";



//请求首页列表数据get
type ServerHomeListState = Partial<{
  type: number
}>
export async function serverHomeList({ type }: ServerHomeListState) {
  return request(antdSmall.homeList,{
    method: 'get',
    params: {
      type
    }
  })
}