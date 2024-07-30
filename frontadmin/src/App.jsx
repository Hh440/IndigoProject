
import { FlightDetailsForm } from './pages/FlightForm'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { FlightUpdate } from './pages/FlightUpdate'

import './App.css'
import { NotificationForm } from './pages/NotificationForm'
import { Home } from './pages/Home'

function App() {

  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/flightadd" element = {<FlightDetailsForm/>} />
          <Route path='/notificationadd' element={<NotificationForm/>}/>
          <Route path='/flightupdate'  element={<FlightUpdate/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
