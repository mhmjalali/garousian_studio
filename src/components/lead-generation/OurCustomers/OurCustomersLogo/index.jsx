import { CustomerLogo, CustomersLogos } from "@/styles/OurCustomers.styles";

const OurCustomersLogo = () => {
    return (
        <CustomersLogos>
            <CustomerLogo src="/images/Customer_logo1.svg" alt="Customer Logo1" priority width={80} height={80} />
            <CustomerLogo src="/images/Customer_logo2.svg" alt="Customer Logo2" priority width={80} height={80} />
            <CustomerLogo src="/images/Customer_logo3.svg" alt="Customer Logo3" priority width={80} height={80} />
            <CustomerLogo src="/images/Customer_logo4.svg" alt="Customer Logo4" priority width={80} height={80} />
            <CustomerLogo src="/images/Customer_logo5.svg" alt="Customer Logo5" priority width={80} height={80} />
            <CustomerLogo src="/images/Customer_logo6.svg" alt="Customer Logo6" priority width={80} height={80} />
        </CustomersLogos>
    )
}

export default OurCustomersLogo