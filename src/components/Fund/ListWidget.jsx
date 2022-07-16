import React from "react";
import styled from "styled-components";
import { Button } from "@yandex/ui/Button/desktop/bundle";

import { flexGap } from "../../Common/FlexGap";

import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";

const ListWidget = () => (
  <Container>
    <TitleContainer>
      <SwitchTitleContainer>
        <Title>Managed DeFunds</Title>
        <SwitchContainer>
          <SwitchItem active>Active</SwitchItem>
          <SwitchItem>Closed</SwitchItem>
        </SwitchContainer>
      </SwitchTitleContainer>

      <ButtonCreate>
        <PlusImage />
        Create DeFund
      </ButtonCreate>
    </TitleContainer>
    <WidgetContainer></WidgetContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #fcfcfc;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
const SwitchTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 20px;
`;
const Title = styled.div`
  margin-right: 65px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const SwitchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 8px;
  background: ${(item) => (item.active ? "#efefef" : "transparent")};
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  cursor: pointer;
  user-select: none;
  transition: all 300ms;
  &:hover {
    background: #e4e4e4;
  }
`;
const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${flexGap("20px")}
`;
const Widget = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 400px;
  min-width: 300px;
  align-items: flex-start;
  flex: 1;
  padding: 32px;
  background: #ffffff;
  border: 2px solid #f4f4f4;
  border-radius: 12px;
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: none;
    min-width: auto;
    flex: 0 auto;
  }
`;
const ButtonCreate = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  ${flexGap("8px")}
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

export default ListWidget;
