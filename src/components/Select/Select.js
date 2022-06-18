import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: min-content;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  white-space: nowrap;

  &:focus-within {
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const BrowserSelect = styled.select`
  position: absolute;
  opacity: 0;
  inset: 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <div>{displayedValue}</div>
      <Icon id="chevron-down" strokeWidth={2} size={24}></Icon>
      <BrowserSelect value={value} onChange={onChange}>
        {children}
      </BrowserSelect>
    </SelectWrapper>
  );
};

export default Select;
