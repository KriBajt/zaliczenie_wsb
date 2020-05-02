import { CONSTANTS } from "../actions"
import Store from '../store';

export default function submitNewBoard(title) {
    return dispatch => {

        dispatch({ type: CONSTANTS.SUBMIT_NEW_BOARD, payload: title });

        const newBoard = {
            id: Store.getState().newBoard.id,
            title: Store.getState().newBoard.title
        }

        dispatch({ type: CONSTANTS.STORE_NEW_BOARD_TO_COLLECTION, payload: newBoard });

    }
}
