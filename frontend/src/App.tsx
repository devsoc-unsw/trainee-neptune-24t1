import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import Landing from './pages/Landing.tsx';
import Guides from './pages/Guides.tsx';
import Archive from './pages/Archive.tsx';
import Comp from './pages/Comp.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/guides" element={<Guides/>} />
        <Route path="/archive" element={<Archive/>} />
        <Route path="/comp" element={<Comp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
