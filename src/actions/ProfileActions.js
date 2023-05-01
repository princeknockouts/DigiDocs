import {
	PROFILE_CONTACT_VALUE_CHANGED,
	PROFILE_EMAIL_VALUE_CHANGED,
	PROFILE_FIRST_NAME_VALUE_CHANGED,
	PROFILE_GENDER_VALUE_CHANGED,
	PROFILE_LAST_NAME_VALUE_CHANGED,
	SET_PROFILE_DATA,
	GET_DOCUMENT_DETAILS,
} from "./ActionTypes";

import axios from "axios";
import {
	FETCH_PROFILE_DATA,
	GET_DOCUMENTS,
	GET_STUDENT_ORGANIZATION_MAPPING,
} from "../extras/API";

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

export const getDoucmentDetails = (doc_arr) => {
	dispatch({
		type: GET_DOCUMENT_DETAILS,
		payload: doc_arr,
	});
};

export const setProfileData = (data) => {
	dispatch({
		type: SET_PROFILE_DATA,
		payload: data,
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
				// console.log(response.data);
				if (response.data.success) {
					// console.log(response.data);
					dispatch({
						type: SET_PROFILE_DATA,
						payload: response.data.profile_data,
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

export const getStudentOrganizationMapping = (user_id) => {
	return (dispatch) => {
		var data = {
			user_id: user_id,
		};
		axios({
			method: "POST",
			url: GET_STUDENT_ORGANIZATION_MAPPING,
			data: data,
		})
			.then((response) => {
				if (response.data.success) {
					// console.log(response.data);
					// dispatch({
					// 	type: SET_PROFILE_DATA,
					// 	payload: response.data.profile_data,
					// });
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

export const getDocuments = (user_id, organzation_id) => {
	return (dispatch) => {
		var data = {
			user_id: user_id,
			organzation_id: organzation_id,
		};

		axios({
			method: "POST",
			url: GET_DOCUMENTS,
			data: data,
		})
			.then((response) => {
				if (response.data.success) {
					// console.log(response.data.document_details);
					dispatch({
						type: GET_DOCUMENT_DETAILS,
						payload: response.data.document_details,
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
