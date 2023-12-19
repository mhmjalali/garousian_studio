import Image from "next/image";
import styled from "styled-components"

const LogoBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContentLogoBox = () => {
    return (
        <LogoBox>
            <Image src="/images/Logo&LogoType.svg" alt="Lead Generation Co" priority width={164} height={183} />
        </LogoBox>
    )
}

export default ContentLogoBox