import React from "react";
import styled from "styled-components";

import { flexGap } from "../../Common/FlexGap";

const YieldWidget = () => {
  return (
    <Container>
      <ChartContainer>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>Chart of yield</Title>
          </TitleContainer>
        </Head>
      </ChartContainer>
      <ROIContainer>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>Return summary</Title>
          </TitleContainer>
        </Head>
      </ROIContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexGap({ row: "8px", column: "8px" })}
  margin-bottom: 8px;
`;
const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(67% - 4px);
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
`;
const ROIContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33% - 4px);
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
const TitleContainer = styled.div`
  display: flex;
  padding-right: 20px;
`;
const Dot = styled.div`
  margin-right: 16px;
  width: 16px;
  height: 32px;
  background: #68cb84;
  border-radius: 4px;
`;
const Title = styled.div`
  padding-right: 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
const TableHead = styled.div`
  background: #ffffff;
  padding: 12px;
  min-height: 52px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.01em;
  color: #6f767e;
  ${flexGap({ row: "12px", column: "8px" })}
`;

export default YieldWidget;
