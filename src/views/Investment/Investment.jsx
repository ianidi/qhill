import React from "react";
// import styled from "styled-components";

import Empty from "../../Components/Investment/Empty";
import TotalWidget from "../../Components/Investment/TotalWidget";
import ListWidget from "../../Components/Fund/ListWidget";

const Investment = () => (
  <React.Fragment>
    <TotalWidget />
    <ListWidget />
    <Empty />
  </React.Fragment>
);

export default Investment;
