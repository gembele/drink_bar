import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { resetDrinks } from '../redux/action';

export default function ResetButton() {
  const drinkList = useSelector(state => state.drinks);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetDrinks());
  };
  return (
    <TouchableOpacity style={styles.btn}  onPress={handleReset}>
        <Text style={styles.text}>Reset Drinks</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
      margin: 10,
      backgroundColor: '#011f3b',
      paddingTop: 10,
      paddingBottom: 10,
      width: 350,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
  
      elevation: 15,
    },
    container: {
      flex: 1,
      backgroundColor: '#032845',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#f8ca12',
      fontSize: 30,
    },
  
  });
