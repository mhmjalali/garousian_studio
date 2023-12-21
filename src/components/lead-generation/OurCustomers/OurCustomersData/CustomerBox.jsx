import TypoCaption from '@/core/components/styles/TypoCaption';
import { TypoH4 } from '@/core/components/styles/TypoHead';
import { TypoP3 } from '@/core/components/styles/TypoParagraph';
import { CustomerAbout, CustomerContent, CustomerImage, NameField } from '@/styles/OurCustomers.styles';
import Image from 'next/image';

const CustomerBox = ({CustomerImg, CustomerComment, CustomerName, CustomerJob}) => {
  return (
    <CustomerContent>
            <CustomerImage>
                <Image src={CustomerImg} alt="Our customer mr.sohrab yazdani" priority width={86} height={86} />
            </CustomerImage>
            <CustomerAbout>
                <TypoP3 $alignMent="start">{CustomerComment}</TypoP3>
                <NameField>
                    <TypoH4>{CustomerName}</TypoH4>
                    <TypoCaption>{CustomerJob}</TypoCaption>
                </NameField>
            </CustomerAbout>
        </CustomerContent>
  )
}

export default CustomerBox