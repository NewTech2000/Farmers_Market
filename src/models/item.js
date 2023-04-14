// store.js

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const API_BASE_URL = 'https://localhost:192.168.1.5';

const initialState = {
  items: [],
  favorites: [],
  status: 'idle',
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        items: action.payload,
      };
    case 'ADD_ITEM_SUCCESS':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'UPDATE_ITEM_SUCCESS':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item,
        ),
      };
    case 'DELETE_ITEM_SUCCESS':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'DELIVER_ITEM_SUCCESS':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item,
        ),
      };
    default:
      return state;
  }
};

const fetchItemsSuccess = items => ({
  type: 'FETCH_ITEMS_SUCCESS',
  payload: items,
});

const addItemSuccess = item => ({
  type: 'ADD_ITEM_SUCCESS',
  payload: item,
});

const updateItemSuccess = item => ({
  type: 'UPDATE_ITEM_SUCCESS',
  payload: item,
});

const deleteItemSuccess = id => ({
  type: 'DELETE_ITEM_SUCCESS',
  payload: id,
});

const deliverItemSuccess = item => ({
  type: 'DELIVER_ITEM_SUCCESS',
  payload: item,
});

export const fetchItems = () => {
  return async dispatch => {
    const response = await axios.get(`${API_BASE_URL}/items`);
    dispatch(fetchItemsSuccess(response.data));
  };
};

export const addItem = item => {
  return async dispatch => {
    const response = await axios.post(`${API_BASE_URL}/items`, item);
    dispatch(addItemSuccess(response.data));
  };
};

export const updateItem = item => {
  return async dispatch => {
    const response = await axios.put(
      `${API_BASE_URL}/items/${item.id}`,
      item,
    );
    dispatch(updateItemSuccess(response.data));
  };
};

export const deleteItem = id => {
  return async dispatch => {
    await axios.delete(`${API_BASE_URL}/items/${id}`);
    dispatch(deleteItemSuccess(id));
  };
};

export const deliverItem = item => {
  return async dispatch => {
    const response = await axios.put(
      `${API_BASE_URL}/items/${item.id}/deliver`,
      {delivered: true},
    );
    dispatch(deliverItemSuccess(response.data));
  };
};

export const addFavorite = createAsyncThunk('item/addFavorite', async id => {
  const response = await axios.post(`${API_BASE_URL}/favorites`, {itemId: id});
  return response.data;
});

export const removeFavorite = createAsyncThunk(
  'item/removeFavorite',
  async id => {
    await axios.delete(`${API_BASE_URL}/favorites/${id}`);
    return id;
  },
);

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
