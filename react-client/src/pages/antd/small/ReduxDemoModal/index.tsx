/**
 * @description 
 * @author cq
 * @Date 2020-05-26 19:43:09
 * @LastEditTime 2020-06-09 17:46:01
 * @LastEditors cq
 */

import React, { FunctionComponent, useEffect } from 'react'
import { Modal, Button } from 'antd'
import antdSmall from "@/ts-types/models/antdSmall"
import RootState from "@/ts-types/models"
import { connect } from 'dva';
import { MapStateToProps } from 'react-redux'

type ReduxDemoModalProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
}

const ReduxDemoModal: FunctionComponent<ReduxDemoModalProps & antdSmall & RootState> = (props) => {
  const { isVisable, onSubmit, onClose, antdSmall } = props;
  const { homeList } = antdSmall;//结构model里面的state
  useEffect(() => {
    // fetch("/home/list")
  }, []);

  const addItem = () => {
  }
  return (
    <Modal
      getContainer={false}
      title="增删改查"
      visible={isVisable}
      width={650}
      maskClosable={true}
      onCancel={onClose}
      onOk={onSubmit}
    >
      <h1>
        我是连接redux使用的
      </h1>
      <Button type="primary" style={{ marginBottom: "13px" }} onClick={addItem}>添加新的一项</Button>
      <hr />
      <ul style={{marginTop:"13px"}}>
        {
          homeList && homeList.map(item => <li key={item.id}>
            <h5>
              {item.title}
            </h5>
            <span>{item.text}</span>
          </li>)
        }
      </ul>
    </Modal>
  )
}

const mapStateToProps = ({
  antdSmall,
}: RootState) => ({
  antdSmall
})

// export default React.memo(ReduxDemoModal)
export default connect(mapStateToProps)((React.memo(ReduxDemoModal) as any).type)