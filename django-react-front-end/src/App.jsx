import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudent from './components/AddStudent'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import Update from './components/Update'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<AddStudent/>} />
        <Route path='list' element={<List/>} />
        <Route path='update/:id' element={<Update/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
