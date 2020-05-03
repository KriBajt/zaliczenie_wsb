import { CONSTANTS } from "../actions";

export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    };
};

export function getDataRequested() {
    return {
        type: 'CONSTANTS.ADD_CARD'
    };
}

export function getDataDone(data) {
    return {
        type: 'GET_DATA_DONE',
        payload: data
    };
}

export function getDataFailed(error) {
    return {
        type: 'GET_DATA_FAILED',
        payload: error
    };
}

export function getData() {
    return dispatch => {
        // set state to "loading"
        dispatch(getDataRequested());

        fetch('http://localhost:1028/api/taskboards/cards/')
            .then(response => response.json())
            .then(data => {
                dispatch(getDataDone(data));
            })
            .catch(error => {
                dispatch(getDataFailed(error));
            })
    }
}

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            type

        }
    }
}