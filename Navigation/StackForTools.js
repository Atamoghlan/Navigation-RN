import {createStackNavigator} from '@react-navigation/stack'
import React, {Component} from 'react'
import { Tools } from '../Screens/Tools';

export const rootStackTools = createStackNavigator();
export const StackTools = ({navigation, route}) => {
    return (
        <rootStackTools.Navigator 
        screenOptions={{
            title: "Tools"
        }}
        >
            <rootStackTools.Screen name='Tools' component={Tools}/>

        </rootStackTools.Navigator>
    )
}