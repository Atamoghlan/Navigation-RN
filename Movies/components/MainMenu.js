import React, { Component } from 'react';
import { View, ScrollView, StyleSheet ,Image, Text, TouchableOpacity} from 'react-native';
import {CheckModal} from '../components/CheckModal';
import { SearchMovie } from "../components/SearchMovie";
import { favouriteList, fetchUrl } from "../Redux/actions";
import { connect } from "react-redux";
import Loading from "../../Animations/LoadingAnimation";
import { mainMenu } from "../../styles/style";

export let url = 'http://api.tvmaze.com/search/shows?q=' 
export let myDefaultSearch = 'batman'

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Search movie",
      modalWindow: false ,
      changedData: []
    }
    
  }
 
  inputData = [];
  searchUrl = '';
  searchText = ''
    name=''
    description=''
    icon = require("../images/popcorn.jpg");
  workModal = (item) => {
    this.setState({
      modalWindow: !this.state.modalWindow
    })
    this.name=item.name
    this.description=item.summary
    this.icon= item.image?{uri:item.image.medium}:require("../images/popcorn.jpg")
  } 
  changeData = (show) => {
    this.setState({
      changedData: show 
    })
  }

  findMovie = () => {
    this.props.goToFetch()
  } 
  
  handledChangedText = (newText) =>{
    myDefaultSearch = newText
    this.searchUrl = url + newText
    this.componentDidUpdate()
  }
  componentDidMount = () => {
    this.props.goToFetch()
  }
  checkForAddToFavourite = (show) => {
    const check = this.props.list.filter(item => item.name === show.name);
    if (check.length === 0) {
      this.props.favMovies(show.name, show.image);
    }
  }
  componentDidUpdate = async() => {
    // try{
    //   const response = await fetch(this.searchUrl)
    //   const data = await response.json()
    //   this.inputData = data
    //   // this.setState(prevState => ({data: prevState.data = data}))
    // }
    // catch(e){
    //   console.log('URL is wrong')
    // }

  }
  render (){
    let icon = require('../images/popcorn.jpg');
    let heart = require('../images/heart.png');
    return (
      <View style={mainMenu.mainView}>
        <ScrollView>
          <SearchMovie
          handledChangedText={this.handledChangedText}
          findMovie={this.findMovie}/>
          <Text style={mainMenu.searchingText}>You are searching: {myDefaultSearch} </Text>
          {/* {console.log(this.state.data)}, */}
          {this.props.loading ? <Loading/>:
          <View style={mainMenu.mapView}>

         {this.props.data.map((item,index)=> {
             icon = item.show.image?{uri:item.show.image.medium}: require("../images/popcorn.jpg")
             name = item?.show?.name;
             description= item?.show?.summary;
              return (
                <View key={index}>
                <Text style={mainMenu.text}>{item.show.name}</Text>
             <TouchableOpacity 
             onPress={()=>this.workModal(item.show)}>      
                <Image style={mainMenu.icon} source={icon}/>
             </TouchableOpacity>
             <TouchableOpacity style={mainMenu.heartTO}
             onPress={() => this.checkForAddToFavourite(item.show)}>
                  <Image style={mainMenu.heartImage}
                  source={heart}/>
                </TouchableOpacity>
             </View>
          )           
        })} 
          <CheckModal 
          icon={this.icon}
          name={this.name}
          description={this.description}
          modalWindow={this.state.modalWindow}
          onPress={this.workModal}/>
        </View>}
           </ScrollView>
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      goToFetch: () =>  dispatch(fetchUrl()),
      favMovies: (name, image) => dispatch(favouriteList(name, image)), 
      dispatch

  }
}
const mapStateToProps = state => {
  return {
    loading: state.ReducerForSearch.loadingAnimation,
    data: state.ReducerForSearch.data,
    list: state.ReducerForFavourite.movieList
  }
}
const myApp = connect(mapStateToProps, mapDispatchToProps)(MainMenu);
export default myApp;