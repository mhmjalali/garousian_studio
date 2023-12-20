import styled from "styled-components";
import ContentBox from "./ContentBox"
import VideoBox from "./VideoBox"
import ContainerFluid from "@/core/components/styles/ContainerFluid";

const MiddleBox = styled.section`
    background: #666666;
    width: 100%;
    padding: 100px 0;
`;

const AlignMangement = styled.section`
    display: flex;
`;

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