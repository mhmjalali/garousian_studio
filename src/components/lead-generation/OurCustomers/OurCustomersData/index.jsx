import TypoCaption from "@/core/components/styles/TypoCaption";
import { TypoH4 } from "@/core/components/styles/TypoHead";
import { TypoP3 } from "@/core/components/styles/TypoParagraph";
import Image from "next/image";
import styled from "styled-components";

const AllCustomers = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
`;

const CustomerContent = styled.div`
    display: flex;
    max-width: 530px;
    max-height: 346px;
    background: #fff;
    box-shadow: 0px 14px 44px 0px #00000012;
    border-radius: 16px;
    padding: 56px;
    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 26px 16px;
        max-height: 288px;
    }
`;

const CustomerImage = styled.div`
    border-radius: 50%;
    margin-left: 32px;
    margin-right: 8px;
    @media only screen and (max-width: 768px) {
        margin-left: unset;
        margin-right: unset;
        img {
            width: 64px;
            height: 64px;
        }
    }
`;

const CustomerAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        p {
            text-align: center !important;
        }
    }
`;
const NameField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    @media only screen and (max-width: 768px) {
        margin-bottom: 16px;
        align-items: center;
    }
`;

const OurCustomersData = () => {
  return (
    <AllCustomers>
        <CustomerContent>
            <CustomerImage>
                <Image src="/images/First_customer.png" alt="Our customer mr.sohrab yazdani" priority width={86} height={86} />
            </CustomerImage>
            <CustomerAbout>
                <TypoP3 $alignMent="start">
                    این یک پاراگراف است. برای افزودن یا ویرایش متن 
                    خود اینجا را کلیک کنید. این متن 
                    باید برای گفتن یک داستان مورد 
                    استفاده قرار گیرد و کاربران 
                    .اطلاعات بیشتری بدست آورند
                </TypoP3>
                <NameField>
                    <TypoH4>سهراب یزدانی</TypoH4>
                    <TypoCaption>عنوان شغل، اسم شرکت</TypoCaption>
                </NameField>
            </CustomerAbout>
        </CustomerContent>
        <CustomerContent>
            <CustomerImage>
                <Image src="/images/Second_customer.png" alt="Our customer mr.sohrab yazdani" priority width={86} height={86} />
            </CustomerImage>
            <CustomerAbout>
                <TypoP3 $alignMent="start">
                    این یک پاراگراف است. برای افزودن یا ویرایش متن 
                    خود اینجا را کلیک کنید. این متن 
                    باید برای گفتن یک داستان مورد 
                    استفاده قرار گیرد و کاربران 
                    .اطلاعات بیشتری بدست آورند
                </TypoP3>
                <NameField>
                    <TypoH4>علی جوانمردی</TypoH4>
                    <TypoCaption>عنوان شغل، اسم شرکت</TypoCaption>
                </NameField>
            </CustomerAbout>
        </CustomerContent>
    </AllCustomers>
  )
}

export default OurCustomersData