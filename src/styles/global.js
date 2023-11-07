import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`
    :root{
        font-size: 62.5%;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #fff;
        font-size: 16px;
    }
`;
export default global;