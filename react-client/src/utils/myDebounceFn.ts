/**
 * @description 
 * @author cq
 * @Date 2020-09-28 15:25:14
 * @LastEditTime 2020-09-28 15:47:39
 * @LastEditors cq
 */
export const myDebounceFn = (fn: (args?: any) => void, opj: { wait: number }) => {
  const { wait } = opj;
  let timer: NodeJS.Timeout;
  return function (...args: any) {
    timer && clearInterval(timer);
    timer = setTimeout(() => {
      return fn(args);
    }, wait);
  }

}