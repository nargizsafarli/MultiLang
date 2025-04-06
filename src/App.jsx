import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MenuPpage from './Pages/MenuPpage'
import AboutPage from './Pages/AboutPage'

function App() {
  return (
    <div>
     
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='menu' element={<MenuPpage/>}></Route>
        <Route path='about' element={<AboutPage/>}></Route>   
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App