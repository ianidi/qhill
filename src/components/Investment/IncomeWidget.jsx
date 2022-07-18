import React from "react";
import styled from "styled-components";

import { flexGap } from "../../Common/FlexGap";
import Numeral from "../UI/Numeral";

const IncomeWidget = () => {
  return (
    <Container>
      <Head>
        <TitleContainer>
          <Dot />
          <Title>Monthly income</Title>
        </TitleContainer>
      </Head>

      <TableContainer>
        <TableHead>
          <TableCol />
          <TableCol>Jan</TableCol>
          <TableCol>Feb</TableCol>
          <TableCol>Mar</TableCol>
          <TableCol>Apr</TableCol>
          <TableCol>May</TableCol>
          <TableCol>Jun</TableCol>
          <TableCol>Jul</TableCol>
          <TableCol>Aug</TableCol>
          <TableCol>Sep</TableCol>
          <TableCol>Oct</TableCol>
          <TableCol>Nov</TableCol>
          <TableCol>Dec</TableCol>
          <TableCol>
            <TextTotal>Total</TextTotal>
          </TableCol>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCol>
              <div>2022</div>
            </TableCol>
            <TableCol negative>-48.9%</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>
              <Total negative>2.32%</Total>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <div>2021</div>
            </TableCol>
            <TableCol negative>-12.9%</TableCol>
            <TableCol positive>12.51%</TableCol>
            <TableCol positive>8.51%</TableCol>
            <TableCol positive>5.6%</TableCol>
            <TableCol negative>-34.6%</TableCol>
            <TableCol positive>3.25%</TableCol>
            <TableCol negative>-7.65%</TableCol>
            <TableCol positive>70.8%</TableCol>
            <TableCol negative>-1.2%</TableCol>
            <TableCol negative>-2.65%</TableCol>
            <TableCol positive>2.32%</TableCol>
            <TableCol positive>7.84%</TableCol>
            <TableCol>
              <Total positive>23.9%</Total>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <div>2020</div>
            </TableCol>
            <TableCol negative>-7.65%</TableCol>
            <TableCol positive>70.8%</TableCol>
            <TableCol negative>-1.2%</TableCol>
            <TableCol negative>-2.65%</TableCol>
            <TableCol positive>2.32%</TableCol>
            <TableCol positive>7.84%</TableCol>
            <TableCol negative>-12.9%</TableCol>
            <TableCol positive>12.51%</TableCol>
            <TableCol positive>8.51%</TableCol>
            <TableCol positive>5.6%</TableCol>
            <TableCol negative>-34.6%</TableCol>
            <TableCol positive>3.25%</TableCol>
            <TableCol>
              <Total negative>-48.9%</Total>
            </TableCol>
          </TableRow>
          <TableRow />
        </TableBody>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 8px;
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
const TableContainer = styled.div`
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 8px;
  overflow: hidden;
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
const TableCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: calc(7.14% - 8px);
  padding-left: 8px;
  padding-right: 8px;
  &:first-child {
    text-align: initial;
    justify-content: flex-start;
  }
  color: ${(item) =>
    item.negative ? "#FF6A55" : item.positive ? "#68CB84" : "inherit"};
`;
const TableBody = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
`;
const TableRow = styled.div`
  padding: 12px;
  background: #ffffff;
  min-height: 52px;
  display: flex;
  align-items: center;
  ${flexGap({ row: "12px", column: "8px" })}
  &:nth-child(odd) {
    background: rgba(244, 244, 244, 0.5);
  }
  &:last-child {
    min-height: auto;
  }
`;
const TextTotal = styled.span`
  color: #1a1d1f;
`;
const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.01em;
  background: ${(item) =>
    item.negative ? "#FF6A55" : item.positive ? "#68CB84" : "#f4f4f4"};
  color: ${(item) =>
    item.negative ? "#fff" : item.positive ? "#1A1D1F" : "#1a1d1f"};
`;

export default IncomeWidget;
