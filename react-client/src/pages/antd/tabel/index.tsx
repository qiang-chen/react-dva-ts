/**
 * @description Tabel的各种使用
 * @author cq
 * @Date 2020-07-08 11:31:26
 * @LastEditTime 2020-07-08 13:38:42
 * @LastEditors cq
 */



import React, { FunctionComponent, useState, useCallback } from 'react'
import { Button } from 'antd';
import OpenChildTabel from "./openChildTabel"

type TabelDemoProps = {

}


const TabelDemo: FunctionComponent<TabelDemoProps> = () => {
  const [modalOpen, setModal] = useState("")
  const handleSubmit = useCallback(
    () => setModal(""),
    []);
  const handleClose = useCallback(
    () => setModal(""),
    []);

  return (
    <>
      <h1>我是tabel测试页面</h1>
      <Button type="primary" onClick={() => setModal("OpenChildTabelModal")}>tabel展开子项</Button>

      <OpenChildTabel
        isVisable={modalOpen === "OpenChildTabelModal"}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </>
  )
}


export default React.memo(TabelDemo)
