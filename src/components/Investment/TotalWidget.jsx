import React from "react";
import styled from "styled-components";

import { flexGap } from "../../Common/FlexGap";
import Select from "../UI/Select";
import Numeral from "../UI/Numeral";

import { ReactComponent as GrowthImage } from "../../Asset/Images/growth.svg";
import { ReactComponent as BarsImage } from "../../Asset/Images/bars.svg";
import { ReactComponent as CommissionImage } from "../../Asset/Images/commission.svg";

const TotalWidget = () => {
  return (
    <Container>
      <Head>
        <TitleContainer>
          <Dot />
          <Title>Summary Investments indicators</Title>
        </TitleContainer>
        <Select
          //options={options.brand}
          placeholder="This month"
          //value={brand}
          name="brand"
          //setValue={(val) => dispatch(setBrand(val))}
        />
      </Head>
      <WidgetContainer>
        <AUMWidget>
          <GrowthImage />
          <WidgetTitle>
            Сurrent investments <WidgetCurrency>(USDT)</WidgetCurrency>
          </WidgetTitle>
          <WidgetVal>
            <Numeral>121212</Numeral>
          </WidgetVal>
          <WidgetGrowthContainer>
            <WidgetGrowth
              value={444}
              caption="USDT"
              containerStyle={{ background: "#fff" }}
            >
              invested
            </WidgetGrowth>
            <WidgetGrowth
              value={-900}
              caption="USDT"
              containerStyle={{ background: "#fff" }}
              negative
            >
              withdrawn
            </WidgetGrowth>
          </WidgetGrowthContainer>
        </AUMWidget>
        <Widget>
          <BarsImage />
          <WidgetTitle>
            Profit or loss <WidgetCurrency>(USDT)</WidgetCurrency>
          </WidgetTitle>
          <WidgetVal positive>
            +<Numeral>212</Numeral>
          </WidgetVal>
        </Widget>
        <Widget>
          <CommissionImage />
          <WidgetTitle>
            Profitability <WidgetCurrency>(%)</WidgetCurrency>
          </WidgetTitle>
          <WidgetVal negative>
            -<Numeral>55</Numeral>
          </WidgetVal>
        </Widget>
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
const TitleContainer = styled.div`
  display: flex;
  padding-right: 20px;
`;
const Dot = styled.div`
  margin-right: 16px;
  width: 16px;
  height: 32px;
  background: #68cb84;
  border-radius: 4px;
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
  ${flexGap({ row: "20px", column: "20px" })}
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
  background: #eaf6ef;
  border: 2px solid #eaf6ef;
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
const WidgetVal = styled.div`
  margin-top: 4px;
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: ${(item) =>
    item.negative ? "#d53a3a" : item.positive ? "#68CB84" : "#1a1d1f"};
`;

const WidgetGrowth = ({
  children,
  value,
  caption,
  negative = false,
  containerStyle = {},
}) => {
  return (
    <WidgetGrowthWrapper style={containerStyle}>
      {negative ? (
        <WidgetValue negative>
          {value} {caption}
        </WidgetValue>
      ) : (
        <WidgetValue positive>
          {value} {caption}
        </WidgetValue>
      )}
      &nbsp;{children}
    </WidgetGrowthWrapper>
  );
};
const WidgetGrowthContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${flexGap({ row: "3px", column: "3px" })}
`;
const WidgetGrowthWrapper = styled.div`
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
const WidgetValue = styled.span`
  margin-left: 4px;
  color: ${(item) =>
    item.negative ? "#d53a3a" : item.positive ? "#83bf6e" : "#1a1d1f"};
`;

export default TotalWidget;
