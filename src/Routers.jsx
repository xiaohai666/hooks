

import React, { Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { LayoutIndex, LayoutFull } from "./layout";
import Demo from './pages/Demo';
// import NoMatch from './pages/NoMatch';

const lazyLoad = (Comp) => {
  return (
    <Suspense fallback={<span style={{ background: 'red' }}>loading</span>}>
      <Comp />
    </Suspense>
  );
};

const Routers = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutIndex />,
      children: [
        { index: true, element: <Demo /> },
        { path: pathname, element: lazyLoad(React.lazy(() => import(`./pages${pathname}`))) },
        // { path: "*", element: <NoMatch /> },
      ],
    },
    {
      path: "/full",//无侧边栏导航页面
      element: <LayoutFull />,
      children: [
        { index: true, element: <Demo /> },
        { path: "/full/Demo", element: <Demo /> },
      ],
    },
  ]);

  return element
};
export default Routers 