import styled from "styled-components";
import WelcomeBackground from "./WelcomeBackground";
import WelcomeContent from "./WelcomeContent";

const WelcomeBox = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Welcome = () => {
    return (
        <WelcomeBox>
            <WelcomeBackground />
            <WelcomeContent />
        </WelcomeBox>
    )
}

export default Welcome