import * as C from "./home.js"



const home = ()=>{

    const logout = ()=>{
      localStorage.removeItem('token');

      window.location.href = 'https://768b-2804-620c-8f3-a200-6117-2084-f965-614b.ngrok-free.app/login';
    }

    return <>
    <C.HeaderContainer>
      <C.Title>Meu Site</C.Title>
      <C.LinksContainer>
        <C.NavLink href="#"><C.Links to="/novela">novela</C.Links></C.NavLink>
        <C.NavLink href="#"><C.Links to="/ator">ator</C.Links></C.NavLink>
        <C.NavLink href="#"><C.Links to="/personagens">personagens</C.Links></C.NavLink>
        <C.NavLink href="#"><C.Links to="/capitulo">capitulo</C.Links></C.NavLink>
        <C.NavLink href="#"><C.Links to="/personagemnovela">personagem e novela</C.Links></C.NavLink>
        <C.Button onClick={logout}>Sair</C.Button>
      </C.LinksContainer>
    </C.HeaderContainer>
    </>
}
export default home;