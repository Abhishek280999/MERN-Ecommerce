import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionTypes";
import axios from 'axios';

const token = localStorage.getItem("jwt")

// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) localStorage.setItem("jwt", user.jwt);
    console.log("registerr :", user);
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};


// Login action creators
const getUserRequest = () => ({ type: LOGIN_REQUEST });
const getUserSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const getUserFailure = error => ({ type: LOGIN_FAILURE, payload: error });

export const login = userData => async dispatch => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
      const user = response.data;
      if(user.jwt) localStorage.setItem("jwt",user.jwt)
      console.log("login ",user)
      dispatch(loginSuccess(user.jwt));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
  

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });
  //  get user from token

  export const getUser = (token) => async (dispatch) => {
    dispatch(getUserRequest());
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
            "Authorization":`Bearer ${token}`
          }
      });
      const user = response.data;
      dispatch(getUserSuccess(user));
    } catch (error) {
      dispatch(getUserFailure(error.message));
    }
  };


  export const logout = () => (dispatch) => {
      dispatch({ type: LOGOUT , payload:null});
    //   localStorage.clear();
    };
  