import React,{Component} from 'react';
import { View , Text , Image , TouchableOpacity , Dimensions } from 'react-native';
import BookEvent from './BookEvent';


const screenWidth = Math.round(Dimensions.get('window').width);
const imageHeight = (Math.round(Dimensions.get('window').height))/4

export default class AboutEvent extends Component{
    render(){
        events = this.props.navigation.getParam('events')
        return(
            <View>
                <Image source={{uri : events.image}} style={{width: screenWidth, height: imageHeight}}/>

                <Text style={style.nameStyle}>
                {events.name}
                </Text>
                <Text style={style.descriptionStyle}>
                {events.description}
                </Text>
                <Text style={style.DTCStyle}>
                Date: {events.date}
                </Text>
                <Text style={style.DTCStyle}>
                Time: {events.time}
                </Text>
                <Text style={style.DTCStyle}>
                Cover Charge: ₹{events.cover}
                </Text>
                <TouchableOpacity style={style.proceedStyle} onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('thenMoveTo'), 
                {events: this.props.navigation.getParam('events'), outlet: this.props.navigation.getParam('outlet')})}>
                <Text style={style.proceedTextStyle}>
                GET NOW
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const style = {
    nameStyle : {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black'
    },
    descriptionStyle: {
    fontSize: 15, 
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 8
    },
    DTCStyle: {
    color: 'black',
    fontSize: 20,
    margin: 10
    },
    proceedStyle: {
    marginTop: 80, 
    backgroundColor: '#ff8a65', 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 20, 
    width: 200, 
    marginLeft: 80
    },
    proceedTextStyle: {
    padding: 15, 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'black'
    },
    
    }