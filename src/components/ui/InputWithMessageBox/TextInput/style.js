import { css } from "@emotion/react";

export const inputBox = (title, width, height, fontSize) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: ${!!height ? height : "50px"};

    & > input {
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: 10px;
        outline: none;
        width: ${!!width ? width : "100%"};
        height: ${!!height ? height : "50px"};
        font-size: ${!!fontSize ? fontSize : "12px"};
    }
`;
