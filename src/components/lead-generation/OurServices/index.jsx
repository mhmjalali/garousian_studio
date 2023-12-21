import ContainerFluid from "@/core/components/styles/ContainerFluid";
import MainBox from "@/core/components/styles/MainBox";
import OurServicesHeader from "./OurServicesHeader";
import OurServicesType from "./OurServicesType";
import { ServiceGridSystem } from "@/styles/OurServices.styles";

const OurServices = () => {
    return (
        <MainBox>
            <ContainerFluid>
                <ServiceGridSystem>
                    <OurServicesHeader />
                    <OurServicesType />
                </ServiceGridSystem>
            </ContainerFluid>
        </MainBox>
    )
}

export default OurServices