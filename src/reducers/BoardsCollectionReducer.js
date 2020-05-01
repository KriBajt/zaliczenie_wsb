import { CONSTANTS } from '../actions/index';

const initialState = [];

export default function (state = initialState, action) {

    switch (action.type) {
        case CONSTANTS.STORE_NEW_BOARD_TO_COLLECTION:
            return [...state, action.payload];

        default:
            return state;

    }
}
