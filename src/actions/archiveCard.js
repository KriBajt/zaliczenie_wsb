import { CONSTANTS } from "../actions";

export default function archiveCard(cardId, listId) {
    return dispatch => {
        dispatch({ type: CONSTANTS.ARCHIVE_POST, payload: { cardId, listId } })
    }
}
