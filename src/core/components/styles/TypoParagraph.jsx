import styled from "styled-components";

export const TypoP1 = styled.p`
    font-size: 20px;
    line-height: 34px;
    text-align: ${({ $alignMent }) => $alignMent || "center"};
    font-weight: 400;
    max-width: 700px;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

export const TypoP2 = styled.p`
    font-size: 18px;
    line-height: 31px;
    text-align: ${({ $alignMent }) => $alignMent || "center"};
    font-weight: 400;
    max-width: 700px;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

export const TypoP3 = styled.p`
    font-size: 16px;
    line-height: 27px;
    text-align: ${({ $alignMent }) => $alignMent || "center"};
    font-weight: 400;
    max-width: 700px;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 24px;
    }
`;

export const TypoP4 = styled.p`
    font-size: 14px;
    line-height: 24px;
    text-align: ${({ $alignMent }) => $alignMent || "center"};
    font-weight: 400;
    max-width: 700px;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
        line-height: 20px;
    }
`;