import styled from "styled-components";
import OurServicesHeader from "./OurServicesHeader";
import OurServicesType from "./OurServicesType";
import ContainerFluid from "@/core/components/styles/ContainerFluid";

const OurServicesBox = styled.div`
    width: 100%;
    background: #FAFAFA;
    position: relative;
`;

const ServiceGridSystem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr;
`;

const OurServices = () => {
    return (
        <OurServicesBox>
            <ContainerFluid>
                <ServiceGridSystem>
                <OurServicesHeader />
                <OurServicesType />
            </ServiceGridSystem>
            </ContainerFluid>
        </OurServicesBox>
    )
}

export default OurServices