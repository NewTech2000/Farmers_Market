/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { useTheme } from "styled-components/native";
import PropTypes from "prop-types";
import { getByScreenSize, wdp } from "../../utils/responsive";
import Text from "../TextGeneric";
import Icon from "../Icon";

const Container = styled.View`
  text-align: left;
  flex-direction: row;
  align-items: flex-start;
  padding-vertical: 4.8%;
  padding-horizontal: 2%;
  margin-bottom: 2px;
  overflow: hidden;
`;

const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.View`
  width: 100%;
  flex-direction: column;
  padding-horizontal: 1%;
  align-self: center;
`;

const Title = styled(Text)`
  max-width: ${wdp(80)}px;
  font-size: ${({ theme }) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
  flex-shrink: 1;
`;

const IconContainer = styled.View`
  border-radius: 5px;
`;

const Image = styled.Image``;

const ShortTitle = ({
  title,
  titleStyle,
  iconWidth,
  iconHeight,
  iconBackground,
  icon,
  style,
}) => {
  const theme = useTheme();
  return (
    <Container style={style}>
      <ImageContainer>
        <IconContainer style={{ backgroundColor: iconBackground }}>
          {icon ? (
            <Image
              source={icon}
              style={{
                width: iconWidth,
                height: iconHeight,
              }}
            />
          ) : (
            <Icon
              name={"lakes"}
              type={"SVG"}
              color={"white"}
              size={iconWidth}
            />
          )}
        </IconContainer>
      </ImageContainer>
      <TitleContainer>
        <Title style={titleStyle}>{title}</Title>
      </TitleContainer>
    </Container>
  );
};

ShortTitle.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconBackground: PropTypes.string,
  icon: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
ShortTitle.defaultProps = {
  title: null,
  titleStyle: null,
  iconWidth: 27,
  iconHeight: 25,
  icon: null,
  iconBackground: "#f26891",
  style: null,
};

export default ShortTitle;
