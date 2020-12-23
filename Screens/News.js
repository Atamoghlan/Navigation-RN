import React from 'react'
import {Text, View, Button, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { BaseRouter, useLinkProps } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

mainMenulogo = require("../Images/MainMenu.jpg")
export const News = ({navigation, route}) => {
    return (
        <View>
        <ScrollView>
        <View style={{alignItems: 'center',flexDirection: 'column'}}>
            
            <Text
            style={{width:100, height:500}}>fsd</Text>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={newsStyles.MenuLogoButton} />
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    )
}

const newsStyles = StyleSheet.create({
    MenuLogoButton:{
        width: 120, 
        height: 120,
        borderRadius: 15,
        alignSelf: 'flex-end'
    } 
})