import React from "react";
import styled, { useTheme } from "styled-components/native";
import TextGeneric from "../TextGeneric";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { getByScreenSize } from "../../../utils/responsive";

const RowView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const Text = styled(TextGeneric)`
  color: ${({ theme }) => theme.label.textPrimary};
  font-weight: bold;
  font-size: ${({ theme }) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
  margin-left: 3px;
  margin-bottom: 5px;
`;

const Required = styled(TextGeneric)`
  font-size: ${({ theme }) => theme.text.s8}px;
  color: ${({ theme }) => theme.label.required};
  padding-horizontal: 3%;
`;

const Label = ({ label, iconName, iconType, required, style }) => {
  const theme = useTheme();

  return (
    <RowView>
      <Text style={style}>{label}</Text>
      {required && <Required>*</Required>}
      {iconName !== "" && (
        <Icon
          name={iconName}
          type={iconType}
          color={theme.text.icon}
          size={getByScreenSize(theme.text.s6, theme.text.s7)}
        />
      )}
    </RowView>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  required: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Label.defaultProps = {
  iconName: "",
  iconType: "",
  required: false,
  style: null,
};
export default Label;
