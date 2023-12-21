import { ServicesBox } from '@/styles/OurServices.styles';
import DesignService from './DesignService';
import FinanceService from './FinanceService';
import SEOService from './SEOService';

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