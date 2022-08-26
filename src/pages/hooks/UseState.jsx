import React, { useState } from 'react';

function TextInputWithFocusButton() {
  const [val, setVal] = useState(0)
  console.log(val)//每次点击按钮是组件都会重现渲染
  const onButtonClick = () => {
    //这里的val只是个快照，为初始值
    // setVal(val + 1)
    // setVal(val + 1)

    // setTimeout(() => {
    //   setVal(val + 1)//并不会更新值
    // }, 1000);


    // 拿到的是内部val值
    setVal(val => val + 1)
    setVal(val => val + 1)
    setVal(val => val + 1)
  };

  return (
    <>
      <button onClick={onButtonClick}>Focus the input</button>
      <div>{val}</div>
    </>
  );
}

export default TextInputWithFocusButton;