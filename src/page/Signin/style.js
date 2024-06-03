import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const loginBox = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    border-radius: 10px;
    width: 500px;
    height: 400px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    & > h1 {
        text-align: center;
        margin: 0;
    }
`;

export const inputBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 150px;
`;

export const messageBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > h4 {
        margin: 0;
        height: 50px;
    }
    width: 100%;
`;

export const loginBtn = css`
    width: 350px;
    height: 50px;
    cursor: pointer;
`;
