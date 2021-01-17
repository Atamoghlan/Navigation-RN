import React from "react";
import {View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import { searchMovie } from "../../styles/style";

export const SearchMovie = (props) => {
    const {handledChangedText , findMovie} = props;
    return(
        <View style={searchMovie.view}>
            <TextInput 
          style={searchMovie.textSearch}
          placeholder={' e.g. superman'}
              onChangeText = {handledChangedText}>
          </TextInput>
          <TouchableOpacity style={searchMovie.findButton}
            onPress={()=>findMovie()}>
              <Text styles={searchMovie.findButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
    )
}