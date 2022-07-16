import React from "react";
import styled from "styled-components";
import Blockies from "react-blockies";

import AreaChart from "./Chart/AreaChart";
import { flexGap } from "../Common/FlexGap";

import { ReactComponent as BtcImage } from "../Asset/Images/Logo/btc.svg";
import { ReactComponent as CopyImage } from "../Asset/Images/copy.svg";
import NetworkLogoImage from "../Asset/Images/network_logo.png";
import { ReactComponent as PositiveImage } from "../Asset/Images/positive.svg";
import { ReactComponent as NegativeImage } from "../Asset/Images/negative.svg";

const FundCard = () => (
  <Container>
    <Top>
      <Head>
        <LogoContainer>
          <BtcImage />
        </LogoContainer>
        <HeadInfo>
          <HeadTitleContainer>
            <HeadTitle>MidCapCoin</HeadTitle>
            <Performance color="green">2.8</Performance>
          </HeadTitleContainer>
          <HeadMemberContainer>
            <BlockiesContainer>
              <Blockies seed="Jeremy" size={8} scale={3} />
            </BlockiesContainer>
            <div>Tonny Montana</div>
            <Separator />
            <MemberWallet>
              <MemberWalletAddress>
                oxh8239frngjregkjnrekgjgjrengkjerngkjrengkrejgn
              </MemberWalletAddress>
              <CopyContainer
                onClick={() =>
                  navigator.clipboard.writeText("Copy this text to clipboard")
                }
              >
                <CopyImage />
              </CopyContainer>
            </MemberWallet>
          </HeadMemberContainer>
        </HeadInfo>
      </Head>
      <NetworkContainer>
        <NetworkItem>
          <img
            src={NetworkLogoImage}
            alt=""
            style={{ width: 16, height: 16 }}
          />
          <div>DeBank</div>
        </NetworkItem>
        <NetworkItem>
          <img
            src={NetworkLogoImage}
            alt=""
            style={{ width: 16, height: 16 }}
          />
          <div>Zerion</div>
        </NetworkItem>
      </NetworkContainer>
      <TableContainer>
        <TableColumn>
          <TableRow>
            AUM:&nbsp;<TableTextPurple>24 342 USDT</TableTextPurple>
          </TableRow>
          <TableRow>
            Funds receipt:&nbsp;<TableTextBlack>387 USDT (3)</TableTextBlack>
          </TableRow>
          <TableRow>
            Withdrawal:&nbsp;<TableTextBlack>3500 USDT (1)</TableTextBlack>
          </TableRow>
          <TableRow>
            Must be paid:&nbsp;<TableTextBlack>3113 USDT</TableTextBlack>
          </TableRow>
        </TableColumn>
        <TableColumn>
          <TableRow>
            Report period:&nbsp;<TableTextBlack>1 week</TableTextBlack>
          </TableRow>
          <TableClockRow>
            <div>Next report</div>
            <Clock>
              <ClockItem>2d</ClockItem>
              <div>:</div>
              <ClockItem>16h</ClockItem>
              <div>:</div>
              <ClockItem>24m</ClockItem>
            </Clock>
          </TableClockRow>
        </TableColumn>
      </TableContainer>

      <TableContainer>
        <TableColumnLg>
          <TableRow>
            Income:&nbsp;
            <WidgetGrowth value={6} caption="%" />
          </TableRow>
          <TableRow>
            Commission earned:&nbsp;<TableTextBlack>245658 USDT</TableTextBlack>
          </TableRow>
          <TableRow>
            Total investors:&nbsp;<TableTextBlack>133</TableTextBlack>
          </TableRow>
        </TableColumnLg>
      </TableContainer>

      <TableContainer>
        <TableColumn>
          <TableRow>
            AUM:&nbsp;<TableTextBlack>24 342 USDT</TableTextBlack>
          </TableRow>
          <TableRow>
            Annual yield:&nbsp;
            <WidgetGrowth value={37.8} caption="%" />
          </TableRow>
          <TableRow>
            Investors:&nbsp;<TableTextBlack>26</TableTextBlack>
          </TableRow>
        </TableColumn>
        <TableColumn>
          <TableRow>
            HWM:&nbsp;<TableTextBlack>no</TableTextBlack>
          </TableRow>
          <TableRow>
            Max DD:&nbsp;<TableTextBlack>34%</TableTextBlack>
          </TableRow>
          <TableRow>
            Invested:&nbsp;<TableTextGreen>356 USDT</TableTextGreen>
          </TableRow>
        </TableColumn>
      </TableContainer>
    </Top>
    <ChartContainer>
      <AreaChart />
    </ChartContainer>
    <ButtonsContainer>
      <ButtonDetails>Details</ButtonDetails>
      <ButtonTrade>Trade</ButtonTrade>
    </ButtonsContainer>
    <ButtonsContainer>
      <ButtonDetails>Details</ButtonDetails>
      <ButtonInvest>Invest</ButtonInvest>
    </ButtonsContainer>
    <ButtonsContainer>
      <ButtonDetails>Details</ButtonDetails>
      <ButtonWithdraw>Withdraw</ButtonWithdraw>
    </ButtonsContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: calc(50% - 12px);
  align-items: flex-start;
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
const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;
const LogoContainer = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;
const HeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const HeadTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeadTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
const Performance = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px 8px;
  border-radius: 6px;
  background: ${(item) =>
    item.color === "red"
      ? "#FAC8C8"
      : item.color === "yellow"
      ? "#FBDEB3"
      : "#B5E4CA"};
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
`;
const HeadMemberContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #9a9fa5;
`;
const BlockiesContainer = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
`;
const Separator = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  width: 2px;
  height: 8px;
  background: #efefef;
  border-radius: 2px;
`;
const MemberWallet = styled.div`
  display: flex;
  align-items: center;
`;
const MemberWalletAddress = styled.div`
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CopyContainer = styled.div`
  margin-left: 8px;
  cursor: pointer;
`;
const NetworkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
  ${flexGap("8px")}
`;
const NetworkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  background: #f4f4f4;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  ${flexGap("4px")}
`;
const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  ${flexGap("16px")}
`;
const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 16px);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
const TableColumnLg = styled(TableColumn)`
  width: calc(100% - 16px);
`;
const TableTextPurple = styled.span`
  color: #9d5eed;
`;
const TableTextBlack = styled.span`
  color: #1a1d1f;
`;
const TableTextGreen = styled.span`
  color: #68cb84;
`;
const TableRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 6px;
`;
const TableClockRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;
const Clock = styled.div`
  display: flex;
  color: #1a1d1f;
  margin-top: 6px;
  ${flexGap("4px")}
`;
const ClockItem = styled.div`
  padding: 0px 7px;
  background: #efefef;
  border-radius: 6px;
`;
const ChartContainer = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  overflow: visible;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  ${flexGap("16px")}
`;
const ButtonDetails = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  border: 2px solid #efefef;
  border-radius: 12px;
  background: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    /*background: #9d5eed20;*/
  }
`;

const ButtonTrade = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  border: 2px solid #9d5eed;
  border-radius: 12px;
  background: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #9d5eed;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    /*background: #9d5eed20;*/
  }
`;
const ButtonInvest = styled(ButtonTrade)`
  border: 2px solid #2a85ff;
  color: #2a85ff;
`;
const ButtonWithdraw = styled(ButtonTrade)`
  border: 2px solid #68cb84;
  color: #68cb84;
`;

const WidgetGrowth = ({ children, value, caption, negative = false }) => {
  return (
    <WidgetGrowthContainer>
      {!negative ? <PositiveImage /> : <NegativeImage />}
      <WidgetValue>
        {value} {caption}
      </WidgetValue>
      &nbsp;{children}
    </WidgetGrowthContainer>
  );
};
const WidgetGrowthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin-left: 4px;
  border-radius: 4px;
  background: ${(val) => (val.negative ? "#d53a3a40" : "#83bf6e40")};
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: ${(val) => (val.negative ? "#d53a3a" : "#83bf6e")};
`;
const WidgetValue = styled.span`
  margin-left: 4px;
`;
export default FundCard;
