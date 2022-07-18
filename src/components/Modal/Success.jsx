import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { flexGap } from "../../Common/FlexGap";

import hand from "../../Asset/Images/hand.png";
import hand2x from "../../Asset/Images/hand@2x.png";
import hand3x from "../../Asset/Images/hand@3x.png";
import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";

const Success = ({ setVisible }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Head>
        <CloseContainer onClick={() => setVisible(false)}>
          <CloseImage />
        </CloseContainer>
      </Head>
      <Container>
        <img src={hand} srcSet={`${hand2x} 2x, ${hand3x} 3x`} alt="" />
        <Title>Success!</Title>
        <Caption>DeFund “MidCapCoin” was successfully created</Caption>{" "}
        <ButtonBlue onClick={() => navigate("/fund")}>Done!</ButtonBlue>
      </Container>
    </React.Fragment>
  );
};

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const CloseContainer = styled.div`
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
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
  margin-top: 20px;
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

export default Success;
