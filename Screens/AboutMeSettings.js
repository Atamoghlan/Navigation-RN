import React from 'react'
import {Text, View, TouchableOpacity,Image} from 'react-native'
import { entertainment } from "../styles/style";

import { aboutMeSettings } from "../styles/style";

mainMenulogo = require("../Images/MainMenu.jpg")
export const Settings = ({navigation, route}) => {
    return (
    <View>
        <View 
        style={aboutMeSettings.view}>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={entertainment.MenuLogoButton} />
            </TouchableOpacity>
        </View>
        <Text
            style={aboutMeSettings.text}>Settings</Text>
    </View>
    )
}