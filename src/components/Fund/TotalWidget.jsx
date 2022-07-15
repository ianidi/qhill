import React from "react";
import styled from "styled-components";

import Select from "../UI/Select";

const TotalWidget = () => (
  <Container>
    <TitleContainer>
      <Title>Total DeFunds’ indicators</Title>
      <Select
        //options={options.brand}
        placeholder="Marke*"
        //value={brand}
        name="brand"
        //setValue={(val) => dispatch(setBrand(val))}
      />
    </TitleContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
const Title = styled.div`
  padding-right: 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;

export default TotalWidget;
