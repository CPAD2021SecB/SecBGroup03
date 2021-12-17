import React,{Component} from 'react';
import { Text , View , Image , TouchableOpacity , Linking, Animated, Dimensions  } from 'react-native';
import Cards from './Cards';
import CardSection from './CardSection';
import jaihind1 from './Logo/jaihind1.jpg';
import callbutton from './Logo/callbutton.png';
import directions from './Logo/directions.png';
import Menu from './Menu';
import Communications from 'react-native-communications';
import { createMaterialTopTabNavigator } from 'react-navigation';
import OutletEvents from './OutletEvent';
import { withCollapsibleForTab } from 'react-navigation-collapsible';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const modalHeight = screenHeight/4;


const TopTabNavigator = createMaterialTopTabNavigator(
    {
      Menu: { screen: Menu },
      Events: { screen: OutletEvents },
    },
    {
      animationEnabled: true,
      defaultNavigationOptions:{
        tabBarOptions: {
          indicatorStyle: { backgroundColor: 'red', height:3, },
          labelStyle: {color: 'black'},
          style: { borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0, 
          backgroundColor: 'transparent' },
          activeTintColor : 'black',
          inactiveTintColor : 'grey',
          labelStyle: {fontSize: 15}
        },
      },
     
    }
  );
  
class GroupImageHeader extends Component {
    outlet = this.props.navigation.getParam('outlet');
    componentDidMount(){
      this.props.navigation.getParam('close')()
    }
    render(){
        const  {image,name,events}  = this.props.navigation.state.params.outlet
        const  { contact,direction }  = this.props.navigation.state.params.address
    return (
        <View>
                <View>
                    <Image source = {{uri:image}} style = {styles.imageStyle}/> 
                </View>
                <View style = {styles.viewStyle}>
                    <TouchableOpacity 
                    onPress = {()=> Communications.phonecall(contact,true) }
                    style={{paddingRight: 15}}>
                        <Image source = {callbutton} style={styles.callbuttonStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingRight: 15}}
                    onPress = {()=> Linking.openURL(direction)}>
                        <Image source = {directions} style={{height:38,width:38,}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress = {()=> this.props.navigation.navigate(this.props.navigation.getParam('first'),
                    {outlet:this.props.navigation.getParam('outlet')})} style={{paddingRight: 15, height: 50, width: 250}}>
                        <Text style = {styles.textStyle}>Make a Reservation</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
            );
    }
  }
  
  const collapsibleParams = {
    collapsibleComponent: GroupImageHeader,
    collapsibleBackgroundStyle: {
      height: 230, 
      
    }
  }

const styles = {
    imageStyle:{
        height:175,
        width:365,
        //alignItems:'center',
    },
    viewStyle:{
        alignItems: 'flex-start', 
        height: 60,
        margin:10,
        flexDirection:'row',

    },
    textStyle:{
        color:'white',
        fontWeight:'300',
        fontSize:18,
        backgroundColor:'#9acd32',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 5,
        paddingBottom:5,
        textAlign: 'center'
    },
    callbuttonStyle:{
        height:35,
        width:35,
        
    },
}

export default withCollapsibleForTab(TopTabNavigator, collapsibleParams);
























