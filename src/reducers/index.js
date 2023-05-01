import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import ApplicationReducer from "./ApplicationReducer";

export default combineReducers({
	login: LoginReducer,
	profile: ProfileReducer,
	application: ApplicationReducer,
});
