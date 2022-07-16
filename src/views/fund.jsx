import React from "react";
import styled from "styled-components";

import Empty from "../Components/Fund/Empty";
import TotalWidget from "../Components/Fund/TotalWidget";
import ListWidget from "../Components/Fund/ListWidget";

const Fund = () => (
  <React.Fragment>
    <TotalWidget />
    <ListWidget />
    <Empty />
  </React.Fragment>
);

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
`;

export default Fund;
