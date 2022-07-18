import React from "react";
import styled from "styled-components";

import YieldChart from "../Chart/YieldChart";
import { flexGap } from "../../Common/FlexGap";

const YieldWidget = () => {
  return (
    <Container>
      <ChartWidgetContainer>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>Chart of yield</Title>
          </TitleContainer>
        </Head>

        <ChartContainer>
          <YieldChart type="invest" />
        </ChartContainer>
      </ChartWidgetContainer>
      <ROIContainer>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>Return summary</Title>
          </TitleContainer>
        </Head>
        <TitleRow>
          <div>Max drawdown</div>
          <div>72%</div>
        </TitleRow>
        <CaptionRow>
          <div>Current</div>
          <div>9%</div>
        </CaptionRow>
        <Divider />
        <TitleRow>
          <div>All time income</div>
          <div>136%</div>
        </TitleRow>
        <CaptionRow>
          <div>Max</div>
          <div>147%</div>
        </CaptionRow>
        <Divider />
        <TitleRow>
          <div>Max drawdown</div>
          <div>84 days</div>
        </TitleRow>
        <CaptionRow>
          <div>Current</div>
          <div>21 days</div>
        </CaptionRow>
        <Divider />
        <TitleRow>
          <div>Sharpe ratio</div>
          <div>2</div>
        </TitleRow>
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
const ChartWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(67% - 4px);
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
`;
const ChartContainer = styled.div`
  display: block;
  width: 100%;
  overflow: visible;
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
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
`;
const CaptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #9a9fa5;
`;

export default YieldWidget;
