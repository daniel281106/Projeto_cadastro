import { useState, useEffect } from 'react'
import * as C from "./cadastro.js"

const cadastro = () => {
    const [values, setValues] = useState();
    const [data, setData] = useState([]);
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
                window.location.href = 'https://768b-2804-620c-8f3-a200-6117-2084-f965-614b.ngrok-free.app/login';
            } else {
                console.error('A solicitação POST não foi bem-sucedida.');
            }
        } catch (error) {
            console.error(error);
        }
        
    };

    return <>
        <C.Container>
            <C.Title>Cadastro</C.Title>
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
                <C.Button onClick={handlePostusers}>Cadastrar-se</C.Button>
                <C.Button onClick={(e)=>{e.preventDefault()}}><C.Links to="/login">Já Tem Uma Conta?</C.Links></C.Button>
                </C.Div>
            </C.Form>
        </C.Container>

    </>


}
export default cadastro;