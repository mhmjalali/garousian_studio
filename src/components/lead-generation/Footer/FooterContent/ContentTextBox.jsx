import { TypoH2 } from "@/core/components/styles/TypoHead";
import { TypoP2 } from "@/core/components/styles/TypoParagraph";
import { TextBox } from "@/styles/Footer.styles";

const ContentTextBox = () => {
    return (
        <TextBox>
            <TypoH2 $color="#fff">اگر علاقه‌مند به همکاری با ما هستی</TypoH2>
            <TypoP2 $color="#fff">از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید</TypoP2>
        </TextBox>
    )
}

export default ContentTextBox