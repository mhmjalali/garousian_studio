import Image from "next/image";
import styled from "styled-components";

export const CustomerGridSystem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 3fr 5fr 2fr;
    @media only screen and (max-width: 768px) {
        grid-template-rows: 1fr 3fr 1fr;
    }
`;

export const CustomersLogos = styled.div`
    display: flex;
    justify-content: space-around;
    width: 820px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    @media only screen and (max-width: 1200px) {
        width: 400px;
    }
    @media only screen and (max-width: 768px) {
        width: 260px;
    }
`;

export const CustomerLogo = styled(Image)`
    @media only screen and (max-width: 1200px) {
        width: 50px;
        height: 50px;
    }
    @media only screen and (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;

export const TextBox = styled.div`
    display: flex;
    margin-bottom: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AllCustomers = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`;

export const CustomerContent = styled.div`
    display: flex;
    max-width: 530px;
    max-height: 346px;
    background: #fff;
    box-shadow: 0px 14px 44px 0px #00000012;
    border-radius: 16px;
    padding: 56px;
    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 26px 16px;
        max-height: 288px;
    }
`;

export const CustomerImage = styled.div`
    border-radius: 50%;
    margin-left: 32px;
    margin-right: 8px;
    @media only screen and (max-width: 768px) {
        margin-left: unset;
        margin-right: unset;
        img {
            width: 64px;
            height: 64px;
        }
    }
`;

export const CustomerAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        p {
            text-align: center !important;
        }
    }
`;

export const NameField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    @media only screen and (max-width: 768px) {
        margin-bottom: 16px;
        align-items: center;
    }
`;