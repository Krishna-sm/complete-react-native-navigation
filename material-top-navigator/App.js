// import StatusBar  from 'expo-s/tatus-bar';
import { View, Text ,StatusBar} from 'react-native' 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
   <>
       <NavigationContainer>
    <Tab.Navigator  screenOptions={{
   tabBarScrollEnabled:true,

      tabBarAndroidRipple: { borderless: false },
  }} > 
      <Tab.Screen  name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
      <Tab.Screen name="profile1" component={ProfileScreen} />
      <Tab.Screen name="profile2" component={ProfileScreen} />
      <Tab.Screen name="profile3" component={ProfileScreen} />
      <Tab.Screen name="profile4" component={ProfileScreen} />
      <Tab.Screen name="profil5" component={ProfileScreen} />
    </Tab.Navigator>
    </NavigationContainer>
    <StatusBar/>
   </>
  )
}



const HomeScreen = (props)=>{
  console.log({props});
  return <View>
    <Text>Hello Home Screen</Text>
  </View>
} 

 
const SettingsScreen = ()=>{
  return <View>
    <Text>setting Home Screen</Text>
  </View>
} 
 
const ProfileScreen = ()=>{
  return <View>
    <Text>Profile Screen Screen</Text>
  </View>
} 