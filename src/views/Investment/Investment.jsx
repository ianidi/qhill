import React from "react";
// import styled from "styled-components";

import TotalWidget from "../../Components/Investment/TotalWidget";
import IncomeWidget from "../../Components/Investment/IncomeWidget";
import ListWidget from "../../Components/Investment/ListWidget";
import Empty from "../../Components/Investment/Empty";

const Investment = () => (
  <React.Fragment>
    <TotalWidget />
    <IncomeWidget />
    <ListWidget />
    <Empty />
  </React.Fragment>
);

export default Investment;
