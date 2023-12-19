import styled from "styled-components";

const DefaultBtn = styled.div`
    padding: 8px 20px;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    color: #fff;
    @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 27px;
    }
    ${({ $type }) => $type === "contained" ?  "border: 2px solid #fff;" : "border: 2px solid transparent; background-color: #5274F9"}
`;

export default DefaultBtn