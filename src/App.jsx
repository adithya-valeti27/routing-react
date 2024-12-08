import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './routing/Home'
import About from './routing/About'
import Contact from './routing/Contact'
import Profile from './routing/Profile'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
