/**
 * @description 
 * @author cq
 * @Date 2021-03-11 14:21:52
 * @LastEditTime 2021-03-11 14:40:15
 * @LastEditors cq
 */

 
function debounce(func:any, delay: number) {
  let timer: NodeJS.Timeout | undefined;

  const debounced = (...args: any[]) => {
    debounced.cancel();
    timer = setTimeout(() => {
      console.log('run-do');
      func(...args);
    }, delay);
  }

  debounced.cancel = function () {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  }
  return debounced
}

export default debounce
