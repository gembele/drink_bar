import React from 'react';
import { View, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ResetButton from '../utility/ResetButton';


export default function Settings({navigation}) {
  
  
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 50}}>
        <SimpleLineIcons
              name="settings"
              size={150}
              color="#f8ca12"/>
      </View>

      <ResetButton/>


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


});