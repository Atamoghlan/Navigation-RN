import {createStackNavigator} from '@react-navigation/stack'
import React, {Component} from 'react'
import { Entertainment } from '../Screens/Entertainment';

export const rootStackEntertainment = createStackNavigator();
export const StackEntertainment = ({navigation, route}) => {
    return (
        <rootStackEntertainment.Navigator 
        screenOptions={{
            title: "Entertainment"
        }}>
        <rootStackEntertainment.Screen name='Entertainment' component={Entertainment}/>

        </rootStackEntertainment.Navigator>
    )
}