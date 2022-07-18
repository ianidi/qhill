import React, { useState } from "react";
import styled from "styled-components";
import Blockies from "react-blockies";
import { useNavigate } from "react-router-dom";

import WalletModal from "../Modal/WalletModal";
import Select from "../UI/Select";

const Navbar = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <div onClick={() => setVisible(true)}>
          <b>Click</b> to connect wallet
        </div>
        <RightContainer>
          <Select
            //options={options.brand}
            placeholder="EN"
            //value={brand}
            name="lng"
            //setValue={(val) => dispatch(setBrand(val))}
          />
          <BlockiesContainer onClick={() => navigate("/profile")}>
            <Blockies seed="Jeremy" size={16} scale={3} />
          </BlockiesContainer>
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

export default Navbar;
