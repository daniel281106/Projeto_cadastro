import styled from "styled-components";
import cinema from "../../assets/cinema.png"


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 4px;
    border-radius: 16px;

    background-color: ${({ theme })=> theme.COLORS.BACKGROUND_COLOR_900};

    > div{
        width: 400px;
        height: 100%;
        padding: 10px;
        border-radius: 16px;

        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_COLOR_800};
    }
    @media (max-width: 500px) {
        position: relative;

        width: 360px;
        height: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px;
        border-radius: 16px;

        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_COLOR_900};

    > div{
        top: 0;
        position: absolute;
        width: 360px;
        height: 450px;
        padding: 10px;
        border-radius: 16px;

        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_COLOR_800};
    }
        
    }

`;
export const background = styled.main`
    flex: 1;
    background-image: url(${cinema});
    background-repeat: no-repeat;
        background-position: center center;
        border-radius: 16px;
    background-size: cover;
    text-align: center;
    padding: 16px;

    > h1{
        margin-top: 56px;
        font-weight: bold;
    }
    @media (max-width: 500px){
        position: absolute;
        z-index: 0;
        bottom:0 ;
        flex: 1;
    background-image: url(${cinema});
    background-repeat: no-repeat;
        background-position: center center;
        border-radius: 16px;
    background-size: cover;

    > h1{
        margin-bottom: 700px;
        font-weight: bold;
    }
    }

`;

export const Form = styled.form`
    
    height: 100%;
    display:  flex;
    gap: 10px;
     flex-direction: column;
     align-items: center;
    
     > h1{
        margin-top: 120px;
        margin-bottom: 50px;
     }
     > a{
        margin-top: 100px;
     }
     @media (max-width: 500px){
        height: 100%;
        display:  flex;
        gap: 10px;
     flex-direction: column;
     align-items: center;
    
     > h1{
        margin-top: 70px;
        margin-bottom: 50px;
     }
     > a{
        margin-top: 80px;
     }
     }

`;