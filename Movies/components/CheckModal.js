import React from 'react';
import { View ,Image, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';

export const CheckModal = (props) => {
    const {icon, name, description, onPress, modalWindow, filteredData} = props;
    console.log(description)
    console.log(name)
    return(
        <View>
            <Modal visible={modalWindow}>
                <ScrollView>
                    <Image source={icon}/>
                    <Text style={{marginTop: 10,textAlign: 'center', fontSize: 20}}>{name}</Text>
                    <Text style={{marginTop: 10,textAlign: 'center', fontSize: 15}}>{description}</Text>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={{width: 80,height: 35,marginTop: 10,textAlign: 'center',backgroundColor: 'red', alignSelf: 'center', fontSize: 25}}>Close</Text>
                    </TouchableOpacity>
                </ScrollView>
             </Modal>
        </View>
    )
}
export default CheckModal