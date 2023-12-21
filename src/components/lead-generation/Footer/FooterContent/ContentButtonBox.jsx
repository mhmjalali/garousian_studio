import DefaultBtn from "@/core/components/styles/DefaultBtn";
import { ButtonBox } from "@/styles/Footer.styles";

const ContentButtonBox = () => {
    return (
        <ButtonBox>
            <DefaultBtn $type="outlined">مشاوره میخوام</DefaultBtn>
            <DefaultBtn $type="contained">فرم تماس با ما</DefaultBtn>
        </ButtonBox>
    )
}

export default ContentButtonBox