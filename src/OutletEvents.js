import React, {Component} from 'react';
import { Text, FlatList, Animated, TouchableOpacity , View , Image  } from 'react-native';
import { withCollapsibleForTabChild } from 'react-navigation-collapsible';
import Cards from './Cards';
import CardSection from './CardSection';
import EventCard from './EventCard';


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class OutletEvent extends Component{
  /* static navigationOptions = {
    title: 'Child 1',
    
  }; */

  constructor(props){
    super(props);

    const {name,image,menu,events}=this.props.navigation.getParam('outlet');

    const data = Object.keys(events); 

    const eventsarray = []
    for(let i = 0 ; i < data.length ; i++){
      var a = data[i]
      eventsarray.push(events[a]);
    }

    this.state = {
      data: eventsarray
    }
  }

  renderItem = ({item}) => (
    <TouchableOpacity onPress = {()=> this.props.navigation.navigate('screen7')}>
      <EventCard events ={item} navigation= {this.props.navigation} key = {item.name} 
      // outlet={this.props.navigation.getParam('outlet')} 
      moveTo = {this.props.navigation.getParam('second')}
      thenMoveTo = {this.props.navigation.getParam('third')} />
    </TouchableOpacity>
  )

  render(){
    const { animatedY, onScroll } = this.props.collapsible;

    return (
      <AnimatedFlatList 
        style={{flex: 1}}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(a, index) => String(index)}

        onScroll={onScroll} 
        _mustAddThis={animatedY}
      />
    )
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
export default withCollapsibleForTabChild(OutletEvent);
