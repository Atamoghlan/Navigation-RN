import React from 'react'
import { View, TouchableOpacity, Image} from 'react-native'

import { entertainment } from "../styles/style";
import {createStackNavigator} from '@react-navigation/stack'

calcLogo = require("../Images/Calc.png")
mainMenulogo = require("../Images/MainMenu.jpg")

export const StackToolsMenu = createStackNavigator
export const Tools = ({navigation}) => {
    return (
        <View 
        style={entertainment.viewMain}>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={entertainment.MenuLogoButton} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("Calculator")}>
            <Image source={calcLogo}
            style={entertainment.calcLogoButton} />
            </TouchableOpacity>
        </View>
    )
}