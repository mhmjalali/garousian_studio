import ContentBox from "./ContentBox"
import VideoBox from "./VideoBox"

const MiddleBox = styled.div`
    background: #666666;
`;

const MiddleAboutUs = () => {
  return (
    <MiddleBox>
        <VideoBox />
        <ContentBox />
    </MiddleBox>
  )
}

export default MiddleAboutUs