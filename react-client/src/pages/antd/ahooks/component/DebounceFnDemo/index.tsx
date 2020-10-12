/**
 * @description 防抖
 * @author cq
 * @Date 2020-05-26 10:25:18
 * @LastEditTime 2020-09-28 15:50:35
 * @LastEditors cq
 */
import React, { FunctionComponent, useState } from 'react';
import { useDebounceFn } from 'ahooks';
import { myDebounceFn } from "@/utils/myDebounceFn"


type DebounceFnDemoProps = {
}

const DebounceFnDemo: FunctionComponent<DebounceFnDemoProps> = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const { run } = useDebounceFn(
    () => {
      setCount(count + 1);
    },
    {
      wait: 500,
    },
  );

  const run2 = myDebounceFn(
    () => {
      setCount2(count2 + 1);
    },
    {
      wait: 500,
    },
  )

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {count} </p>
      <button type="button" onClick={run}>
        Click fast1!
        </button>
      <p style={{ marginTop: 16 }}> Clicked count2: {count2} </p>
      <button type="button" onClick={run2}>
        Click fast2!
        </button>
    </div>
  );
}
export default DebounceFnDemo