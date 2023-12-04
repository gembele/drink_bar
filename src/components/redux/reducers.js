import { EDIT_DRINK, RESET_DRINKS, RESET_ONE } from "./action";

const initialState = {
    drinks: [
        {id:1, drinkName:'Coca-Cola', type: 'single', ingredients:['Coca-Cola'] },
        {id:2, drinkName:'Sprite', type: 'single', ingredients:['Sprite'] },
        {id:3, drinkName:'Apple Juice', type: 'single', ingredients:['Apple Juice'] },
        {id:4, drinkName:'Peach Juice', type: 'single', ingredients:['Peach Juice'] },
        {id:5, drinkName:'Mix 1', type: 'mix', ingredients:['Apple Juice', 'Peach Juice'] },
        {id:6, drinkName:'Mix 2', type: 'mix', ingredients:['Coca-Cola', 'Apple Juice'] },
        {id:7, drinkName:'empty', type: 'mix', ingredients:[] },
        {id:8, drinkName:'empty', type: 'mix', ingredients:[] },
    ]
};

const drinkReducer = (state = initialState, action) => {
    switch(action.type) {
            case EDIT_DRINK:
                return {
                ...state,
                drinks: state.drinks.map((drink) =>
                    drink.id === action.payload.drinkId ? { ...drink, ...action.payload.updatedDrinkData } : drink
                ),
                };
            case RESET_DRINKS:
                return {
                    ...state,
                    drinks: initialState.drinks,
                };
            case RESET_ONE:
                return {
                    ...state,
                    drinks: state.drinks.map((drink) =>
                    drink.id === action.payload ? {...drink, initialState}: drink),
                };
        default: 
            return state;
    }
}

export default drinkReducer;