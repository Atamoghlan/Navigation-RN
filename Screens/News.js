import React, {Component} from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { WebView } from "react-native-webview";
import Loading from "../Animations/LoadingAnimation";

mainMenulogo = require("../Images/MainMenu.jpg")
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadNews: true
        }
    }
    loadNews = () => {
        this.setState({ isLoadNews: false })
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={newsStyles.view}>
                { this.state.isLoadNews && <Loading/>}
                <WebView
                    onLoad={() => this.loadNews()}
                    source={{ uri: 'https://edition.cnn.com/?refresh=1' }} />
                <View
                    style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}>
                        <Image source={mainMenulogo}
                            style={newsStyles.MenuLogoButton} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const newsStyles = StyleSheet.create({
    MenuLogoButton: {
        width: 90,
        height: 90,
        borderRadius: 15,
        alignSelf: 'flex-end',
        margin: 5
    },
    view: { flex: 1 }
})