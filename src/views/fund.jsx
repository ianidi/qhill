import React from "react";
import styled from "styled-components";

import Empty from "../Components/Fund/Empty";
import TotalWidget from "../Components/Fund/TotalWidget";
import ListWidget from "../Components/Fund/ListWidget";

import "./Fund.scss";

const Fund = () => (
  <React.Fragment>
    <TotalWidget />
    <ListWidget />
    <Empty />
  </React.Fragment>
);

export default Fund;
