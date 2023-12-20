import TypoHead from "@/core/components/styles/TypoHead";
import TypoParagraph from "@/core/components/styles/TypoParagraph";
import styled from "styled-components";

const TextBox = styled.div`
    display: flex;
    margin-bottom: 40px;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const OurServicesHeader = () => {
    return (
        <TextBox>
            <TypoHead>ما خدمات زیادی به مشتریان بزرگمان ارائه میدهیم</TypoHead>
            <TypoParagraph $color="#999999">از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید</TypoParagraph>
        </TextBox>
    )
}

export default OurServicesHeader