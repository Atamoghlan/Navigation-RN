import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {News} from '../Screens/News'
import {StackEntertainment} from './StackForEntertainment'
import {StackTools} from './StackForTools'
import {TabAboutMe} from './TabAboutMe'

export const MyDrawer = createDrawerNavigator();
export const Drawer = ({navigation}) => {
    return (
    <MyDrawer.Navigator
    initialRouteName='Home'>
        <MyDrawer.Screen name='News' component={News}/>
        <MyDrawer.Screen name='Entertainment' component={StackEntertainment}/>
        <MyDrawer.Screen name='Tools' component={StackTools}/>
        <MyDrawer.Screen name='AboutMe' component={TabAboutMe}/>
      </MyDrawer.Navigator>
    )
}