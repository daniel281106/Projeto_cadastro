import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
export const div = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Links = styled(Link)`
 text-decoration: none;
 color: white;
`;
