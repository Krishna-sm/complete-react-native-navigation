import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
// component{screen}
import Home from './screens/Home';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
// component{screen}

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LoginButton = ()=>{
  return <Icon size={30} name='infocirlce' />
}


export default function App() {
  return (
        <>
    <NavigationContainer>
          <Stack.Navigator initialRouteName='Notifications' screenOptions={{
                headerRight:(prop)=><LoginButton/>
              }} >
              <Stack.Screen  name="Home" options={
              //   {
              //   headerRight:(prop)=><LoginButton/>
              // }
              {}
              } component={Home} />
              <Stack.Screen options={{
                    //  headerBackVisible:false,
                    //  headerShown:false
              }} name="Notifications" component={Notifications} />
              <Stack.Screen name="Profile" initialParams={{user:'admin'}} component={Profile} />
          </Stack.Navigator>
    </NavigationContainer>
        </>
  );
}
 