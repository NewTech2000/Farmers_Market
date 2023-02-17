/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { withTheme } from "styled-components/native";
import PropTypes from "prop-types";
import GenericButton from "../Button";
import { getByScreenSize, wdp } from "../../../utils/responsive";

/**
 Usage:
 <FormHeader title={'EDT ITM-384865'} leftBtnProps={{label: 'test', type: 'solid'}}
 rightBtnProps={{label: 'test2', type: 'solid'}}/>
 **/
const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.alert.backgroundPrimary};
`;

const Button = styled(GenericButton)`
  width: 20%;
  align-items: center;
  justify-content: center;
  margin: ${wdp(getByScreenSize(3, 1.2))}px;
  margin-bottom:  ${wdp(getByScreenSize(5, 1.2))}px;
`;

const FormFooter = ({ leftBtnProps, rightBtnProps }) => {
  return (
    <Container>
      {leftBtnProps && <Button {...leftBtnProps} />}
      {rightBtnProps && <Button {...rightBtnProps} />}
    </Container>
  );
};

FormFooter.propTypes = {
  leftBtnProps: PropTypes.object,
  rightBtnProps: PropTypes.object,
};
FormFooter.defaultProps = {
  leftBtnProps: null,
  rightBtnProps: null,
};

export default withTheme(FormFooter);
