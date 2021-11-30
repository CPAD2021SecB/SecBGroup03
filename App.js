/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import firebase from 'firebase';
import Login from './src/Login'
import SplashScreen from './src/SplashScreen'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { setTopLevelNavigator} from './src/nearMe'

const finalStack = createStackNavigator({

    screen1: {
        screen: Login,
        navigationOptions:{
            header: null
        }
    }
},{})

const AppContainer = createAppContainer(finalStack);

export default class App extends Component {
    state = {loggedIn:null}
    componentWillMount(){
        if (!firebase.apps.length) {

            firebase.initializeApp({
                apiKey: "AIzaSyD8e5uCCTmuFjn-CmKNaxdmaNLeZJ6UO9M",
                authDomain: "shuttle-34268.firebaseapp.com",
                databaseURL: "https://shuttle-34268.firebaseio.com",
                projectId: "shuttle-34268",
                storageBucket: "",
                messagingSenderId: "241387829278",
                appId: "1:241387829278:web:1e85379f28043062"
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
            default:
                return(<SplashScreen/> )
            case false:
                return (<AppContainer
                    ref={(navigatorRef) => {setTopLevelNavigator(navigatorRef);}} />);

        }
    }
}

const style = {
    headerStyle:{
        borderWidth:0,
        height: 50,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efebe9'
    },
    headerText:{
        fontSize:25,
        fontWeight: '300',
        color: 'black'
    }
}
