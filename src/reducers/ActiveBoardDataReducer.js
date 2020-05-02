import { combineReducers } from 'redux';
import { CONSTANTS } from '../actions/index';
import uniqueId from 'lodash/uniqueId';

const ListReducer = (state = {}, action) => {

    const listId = uniqueId("list_");

    switch (action.type) {

        case CONSTANTS.SELECT_ACTIVE_BOARD:
            return action.payload.data || [];

        case CONSTANTS.SUBMIT_LIST:
            return {
                ...state,
                [listId]: { // the unique ID of the list
                    name: action.payload, // name of the list
                    id: listId, // list ID
                    cards: [] // card IDs go inside here
                }
            };

        case CONSTANTS.SUBMIT_NEW_CARD: {
            const { listId, cardName, cardId } = action.payload;
            const currentList = state[listId];
            currentList.cards.push({ name: cardName, cardId, listId, isArchived: false })
            return {
                ...state,
                [listId]: currentList,
            }
        }

        case CONSTANTS.HANDLE_DROP: {
            const { cardId, cardName, listId, newListId } = action.payload;
            const currentList = state[newListId]; // list that's going to be taking the new card
            currentList.cards.push({ name: cardName, cardId, listId: newListId }) // add the card to the list
            const removeCard = state[listId].cards.findIndex(card => card.cardId === cardId); // find the card to remove
            const oldList = state[listId].cards.splice(removeCard, 1) // remove the card from the list

            return {
                ...state,
                [newListId]: currentList,
            }
        }

        case CONSTANTS.ARCHIVE_POST: {
            const { cardId, listId } = action.payload;
            const currentList = state[listId];
            const findCard = currentList.cards.find(card => card.cardId === cardId);

            if (findCard.isArchived === false) {
                findCard.isArchived = true;
            } else {
                findCard.isArchived = false;
            }

            return {
                ...state,
                [listId]: currentList
            }
        }

        default:
            return state;
    }
}


const ActiveBoardReducer = combineReducers({
    listItems: ListReducer,
})

export default ActiveBoardReducer;
