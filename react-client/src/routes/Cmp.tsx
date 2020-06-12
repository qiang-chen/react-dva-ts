/**
 * @description 
 * @author cq
 * @Date 2020-06-11 19:41:54
 * @LastEditTime 2020-06-11 19:50:59
 * @LastEditors cq
 */
import * as React from 'react';

export interface CmpProps {
  xxxx: string
}
 
const Cmp: React.SFC<CmpProps> = ({ xxxx }) => {
  return (
    <div>{xxxx}</div>
  );
}
 
export default Cmp;