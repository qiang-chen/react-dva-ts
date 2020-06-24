/**
 * @description ui排版区
 * @author cq
 * @Date 2020-04-27 19:43:50
 * @LastEditTime 2020-06-24 11:07:24
 * @LastEditors cq
 */

import React, { FunctionComponent } from 'react'
import style from "./index.module.less"
console.log(style);

type UIDemoProps = {

}


const UIDemo: FunctionComponent<UIDemoProps> = () => {

  return (
    <div className={style.ui}>
      <h1>我是UI页面</h1>
      <div className={style.dian}>
        <span className={style.aa}>
          点我
        </span>
        <div className={style.bg}>rrrrrr</div>
        <div className={style.footer}>
          <div>扫码购会员</div>
          <div className={style.fu}>
            <div className={style.erweima}>
              我是二维码
            </div>
            月多少钱
          </div>
        </div>
      </div>
    </div>
  )
}


export default React.memo(UIDemo)
