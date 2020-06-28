/**
 * @description indexedDB
 * @author cq
 * @Date 2020-06-24 11:03:24
 * @LastEditTime 2020-06-28 14:55:03
 * @LastEditors cq
 */


import React, { FunctionComponent, useEffect } from 'react'

type IndexedDBDemoProps = {

}


const IndexedDBDemo: FunctionComponent<IndexedDBDemoProps> = () => {
  // 这个方法接受两个参数，第一个参数是字符串，表示数据库的名字。如果指定的数据库不存在，就会新建数据库。
  //第二个参数是整数，表示数据库的版本。如果省略，打开已有数据库时，默认为当前版本；新建数据库时，默认为1。
  useEffect(() => {
    var request = window.indexedDB.open("testData");
    var db: any;

    // 数据库新建成功以后，新增一张叫做person的表格，主键是id。

    // 更好的写法是先判断一下，这张表格是否存在，如果不存在再新建。
    // request.onupgradeneeded = function (event: any) {
    //   console.log(111);
    //   db = event.target.result;
    //   var objectStore;
    //   if (!db.objectStoreNames.contains('person')) {
    //     objectStore = db.createObjectStore('person', { keyPath: 'id' });
    //   }
    // }

    // 如果数据记录里面没有合适作为主键的属性，那么可以让 IndexedDB 自动生成主键。
    // 指定主键为一个递增的整数。
    // var objectStore = db.createObjectStore(
    // 'person',
    // { autoIncrement: true }
    //);

    // 新建对象仓库以后，下一步可以新建索引
    //onupgradeneeded  只触发一次  就是每次新建数据库的时候触发
    request.onupgradeneeded = function (event: any) {
      db = event.target.result;
      var objectStore;
      if (!db.objectStoreNames.contains('person')) {
        //创建一张person的表  主键叫id
        objectStore = db.createObjectStore('person', { keyPath: 'id' });
        // IDBObject.createIndex()的三个参数
        //分别为索引名称、索引所在的属性、配置对象（说明该属性是否包含重复的值）。
        console.log(db);
        // db.transaction((["person"]), "readwrite").objectStore("person")
        // .add({id:1,age:13,name:"chenqiang"})
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        add(event);
      }
    }

    function add(event: any) {
      console.log(event.target);
      var request = event.target.transaction
        .objectStore('person',"name")
        .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });
      request.onsuccess = function (event: any) {
        console.log('数据写入成功');
      };

      request.onerror = function (event: any) {
        console.log('数据写入失败');
      }
    }
    request.onerror = function (event) {
      console.log('数据库打开报错');
    };
    //触发多次  每次打开都会触发一次
    request.onsuccess = function (event) {
      db = request.result;
      console.log('数据库打开成功', request);


    };


  }, [])

  return (
    <div>
      <h1>我是indexedDB测试页面</h1>
    </div>
  )
}


export default React.memo(IndexedDBDemo)
