/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import { SHOW_ALERT, HIDE_ALERT } from './types';

const INIT_STATE = {
  isVisible: false,
  message: '',
  title: '',
};

export default (state = INIT_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SHOW_ALERT:
        draft.isVisible = true;
        draft.message = action.payload.message;
        draft.title = action.payload.title;
        break;
      case HIDE_ALERT:
        draft.isVisible = false;
        draft.message = '';
        break;
      default:
        return state;
    }
  });
