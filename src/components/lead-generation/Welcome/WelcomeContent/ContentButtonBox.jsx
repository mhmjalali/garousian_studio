import DefaultBtn from "@/core/components/styles/DefaultBtn";
import styled from "styled-components";

const ButtonBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;

const ContentButtonBox = () => {
    return (
        <ButtonBox>
            <DefaultBtn $type="outlined">مشاوره میخوام</DefaultBtn>
            <DefaultBtn $type="contained">فرم تماس با ما</DefaultBtn>
        </ButtonBox>
    )
}

export default ContentButtonBox