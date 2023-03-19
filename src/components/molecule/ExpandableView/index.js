import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';
import {getByScreenSize} from '../../../utils/responsive';
import Icon from '../../atoms/Icon';
import TextGeneric from '../../atoms/TextGeneric';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => theme.homeBackground};
  padding-top: 10px;
`;

const InnerContainer = styled.View`
  padding-top:10px;
  width:100%
  background-color: ${({theme}) => theme.lightGray};
  border-radius: 5px;
`;

const IconContainer = styled.View`
  justify-content: flex-end;
  align-self: flex-end;
  right: 20px;
  bottom: 28px;
`;

const ListContainer = styled.View`
  height: 80%;
  border-radius: 5px;
  background-color: ${({theme}) => theme.lightGray};
  bottom: 30px;
`;

const StatusContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 30px;
`;

const StatusRowContainer = styled.View`
  flex-direction: row;
  text-align: center;
  align-self: center;
  padding-top: 10px;
`;

const StatusText = styled(TextGeneric)`
  text-align: center;
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  top: 10px;
`;

const Title = styled(TextGeneric)`
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  left: 20px;
  top: 10px;
`;

const ItemText = styled(TextGeneric)`
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  left: 20px;
  top: 10px;
`;

const TitleID = styled(TextGeneric)`
  color: ${({theme}) => theme.priceColor};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  left: 30px;
  top: 10px;
`;

const TitleContainer = styled.View`
  top: 5px;
  flex-direction: row;
`;

const Images = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 2px;
  margin-left: 100px;
  margin-top: 5px;
`;

const DescriptionText = styled(TextGeneric)`
  color: ${({theme}) => theme.darkGray};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  text-align: center;
  margin-left: 30px;
`;

const ExpandableView = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <MainContainer>
      <InnerContainer>
        <TitleContainer>
          <Title>{'Order'}</Title>
          <TitleID>{'#22335335'}</TitleID>
          <Images source={require('../../../assets/images/ITM1.jpg')} />
        </TitleContainer>
        <IconContainer>
          <TouchableOpacity onPress={handlePress}>
            <View>
              <Icon
                type="AntDesign"
                name={expanded ? 'down' : 'right'}
                color={theme.priceColor}
                size={30}
                style={{}}
              />
            </View>
          </TouchableOpacity>
        </IconContainer>
        {expanded && (
          //   <List>
          <ListContainer>
            <StatusContainer>
              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.priceColor}
                  style={{
                    top: 15,
                    alignSelf: 'flex-start',
                    right: 80,
                  }}
                />
                <StatusText>{'Item'}</StatusText>
              </StatusRowContainer>
              <DescriptionText>{'Carrot'}</DescriptionText>

              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.priceColor}
                  style={{
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 65,
                  }}
                />
                <StatusText>{'Quantity'}</StatusText>
              </StatusRowContainer>
              <DescriptionText>{'10kg'}</DescriptionText>

              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.priceColor}
                  style={{
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 80,
                  }}
                />
                <StatusText>{'Price'}</StatusText>
              </StatusRowContainer>
              <DescriptionText>{'Rs. 1500 '}</DescriptionText>
             
              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.priceColor}
                  style={{
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 35,
                  }}
                />
                <StatusText>{'Payment Method'}</StatusText>
              </StatusRowContainer>
              <DescriptionText>{'Cash On delivery'}</DescriptionText>

              <StatusRowContainer>
                <Icon
                  name={'check'}
                  size={30}
                  type={'Entypo'}
                  color={theme.priceColor}
                  style={{
                    top: 5,
                    alignSelf: 'flex-start',
                    right: 65,
                  }}
                />
                <StatusText>{'Quantity'}</StatusText>
              </StatusRowContainer>
              <DescriptionText>{'10kg'}</DescriptionText>
            </StatusContainer>

          </ListContainer>
        )}
      </InnerContainer>
    </MainContainer>
  );
};

export default ExpandableView;
