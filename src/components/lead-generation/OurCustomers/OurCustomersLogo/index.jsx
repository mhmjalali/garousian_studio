import Image from "next/image";
import styled from "styled-components";

const CustomersLogos = styled.div`
    display: flex;
    justify-content: space-around;
    width: 820px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    @media only screen and (max-width: 768px) {
        width: 260px;
    }
`;

const CustomerImage = styled(Image)`
    @media only screen and (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;

const OurCustomersLogo = () => {
    return (
        <CustomersLogos>
            <CustomerImage src="/images/Customer_logo1.svg" alt="Customer Logo1" priority width={80} height={80} />
            <CustomerImage src="/images/Customer_logo2.svg" alt="Customer Logo2" priority width={80} height={80} />
            <CustomerImage src="/images/Customer_logo3.svg" alt="Customer Logo3" priority width={80} height={80} />
            <CustomerImage src="/images/Customer_logo4.svg" alt="Customer Logo4" priority width={80} height={80} />
            <CustomerImage src="/images/Customer_logo5.svg" alt="Customer Logo5" priority width={80} height={80} />
            <CustomerImage src="/images/Customer_logo6.svg" alt="Customer Logo6" priority width={80} height={80} />
        </CustomersLogos>
    )
}

export default OurCustomersLogo