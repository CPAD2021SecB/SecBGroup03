import React , {Component} from 'react';
import {View,Text,Image, StatusBar} from 'react-native';

export default class SplashScreen extends Component{
    render(){
        return(
            <View style ={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#c11e1e'}}>
                <StatusBar backgroundColor='#c11e1e'/>
                <Image source = {{uri:'https://i.imgur.com/2qYtn4b.jpg'}}
                style ={{flex:1,height:400,width:300,resizeMode:'contain'}}/>
            </View>
        );
    }
}