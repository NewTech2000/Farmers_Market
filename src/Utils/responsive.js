import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const hdp = (percent) => hp(percent);
export const wdp = (percent) => wp(percent);

/**
 * This function return the value depending on the screen size
 */
export const getByScreenSize = (smValue, lgValue) =>
  wp(100) < 500 ? smValue : lgValue;
