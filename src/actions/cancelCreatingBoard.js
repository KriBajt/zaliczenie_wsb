import { CONSTANTS } from "../actions"


export default function cancelCreatingBoard() {
    return {
        type: CONSTANTS.CANCEL_NEW_BOARD,
        payload: false,
    }
}
