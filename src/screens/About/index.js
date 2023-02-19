import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled, {useTheme} from 'styled-components/native';
import TextGeneric from '../../components/atoms/TextGeneric';
import {getByScreenSize} from '../../utils/responsive';

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme}) => theme.homeBackground};
`;

const Container = styled.View`
  width: 10px;
`;

const BodyContainer = styled.View`
  flex: 1;
  height: 100%;
  padding-top: 10px;
`;

const Text = styled(TextGeneric)`
  top: 25px;
  padding-bottom: 30px;
  padding-horizontal: 15px;
  text-align: center;
  color: ${({theme}) => theme.text.textPrimary};
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
`;

const Header = styled(TextGeneric)`
  left:30px;
  top:15px
  color: ${({theme}) => theme.text.textPrimary};
  font-weight: bold;
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s8)}px;
`;
const About = () => {
  return (
    <MainContainer>
      <BodyContainer>
        <ScrollView style={{bottom: 20}}>
          <Header>{'About This App'}</Header>
          <Text>
            A Farmers Market software system is a comprehensive solution that is
            designed to help farmers manage their businesses, automate their
            operations, and improve their sales. This type of software system
            typically includes a variety of features such as inventory
            management, sales tracking, customer relationship management,
            financial reporting, and marketing tools. The inventory management
            component of the software allows farmers to keep track of their
            products and manage their stock levels. They can easily update their
            inventory, monitor product levels, and receive alerts when products
            are running low. The sales tracking feature allows farmers to record
            their sales and monitor their revenue in real-time. They can track
            sales by product, customer, or date and generate reports to analyze
            their performance. The customer relationship management feature
            allows farmers to manage their customer database and keep track of
            customer preferences and purchase history. They can use this
            information to personalize their marketing campaigns and improve
            customer satisfaction. The financial reporting component of the
            software system allows farmers to track their expenses and revenues,
            generate financial statements, and monitor their profitability. The
            marketing tools included in the software system enable farmers to
            create and distribute promotional materials, such as flyers,
            brochures, and email campaigns, to attract more customers and
            increase sales. Overall, a Farmers Market software system is an
            essential tool for farmers who want to streamline their operations,
            improve their sales, and grow their businesses.
          </Text>
        </ScrollView>
      </BodyContainer>
    </MainContainer>
  );
};

export default About;
