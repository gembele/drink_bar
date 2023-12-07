import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector, useDispatch } from 'react-redux';
import { editIngredient } from '../redux/action';

export default function IngredientsButton() {
    const [expanded, setExpanded] = useState(false);
    const [name, setName] = useState('');
    const ingredientsList = useSelector(state => state.ingredients);
    const dispatch = useDispatch();

    const submitChange = (ingredientID) => {
      dispatch(editIngredient(ingredientID, { ingredientName: name }));
      console.log('Added successfully');
    }

  return (
    <View style={expanded ? styles.ingrView : styles.ingrView2}>
        <TouchableOpacity onPress={()=>setExpanded(!expanded)} style={styles.btn} >
            <Text style={styles.text}>Edit Ingredients</Text>
        </TouchableOpacity>
        {!expanded && <View>
          {ingredientsList.map(function(item){
                  return (
                    <View style={styles.container}>
                      <TextInput placeholder={item.ingredientName} placeholderTextColor={'white'} style={styles.input} onChangeText={name => setName(name)}/>
                      <TouchableOpacity onPress={()=>{submitChange(item.id)}}>
                        <SimpleLineIcons
                          name="check"
                          size={25}
                          color="#f8ca12"/>
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
        height: 400,
        width: 350,
        marginBottom: 10,
    },
    input: {
      height: 40,
      width: 200,
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
        color: '#f8ca12',
        fontSize: 30,
        textAlign: 'center'
    },
    title_text: {
      color: "#f8ca12",
      fontSize: 30,
    },

  });
  