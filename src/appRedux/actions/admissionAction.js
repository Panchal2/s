import {
  ADMISSION_DETAIL,
    GET_ADMISSION_SUCCESS_DATA,
    GET_STATUS_INITIAL,
    SHOW_MESSAGE,
    HIDE_MESSAGE
  } from "constants/ActionTypes";
  
  export const Get_admission = (user) => {
    return {
      type: ADMISSION_DETAIL,
      payload: user
    };
  };
  
export const hideMessage = () => {
    return {
      type: HIDE_MESSAGE,
    };
  };
  export const getAdmissionSuccess = (data) => {
    return {
      type: GET_ADMISSION_SUCCESS_DATA,
      payload: data
    };
  };
  
  export const setStatusToInitial = () => {
    return {
      type: GET_STATUS_INITIAL,
    };
  };
  
  export const showErrorMessage = (message) => {
    return {
      type: SHOW_MESSAGE,
      payload: message
    };
  };
  
  export const showAuthMessage = (message) => {
    return {
      type: SHOW_MESSAGE,
      payload: message
    };
  };