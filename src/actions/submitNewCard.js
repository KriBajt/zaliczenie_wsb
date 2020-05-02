import { CONSTANTS } from "../actions"


export default function submitNewCard(card, cardId, listId) {
    return dispatch => {
        dispatch({ type: CONSTANTS.SUBMIT_NEW_CARD, payload: { cardName: card, listId, cardId } });
    }
}
