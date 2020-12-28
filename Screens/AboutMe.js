import React from 'react'
import {Text, View, Button, TouchableOpacity,Image, StyleSheet} from 'react-native'
import { styles } from "./Entertainment";

mainMenulogo = require("../Images/MainMenu.jpg")
export const AboutMe = ({navigation, route}) => {
    return (
        <View style={styles2.view}>
            
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={styles.MenuLogoButton} />
            </TouchableOpacity>
            <Text
            style={styles2.text}>About us</Text>
        </View>
    )
}
const styles2 = StyleSheet.create({
    view: {flex:1},
    text: {fontSize: 40}
})