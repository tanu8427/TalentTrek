import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './fotter/Fotter'
import ProfessionalDetailsForm from './pages/regrestraion/ProfessionalDetails'
import EducationForm from './pages/regrestraion/Education';
import ProfileFprm from './pages/regrestraion/Profile';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional-details" element={<ProfessionalDetailsForm />} />
        <Route path="/Education-details" element={<EducationForm/>} />
        <Route path="/profile-details" element={<ProfileFprm/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App