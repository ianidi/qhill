import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import breakpoint from "./common/breakpoints";
import Sidebar from "./components/layout/sidebar";

const Page = () => <React.Fragment>frferf</React.Fragment>;

function App() {
  return (
    <Layout>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer>
        <OverlayScrollbarsComponent
          options={{
            scrollbars: { autoHide: "never" },
          }}
          style={{ maxHeight: "100vh" }}
          className="os-theme-thin-dark"
        >
          <Content>
            <Routes>
              <Route path="/" element={<Page />} />
              <Route path="page/:key" element={<Page />} />
            </Routes>
          </Content>
        </OverlayScrollbarsComponent>
      </ContentContainer>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const SidebarContainer = styled.div`
  height: 100vh;
  width: 270px;
  @media screen and (max-width: 1480px) {
    width: 140px;
  }
`;

const ContentContainer = styled.div`
  height: 100vh;
  width: calc(100% - 270px);
  @media screen and (max-width: 1480px) {
    width: calc(100% - 140px);
  }
`;

const Content = styled.div`
  min-height: 100vh;
  padding-bottom: 130px;
  padding-left: 50px;
  padding-right: 50px;
`;

export default App;

// const Component = styled.div`
//   @media only screen and (min-width: ${breakpoint.xs}) {
//     display: none;
//   }
//   @media only screen and (min-width: ${breakpoint.sm}) {
//     display: flex;
//   }
//   @media only screen and (min-width: ${breakpoint.lg}) {
//     display: flex;
//   }
// `;
