export const ADD_DRINK = "ADD_DRINK";
export const REMOVE_DRINK = "REMOVE_DRINK";

let drinkID = 1;

export const addDrink = drinkName => ({
  type: ADD_DRINK,
  payload: {
    id: drinkID++,
    drinkName
  }
});

export const removeDrink = id => ({
  type: REMOVE_DRINK,
  payload: {
    id
  }
});
