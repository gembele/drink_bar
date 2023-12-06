import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default function InitialSetup() {
  return (
    <View style={styles.container}>
        <Text style={styles.text2} >Seems like you haven't added any drinks yet. </Text>
        <Text style={styles.text2} >Add some ingredients in Settings first</Text>
      </View>
  )
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
    
    });
    