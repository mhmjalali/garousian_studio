import styled from "styled-components";

const ColorizeBtn = styled.button`
    padding: 4px 8px;
    width: 140px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    color: ${({ $color }) => $color};
    background: ${({ $background }) => $background};
    @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

export default ColorizeBtn