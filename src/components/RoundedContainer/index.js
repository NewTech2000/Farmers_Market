/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { withTheme } from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.roundedContainer.borderColor};
`;

/**
 This component will be used to contain any group of components with a with rounded rectangle
 **/
const RoundedContainer = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

RoundedContainer.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
RoundedContainer.defaultProps = {
  style: null,
};

export default withTheme(RoundedContainer);
