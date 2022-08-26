import React, { useRef,useState } from 'react';

function TextInputWithFocusButton() {
  const [text,settext] = useState('默认值')
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
    settext(inputEl.current.value)
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <div>{text}</div>
    </>
  );
}

export default TextInputWithFocusButton;