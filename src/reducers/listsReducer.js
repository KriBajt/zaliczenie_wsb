import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 4;

const initialState = [
    {
        title: "Tytuł 1",
        id: 0,
        cards: [
            {
                id: 0,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! Reiciendis error repudiandae labore voluptatum, vitae sunt!'
            },
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! Reiciendis error repudiandae labore voluptatum, vitae sunt!."
            }
        ]
    },
    {
        title: "This Episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commod"
            },
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! "

            },
            {
                id: 2,
                text: "Testy fsdfsfsf"
            },
            {
                id: 3,
                text: "fsfsfsfsdf"
            }
        ]
    }
]



const listsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            }
            cardID += 1;

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            });
            return newState;
        default:
            return state;
    }
};

export default listsReducer;