/**
 * @description 
 * @author cq
 * @Date 2020-09-27 16:05:21
 * @LastEditTime 2020-09-27 16:49:50
 * @LastEditors cq
 */

import { count } from "console";

// ["#a", "##1.2", "##1.3", "###1.3.1", "###1.3.2"]
export const arr = (array: string[]) => {
  let newArr:any = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let count = 0
    let one = 0;
    let two = 0
    let three = 0
    let opj: any = {};

    for (let i = 0; i < element.split("").length; i++) {
      const item = array[i];
      console.log(item)
      if (item == "#") {
        count++;
        for (let a = 0; a < count; a++) {
          let hn=[];
          const pre = newArr[index - 1].hn||"";
          const preNum = pre.split(".")[a]
          hn.push(preNum+1,".")
          console.log(hn.join(""))
          opj.hn = hn.join("")
        }
      } else {
        opj.title = element;
        break
      }
    }
    newArr.push(opj)
  }
  console.log(newArr)
}
