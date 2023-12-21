import ContainerFluid from "@/core/components/styles/ContainerFluid";
import OurCustomersHeader from "./OurCustomersHeader";
import OurCustomersData from "./OurCustomersData";
import OurCustomersLogo from "./OurCustomersLogo";
import MainBox from "@/core/components/styles/MainBox";
import { CustomerGridSystem } from "@/styles/OurCustomers.styles";

const OurCustomers = () => {
    return (
        <MainBox>
            <ContainerFluid>
                <CustomerGridSystem>
                    <OurCustomersHeader />
                    <OurCustomersData/>
                    <OurCustomersLogo/>
                </CustomerGridSystem>
            </ContainerFluid>
        </MainBox>
    )
}

export default OurCustomers