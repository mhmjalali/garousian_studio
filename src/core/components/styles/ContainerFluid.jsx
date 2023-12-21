import styled from "styled-components";

const ContainerFluid = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 550px;
  }

  @media (min-width: 768px) {
    max-width: 740px;
  }

  @media (min-width: 992px) {
    max-width: 970px;
  }

  @media (min-width: 1200px) {
    max-width: 1180px;
  }

  @media (min-width: 1300px) {
    max-width: 1280px;
  }

  @media (min-width: 1400px) {
    max-width: 1380px;
  }
`;

export default ContainerFluid