import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";

import { flexGap } from "../../Common/FlexGap";
import "./WalletModal.scss";

import { ReactComponent as BackImage } from "../../Asset/Images/back.svg";
import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";
import { ReactComponent as WalletImage } from "../../Asset/Images/Wallet/metamask.svg";

const CreateModal = ({ visible, setVisible }) => {
  const [click, setClick] = useState(false);

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
            <Title>You create a DeFund with the following parameters</Title>
          </TitleContainer>
          <CloseContainer onClick={() => setVisible(false)}>
            <CloseImage />
          </CloseContainer>
        </Head>

        <Divider />

        {!click ? (
          <React.Fragment></React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
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

export default CreateModal;
