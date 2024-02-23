import { Button, Text } from "react-native"

const Home = ({navigation})=>{
    // console.log(prop);
    return <>
    <Text>Home Page</Text>

    <Button title="click me" onPress={()=> navigation.navigate("Notifications")} />
    <Button title="fetch krishna" onPress={()=> navigation.navigate("Profile",{
        user:"Harish"
    })} />
    <Button title="fetch krishna" onPress={()=> navigation.navigate("Profile")} />
    </>
}

export default Home