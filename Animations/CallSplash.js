import Splash from "./SplashScreen";
import React from 'react';
import { Drawer } from "../Navigation/Drawer";

export default function CallSplash ({isSplashScreenWork}) {
    isSplashScreenWork? answerForSplashScreen=<Splash/> : answerForSplashScreen=<Drawer/>
    return answerForSplashScreen
}
