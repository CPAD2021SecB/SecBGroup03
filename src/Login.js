import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, StatusBar} from 'react-native'
import firebase from 'firebase'
import Spinner from './spinner'

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }

    onProceed() {
        this.setState({loading: true, error: ''})
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.clearForm()

            })
            .catch((error) => {
                this.setState({error: error.message})
                this.clearForm()
            });

    }

    onLoading() {
        if (this.state.loading === false) {
            return (
                <Text style={{padding: 15, fontSize: 20, fontWeight: 'bold', color: '#480d0d'}}>
                    LOG IN
                </Text>
            );
        } else {
            this.clearForm()
            return (
                <Spinner/>
            );
        }

    }

    clearForm() {
        this.setState({
            password: '',
            loading: false
        })
    }


    render() {
        return (
            <View style={style.viewStyle}
            >
                <StatusBar backgroundColor='#b86a28'/>
                <Image source={{uri: 'https://imgur.com/10TsiRn.jpg'}} style={style.logoStyle}/>

                <TextInput
                    style={style.inputStyle}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.phone}
                    keyboardType={'email-address'}
                    placeholder={'Email Address'}/>

                <TextInput
                    style={{height: 40, borderColor: '#0002', borderBottomWidth: 1, margin: 15}}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    placeholder={'Enter Password'}
                    secureTextEntry={true}
                />

                <Text style={{color: 'red', margin: 0, fontSize: 15, alignSelf: 'center'}}>
                    {this.state.error}
                </Text>

                <TouchableOpacity style={{
                    margin: 20,
                    backgroundColor: '#ff953e',
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 20,
                    height: 60
                }}
                                  onPress={() => this.onProceed()}>
                    {this.onLoading()}
                </TouchableOpacity>

                <TouchableOpacity style={style.registerStyle}
                                  onPress={() => this.props.navigation.navigate('screen11')}>
                    <Text style={style.registerTextStyle}>
                        Not a User?
                        Register Now
                    </Text>
                </TouchableOpacity>


            </View>
        );
    }
}

const style = {
    viewStyle: {marginTop: 100},
    logoStyle: {
        height: 200,
        width: 200,
        marginBottom: 60,
        marginLeft: 90
    },
    inputStyle: {
        height: 40,
        borderColor: '#0002',
        borderBottomWidth: 1,
        margin: 20
    },
    proceedStyle: {
        margin: 20,
        backgroundColor: '#ff8a65',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        width: 200,
        marginLeft: 80
    },
    proceedTextStyle: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    registerStyle: {
        width: 150,
        marginLeft: 130,
        marginTop: 20
    },
    registerTextStyle: {
        fontSize: 18,
        alignSelf: 'center'
    }
}