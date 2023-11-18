import { ADD_DRINK, REMOVE_DRINK } from "./action";

const initialState = {
    drinks: []
};

const drinkReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DRINK: 
            const { id, drinkName } = action.payload
            return {
                ...state,
                drinks: [...state.drinks, {id, drinkName}]
            };
        case REMOVE_DRINK: 
            return {
                ...state, 
                drinks: state.drinks.filter(drink => drink.id !== action.payload.id)
            };
        default: 
            return state;
    }
}

export default drinkReducer;