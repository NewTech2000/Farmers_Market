/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { useTheme, withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';
import Text from '../TextGeneric';
import GenericButton from '../Button';

/**
 Usage:
 <FormHeader title={'EDT ITM-384865'} leftBtnProps={{label: 'test', type: 'clear'}}
 rightBtnProps={{label: 'test', type: 'clear'}}/>
 **/
const Container = styled.View`
  width: 100%;
  padding-vertical: 8px;
  text-align: left;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.alert.backgroundPrimary};
`;

const BigTitle = styled(Text)`
    width: 50%;
    text-align: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.text.s10}px;
`;

const EmptySpace = styled.View`
width: 20%;
`;

const Button = styled(GenericButton)`
width: 20%;
`;

const FormHeader = ({
  title,
  leftBtnProps,
  rightBtnProps,
}) => {
  const theme = useTheme();

  return (
    <Container>
      {leftBtnProps ? <Button labelStyle={{ fontSize: theme.text.s10 }} {...leftBtnProps}/> :
        <EmptySpace/>}
      <BigTitle>{title}</BigTitle>
      {rightBtnProps ? <Button labelStyle={{ fontSize: theme.text.s10 }} {...rightBtnProps}/> :
        <EmptySpace/>}
    </Container>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string,
  leftBtnProps: PropTypes.object,
  rightBtnProps: PropTypes.object
};
FormHeader.defaultProps = {
  title: null,
  leftBtnProps: null,
  rightBtnProps: null
};

export default withTheme(FormHeader);
