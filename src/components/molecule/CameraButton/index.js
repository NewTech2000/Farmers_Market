import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {useTheme} from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import Text from '../../atoms/TextGeneric';
import {launchCamera} from 'react-native-image-picker';
import config from '../../../config/config';
import Icon from '../../atoms/Icon';
import GenericButton from '../../atoms/Button';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import DocumentPicker from 'react-native-document-picker';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {delay} from '../../utils/helper';
import {Platform} from 'react-native';
import moment from 'moment';

const Container = styled.View`
  width: 100%;
`;

const UploadContainer = styled(Animatable.View)`
  flex-direction: column;
  align-items: center;
`;

const Circle = styled(Ripple)`
  width: ${getByScreenSize(50, 40)}px;
  height: ${getByScreenSize(50, 40)}px;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.camera.buttonColor};
`;

const PrimaryText = styled(Text)`
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s11)}px;
  padding-top: 2%;
`;

const SelectedImageContainer = styled.View`
  width: ${wdp(getByScreenSize(20, 10))}px;
  height: ${hdp(getByScreenSize(16, 10))}px;
  border-radius: 12px;
  overflow: hidden;
  justify-content: center;
  margin-top: 2%;
  margin-right: 2%;
`;

const CloseContainer = styled(Ripple)`
  width: ${wdp(getByScreenSize(6, 4))}px;
  height: ${wdp(getByScreenSize(6, 4))}px;
  justify-content: center;
  align-items: center;
  background-color: red;
  position: absolute;
  top: 1%;
  right: 1%;
  z-index: 1;
  overflow: hidden;
  border-radius: ${wdp(getByScreenSize(3, 2))}px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const SelectedItemContainer = styled(Ripple)`
  width: 100%;
  justify-content: center;
  width: ${wdp(getByScreenSize(20, 10))}px;
  height: ${hdp(getByScreenSize(16, 10))}px;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2%;
  margin-right: 2%;
`;
const SelectedItemPdfContainer = styled.View`
  width: 100%;
  justify-content: center;
  width: ${wdp(getByScreenSize(20, 10))}px;
  height: ${hdp(getByScreenSize(16, 10))}px;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2%;
  margin-right: 2%;
`;
const Button = styled(GenericButton)`
  width: ${getByScreenSize(80, 50)}%;
  padding-vertical: 1%;
  margin-top: 4%;
  border-radius: 12px;
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s10)}px;
`;

const RowView = styled.View`
  width: 96%;
  margin-left: 2%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
const CameraButton = ({
  title,
  titleStyle,
  circleStyle,
  onChange,
  type,
  fileNameCode,
  showUploadButton,
  showUploadBuildingPhotoButton,
  showCloseButton,
  onUploadPress,
  addMultiplePhotos,
  openCamera,
  soupEntryId,
  ...props
}) => {
  const theme = useTheme();
  const [files, setFiles] = useState([]);
  const [uploadSheetbutton, setUploadSheetbutton] = useState([]);
  const [imageDisabled, setimageDisabled] = useState(false);
  useEffect(() => {
    const uploadButton = [
      {
        id: 0,
        label: 'upload.camera',
        iconName: 'camera',
        iconType: 'Entypo',
        iconColor: theme.primary,
        onPress: () => cameraLaunch(),
      },
      {
        id: 1,
        label: 'upload.gallery',
        iconName: 'picture',
        iconType: 'AntDesign',
        iconColor: theme.primary,
        onPress: () => galleryLaunch(),
      },
    ];
    if (type === 'file') {
      uploadButton.push({
        id: 2,
        label: 'upload.file',
        iconName: 'file-2',
        iconType: 'Fontisto',
        iconColor: theme.text.dark,
        onPress: () => uploadFile(),
      });
    }
    uploadButton.push({
      id: 3,
      label: 'cancel',
      iconName: 'close-a',
      iconType: 'Fontisto',
      iconColor: theme.text.dark,
      onPress: () => closeUploadSheet(),
    });
    setUploadSheetbutton(uploadButton);
  }, [files]);

  useEffect(() => {
    if (files) {
      onChange && onChange(files);
    }
  }, [files]);

  const getDate = moment().format('DD-MM-YYYY - h:mm:ss a');

  const getIconByType = type => {
    switch (type) {
      case 'pdf':
        return {
          name: 'file-pdf',
          type: 'FontAwesome5',
          color: theme.files.pdfIcon,
          background: theme.files.pdfBackground,
        };
      case 'docx':
        return {
          name: 'file-word',
          type: 'FontAwesome5',
          color: theme.files.wordIcon,
          background: theme.files.wordBackground,
        };
      default:
        return {
          name: 'file',
          type: 'FontAwesome',
          color: theme.files.fileIcon,
          background: theme.files.fileBackground,
        };
    }
  };

  const cameraLaunch = async () => {
    // setimageDisabled(false)
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      maxWidth: 700,
      maxHeight: 700,
      quality: 0.5,
      saveToPhotos: true,
    };
    try {
      //       await closeUploadSheet();
      //       if (Platform.OS === 'ios') await delay(500);
      const response = await launchCamera(options);
      //       await delay(500);
      if (response.didCancel) {
        if (config.debug) console.log('User cancelled image picker');
        setimageDisabled(false);
      } else if (response.error) {
        if (config.debug) console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        alert(response.customButton);
      } else {
        var oldFileName = response.assets[0].fileName.slice(-4);
        const image = {
          fileName: fileNameCode + '_' + getDate + oldFileName,
          fileNameCode,
          type: 'image',
          uri: response.assets[0].uri,
          soupId: soupEntryId,
        };
        if (Platform.OS === 'ios') {
          image.uri = image.uri.replace('file:', '');
        }
        if (config.debug) console.log('image ', image);
        const temp = [...files, image];
        setFiles(temp);
        setimageDisabled(false);
      }
    } catch (err) {
      if (config.debug) console.log('err', err);
    }
  };

  //   const galleryLaunch = async () => {
  //     const options = {
  //       allowMultiSelection: false,
  //       type: [DocumentPicker.types.images],
  //     };
  //     try {
  //       await closeUploadSheet();
  //       if (Platform.OS === 'ios') await delay(500);
  //       const file = await DocumentPicker.pickSingle(options);
  //       if (file) {
  //         var oldFileName = file.name.slice(-4);
  //         const image = {
  //           fileName: fileNameCode + '_' + getDate + oldFileName,
  //           fileNameCode,
  //           type: 'image',
  //           uri: file.uri,
  //           soupId:soupEntryId
  //         };
  //         if (Platform.OS === 'ios') {
  //           image.uri = file.uri.replace('file:', '')
  //         }
  //         const temp = [...files, image];
  //         setFiles(temp);
  //       }
  //     } catch (err) {
  //       if (config.debug) console.log("err", err);
  //     }
  //   };

  //   const uploadFile = async () => {
  //     try {
  //       await closeUploadSheet();
  //       const options = {
  //         copyToCacheDirectory: true,
  //         type: [DocumentPicker.types.docx, DocumentPicker.types.pdf]
  //       };
  //       if (Platform.OS === 'ios') await delay(500);
  //       const file = await DocumentPicker.pickSingle(options);
  //       if (Platform.OS === 'ios') await delay(500);
  //       if (file) {
  //         var oldFileName = file.name.slice(-4);
  //         const newFileName = file.name.slice(0, -4);
  //         const image = {
  //           fileName: newFileName + '_' + getDate + oldFileName,
  //           fileNameCode,
  //           type: file.name.substr(file.name.lastIndexOf('.') + 1) || 'file',
  //           uri: file.uri,
  //         };
  //         if (Platform.OS === 'ios') {
  //           image.uri = file.uri.replace('file:', '')
  //         }
  //         const temp = [...files, image];
  //         setFiles(temp);
  //       }
  //     } catch (err) {
  //       if (config.debug) console.log("err", err);
  //     }
  //   };
  //   // const showUploadSheet = () => {
  //   //   props.showUploadModal({ buttons: uploadSheetbutton });
  //   // };

  const closeUploadSheet = async () => {
    props.closeUploadModal();
  };

  const removeItem = file => {
    setFiles([]);
  };
  const uploadFiles = () => {
    if (onUploadPress) onUploadPress();
    setFiles([]);
  };

  useEffect(() => {
    if (openCamera === true) {
      cameraLaunch();
    }
  }, []);

  return (
    <Container>
      {!files.length && (
        <UploadContainer animation={'fadeInUp'}>
          <Circle
            style={circleStyle}
            onPress={() =>
              type === 'file' ? showUploadSheet() : cameraLaunch()
            }
            disabled={imageDisabled}>
            <Icon
              name={type === 'photo' ? 'camera' : 'upload'}
              type={type === 'photo' ? 'SVG' : 'Entypo'}
              color={'white'}
              size={theme.text.s7}
              style={type === 'photo' ? {paddingRight: 12} : {}}
            />
          </Circle>
          <PrimaryText style={titleStyle}>{title}</PrimaryText>

          {showUploadBuildingPhotoButton && type === 'photo' && (
            <Button
              label={'upload.uploadBuildingPhotos'}
              type={'solid'}
              labelStyle={{
                fontSize: getByScreenSize(theme.text.s7, theme.text.s10),
              }}
              onPress={() => galleryLaunch()}
            />
          )}
        </UploadContainer>
      )}
      <RowView>
        {files?.map((file, idx) => {
          const icon = getIconByType(file.type);
          return file.type === 'image' ? (
            <SelectedImageContainer key={idx}>
              {showCloseButton && (
                <CloseContainer onPress={() => removeItem(file)}>
                  <Icon
                    name={'close'}
                    type={'AntDesign'}
                    size={getByScreenSize(theme.text.s9, theme.text.s10)}
                    color={'white'}
                  />
                </CloseContainer>
              )}
              <Image source={{uri: file.uri}} />
            </SelectedImageContainer>
          ) : (
            <SelectedItemPdfContainer
              key={idx}
              style={{backgroundColor: icon.background}}>
              <CloseContainer onPress={() => removeItem(file)}>
                <Icon
                  name={'close'}
                  type={'AntDesign'}
                  size={getByScreenSize(theme.text.s9, theme.text.s10)}
                  color={'white'}
                />
              </CloseContainer>
              <Icon
                name={icon.name}
                type={icon.type}
                size={theme.text.s3}
                color={icon.color}
              />
            </SelectedItemPdfContainer>
          );
        })}
        {files.length == 0
          ? false
          : addMultiplePhotos &&
            files.length < 5 && (
              <SelectedItemContainer
                style={{
                  backgroundColor: theme.files.addBackground,
                  marginRight: '2%',
                }}
                onPress={() => cameraLaunch()}
                disabled={imageDisabled}>
                <Icon
                  name={'add-circle-outline'}
                  type={'Ionicons'}
                  size={theme.text.s3}
                  color={theme.primary}
                />
              </SelectedItemContainer>
            )}
      </RowView>
      {showUploadButton && files.length > 0 && (
        <Button
          label={'upload.uploadBuildingFiles'}
          type={'solid'}
          labelStyle={{
            fontSize: getByScreenSize(theme.text.s7, theme.text.s10),
          }}
          onPress={() => uploadFiles()}
        />
      )}
    </Container>
  );
};

CameraButton.propTypes = {
  // title: PropTypes.string,
  // circleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // onChange: PropTypes.func,
  // type: PropTypes.string,
  // fileNameCode: PropTypes.string.isRequired,
  // showUploadButton: PropTypes.bool,
  // showUploadBuildingPhotoButton :PropTypes.bool,
  // showCloseButton:PropTypes.bool,
  // onUploadPress: PropTypes.func,
  // addMultiplePhotos:PropTypes.bool,
};

CameraButton.defaultProps = {
  // title: null,
  // titleStyle: null,
  // circleStyle: null,
  // onChange: null,
  // type: "photo",
  // showUploadButton: false,
  // showUploadBuildingPhotoButton:false,
  // showCloseButton:false,
  // onUploadPress: null,
  // addMultiplePhotos:false
};

export default CameraButton;
