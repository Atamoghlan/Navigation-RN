import React from 'react'
import {Text, View, Button, TouchableOpacity, Image} from 'react-native'
import { StackEntertainment } from '../Navigation/StackForEntertainment'

// icon = require("../Images/Calc.png")
export const Entertainment = ({navigation, route}) => {
    return (
        <View
        style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
            <Text>AboutMe</Text>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text>main menu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            {/* <Image source={icon}/> */}
            </TouchableOpacity>
        </View>
    )
}