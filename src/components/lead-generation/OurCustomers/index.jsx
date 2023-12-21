import ContainerFluid from "@/core/components/styles/ContainerFluid";
import styled from "styled-components";
import OurCustomersHeader from "./OurCustomersHeader";
import OurCustomersData from "./OurCustomersData";
import OurCustomersLogo from "./OurCustomersLogo";

const OurCustomersBox = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
`;

const CustomerGridSystem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 3fr 5fr 2fr;
    @media only screen and (max-width: 768px) {
        grid-template-rows: 1fr 3fr 1fr;
    }
`;

const OurCustomers = () => {
    return (
        <OurCustomersBox>
            <ContainerFluid>
                <CustomerGridSystem>
                    <OurCustomersHeader />
                    <OurCustomersData/>
                    <OurCustomersLogo/>
                </CustomerGridSystem>
            </ContainerFluid>
        </OurCustomersBox>
    )
}

export default OurCustomers