/**
 * @description 
 * @author cq
 * @Date 2020-06-05 11:42:08
 * @LastEditTime 2020-06-17 11:09:47
 * @LastEditors cq
 */
const { override, fixBabelImports, addWebpackAlias, addLessLoader} = require('customize-cra')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const alter_config = () => (config, env) => {
  const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
  config.module.rules[oneOf_loc].oneOf = [    //例如要增加处理less的配置
    {
      test: /\.less$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'less-loader'
        }
      ],
    },
    ...config.module.rules[oneOf_loc].oneOf
  ]

  return config;
}

module.exports = override(
  // alter_config(),   //将自定义配置组合进来
  // 配置路径别名
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src'),
  }),
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
    localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
  }),
)
