import Global from './styles/global'
import Cadastro from './cadastro'
import Login from './login'
import Home from './home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const App = ()=> {

  
    return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
    
  <Global />
    </>
  )
}

export default App
