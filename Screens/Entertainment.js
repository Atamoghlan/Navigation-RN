import React from 'react'
import { View, TouchableOpacity, Image} from 'react-native'
import { entertainment } from "../styles/style";

calcLogo = require("../Images/Calc.png")
mainMenulogo = require("../Images/MainMenu.jpg")
export const Entertainment = ({navigation, route}) => {
    return (
        <View 
        style={entertainment.viewMain}>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={entertainment.MenuLogoButton} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("MoviesApp")}>
            <Image source={require("../Images/MoviesLogo.jpg")}
            style={entertainment.calcLogoButton} />
            </TouchableOpacity>
            </View>
    )
}
