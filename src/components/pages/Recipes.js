import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editDrink, resetDrinks } from '../redux/action';

export default function Recipes() {
  const [drink, setDrink] = useState('');
  const drinkList = useSelector(state => state.drinks);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetDrinks());
  };

  const handleEdit = (drinkID) => {
    dispatch(editDrink(drinkID, {drinkName:'Edited Name'}));
  }

  return (
    <>
    <View style={styles.title}>
      <Text style={styles.title_text}>Edit Your Drinks</Text>
    </View>
      <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleReset}>
        <Text style={styles.text}>RESET</Text>
      </TouchableOpacity>
      <FlatList
        data={drinkList.sort((a, b) => a.id - b.id)}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.drink} onPress={() => handleEdit(item.id)}>
                <Text style={styles.list}>{item.drinkName}</Text>
            </TouchableOpacity>
            
          );
        }}
      />
      
    </View>
    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032845',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },
  drink: {
    margin: 10,
    borderColor: '#011f30',
    backgroundColor: '#011f3b',
    borderWidth: 0,
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
  text: {
    color: 'white',
    fontSize: 50,
  },
  title: {
    backgroundColor: '#011f3b',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.16,
    shadowRadius: 1.51,
    elevation: 2
  },
  title_text: {
    color: "#f8ca12",
    fontSize: 30,
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
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});
