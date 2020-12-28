import React from 'react'
import {Text, View, Button, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { styles } from "./Entertainment";
import {createStackNavigator} from '@react-navigation/stack'
import { Calc } from "../Calc/Calc";

calcLogo = require("../Images/Calc.png")
mainMenulogo = require("../Images/MainMenu.jpg")

export const StackToolsMenu = createStackNavigator
export const Tools = ({navigation, route}) => {
    return (
        <View 
        style={styles2.view}>
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
        </View>
    )
}
const styles2 = StyleSheet.create({
    view: {flexDirection: 'row',flexWrap: 'wrap'}
})