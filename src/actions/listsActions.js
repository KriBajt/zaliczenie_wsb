import { CONSTANTS } from "../actions";

export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    };
};
export const showList = title => {
    return {
        type: CONSTANTS.SHOW_LIST,
        payload: title
    };
};

export function getDataRequested() {
    return {
        type: 'CONSTANTS.SHOW_LIST'
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

        fetch('https://ninjaorganizer.azurewebsites.net/users/1/taskboards/1/cards/')
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