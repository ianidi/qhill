import React from "react";
import styled from "styled-components";

const TotalWidget = () => (
  <React.Fragment>
    <TotalContainer />
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

export default TotalWidget;
