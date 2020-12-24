import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'
import { AboutMe } from '../Screens/AboutMe';
import { Settings } from "../Screens/AboutMeSettings";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();
export const TabAboutMe = ({navigation, route}) => {
    return (
        <Tab.Navigator
            tabBarOptions={{activeBackgroundColor: '#AFEEEE',labelStyle: {fontSize: 40}}}
        >
            <Tab.Screen name='Profile' component={AboutMe}/>
            <Tab.Screen name='Settings' component={Settings}/>
        </Tab.Navigator>
    )
}