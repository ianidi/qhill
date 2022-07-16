import React from "react";
import styled from "styled-components";
import Blockies from "react-blockies";

import AreaChart from "./Chart/AreaChart";
import { flexGap } from "../Common/FlexGap";

import { ReactComponent as BtcImage } from "../Asset/Images/Logo/btc.svg";
import { ReactComponent as CopyImage } from "../Asset/Images/copy.svg";
import NetworkLogoImage from "../Asset/Images/network_logo.png";

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
                onClick={() => {
                  navigator.clipboard.writeText("Copy this text to clipboard");
                }}
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
    </Top>
    <ChartContainer>
      <AreaChart />
    </ChartContainer>
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
  margin-bottom: 16px;
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

const ChartContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
  overflow: visible;
`;
export default FundCard;

// display: flex;
// align-items: center;
// justify-content: center;
// padding: 8px 16px;
// margin-right: 8px;
// border-radius: 8px;
// background: ${(item) => (item.active ? "#efefef" : "transparent")};
// font-weight: 600;
// font-size: 15px;
// line-height: 24px;
// letter-spacing: -0.01em;
// color: #1a1d1f;
// cursor: pointer;
// user-select: none;
// transition: all 300ms;
// &:hover {
//   background: #e4e4e4;
// }
