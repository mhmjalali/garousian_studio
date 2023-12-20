import styled from "styled-components";
import MiddleAboutUs from "./MiddleBox";

const AboutUsBox = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;    
    justify-content: center;
`;

const AboutUs = () => {
    return (
        <AboutUsBox>
            <MiddleAboutUs />
        </AboutUsBox>
    )
}

export default AboutUs