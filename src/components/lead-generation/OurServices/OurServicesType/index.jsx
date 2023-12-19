import styled from 'styled-components';
import DesignService from './DesignService';
import FinanceService from './FinanceService';
import SEOService from './SEOService';

const ServicesBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

const OurServicesType = () => {
  return (
    <ServicesBox>
        <SEOService />
        <FinanceService />
        <DesignService />
    </ServicesBox>
  )
}

export default OurServicesType