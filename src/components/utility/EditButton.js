import React, { useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editDrink } from '../redux/action';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const EditButton = () => {
    const [name, setName] = useState('');
    const drinkList = useSelector(state => state.drinks);
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
                <Text style={styles.list}>{item.id}. {item.drinkName}</Text>
                <Text style={styles.ingredients}>Ingredients: {item.ingredients.join(', ')}</Text>
              </TouchableOpacity>
              {item.isExpanded && <View style={styles.edit}>
                <View style={{width:'100%'}}>
                  <Text style={styles.list}>NAME</Text>
                </View>
                <View style={{flexDirection: 'row', width:'100%'}}>
                  <TextInput onChangeText={name => setName(name)} style={styles.input} />
                  <TouchableOpacity onPress={()=>{submitChange(item.id)}}  disabled={name===''} style={{top:16}}>
                          <SimpleLineIcons
                            name="check"
                            size={30}
                            color="#f8ca12"/>
                  </TouchableOpacity>
                </View>
                
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
        height: 175,
        width: 350,
        marginBottom: 10,
    },
    edit: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ingredients: {
        fontSize: 12,
        color: 'white',
        marginBottom: 15
    },  
    input: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
      padding: 10,
      color: 'black',
    },
    list: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 5
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
  