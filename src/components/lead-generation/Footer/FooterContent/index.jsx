import ContainerFluid from "@/core/components/styles/ContainerFluid";
import styled from "styled-components";
import ContentButtonBox from "./ContentButtonBox";
import ContentTextBox from "./ContentTextBox";

const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
    z-index: 2;
`;

const ContentGridSystem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 5fr 2fr 2fr;
`;

const FooterContent = () => {
    return (
        <Content>
            <ContainerFluid>
                <ContentGridSystem>
                    <ContentTextBox />
                    <ContentButtonBox />
                </ContentGridSystem>
            </ContainerFluid>
        </Content>
    )
}

export default FooterContent