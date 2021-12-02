import { View, Text, Image, Button, TouchableOpacity} from 'react-native';
import React , {Component} from 'react';
import Logo from './logo/account.png';
import Card from './Card'
import CardSection from './CardSection'
import DrawerIcon from './logo/drawerMenu.png'
import firebase from 'firebase'



class Account extends Component {
    constructor(props){
        super(props)
        this.state={
            fname: '',
            lname: '',
            email: '',
            phone: '',
            image: ''
        }
    }

    componentWillMount(){
        const uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + uid).on('value', (data) => {
            const user = data.toJSON()
            this.setState({
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                phone: user.phone,
                image: user.image
            })
        })
    }

    onLogout(){
        firebase.auth().signOut()
            .then(() => console.log('LOGGED OUT'))
    }

    static navigationOptions={
        headerLeft: ({navigation}) => (
            <TouchableOpacity onPress={this.props.navigation.openDrawer()} >
                <Image source={DrawerIcon} style={{height:25, width:25, marginLeft:10}} />
            </TouchableOpacity>
        )
    }

    render(){

        return(
            <View>
                <View style={style.headerStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                        <Image source={DrawerIcon} style={{height:25, width:25, marginLeft:10}} />
                    </TouchableOpacity>
                    <Text style={style.headerText}>
                        Account
                    </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
                    <Image
                        source = {{uri : this.state.image}}
                        style={{height: 250, width:250, margin: 5, borderRadius:200, borderWidth: 1, borderColor: 'black'}}
                    />
                    <TouchableOpacity >
                        <Text style={{fontSize: 15, color: 'black', fontWeight: '300'}}>
                            Change Display Picture
                        </Text>
                    </TouchableOpacity>

                    <Text style={{fontSize: 30, color: 'black', fontWeight: '300', marginTop: 30}}>
                        {this.state.fname} {this.state.lname}
                    </Text>
                    <Text style={{fontSize: 15, color: 'black', fontWeight: '300', marginTop: 10}}>
                        {this.state.phone}
                    </Text>
                    <Text style={{fontSize: 15, color: 'black', fontWeight: '300', marginTop: 10}}>
                        {this.state.email}
                    </Text>
                    <TouchableOpacity style={style.proceedStyle} onPress={() => this.onLogout()}>
                        <Text style={style.proceedTextStyle}>
                            LOG OUT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = {
    headerStyle:{
        borderWidth:0,
        height: 50,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#efebe9',
        flexDirection: 'row'
    },
    headerText:{
        fontSize:25,
        fontWeight: '300',
        color: 'black',
        padding: 100
    },
    proceedStyle: {
        margin: 20,
        backgroundColor: '#ff953e',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        width: 200,
        marginTop: 50
    },
    proceedTextStyle: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#480d0d'},
}

export default Account;
