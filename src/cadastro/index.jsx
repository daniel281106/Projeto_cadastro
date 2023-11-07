import { useState, useEffect } from 'react'
import * as C from "./cadastro.js"
import { Link } from 'react-router-dom';

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
            fetch("https://api-att-login.onrender.com/cadastro", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            window.location.href = 'https://4bd5-2804-620c-8f3-a200-ccd3-bf61-7cf6-15de.ngrok-free.app/login'
        } catch (error) {
            console.error(error)
        }
    };

    return <>
        <C.Container>
            <h2>Cadastro</h2>
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
                <C.div>
                <C.Button onClick={handlePostusers}>Inserir</C.Button>
                <C.Button><C.Links to="/login">login</C.Links></C.Button>
                </C.div>
            </C.Form>
        </C.Container>

    </>


}
export default cadastro;