import React, { useState, useCallback, memo } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const handleChildren = () => {
    console.log('clicked ChildrenComponent');
  };
  const handleChildrenCallback = useCallback(() => {
    handleChildren();
  }, []);

  const handleParent = () => {
    console.log('clicked ParentComponent');
    setCount(preCount => preCount + 1);
  };

  return (
    <div>
      这个东西就是一个优化，不一定用上，优化子组件渲染次数
      <div onClick={handleParent}>ParentComponent --count =={count} </div>
      <ChildrenComponent handleChildren={handleChildrenCallback} />
    </div>
  );
};

const ChildrenComponent = memo(({ handleChildren }) => {
  console.log('ChildrenComponent rending');
  return <div onClick={handleChildren}>ChildrenComponent </div>;
});


export default ParentComponent;
// export default class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   //这是采用不理想的写法
//   handleChildren() {
//     console.log('clicked ChildrenComponent');
//   }

//   //这是采用不理想的写法
//   handleParent = () => {
//     console.log('clicked ParentComponent');
//     this.setState(preCount => ({ count: preCount + 1 }));
//   }

//   render() {
//     return (
//       <div>
//         {/* 这是采用不理想的写法 */}
//         <div
//           onClick={() => {
//             this.handleParent();
//           }}
//         >
//           ParentComponent{this.state.count}
//         </div>
//         {/* 这是采用不理想的写法 */}
//         <ChildrenComponent
//           handleChildren={this.handleParent}
//         />
//       </div>
//     );
//   }
// }

// class ChildrenComponent extends React.PureComponent {
//   render() {
//     const { handleChildren } = this.props;
//     console.log('ChildrenComponent rending');
//     return <div onClick={handleChildren}>ChildrenComponent </div>;
//   }
// }
