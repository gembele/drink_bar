import Home from './src/components/pages/Home';
import Settings from './src/components/pages/Settings';
import Recipes from './src/components/pages/Recipes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" 
        screenOptions={{
          headerShown:false,
          tabBarInactiveBackgroundColor: "#011f3b",
          tabBarActiveBackgroundColor: "#032845",
          tabBarInactiveTintColor: "#f8ca12",
          tabBarActiveTintColor: "#ffffff",
          tabBarLabelStyle: { fontSize: 13, color: '#f8ca12', paddingBottom: 3},
          tabBarStyle: {height: 55, position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, borderTopWidth: 0},}}>
        <Tab.Screen name="Home" component={Home}options={{tabBarIcon: ()=>(          <SimpleLineIcons
            name="home"
            size={25}
            color="#f8ca12"/>)}}/>
        <Tab.Screen name="Recipes" component={Recipes} options={{tabBarIcon: ()=>(<SimpleLineIcons
            name="book-open"
            size={25}
            color="#f8ca12"/>)}}/>   
        <Tab.Screen name="Settings" component={Settings} options={{tabBarIcon: ()=>(<SimpleLineIcons
            name="settings"
            size={25}
            color="#f8ca12"/>)}}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}


