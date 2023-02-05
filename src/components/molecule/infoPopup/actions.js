import { SHOW_INFO_POPUP, HIDE_INFO_POPUP } from './types';

// eslint-disable-next-line max-len
export const showInfoPopUp = ({ title, description, onPressClose }) => (dispatch) => dispatch({ type: SHOW_INFO_POPUP, payload: { title, description, onPressClose } });
export const hideInfoPopUp = () => (dispatch) => dispatch({ type: HIDE_INFO_POPUP });
