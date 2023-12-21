import { TypoH2 } from "@/core/components/styles/TypoHead";
import { TypoP2 } from "@/core/components/styles/TypoParagraph";
import styled from "styled-components";

const TextBox = styled.div`
    display: flex;
    margin-bottom: 40px;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const OurCustomersHeader = () => {
    return (
        <TextBox>
            <TypoH2>ما خدمات زیادی به مشتریان بزرگمان ارائه میدهیم</TypoH2>
            <TypoP2 $color="#999999">از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید</TypoP2>
        </TextBox>
    )
}

export default OurCustomersHeader