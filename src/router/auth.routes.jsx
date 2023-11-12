import { Routes, Route } from "react-router-dom"
import { SignUp } from "../pages/signup/index.jsx"
import { Signln } from "../pages/signln/index.jsx"
import { Home } from "../pages/home/index.jsx";

export const Auth = ()=>{
   
      
    return(
        <>
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Signln />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </>
    );
};