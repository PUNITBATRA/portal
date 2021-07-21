import authReducer from "./authReducer";
import jobReducer from "./jobReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  auth: authReducer,
  job: jobReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
export default rootReducer;
