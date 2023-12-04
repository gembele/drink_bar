import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import DrinkButton from '../utility/DrinkButton';


export default function Home({navigation}) {
  return (
    <>
      <SafeAreaView style={styles.title}>
          <Text style={styles.title_text}>Pick a drink</Text>
      </SafeAreaView>
      <View style={styles.container}>
        
        {/* <EntypoIcons name="drink" size={200} color="#f8ca12"/> */}
        <View>
          <DrinkButton/>
        </View>

        <StatusBar style="auto" />
      </View>
    </>
    
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#032845',
      alignItems: 'center',
      justifyContent: 'center',
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
    }

  });