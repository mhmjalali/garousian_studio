import styled from "styled-components";

export const MiddleBox = styled.div`
    background: #666666;
    width: 100%;
    padding: 100px 0;
    @media only screen and (max-width: 768px) {
        padding: 60px 0;
    }
`;

export const AlignMangement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        gap: 40px;
    }
    @media only screen and (max-width: 768px) {
        font-size: ${({ $fontSize }) => $fontSize ? "16px" : "12px"};
        line-height: 27px;
        gap: unset;
    }
`;

export const FlexColumnBox = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 650px;
    @media only screen and (max-width: 768px) {
        margin-bottom: 32px;
    }
`;

export const ListItem = styled.ul`
    display: flex;
    align-items: start;
    margin-bottom: 32px;
    &:last-child {
        margin-bottom: unset;
    }
    @media only screen and (max-width: 768px) {
        margin-bottom: 22px;
    }
`;

export const ListHeader = styled.div`
    margin-bottom: 32px;
`;

export const Bullet = styled.div`
    position: relative;
    top: 10px;
    background: #fff;
    border-radius: 50%;
    margin-left: 32px;
    margin-right: 8px;
    padding: 8px;
    width: 16px;
    height: 16px;
`;