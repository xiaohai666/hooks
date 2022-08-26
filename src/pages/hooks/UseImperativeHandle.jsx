import React, { forwardRef, useRef, useImperativeHandle } from 'react';

function Parent(params) {
  const aRef = useRef();

  function click(){
    aRef.current.focus()
    console.log(aRef)
  }

  return <>
  <button onClick={click}>点击</button>
  <FancyInput ref={aRef} />
  </>
}

const FancyInput = forwardRef(function (props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return  <input ref={inputRef} />;
});

export default Parent;