import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';

const addUser = user => ({
  type: ADD_USER,
  payload: user,
});

const deleteUser = userId => ({
  type: DELETE_USER,
  payload: userId,
});

const updateUser = user => ({
  type: UPDATE_USER,
  payload: user,
});

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user,
        ),
      };
    default:
      return state;
  }
};

export const addUserAsync = user => {
  return async dispatch => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, user);
      dispatch(addUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserAsync = userId => {
  return async dispatch => {
    try {
      await axios.delete(`${API_BASE_URL}/users/${userId}`);
      dispatch(deleteUser(userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserAsync = user => {
  return async dispatch => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/users/${user.id}`,
        user,
      );
      dispatch(updateUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default userReducer;
