

import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
    @media only screen and (max-width: 768px) {
        width: 310px;
        height: 194px;
    }
    @media only screen and (max-width: 390px) {
        width: 250px;
        height: 159px;
    }
`;

export default StyledImage