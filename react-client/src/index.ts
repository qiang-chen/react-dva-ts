/**
 * @description 
 * @author cq
 * @Date 2020-05-28 17:42:09
 * @LastEditTime 2020-06-09 17:04:45
 * @LastEditors cq
 */

import dva from "dva";
import App from "./App"


// import createLoading from 'dva-loading';

const createLoading = require("dva-loading").default
// import { createModel } from '@/store';


//注意这种引入方式已经报销  在控制台会报警告
// import createHistory from 'history/createBrowserHistory';

//这种为history路由展示方式
const createHistory=require("history").createBrowserHistory

//这种为hash路由展示方式
// const createHistory = require("history").createHashHistory

//下面是两种注入方式

const app = dva({
  history: createHistory(),
});


app.use(createLoading());
//const app=dva(createHistory);

//展示仓库
require("./store").default.forEach((key:any) => app.model(key.default))
// app.model(require("@/store/user.js").default)
// createModel(app)


app.router(App)

app.start('#root');