/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: "8px",
  medium: "12px",
  large: "24px",
};

const borderRadius = {
  small: "4px",
  medium: "4px",
  large: "8px",
};

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: ${(props) => borderRadius[props.size] ?? borderRadius.small};
  height: 100%;

  &::before {
    display: block;
    content: "";
    background-color: ${COLORS.primary};
    width: var(--width);
    height: 100%;
  }
`;

const Bar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: ${(props) => sizes[props.size] ?? sizes.small};
  border-radius: ${(props) => borderRadius[props.size] ?? borderRadius.small};
  ${(props) => (props.size === "large" ? "padding: 4px;" : "")}
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Bar role="progressbar" aria-valuenow={value} size={size}>
      <BarWrapper style={{ "--width": value + "%" }}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </BarWrapper>
    </Bar>
  );
};

export default ProgressBar;
