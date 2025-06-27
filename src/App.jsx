import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import CursorEffect from './components/CursorEffect/CursorEffect'
import './App.css'

function App() {
  return (
    <Router>
      <div className='magicpattern'>
        <CursorEffect />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}


export default App
