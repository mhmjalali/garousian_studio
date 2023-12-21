import { TypoH2 } from "@/core/components/styles/TypoHead";
import { TypoP3 } from "@/core/components/styles/TypoParagraph";
import { Bullet, FlexColumnBox, ListHeader, ListItem } from "@/styles/AboutUs.styles";

const ContentBox = () => {
    return (
        <FlexColumnBox>
            <ListHeader>
                <TypoH2 $color="#fff">ویدئو معرفی ما را تماشا کنید</TypoH2>
                </ListHeader>
            <ListItem>
                <Bullet />
                <TypoP3 $color="#fff" $alignMent="start">
                    از این زیرعنوان برای اطلاع 
                    رسانی به کاربر و آشنایی بیشتر با محصول 
                    و خدمات خود استفاده میکنیم. با کلیک بر روی 
                    این قسمت میتوانید متن خود را ویرایش کنید
                </TypoP3>
            </ListItem>
            <ListItem>
                <Bullet />
                <TypoP3 $color="#fff" $alignMent="start">
                    از این زیرعنوان برای اطلاع 
                    رسانی به کاربر و آشنایی بیشتر با محصول 
                    و خدمات خود استفاده میکنیم. با کلیک بر روی 
                    این قسمت میتوانید متن خود را ویرایش کنید
                </TypoP3>
            </ListItem>
        </FlexColumnBox>
    )
}

export default ContentBox