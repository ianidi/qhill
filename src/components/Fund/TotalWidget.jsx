import React from "react";
import styled from "styled-components";

import { flexGap } from "../../Common/FlexGap";
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
    <WidgetContainer>
      <Widget>hi</Widget>
      <Widget>hi1</Widget>
      <Widget>hi23</Widget>
    </WidgetContainer>
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
const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  ${flexGap("20px")}
`;
const Widget = styled.div`
  display: flex;
  min-height: 100px;
  max-width: 320px;
  min-width: 300px;
  align-items: flex-start;
  flex: 1;
  background-color: #be0b0b;
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: none;
    min-width: auto;
    flex: 0 auto;
  }
`;

export default TotalWidget;
