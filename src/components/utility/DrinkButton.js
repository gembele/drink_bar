import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text,FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function DrinkButton() {
  const drinkList = useSelector(state => state.drinks);
  const allEmpty = drinkList.every(item => item.drinkName === 'empty');
  const [isWorking, setIsWorking] = useState(false);


  const sendDataToArduino = async (message) => {
    try {
      const response = await fetch('http://192.168.126.236', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: String(message),
      });
      
      if (response.ok) {
        // Obsługa sukcesu - wysłano wiadomość do Arduino
        console.log('Wiadomość została wysłana do Arduino.');
      } else {
        // Obsługa błędu
        console.error('Wystąpił błąd podczas wysyłania wiadomości.');
      }
      const responseData = await response.text(); // Odczytaj odpowiedź jako tekst
      while(!responseData) {
        setIsWorking(true);
      } 
      setIsWorking(false);
      console.log('Odebrano odpowiedź od Arduino:', responseData);

    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
    
  };

  if (allEmpty) {
    return (
      <View style={styles.container}>
        <Text style={styles.text2} >Seems like you haven't added any drinks yet. </Text>
        <Text style={styles.text2} >Go to Recipes page and add some.</Text>
      </View>
      
    );
  }
  return (
        <FlatList
        data={drinkList.sort((a, b) => a.id - b.id)}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity 
              style={item.drinkName !='empty' ? styles.drink : styles.disabledDrink} 
              onPress={() => sendDataToArduino(item.id)}
              disabled = {item.drinkName ==='empty' || isWorking} 
            >
                <Text style={styles.text2}>{item.drinkName}</Text>
            </TouchableOpacity>
          );
        }}
      />
        
      );
      }

const styles = StyleSheet.create({
  text2: {
    color: '#f8ca12',
    fontSize: 30,
    textAlign: 'center'
    },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 75
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
    disabledDrink: {
      width: 0,
      height: 0
    }
  });
  