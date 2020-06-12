/**
 * @description ui排版区
 * @author cq
 * @Date 2020-04-27 19:43:50
 * @LastEditTime 2020-06-11 16:13:59
 * @LastEditors cq
 */

import React, { FunctionComponent } from 'react'
import "./index.css"

type UIDemoProps = {

}


const UIDemo: FunctionComponent<UIDemoProps> = () => {

  return (
    <>
      <h1>我是UI页面</h1>
      <div className="dian">
        <span className="aa">
          点我
        </span>
        <div className="footer">
          <div>扫码购会员</div>
          <div className="fu">
            <div className="erweima">
              我是二维码
            </div>
            月多少钱
          </div>
        </div>
      </div>
    </>
  )
}


export default React.memo(UIDemo)
