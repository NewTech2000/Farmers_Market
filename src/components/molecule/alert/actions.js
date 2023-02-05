import { SHOW_ALERT, HIDE_ALERT } from './types';

export const showAlert = ({ message, title }) => dispatch =>
  dispatch({ type: SHOW_ALERT, payload: { message, title } });

export const closeAlert = () => dispatch => dispatch({ type: HIDE_ALERT });
