import styled from "styled-components";
import MiddleAboutUs from "./MiddleBox";

const AboutUsBox = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;    
    justify-content: center;
     @media only screen and (max-width: 768px) {
        height: auto;
    }
`;

const AboutUs = () => {
    return (
        <AboutUsBox>
            <MiddleAboutUs />
        </AboutUsBox>
    )
}

export default AboutUs