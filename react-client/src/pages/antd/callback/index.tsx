/**
 * @description 
 * @author cq
 * @Date 2020-05-26 10:25:58
 * @LastEditTime 2021-03-11 15:19:58
 * @LastEditors cq
 */
import React, { FunctionComponent } from 'react';
import Example from "./Example"

type Menu5Props = {
}

const Callback: FunctionComponent<Menu5Props> = () => {



  return (
    <div>
      <h1>useCallback使用</h1>
      <Example />
    </div>
  );
}
export default Callback