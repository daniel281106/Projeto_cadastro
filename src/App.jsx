import { useState, useEffect } from 'react'
import Global from './styles/global'
import Cadastro from './cadastro'
import Login from './login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const App = ()=> {

  
    return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    
  <Global />
    </>
  )
}

export default App
