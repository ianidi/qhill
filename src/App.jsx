import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import breakpoint from "./common/breakpoints";

const Page = () => <React.Fragment></React.Fragment>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="page/:key" element={<Page />} />
    </Routes>
  );
}

const Component = styled.div`
  @media only screen and (min-width: ${breakpoint.xs}) {
    display: none;
  }
  @media only screen and (min-width: ${breakpoint.sm}) {
    display: flex;
  }
  @media only screen and (min-width: ${breakpoint.lg}) {
    display: flex;
  }
`;

export default App;
