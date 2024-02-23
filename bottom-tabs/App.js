import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Tab = createBottomTabNavigator();
export default function App() {
  return (

   <NavigationContainer> 
<Tab.Navigator>
      <Tab.Screen options={{tabBarIcon:()=><AntDesign name='home' size={30}  />}} name="Home" component={HomeScreen} />
      <Tab.Screen  options={{tabBarIcon:()=><AntDesign name='setting' size={30}  />}}  name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
 
const HomeScreen = (props)=>{
  console.log({props});
  return <View>
    <Text>Hello Home Screen</Text>
  </View>
} 

 
const SettingsScreen = ()=>{
  return <View>
    <Text>Hello Home Screen</Text>
  </View>
} 