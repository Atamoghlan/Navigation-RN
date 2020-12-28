import React from 'react'
import {Text, View, Button, TouchableOpacity,Image, StyleSheet} from 'react-native'
import { styles } from "./Entertainment";

mainMenulogo = require("../Images/MainMenu.jpg")
export const Settings = ({navigation, route}) => {
    return (
    <View>
        <View 
        style={styles2.view}>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={styles.MenuLogoButton} />
            </TouchableOpacity>
        </View>
        <Text
            style={styles2.text}>Settings</Text>
    </View>
    )
}
const styles2 = StyleSheet.create({
    view: {flexDirection: 'row',flexWrap: 'wrap'},
    text: {fontSize: 40}
})