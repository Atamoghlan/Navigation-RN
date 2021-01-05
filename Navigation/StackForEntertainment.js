import {createStackNavigator} from '@react-navigation/stack'
import React, {Component} from 'react'
import { MoviesMenu } from '../Movies/components/TabNavigator';
import { Entertainment } from '../Screens/Entertainment';

export const RootStackEntertainment = createStackNavigator();
export const StackEntertainment = ({navigation, route}) => {
    return (
        <RootStackEntertainment.Navigator 
        screenOptions={{
            title: "Entertainment"
        }}>
        <RootStackEntertainment.Screen name='Entertainment' component={Entertainment}/>
        <RootStackEntertainment.Screen name='MoviesApp' component={MoviesMenu}/>
        </RootStackEntertainment.Navigator>
    )
}