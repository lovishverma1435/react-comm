import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './component/Common/Header'
import Footer from './component/Common/Footer'
// import Bag from './Pages/Bag'
import PageNotFound from './component/Error/PageNotFound'
import ScrollToTop from './component/cards/ScrollTop'
import Bannertwo from './component/HotDeals/Bannertwo'
import Contact from './Pages/Contact'
import NikeAirMax from './Pages/NikeAirMax'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/bag' element={<Bag  />} /> */}
        <Route path='/Error' element={<PageNotFound/>}/>
        <Route path='/hotdeal' element={<Bannertwo/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/nikeairmax' element={<NikeAirMax/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
