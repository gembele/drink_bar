import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector, useDispatch } from 'react-redux';
import { editIngredient, editDrink } from '../redux/action';

export default function IngredientsButton() {
    const [expanded, setExpanded] = useState(false);
    const [name, setName] = useState('');
    const ingredientsList = useSelector(state => state.ingredients);
    const dispatch = useDispatch();
    const isEmpty = ingredientsList.some(item => item.ingredientName === 'empty');

    const submitChange = (ingredientID) => {
      dispatch(editIngredient(ingredientID, { ingredientName: name }));
      dispatch(editDrink(ingredientID, { ingredients: [name] }));
      console.log('Added successfully');
    }

    useEffect(()=>{
      if(!isEmpty) {
        console.log(isEmpty);
        for(let i=1; i<5; i++) {
          dispatch(editDrink(i, {ingredients: [ingredientsList.at(i-1).ingredientName]}));
        }
        dispatch(editDrink(5, {ingredients: [ingredientsList.at(0).ingredientName, ingredientsList.at(1).ingredientName]}));
        dispatch(editDrink(6, {ingredients: [ingredientsList.at(0).ingredientName, ingredientsList.at(2).ingredientName]}));
        dispatch(editDrink(7, {ingredients: [ingredientsList.at(0).ingredientName, ingredientsList.at(3).ingredientName]}));
        dispatch(editDrink(8, {ingredients: [ingredientsList.at(1).ingredientName, ingredientsList.at(2).ingredientName]}));
        dispatch(editDrink(9, {ingredients: [ingredientsList.at(1).ingredientName, ingredientsList.at(3).ingredientName]}));
        dispatch(editDrink(10, {ingredients: [ingredientsList.at(2).ingredientName, ingredientsList.at(3).ingredientName]}));
      }
    },[isEmpty, ingredientsList]);

  return (
    <View style={expanded ? styles.ingrView : styles.ingrView2}>
        <TouchableOpacity onPress={()=>setExpanded(!expanded)} style={styles.btn} >
            <Text style={styles.text}>Edit Ingredients</Text>
        </TouchableOpacity>
        {!expanded && <View>
          {ingredientsList.map(function(item) {
            return (
              <View key={item.id} style={styles.container}>
                <TextInput
                  placeholder={item.ingredientName}
                  placeholderTextColor={'black'}
                  style={styles.input}
                  onChangeText={name => setName(name)}
                />
                <TouchableOpacity onPress={() => { submitChange(item.id) }}>
                  <SimpleLineIcons
                    name="check"
                    size={25}
                    color="#f8ca12"
                  />
                </TouchableOpacity>
              </View>
            )
          })}
        </View>}
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#032845',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
      },
    btn: {
        margin: 0,
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
    ingrView: {
        height: 80,
        width: 350,
        marginBottom: 10,
    },
    ingrView2: {
        height: 320,
        width: 350,
        marginBottom: 10,
    },
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white'
    },
    list: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
      },
    text: {
        color: '#f8ca12',
        fontSize: 30,
        textAlign: 'center'
    },
    title_text: {
      color: "#f8ca12",
      fontSize: 30,
    },

  });
  