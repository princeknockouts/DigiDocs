import {
	PURPOSE_OF_APPLICATION,
	TYPE_OF_DOCUMENT_VALUE_CHANGED,
	ORGANIZATION_NAME_VALUE_CHANGED,
} from "../actions/ActionTypes";

var INITIAL_STATE = {
	purpose: "",
	type: "",
	organizationName: "",
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PURPOSE_OF_APPLICATION:
			return { ...state, purpose: action.payload };
		case TYPE_OF_DOCUMENT_VALUE_CHANGED:
			return { ...state, type: action.payload };
		case ORGANIZATION_NAME_VALUE_CHANGED:
			return { ...state, organizationName: action.payload };
		default:
			return state;
	}
};
