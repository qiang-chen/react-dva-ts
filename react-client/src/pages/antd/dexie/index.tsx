/**
 * @description Dexie的使用
 * @author cq
 * @Date 2020-06-28 15:07:52
 * @LastEditTime 2020-06-28 16:29:21
 * @LastEditors cq
 */



import React, { FunctionComponent, useEffect } from 'react'
import db from './mydatabase';
import { DndContext } from 'react-dnd';

type DexieDemoProps = {

}


const DexieDemo: FunctionComponent<DexieDemoProps> = () => {
  useEffect(() => {
    db.friends.add({ name: "陈强", age: 18 })
    db.friends.add({ name: "陈强2", age: 18 })
    db.friends.add({ name: "陈强3", age: 28 })
    db.friends.update(1, { name: "Bar" })   //根据主键更新
    // http://www.mamicode.com/info-detail-2696510.html
    db.friends.get(1).then((res: any) => {
      console.log(res);
    })
    db.friends
      .where("age").between(20, 35)
      // .offset(150).limit(25)
      .toArray().then((res: any) => {
        console.log(res, 11);
      })
    // https://dexie.org/docs/API-Reference
  }, [])

  return (
    <div>
      <h1>我是Dexie测试页面</h1>
    </div>
  )
}


export default React.memo(DexieDemo)
