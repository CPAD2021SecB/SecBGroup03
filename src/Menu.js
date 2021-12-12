import React, {Component} from 'react';
import { Text, FlatList, Animated, TouchableOpacity , View , Dimensions , Image } from 'react-native';
import { withCollapsibleForTabChild } from 'react-navigation-collapsible';

const screenWidth = Math.round(Dimensions.get('window').width);


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class Menu extends Component{
  /* static navigationOptions = {
    title: 'Child 1',
    
  }; */

  constructor(props){
    super(props);
    const { name , image , menu } = this.props.navigation.getParam('outlet');

    const data = Object.keys(menu);
    const menuarray = []
    for(let i = 0 ; i < data.length ; i++){
      var a = data[i]
      menuarray.push(menu[a]);
    }

    this.state = {
      data: menuarray
    }
  }

  renderItem = ({item}) => (
    <View style={{width: screenWidth, height: 80, borderBottomColor: '#0002', borderBottomWidth: 0.5, paddingHorizontal: 5,flexDirection: 'row'}}>
    <View style={{ alignItems: 'center', justifyContent: 'center'}}> 
    <Image source = {{uri : item.type}} style={{height: 30, width: 30, margin: 10}}/>
    </View>
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 18, paddingBottom: 5}}>{item.dish}</Text>
    <Text style={{fontSize: 15, alignSelf: 'flex-start'}}>₹ {item.price}</Text>
    </View>
    </View>
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

export default withCollapsibleForTabChild(Menu);

