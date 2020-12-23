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
            <Text>Entertainment</Text>
        </View>
    )
}
export const styles = StyleSheet.create({
    calcLogoButton:{
        width: 130, 
        height: 130,
        borderRadius: 15
    },
    MenuLogoButton:{
        width: 120, 
        height: 120,
        borderRadius: 15
    }
})