/**
 * @description 
 * @author cq
 * @Date 2020-06-05 11:42:08
 * @LastEditTime 2020-06-05 17:37:53
 * @LastEditors cq
 */
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src'),
  }),
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
