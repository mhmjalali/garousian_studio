import { TypoH1 } from "@/core/components/styles/TypoHead";
import { TypoP1 } from "@/core/components/styles/TypoParagraph";
import styled from "styled-components";

const TextBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContentTextBox = () => {
    return (
        <TextBox>
            <TypoH1 $color="#fff">به راحتی خدمات مورد نیاز خودت رو پیدا کن</TypoH1>
            <TypoP1 $color="#fff" $fontSize="20px">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست و چه کارهایی انجام میده</TypoP1>
        </TextBox>
    )
}

export default ContentTextBox