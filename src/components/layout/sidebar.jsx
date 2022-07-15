import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { ReactComponent as LogoImage } from "../../asset/images/logo.svg";

const Sidebar = () => (
  <React.Fragment>
    <Container>
      <Logo>
        <Link to={"/"}>
          <LogoImage style={{ width: 163, height: 48 }} />
        </Link>
      </Logo>
      <div>
        <OverlayScrollbarsComponent
          options={{
            scrollbars: { autoHide: "never" },
          }}
          style={{ maxHeight: "80vh" }}
          className="os-theme-thin-dark"
        >
          {/*menu.map((header, index) => (
              <div key={index}>
                <MenuHeader {...header} />
                {header.links.map((link, index_2) => (
                  <MenuLink key={index_2} {...link} />
                ))}
              </div>
                ))*/}

          <div className="signout__container">
            <div className="signout">sign out</div>
          </div>
        </OverlayScrollbarsComponent>
      </div>
    </Container>

    <style jsx>{`
      .signout__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 30px;
      }
      .signout {
        margin-top: 20px;
        margin-bottom: 50px;
        margin-left: 44px;
        color: #737373;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
      }
      @media screen and (max-width: 1480px) {
        .signout__container {
          display: none;
        }
      }
    `}</style>
  </React.Fragment>
);

const Container = styled.div`
  padding: 24px;
  background: #fff;
  height: 100%;
  box-shadow: 10px 10px 20px #f2f2f7;
  @media screen and (min-width: 1480px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export default Sidebar;
