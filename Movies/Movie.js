import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput ,Image, Text, Header, PlatformColor} from 'react-native';
import { MovieChecking } from './components/MovieChecking';
import { SearchMovie } from './components/SearchMovie';


const url = 'http://api.tvmaze.com/search/shows?q=' 

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      userInput: "super",
      value: "Search movie",
      modalWindow: false ,
      changedData: []
    }
  }
  searchUrl = '';
  searchText = ''

  workModal = () => {
    this.setState({
      modalWindow: !this.state.modalWindow
    })
  }
  changeData = (show) => {
    this.setState({
      changedData: show 
    })
  }

  findMovie = () => {
    //console.log('findmovie')
    this.setState(prevState => ({userInput: prevState.userInput = this.searchText}));
    this.componentDidUpdate()
  } 
  
  handledChangedText = (newText) =>{
    this.searchText = newText
    this.searchUrl = url + newText
    //console.log('handledChangedText')
  }
  componentDidMount = async() => {
    try{
      const response = await fetch(url + this.state.userInput)
      const data = await response.json()
      this.setState({ 
        data
      })
     //console.log(this.state.data)
    }
    catch(e){
     console.log("URL is wrong")
    }

  this.componentDidUpdate = async() => {
      try{
        const response = await fetch(this.searchUrl)
        const data = await response.json()
        this.setState(prevState => ({data: prevState.data = data}))
      }
      catch(e){
        console.log('URL is wrong')
      }

    }
  }
  render (){
    const {data}=this.state
    //console.log (data)
    return (
      <View style={{backgroundColor: "black"}}>
        <ScrollView>
          <SearchMovie
          handledChangedText={this.handledChangedText}
          findMovie={this.findMovie}/>
          <Text style={{backgroundColor: 'white', fontSize: 22, marginVertical: 10, color:'white', backgroundColor: 'black'}}>You are searching: {this.searchText} </Text>
          {/* {console.log(this.state.data)}, */}
          <MovieChecking 
          data = {data}
          handledChangedText={this.handledChangedText}
          workModal={this.workModal}
          modalWindow={this.state.modalWindow}
          changedData = {this.changeData}
          />
           </ScrollView>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container: {
    marginTop: 30
  }
})