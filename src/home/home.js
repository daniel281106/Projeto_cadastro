import styled from 'styled-components';
import { Link } from 'react-router-dom';

const darkBackgroundColor = '#111';
const primaryColor = '#007bff';
const textColor = '#fff';
const inputBorderColor = '#333';


export const Title = styled.h1`
  color: ${textColor};
  font-size: 36px;
  margin-bottom: 20px;
`;


export const Button = styled.button`
  background-color: ${primaryColor};
  color: ${textColor};
  width: 130px;
  height: 20px;
  border: none;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: ${primaryColor};

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${darkBackgroundColor};
  padding: 20px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  color: ${textColor};
`;

export const LinksContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${textColor};

  &:hover {
    text-decoration: underline;
  }
`;