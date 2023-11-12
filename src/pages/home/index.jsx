
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';



export const Home = ()=>{
  const navigate = useNavigate();
    const logout = ()=>{
      localStorage.removeItem('token');

      navigate("/login");
    }
    const isUserLog = ()=>{
      const token = localStorage.getItem('token');
      return token !== null
    }
    useEffect(()=>{
  
      if(!isUserLog()){
        navigate('/login')
      }
  
    }, [navigate])

    return <>

    <button onClick={logout}>sair</button>
   
    </>
}
