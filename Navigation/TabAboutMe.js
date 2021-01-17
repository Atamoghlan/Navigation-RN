import React from 'react'
import { AboutMe } from '../Screens/AboutMe';
import { Settings } from "../Screens/AboutMeSettings";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { tabAboutMe } from "../styles/style";

const Tab = createBottomTabNavigator();
export const TabAboutMe = ({navigation, route}) => {
    return (
        <Tab.Navigator
            tabBarOptions={tabAboutMe}
        >
            <Tab.Screen name='Profile' component={AboutMe}/>
            <Tab.Screen name='Settings' component={Settings}/>
        </Tab.Navigator>
    )
}