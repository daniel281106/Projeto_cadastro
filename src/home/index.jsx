import * as C from "./home.js"



const home = ()=>{

    const logout = ()=>{
      localStorage.removeItem('token');

      window.location.href = 'https://front-programas.onrender.com/login';
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