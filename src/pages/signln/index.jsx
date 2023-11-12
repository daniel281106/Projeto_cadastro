import * as C from "./styles.js"
import { useState, useEffect } from 'react'
import { Input } from "../../components/Input/index.jsx"
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from "../../components/button/index.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const Signln = () => {
  const [values, setValues] = useState();
const [message, setMessage] = useState('');
const navigate = useNavigate();



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
        navigate("/home")
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
      navigate('/home')
    }

  }, [])

  return (
    <>

  <C.Container>
        <C.background>     
        <h1>Programas</h1>
          <p>frontend desenvolvido no curso tecnico de infromatica por João daniel</p>
        </C.background>
        <div>
          <C.Form>
          <h1>
            Login
          </h1>

        <Input 
        icon={AiOutlineMail}
        type="email"
        id="email"
        pattern=".+@globex\.com"
        size="30"
        required
        onChange={handleChangeValues}
        name='email'
        placeholder='E-mail'
        ></Input>
        <Input 
        icon={RiLockPasswordLine}
        type="password"
          onChange={handleChangeValues}
          name='password'
          placeholder='Senha'
        ></Input>
        <Button 
        title={"Login"}
        onClick={handleLogin}
        ></Button>
        <Link to="/">Não tem uma conta?</Link>
          </C.Form>
          
          
        </div>
      </C.Container>
    </>
  )

}
