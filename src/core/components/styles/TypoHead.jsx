import styled from "styled-components";

export const TypoH1 = styled.h1`
    font-size: 32px;
    line-height: 54px;
    text-align: center;
    font-weight: 700;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 22px;
        line-height: 37px;
    }
`;

export const TypoH2 = styled.h2`
    font-size: 28px;
    line-height: 47px;
    text-align: center;
    font-weight: 700;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 37px;
    }
`;

export const TypoH3 = styled.h3`
    font-size: 20px;
    line-height: 34px;
    text-align: center;
    font-weight: 700;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

export const TypoH4 = styled.h4`
    font-size: 18px;
    line-height: 31px;
    text-align: center;
    font-weight: 700;
    color: ${({ $color }) => $color ||  "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 24px;
    }
`;
