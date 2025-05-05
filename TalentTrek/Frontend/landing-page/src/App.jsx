import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './pages/home/Home'
import Footer from './fotter/Fotter'
import './index.css'


const App = () => {
  return (
  
    <div>     
    <Navbar/>  
    <Home/>
    <Footer/> 
    <BrowserRouter>
    <Routes> 
      <Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Route>
     </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App