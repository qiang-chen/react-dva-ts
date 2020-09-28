/**
 * @description 
 * @author cq
 * @Date 2020-05-26 10:25:18
 * @LastEditTime 2020-09-27 18:07:28
 * @LastEditors cq
 */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { arr } from "./utils/arr"
import { useDebounce } from 'ahooks';
import MyDebounce from "@/components/MyDebounce"


type AhooksProps = {
}

const Ahooks: FunctionComponent<AhooksProps> = () => {
  
  const [value, setValue] = useState<string>("");
  const debouncedValue1 = useDebounce(value, { wait: 500 });

  const debouncedValue2 = MyDebounce({ value, opt: { wait: 500 }});

  useEffect(() => {
    // arr(["#a", "##1.2", "##1.3", "###1.3.1", "###1.3.2"])
  }, []);

  return (
    <div>
      <h1>ahooks页面1</h1>
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
export default Ahooks