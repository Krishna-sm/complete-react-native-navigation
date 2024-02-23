import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Link } from '@react-navigation/native';

const Profile = ({route}) => { 
    const user = "krishna"
    return (
        <View>
                    <Link  to={{screen:'HomePage'}}>Profile Page</Link>
                    <Text>User : {route?.params?.user}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
