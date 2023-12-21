import styled from "styled-components";
import OurServicesHeader from "./OurServicesHeader";
import OurServicesType from "./OurServicesType";
import ContainerFluid from "@/core/components/styles/ContainerFluid";

const OurServicesBox = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
`;

const ServiceGridSystem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 3fr 5fr;
    @media only screen and (max-width: 768px) {
        grid-template-rows: 1fr 5fr;
    }
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