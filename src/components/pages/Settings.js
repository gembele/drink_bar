import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 50}}>
        <SimpleLineIcons
              name="settings"
              size={150}
              color="#f8ca12"/>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Manage Drinks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Mix Drinks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Check Amount</Text>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
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
  container: {
    flex: 1,
    backgroundColor: '#032845',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f8ca12',
    fontSize: 30,
  },

});