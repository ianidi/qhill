import React from "react";
import styled from "styled-components";
import { Button } from "@yandex/ui/Button/desktop/bundle";

import oops from "../../Asset/Images/oops.png";
import oops2x from "../../Asset/Images/oops@2x.png";
import oops3x from "../../Asset/Images/oops@3x.png";
import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";

const Empty = () => (
  <Container>
    <img src={oops} srcSet={`${oops2x} 2x, ${oops3x} 3x`} alt="" />
    <Title>You haven’t created any DeFunds yet</Title>
    <Caption>Create the DeFund and start trading</Caption>
    <Button view="default" size="m">
      <PlusImage />
      Create DeFund
    </Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 8px;
  min-height: calc(100vh - 180px);
  background: #fcfcfc;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #1a1d1f;
`;
const Caption = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #6f767e;
`;
export default Empty;
