import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: IRANSansFaNum;
        background: #FAFAFA;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: IRANSansFaNum;
        box-sizing: border-box;
        direction: rtl;
    }
`;

export default GlobalStyles;