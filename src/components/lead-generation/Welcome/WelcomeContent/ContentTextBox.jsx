import { TypoH1 } from "@/core/components/styles/TypoHead";
import { TypoP1 } from "@/core/components/styles/TypoParagraph";
import { TextBox } from "@/styles/Welcome.styles";

const ContentTextBox = () => {
    return (
        <TextBox>
            <TypoH1 $color="#fff">به راحتی خدمات مورد نیاز خودت رو پیدا کن</TypoH1>
            <TypoP1 $color="#fff">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست و چه کارهایی انجام میده</TypoP1>
        </TextBox>
    )
}

export default ContentTextBox