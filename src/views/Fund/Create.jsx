import React, { useState, useRef } from "react";
import styled from "styled-components";
import FroalaEditorComponent from "react-froala-wysiwyg";
import { Checkbox } from "@yandex/ui/Checkbox/desktop/bundle";
import { Tumbler } from "@yandex/ui/Tumbler/desktop/bundle";
import { TooltipStateful } from "@yandex/ui/Tooltip/desktop/bundle";

import "froala-editor/js/plugins.pkgd.min.js";
// import "froala-editor/js/languages/fr.js";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "./Create.scss";

import { flexGap } from "../../Common/FlexGap";
import Select from "../../Components/UI/Select";
import Tagify from "../../Components/UI/Tagify";
import CreateModal from "../../Components/Modal/CreateModal";

import AvatarPlaceholderImage from "../../Asset/Images/AvatarPlaceholder.png";
import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";
import { ReactComponent as InfoImage } from "../../Asset/Images/info.svg";

const FundCreate = () => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);

  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  return (
    <React.Fragment>
      <Title>Create DeFund</Title>
      <Container>
        <SectionTitle>
          <Dot />
          <div>Main info</div>
        </SectionTitle>

        <AvatarUploadContainer>
          <AvatarImageContainer>
            <img src={AvatarPlaceholderImage} alt="" />
          </AvatarImageContainer>
          <input type="file" style={{ display: "none" }} ref={fileInput} />
          <ButtonBlue onClick={selectFile}>
            <PlusImage />
            Upload new picture
          </ButtonBlue>
        </AvatarUploadContainer>

        <Label>Name</Label>
        <InputContainer>
          <Input
            defaultValue=""
            type="text"
            spellCheck={false}
            autoComplete="off"
            placeholder="Enter name"
          />
        </InputContainer>

        <Label>Description</Label>
        <FroalaEditorComponent
          config={{
            placeholderText: "Enter description",
            charCounterCount: false,
            heightMin: 150,
          }}
          tag="textarea"
          model={value}
          onModelChange={(val) => setValue(val)}
        />
        <Divider />

        <SectionTitle>
          <Dot />
          <div>Commissions</div>
        </SectionTitle>

        <CommissionInputContainer>
          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Subscribtion fee (SF)</div>
              <InfoImageContainer>
                <TooltipStateful
                  view="default"
                  size="m"
                  hasTail
                  direction={["bottom", "right"]}
                  content="Stateful hover"
                >
                  <div className="info__tooltip">
                    <InfoImage />
                  </div>
                </TooltipStateful>
              </InfoImageContainer>
            </InputLabelContainer>
            <InputCommissionContainer>
              <InputBefore>%</InputBefore>
              <InputWrapper>
                <InputCommission
                  defaultValue=""
                  type="text"
                  spellCheck={false}
                  autoComplete="off"
                />
              </InputWrapper>
            </InputCommissionContainer>
          </CommissionInputWrapper>

          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Management fee (MF)</div>
              <InfoImageContainer>
                <TooltipStateful
                  view="default"
                  size="m"
                  hasTail
                  direction={["bottom", "right"]}
                  content="Stateful hover"
                >
                  <div className="info__tooltip">
                    <InfoImage />
                  </div>
                </TooltipStateful>
              </InfoImageContainer>
            </InputLabelContainer>
            <InputCommissionContainer>
              <InputBefore>%</InputBefore>
              <InputWrapper>
                <InputCommission
                  defaultValue=""
                  type="text"
                  spellCheck={false}
                  autoComplete="off"
                />
              </InputWrapper>
            </InputCommissionContainer>
          </CommissionInputWrapper>

          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Performance fee (PF)</div>
              <InfoImageContainer>
                <TooltipStateful
                  view="default"
                  size="m"
                  hasTail
                  direction={["bottom", "right"]}
                  content="Stateful hover"
                >
                  <div className="info__tooltip">
                    <InfoImage />
                  </div>
                </TooltipStateful>
              </InfoImageContainer>
            </InputLabelContainer>
            <InputCommissionContainer>
              <InputBefore>%</InputBefore>
              <InputWrapper>
                <InputCommission
                  defaultValue=""
                  type="text"
                  spellCheck={false}
                  autoComplete="off"
                />
              </InputWrapper>
            </InputCommissionContainer>
          </CommissionInputWrapper>

          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Period</div>
              <InfoImageContainer>
                <TooltipStateful
                  view="default"
                  size="m"
                  hasTail
                  direction={["bottom", "right"]}
                  content="Stateful hover"
                >
                  <div className="info__tooltip">
                    <InfoImage />
                  </div>
                </TooltipStateful>
              </InfoImageContainer>
            </InputLabelContainer>
            <Select
              //options={options.brand}
              placeholder="Period"
              //value={brand}
              name="brand"
              //setValue={(val) => dispatch(setBrand(val))}
            />
          </CommissionInputWrapper>

          <CommissionInputWrapper>
            <InputLabelContainer>
              <div>Indent</div>
              <InfoImageContainer>
                <TooltipStateful
                  view="default"
                  size="m"
                  hasTail
                  direction={["bottom", "right"]}
                  content="Stateful hover"
                >
                  <div className="info__tooltip">
                    <InfoImage />
                  </div>
                </TooltipStateful>
              </InfoImageContainer>
            </InputLabelContainer>
            <Select
              //options={options.brand}
              placeholder="Indent"
              //value={brand}
              name="brand"
              //setValue={(val) => dispatch(setBrand(val))}
            />
          </CommissionInputWrapper>
        </CommissionInputContainer>

        <TumblerControlContainer>
          <ControlWrapper onClick={() => setChecked(!checked)}>
            <div>HWM</div>
            <TumblerInfoImageContainer>
              <TooltipStateful
                view="default"
                size="m"
                hasTail
                direction={["bottom", "right"]}
                content="Stateful hover"
              >
                <div className="info__tooltip">
                  <InfoImage />
                </div>
              </TooltipStateful>
            </TumblerInfoImageContainer>
            <Tumbler label={false} size="l" view="default" checked={checked} />
          </ControlWrapper>
        </TumblerControlContainer>

        <Divider />

        <SectionTitle>
          <Dot />
          <div>White lists</div>
        </SectionTitle>

        <ControlContainer>
          <ControlWrapper onClick={() => setChecked(!checked)}>
            <Checkbox label={false} size="m" view="default" checked={checked} />
            <ControlTitle>TOP50 cap extended</ControlTitle>
          </ControlWrapper>
          <InfoImageContainer>
            <TooltipStateful
              view="default"
              size="m"
              hasTail
              direction={["bottom", "right"]}
              content="Stateful hover"
            >
              <div className="info__tooltip">
                <InfoImage />
              </div>
            </TooltipStateful>
          </InfoImageContainer>
        </ControlContainer>

        <ControlContainer>
          <ControlWrapper onClick={() => setChecked(!checked)}>
            <Checkbox label={false} size="m" view="default" checked={checked} />
            <ControlTitle>TOP50 cap to BTC</ControlTitle>
          </ControlWrapper>
          <InfoImageContainer>
            <TooltipStateful
              view="default"
              size="m"
              hasTail
              direction={["bottom", "right"]}
              content="Stateful hover"
            >
              <div className="info__tooltip">
                <InfoImage />
              </div>
            </TooltipStateful>
          </InfoImageContainer>
        </ControlContainer>

        <ControlContainer>
          <ControlWrapper onClick={() => setChecked(!checked)}>
            <Checkbox label={false} size="m" view="default" checked={checked} />
            <ControlTitle>TOP50 cap to USDT/USDC/DAI</ControlTitle>
          </ControlWrapper>
          <InfoImageContainer>
            <TooltipStateful
              view="default"
              size="m"
              hasTail
              direction={["bottom", "right"]}
              content="Stateful hover"
            >
              <div className="info__tooltip">
                <InfoImage />
              </div>
            </TooltipStateful>
          </InfoImageContainer>
        </ControlContainer>

        <TooltipLabelContainer>
          <div>Trading pairs</div>
          <InfoImageContainer>
            <TooltipStateful
              view="default"
              size="m"
              hasTail
              direction={["bottom", "right"]}
              content="Stateful hover"
            >
              <div className="info__tooltip">
                <InfoImage />
              </div>
            </TooltipStateful>
          </InfoImageContainer>
        </TooltipLabelContainer>

        <Tagify />

        <Divider />

        <Description>
          You're about to create a new deFund on Ethereum and will have to
          confirm a transaction with your currently connected wallet. The
          creation will cost approximately 0.08423 ETH. The exact amount will be
          determined by your wallet.
        </Description>
        <ButtonBlue onClick={() => setVisible(true)}>Confirm</ButtonBlue>
      </Container>
      <CreateModal visible={visible} setVisible={setVisible} />
    </React.Fragment>
  );
};

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #272b30;
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #fcfcfc;
`;
const SectionTitle = styled.div`
  display: flex;
  padding-right: 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #1a1d1f;
  margin-bottom: 36px;
`;
const Dot = styled.div`
  margin-right: 16px;
  width: 16px;
  height: 32px;
  background: #2a85ff;
  border-radius: 4px;
`;
const AvatarUploadContainer = styled.div`
  display: flex;
  align-items: center;
`;
const AvatarImageContainer = styled.div`
  margin-right: 32px;
`;
const ButtonBlue = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  padding: 12px 20px;
  border: 2px solid #2a85ff;
  border-radius: 12px;
  ${flexGap({ row: "12px", column: "12px" })}
  background: #2a85ff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #ffffff;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: #3a8cf9;
  }
`;
const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #33383f;
  margin-top: 34px;
  margin-bottom: 14px;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 48px;
  margin-bottom: 48px;
`;
const Description = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #6f767e;
  margin-bottom: 48px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  background: #f4f4f4;
  width: 100%;
  max-width: 360px;
  user-select: none;
`;
const Input = styled.input`
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
const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  margin-bottom: 16px;
`;
const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
const ControlTitle = styled.div`
  margin-left: 12px;
`;
const InfoImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 2px;
  cursor: pointer;
  user-select: none;
`;
const TooltipLabelContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #33383f;
  margin-top: 18px;
  margin-bottom: 18px;
`;
const InputLabelContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #6f767e;
  margin-bottom: 12px;
`;
const CommissionInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexGap({ row: "32px", column: "8px" })}
`;
const CommissionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 16px);
`;
const InputCommissionContainer = styled.div`
  display: flex;
  align-items: center;
  /* padding: 12px; */
  border-radius: 12px;
  border: 2px solid #efefef;
  background: #fff;
  width: 100%;
  user-select: none;
  overflow: hidden;
`;
const InputCommission = styled.input`
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  background: #fff;
  border: none;
  outline: none;
  text-decoration: none !important;
  width: 100%;
`;
const InputBefore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #f4f4f4;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #6f767e;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  background: #fff;
  padding: 12px;
`;
const TumblerControlContainer = styled(ControlContainer)`
  margin-top: 32px;
  margin-bottom: 0;
`;
const TumblerInfoImageContainer = styled(InfoImageContainer)`
  margin-right: 12px;
`;

export default FundCreate;
