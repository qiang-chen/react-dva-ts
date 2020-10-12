/**
 * @description 
 * @author cq
 * @Date 2020-05-26 10:25:18
 * @LastEditTime 2020-10-12 15:21:24
 * @LastEditors cq
 */
import React, { FunctionComponent, useEffect } from 'react';
import { arr } from "./utils/arr"
import DebounceDemo from "./component/DebounceDemo"
import DebounceFnDemo from "./component/DebounceFnDemo"
import ThrottleDemo from "./component/ThrottleDemo"
import ThrottleFnDemo from "./component/ThrottleFnDemo"


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
      <hr/>
      <ThrottleDemo/>
      <hr/>
      <ThrottleFnDemo/>
    </div>
  );
}
export default Ahooks