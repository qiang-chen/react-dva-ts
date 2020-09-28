/**
 * @description 
 * @author cq
 * @Date 2020-05-26 10:25:18
 * @LastEditTime 2020-09-28 15:12:34
 * @LastEditors cq
 */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDebounce, useDebounceFn } from 'ahooks';
import MyDebounce from "@/components/MyDebounce"


type DebounceDemoProps = {
}

const DebounceDemo: FunctionComponent<DebounceDemoProps> = () => {

  const [value, setValue] = useState<string>("");
  const debouncedValue1 = useDebounce(value, { wait: 500 });
  const debouncedValue2 = MyDebounce({ value, opt: { wait: 500 } });

  return (
    <div>
      <h1>DebounceDemo页面1</h1>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Typed value"
          style={{ width: 280 }}
        />
        <p style={{ marginTop: 16 }}>DebouncedValue1: {debouncedValue1}</p>
        <p style={{ marginTop: 16 }}>DebouncedValue2: {debouncedValue2}</p>
      </div>
    </div>
  );
}
export default DebounceDemo