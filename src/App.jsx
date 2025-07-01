import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import TravelGuide from './pages/TravelGuide/TravelGuide';

import Navbar from './components/Navbar/Navbar'
import CursorEffect from './components/CursorEffect/CursorEffect'
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <div className='magicpattern'>
        <CursorEffect />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<TravelGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}


export default App
