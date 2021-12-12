import React, {Component} from 'react';
import { Text , View , Image } from 'react-native';
import { createAppContainer , createBottomTabNavigator , createDrawerNavigator , createStackNavigator , createMaterialTopTabNavigator} from 'react-navigation';
import Near from './src/Near';
import Explore from './src/Explore';
import EandO from './src/EandO';
import Account from './src/Account';
import Points from './src/Points';
import Upcoming from './src/Upcoming';
import Expired from './src/Expired';
import Contact from './src/Contact';
import AccIcon from './src/Logo/account.png';
import ExpIcon from './src/Logo/explore.png'
import Nodisplay from './src/Nodisplay';
import Offers from './src/Offers';
import EOIcon from './src/Logo/eventsandoffers.png';
import Outletdetails from './src/Outletdetails';
import NearIcon from './src/Logo/nearme.png';
import Outletaddress from './src/Outletaddress';
import Confirmation from './src/Confirmation';
import {setTopLevelNavigator} from './src/Near';
import Login from './src/Login';
import SignUp from './src/SignUp';
import Otp from './src/Otp';
import AboutEvent from './src/AboutEvent';
import BookEvent from './src/BookEvent';
import EventConfirm from './src/EventConfirm';
import firebase from 'firebase';
import Spinner from './src/ActivityIndicator';
import SpalshScreen from './src/SplashScreen';
import SplashScreen from './src/SplashScreen';



//outlet details material navtab
/* const AppNavigator6 = createBottomTabNavigator({
  Menu:Menu,
  Events:OutletEvents,
},{}) */

//near me stack.
const AppNavigator5 = createStackNavigator({
  screen5:{
    screen : Near,
    navigationOptions:{header:null}
  },
  screen1:Outletaddress,
  screen2:{
    screen:Outletdetails,
    navigationOptions:({navigation}) => ({
      title: navigation.state.params.outlet.name,
      headerStyle:{
        backgroundColor:'#fff'
      },
      headerTitleStyle:{
        fontSize : 20,
        color: 'black',
        fontWeight:'100'
      },
    
    }),
  },
  screen6: Confirmation,
  screen7: AboutEvent,
  
  screen11: EventConfirm,

},{headerLayoutPreset:'center'})

//events and offers top navbar
const AppNavigator4 = createMaterialTopTabNavigator({
  Events: EandO,
  Offers: Offers,
},{
  tabBarOptions:{
    style:{
      backgroundColor:'white',
    },
    activeTintColor:'black',
    inactiveTintColor:'gray',
    indicatorStyle:{
      backgroundColor:'black',
    },
  }
})
//events and offers stack
const AppNavigator3 = createStackNavigator({
  screen:{
    screen : AppNavigator4,
    navigationOptions:{header:()=>(
      <View style = {styles.headerStyle} >
        <Text style = {styles.textStyle}>Events and Offers</Text>
      </View>
      )}
  },
  screen10:Nodisplay,
  
  screen13:{
    screen:Outletdetails,
    navigationOptions:({navigation}) => ({
      title: navigation.state.params.outlet.name,
      headerStyle:{
        backgroundColor:'#fff'
      },
      headerTitleStyle:{
        fontSize : 20,
        color: 'black',
        fontWeight:'100'
      },
    
    }),
  },
  screen14: Confirmation,
  screen15: AboutEvent,
  
  screen17: EventConfirm,
},{})


//explore screen stack
const AppNavigator2 = createStackNavigator({
  screen9:{
    screen:Explore,
    navigationOptions:{header: null}
  },
  screen2:Nodisplay,
  screen18:Outletaddress,
  screen19:{
    screen:Outletdetails,
    navigationOptions:({navigation}) => ({
      title: navigation.state.params.outlet.name,
      headerStyle:{
        backgroundColor:'#fff'
      },
      headerTitleStyle:{
        fontSize : 20,
        color: 'black',
        fontWeight:'100'
      },
    
    }),
  },
  screen20: Confirmation,
  screen21: AboutEvent,
  
  screen22: EventConfirm,
})

//account drawer
const AppNavigator1 = createDrawerNavigator({
  Account:Account,
  Points: Points,
  'Upcoming Bookings': Upcoming,
  'Expired Bookings': Expired,
  'Contact Us': Contact 
},{})

//main screen bottom tab
const AppNavigator = createBottomTabNavigator({
  NearMe: {
    screen: AppNavigator5,
    navigationOptions: {
      tabBarIcon:() => (
        <Image source = {NearIcon} style = {{ height : 30 , width : 30 }}/>
    )
    },
  },
  Explore: {
    screen:AppNavigator2,
    navigationOptions:{
      tabBarIcon: () => (
        <Image source = {ExpIcon} style = {{height : 30 , width : 30}}/>
    )
    },
  },
  EandO: {
    screen:AppNavigator3,
    navigationOptions: {
      tabBarIcon: () => (
        <Image source = {EOIcon} style={{height : 30, width:30}}/>
      )
    },
  },
  Account: {
    screen:AppNavigator1,
    navigationOptions:{
      tabBarIcon : () => (
        <Image source = {AccIcon} style = {{ height : 30 , width : 30}}/>
    )
    }
  }
},{
  tabBarOptions:{
    activeBackgroundColor:'#f5f5f5',
    activeTintColor:'black',
    labelStyle:{
      fontWeight: '200',
    }
  },
})


const final = createStackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{header:null}
  },
  'Sign Up':SignUp,
  OTP:Otp,
  screen4:{
    screen:AppNavigator,
    navigationOptions:{header:null}
  },

})

const AppContainer = createAppContainer(final);
const TabContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  state = {loggedIn:null}
  componentWillMount(){
    if(!firebase.apps.length){
    firebase.initializeApp({
            apiKey: "AIzaSyC4wbk8ndm8aqNFRMoriSPwXu04I0yqojs",
            authDomain: "foodzilla-9d7c2.firebaseapp.com",
            databaseURL: "https://foodzilla-9d7c2.firebaseio.com",
            projectId: "foodzilla-9d7c2",
            storageBucket: "foodzilla-9d7c2.appspot.com",
            messagingSenderId: "140164895707",
            appId: "1:140164895707:web:3cbdb53338de8d03"
          });
        }
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true})
      }else{
        this.setState({loggedIn:false})
      }

    });
    }

    render() {
      switch(this.state.loggedIn){
        case true:
            return <TabContainer/>
        case false:
            return (<AppContainer
            ref={(navigatorRef) => {
              setTopLevelNavigator(navigatorRef);
            }}
          />
            );
          
        default:
          return(
          
          <SplashScreen/>
          );
      }
  }
}


//styling for the events and offers page
const styles = {
  textStyle : {
      alignSelf : 'center',
      fontSize : 20,
      paddingTop : 10,
      color: 'black',

  },
  headerStyle :{
      flex: -1, 
      backgroundColor : '#fff', 
      paddingBottom: 10,
      borderColor :'black',
      shadowColor: '#000',
      shadowOffset: { width: 0 , height: 2},
      shadowOpacity: 0.9,
      shadowRadius: 2,

  },
};



//export default createAppContainer(AppNavigator);