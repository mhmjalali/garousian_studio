import { TypoH2 } from "@/core/components/styles/TypoHead";
import { TypoP3 } from "@/core/components/styles/TypoParagraph";
import styled from "styled-components";

const FlexColumnBox = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 650px;
    @media only screen and (max-width: 768px) {
        margin-bottom: 32px;
    }
`;

const ListItem = styled.ul`
    display: flex;
    align-items: start;
    margin-bottom: 32px;
    &:last-child {
        margin-bottom: unset;
    }
    @media only screen and (max-width: 768px) {
        margin-bottom: 22px;
    }
`;

const ListHeader = styled.div`
    margin-bottom: 32px;
`;

const Bullet = styled.div`
    position: relative;
    top: 10px;
    background: #fff;
    border-radius: 50%;
    margin-left: 32px;
    margin-right: 8px;
    padding: 8px;
    width: 16px;
    height: 16px;
`;

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