import React from 'react';
import { View ,Image, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import { checkModal } from "../../styles/style";

export const CheckModal = (props) => {
    const {icon, name, description, onPress, modalWindow} = props;
    return(
        <View>
            <Modal visible={modalWindow}>
                <ScrollView>
                    <Image source={icon} style={checkModal.image}/>
                    <Text style={checkModal.name}>{name}</Text>
                    <Text style={checkModal.text}>{description?.replace(/(<([^>]+)>)/gi, "")? description?.replace(/(<([^>]+)>)/gi, ""):"No Description"}</Text>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={checkModal.textInTouchable}>Close</Text>
                    </TouchableOpacity>
                </ScrollView>
             </Modal>
        </View>
    )
}
