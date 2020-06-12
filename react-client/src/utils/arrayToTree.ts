/**
 * @description 筛选菜单
 * @author cq
 * @Date 2020-06-11 13:41:58
 * @LastEditTime 2020-06-11 17:03:17
 * @LastEditors cq
 */
import { cloneDeep } from "lodash"

export default function arrayToTree(array: any[], id = 'id', pid = 'pid', children = 'children') {
  const data:any[] = cloneDeep(array)
  const result: any[] = []
  const hash:any = {}
  data.forEach((_item: any, index: number) => {
    hash[data[index][id]] = data[index]
  })

  data.forEach((item) => {
    const hashVP = hash[item[pid]]
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = [])
      hashVP[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}