import React from 'react'
import {Text, View, Button, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { BaseRouter, useLinkProps } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { WebView } from "react-native-webview";

mainMenulogo = require("../Images/MainMenu.jpg")
export const News = ({navigation, route}) => {
    return (
        <View style={{flex:1}}>
            <WebView source={{uri: 'https://edition.cnn.com/?refresh=1'}}/>
            <View
            style={{alignItems: 'center'}}>
            <TouchableOpacity  
            onPress={() => navigation.toggleDrawer()}>
            <Image source={mainMenulogo}
            style={newsStyles.MenuLogoButton} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const newsStyles = StyleSheet.create({
    MenuLogoButton:{
        width: 90, 
        height: 90,
        borderRadius: 15,
        alignSelf: 'flex-end',
        margin: 5
    } 
})