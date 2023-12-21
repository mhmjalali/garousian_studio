import ContainerFluid from "@/core/components/styles/ContainerFluid";
import { Content, ContentGridSystem } from "@/styles/Welcome.styles";
import ContentButtonBox from "./ContentButtonBox";
import ContentLogoBox from "./ContentLogoBox";
import ContentTextBox from "./ContentTextBox";

const WelcomeContent = () => {
    return (
        <Content>
            <ContainerFluid>
                <ContentGridSystem>
                    <ContentLogoBox />
                    <ContentTextBox />
                    <ContentButtonBox />
                </ContentGridSystem>
            </ContainerFluid>
        </Content>
    )
}

export default WelcomeContent