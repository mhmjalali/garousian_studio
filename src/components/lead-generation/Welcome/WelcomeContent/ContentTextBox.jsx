import styled from "styled-components";

const TextBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TypoHead = styled.p`
    font-size: 32px;
    line-height: 54px;
    font-weight: 700;
    color: ${({ $color }) => $color || "#000"};
`;

const TypoParagraph = styled.p`
    font-size: 20px;
    line-height: 34px;
    text-align: center;
    font-weight: 400;
    max-width: 700px;
    color: ${({ $color }) => $color || "#000"};
`;

const ContentTextBox = () => {
    return (
        <TextBox>
            <TypoHead $color="#fff">به راحتی خدمات مورد نیاز خودت رو پیدا کن</TypoHead>
            <TypoParagraph $color="#fff">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست و چه کارهایی انجام میده</TypoParagraph>
        </TextBox>
    )
}

export default ContentTextBox