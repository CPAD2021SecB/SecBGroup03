import React, {Component} from 'react';
import { Text, FlatList, Animated, TouchableOpacity } from 'react-native';
import { withCollapsibleForTabChild } from 'react-navigation-collapsible';
import EventCard from './eventCard'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class OutletEvent extends Component{
  static navigationOptions = {
    title: 'EVENTS',
    tabBarOptions: {
        indicatorStyle: { backgroundColor: 'grey' },
        labelStyle: {fontWeight: '500', fontSize: 15},
        style: { borderTopColor: 'transparent', borderTopWidth: 1, elevation: 0, 
        backgroundColor: 'transparent', height: 50},
        activeTintColor : 'black',
        inactiveTintColor : 'grey',
      }
  }; 

  constructor(props){
    super(props);
    const data = []
    const {name, image, event } = this.props.navigation.getParam('outlet')
    const dummydata = Object.keys(event)
    for(let i = 0 ; i < dummydata.length ; i++){
      var a = dummydata[i]
      data.push(event[a])
    }
    this.state = {
      data: data }
  }

  renderItem = ({item}) => (
    <TouchableOpacity >
      <EventCard key={item.name} event={item} navigation={this.props.navigation} outlet={this.props.navigation.getParam('outlet')} moveTo={this.props.navigation.getParam('second')} thenMoveTo={this.props.navigation.getParam('third')}/>
    </TouchableOpacity>
  )

  render(){
    const { animatedY, onScroll } = this.props.collapsible;
    return (
      <AnimatedFlatList 
        style={{flex: 1, marginBottom: 230, marginTop: 5
        }}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(a, index) => String(index)}
        onScroll={onScroll} 
        _mustAddThis={animatedY} />
    )
  }
}

export default withCollapsibleForTabChild(OutletEvent);