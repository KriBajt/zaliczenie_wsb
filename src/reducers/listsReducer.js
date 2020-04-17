import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 6;

const initialState = [
    {
        title: "Tytuł 1",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! Reiciendis error repudiandae labore voluptatum, vitae sunt!'
            },
            {
                id: `card-${1}`,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! Reiciendis error repudiandae labore voluptatum, vitae sunt!."
            }
        ]
    },
    {
        title: "Tytuł 2",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commod"
            },
            {
                id: `card-${3}`,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis nesciunt tempora, recusandae possimus voluptatibus sed laudantium culpa, incidunt maiores saepe accusantium commodi! "

            },
            {
                id: `card-${4}`,
                text: "Testy fsdfsfsf"
            },
            {
                id: `card-${5}`,
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
                id: `list-${listID}`
            }
            listID += 1
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
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