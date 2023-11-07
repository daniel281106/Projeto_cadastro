import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const LinksContainer = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;


  &:hover {
    text-decoration: underline;
  }
`;
export const Links = styled(Link)`
 text-decoration: none;
  color: #333;
  margin-right: 20px;
  font-size: 1.3rem;

  &:hover {
    text-decoration: underline;
  }
`;