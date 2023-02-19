import React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native';
import BorderButton from '../../components/atoms/BorderButton/BorderButton';
import HomeItemCard from '../../components/molecule/HomeItemCard';
import {getByScreenSize} from '../../utils/responsive';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
`;
const Container = styled(HomeItemCard)`
  height: 100px;
`;

const BodyContainer = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 90px;
  height: 100%;
  background-color: ${({theme}) => theme.lightGray};
`;
const AddItemContainer = styled.View`
  height: 8%;
  background-color: ${({theme}) => theme.newButton};
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s6, theme.text.s4)}px;
  margin-right: 8px;
  margin-top: 4.5%;
  margin-left: 15%;
`;

export default function ItemScreen() {
  const [user, setUser] = useState('farmer');
  return (
    <MainContainer>
      <AddItemContainer>
        <Title>{'Your Listed Items'}</Title>
        <BorderButton
          style={{
            marginTop: 15,
            marginLeft: 180,
            position: 'absolute',
          }}
          title={'Add New Item'}
        />
      </AddItemContainer>
      <ScrollView>
        <BodyContainer>
          <Container></Container>
          <Container></Container>
          <Container></Container>
          <Container></Container>
          <Container></Container>
          <Container></Container>
        </BodyContainer>
      </ScrollView>
    </MainContainer>
  );
}
