import {
    SHOW_MESSAGE,
    GET_ADMISSION_SUCCESS_DATA,
    GET_STATUS_INITIAL,
  } from "constants/ActionTypes";
  
  const INIT_STATE = {
    loader: false,
    showMessage: false,
    get_Admission_Res: '',
    getAdmissionRes:'',
    status : 'Initial'
  };
  
  export default(state = INIT_STATE, action) => {
  
    switch (action.type) {
  
        case GET_ADMISSION_SUCCESS_DATA:
        {
            return {
                ...state,
                get_Admission_Res: action.payload,
                loader: false,
                status : 'Dataloaded',
               
            }
        }
        case GET_STATUS_INITIAL:
        {
            return{
                ...state,
                status : 'Initial',
                loader: true,
            }
        }
        case SHOW_MESSAGE:
        {
            return {
                ...state,
                showMessage: true,
                loader: true,
                status : 'Initial',
            }
        }
        
        default:
            return state;
    }
  }