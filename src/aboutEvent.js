import { View, Text, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
import React , {Component} from 'react';

const screenWidth = Math.round(Dimensions.get('window').width);
const imageHeight = (Math.round(Dimensions.get('window').height))/4

export default class AboutEvent extends Component{
    constructor(props){
        super(props);
        // const event = this.props.navigation.getParam('event')
    }
    render(){
        event = this.props.navigation.getParam('event')
        outlet = this.props.navigation.getParam('outlet')
        thenMoveTo = this.props.navigation.getParam('thenMoveTo')
        return(
            <View>
                <Image source={{uri : event.image}} style={{width: screenWidth, height: imageHeight}}/>

                <Text style={style.nameStyle}>
                    {event.name}
                </Text>
                <Text style={style.descriptionStyle}>
                    {event.description}
                </Text>
                <Text style={style.DTCStyle}>
                    Date: {event.date}
                </Text>
                <Text style={style.DTCStyle}>
                    Time: {event.time}
                </Text>
                <Text style={style.DTCStyle}>
                    Cover Charge: ₹{event.cover}
                </Text>
                <TouchableOpacity style={style.proceedStyle} onPress={() => this.props.navigation.navigate(thenMoveTo, {event: this.props.navigation.getParam('event'), outlet: this.props.navigation.getParam('outlet')})}>
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
        backgroundColor: '#ff953e', 
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
        color: '#480d0d'
    },

}
