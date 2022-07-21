import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";
import { useWeb3React } from "@web3-react/core";

import { Web3Context } from "../../index";
import { flexGap } from "../../Common/FlexGap";
import "./WalletModal.scss";

import { ReactComponent as BackImage } from "../../Asset/Images/back.svg";
import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";
import { ReactComponent as WalletImage } from "../../Asset/Images/Wallet/metamask.svg";

const WalletModal = ({ visible, setVisible }) => {
  const [click, setClick] = useState(false);
  const { CoinbaseWallet, WalletConnect, Injected } = useContext(Web3Context);
  const { activate, deactivate } = useWeb3React();

  const wallet = [
    {
      title: "MetaMask",
      onClick: () => {
        activate(Injected);
      },
    },
    // { title: "Torus" },
    {
      title: "WalletConnect",
      onClick: () => {
        activate(WalletConnect);
      },
    },
    // { title: "Opera" },
    // { title: "Trezor" },
    // { title: "Fortmatic" },
    // { title: "Ledger" },
    // { title: "Authereum" },
    // { title: "Keystone" },
    {
      title: "Coinbase Wallet",
      onClick: () => {
        activate(CoinbaseWallet);
      },
    },
    // { title: "Portis" },
  ];

  return (
    <Modal
      theme="normal"
      onClose={() => setVisible(false)}
      visible={visible}
      zIndexGroupLevel={20}
    >
      <Container>
        <Head>
          <TitleContainer>
            <Dot />
            <Title>Select a Wallet</Title>
          </TitleContainer>
          <CloseContainer onClick={() => setVisible(false)}>
            <CloseImage />
          </CloseContainer>
        </Head>

        <Divider />

        {!click ? (
          <React.Fragment>
            <Caption>
              Please select a wallet to connect to QuantHill.defi
            </Caption>
            <WalletContainer>
              {wallet.map((wallet, index) => (
                <WalletItem key={index} onClick={wallet.onClick}>
                  <WalletImageContainer>
                    <WalletImage />
                  </WalletImageContainer>
                  <div>{wallet.title}</div>
                </WalletItem>
              ))}
            </WalletContainer>
          </React.Fragment>
        ) : (
          <InstallContainer>
            <WalletImageContainerLg>
              <WalletImage style={{ width: 32, height: 32 }} />
            </WalletImageContainerLg>
            <InstallTitle>MetaMask</InstallTitle>
            <InstallCaption>
              You'll need to install MetaMask to continue. Once you have it
              installed, go ahead and refresh the page.
            </InstallCaption>

            <ButtonsContainer>
              <ButtonBack onClick={() => setClick(false)}>
                <BackImage />
                Back to Wallets
              </ButtonBack>
              <ButtonOpen>Open MetaMask</ButtonOpen>
            </ButtonsContainer>
          </InstallContainer>
        )}
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fcfcfc;
  padding: 24px;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05),
    0px 32px 48px -8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(32px);
  border-radius: 16px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  display: flex;
  padding-right: 20px;
`;
const Dot = styled.div`
  margin-right: 16px;
  width: 16px;
  height: 32px;
  background: #2a85ff;
  border-radius: 4px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
const CloseContainer = styled.div`
  cursor: pointer;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 24px;
  margin-bottom: 24px;
`;
const Caption = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #6f767e;
  margin-bottom: 24px;
`;
const WalletContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexGap({ row: "8px", column: "24px" })}
`;
const WalletItem = styled.div`
  display: flex;
  align-items: center;
  width: calc(50% - 24px);
  padding: 16px;
  min-height: 64px;
  background: #f4f4f4;
  border: 2px solid #efefef;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  user-select: none;
  cursor: pointer;
`;
const WalletImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border-radius: 100px;
  margin-right: 12px;
`;
const InstallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WalletImageContainerLg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background: #f4f4f4;
  border-radius: 100px;
  margin-top: 32px;
  margin-bottom: 10px;
`;
const InstallTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  margin-bottom: 16px;
`;
const InstallCaption = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #6f767e;
  margin-bottom: 32px;
  max-width: 390px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 32px;
  ${flexGap({ row: "16px", column: "16px" })}
`;
const ButtonBack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  ${flexGap({ row: "8px", column: "8px" })}
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
`;
const ButtonOpen = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  border: 2px solid #2a85ff;
  border-radius: 12px;
  background: #2a85ff;
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

export default WalletModal;
