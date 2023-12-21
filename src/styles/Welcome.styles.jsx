import styled from "styled-components";

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

export const TextBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LogoBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ButtonBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;
