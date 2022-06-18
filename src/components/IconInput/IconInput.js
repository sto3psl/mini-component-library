import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    iconSize: 16,
    strokeWidth: 1,
    fontSize: 14,
  },
  large: {
    iconSize: 24,
    strokeWidth: 2,
    fontSize: 18,
  },
};

const IconInput = ({ label, icon, width = 300, size, placeholder }) => {
  const inputSize = SIZES[size];

  if (!inputSize) {
    throw new Error('Invalid "size" argument!');
  }

  return (
    <Label
      style={{
        "--width": width + "px",
        "--iconSize": inputSize.iconSize + "px",
        "--fontSize": inputSize.fontSize,
        "--strokeWidth": inputSize.strokeWidth + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon
          id={icon}
          size={inputSize.iconSize}
          strokeWidth={inputSize.strokeWidth}
        />
      </IconWrapper>
      <Input placeholder={placeholder} />
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: var(--width);
  border-block-end: var(--strokeWidth) solid;
  padding: 4px;
  color: ${COLORS.gray700};

  &:focus-within {
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: black;
  }
`;

const Input = styled.input`
  font-size: calc(var(--fontSize) / 16rem);
  width: calc(var(--width) - var(--iconSize) - 8px);
  margin-left: calc(var(--iconSize) + 8px);
  border: none;
  outline: none;
  font-weight: 700;
  color: currentcolor;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: grid;
  align-items: center;
  color: currentcolor;
`;

export default IconInput;
