import 'react-native-gesture-handler'; 
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './components/Drawer';
function Feed(props) {
  console.log(props);
  return (
    <View >
      <Text onPress={()=>props.navigation.toggleDrawer()}>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View  >
      <Text>Article Screen</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer > 
 <Drawer.Navigator  drawerContent={(props) => <CustomDrawer name="harish" {...props} />}  initialRouteName='Article'>
      <Drawer.Screen name="Feed" initialParams={{name:"krishn"}} component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
} 