import styled from "styled-components";

export const Container = styled.button`
font-size: 16px;
    text-align: center;
    width: 100%;
    height: 40px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.CIANO};
    color: ${({ theme }) => theme.COLORS.TEXT};
    border: 0;
    padding: 0 16px;
    margin-top: 16px;

    font-weight: 500;

    &disabled{
        opacity: 0.5;
    }
`;