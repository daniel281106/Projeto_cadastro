
import { useState, useEffect } from 'react'

import * as C from "./login.js"




const login = ()=>{

const [values, setValues] = useState();
const [message, setMessage] = useState('');



const handleChangeValues = (value) => {


    setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
    }))
};



const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api-att-login.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        const token = await response.json();
        localStorage.setItem('token', token);
        setMessage(`Login bem-sucedido. Token: ${token}`);
        window.location.href = "https://front-programas.onrender.com/home"
      } else {
        const data = await response.json();
        setMessage(`Erro no login: ${data}`);
      }
    } catch (error) {
      setMessage('Erro ao processar o login.');
      console.error(error);
    }
  };
  const isUserLog = ()=>{
    const token = localStorage.getItem('token');
    return token !== null
  }
  useEffect(()=>{

    if(isUserLog()){
      window.location.href = "https://front-programas.onrender.com/home"
    }

  }, [])

return <>
<C.Container>
      <C.Title>Login</C.Title>
      <C.Form>
        <C.Input
          type="email"
          id="email"
          pattern=".+@globex\.com"
          size="30"
          required
          onChange={handleChangeValues}
          name='email'
          placeholder='E-mail'
        />
        <C.Input
          type="password"
          onChange={handleChangeValues}
          name='password'
          placeholder='Senha'
        />
        <C.Div>
        <C.Button onClick={handleLogin}>Fazer login</C.Button>
        </C.Div>
        
      </C.Form>
    </C.Container>


    </>

}
export default login;