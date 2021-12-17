import React, {Component} from 'react';
import { Text , View , Image , TouchableOpacity , ScrollView , StatusBar } from 'react-native';
import Logo from './Logo/nearme.png';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import OutletCard from './OutletCard';


let _navigator;

function setTopLevelNavigator(navigatorRef){
    _navigator = navigatorRef;
}

function navigate(routeName, params){
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName, 
            params
        })
    );
}

class NearMe extends Component{
    state = {
        outlets:[]
    };
    componentWillMount(){
        if(!firebase.apps.length){
        var firebaseConfig = {
            apiKey: "AIzaSyC4wbk8ndm8aqNFRMoriSPwXu04I0yqojs",
            authDomain: "foodzilla-9d7c2.firebaseapp.com",
            databaseURL: "https://foodzilla-9d7c2.firebaseio.com",
            projectId: "foodzilla-9d7c2",
            storageBucket: "foodzilla-9d7c2.appspot.com",
            messagingSenderId: "140164895707",
            appId: "1:140164895707:web:3cbdb53338de8d03"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        }


          firebase.database().ref('outlets/').on('value',(data)=>{
              const text = []
              data.forEach((item)=>{text.push(item.toJSON())})
              this.setState({outlets:text})
          })
    }
    static navigationOptions = {
        tabBarIcon: () => (
            <Image source = {Logo} style = {{ height : 30 , width : 30 }}/>
        )
    }

    renderOutletList(){
        return this.state.outlets.map(
            outlet => <OutletCard key = {outlet.name} outlet = {outlet} navigation = {this.props.navigation}
            initial = {'screen2'} first = {'screen6'} second={'screen7'} third={'screen11'} /> 
        );
    }



    render(){

        
        const { headerStyle , textStyle , imageStyle } = styles;
        return(
            <View style = {{flex:1}}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
                <View style = {headerStyle}>
                    <Text style ={textStyle}>Restaurants Near Me</Text>
                </View>
                <ScrollView>
                    {this.renderOutletList()}
                
                
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    headerStyle : {border:2,
        height:50,
        backgroundColor :'#fff',
        borderColor :'black',
        shadowColor: '#000',
        shadowOffset: { width: 0 , height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10

    },
    textStyle : {
        fontSize : 20,
        color: 'black'
    },
    imageStyle :{
        height: 60,
        width: 80,
        margin: 5
    },
    
};







export default NearMe;

export { navigate , setTopLevelNavigator };


