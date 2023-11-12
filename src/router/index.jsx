import { BrowserRouter } from "react-router-dom";
import { Auth } from "./auth.routes.jsx";


export const Routes = ()=>{
    return(
        <BrowserRouter>
        <Auth />
        </BrowserRouter>
    )
}