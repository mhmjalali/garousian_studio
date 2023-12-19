import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: IRANSansFaNum;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        direction: rtl;
    }
`;

export default GlobalStyles;