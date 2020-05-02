import find from 'lodash/find';
import { CONSTANTS } from "../actions"

import Store from '../store'

export default function selectActiveBoard(id) {
    return dispatch => {

        const boardsCollection = Store.getState().boardsCollection;
        const activeBoard = find(boardsCollection, board => board.id === id);

        dispatch({ type: CONSTANTS.SELECT_ACTIVE_BOARD, payload: activeBoard });

        dispatch({ type: CONSTANTS.SELECT_ACTIVE_BOARD_SUCCESS });

    }
}
