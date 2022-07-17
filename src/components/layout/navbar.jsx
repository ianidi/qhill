import React, { useState } from "react";
import styled from "styled-components";
import WalletModal from "../Modal/Wallet";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Container>
      menu
      <WalletModal />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default Navbar;
