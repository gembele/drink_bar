import { EDIT_DRINK, RESET_DRINKS, RESET_ONE, EDIT_INGR } from "./action";

const initialState = {
    ingredients: [
        {id:1, ingredientName: 'empty'},
        {id:2, ingredientName: 'empty'},
        {id:3, ingredientName: 'empty'},
        {id:4, ingredientName: 'empty'},
    ],
    drinks: [
        {id:1, drinkName:'empty', type: 'single', ingredients:[], isExpanded: false },
        {id:2, drinkName:'empty', type: 'single', ingredients:[], isExpanded: false },
        {id:3, drinkName:'empty', type: 'single', ingredients:[], isExpanded: false },
        {id:4, drinkName:'empty', type: 'single', ingredients:[], isExpanded: false },
        {id:5, drinkName:'empty', type: '1+2', ingredients:[], isExpanded: false },
        {id:6, drinkName:'empty', type: '1+3', ingredients:[], isExpanded: false },
        {id:7, drinkName:'empty', type: '1+4', ingredients:[], isExpanded: false },
        {id:8, drinkName:'empty', type: '2+3', ingredients:[], isExpanded: false },
        {id:9, drinkName:'empty', type: '2+4', ingredients:[], isExpanded: false },
        {id:10, drinkName:'empty', type: '3+4', ingredients:[], isExpanded: false },
    ],
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
            case EDIT_INGR:
                return {
                ...state,
                ingredients: state.ingredients.map((ingredient) => 
                ingredient.id === action.payload.ingredientId ? { ...ingredient, ...action.payload.updatedIngredientData } : ingredient),
                }; 
            case RESET_DRINKS:
                return {
                    ...state,
                    drinks: initialState.drinks,
                    ingredients: initialState.ingredients
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