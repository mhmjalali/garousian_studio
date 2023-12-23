import styled from "styled-components";

const ServiceData = styled.div`
    position: relative;
    top: -30px;
    border-radius: 16px;
    padding: 24px;
    background: #fff;
    box-shadow: 0px 24px 34px 0px #0000000A;
    max-width: 348px;
    @media only screen and (max-width: 768px) {
        max-width: 282px;
        padding: 16px;
    }
    @media only screen and (max-width: 390px) {
        max-width: 230px;
        padding: 12px;
    }
`;

export default ServiceData