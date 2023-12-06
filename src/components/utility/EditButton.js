import React, { useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editDrink } from '../redux/action';

export const EditButton = () => {
    const [name, setName] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const drinkList = useSelector(state => state.drinks);
    const ingredientsList = useSelector(state => state.ingredients);
    const dispatch = useDispatch();

    const handleExpand = (drinkID) => {
        const selectedDrink = drinkList.find(drink => drink.id === drinkID);
        if (selectedDrink) {
          dispatch(editDrink(drinkID, { isExpanded: !selectedDrink.isExpanded }));
        }
    };

    const submitChange = (drinkID) => {
      dispatch(editDrink(drinkID, {drinkName: name}));
    };

  return (
    <FlatList
        data={drinkList.sort((a, b) => a.id - b.id)}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={!item.isExpanded? styles.drinkView : styles.drinkView2}>
              <TouchableOpacity style={styles.drink} onPress={() => {handleExpand(item.id)}}>
                <Text style={styles.list}>{item.drinkName}</Text>
              </TouchableOpacity>
              {item.isExpanded && <View>
                <Text style={styles.list}>NAME</Text>
                <TextInput onChangeText={name => setName(name)} placeholder='Name' placeholderTextColor={'white'} style={styles.input} />
                {ingredientsList.map(function(item){
                  return (
                    <Text>{item.value}</Text>
                  )
                })}
                <Text style={styles.list}>edit edit ingredient</Text>
                <Text style={styles.list}>add ingredient if</Text>
                <Text style={styles.list}>apply changes button</Text>
                <Button onPress={() => submitChange(item.id)} title='Apply' />

              </View>}
            </View>
            
            
          );
        }}
      />
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
      marginTop: 10,
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
    drinkView: {
        height: 80,
        width: 350,
        marginBottom: 10,
    },
    drinkView2: {
        height: 400,
        width: 350,
        marginBottom: 10,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: 'white',
    },
    list: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
      },
    text: {
      color: 'white',
      fontSize: 50,
    },
    title_text: {
      color: "#f8ca12",
      fontSize: 30,
    },
    text: {
      fontSize: 20,
      color: 'white'
    },

  });
  