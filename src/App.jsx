import Navbar from './components/Navbar/Navbar'
import InfoCard from './components/InfoCard/InfoCard'
import EventDetails from './components/EventDetails/EventDetails'
import CursorEffect from './components/CursorEffect/CursorEffect'
import Timeline from './components/Timeline/Timeline'
import Prizes from './components/Prizes/Prizes'
import Sponsors from './components/Sponsors/Sponsors'
import './App.css'

function App() {
  return (
    <div className='magicpattern'>
      <CursorEffect/>
      <Navbar/>
      <InfoCard/>
      <EventDetails/>
      <Prizes/>
      <Sponsors/>
      <Timeline/>
    </div>
  )
}

export default App
