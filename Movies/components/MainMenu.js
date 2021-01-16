import React, { Component } from 'react';
import { View, ScrollView, StyleSheet ,Image, Text, TouchableOpacity} from 'react-native';
import {CheckModal} from '../components/CheckModal';
import { SearchMovie } from "../components/SearchMovie";
import { favouriteList, fetchUrl } from "../Redux/actions";
import { connect } from "react-redux";
import Loading from "../../Animations/LoadingAnimation";

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
    //console.log('handledChangedText')
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
    //const {data} = this.props.data
    let icon = require('../images/popcorn.jpg');
    let heart = require('../images/heart.png');
    let name = '';
    let description = '';
    //console.log (data)
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <SearchMovie
          handledChangedText={this.handledChangedText}
          findMovie={this.findMovie}/>
          <Text style={styles.searchingText}>You are searching: {myDefaultSearch} </Text>
          {/* {console.log(this.state.data)}, */}
          {this.props.loading ? <Loading/>:
          <View style={styles.mapView}>

         {this.props.data.map((item,index)=> {
             icon = item.show.image?{uri:item.show.image.medium}: require("../images/popcorn.jpg")
             name = item?.show?.name;
             description= item?.show?.summary;
              return (
                <View key={index}>
                <Text style={styles.text}>{item.show.name}</Text>
             <TouchableOpacity 
             onPress={()=>this.workModal(item.show)}>      
                <Image style={styles.icon} source={icon}/>
             </TouchableOpacity>
             <TouchableOpacity style={styles.heartTO}
             onPress={() => this.checkForAddToFavourite(item.show)}>
                  <Image style={styles.heartImage}
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
const styles=StyleSheet.create({
  container: {
    marginTop: 30
  },
  text: {
    width:125, 
    height: 60,
    marginHorizontal: 9 ,
    marginTop: 20,
    fontSize: 25, 
    color: 'white'
  },
  mainView: {backgroundColor: "black"},
  searchingText: {backgroundColor: 'white', fontSize: 22, marginVertical: 10, color:'white', backgroundColor: 'black'},
  mapView: {flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "black"},
  icon: {width:125,height:150,borderRadius: 15,margin: 9},
  heartTO: {width: 45, height: 45, margin: 5, marginLeft: 50},
  heartImage: {width:45, height:45}
})

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