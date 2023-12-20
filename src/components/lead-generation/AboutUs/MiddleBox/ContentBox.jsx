import TypoHead from "@/core/components/styles/TypoHead"
import styled from "styled-components";

const FlexColumnBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ListItem = styled.ul`
  display: flex;
  align-items: center;
`;

const Bullet = styled.ul`
  background: #fff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
`;

const ContentBox = () => {
    return (
        <FlexColumnBox>
            <TypoHead $color="#fff">ویدئو معرفی ما را تماشا کنید</TypoHead>
            <FlexColumnBox>

            </FlexColumnBox>
            <ListItem>
                <Bullet />
                <p>
                    از این زیرعنوان برای اطلاع 
                    رسانی به کاربر و آشنایی بیشتر با محصول 
                    و خدمات خود استفاده میکنیم. با کلیک بر روی 
                    این قسمت میتوانید متن خود را ویرایش کنید
                </p>
            </ListItem>
            <ListItem>
                <Bullet />
                <p>
                    از این زیرعنوان برای اطلاع 
                    رسانی به کاربر و آشنایی بیشتر با محصول 
                    و خدمات خود استفاده میکنیم. با کلیک بر روی 
                    این قسمت میتوانید متن خود را ویرایش کنید
                </p>
            </ListItem>
        </FlexColumnBox>
    )
}

export default ContentBox