/**
 * @description 
 * @author cq
 * @Date 2020-06-28 15:11:59
 * @LastEditTime 2020-06-28 15:16:49
 * @LastEditors cq
 */
import Dexie from 'dexie';

const db: any = new Dexie('myDb');
db.version(1).stores({
  friends: `++id,name, age`
});

export default db;