/**
 * @description 
 * @author cq
 * @Date 2021-03-11 15:20:05
 * @LastEditTime 2021-03-11 15:24:17
 * @LastEditors cq
 */
function showName() {
  console.log('Toutiao');

}
showName();   //OceanEngine
function showName() {
  console.log('OceanEngine');

}
showName();  // OceanEngine

var myname = "abc"
function showName2() {
  console.log(myname);  // undefined
  var myname = "aabbcc"
  console.log(myname);  //aabbcc
 
}
showName2();
// ----
let myname3 = 'toutiao'
{
  console.log(myname3)  // 报错  原因是{}形成了作用域 let上方是舒服作用域死链的位置
  let myname3 = 'oceanengine'

}