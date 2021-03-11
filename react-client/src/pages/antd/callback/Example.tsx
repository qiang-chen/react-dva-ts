
/**
 * @description 
 * @author cq
 * @Date 2021-03-11 14:25:24
 * @LastEditTime 2021-03-11 14:51:56
 * @LastEditors cq
 */

import React, { useCallback, useMemo, useState } from "react";
import debounce from "./debounce";


function Example() {
  const [count, setCount] = useState(0);
  const [bounceCount, setBounceCount] = useState(0);
  // const debounceSetCount = useCallback(debounce(setBounceCount,100),[]);
  const debounceSetCount: any = useMemo(() => debounce(setBounceCount, 100), []);

  const handleMouseMove = () => {
    setCount(count + 1);
    debounceSetCount(bounceCount + 1);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <p>普通移动次数: {count}</p>
      <p>防抖处理后移动次数: {bounceCount}</p>
    </div>
  )
}

export default Example
