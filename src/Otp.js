import React,{Component} from 'react';
import { View , Text , TouchableOpacity , Image , TextInput } from 'react-native';

export default class Login extends Component {
    state = {
        otp:'Otp',
    }
    render(){
        return(
            <View style = {{paddingTop:250}}>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:20 }}
                onChangeText = {(text) => this.setState({otp: text})}
                placeholder={'Enter OTP'}
                keyboardType={'numeric'}/>
            <View style={{alignItems :'center', justifyContent:'center',padding:50,elevation:10}}>
              <TouchableOpacity onPress = {()=>this.props.navigation.navigate('screen4')}>
                <Text style = {{fontSize:20,fontWeight:'400',backgroundColor : '#ff8a50',padding :40,paddingBottom:15,paddingTop:15,borderRadius:5}}>Login</Text>
              </TouchableOpacity>
            </View>

            </View>
        );
    }
}