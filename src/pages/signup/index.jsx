import * as C from "./styles.js"
import { useState} from 'react'
import { Input } from "../../components/Input/index.jsx"
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from "../../components/button/index.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [values, setValues] = useState();
  const navigate = useNavigate();
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));

    };
    const handlePostusers = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://api-att-login.onrender.com/cadastro", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
    
            if (response.ok) {
                navigate('/login');
            } else {
                console.error('A solicitação POST não foi bem-sucedida.');
            }
        } catch (error) {
            console.error(error);
        }
        
    };

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
            Crie uma conta 
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
        <Button title={"Cadastrar"}
        onClick={handlePostusers}
        ></Button>
        <Link to="/login" >Jã tem uma conta?</Link>
          </C.Form>
          
          
        </div>
      </C.Container>
    </>
  )

}
