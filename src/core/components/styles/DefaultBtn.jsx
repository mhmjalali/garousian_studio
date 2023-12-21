import styled from "styled-components";

const DefaultBtn = styled.button`
    padding: 8px 20px;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 500;
    width: 220px;
    color: #fff;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        width: unset;
        font-size: 16px;
        line-height: 27px;
    }
    ${({ $type }) => $type === "contained" ?  "border: 2px solid #fff; background-color: transparent" : "border: 2px solid transparent; background-color: #5274F9"}
`;

export default DefaultBtn