import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Popup } from "@yandex/ui/Popup/desktop/bundle";

import { flexGap } from "../../Common/FlexGap";
import Select from "../UI/Select";

import { ReactComponent as AUMImage } from "../../Asset/Images/aum.svg";
import { ReactComponent as CommissionImage } from "../../Asset/Images/commission.svg";
import { ReactComponent as InvestorsImage } from "../../Asset/Images/investors.svg";
import { ReactComponent as PositiveImage } from "../../Asset/Images/positive.svg";
import { ReactComponent as NegativeImage } from "../../Asset/Images/negative.svg";
import { ReactComponent as FilterImage } from "../../Asset/Images/filter.svg";

const TotalWidget = () => {
  const filterRef = useRef(null);
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <TitleContainer>
        <Title>Total DeFunds’ indicators</Title>
        <Select
          //options={options.brand}
          placeholder="This month"
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
          style={{ maxWidth: 280 }}
          onClose={() => setVisible(false)}
          scope="inplace"
          motionless={true}
        >
          <FilterContainer>
            <div className="tooltip__handle">Popup</div>
          </FilterContainer>
        </Popup>
      </TitleContainer>
      <WidgetContainer>
        <AUMWidget>
          <AUMImage />
          <WidgetTitle>
            AUM <WidgetCurrency>(USDT)</WidgetCurrency>
          </WidgetTitle>
          <WidgetValue>121212</WidgetValue>
          <WidgetGrowth
            value={444}
            caption="USDT"
            containerStyle={{ background: "#fff" }}
          >
            this month
          </WidgetGrowth>
        </AUMWidget>
        <Widget>
          <CommissionImage />
          <WidgetTitle>
            Сommission <WidgetCurrency>(USDT)</WidgetCurrency>
          </WidgetTitle>
          <WidgetValue>6969</WidgetValue>
        </Widget>
        <Widget>
          <InvestorsImage />
          <WidgetTitle>Investors</WidgetTitle>
          <WidgetValue>55</WidgetValue>
          <WidgetGrowth value={8} caption="investors" negative>
            this month
          </WidgetGrowth>
        </Widget>
      </WidgetContainer>
    </Container>
  );
};

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
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #fcfcfc;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #fcfcfc;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
const Title = styled.div`
  padding-right: 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${flexGap("20px")}
`;
const Widget = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 400px;
  min-width: 300px;
  align-items: flex-start;
  flex: 1;
  padding: 32px;
  background: #ffffff;
  border: 2px solid #f4f4f4;
  border-radius: 12px;
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: none;
    min-width: auto;
    flex: 0 auto;
  }
`;
const AUMWidget = styled(Widget)`
  background: #efedfd;
  border: 2px solid #efedfd;
`;
const WidgetTitle = styled.div`
  margin-top: 16px;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #33383f;
`;
const WidgetCurrency = styled.span`
  color: #6f767e;
`;
const WidgetValue = styled.div`
  margin-top: 4px;
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: #1a1d1f;
`;

const WidgetGrowth = ({
  children,
  value,
  caption,
  negative = false,
  containerStyle = {},
}) => {
  return (
    <WidgetGrowthContainer style={containerStyle}>
      {!negative ? (
        <React.Fragment>
          <PositiveImage />
          <WidgetValuePositive>
            {value} {caption}
          </WidgetValuePositive>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NegativeImage />
          <WidgetValueNegative>
            {value} {caption}
          </WidgetValueNegative>
        </React.Fragment>
      )}
      &nbsp;{children}
    </WidgetGrowthContainer>
  );
};
const WidgetGrowthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  background: #f4f4f4;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
const WidgetValuePositive = styled.span`
  margin-left: 4px;
  color: #83bf6e;
`;
const WidgetValueNegative = styled.span`
  margin-left: 4px;
  color: #d53a3a;
`;

export default TotalWidget;
