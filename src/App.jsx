import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import breakpoint from "./common/breakpoints";
import Sidebar from "./components/layout/sidebar";
import Navbar from "./components/layout/navbar";

const Page = () => (
  <React.Fragment>
    <div>frferf</div>
  </React.Fragment>
);

function App() {
  return (
    <Layout>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
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
  background-color: #fff;
  width: 270px;
  @media screen and (min-width: 1480px) {
    width: 140px;
  }
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #fff;
  border-left: 1px solid #f4f4f4;
  width: calc(100% - 270px);
  @media screen and (min-width: 1480px) {
    width: calc(100% - 140px);
  }
`;

const ContentContainer = styled.div`
  height: 100vh;
  width: calc(100% - 270px);
  @media screen and (min-width: 1480px) {
    width: calc(100% - 140px);
  }
`;

const Content = styled.div`
  min-height: 100vh;
  padding-top: 140px;
  padding-bottom: 130px;
  padding-left: 40px;
  padding-right: 40px;
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
