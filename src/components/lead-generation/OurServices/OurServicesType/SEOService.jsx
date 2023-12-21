import ColorizeBtn from '@/core/components/styles/ColorizeBtn'
import ServiceButtonGroup from '@/core/components/styles/ServiceButtonGroup'
import ServiceData from '@/core/components/styles/ServiceData'
import StyledImage from '@/core/components/styles/StyledImage'
import ServiceItem from '@/core/components/styles/ServiceItem'
import TypoHead from '@/core/components/styles/TypoHead'
import TypoParagraph from '@/core/components/styles/TypoParagraph'

const SEOService = () => {
  return (
    <ServiceItem>
        <StyledImage src="/images/CEO.png" alt="Lead Generation Co" priority  width={400} height={250} />
        <ServiceData>
            <TypoHead $fontSize="20px" $lineHeight="34px">بهینه سازی</TypoHead>
            <TypoParagraph $fontSize="14px" $lineHeight="24px">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید</TypoParagraph>
            <ServiceButtonGroup>
                <ColorizeBtn $color='#5274F9' $background="rgba(82, 116, 249, 0.1)">SEO</ColorizeBtn>
                <ColorizeBtn $color='#5274F9' $background="rgba(82, 116, 249, 0.1)">Marketing</ColorizeBtn>
            </ServiceButtonGroup>
        </ServiceData>
    </ServiceItem>
  )
}

export default SEOService