import styled from "styled-components";

const TypoHead = styled.p`
    font-size: ${({ $fontSize }) => $fontSize || "28px"};
    line-height: ${({ $lineHeight }) => $lineHeight || "54px"};
    text-align: center;
    font-weight: 700;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: ${({ $fontSize }) => $fontSize ? "22px" : "16px"};
        line-height: 37px;
    }
`;

export default TypoHead