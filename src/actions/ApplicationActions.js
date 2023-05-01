import {
	PURPOSE_OF_APPLICATION,
	TYPE_OF_DOCUMENT_VALUE_CHANGED,
	ORGANIZATION_NAME_VALUE_CHANGED,
} from "./ActionTypes";

import { FETCH_PROFILE_DATA, SET_APPLICATION_DATA } from "../extras/API";

import axios from "axios";

export const purposeOfApplication = (purpose) => {
	return (dispatch) => {
		console.log(purpose);
		dispatch({
			type: PURPOSE_OF_APPLICATION,
			payload: purpose,
		});
	};
};

export const typeOfDocumentValueChanged = (value) => {
	return (dispatch) => {
		dispatch({
			type: TYPE_OF_DOCUMENT_VALUE_CHANGED,
			payload: value,
		});
	};
};

export const organizationNameValueChanged = (value) => {
	return (dispatch) => {
		dispatch({
			type: ORGANIZATION_NAME_VALUE_CHANGED,
			payload: value,
		});
	};
};

export const setApplicationRequestAPICall = (type, organization, purpose) => {
	return (dispatch) => {
		var data = {
			type: type,
			organization: organization,
			purpose: purpose,
		};

		console.log(data);

		// axios({
		// 	method: "POST",
		// 	url: SET_APPLICATION_DATA,
		// 	data: data,
		// })
		// 	.then((response) => {
		// 		// console.log(response.data);
		// 		if (response.data.success) {
		// 			// dispatch({
		// 			// 	type: ,
		// 			// 	payload: response.data.profile_data_array,
		// 			// });
		// 			console.log(response.data);
		// 		} else {
		// 			console.log("failed");
		// 		}
		// 	})
		// 	.catch(
		// 		// catch error
		// 		(error) => {
		// 			console.log(error);
		// 		}
		// 	);
	};
};
