import { CONSTANTS } from "../actions";

let listID = null;
let cardID = null;

// const initialState = [
//     {
//         title: "Tytuł 1",
//         id: `list-${0}`,
//         cards: [
//             {
//                 id: `card-${0}`,
//                 text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! Reiciendis error repudiandae labore voluptatum, vitae sunt!'
//             },
//             {
//                 id: `card-${1}`,
//                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! Reiciendis error repudiandae labore voluptatum, vitae sunt!."
//             }
//         ]
//     },
//     {
//         title: "Tytuł 2",
//         id: `list-${1}`,
//         cards: [
//             {
//                 id: `card-${2}`,
//                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commod"
//             },
//             {
//                 id: `card-${3}`,
//                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! "

//             },
//             {
//                 id: `card-${4}`,
//                 text: "Testy fsdfsfsf"
//             },
//             {
//                 id: `card-${5}`,
//                 text: "fsfsfsfsdf"
//             }
//         ]
//     }
// ]

const initialState = [
    {
        title: "",
        id: '',
        cards: []
    }
]

const listsReducer = (state = initialState, action) => {

    switch (action.type) {

        case CONSTANTS.GET_DATA_REQUESTED:
            return { ...state, isLoading: true };

        case CONSTANTS.SHOW_LIST:
            const List = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            return [...state, List];

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            listID += 1
            return [...state, newList];

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            };
            cardID += 1;

            // console.log("action received", action);

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list
                }
            });
            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            } = action.payload;
            const newState = [...state];

            if (type === "list") {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }


            if (droppableIdStart === droppableIdEnd) {

                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }


            if (droppableIdStart !== droppableIdEnd) {

                const listStart = state.find(list => droppableIdStart === list.id)
                const card = listStart.cards.splice(droppableIndexStart, 1);

                const listEnd = state.find(list => droppableIdEnd === list.id);

                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }
            return newState;
        default:
            return state;
    }
};

export default listsReducer;