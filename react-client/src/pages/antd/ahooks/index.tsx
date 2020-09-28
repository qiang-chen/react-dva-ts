/**
 * @description 
 * @author cq
 * @Date 2020-05-26 10:25:18
 * @LastEditTime 2020-09-28 15:22:57
 * @LastEditors cq
 */
import React, { FunctionComponent, useEffect } from 'react';
import { arr } from "./utils/arr"
import DebounceDemo from "./component/DebounceDemo"
import DebounceFnDemo from "./component/DebounceFnDemo"


type AhooksProps = {
}

const Ahooks: FunctionComponent<AhooksProps> = () => {
  
  useEffect(() => {
    // arr(["#a", "##1.2", "##1.3", "###1.3.1", "###1.3.2"])
  }, []);


  return (
    <div>
      <h1>ahooks页面1</h1>
      <DebounceDemo/>
      <hr/>
      <DebounceFnDemo/>
    </div>
  );
}
export default Ahooks