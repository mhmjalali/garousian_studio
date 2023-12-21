import { TypoP3 } from "@/core/components/styles/TypoParagraph";
import Image from "next/image";
import styled from "styled-components";

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

const Bullet = styled.div`
    border-radius: 50%;
    margin-left: 32px;
    margin-right: 8px;
`;

const OurCustomersData = () => {
  return (
    <div>
        <div>
            <Bullet>
                <Image src="/images/First_customer.png" alt="Our customer mr.sohrab yazdani" priority width={86} height={86} />
            </Bullet>
            <div>
                <TypoP3 $fontSize="16px" $alignMent="start">
                    از این زیرعنوان برای اطلاع 
                    رسانی به کاربر و آشنایی بیشتر با محصول 
                    و خدمات خود استفاده میکنیم. با کلیک بر روی 
                    این قسمت میتوانید متن خود را ویرایش کنید
                </TypoP3>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default OurCustomersData