import styled from "styled-components";

const TypoParagraph = styled.p`
    font-size: ${({ $fontSize }) => $fontSize || "18px"};
    line-height: ${({ $lineHeight }) => $lineHeight || "34px"};
    text-align: center;
    font-weight: 400;
    max-width: 700px;
    color: ${({ $color }) => $color || "#444444"};
    @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

export default TypoParagraph