import styled from "styled-components";

export const FooterBox = styled.section`
    width: 100%;
    height: 520px;
    margin-top: 100px;
    position: relative;
    @media only screen and (max-width: 1200px) {
        margin-top: unset;
    }
    @media only screen and (max-width: 768px) {
        height: 330px;
        margin-top: unset;
    }
`;

export const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
    z-index: 2;
`;

export const ContentGridSystem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 5fr 2fr 2fr;
`;

export const ButtonBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;

export const TextBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;