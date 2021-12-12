import React, {Component} from 'react';
import { View , Text , Image , Linking , TouchableOpacity , Dimensions } from 'react-native';
import mail from './Logo/mail.png';
import callbutton from './Logo/callbutton.png';
import whatsapp from './Logo/whatsapp.png';
import Communications from 'react-native-communications';
import drawerbutton from './Logo/drawerbutton.png';
import Cards from './Cards';
import CardSection from './CardSection';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class Contact extends Component{
    render(){
        return(
            <View>
            <View style = {{flex: -1, 
                backgroundColor : '#fff', 
                paddingBottom: 10,
                borderColor :'black',
                shadowColor: '#000',
                shadowOffset: { width: 0 , height: 2},
                shadowOpacity: 0.9,
                shadowRadius: 2,
                elevation:10,
                flexDirection:'row',
                alignItems:'center',
                
                }}>
                <View style = {{alignItems:'flex-start',paddingLeft:10,justifyContent:'center',paddingTop:10}}>
                <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()}>
                <Image source ={drawerbutton} style = {{alignItems:'flex-start'}}/>
                </TouchableOpacity>
                </View>
                <View style = {{justifyContent:'center',alignItems:'center',paddingLeft:90,}}>
                <Text style = {styles.textStyle}>Contact Us</Text>
                </View>
            </View>
            <View>
                    <Image style = {{width:screenWidth , height:300,}} source={{uri:'https://i.imgur.com/mskdXvq.jpg'}}/>
            </View>
            <Text style = {{fontSize:20,fontFamily:'400',color:'black',paddingLeft:10}}>For Any Queries:</Text>
            <View style = {{padding:10,justifyContent:'space-around',paddingTop:30}}>
                <View style = {{height:100,flexDirection:'row'}}>
                <TouchableOpacity onPress = {()=> Communications.phonecall('8603712820',true)}>
                    <Image source = {callbutton} style ={{height : 40, width: 40}}/>
                </TouchableOpacity>
                <Text style={{alignItems:'center',fontSize:20,paddingLeft:40,fontWeight:'400'}}>Call Us</Text>
                </View>
                <View style = {{height:100,flexDirection:'row'}}>
                <TouchableOpacity onPress = {()=> Communications.email(['harsh.mayank40@gmail.com'],null,null,null,'ISSUE')}>
                    <Image source = {mail} style ={{height : 45, width: 45}}/>
                </TouchableOpacity>
                <Text style={{alignItems:'center',fontSize:20,paddingLeft:40,fontWeight:'400'}}>Write to us</Text>
                </View>
                <View style = {{height:130,flexDirection:'row'}}>
                <TouchableOpacity onPress = {()=> Linking.openURL('whatsapp://send?text=&phone=919163228734')}>
                    <Image source = {whatsapp} style ={{height : 45, width: 45}}/>
                </TouchableOpacity>
                <Text style={{alignItems:'center',fontSize:20,paddingLeft:40,fontWeight:'400'}}>WhatsApp Us</Text>
                </View>
            </View>
            </View>
        );
    }
}

const styles = {
    textStyle : {
        alignSelf : 'center',
        fontSize : 20,
        paddingTop : 10,
        color:'black',

    },
};

export default Contact;