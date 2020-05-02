import { CONSTANTS } from "../actions";


export default function disableListEditMode() {
    return dispatch => dispatch({ type: CONSTANTS.STOP_EDITING_LIST, payload: false });
}
