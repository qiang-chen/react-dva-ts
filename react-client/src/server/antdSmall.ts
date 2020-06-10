/**
 * @description 
 * @author cq
 * @Date 2020-06-09 13:54:42
 * @LastEditTime 2020-06-09 20:46:28
 * @LastEditors cq
 */
import * as antdSmall from "@/api/antdSmall";
import request from "@/utils/request";



//请求首页列表数据get
type ServerHomeListState = Partial<{
  type: number
}>
export async function serverHomeList({ type }: ServerHomeListState) {
  return request(antdSmall.homeList, {
    method: 'get',
    params: {
      type
    }
  })
}

//添加一条数据
type serverAddHomeListState = Partial<{
  id: number
  title: string
  text: string
}>
export async function serverAddHomeList(data: serverAddHomeListState) {
  return request(antdSmall.addHomeList, {
    method: 'post',
    data: {
      ...data
    }
  })
}

//删除一条数据
type serverRemoveHomeListState = Partial<{
  id: number
}>
export async function serverRemoveHomeList(data: serverRemoveHomeListState) {
  return request(antdSmall.removeHomeList, {
    method: 'delete',
    data: {
      ...data
    }
  })
}