import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { WaterSaving } from './pages/WaterSaving';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Composting } from './pages/Composting';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watersaving' element={<WaterSaving/>}/>
        <Route path='/composting' element={<Composting/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
