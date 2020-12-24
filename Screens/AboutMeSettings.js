import React from 'react'
import {Text, View, Button, TouchableOpacity,Image} from 'react-native'
import { styles } from "./Entertainment";

mainMenulogo = require("../Images/MainMenu.jpg")
export const Settings = ({navigation, route}) => {
    return (
        <View 
        style={{flexDirection: 'row',flexWrap: 'wrap'}}>
            
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={styles.MenuLogoButton} />
            </TouchableOpacity>
            <Text
            style={{fontSize: 40}}>Settings</Text>
        </View>
    )
}