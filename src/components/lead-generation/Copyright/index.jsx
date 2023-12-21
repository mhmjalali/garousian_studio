import { TypoP3 } from "@/core/components/styles/TypoParagraph";
import { CopyrightBox } from "@/styles/Copyright.styles";

const Copyright = () => {
    return (
        <CopyrightBox>
                <div>
                    <TypoP3 $color="#fff">©2019 . Company . All rights reserved</TypoP3>
                </div>
        </CopyrightBox>
    )
}

export default Copyright