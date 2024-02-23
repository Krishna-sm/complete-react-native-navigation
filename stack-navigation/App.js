import 'react-native-gesture-handler';

import {   StatusBar, Text, View } from 'react-native';
// navigation related
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// end navigation related

// component{screen}
import Home from './screens/Home';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
// component{screen}

// stack ka instace
const Stack = createStackNavigator();
// end stack ka instace

export default function App() {
  return (
    <>
    
          <NavigationContainer >
     <Stack.Navigator screenOptions={{
    headerTitle:'Dashboard',
          headerStyle:{
            backgroundColor:'#7e33ff',
            
          },
          headerTitleStyle:{
            color:"#fff"
          }
     }} >
      <Stack.Screen options={{
        // headerTitle:'Dashboard',
        //   headerStyle:{
        //     backgroundColor:'#7e33ff',
            
        //   },
        //   headerTitleStyle:{
        //     color:"#fff"
        //   }
      }}   name="HomePage" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen initialParams={{user:"admin"}} name="Profile" component={Profile} /> 
    </Stack.Navigator>
    </NavigationContainer>
    <StatusBar backgroundColor={'#000'} />
    </>
  );
}


 