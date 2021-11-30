import React, {Component} from 'react'
import {View, Text, Image, Dimensions, StatusBar} from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

/* const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'screen11'})
    ]
}) */

export default class SplashScreen extends Component{

    render(){

        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff953e'}}>
                <StatusBar backgroundColor='#ff953e'/>
                <Image source={{uri: 'https://imgur.com/4jzwEFs.jpg'}}
                       style={{flex: 1, height: 400, width: 300, resizeMode: 'contain'}}/>
            </View>
        );
    }
}