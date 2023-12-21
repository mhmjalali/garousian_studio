import { LogoBox } from "@/styles/Welcome.styles";
import Image from "next/image";

const ContentLogoBox = () => {
    return (
        <LogoBox>
            <Image src="/images/Logo&LogoType.svg" alt="Lead Generation Co" priority width={164} height={183} />
        </LogoBox>
    )
}

export default ContentLogoBox