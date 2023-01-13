import { PROFILE_CONTACT_VALUE_CHANGED, PROFILE_EMAIL_VALUE_CHANGED, PROFILE_FIRST_NAME_VALUE_CHANGED, PROFILE_GENDER_VALUE_CHANGED, PROFILE_LAST_NAME_VALUE_CHANGED } from "./ActionTypes"

export const profileFirstNameValueChanged = fname => {
    dispatch({
        type: PROFILE_FIRST_NAME_VALUE_CHANGED,
        payload: fname,
    });
}

export const profileLastNameValueChanged = lname => {
    dispatch({
        type: PROFILE_LAST_NAME_VALUE_CHANGED,
        payload: lname,
    });
}

export const profileGenderValueChanged = gender => {
    dispatch({
        type: PROFILE_GENDER_VALUE_CHANGED,
        payload: gender,
    });
}

export const profileContactValueChanged = contact => {
    dispatch({
        type: PROFILE_CONTACT_VALUE_CHANGED,
        payload: contact,
    });
}

export const profileEmailValueChanged = email => {
    dispatch({
        type: PROFILE_EMAIL_VALUE_CHANGED,
        payload: email,
    });
}