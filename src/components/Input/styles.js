import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding-left: 4px;
    align-items: center;
    background-color: #111;
    border-radius: 6px;

    > input {
        border: 0;
        color: #fff;
        outline: none;
        width: 100%;
        height: 35px;
        padding: 12px;
        border-radius: 6px;
        background: transparent;
        &placeholder {
            color: #333;
        }
    };
    `;