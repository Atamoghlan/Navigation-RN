import React from 'react'
import {Text, View, TouchableOpacity,Image} from 'react-native'
import { entertainment } from "../styles/style";
import { aboutMe } from "../styles/style";

mainMenulogo = require("../Images/MainMenu.jpg")
export const AboutMe = ({navigation, route}) => {
    return (
        <View style={aboutMe.view}>
            
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={entertainment.MenuLogoButton} />
            </TouchableOpacity>
            <Text
            style={aboutMe.text}>About me page</Text>
        </View>
    )
}