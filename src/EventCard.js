import React, {Component} from 'react';
import { Text , View , Image , TouchableOpacity , ScrollView } from 'react-native';
import Cards from './Cards';
import CardSection from './CardSection';
import AboutEvent from './AboutEvent';

export default class EventCard extends Component{
    render(){
        const { headerStyle , textStyle , imageStyle } = styles;
        return(
            <View>
                <Cards>
                    <TouchableOpacity onPress = {()=> this.props.navigation.navigate(this.props.moveTo ,
                        {events:this.props.events, outlet: this.props.outlet, thenMoveTo: this.props.thenMoveTo})}>
                    <CardSection>
                        <Image style = {imageStyle} source = {{uri:this.props.events.image}} />
                        <View style = {{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            paddingLeft: 5
                        }}>
                            <Text style = {{fontSize:20,
                                color:'black',
                                fontWeight:'bold'
                                }}>{this.props.events.name}</Text>
                            <Text>Date:{this.props.events.date}</Text>
                            <Text>Time:{this.props.events.time}</Text>
                            <Text style={{paddingLeft:200,color:'black'}}>View</Text>
                        </View>
                    </CardSection>
                    </TouchableOpacity>
                </Cards>
            </View>
        );
    }
}





const styles = {
    headerStyle : {border:2,
        height:50,
        backgroundColor :'#fff',
        borderColor :'black',
        shadowColor: '#000',
        shadowOffset: { width: 0 , height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10

    },
    textStyle : {
        fontSize : 20,
        color: 'black'
    },
    imageStyle :{
        height: 60,
        width: 80,
        margin: 5
    },
    
};
