import styled from "styled-components";
import FooterBackground from "./FooterBackground";
import FooterContent from "./FooterContent";

const FooterBox = styled.section`
    width: 100%;
    height: 520px;
    margin-top: 100px;
    position: relative;
    @media only screen and (max-width: 768px) {
        height: 330px;
        margin-top: unset;
    }
`;

const Footer = () => {
    return (
        <FooterBox>
            <FooterBackground />
            <FooterContent />
        </FooterBox>
    )
}

export default Footer