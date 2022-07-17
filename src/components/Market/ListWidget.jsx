import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Popup } from "@yandex/ui/Popup/desktop/bundle";

import { flexGap } from "../../Common/FlexGap";
import Select from "../UI/Select";
import Filter from "../Filter";
import FundCard from "../FundCard";

import { ReactComponent as FilterImage } from "../../Asset/Images/filter.svg";
import { ReactComponent as SearchImage } from "../../Asset/Images/search.svg";

const ListWidget = () => {
  const filterRef = useRef(null);
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Head>
        <SearchContainer>
          <SearchImageContainer>
            <SearchImage />
          </SearchImageContainer>
          <SearchInput
            defaultValue=""
            type="text"
            spellCheck={false}
            autoComplete="off"
            placeholder="Search for DeFund"
          />
        </SearchContainer>

        <DropdownFilterContainer>
          <Select
            //options={options.brand}
            placeholder="AUM"
            //value={brand}
            name="brand"
            //setValue={(val) => dispatch(setBrand(val))}
          />

          <FilterImageContainer
            ref={filterRef}
            onClick={() => setVisible(!visible)}
          >
            <FilterImage />
          </FilterImageContainer>
          <Popup
            target="anchor"
            anchor={filterRef}
            view="default"
            direction={["bottom-end"]}
            visible={visible}
            onClose={() => setVisible(false)}
            scope="inplace"
            motionless={true}
          >
            <Filter setVisible={setVisible} />
          </Popup>
        </DropdownFilterContainer>
      </Head>
      <WidgetContainer>
        <FundCard />
        <FundCard />
      </WidgetContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #fcfcfc;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
const DropdownFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 20px;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 24px;
  border-radius: 12px;
  background: #f4f4f4;
  width: 100%;
  max-width: 360px;
  user-select: none;
`;
const SearchImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
const SearchInput = styled.input`
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  background: #f4f4f4;
  border: none;
  outline: none;
  text-decoration: none !important;
  width: 100%;
`;
const FilterImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #efefef;
  border-radius: 8px;
  margin-left: 16px;
  background: #fff;
  cursor: pointer;
`;
const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${flexGap({ row: "24px", column: "24px" })}
`;

export default ListWidget;
