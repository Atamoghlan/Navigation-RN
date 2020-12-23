import React from 'react'
import {Text, View, Button, TouchableOpacity} from 'react-native'


export const AboutMe = ({navigation, route}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
            <Text>AboutMe</Text>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text>main menu</Text>
            </TouchableOpacity>
        </View>
    )
}