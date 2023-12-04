export const RESET_DRINKS = 'RESET_DRINKS';
export const RESET_ONE = 'RESET_ONE';
export const EDIT_DRINK = 'EDIT_DRINK';

export const editDrink = (drinkId, updatedDrinkData) => ({
  type: EDIT_DRINK,
  payload: {
    drinkId,
    updatedDrinkData,
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