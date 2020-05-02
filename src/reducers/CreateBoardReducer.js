import uniqueId from 'lodash/uniqueId'

import { CONSTANTS } from '../actions/index';


const initialState = {
    isBoardOpen: false,
    title: null,
    id: null,
    success: false,
}


export default function (state = initialState, action) {

    switch (action.type) {

        case CONSTANTS.CREATE_NEW_BOARD:
            return {
                ...state,
                title: null,
                isBoardOpen: true,
                id: null,
                success: false,
            };

        case CONSTANTS.CANCEL_NEW_BOARD:
            return {
                ...state,
                title: null,
                isBoardOpen: false,
                id: null,
                success: false,
            };

        case CONSTANTS.SUBMIT_NEW_BOARD:
            return {
                ...state,
                isBoardOpen: false,
                title: action.payload,
                id: uniqueId(''),
            }

        default:
            return state;

    }

}
