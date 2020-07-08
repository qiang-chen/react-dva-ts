/**
 * @description Tabel的各种使用
 * @author cq
 * @Date 2020-07-08 11:31:26
 * @LastEditTime 2020-07-08 14:49:20
 * @LastEditors cq
 */



import React, { FunctionComponent, useState, useCallback } from 'react'
import { Button } from 'antd';
import OpenChildTabel from "./openChildTabel"
import VirtualTable from "./virtualTable"

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
      <Button type="primary" style={{ margin: "10px" }} onClick={() => setModal("OpenChildTabelModal")}>tabel展开子项</Button>
      <Button type="primary" style={{ margin: "10px" }} onClick={() => setModal("VirtualTableModal")}>虚拟tabel</Button>

      <OpenChildTabel
        isVisable={modalOpen === "OpenChildTabelModal"}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
      <VirtualTable
        isVisable={modalOpen === "VirtualTableModal"}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </>
  )
}


export default React.memo(TabelDemo)
