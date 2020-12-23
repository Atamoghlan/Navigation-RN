import React from 'react'
import {Text, View, Button, TouchableOpacity} from 'react-native'


export const Tools = ({navigation, route}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
            <Text>Tools</Text>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text>main menu</Text>
            </TouchableOpacity>
            
        </View>
    )
}