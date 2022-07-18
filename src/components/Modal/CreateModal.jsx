import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "@yandex/ui/Modal/desktop/bundle";
import { Checkbox } from "@yandex/ui/Checkbox/desktop/bundle";

import Success from "./Success";
import { flexGap } from "../../Common/FlexGap";
import "./WalletModal.scss";

import { ReactComponent as CloseImage } from "../../Asset/Images/close.svg";
import { ReactComponent as CheckImage } from "../../Asset/Images/check.svg";

const CreateModal = ({ visible, setVisible }) => {
  const [click, setClick] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Modal
      theme="normal"
      onClose={() => setVisible(false)}
      visible={visible}
      zIndexGroupLevel={20}
    >
      <Container>
        {click ? (
          <Success setVisible={setVisible} />
        ) : (
          <React.Fragment>
            <Head>
              <TitleContainer>
                <Dot />
                <Title>You create a DeFund with the following parameters</Title>
              </TitleContainer>
              <CloseContainer onClick={() => setVisible(false)}>
                <CloseImage />
              </CloseContainer>
            </Head>

            <TableContainer>
              <TableHead>
                <TableCol />
                <TableCol>Trader</TableCol>
                <TableCol>Service</TableCol>
                <TableCol>Investor</TableCol>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCol>
                    <div>
                      Subscribtion fee<TextGray> (SF)</TextGray>
                    </div>
                  </TableCol>
                  <TableCol>0.5%</TableCol>
                  <TableCol>0.5%</TableCol>
                  <TableCol>1%</TableCol>
                </TableRow>
                <TableRow>
                  <TableCol>
                    <div>
                      Management fee<TextGray> (MF)</TextGray>
                    </div>
                  </TableCol>
                  <TableCol>1%</TableCol>
                  <TableCol>0.5%</TableCol>
                  <TableCol>1.5%</TableCol>
                </TableRow>
                <TableRow>
                  <TableCol>
                    <div>
                      Performance fee<TextGray> (PF)</TextGray>
                    </div>
                  </TableCol>
                  <TableCol>15%</TableCol>
                  <TableCol>5%</TableCol>
                  <TableCol>20%</TableCol>
                </TableRow>
                <TableRow />
              </TableBody>
            </TableContainer>

            <CheckContainer>
              <CheckItem>
                <CheckImageContainer>
                  <CheckImage />
                </CheckImageContainer>
                <div>
                  Take <TextBlue>HWM</TextBlue> into account when calculating
                  commissions
                </div>
              </CheckItem>
              <CheckItem>
                <CheckImageContainer>
                  <CheckImage />
                </CheckImageContainer>
                <div>
                  Summing up and calculating commissions occurs{" "}
                  <TextBlue>weekly</TextBlue> with{" "}
                  <TextBlue>2 days indent</TextBlue>
                </div>
              </CheckItem>
              <CheckItem>
                <CheckImageContainer>
                  <CheckImage />
                </CheckImageContainer>
                <div>TOP50 cap to USDT/USDC/DAI</div>
              </CheckItem>
              <CheckItem>
                <CheckImageContainer>
                  <CheckImage />
                </CheckImageContainer>
                <div>
                  <TextGray>Trading pairs:</TextGray> BTC/LTC, ETH/BCH,
                  BTC/USDT, BTC/USDС
                </div>
              </CheckItem>
            </CheckContainer>

            <ControlContainer>
              <ControlWrapper onClick={() => setChecked(!checked)}>
                <Checkbox
                  label={false}
                  size="m"
                  view="default"
                  checked={checked}
                />
                <ControlTitle>
                  I confirm transaction with my current wallet and agree to pay
                  approximately 0.08423 EHT for it’s creation. The exact amount
                  will be determined by my wallet.
                </ControlTitle>
              </ControlWrapper>
            </ControlContainer>

            <Divider />

            <ButtonsContainer>
              <ButtonCancel onClick={() => setVisible(false)}>
                Cancel
              </ButtonCancel>
              <ButtonBlue onClick={() => setClick(true)}>Create</ButtonBlue>
            </ButtonsContainer>
          </React.Fragment>
        )}
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fcfcfc;
  padding: 24px;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05),
    0px 32px 48px -8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(32px);
  border-radius: 16px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;
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
const TableContainer = styled.div`
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 8px;
  overflow: hidden;
`;
const TableHead = styled.div`
  background: #ffffff;
  padding: 12px;
  min-height: 52px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.01em;
  color: #6f767e;
  ${flexGap({ row: "12px", column: "8px" })}
`;
const TableCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: calc(25% - 8px);
  padding-left: 8px;
  padding-right: 8px;
  &:first-child {
    text-align: initial;
    justify-content: flex-start;
  }
`;
const TableBody = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
`;
const TableRow = styled.div`
  padding: 12px;
  background: #ffffff;
  min-height: 52px;
  display: flex;
  align-items: center;
  ${flexGap({ row: "12px", column: "8px" })}
  &:nth-child(odd) {
    background: rgba(244, 244, 244, 0.5);
  }
  &:last-child {
    min-height: auto;
  }
`;
const CheckContainer = styled.div`
  margin-top: 44px;
  margin-bottom: 20px;
`;
const CheckItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #1a1d1f;
  margin-bottom: 24px;
`;
const CheckImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
const TextGray = styled.span`
  color: #6f767e;
`;
const TextBlue = styled.span`
  color: #2a85ff;
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

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  ${flexGap({ row: "16px", column: "16px" })}
`;
const ButtonCancel = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  ${flexGap({ row: "8px", column: "8px" })}
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
`;
const ButtonBlue = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(50% - 16px);
  padding: 12px 20px;
  border: 2px solid #2a85ff;
  border-radius: 12px;
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

export default CreateModal;
