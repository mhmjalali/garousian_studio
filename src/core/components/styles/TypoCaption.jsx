import styled from "styled-components";

const TypoCaption = styled.p`
    font-size: 14px;
    line-height: 24px;
    text-align: ${({ $alignMent }) => $alignMent || "center"};
    font-weight: 400;
    max-width: 700px;
    color: #b0b0b0;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 20px;
    }
`;

export default TypoCaption