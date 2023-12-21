import styled from "styled-components";

export const CopyrightBox = styled.section`
    width: 100%;
    background: #222222;
    height: 67px;
    position: relative;
    margin: 0 auto;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        p {
            direction: ltr;
        }
    }
    @media only screen and (max-width: 768px) {
        height: 33px;
    }
`;