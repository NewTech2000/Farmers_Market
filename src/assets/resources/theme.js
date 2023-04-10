import {RFValue} from 'react-native-responsive-fontsize';

const SCREEN_HEIGHT_REFERENCE = 742;

/**
 * This can be used to create different themes
 * like dark and light. It can be then connected to
 * React context and controlled via a setting flag.
 */

export const PRIMARY_COLOR = '#009933';
export const SECONDARY_COLOR = '#A88448';

const defaultTheme = {
  primary: PRIMARY_COLOR,
  secondary: SECONDARY_COLOR,
  generalColor: '#2F9678',
  darkGray: '#535353',
  newButton: '#2E7E8E',
  lightGray: '#f2f2f2',
  notificationLightGray: '#b3b3b3',
  gray: '#cccccc',
  homeBackground: '#ffffff',
  modalBackground: 'rgba(0,0,0,0.5)',
  AppTitle: '#144B3B',
  errorText: '#FF0000',
  priceColor: '#E67300',
  userColor: '#002699',
  dotColor: '#9B5D1D',
  star: '#ffcc00',
  dark: '#262626',
  darkGreen:'#00802b',

  button: {
    PrimaryBackground: '#A88448',
    secondaryBackground: '#806600',
  },

  title: {
    titleColor: '#111111',
  },
  buildingInfo: {
    background: '#FFFFFF',
    titleBackground: '#FAFAF9',
    iconBackground: '#E56798',
    title: '#000000',
    description: '#555555',
    titleIcon: '#FFFFFF',
    sectionTitle: '#000000',
    acmsIconBackground: '#4FAC9C',
    notesIconBackground: '#E6D478',
    filesIconBackground: '#BAAC93',
    activityHistoryIconBackground: '#4FAC9C',
    auditsIconBackground: '#97CF5D',
    buildingHistoryIconBackground: '#E56798',
  },
  removeAcmStep1: {
    background: '#FFFFFF',
  },
  removeAcmStep2: {
    background: '#FFFFFF',
    text: '#444444',
    star: '#FF0000',
  },
  
  topTabs: {
    inActiveLabel: '#777777',
    activeLabel: PRIMARY_COLOR,
  },
  detailsFieldItem: {
    checkIcon: '#1d1d1d',
  },
  disableTextInput: {
    label: '#777777',
    value: '#444444',
    seperator: '#dddddd',
  },
  infoPopUp: {
    containerBackground: 'rgba(0,0,0,0.43)',
    background: '#FFFFFF',
    iconBackground: '#000000',
    infoIcon: '#FFFFFF',
    closeIcon: '#2d2d2d',
    separator: '#bbbbbb',
    text: '#000000',
  },
  alert: {
    backgroundPrimary: '#A1A1A1',
    textPrimary: '#FFFFFF',
  },
  fonts: {
    regular: 'SlatePro',
    semi_bold: 'SlatePro-Medium',
    bold: 'SlatePro-Bold',
  },
  genericInput: {
    colorPrimary: '#FFFFFF',
    textPrimary: '#242424',
    borderPrimary: '#CCCCCC',
    placeholderPrimary: '#777777',
  },
  label: {
    textPrimary: '#777777',
    required: '#8f1313',
  },
  text: {
    textPrimary: '#242424',
    dark: '#242424',
    light: '#FFFFFF',
    required: '#ab0303',
    placeholder: '#FFFFFF',
    borderLight: '#FFFFFF',
    borderFocus: '#80CBC4',
    forgotPasswordTextColor: '#002699',
    s1: RFValue(44, SCREEN_HEIGHT_REFERENCE),
    s2: RFValue(32, SCREEN_HEIGHT_REFERENCE),
    s3: RFValue(28, SCREEN_HEIGHT_REFERENCE),
    s4: RFValue(25, SCREEN_HEIGHT_REFERENCE),
    s5: RFValue(23, SCREEN_HEIGHT_REFERENCE),
    s6: RFValue(20, SCREEN_HEIGHT_REFERENCE),
    s7: RFValue(17, SCREEN_HEIGHT_REFERENCE),
    s8: RFValue(16, SCREEN_HEIGHT_REFERENCE),
    s9: RFValue(14, SCREEN_HEIGHT_REFERENCE),
    s10: RFValue(12, SCREEN_HEIGHT_REFERENCE),
    s11: RFValue(10, SCREEN_HEIGHT_REFERENCE),
    s12: RFValue(8, SCREEN_HEIGHT_REFERENCE),
  },
  tab: {
    colorPrimary: PRIMARY_COLOR,
    borderPrimary: '#FFFFFF',
    colorFocus: PRIMARY_COLOR,
    colorDisabled: '#A1A1A1',
    backgroundPrimary: '#FFFFFF',
    closeIconColor: '#8E8E93',
  },
  search: {
    backgroundColor: '#ffffff',
    inputBackground: 'white',
    inputBorder: '#A1A1A1',
    placeholder: '#909095',
  },
  viewACMs: {
    buttonColor: '#f15820',
  },
  camera: {
    buttonColor: '#00cdc0',
  },
  file: {
    lightBlue: '#e7f3fe',
    background: '#baac93',
  },
  input: {
    borderColor: '#cecece',
    error: 'red',
    placeholderPrimary: '#bfc6ea',
  },
  radio: {
    colorPrimary: '#ccc',
    activeColor: '#1a73e8',
  },
  roundedContainer: {
    borderColor: '#cecece',
  },
  fileDetails: {
    background: '#FFFFFF',
    titleBackground: '#FAFAF9',
    iconBackground: 'rgba(186,172,147,0.54)',
    title: '#000000',
    description: '#555555',
    titleIcon: '#FFFFFF',
    sectionTitle: '#000000',
    followersBackground: '#65eac4',
  },
  acmDetails: {
    background: 'rgba(222,222,222,0.24)',
  },
  buildingHistory: {
    background: '#FFFFFF',
    title: '#000000',
    label: '#444444',
    value: '#222222',
    Seperator: '#dddddd',
    iconBackground: '#E56798',
    icon: '#FFFFFF',
  },
  networkBar: {
    backgroundPrimary: '#00AA00',
    backgroundSecondary: '#AA0000',
    textPrimary: '#FFFFFF',
  },
  status: {
    success: '#3fbf62',
    error: '#eb4e2d',
    pending: '#5B6571',
    syncing: '#056be2',
    backgroundSuccess: '#eaf7ee',
    backgroundFailed: '#fcece9',
    backgroundPending: '#F4F5F6',
    backgroundAwaiting: '#7a3285',
    backgroundSync: '#e5effa',
    iconColor: '#ffffff',
    textColor: '#3B4B46',
  },
  files: {
    pdfBackground: '#FDC4C4',
    pdfIcon: '#B80808',
    wordBackground: '#C5D3FC',
    wordIcon: '#0A41D6',
    fileBackground: '#CDC7E5',
    fileIcon: '#57479A',
    addBackground: '#e5effa',
  },
};

export default defaultTheme;
