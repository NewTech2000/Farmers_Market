import React from 'react';
import ChatCard from '../../components/molecule/ChatCard';
import styled, {useTheme} from 'styled-components/native';
import SearchBar from '../../components/molecule/SearchBar';
import TextGeneric from '../../components/atoms/TextGeneric';
import { getByScreenSize } from '../../utils/responsive';
import FloatingActionButton from '../../components/molecule/FloatingButton';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.lightGray};
`;
const Header = styled(TextGeneric)`
  color: ${({theme}) => theme.text.textPrimary};
  font-size: ${({theme}) => getByScreenSize(theme.text.s5, theme.text.s6)}px;
  left: 60px;
  padding-top:15px;
  width: 200px;
  font-weight:700;
`;



export default function ChatScreen() {
  return(
  <MainContainer>

    <SearchBar/>
    <Header>{'Chats'}</Header>
    <ChatCard />
    <ChatCard />
    <ChatCard />
    <FloatingActionButton/>
  </MainContainer>
  )
}
