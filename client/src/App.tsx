import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './modules/common/styles/common.less';
import { Spin } from 'antd';

const Home = lazy(() => import('./modules/home'));
const XiaoLiuRen = lazy(() => import('./modules/xiao-liu-ren'));

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spin spinning fullscreen />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/xiao-liu-ren"
            element={
              <Suspense fallback={<Spin spinning fullscreen />}>
                <XiaoLiuRen />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
