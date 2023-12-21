import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: IRANSans;
        background: #FAFAFA;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: IRANSans;
        box-sizing: border-box;
        direction: rtl;
    }
`;

export default GlobalStyles;