import styled from "styled-components";

export const ServiceGridSystem = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 3fr 5fr;
    @media only screen and (max-width: 1200px) {
        grid-template-rows: 1fr 5fr;
    }
`;

export const ServicesBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const TextBox = styled.div`
    display: flex;
    margin-bottom: 40px;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;