import { StyleSheet } from "react-native";

export const tabBarOptions = {
  activeTintColor: "black",
  inactiveTintColor: "black",
  activeBackgroundColor: '#00FFFF',
  inactiveBackgroundColor: '#5F9EA0',
  labelStyle: {
      fontSize: 25,
      fontWeight: 'bold'
  },
  tabStyle: {
      paddingBottom: 10
  }
}

export const news = StyleSheet.create({
  menuLogoButton: {
      width: 90,
      height: 90,
      borderRadius: 15,
      alignSelf: 'flex-end',
      margin: 5
  },
  secondView: { alignItems: 'center' },
  view: { flex: 1 }
})
export const splashScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  loadingImage: {
    marginTop: 20, width: 330, height: 220,
    resizeMode: 'stretch'
  },
  animatedBox:
  {
    flex: 1,
    width: 160,
    height: 160,
  },
  logo:
  {
    alignSelf: 'center', width: 580, height: 580, borderRadius: 105,
    padding: 0
  },
  loadingText: {
    marginTop: 60, fontSize: 30, backgroundColor: 'blue', color: 'white', width: 200,
    alignSelf: 'center'
  },
});
export const aboutMeSettings = StyleSheet.create({
    view: {flexDirection: 'row',flexWrap: 'wrap'},
    text: {fontSize: 40}
})
export const aboutMe = StyleSheet.create({
    view: {flex:1},
    text: {fontSize: 40}
})
export const tabAboutMe = {activeBackgroundColor: '#AFEEEE',labelStyle: {fontSize: 40}}
export const entertainment = StyleSheet.create({
  calcLogoButton:{
      width: 80, 
      height: 80,
      borderRadius: 15,
      margin: 5
  },
  MenuLogoButton:{
      width: 70, 
      height: 70,
      borderRadius: 15,
      margin: 5
  },
  viewMain: {flexDirection: 'row',flexWrap: 'wrap'}
})

export const searchMovie = StyleSheet.create({
  view: {
    flexDirection: "row", flex: 1
  },
  textSearch: {
    marginVertical: 10, backgroundColor: 'white',
    fontSize: 25, flex: 0.75
  },
  findButtonText: {
    color: 'white', textAlign: 'center'
  },
  findButton: {
    marginHorizontal: 5, borderWidth: 6, borderColor: "#D3D3D3",
    backgroundColor: 'blue', flex: 0.25,
    alignSelf: "center", justifyContent: 'center', height: 55, backgroundColor: 'white', alignItems: 'center'

  }
})
export const mainMenu = StyleSheet.create({
  container: {
    marginTop: 30
  },
  text: {
    width: 125,
    height: 60,
    marginHorizontal: 9,
    marginTop: 20,
    fontSize: 25,
    color: 'white'
  },
  mainView: { backgroundColor: "black" },
  searchingText: { backgroundColor: 'white', fontSize: 22, marginVertical: 10, color: 'white', backgroundColor: 'black' },
  mapView: { flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "black" },
  icon: { width: 125, height: 150, borderRadius: 15, margin: 9 },
  heartTO: { width: 45, height: 45, margin: 5, marginLeft: 50 },
  heartImage: { width: 45, height: 45 }
})

export const favouriteList = StyleSheet.create({
  mainView: {
    alignItems: 'center'
  },
  clearBtn: { width: 125, height: 65, alignSelf: 'center', marginTop: 10 },
  mapView: {
    flexWrap: 'wrap', flexDirection: "column", justifyContent: 'center',
    backgroundColor: "white"
  },
  movieName: { width: 250, height: 45, fontSize: 35, color: 'black', marginTop: 15 },
  movieImage: { width: 250, height: 250, borderRadius: 20, resizeMode: 'stretch' },
  deleteBtn: { width: 90, height: 75, alignSelf: 'center', margin: 10, resizeMode: 'stretch' },
})
export const checkModal = StyleSheet.create({
  image: {
    borderRadius: 35,
    marginTop: 15,
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  name: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20
  },
  text: {
    margin: 10,
    textAlign: 'center',
    fontSize: 15
  },
  textInTouchable: {
    width: 80, height: 35, marginTop: 10, textAlign: 'center',
    backgroundColor: 'red', alignSelf: 'center', fontSize: 25
  },
  calcLogoButton: {
    width: 80,
    height: 80,
    borderRadius: 15,
    margin: 5
  },
  MenuLogoButton: {
    width: 70,
    height: 70,
    borderRadius: 15,
    margin: 5
  }
})


