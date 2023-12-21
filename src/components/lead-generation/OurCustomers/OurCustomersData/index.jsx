import { AllCustomers } from "@/styles/OurCustomers.styles";
import CustomerBox from "./CustomerBox";

const OurCustomersData = () => {
  return (
    <AllCustomers>
        <CustomerBox 
            CustomerImg="/images/First_customer.png"
            CustomerComment="این یک پاراگراف است. برای افزودن یا ویرایش متن 
                خود اینجا را کلیک کنید. این متن 
                باید برای گفتن یک داستان مورد 
                استفاده قرار گیرد و کاربران 
                .اطلاعات بیشتری بدست آورند"
            CustomerName="سهراب یزدانی"
            CustomerJob="عنوان شغل، اسم شرکت"/>
        <CustomerBox 
            CustomerImg="/images/Second_customer.png"
            CustomerComment="این یک پاراگراف است. برای افزودن یا ویرایش متن 
                خود اینجا را کلیک کنید. این متن 
                باید برای گفتن یک داستان مورد 
                استفاده قرار گیرد و کاربران 
                .اطلاعات بیشتری بدست آورند"
            CustomerName="علی جوانمردی"
            CustomerJob="عنوان شغل، اسم شرکت"/>
    </AllCustomers>
  )
}

export default OurCustomersData