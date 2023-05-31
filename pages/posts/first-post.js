// 导入依赖
import React from 'react';

// Home 组件定义
export default function Home(props) {
  // 使用从外部获取的数据进行渲染
  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>{props.data}</p>
    </div>
  );
}

// 异步数据获取函数
export async function getStaticProps() {
  // 模拟从外部获取数据的过程
  const data = 'This is some external data';

  // 返回一个对象，将数据传递给组件
  return {
    props: {
      data: data
    }
  };
}
