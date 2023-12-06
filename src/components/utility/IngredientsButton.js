import React, {useState, useCallback} from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useSelector, useDispatch } from 'react-redux';
import { editIngredient } from '../redux/action';

export default function IngredientsButton() {
    const [expanded, setExpanded] = useState(false);
    const [name, setName] = useState('');
    const [selected, setSelected] = React.useState("");
    const ingredientsList = useSelector(state => state.ingredients);
    const dispatch = useDispatch();

    const submitChange = useCallback(
        (ingredientID, value) => {
          dispatch(editIngredient(ingredientID, { value }));
          console.log('Added successfully');
        },
        [dispatch]
      );
    
      const handleApply = () => {
        submitChange(selected, name);
      };

  return (
    <View style={expanded ? styles.ingrView : styles.ingrView2}>
        <TouchableOpacity onPress={()=>setExpanded(!expanded)} style={styles.btn} >
            <Text style={styles.text}>Edit Ingredients</Text>
        </TouchableOpacity>
        {!expanded && <View>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={ingredientsList} 
                save="key"
            />
            <TextInput onChangeText={name => setName(name)} placeholder={selected.toString()} placeholderTextColor={'white'} style={styles.input} />
            <Button onPress={handleApply} title="Apply" />
        </View>}
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
  