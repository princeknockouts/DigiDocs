import {
	PROFILE_CONTACT_VALUE_CHANGED,
	PROFILE_EMAIL_VALUE_CHANGED,
	PROFILE_FIRST_NAME_VALUE_CHANGED,
	PROFILE_GENDER_VALUE_CHANGED,
	PROFILE_LAST_NAME_VALUE_CHANGED,
	SET_PROFILE_DATA,
} from "./ActionTypes";

import axios from "axios";
import { FETCH_PROFILE_DATA } from "../extras/API";

export const profileFirstNameValueChanged = (fname) => {
	dispatch({
		type: PROFILE_FIRST_NAME_VALUE_CHANGED,
		payload: fname,
	});
};

export const profileLastNameValueChanged = (lname) => {
	dispatch({
		type: PROFILE_LAST_NAME_VALUE_CHANGED,
		payload: lname,
	});
};

export const profileGenderValueChanged = (gender) => {
	dispatch({
		type: PROFILE_GENDER_VALUE_CHANGED,
		payload: gender,
	});
};

export const profileContactValueChanged = (contact) => {
	dispatch({
		type: PROFILE_CONTACT_VALUE_CHANGED,
		payload: contact,
	});
};

export const profileEmailValueChanged = (email) => {
	dispatch({
		type: PROFILE_EMAIL_VALUE_CHANGED,
		payload: email,
	});
};

export const getProfileDataAPICall = (user_id) => {
	return (dispatch) => {
		var data = {
			user_id: user_id,
		};
		// console.log(user_id);
		axios({
			method: "POST",
			url: FETCH_PROFILE_DATA,
			data: data,
		})
			.then((response) => {
				if (response.data.success) {
					console.log(response.data);
					dispatch({
						type: SET_PROFILE_DATA,
						payload: response.data.profile_data_array,
					});
				} else {
					console.log("failed");
				}
			})
			.catch(
				// catch error
				(error) => {
					console.log(error);
				}
			);
	};
};
