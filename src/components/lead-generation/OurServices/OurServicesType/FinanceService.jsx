import ColorizeBtn from '@/core/components/styles/ColorizeBtn'
import ServiceButtonGroup from '@/core/components/styles/ServiceButtonGroup'
import ServiceData from '@/core/components/styles/ServiceData'
import ServiceItem from '@/core/components/styles/ServiceItem'
import TypoHead from '@/core/components/styles/TypoHead'
import TypoParagraph from '@/core/components/styles/TypoParagraph'
import Image from 'next/image'
import React from 'react'

const FinanceService = () => {
  return (
    <ServiceItem>
        <Image src="/images/Payment.png" alt="Lead Generation Co" priority width={400} height={250} />
        <ServiceData>
            <TypoHead $fontSize="20px" $lineHeight="34px">خدمات مالی</TypoHead>
            <TypoParagraph $fontSize="14px" $lineHeight="24px">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید</TypoParagraph>
            <ServiceButtonGroup>
                <ColorizeBtn $color='#28AE3D' $background="rgba(40, 174, 61, 0.1)">Best Invest</ColorizeBtn>
                <ColorizeBtn $color='#28AE3D' $background="rgba(40, 174, 61, 0.1)">Saftey Pay</ColorizeBtn>
            </ServiceButtonGroup>
        </ServiceData>
    </ServiceItem>
  )
}

export default FinanceService