import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './modules/common/styles/common.less';
import { Spin } from 'antd';

const Home = lazy(() => import('./modules/home'));
const XiaoLiuRen = lazy(() => import('./modules/xiao-liu-ren'));
const HappyMap = lazy(() => import('./modules/happy-map'));

function App() {
  return (
    <div>
      <BrowserRouter basename="/happy">
        <Routes>
          <Route
            path="/home"
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
          <Route
            path="/happy-map"
            element={
              <Suspense fallback={<Spin spinning fullscreen />}>
                <HappyMap />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
