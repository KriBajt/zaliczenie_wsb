import { CONSTANTS } from '../actions/index';


const initialState = {
    title: null,
    id: null,
    isFetching: false,
    isEditingList: false,
}

export default function (state = initialState, action) {

    switch (action.type) {

        case CONSTANTS.SELECT_ACTIVE_BOARD:
            return {
                ...state,
                title: action.payload.title,
                id: action.payload.id,
                isFetching: true
            }

        case CONSTANTS.SELECT_ACTIVE_BOARD_SUCCESS:
            return {
                ...state,
                isFetching: false
            }

        case CONSTANTS.STOP_EDITING_LIST:
            return {
                ...state,
                isEditingList: action.payload
            }

        case CONSTANTS.LIST_EDIT_MODE_ENABLED:
            return {
                ...state,
                isEditingList: action.payload
            };


        default:
            return {
                ...state
            };

    }
}
