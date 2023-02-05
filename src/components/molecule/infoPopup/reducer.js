/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import { SHOW_INFO_POPUP, HIDE_INFO_POPUP } from './types';

const INIT_STATE = {
  isVisible: false,
  title: '',
  description: '',
  onPressClose:null
};

export default (state = INIT_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SHOW_INFO_POPUP:
        draft.isVisible = true;
        draft.title = action.payload.title;
        draft.description = action.payload.description;
        draft.onPressClose = action.payload.onPressClose;
        break;
      case HIDE_INFO_POPUP:
        draft.isVisible = false;
        draft.title = '';
        draft.description = '';
        draft.onPressClose = null;
        break;
      default:
        return state;
    }
  });
