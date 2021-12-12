import React,{Component} from 'react';
import { View , Text , TouchableOpacity , Image , TextInput } from 'react-native';
import firebase from 'firebase';
import Spinner from './ActivityIndicator';

export default class Login extends Component {
    state = {
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onLoginPress(){
        const {email,password}=this.state;
        this.setState({error:'',loading:true});
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));

    }
    renderLogin(){
        if(this.state.loading){
            return <Spinner size ={'large'}/>;
        }
        else{
            return(
                <View style={{alignItems :'center', justifyContent:'center',padding:50,elevation:10}}>
                <TouchableOpacity onPress = {this.onLoginPress.bind(this)}>
                <Text style = {{fontSize:20,fontWeight:'400',backgroundColor : '#ff8a50',padding :40,paddingBottom:15,paddingTop:15,borderRadius:5}}>Login</Text>
                </TouchableOpacity>
                </View>

            );
        }
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:'',

        })
    }

    onLoginFail(){
        this.setState({error:'Authentication Failed',loading:false});   
    }






    render(){
        return(
            <View style ={{marginTop:300}}>
                <View style ={{justifyContent:'center'}}>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:20 }}
                onChangeText = {(email) => this.setState({email})}
                placeholder={'Email ID'}
                />
                <TextInput
                style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:20 }}
                onChangeText = {(password) => this.setState({password})}
                placeholder={'Password'}
                />
                </View>
                <Text style = {{color:'red',alignSelf:'center',fontSize:20,paddingTop:10}}>{this.state.error}</Text>
                <View>
                {this.renderLogin()}
                </View>
            
            <View style ={{justifyContent:'center',alignItems:'center'}}>
                <Text>Not a User?</Text>
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Sign Up')}> 
                    <Text>Register Now</Text>
                </TouchableOpacity>
            </View>

            </View>
        );
    }
}