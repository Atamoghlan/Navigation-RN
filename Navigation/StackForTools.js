import {createStackNavigator} from '@react-navigation/stack'
import React, {Component} from 'react'
import { Tools } from '../Screens/Tools';
import { Calc } from "../Calc/Calc";

export const rootStackTools = createStackNavigator();
export const StackTools = ({navigation, route}) => {
    return (
        <rootStackTools.Navigator>
            <rootStackTools.Screen name='Tools' component={Tools}/>
            <rootStackTools.Screen name='Calculator' component={Calc}/>
            

        </rootStackTools.Navigator>
    )
}