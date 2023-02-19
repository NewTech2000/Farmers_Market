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
  padding-horizontal:15px;
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
const PrivacyPolicy = () => {
  return (
    <MainContainer>
      <BodyContainer>
        <ScrollView style={{bottom: 20}}>
          <Header>{'Privacy Statement'}</Header>
          <Text>
            Thank you for your interest in our Farmers Market project. We take
            the privacy of our users seriously, and we are committed to
            protecting their personal information. This Privacy Statement
            outlines the types of information we collect, how we use it, and how
            we protect it. Information We Collect: We collect personal
            information from our users in order to provide our services. This
            information may include: Name Email Address Phone Number Address
            Payment Information (if applicable) We may also collect non-personal
            information such as your IP address, browser type, operating system,
            and device type. We may use cookies or similar technologies to
            collect this information. How We Use Information: We use the
            information we collect to provide our services and to improve our
            website and app. Specifically, we may use your information to:
            Create and manage your account Process payments (if applicable)
            Communicate with you about your account or our services Respond to
            your inquiries or requests Analyze usage of our website and app to
            improve our services Comply with legal requirements We may also use
            your information to send you promotional or marketing materials
            about our services or those of our partners. You may opt out of
            these communications at any time. How We Protect Information: We use
            industry-standard security measures to protect the information we
            collect from unauthorized access, disclosure, or alteration. We
            encrypt sensitive information (such as payment information) using
            SSL/TLS technology. However, no method of transmission over the
            Internet or electronic storage is completely secure. Therefore,
            while we strive to use commercially acceptable means to protect your
            personal information, we cannot guarantee its absolute security.
            Sharing Information: We do not sell or rent your personal
            information to third parties for their marketing purposes. We may
            share your information with third-party service providers who help
            us to provide our services (such as payment processors), but we only
            share the minimum amount of information necessary for them to
            provide their services. We may also share your information in
            response to a legal request, such as a subpoena or court order.
            Changes to this Privacy Statement: We may update this Privacy
            Statement from time to time to reflect changes in our practices or
            legal requirements. We will post the updated Privacy Statement on
            our website and app, and we encourage you to review it periodically.
            Contact Us: If you have any questions or concerns about this Privacy
            Statement, please contact us at [New Tech 2000].
          </Text>

          <Header>{'Policies'}</Header>
          <Text>
            A Farmers Market software system Privacy Policy is a statement that
            outlines how the software system collects, uses, and protects the
            personal information of its users, including farmers and customers.
            The Privacy Policy typically includes the following information:
            What information is collected: The policy should specify what types
            of personal information the software system collects, such as names,
            addresses, phone numbers, email addresses, payment information, and
            transaction data. How information is collected: The policy should
            describe the methods used to collect personal information, such as
            through registration forms, transaction records, and website
            tracking technologies. How information is used: The policy should
            outline how the software system uses personal information, such as
            to process transactions, communicate with customers, improve
            services, and personalize marketing campaigns. How information is
            shared: The policy should state whether personal information is
            shared with third parties, such as payment processors, marketing
            partners, and regulatory agencies. How information is protected: The
            policy should detail the security measures in place to protect
            personal information, such as encryption, firewalls, and access
            controls. How users can access, modify, or delete their information:
            The policy should provide instructions on how users can access,
            modify, or delete their personal information, as well as how they
            can opt out of marketing communications. Compliance with applicable
            laws: The policy should state that the software system complies with
            all applicable laws, regulations, and industry standards related to
            privacy and data protection. Overall, a Farmers Market software
            system Privacy Policy is important to ensure that users are aware of
            how their personal information is collected, used, and protected,
            and to provide transparency and accountability in the handling of
            sensitive data.
          </Text>
        </ScrollView>
      </BodyContainer>
    </MainContainer>
  );
};

export default PrivacyPolicy;
