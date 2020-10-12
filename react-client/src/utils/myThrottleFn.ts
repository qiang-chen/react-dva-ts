/**
 * @description 节流函数
 * @author cq
 * @Date 2020-09-28 17:30:04
 * @LastEditTime 2020-10-12 15:06:51
 * @LastEditors cq
 */

function myThrottleFn(fn: Function, rateTime: number) {
  let timer: any = null
  return (...args: any[]) => {
    if (!timer) {
      timer = setTimeout(function (this: any) {
        fn.apply(this, args)
        timer = null;
      }, rateTime)
    }
  }
}

export default myThrottleFn;