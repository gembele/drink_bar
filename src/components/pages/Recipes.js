import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addDrink, removeDrink } from '../redux/action';

export default function Recipes() {
  const [drink, setDrink] = useState('');
  const drinkList = useSelector(state => state.drinks);
  const dispatch = useDispatch();

  const handleAddDrinks = () => {
    dispatch(addDrink(drink));
    setDrink('');
  };
  const handleRemoveDrinks = (id) => {
    dispatch(removeDrink(id));
    setDrink('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Drink"
        value={drink}
        onChangeText={drink => setDrink(drink)}
      />
      <Button title='Add' color="#841584" onPress={handleAddDrinks} />
      <FlatList
        data={drinkList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.btn} onPress={() => handleRemoveDrinks(item.id)}>
                <Text style={styles.list}>{item.drinkName}</Text>
            </TouchableOpacity>
            
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032845',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 20,
    width: 200,
    border: '2px solid black'
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white', // Dodaj kolor tekstu dla inputu
  },
  list: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});
