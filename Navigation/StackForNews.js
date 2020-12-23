import {createStackNavigator} from '@react-navigation/stack'
import React, {Component} from 'react'
import { News } from '../Screens/News';

export const rootStackNews = createStackNavigator();
export const StackNews = ({navigation, route}) => {
    return (
        <rootStackNews.Navigator 
        screenOptions={{
            title: "News"
        }}
        >
            <rootStackNews.Screen name='News' component={News}/>

        </rootStackNews.Navigator>
    )
}