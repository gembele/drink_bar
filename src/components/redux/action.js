export const RESET_DRINKS = 'RESET_DRINKS';
export const RESET_ONE = 'RESET_ONE';
export const EDIT_DRINK = 'EDIT_DRINK';
export const EDIT_INGR = 'EDIT_INGR';

export const editDrink = (drinkId, updatedDrinkData) => ({
  type: EDIT_DRINK,
  payload: {
    drinkId,
    updatedDrinkData,
  },
});

export const editIngredient = (ingredientId, updatedIngredientData) => ({
  type: EDIT_INGR,
  payload: {
    ingredientId,
    updatedIngredientData,
  },
});

export const resetOne = id => ({
  type: RESET_ONE,
  payload: {
    id
  }
});

export const resetDrinks = () => ({
  type: RESET_DRINKS,
});

