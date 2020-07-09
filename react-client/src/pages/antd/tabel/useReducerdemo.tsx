/**
 * @description 
 * @author cq
 * @Date 2020-07-08 20:52:43
 * @LastEditTime 2020-07-08 21:00:59
 * @LastEditors cq
 */
import React, { useReducer, useEffect } from 'react'
const creatReduce = (state: number, { type, payload = 1 }: any) => {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    case 'reset':
      console.log("没有进来吗", payload);
      // return init(payload)
      break;
    default:
      return new Error()
  }
}

function init(payload: any) {
  console.log(payload);

  return payload;
}
export default function HookPage2() {
  const [state, dispatch] = useReducer(creatReduce, 0, init)

  useEffect(() => {
    console.log('useEffect', state)
  }, [state])
  
  return (
    <div>
      <h3>
        HookPage2
      </h3>
      <div>
        {state}
      </div>
      <button onClick={() => { dispatch({ type: 'ADD' }) }}>点击增加</button>
      <button onClick={() => { dispatch({ type: 'reset', payload: 6 }) }}>重置state</button>
    </div>
  )
}