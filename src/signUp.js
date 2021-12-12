import React, {Component} from 'react';
import firebase from 'firebase';
import { View , Text , TextInput , TouchableOpacity , ScrollView} from 'react-native';
import RadioButton from './RadioButton';
import DateTime from './DateTime';
import Spinner from './ActivityIndicator';



export default class SignUp extends Component{
    state = {
        firstname:'',
        lastname :'',
        gender:'',
        dateofbirth :'',
        mobilenumber : '',
        email : '',
        password1:'',
        password2:'',
        error:'',
        loading:false,
    }

    onProceedPress(){
        const {email,password1,password2} = this.state
        this.setState({error:'',loading:true});
        if(password1===password2){
        firebase.auth().createUserWithEmailAndPassword(email,password1)
            .then(()=>{
                uid = firebase.auth().currentUser.uid
                firebase.database().ref('users/' + uid).set({
                    email: this.state.email,
                    phone: this.state.mobilenumber,
                    fname: this.state.firstname,
                    lname: this.state.lastname,
                    gender: this.state.gender,
                    dob: this.state.dateofbirth,
                    image: 'https://i.imgur.com/ZTr4GVJ.jpg',
                    points: 0,
                    upcomingbooking:'',
                    expiredbooking:'',

                })
            })
            .catch((error)=>{
                this.setState({ loading: false, error: error.message });
            });
        }
        else{
            this.setState({error:'Password do not match',loading:false})
        }
    }


    onLoginSuccess(){
        this.setState({
            email:'',
            password1:'',
            password2:'',
            loading:false,
            error:'',

        })
    }

    onLoading(){
        if(this.state.loading===false){
            return(
                <Text style = {{fontSize:20,fontWeight:'400',backgroundColor : '#ff8a50',padding :40,paddingBottom:15,paddingTop:15,borderRadius:5}}>Sign Up</Text>
            );
        }
        else{
            return <Spinner size={'large'}/>
        }
    }





    radio = [
        {label:'Male',value:'Male'},
        {label:'Female',value:'Female'},
        {label:'Rather Not Tell',value:'Rather Not Tell'}
    ]
    render(){
        return(
            <ScrollView>
                <View>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:10 }}
                        onChangeText={(text) => this.setState({firstname: text})}
                        placeholder={'First Name'}/>
                    <TextInput
                    style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:10 }}
                    onChangeText={(text) => this.setState({lastname: text})}
                    placeholder={'Last Name'}/>
                    <View style ={{padding:30}}>
                        <RadioButton radioProps = {this.radio} value = {this.state.gender} initial ={-1}/>
                    </View>
                    <DateTime/>
                    <View>
                        <TextInput
                        style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:10 }}
                        onChangeText={(text) => this.setState({mobilenumber: text})}
                        placeholder={'Mobile Number'}
                        keyboardType={'numeric'}/>
                        <TextInput
                        style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:10 }}
                        onChangeText={(text) => this.setState({email: text})}
                        placeholder={'Email Id'}/>
                        <TextInput
                        style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:10 }}
                        onChangeText={(text) => this.setState({password1: text})}
                        placeholder={'Password'}/>
                        <TextInput
                        style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:10 }}
                        onChangeText={(text) => this.setState({password2: text})}
                        placeholder={'Confirm Password'}/>
                        <Text style={{fontSize:20,color:'red',alignSelf:'center'}}>{this.state.error}</Text>
                    <View style={{alignItems :'center', justifyContent:'center',padding:50,elevation:10}}>
                        <TouchableOpacity onPress = {this.onProceedPress.bind(this)}>
                            {this.onLoading()}
                        </TouchableOpacity>
                    </View> 

                    </View>

                </View>
            </ScrollView>
        );
    }
}

