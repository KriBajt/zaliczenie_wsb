import { CONSTANTS } from "../actions"

export default function enableListEditMode() {
    return dispatch => dispatch({ type: CONSTANTS.LIST_EDIT_MODE_ENABLED, payload: true });
}
