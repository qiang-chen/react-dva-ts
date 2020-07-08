/**
 * @description 展开子项
 * @author cq
 * @Date 2020-06-28 15:07:52
 * @LastEditTime 2020-07-08 13:54:58
 * @LastEditors cq
 */



import React, { FunctionComponent } from 'react'
import { Table, Modal } from 'antd';
import columns from "./columns"
import data from './data';
import childData from './childData';
import style from "../index.module.less"

type OpenChildTabelProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
}


const OpenChildTabel: FunctionComponent<OpenChildTabelProps> = ({ isVisable, onClose, onSubmit }) => {


  const getColumns = () => {
    return columns({})
  }
  const expandedRowRender = () => {
    return (

      <Table
        rowKey="childId"
        showHeader={false}
        columns={getColumns() as any}
        dataSource={childData}
        pagination={false}
        scroll={{ x: 478 }}
        className={style.childTable}
      />
    )
  }
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
        columns={getColumns() as any}
        dataSource={data}
        expandedRowRender={expandedRowRender}//额外的展开行
        scroll={{ x: 478 }}
        expandRowByClick={true}
        pagination={false}
      // onExpand={this.handleExpand}
      />
    </Modal>
  )
}


export default React.memo(OpenChildTabel)
