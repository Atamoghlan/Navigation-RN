import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import favList from "./FavouriteList";
import myApp from "./MainMenu";
import { tabBarOptions } from "../../styles/style";

const MoviesTab = createBottomTabNavigator();
export const MoviesMenu = () => {
    return (
            <MoviesTab.Navigator
                tabBarOptions={tabBarOptions}>
                <MoviesTab.Screen name='Main' component={myApp} />
                <MoviesTab.Screen name='Favourite List' component={favList} />
            </MoviesTab.Navigator>
        
    )
}