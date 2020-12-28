import React from 'react'
import {Text, View, Button, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { StackEntertainment } from '../Navigation/StackForEntertainment'

calcLogo = require("../Images/Calc.png")
mainMenulogo = require("../Images/MainMenu.jpg")
export const Entertainment = ({navigation, route}) => {
    return (
        <View 
        style={{flexDirection: 'row',flexWrap: 'wrap'}}>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={styles.MenuLogoButton} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("MoviesApp")}>
            <Image source={require("../Images/MoviesLogo.jpg")}
            style={styles.calcLogoButton} />
            </TouchableOpacity>
            </View>
    )
}
export const styles = StyleSheet.create({
    calcLogoButton:{
        width: 80, 
        height: 80,
        borderRadius: 15,
        margin: 5
    },
    MenuLogoButton:{
        width: 70, 
        height: 70,
        borderRadius: 15,
        margin: 5
    }
})