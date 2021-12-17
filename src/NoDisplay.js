import React,{Component} from 'react';
import { Text , View , Image , ScrollView } from 'react-native';
import nodisplay from './Logo/notfound.gif';

import EventCard from './EventCard';
import OutletCard from './OutletCard'

class Nodisplay extends Component{
    constructor(props){
        super(props);
        list = this.props.navigation.getParam('list');
        this.state = {
            outlets:list
        }
    }
    renderOutletList(){
        return this.state.outlets.map(
            outlet => <OutletCard key = {outlet.name} outlet = {outlet} navigation = {this.props.navigation}
            initial = {this.props.navigation.getParam('initial')} first = {this.props.navigation.getParam('first')} 
            second= {this.props.navigation.getParam('second')} third= {this.props.navigation.getParam('third')} /> 
        );
    }
    renderEventList(){
        return this.state.outlets.map(
            events => <EventCard key ={events.name} events={events} navigation = {this.props.navigation} 
            moveTo = {'screen15'} thenMoveTo={'screen17'} />
        );
    }
    
    render(){
        if(list.length===0){
            return(
                <View style ={{
                justifyContent : 'center',
                alignItems: 'center',}}>
                <Image style = {styles.imageStyle}source = {nodisplay}/>
                <Text>Sorry!! No such restaurants of this category avaialble right now</Text>
                </View>
            );
            }
            else{
                if(this.props.navigation.getParam('type')==='events'){
                   return(
                       <ScrollView> 
                       {this.renderEventList()} 
                       </ScrollView>
                   );
                }
                else{
                    return(
                        <ScrollView>
                        {this.renderOutletList()}
                        </ScrollView>
                    );
                }
            }
        
    }
}

const styles = {
    imageStyle: {
        flex: -1,
        height:300,
        width:700,
    }

}

export default Nodisplay;