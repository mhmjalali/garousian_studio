import ColorizeBtn from '@/core/components/styles/ColorizeBtn'
import ServiceButtonGroup from '@/core/components/styles/ServiceButtonGroup'
import ServiceData from '@/core/components/styles/ServiceData'
import ServiceItem from '@/core/components/styles/ServiceItem'
import StyledImage from '@/core/components/styles/StyledImage'
import { TypoH3 } from '@/core/components/styles/TypoHead'
import { TypoP4 } from '@/core/components/styles/TypoParagraph'

const SEOService = () => {
  return (
    <ServiceItem>
        <StyledImage src="/images/CEO.png" alt="Lead Generation Co" priority  width={400} height={250} />
        <ServiceData>
            <TypoH3>بهینه سازی</TypoH3>
            <TypoP4 $fontSize="14px" $lineHeight="24px">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید</TypoP4>
            <ServiceButtonGroup>
                <ColorizeBtn $color='#5274F9' $background="rgba(82, 116, 249, 0.1)">SEO</ColorizeBtn>
                <ColorizeBtn $color='#5274F9' $background="rgba(82, 116, 249, 0.1)">Marketing</ColorizeBtn>
            </ServiceButtonGroup>
        </ServiceData>
    </ServiceItem>
  )
}

export default SEOService