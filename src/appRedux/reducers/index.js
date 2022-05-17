import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Settings from "./Settings";
import Auth from "./Auth";

import Common from "./Common";
import AdmissionReducer from "./admissionReducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  AdmissionReducer: AdmissionReducer,
  common: Common,
});

export default createRootReducer
