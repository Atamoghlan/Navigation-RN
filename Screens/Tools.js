import React from 'react'
import {Text, View, Button, TouchableOpacity, Image} from 'react-native'
import { styles } from "./Entertainment";
import {createStackNavigator} from '@react-navigation/stack'
import { Calc } from "../Calc/Calc";

calcLogo = require("../Images/Calc.png")
mainMenulogo = require("../Images/MainMenu.jpg")

export const StackToolsMenu = createStackNavigator
export const Tools = ({navigation, route}) => {
    return (
        <View 
        style={{flexDirection: 'row',flexWrap: 'wrap'}}>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={styles.MenuLogoButton} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("Calculator")}>
            <Image source={calcLogo}
            style={styles.calcLogoButton} />
            </TouchableOpacity>
            <Text>Tools</Text>
        </View>
    )
}
