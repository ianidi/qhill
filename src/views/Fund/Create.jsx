import React, { useState, useRef } from "react";
import styled from "styled-components";
import FroalaEditorComponent from "react-froala-wysiwyg";

import "froala-editor/js/plugins.pkgd.min.js";
// import "froala-editor/js/languages/fr.js";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "./Create.scss";

import { flexGap } from "../../Common/FlexGap";

import AvatarPlaceholderImage from "../../Asset/Images/AvatarPlaceholder.png";
import { ReactComponent as PlusImage } from "../../Asset/Images/plus.svg";

const FundCreate = () => {
  const [value, setValue] = useState("");

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
            placeholderText: "placeholder",
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

        <Divider />

        <SectionTitle>
          <Dot />
          <div>White lists</div>
        </SectionTitle>
        <Divider />

        <Description>
          You're about to create a new deFund on Ethereum and will have to
          confirm a transaction with your currently connected wallet. The
          creation will cost approximately 0.08423 ETH. The exact amount will be
          determined by your wallet.
        </Description>
        <ButtonBlue onClick={() => {}}>Confirm</ButtonBlue>
      </Container>
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
export default FundCreate;
