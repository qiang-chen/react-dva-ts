/**
 * @description 节流函数
 * @author cq
 * @Date 2020-09-28 17:03:29
 * @LastEditTime 2020-09-29 11:15:09
 * @LastEditors cq
 */

import React, { FunctionComponent, useEffect, useState } from 'react';
import { useThrottle } from 'ahooks';
import myThrottle from "@/utils/throttle"
import MyThrottle from "@/components/MyThrottle"


type ThrottleDemoProps = {
}

const ThrottleDemo: FunctionComponent<ThrottleDemoProps> = () => {

  const [value, setValue] = useState<string>();
  const throttledValue = useThrottle(value, { wait: 1500 });

  const [value1, setValue1] = useState<string>("");
  const myThrottledValue = MyThrottle({ value: value1, opt: { wait: 1500 } });

  return (
    <div>
      <h1>节流</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>throttledValue: {throttledValue}</p>

      <input
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        placeholder="Typed value1"
        style={{ width: 280, marginTop: 16 }}
      />
      <p style={{ marginTop: 16 }}>myThrottledValue: {myThrottledValue}</p>
    </div>
  );
}
export default ThrottleDemo