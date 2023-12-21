import ContainerFluid from "@/core/components/styles/ContainerFluid";
import { Content, ContentGridSystem } from "@/styles/Footer.styles";
import ContentButtonBox from "./ContentButtonBox";
import ContentTextBox from "./ContentTextBox";

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