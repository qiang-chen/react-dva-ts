/**
 * @description ts规范
 * @author cq
 * @Date 2020-05-27 11:21:24
 * @LastEditTime 2020-06-11 19:18:48
 * @LastEditors cq
 */
/**
 * @description 
 * @author ronffy
 * @Date 2019-11-15 18:11:09
 * @LastEditTime 2020-05-15 10:47:07
 * @LastEditors cq
 */
import antdSmallState from './antdSmall';
import appState from './app';

export type RootState = Partial<{
  antdSmall: antdSmallState,
  app: appState
  routing: any
}>

export default RootState
