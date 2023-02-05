/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { closeGlobalAlert } from "../../utils/alerts";

const Container = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 5px;
  border-radius: 10px;
  width: 90%;
  right: 5%;
  position: absolute;
  bottom: 20px;
  background-color: ${({ theme }) => `${theme.alert.backgroundPrimary}D1`};
  elevation: 5;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.alert.textPrimary};
  font-size: ${({ theme }) => theme.text.s9}px;
  text-align: center;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.alert.textPrimary};
  font-size: ${({ theme }) => theme.text.s7}px;
  font-weight: bold;
  text-align: center;
`;

const Alert = ({ alert }) => {
  const { message, title, isVisible } = alert;

  useEffect(() => {
    if (isVisible) setTimeout(closeGlobalAlert, 3000);
  }, [isVisible]);

  return (
    <>
      {isVisible ? (
        <Container>
          <Title>{title}</Title>
          <Label>{message}</Label>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, null)(Alert);

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};
