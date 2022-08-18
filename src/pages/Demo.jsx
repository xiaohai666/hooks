import React, { useRef, useState, useCallback, useEffect } from 'react';
function Demo() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log(111)
  //     setCount(count + 1); 
      
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [count]); // 这种写法会导致，没次刷新组件都会定义定时器

  useEffect(() => {
    const id = setInterval(() => {
      console.log(222)

      setCount(a=>a+1); // 这个 effect 依赖于 `count` state
      
    }, 1000);
    return () => clearInterval(id);
  }, []); // 🔴 Bug: `count` 没有被指定为依赖



  return <h1>{count} ccc</h1>;
}
export default Demo;