import React, { useState, useMemo } from 'react';

const ComputeComponent = () => {
  const [count, setCount] = useState(100);
  const [changeNum, setChangeNum] = useState(100);
  const computeValue = useMemo(() => computeExpensiveValue(count), [count]);
  function computeExpensiveValue(count) {
    console.log('computeExpensiveValue 被执行');
    //比较大计算
    const array = new Array(count).fill(count);
    return array.reduce((currentTotal, item) => {
      return currentTotal + item;
    }, 0);
  }
  const handleSetCount = () => {
    setCount(preCount => preCount * 2);
  };
  const handleChangeNum = () => {
    setChangeNum(preCount => preCount * 2);
  };
  return (
    <div>
      <div>{computeValue}</div>
      <div onClick={handleSetCount}>addCount{count} </div>
      <div onClick={handleChangeNum}> add changeNum {changeNum}</div>
    </div>
  );
};

export default ComputeComponent;