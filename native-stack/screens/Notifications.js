import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const Notifications = (  ) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Notification Page</Text>
    <Button title="click me" onPress={()=>navigation.replace("Profile")} />

        </View>
    );
}

const styles = StyleSheet.create({})

export default Notifications;
