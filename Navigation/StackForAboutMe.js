import {createStackNavigator} from '@react-navigation/stack'
import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'
import { AboutMe } from '../Screens/AboutMe';


export const rootStackAboutMe = createStackNavigator();
export const StackAboutMe = ({navigation, route}) => {
    return (
        <rootStackAboutMe.Navigator 
        screenOptions={{
            title: "About me"
        }}
        >
            <rootStackAboutMe.Screen name='About me' component={AboutMe}/>

        </rootStackAboutMe.Navigator>
    )
}