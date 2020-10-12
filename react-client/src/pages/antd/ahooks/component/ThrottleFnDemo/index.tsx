/**
 * @description 节流函数
 * @author cq
 * @Date 2020-09-28 17:03:29
 * @LastEditTime 2020-10-12 15:22:16
 * @LastEditors cq
 */

import React, { FunctionComponent, useEffect, useState } from 'react';
import { useThrottleFn } from 'ahooks';
import myThrottleFn from "@/utils/myThrottleFn"

type ThrottleDemoProps = {
}

const ThrottleDemo: FunctionComponent<ThrottleDemoProps> = () => {
  const [value, setValue] = useState(0);

  const [value1, setValue1] = useState(0);


  const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    { wait: 1500 },
  );

  const myThrottle = myThrottleFn(
    () => {
      setValue1(value1 + 1);
    },
    1500,
  )
  
  return (
    <div>
      <h1>节流点击实验</h1>
      <div>
        <p style={{ marginTop: 16 }}> Clicked count hook: {value} </p>
        <button type="button" onClick={run}>
          Click fast hook!
      </button>
      </div>

      <div>
        <p style={{ marginTop: 16 }}> Clicked count my: {value1} </p>
        <button type="button" onClick={myThrottle}>
          Click fast my!
      </button>
      </div>
    </div>
  );
}
export default ThrottleDemo