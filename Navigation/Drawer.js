import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {StackNews} from './StackForNews'
import {StackEntertainment} from './StackForEntertainment'
import {StackTools} from './StackForTools'
import {StackAboutMe} from './StackForAboutMe'

export const MyDrawer = createDrawerNavigator();
export const Drawer = ({navigation}) => {
    return (
    <MyDrawer.Navigator
    initialRouteName='Home'>
      
        <MyDrawer.Screen name='News' component={StackNews}/>
        <MyDrawer.Screen name='Entertainment' component={StackEntertainment}/>
        <MyDrawer.Screen name='Tools' component={StackTools}/>
        <MyDrawer.Screen name='AboutMe' component={StackAboutMe}/>
      </MyDrawer.Navigator>
    )
}