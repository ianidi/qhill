import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useWeb3React } from "@web3-react/core";

import "./Sidebar.scss";
import { ReactComponent as LogoImage } from "../../Asset/Images/logo.svg";
import { ReactComponent as MarketImage } from "../../Asset/Images/market.svg";
import { ReactComponent as FundImage } from "../../Asset/Images/fund.svg";
import { ReactComponent as InvestmentImage } from "../../Asset/Images/investment.svg";

const Sidebar = () => {
  const { active } = useWeb3React();

  return (
    <Container>
      <Logo>
        <NavLink to="/">
          <LogoImage style={{ width: 163, height: 48 }} />
        </NavLink>
      </Logo>
      <div>
        <OverlayScrollbarsComponent
          options={{
            scrollbars: { autoHide: "never" },
          }}
          style={{ maxHeight: "80vh" }}
          className="os-theme-thin-dark"
        >
          <MenuItem
            icon={<MarketImage />}
            title="DeFunds Market"
            to="/market"
          />
          {active && (
            <React.Fragment>
              <MenuItem icon={<FundImage />} title="My DeFunds" to="/fund" />
              <MenuItem
                icon={<InvestmentImage />}
                title="My Investments"
                to="/investment"
              />
            </React.Fragment>
          )}
        </OverlayScrollbarsComponent>
      </div>
      <ThemeContainer>
        <Theme>Dark / light theme</Theme>
      </ThemeContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  @media screen and (min-width: 1480px) {
    display: none;
  }
`;

const Theme = styled.div`
  color: #737373;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

function MenuItem({ icon, title, to }) {
  return (
    <React.Fragment>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "menuLink__container menuLink_active"
            : "menuLink__container"
        }
      >
        <MenuLink>
          <Icon>{icon}</Icon>
          <MenuTitle>{title}</MenuTitle>
        </MenuLink>
      </NavLink>
    </React.Fragment>
  );
}
const MenuLink = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  @media screen and (min-width: 1480px) {
    margin-top: 0;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const MenuTitle = styled.div`
  margin-left: 24px;
  @media screen and (min-width: 1480px) {
    display: none;
  }
`;

export default Sidebar;
