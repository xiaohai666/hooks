import React, { useState,useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  //数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用
  //你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You ${count} times`;


    return () =>{//返回的函数可以是匿名函数也可以是命名函数
      document.title = `You 0 times`;
    }
  },[count]);//参数为空相当于didmount，只在加载时执行
  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>Focus the input</button>
      <div>{count}</div>
    </>
  );
}

export default UseEffect;