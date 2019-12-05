import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,

  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,

  PASSWORD_RESET_START,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,

  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  USER_UNAUTHORIZED,

} from "../Actions/userActions";
import React from "react";

const initialState = {
  //userState: [],
  isSubmitting: false,
  error: null,
  selectedOption: null,
  token: localStorage.getItem("token"),
  uid: localStorage.getItem("uid"),
  loggedIn: false,
  registering: false,
  users: [],






};


const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case REGISTER_USER_START:
      return {
        ...state,
        registering: true

        // isSubmitting: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registering: false,
        errorStatusCode: null,
        users: action.payload,
       // isSubmitting: false,
       // userState: action.payload,
        error: null
      };
    case REGISTER_USER_FAIL:
        return {
            ...state,
          error: action.payload
        }

    case LOGIN_USER_START:
      return {
        ...state,
        loggingIn: true

        // isSubmitting: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload,
        loggedIn: true,
        // isSubmitting: false,
        // userState: action.payload,
        error: null
      };
    case LOGIN_USER_FAIL:
        return {
            ...state,
          error: action.payload
        }


    case PASSWORD_RESET_START:
      return {
        ...state,
        isSubmitting: true
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        userState: action.payload,
        error: null
      };
    case PASSWORD_RESET_FAIL:
        return {
            ...state,
          error: action.payload
        };

    case FETCH_DATA_START:
      return {
        ...state,
        fetchingEvents: true
      };
    case FETCH_DATA_SUCCESS:
      // console.log(action.payload.data)
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingEvents: false,
        myEvents: action.payload
      };
    case USER_UNAUTHORIZED:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingEvents: false
      };

      case FETCH_DATA_FAILURE:
        return {
            ...state,
          error: action.payload
        }


    default:
      return state;
  }
};

export default userReducer