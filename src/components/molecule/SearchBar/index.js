import React, {forwardRef, useRef, useState} from 'react';
import {Button} from 'react-native-paper';
import styled, {withTheme} from 'styled-components/native';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import Icon from '../../atoms/Icon';

const Container = styled.View`
  background-color: ${({theme}) => theme.homeBackground};
  height: 70px;
  width100%;
`;

const InnerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  padding: 20px;
`;
const SearchButton = styled.TouchableOpacity`
  width: 80px;
  margin-left: 10px;
  background-color: ${({theme}) => theme.newButton};
  border-radius: 20px;
`;

const SearchInput = styled.TextInput`
  width: 85%;
  text-align: center;
  color: ${({theme}) => theme.genericInput.textPrimary};
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s9)}px;
`;

const InputContainer = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  align-self: center;
  border-radius: 150px;
  background-color: ${({theme}) => theme.lightGray};
`;

const SearchButtonText = styled.Text`
  color: ${({theme}) => theme.text.light};
  font-weight: 700;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
  text-align: center;
  margin-top: 8px;
`;
const SearchBar = ({onChange, onPress, children}) => {
  return (
    <Container>
      <InnerContainer>
        <InputContainer>
          <Icon
            name={'search1'}
            size={28}
            type={'AntDesign'}
            style={{paddingLeft: 16}}
          />
          <SearchInput placeholder={'Search Here'} />
        </InputContainer>
        <SearchButton>
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      </InnerContainer>
    </Container>
  );
};

export default SearchBar;
