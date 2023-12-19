import styled from "styled-components";
import ContentButtonBox from "./ContentButtonBox";
import ContentLogoBox from "./ContentLogoBox";
import ContentTextBox from "./ContentTextBox";

const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 5fr 2fr 2fr;
    justify-items: center;
    align-items: center;
    z-index: 2;
`;

const WelcomeContent = () => {
    return (
        <Content>
            <ContentLogoBox />
            <ContentTextBox />
            <ContentButtonBox />
        </Content>
    )
}

export default WelcomeContent