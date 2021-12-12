import React,{Component} from 'react';
import { Text , View , Image  , TouchableOpacity } from 'react-native';
import Logo from './Logo/account.png';
import account from './Logo/account.png';
import drawerbutton from './Logo/drawerbutton.png';
import firebase from 'firebase';



class Account extends Component{
    state = {
        email: '',
        phone: '',
        fname: '',
        lname: '',
        image: '',
    }
    componentWillMount(){
        uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + uid).on('value',(data) => {
            const user = data.toJSON()
            this.setState({
                fname: user.fname,
                lname: user.lname,
                phone: user.phone,
                image: user.image,
                email: user.email,
            })
        })
    }
    static navigationOptions = {
        tabBarIcon : () => (
            <Image source = {Logo} style = {{ height : 30 , width : 30}}/>
        )
    }
    render(){
        const {textStyle} = styles;
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
                elevation: 10,
                marginBottom: 10,
                flexDirection:'row',
                alignItems:'center',
                }}>
                <View style = {{alignItems:'flex-start',paddingLeft:10,justifyContent:'center',paddingTop:10}}>
                <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()}>
                <Image source ={drawerbutton} style = {{alignItems:'flex-start'}}/>
                </TouchableOpacity>
                </View>
                <View style = {{justifyContent:'center',alignItems:'center',paddingLeft:90,}}>
                <Text style = {textStyle}>Account</Text>
                </View>
            </View>
            <View>
            <Image source = {{uri:this.state.image}} style = {{height:250,
                width:250,
                margin:5,
                alignSelf:'center',
                borderColor:'black',
                borderWidth:1,
                borderRadius:200}}/>
            </View>
            <View style = {{justifyContent:'center',alignItems:'center',padding:10}}>
                <TouchableOpacity>
                <Text style ={{fontSize : 15,fontWeight:'400',}}>Edit</Text>
                </TouchableOpacity>
                <Text style ={{padding:20,fontSize:25,fontWeight:'500',color : 'black'}}>{this.state.fname} {this.state.lname}</Text>
                <Text style= {{fontSize : 15 , color: 'black'}}>Mobile Number : {this.state.phone}</Text>
                <Text style = {{padding :10 , fontSize:15,color: 'black'}}>Email Id : {this.state.email}</Text>
                <TouchableOpacity onPress = {()=>firebase.auth().signOut()}>
                <Text style ={{fontSize : 15,fontWeight:'400',}}>Log Out</Text>
                </TouchableOpacity>
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


export default Account;