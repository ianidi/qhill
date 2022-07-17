import React, { useState } from "react";
import styled from "styled-components";
import { Slider, useSliderState } from "@yandex/ui/Slider/desktop/bundle";
import { Checkbox } from "@yandex/ui/Checkbox/desktop/bundle";
import { Tumbler } from "@yandex/ui/Tumbler/desktop/bundle";
import { Radiobox, Radio } from "@yandex/ui/Radiobox/desktop/bundle";

import { flexGap } from "../Common/FlexGap";
import "./Filter.scss";

import { ReactComponent as CloseImage } from "../Asset/Images/close.svg";

const Filter = ({ setVisible }) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("value1");

  return (
    <Container>
      <Head>
        <TitleContainer>
          <Dot />
          <Title>Showing 39 of 121 funds</Title>
        </TitleContainer>
        <CloseContainer onClick={() => setVisible(false)}>
          <CloseImage />
        </CloseContainer>
      </Head>

      <Divider />

      <Label>AUM (USDT)</Label>
      <SliderComponent range={[0, 5000]} />
      <Divider />
      <Label>Risk</Label>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>High</div>
        <Checkbox label={false} size="m" view="default" checked={checked} />
      </ControlContainer>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>Medium</div>
        <Checkbox label={false} size="m" view="default" checked={checked} />
      </ControlContainer>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>Low</div>
        <Checkbox label={false} size="m" view="default" checked={checked} />
      </ControlContainer>

      <Divider />

      <Label>Validity period</Label>
      <Radiobox
        size="m"
        view="default"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <ControlContainer onClick={() => setValue("value1")}>
          <div>All</div>
          <Radio value="value1" />
        </ControlContainer>
        <ControlContainer onClick={() => setValue("value2")}>
          <div>{">"}3 months</div>
          <Radio value="value2" />
        </ControlContainer>
        <ControlContainer onClick={() => setValue("value3")}>
          <div>{">"}6 months</div>
          <Radio value="value3" />
        </ControlContainer>
        <ControlContainer onClick={() => setValue("value4")}>
          <div>{">"}12 months</div>
          <Radio value="value4" />
        </ControlContainer>
      </Radiobox>

      <Divider />

      <Label>Rating</Label>
      <SliderComponent range={[1, 5]} />

      <Divider />

      <Label>Options</Label>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>Extended RM</div>
        <Tumbler label={false} size="m" view="default" checked={checked} />
      </ControlContainer>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>KYC Manager</div>
        <Tumbler label={false} size="m" view="default" checked={checked} />
      </ControlContainer>
      <ControlContainer onClick={() => setChecked(!checked)}>
        <div>HWM</div>
        <Tumbler label={false} size="m" view="default" checked={checked} />
      </ControlContainer>

      <ButtonsContainer>
        <ButtonReset>Reset</ButtonReset>
        <ButtonApply>Apply</ButtonApply>
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 400px;
  background: #fcfcfc;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  display: flex;
  padding-right: 20px;
`;
const Dot = styled.div`
  margin-right: 16px;
  width: 16px;
  height: 32px;
  background: #2a85ff;
  border-radius: 4px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
`;
const CloseContainer = styled.div`
  cursor: pointer;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 24px;
  margin-bottom: 24px;
`;
const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  cursor: pointer;
  user-select: none;
  margin-top: 12px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
  ${flexGap("16px")}
`;
const ButtonReset = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  border: 2px solid #efefef;
  border-radius: 12px;
  background: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    /*background: #9d5eed20;*/
  }
`;

const ButtonApply = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  border: 2px solid #9d5eed;
  border-radius: 12px;
  background: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #9d5eed;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    /*background: #9d5eed20;*/
  }
`;

const SliderComponent = ({ step = 1, range }) => {
  const state = useSliderState({ value: range });

  return (
    <Slider
      filled
      step={step}
      view="default"
      min={range[0]}
      max={range[1]}
      {...state}
      renderThumb={(props, Thumb) => (
        <Thumb {...props} style={{ width: 40, height: 20, borderRadius: 4 }}>
          {props.value}
        </Thumb>
      )}
    />
  );
};

export default Filter;
