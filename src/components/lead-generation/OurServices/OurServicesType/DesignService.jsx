import ColorizeBtn from '@/core/components/styles/ColorizeBtn'
import ServiceButtonGroup from '@/core/components/styles/ServiceButtonGroup'
import ServiceData from '@/core/components/styles/ServiceData'
import StyledImage from '@/core/components/styles/ServiceImages'
import ServiceItem from '@/core/components/styles/ServiceItem'
import TypoHead from '@/core/components/styles/TypoHead'
import TypoParagraph from '@/core/components/styles/TypoParagraph'

const DesignService = () => {
  return (
    <ServiceItem>
            <StyledImage src="/images/Design.png" alt="Lead Generation Co" priority width={400} height={250} />
            <ServiceData>
                <TypoHead $fontSize="20px" $lineHeight="34px">طراحی جدید</TypoHead>
                <TypoParagraph $fontSize="14px" $lineHeight="24px">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید</TypoParagraph>
                <ServiceButtonGroup>
                    <ColorizeBtn $color='#FB874F' $background="rgba(251, 135, 79, 0.1)">Web Design</ColorizeBtn>
                    <ColorizeBtn $color='#FB874F' $background="rgba(251, 135, 79, 0.1)">IT Solution</ColorizeBtn>
                </ServiceButtonGroup>
            </ServiceData>
        </ServiceItem>
  )
}

export default DesignService