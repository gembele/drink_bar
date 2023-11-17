import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Recipes() {
  return (
    <View style={styles.container}>
        <Text>Recipes</Text>
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

  });
