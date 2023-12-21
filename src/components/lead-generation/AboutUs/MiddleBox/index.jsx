import styled from "styled-components";
import ContentBox from "./ContentBox"
import VideoBox from "./VideoBox"
import ContainerFluid from "@/core/components/styles/ContainerFluid";

const MiddleBox = styled.section`
    background: #666666;
    width: 100%;
    max-height: 100%;
    padding: 100px 0;
    @media only screen and (max-width: 768px) {
        padding: 60px 0;
    }
`;

const AlignMangement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
        font-size: ${({ $fontSize }) => $fontSize ? "16px" : "12px"};
        line-height: 27px;
    }
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