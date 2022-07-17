import React, { useState } from "react";
import styled from "styled-components";
import WalletModal from "../Modal/Wallet";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <div onClick={() => setVisible(true)}>Open menu</div>
      <WalletModal visible={visible} setVisible={setVisible} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default Navbar;
