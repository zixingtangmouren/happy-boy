import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      教研员平台
      <BrowserRouter basename="/">
        <Link to="/">首页</Link>
        <Link to="/about">教研活动</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
