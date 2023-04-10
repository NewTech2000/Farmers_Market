import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryAxis,
  VictoryPie,
} from 'victory-native';
import BorderButton from '../../components/atoms/BorderButton/BorderButton';
import TextGeneric from '../../components/atoms/TextGeneric';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';
import {Dimensions, View} from 'react-native';
import CustomDatePicker from '../../components/atoms/DatePicker';
import AppModal from '../../components/molecule/Model';
import {useState} from 'react';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.homeBackground};
`;

const BodyContainer = styled.View`
  height: 100%;
  align-content: center;
  padding: 30px;
  padding-bottom: 20px;
`;

const Card = styled.View`
  border-radius: 15px;
  background-color: ${({theme}) => theme.homeBackground};
  height: 500px;
  width: ${wdp(24)}%;
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  elevation: 15;
  align-self: center;
  margin-top: 10px;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.darkGray};
  padding-top: ${hdp(3)}px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;
const SubTitle = styled.Text`
  color: ${({theme}) => theme.darkGray};
  padding-top: ${hdp(3)}px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s9)}px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  left: 50px;
  top: 15px;
`;

const BorderButtonContainer = styled.View`
  padding-top: 40px;
  align-self: flex-end;
  right: 100px;
  bottom: 25px;
`;

const DateContainer = styled.View`
  width: ${wdp(35)}px;
  left: 80px;
`;

const DateRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

const PieChartContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 250px;
`;
const InputContainer = styled.View``;

const FinancialGoals = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [correctModel, setCorrectModel] = useState('');

  const toggleModal = modelName => {
    setModalVisible(true);
    setCorrectModel('EditFinanceDetails');
  };

  const data = {
    Banana: [
      {x: 'January', y: 60},
      {x: 'February', y: 70},
      {x: 'March', y: 100},
      {x: 'April', y: 201},
    ],
    Carrot: [
      {x: 'January', y: 30},
      {x: 'February', y: 80},
      {x: 'March', y: 150},
      {x: 'April', y: 210},
    ],
    Apple: [
      {x: 'January', y: 50},
      {x: 'February', y: 80},
      {x: 'March', y: 120},
      {x: 'April', y: 200},
    ],
    Orange: [
      {x: 'January', y: 10},
      {x: 'February', y: 30},
      {x: 'March', y: 80},
      {x: 'April', y: 120},
    ],
  };

  const pieChartData = [
    {x: '50%', y: 30},
    {x: '20%', y: 25},
    {x: '15%', y: 15},
    {x: '5%', y: 20},
  ];

  return (
    <MainContainer>
      <Title>{'You can set Your Future Goals In Here'}</Title>
      <ScrollView>
        <BodyContainer>
          <Card>
            <BorderButtonContainer>
              <BorderButton title={'Edit This'} onPress={() => toggleModal()} />
            </BorderButtonContainer>
            <ScrollView horizontal={true}>
              <VictoryChart>
                <VictoryAxis
                  label={'Months'}
                  style={{axisLabel: {padding: 37}}}
                />
                <VictoryAxis
                  dependentAxis
                  label={'Profit'}
                  style={{axisLabel: {padding: 35}}}
                />
                <VictoryGroup offset={12}>
                  <VictoryBar
                    data={data.Banana}
                    style={{
                      data: {
                        fill: 'yellow',
                      },
                    }}
                  />
                  <VictoryBar
                    data={data.Carrot}
                    style={{
                      data: {
                        fill: 'green',
                      },
                    }}
                  />
                  <VictoryBar
                    data={data.Apple}
                    style={{
                      data: {
                        fill: 'red',
                      },
                    }}
                  />
                  <VictoryBar
                    data={data.Orange}
                    style={{
                      data: {
                        fill: 'orange',
                      },
                    }}
                  />
                </VictoryGroup>
                <VictoryLegend
                  x={Dimensions.get('screen').width / 2 - 180}
                  orientation="horizontal"
                  gutter={20}
                  data={[
                    {name: 'Banana', symbol: {fill: 'yellow'}},
                    {name: 'Carrot', symbol: {fill: 'green'}},
                    {name: 'Apple', symbol: {fill: 'red'}},
                    {name: 'Orange', symbol: {fill: 'orange'}},
                  ]}
                />
              </VictoryChart>
            </ScrollView>
          </Card>

          <Card style={{top: 50, marginBottom: 70}}>
            <BorderButtonContainer>
              <BorderButton title={'Edit This'} onPress={() => toggleModal()} />
            </BorderButtonContainer>

            <DateRow>
              <SubTitle>{'Your Whole Profit For'}</SubTitle>
              <DateContainer>
                <CustomDatePicker
                  label={'For'}
                  required={true}
                  defaultValue={'2023-04-30'}
                />
              </DateContainer>
            </DateRow>
            <PieChartContainer>
              <View style={{bottom: 8}}>
                <VictoryPie
                  data={pieChartData}
                  labelRadius={({innerRadius}) => innerRadius + 5}
                  radius={({datum}) => 1 + datum.y * 4.5}
                  innerRadius={20}
                  colorScale={['yellow', 'green', 'red', 'orange']}
                  style={{
                    labels: {fill: 'black', fontSize: 12, fontWeight: 'bold'},
                  }}
                />
              </View>
              <View style={{bottom: 400}}>
                <VictoryLegend
                  x={Dimensions.get('screen').width / 2 - 180}
                  orientation="horizontal"
                  gutter={20}
                  data={[
                    {name: 'Banana', symbol: {fill: 'yellow'}},
                    {name: 'Carrot', symbol: {fill: 'green'}},
                    {name: 'Apple', symbol: {fill: 'red'}},
                    {name: 'Orange', symbol: {fill: 'orange'}},
                  ]}
                />
              </View>
            </PieChartContainer>
          </Card>
        </BodyContainer>
        <AppModal
          modelName={correctModel}
          toggleModal={() => setModalVisible(!isModalVisible)}
          isModalVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          closeOnPress={() => setModalVisible(false)}
        />
      </ScrollView>
    </MainContainer>
  );
};

export default FinancialGoals;
