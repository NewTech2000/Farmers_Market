/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, useImperativeHandle,useState } from "react";
import styled, { useTheme } from "styled-components/native";
import PropTypes from "prop-types";
import TextGeneric from "../TextGeneric";
import Ripple from "react-native-material-ripple";
import { getByScreenSize, hdp } from "../../utils/responsive";
import Marker from "../Marker";
import MapboxGL from "@react-native-mapbox-gl/maps";
import PickerList from "../PickerList";
import GenericInput from "../Input";
import Text from "../TextGeneric";
import CustomDatePicker from "../DatePicker";
import GenericCheckBox from "../Checkbox";
import config from "../../config";
import { connect } from "react-redux";
import { showInfoPopUp } from "../../connected-components/InfoPopUp/actions";
import Icon from "../Icon";
import { Image, View} from "react-native";
import Picker  from '../SearchableDropDownList';
/*
 * This component can be used to show any field in a form over all app screens.
 * Supported field types: text, textarea, dropdown, date,time, datetime, map, checkbox.
 * */

const ContainerView = styled.View`
  width: 100%;
`;
const LabelView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;
const LabelText = styled(TextGeneric)`
  color: ${({ theme }) => theme.disableTextInput.label};
  font-weight: bold;
  font-size: ${({ theme }) => getByScreenSize(theme.text.s9, theme.text.s10)}px;
  margin-right: 4px;
`;
const ValueView = styled.View``;

const Separator = styled.View`
  padding-top: 20px;
`;
const Range = styled.View`
  align-items: center;
  justify-content: center;
`;

const RedText = styled(TextGeneric)`
  color: ${({ theme }) => theme.red};
`;

const FormField = forwardRef(
  (
    {
      item = {
        name: "",
        required: false,
        type: "text",
        value: "" || [],
        showInfo: true,
        info: "",
        props: {},
      },
      labelStyle,
      valueStyle,
      style,
      onInfoPress,
      disabled,
      onEditChange,
      onValueChange,
      row,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const [imageError, setImageError] = useState(true);
    useImperativeHandle(ref, () => ({
      toggleDisable: () => { },
    }));
    const onImageNotFound = async(item) => {
      //setImageError(false);
      await fetch(item)
      .then(res => {
        setImageError(true);
      })
      .catch(err => {
        setImageError(false);
      })
    }
    const getContent = () => {
      if(item.type==="image") onImageNotFound(item.value)
      if (disabled) {
        return (
          <>
          {item.type==="image"? imageError?
               <View style={{paddingTop: 20}}>
                <Image source={ {uri: item.value}}
                style={{width: 300, height: 250, resizeMode:'contain'}}
                />
                </View> : null
                :
          item.type==="textarea"?
            <GenericInput
              numberOfLines={4}
              multiline={true}
              onEditChange={() => onEditChange()}
              disabled={disabled}
              defaultValue={item.value}
              editable={item.editable}
              onChangeText={onValueChange}
              {...item.props}
          /> :
          item.type!=="checkbox"?
          <GenericInput
            onEditChange={() => onEditChange()}
            disabled={disabled}
            defaultValue={item.value}
            editable={item.editable}
            onChangeText={onValueChange}
            type={"button"}
            {...item.props}
          />
          :item.type==="checkbox"&&
            <GenericCheckBox
            value={item.value}
            disabled={disabled}
            onChange={onValueChange}
            editable={item.editable}
            onEditChange={() => onEditChange()}
            {...item.props}
          />
          }
          </>
        );
      } else {
        switch (item.type) {
          case "text":
            return (
              <GenericInput
                disabled={item.disabled}
                keyboardType={item.isNumber ? "number-pad" : "default"}
                {...item.props}
                onChangeText={onValueChange}
              />
            );
          case "textarea":
            return (
              <GenericInput
                numberOfLines={4}
                multiline={true}
                blurOnSubmit={true}
                onChangeText={onValueChange}
                {...item.props}
              />
            );
          case "map":
            return config.MAP_BOX_ACCESS_TOKEN !== "" ? (
              <MapboxGL.MapView
                style={{
                  width: "100%",
                  height: hdp(30),
                  overflow: "hidden",
                  borderRadius: 6,
                }}
                logoEnabled={false}
              >
                <MapboxGL.Camera zoomLevel={14} centerCoordinate={item.value} />
                {item.value && (
                  <MapboxGL.MarkerView
                    id="map-view"
                    anchor={{
                      x: 0.5,
                      y: 0.5,
                    }}
                    draggable={false}
                    key={JSON.stringify(item.value)}
                    coordinate={item.value}
                  >
                    <Range>
                      <Marker coordinate={item.value} color={theme.red} />
                    </Range>
                  </MapboxGL.MarkerView>
                )}
              </MapboxGL.MapView>
            ) : null;

          case "checkbox":
            return (
              <GenericCheckBox
                value={item.value}
                disabled={item.disabled}
                onChange={onValueChange}
                editable={item.editable}
                {...item.props}
              />
            );
          case "dropdown":
            return (
              <PickerList
                list={item.options}
                {...item.props}
                disabled={item.disabled}
                onValueChange={onValueChange}
              />
            );
            case "autocompleteDropdown":
            return (
              <Picker 
                list={item.options}
                {...item.props}
                disabled={item.disabled}
                onSelectItem={onValueChange}
              />
            );
          case "date":
            return (
              <CustomDatePicker {...item.props} onChange={onValueChange} />
            );
          case "time":
            return (
              <CustomDatePicker
                onChange={onValueChange}
                mode={"time"}
                {...item.props}
              />
            );
          case "datetime":
            return (
              <CustomDatePicker
                onChange={onValueChange}
                mode={"datetime"}
                {...item.props}
              />
            );
            case "image":
              return (
               <Text>
                <Image source={{uri: item.value}}
                style={{width: 400, height: 400}} 
                {...item.props}
                />
                </Text>
              );
        }
        return <Text {...item.props} />;
      }
    };
    return (
      <ContainerView
        style={[style, row && { width: `${getByScreenSize(100, 46)}%` }]}
      >
        <LabelView>
          {!!item.required && <RedText>*</RedText>}
          <LabelText style={labelStyle}>{item.type=='image'? item.title: item.name}</LabelText>
          {!!item.showInfo && (
            <Ripple
              onPress={() => {
                if (onInfoPress) {
                  onInfoPress();
                } else {
                  props.showInfoPopUp({
                    title: item.name,
                    description: item.info,
                  });
                }
              }}
            >
              <Icon
                name={"info"}
                type={"SVG"}
                size={getByScreenSize(theme.text.s7, theme.text.s9)}
                color={"black"}
              />
            </Ripple>
          )}
        </LabelView>
        <ValueView>{getContent()}</ValueView>
        <Separator />
      </ContainerView>
    );
  }
);

FormField.propTypes = {
  item: PropTypes.object.isRequired,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onInfoPress: PropTypes.func,
  onEditChange: PropTypes.func,
  onValueChange: PropTypes.func,
  row: PropTypes.bool,
};
FormField.defaultProps = {
  labelStyle: null,
  valueStyle: null,
  style: null,
  onInfoPress: null,
  onEditChange: null,
  onValueChange: null,
  row: false,
};

export default connect(null, { showInfoPopUp })(FormField);

