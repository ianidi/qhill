import React, { useState } from "react";
import styled from "styled-components";
import Blockies from "react-blockies";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { useSelector } from "react-redux";

import { selectWallet } from "../../Store/AppSlice";
import WalletModal from "../Modal/WalletModal";
import Select from "../UI/Select";
import { toHex } from "../../Common/Utils";
import { ReactComponent as ConnectOffImage } from "../../Asset/Images/connect_off.svg";
import { ReactComponent as ConnectOnImage } from "../../Asset/Images/connect_on.svg";

const networks = [
  { id: 1, label: "Mainnet" },
  { id: 3, label: "Ropsten" },
  { id: 4, label: "Rinkeby" },
  { id: 42, label: "Kovan" },
  { id: 69, label: "Optimism Kovan (testnet)" },
];

const networkParams = {
  "0x45": {
    chainId: "0x45",
    rpcUrls: ["https://kovan.optimism.io"],
    chainName: "Optimism Kovan",
    nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
    blockExplorerUrls: ["https://kovan-optimistic.etherscan.io/"],
    iconUrls: [
      "https://assets-global.website-files.com/611dbb3c82ba72fbc285d4e2/611fd32ef63b79b5f8568d58_OPTIMISM-logo.svg",
    ],
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const { library, chainId, account, active } = useWeb3React();
  const wallet = useSelector(selectWallet);

  const [visible, setVisible] = useState(false);

  const switchNetwork = async ({ network }) => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]],
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const selectedNetwork = networks.find((item) => item.id === chainId) || null;

  return (
    <React.Fragment>
      <Container>
        <LeftContainer>
          {!active ? (
            <ConnectContainer onClick={() => setVisible(true)}>
              <ConnectImageContainer>
                <ConnectOffImage />
              </ConnectImageContainer>
              <div>Connect Wallet</div>
            </ConnectContainer>
          ) : (
            <React.Fragment>
              <ConnectContainer onClick={() => setVisible(true)}>
                <ConnectImageContainer>
                  <ConnectOnImage />
                </ConnectImageContainer>
                <div>{wallet}</div>
              </ConnectContainer>

              <Select
                options={networks}
                placeholder="Network"
                value={selectedNetwork}
                name="network"
                setValue={(val) => switchNetwork({ network: val.id })}
              />
            </React.Fragment>
          )}
        </LeftContainer>
        <RightContainer>
          <Select
            //options={options.brand}
            placeholder="EN"
            //value={brand}
            name="lng"
            //setValue={(val) => dispatch(setBrand(val))}
          />
          {active && (
            <BlockiesContainer onClick={() => navigate("/profile")}>
              <Blockies seed={account} size={16} scale={3} />
            </BlockiesContainer>
          )}
        </RightContainer>
      </Container>
      <WalletModal visible={visible} setVisible={setVisible} />
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const BlockiesContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;
  cursor: pointer;
`;
const ConnectContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 320px;
  /* min-height: 48px; */
  border: 2px solid #efefef;
  padding: 8px;
  margin-right: 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  cursor: pointer;
`;
const ConnectImageContainer = styled.div`
  margin-right: 8px;
  width: 34px;
  height: 34px;
`;

export default Navbar;
