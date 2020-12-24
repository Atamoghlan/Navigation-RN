import React from "react";
import {View, Text, TextInput, TouchableOpacity, } from 'react-native';

export const SearchMovie = (props) => {
    const {handledChangedText , findMovie} = props;
    return(
        <View style={{flexDirection: "row", flexWrap: 'wrap', width: "100%"}}>
            <TextInput 
          style={{marginVertical: 10, backgroundColor: 'white', fontSize: 25, width: 300}}
          placeholder={' e.g. superman'}
              onChangeText = {handledChangedText}>
          </TextInput>
          <TouchableOpacity style={{marginHorizontal: 5,borderWidth: 6, borderColor: "#D3D3D3", backgroundColor: 'blue', width: "28%",height: 55, alignSelf: "center"}} onPress={()=>findMovie()}>
              <Text style={{fontSize: 30, alignSelf: 'center', color: 'white'}}>Search</Text>
          </TouchableOpacity>
        </View>
    )
}