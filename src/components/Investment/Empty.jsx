import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { flexGap } from "../../Common/FlexGap";

import oops from "../../Asset/Images/oops.png";
import oops2x from "../../Asset/Images/oops@2x.png";
import oops3x from "../../Asset/Images/oops@3x.png";
import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";

const Empty = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={oops} srcSet={`${oops2x} 2x, ${oops3x} 3x`} alt="" />
      <Title>You don’t have any investments yet</Title>
      <Caption>Go to the Market and choose the DeFund to invest</Caption>
      <ButtonBlue onClick={() => navigate("/market")}>
        <PlusImage />
        To DeFunds Market
      </ButtonBlue>
    </Container>
  );
};

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
const ButtonBlue = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  ${flexGap({ row: "8px", column: "8px" })};
  background: #2a85ff;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #ffffff;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: #3a8cf9;
  }
`;
export default Empty;
