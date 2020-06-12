/**
 * @description 
 * @author cq
 * @Date 2020-05-26 19:43:09
 * @LastEditTime 2020-06-11 13:40:20
 * @LastEditors cq
 */

import React, { FunctionComponent, useEffect } from 'react'
import { Modal, Button } from 'antd'
import antdSmall from "@/ts-types/models/antdSmall"
import RootState from "@/ts-types/models"
import { Dispatch } from '@/ts-types/dva';
import { connect } from 'dva';
import Mock from "mockjs"

type ReduxDemoModalProps = {
  isVisable: boolean
  onSubmit: () => void
  onClose: () => void
  dispatch: Dispatch
}
const namespace = 'antdSmall';
const ReduxDemoModal: FunctionComponent<ReduxDemoModalProps & antdSmall & RootState> = (props) => {
  const { isVisable, onSubmit, onClose, antdSmall, dispatch } = props;
  const { homeList } = antdSmall as any;//结构model里面的state
  useEffect(() => {
    // fetch("/home/list")
    // homeLis

  }, []);

  const addItem = async () => {
    const id = homeList.length + 1
    await dispatch({
      type: `${namespace}/addHomeList`,
      payload: {
        text: Mock.mock('@csentence(8, 12)'),
        title: Mock.mock('@ctitle(3, 5)'),
        id
      }
    })
    await dispatch({
      type: `${namespace}/query`
    })
  }

  const removeItem = async (id: number) => {
    await dispatch({
      type: `${namespace}/removeHomeList`,
      payload: {
        id
      }
    })
    await dispatch({
      type: `${namespace}/query`
    })
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
      <ul style={{ marginTop: "13px" }}>
        {
          homeList && homeList.map((item: { id: number; title: React.ReactNode; text: React.ReactNode; }) => <li key={item.id}>
            <h5>
              {item.title}
            </h5>
            <span>{item.text}</span>
            <a href="#" style={{ marginLeft: "30px" }} onClick={() => removeItem(item.id)}>删除</a>
          </li>)
        }
      </ul>
    </Modal >
  )
}

const mapStateToProps = ({
  antdSmall,
}: RootState) => ({
  antdSmall
})

// export default React.memo(ReduxDemoModal)
export default connect(mapStateToProps)((React.memo(ReduxDemoModal) as any).type)