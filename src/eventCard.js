import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import React , {Component} from 'react';
import Card from './Card'
import CardSection from './CardSection';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const modalHeight = screenHeight/2;

export default class EventCard extends Component{

    render(){
        return(
            <View>
                <TouchableOpacity style={{padding:5}} onPress={() => this.props.navigation.navigate(this.props.moveTo, {event: this.props.event, outlet: this.props.outlet, thenMoveTo: this.props.thenMoveTo})}>
                    <Card>
                    <CardSection>
                        <Image
                            source = {{uri : this.props.event.image}} 
                            style={{height: 80, width:80, margin: 5}} />
                        <View style={{flexDirection: 'column', justifyContent: 'center', paddingLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}> 
                                {this.props.event.name} 
                            </Text>
                            <Text>
                                Date: {this.props.event.date} 
                            </Text>
                            <Text>
                                Time: {this.props.event.time}    
                            </Text>
                            <Text style={{ paddingLeft: 190, fontSize: 15, color: '#480d0d' }}>
                                View
                            </Text> 
                            
                            
                        </View>
                        
                    </CardSection>
                    
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
}