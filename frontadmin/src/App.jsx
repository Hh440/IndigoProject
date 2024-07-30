
import { FlightDetailsForm } from './pages/FlightForm'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import { NotificationForm } from './pages/NotificationForm'

function App() {

  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/flightupdate" element = {<FlightDetailsForm/>} />
          <Route path='/notificationadd' element={<NotificationForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
