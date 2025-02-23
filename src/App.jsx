import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HomeScreen from './pages/HomeScreen'
import Intro from './pages/Intro'
import Auth from './pages/Auth'
import CalendarPage from './pages/CalendarPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path='/calendar' element={<CalendarPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App