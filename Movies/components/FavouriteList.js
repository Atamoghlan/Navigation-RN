import React, { Component } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { clearList, deleteMovie } from "../Redux/actions";
import { favouriteList } from "../../styles/style";

class FavouriteList extends Component {
    render() {
        const list = this.props.list;
        movieId = 0;
        clearIcon = require('../images/Clear.png');
        delIcon = require('../images/del.png')
        return (
            <View>
                <ScrollView>
                <View
                style={favouriteList.mainView}>
                    <View>
                        <TouchableOpacity
                        onPress={() => this.props.clear()}>
                            <Image
                                style={favouriteList.clearBtn}
                                source={clearIcon}
                                 />
                        </TouchableOpacity>
                    </View>
                    {list.map((movie, index) => (
                        <View
                            key={++movieId}
                            style={favouriteList.mapView}>
                            <View>
                                <Text
                                    style={favouriteList.movieName}>{movie.name}</Text>
                                <Image
                                    style={favouriteList.movieImage}
                                    source={movie.icon} />
                            </View>
                            <TouchableOpacity
                        onPress={() => this.props.deletemovie(index)}>
                            <Image
                                style={favouriteList.deleteBtn}
                                source={delIcon}
                                 />
                        </TouchableOpacity>
                        </View>
                    ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.ReducerForFavourite.movieList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clear: () =>  dispatch(clearList()),
        deletemovie: (index) => dispatch(deleteMovie(index)),
        dispatch
  
    }
  }

const favList = connect(mapStateToProps, mapDispatchToProps)(FavouriteList);

export default favList 