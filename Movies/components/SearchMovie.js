import React from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export const SearchMovie = (props) => {
    const {handledChangedText , findMovie} = props;
    return(
        <View style={styles.view}>
            <TextInput 
          style={styles.textSearch}
          placeholder={' e.g. superman'}
              onChangeText = {handledChangedText}>
          </TextInput>
          <TouchableOpacity style={styles.findButtonText}
            onPress={()=>findMovie()}>
              <Text styles={styles.findButton}>Search</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row", flexWrap: 'wrap', width: "100%"
},
 textSearch: {
   marginVertical: 10, backgroundColor: 'white', 
 fontSize: 25, width: 300
},
findButtonText: {
  fontSize: 30, alignSelf: 'center', color: 'white'
},
findButton: {
  marginHorizontal: 5,borderWidth: 6, borderColor: "#D3D3D3", 
  backgroundColor: 'blue', width: "28%",
  height: 55,alignSelf: "center"
}
})