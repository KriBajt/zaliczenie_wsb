import { CONSTANTS } from "../actions";

export default function createNewBoard() {
    return {
        type: CONSTANTS.CREATE_NEW_BOARD,
        payload: true,
    };
}
