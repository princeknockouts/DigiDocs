import {
	PURPOSE_OF_APPLICATION,
	TYPE_OF_DOCUMENT_VALUE_CHANGED,
	ORGANIZATION_NAME_VALUE_CHANGED,
} from "./ActionTypes";

import axios from "axios";

export const purposeOfApplication = (purpose) => {
	return (dispatch) => {
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
