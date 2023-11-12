import { Routes, Route } from "react-router-dom"
import { SignUp } from "../pages/signup/index.jsx"
import { Signln } from "../pages/signln/index.jsx"

export const Auth = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Signln />} />
        </Routes>
        </>
    );
};