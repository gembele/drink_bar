import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';


export default function InitialSetup() {
  const ingredientsList = useSelector(state => state.ingredients);
  const drinkList = useSelector(state => state.drinks);
  const ingredientsEmpty = ingredientsList.some(item => item.ingredientName === 'empty');
  const drinksEmpty = drinkList.some(item => item.drinkName === 'empty');
  return (
    <View style={styles.container}>
        <Text style={styles.text2} >There is no drinks yet. </Text>
        {ingredientsEmpty && drinksEmpty && <Text style={styles.text2} >Add ingredients in Settings first</Text>}
      </View>
  )
}

const styles = StyleSheet.create({
    text2: {
      color: '#f8ca12',
      fontSize: 22,
      textAlign: 'center',
      marginTop: 10,
      },
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 75
    },
    
    });
    