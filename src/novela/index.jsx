/*import { useState, useEffect } from 'react'



const novela = ()=>{
    const [values, setValues] = useState();
    const [data, setData] = useState([]);
    const [token, setToken] = useState('');

  
  
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
    } catch (error) {
        console.error(error)
    }
};
const handleLogin = () => {
    fetch('https://api-att-login.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        setToken(data);
        window.location.href = 'https://api-att-login.onrender.com/login';

      })
      .catch(error => {
        console.error('Erro:', error);
      });
  };
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://api-att-login.onrender.com/cadastro');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    fetchData();

}, []);


  
    return (
    <>
    <form>
    <input type="email" id="email" pattern=".+@globex\.com" size="30" required onChange={handleChangeValues} name='email' placeholder='e-mail'/>
    <input type="text" onChange={handleChangeValues} name='password' placeholder='senha'/>

    <button onClick={handleLogin}>inserir</button>
    </form>
    {data.map((data, index) => (
                                <div key={index}>
                                    <h1>{data.user_id}</h1>
                                    <h4>{data.email}</h4>
                                </div>
                            ))}
    </>
  )
}

export default novela;*/