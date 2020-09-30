/**
 * @description 
 * @author cq
 * @Date 2020-09-28 17:30:04
 * @LastEditTime 2020-09-28 18:30:05
 * @LastEditors cq
 */
export default (value:string, wait: number)=> {
  var timer: NodeJS.Timeout | null = null;
  let a=null;
  if (!timer) {
    timer = setTimeout( ()=> {
      timer = null;
      a=value
    }, wait)
  }
  return a
}