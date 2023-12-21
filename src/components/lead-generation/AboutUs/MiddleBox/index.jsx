import { AlignMangement, MiddleBox } from "@/styles/AboutUs.styles";
import ContentBox from "./ContentBox"
import VideoBox from "./VideoBox"
import ContainerFluid from "@/core/components/styles/ContainerFluid";

const MiddleAboutUs = () => {
    return (
        <MiddleBox>
            <ContainerFluid>
                <AlignMangement>
                    <VideoBox />
                    <ContentBox />
                </AlignMangement>
            </ContainerFluid>
        </MiddleBox>
    )
}

export default MiddleAboutUs