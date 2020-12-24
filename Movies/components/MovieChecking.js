import React from 'react';
import { View ,Image, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import {CheckModal} from './CheckModal';

export const MovieChecking = (props) =>{
const {data, handledChangedText, workModal, modalWindow, changedData} = props;
let icon = require("../images/popcorn.jpg");
let name = '';
let description = '';
 console.log(name)
 /* dataForModal = (show) => {
   changedData = show
 }  */ 
 
return(
    <View style={{flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "black"}}>
        
         {data.map((item,index)=> {
             icon = item?.show?.image ? {uri:item.show.image.medium} : require("../images/popcorn.jpg")
             name = item?.show?.name;
             description= item?.show?.summary;
              return (<View key={index}>
             <TouchableOpacity onPress={() => {}}>      
                <Text style={{ width:125, height: 60,marginHorizontal: 9 ,marginTop: 20,fontSize: 25, color: 'white'}}>{item.show.name}</Text>
                <Image style={{width:125,height:150,borderRadius: 15, margin: 9}} source={icon}/>
             </TouchableOpacity>
           </View>)           
        })} 
          <CheckModal 
          icon={icon}
          name={name}
          description={description}
          modalWindow={modalWindow}
          onPress={workModal}/>

    </View>
)
}