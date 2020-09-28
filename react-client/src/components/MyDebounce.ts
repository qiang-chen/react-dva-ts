/**
 * @description 用来处理防抖值的 Hook。
 * @author cq
 * @Date 2020-09-27 17:25:00
 * @LastEditTime 2020-09-28 10:05:47
 * @LastEditors cq
 */
import React, { useEffect, useState } from 'react';



type IProps = {
  value: string;
  opt: {
    wait: number
  }
}

interface MyDebounceProps<P = any> {
  (props: P): string
}

let timer: number

const MyDebounce: MyDebounceProps<IProps> = ({ value, opt: { wait } }) => {

  const [newValue, setNewValue] = useState<string>('');
  const [waitTime, setWaitTime] = useState<number>(wait);
  useEffect(() => {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      setNewValue(value)
    }, waitTime); 
    setWaitTime(wait)
  }, [value]);
  return newValue
}

export default MyDebounce;