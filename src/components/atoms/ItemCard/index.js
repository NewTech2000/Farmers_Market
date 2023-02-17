import React, {Children, forwardRef, useRef, useState} from 'react';
import styled, {withTheme} from 'styled-components/native';
import {hdp, wdp} from '../../../utils/responsive';
import Icon from '../../atoms/Icon';

const Container = styled.View`
  border-radius: 15px;
  background-color: ${({theme}) => theme.homeBackground};
  height: ${hdp(5)}%;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  elevation: 15;
  height: 110px;
  margin: 8px;
  left:5px
  width: 395px;
`;

const ItemCard = ({onChange, onPress, children}) => {
  return <Container>{children}</Container>;
};

export default ItemCard;
