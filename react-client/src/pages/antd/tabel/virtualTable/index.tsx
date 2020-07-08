/**
 * @description 虚拟列表
 * @author cq
 * @Date 2020-06-28 15:07:52
 * @LastEditTime 2020-07-08 13:55:09
 * @LastEditors cq
 */



import React, { FunctionComponent } from 'react'
import { Table, Modal } from 'antd';
// import columns from "./columns"
// import data from './data';
// import childData from './childData';
// import style from "../index.module.less"

type VirtualTableProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
}


const VirtualTable: FunctionComponent<VirtualTableProps> = ({ isVisable, onClose, onSubmit }) => {


  // const getColumns = () => {
  //   return columns({})
  // }
 
  return (
    <Modal
      title="tabel展开子项滑动"
      visible={isVisable}
      width={1150}
      maskClosable={true}
      onCancel={onClose}
      onOk={onSubmit}
    >
      <Table
        rowKey="id"
        // expandedRowKeys={["1"]}
        // columns={getColumns() as any}
        // dataSource={data}
        scroll={{ x: 478 }}
        pagination={false}
      />
    </Modal>
  )
}


export default React.memo(VirtualTable)
