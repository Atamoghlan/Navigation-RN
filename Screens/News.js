import React, {Component} from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { WebView } from "react-native-webview";
import Loading from "../Animations/LoadingAnimation";
import { news } from "../styles/style";

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
            <View style={news.view}>
                { this.state.isLoadNews && <Loading/>}
                <WebView
                    onLoad={() => this.loadNews()}
                    source={{ uri: 'https://edition.cnn.com/?refresh=1' }} />
                <View
                    style={news.secondView}>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}>
                        <Image source={mainMenulogo}
                            style={news.menuLogoButton} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}