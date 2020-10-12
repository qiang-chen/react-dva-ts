/**
 * @description 用来处理节流值的 Hook。
 * @author cq
 * @Date 2020-09-29 11:07:14
 * @LastEditTime 2020-10-12 14:55:59
 * @LastEditors cq
 */

import React, { useEffect, useState } from 'react';
import myThrottleFn from "@/utils/myThrottleFn"

type IProps = {
  value: string;
  opt: {
    wait: number
  }
}

interface MyThrottleProps<P = any> {
  (props: P): string
}

const MyThrottle: MyThrottleProps<IProps> = ({ value, opt: { wait } }) => {

  const [newValue, setNewValue] = useState<string>('');
  
  const throttle = myThrottleFn(() => {
    setNewValue(value)
  }, wait);

  useEffect(() => {
    throttle()
  }, [value]);

  return newValue
}

export default MyThrottle;