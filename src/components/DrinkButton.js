import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function DrinkButton() {

  const sendDataToArduino = async (message) => {
    try {
      const response = await fetch('http://192.168.0.115', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Zmiana na typ 'text/plain'
        },
        body: String(message), // Wysłanie samej wiadomości tekstowej
      });
      
      if (response.ok) {
        // Obsługa sukcesu - wysłano wiadomość do Arduino
        console.log('Wiadomość została wysłana do Arduino.');
      } else {
        // Obsługa błędu
        console.error('Wystąpił błąd podczas wysyłania wiadomości.');
      }
      const responseData = await response.text(); // Odczytaj odpowiedź jako tekst

      console.log('Odebrano odpowiedź od Arduino:', responseData);

    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
    
  };

  const listOfDrinks = [
    {
      id: 1,
      name: "Drink1"
    },
    {
      id: 2,
      name: "Drink2"
    },
    {
      id: 3,
      name: "Drink3"
    },
    {
      id: 4,
      name: "Drink4"
    }
  ];
  return (

    listOfDrinks.map((drink) => {
      return(
        <TouchableOpacity 
          style={styles.drink} 
          onPress={() => sendDataToArduino(drink.id)}
        >
          <Text style={styles.text2}>{drink.name}</Text>
        </TouchableOpacity>
      );
    })
  )
}

const styles = StyleSheet.create({
  text2: {
    color: '#f8ca12',
    fontSize: 30,
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
    }
  });
  