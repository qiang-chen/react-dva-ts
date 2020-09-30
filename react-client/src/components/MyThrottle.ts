/**
 * @description 用来处理节流值的 Hook。
 * @author cq
 * @Date 2020-09-29 11:07:14
 * @LastEditTime 2020-09-29 16:09:07
 * @LastEditors cq
 */

import React, { useEffect, useState } from 'react';



type IProps = {
  value: string;
  opt: {
    wait: number
  }
}

interface MyThrottleProps<P = any> {
  (props: P): string
}

let timer: number | null

const MyThrottle: MyThrottleProps<IProps> = ({ value, opt: { wait } }) => {

  const [newValue, setNewValue] = useState<string>('');
  const [waitTime, setWaitTime] = useState<number>(wait);
  let value1 = value;
  useEffect(() => {
    console.log(value, newValue, value == newValue)
    if (!timer) {
      timer = window.setTimeout(() => {
        setNewValue(value)
        timer = null;
      }, waitTime);
      setWaitTime(wait)
    }
  }, [value]);

  return newValue
}

export default MyThrottle;