import { CONSTANTS } from "../actions";


export default function handleDrop(cardName, cardId, listId, newListId) {
    return dispatch => {
        dispatch({ type: CONSTANTS.HANDLE_DROP, payload: { cardName, cardId, listId, newListId } });
    }
}
