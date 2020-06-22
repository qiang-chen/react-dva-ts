/**
 * @description NaN语法
 * @author cq
 * @Date 2020-06-22 14:48:40
 * @LastEditTime 2020-06-22 14:57:48
 * @LastEditors cq
 */
export {
//  0 除以 0 才会返回 NaN，正数除以 0 返回 Infinity，负数除以 0 返回-Infinity。
}

// isNaN() 函数用于检查其参数是否是非数字值   数值就是false
// 如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。

alert(isNaN(NaN)); //true 
alert(isNaN(10)); //false（10 是一个数值）
alert(isNaN("10" as unknown as number)); //false（可以被转换成数值 10）
alert(isNaN("blue" as unknown as number)); //true（不能转换成数值）
alert(isNaN(true as unknown as number)); //false（可以被转换成数值 1）
