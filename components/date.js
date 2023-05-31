/*
 * @Author: dog son two zxc1123378080@gmail.com
 * @Date: 2023-05-31 17:33:32
 * @LastEditors: dog son two zxc1123378080@gmail.com
 * @LastEditTime: 2023-05-31 21:49:39
 * @FilePath: \defi-on-polygon-main\test\nextjs-blog\components\date.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  console.log(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}