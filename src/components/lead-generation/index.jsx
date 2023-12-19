import Image from "next/image";
import styled from "styled-components"

const HeaderBox = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const HeaderBackground = styled.div`
  background-image: url("/images/Header_img.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

const HeaderContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    z-index: 2;
`;

const HeaderDropShadow = styled.div`
  background-color: rgba(32, 55, 137, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeaderLogoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderTextBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TypoHeader = styled.p`
  font-size: 32px;
  line-height: 54px;
  font-weight: 700;
  color: ${({ $color }) => $color || "#000"};
`;

const TypoParagraph = styled.p`
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  font-weight: 400;
  max-width: 700px;
  color: ${({ $color }) => $color || "#000"};
`;

const HeaderButtonBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const DefaultBtn = styled.div`
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
  ${({ $type }) =>
    $type === "contained" ? 
    "border: 2px solid #fff;" : 
    "border: none; background-color: #5274F9"}
`;

const LeadGenerationCompany = () => {
  return (
    <HeaderBox>
      <HeaderBackground>
        <HeaderDropShadow/>
      </HeaderBackground>
      <HeaderContent>
        <HeaderLogoBox>
          <Image src="/images/Logo&LogoType.svg" alt="Lead Generation Co" width={164} height={183} />
        </HeaderLogoBox>
        <HeaderTextBox>
          <TypoHeader $color="#fff">به راحتی خدمات مورد نیاز خودت رو پیدا کن</TypoHeader>
          <TypoParagraph $color="#fff">اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست و چه کارهایی انجام میده</TypoParagraph>
        </HeaderTextBox>
        <HeaderButtonBox>
          <DefaultBtn $type="outlined">مشاوره میخوام</DefaultBtn>
          <DefaultBtn $type="contained">فرم تماس با ما</DefaultBtn>
        </HeaderButtonBox>
      </HeaderContent>
    </HeaderBox>
  )
}

export default LeadGenerationCompany