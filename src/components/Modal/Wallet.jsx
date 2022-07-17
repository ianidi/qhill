import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";

import "./Wallet.scss";

const WalletModal = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Modal
      theme="normal"
      onClose={() => setVisible(false)}
      visible={visible}
      zIndexGroupLevel={20}
      className="wallet__modal"
    >
      <Container>w</Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
`;

export default WalletModal;
