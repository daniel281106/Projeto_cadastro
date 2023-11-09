import styled from 'styled-components';

const darkBackgroundColor = '#111';
const primaryColor = '#007bff';
const textColor = '#fff';
const inputBorderColor = '#333';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${darkBackgroundColor};
`;

export const Title = styled.h1`
  color: ${textColor};
  font-size: 36px; 
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  width: 300px;
  background-color: ${darkBackgroundColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${inputBorderColor};
  border-radius: 5px;
  background-color: ${darkBackgroundColor};
  color: ${textColor};

  &:focus {
    outline: none;
    border-color: ${primaryColor};
  }
`;

export const Button = styled.button`
  background-color: ${primaryColor};
  
  color: ${textColor};
  width: 130px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
`;