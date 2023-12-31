import ColorizeBtn from '@/core/components/styles/ColorizeBtn'
import ServiceButtonGroup from '@/core/components/styles/ServiceButtonGroup'
import ServiceData from '@/core/components/styles/ServiceData'
import ServiceItem from '@/core/components/styles/ServiceItem'
import StyledImage from '@/core/components/styles/StyledImage'
import { TypoH3 } from '@/core/components/styles/TypoHead'
import { TypoP4 } from '@/core/components/styles/TypoParagraph'

const FinanceService = () => {
  return (
    <ServiceItem>
        <StyledImage src="/images/Payment.png" alt="Lead Generation Co" priority width={400} height={250} />
        <ServiceData>
            <TypoH3>خدمات مالی</TypoH3>
            <TypoP4 $fontSize="14px" $lineHeight="24px">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید</TypoP4>
            <ServiceButtonGroup>
                <ColorizeBtn $color='#28AE3D' $background="rgba(40, 174, 61, 0.1)">Best Invest</ColorizeBtn>
                <ColorizeBtn $color='#28AE3D' $background="rgba(40, 174, 61, 0.1)">Saftey Pay</ColorizeBtn>
            </ServiceButtonGroup>
        </ServiceData>
    </ServiceItem>
  )
}

export default FinanceService