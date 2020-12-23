import React from 'react'
import {Text, View, Button, TouchableOpacity} from 'react-native'
import { BaseRouter, useLinkProps } from '@react-navigation/native'


export const News = ({navigation, route}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
            <Text>Welcome to first page</Text>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text>main menu</Text>
            </TouchableOpacity>
        </View>
    )
}