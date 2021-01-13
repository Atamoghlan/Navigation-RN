import Splash from "./SplashScreen";
import React from 'react';

export default function CallSplash ({navigation}) {
    setTimeout(() => {
        navigation.replace('Drawer')
    }, 6000)
    return(
        <Splash/>
    )
}