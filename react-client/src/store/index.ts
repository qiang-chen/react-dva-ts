/**
 * @description 
 * @author cq
 * @Date 2020-06-08 15:44:13
 * @LastEditTime 2020-06-08 16:00:10
 * @LastEditors cq
 */


const context = (require as any).context("./models", false, /\.ts$/);
export default context
  .keys()
  .filter((item: string) => item !== "./index.ts")
  .map((key: any) => context(key))