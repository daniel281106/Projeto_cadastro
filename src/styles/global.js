import { createGlobalStyle } from "styled-components"
export const Global = createGlobalStyle`
    :root{
        font-size: 62.5% !important;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        color: ${({ theme }) => theme.COLORS.TEXT};
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_700};
    }

    a{
        text-decoration: none;
    }
    button, a {
        cursor: pointer;
        transition: filter 0.2s ease-in-out;
    }
    button:hover, a:hover{
        filter: brightness(0.9);
    }


`;
