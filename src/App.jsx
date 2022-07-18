import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

//import breakpoint from "./common/breakpoints";
import Sidebar from "./Components/Layout/Sidebar";
import Navbar from "./Components/Layout/Navbar";
import Market from "./Views/Market";
import Fund from "./Views/Fund/Fund";
import FundCreate from "./Views/Fund/Create";
import Investment from "./Views/Investment/Investment";

const Page = () => (
  <React.Fragment>
    <div>Hello</div>
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
          style={{ maxHeight: "calc(100vh - 100px)" }}
          className="os-theme-thin-dark"
        >
          <Content>
            <Routes>
              <Route path="/" element={<Page />} />
              <Route path="/market" element={<Market />} />
              <Route path="/fund" element={<Fund />} />
              <Route path="/fund/create" element={<FundCreate />} />
              <Route path="/investment" element={<Investment />} />
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
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
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
  z-index: 100;
  height: 100px;
  display: flex;
  align-items: center;
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
  position: fixed;
  top: 100px;
  right: 0;
  bottom: 0;
  width: calc(100% - 270px);
  @media screen and (min-width: 1480px) {
    width: calc(100% - 140px);
  }
`;

const Content = styled.div`
  /* min-height: calc(100vh + 500px); */
  padding-top: 40px;
  padding-bottom: 40px;
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
