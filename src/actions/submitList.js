import { CONSTANTS } from "../actions"


export default function submitList(name) {
    return dispatch => {
        dispatch({ type: CONSTANTS.SUBMIT_LIST, payload: name })
    }
}
