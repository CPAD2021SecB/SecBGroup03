import React, {Component} from 'react';
import { Text , View , Image , TouchableOpacity , ScrollView , Dimensions } from 'react-native';
import Logo from './Logo/nearme.png';
import Cards from './Cards';
import CardSection from './CardSection';
import jaihind from './Logo/jaihind.jpg';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import Overlay from 'react-native-modal-overlay'; 
import ModalComponent from './modal'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const modalHeight = screenHeight/2;


export default class OutletCard extends Component{
    constructor(props){
        super(props)
        addressList = this.props.outlet.address
        keys = Object.keys(addressList)
        address = []
        keys.forEach((item) => {
            address.push(addressList[item])
        })
        this.state= {
            modalVisible:false,
            addresses : address
        }
    }
    

    onClose = () => {
        this.setState({
            modalVisible:false,
        })
    } 

    onPress = () => {
        if (this.state.addresses.length===1){
        this.props.navigation.navigate(this.props.initial, {outlet: this.props.outlet, close: this.onClose, first: this.props.first, second: this.props.second, third: this.props.third, address: this.state.addresses[0]})
        
        }else{
        this.setState({modalVisible: true})
        }
    }
    
    render(){
        const { headerStyle , textStyle , imageStyle } = styles;
        return(
            <View>
                <Cards>
                    <TouchableOpacity 
                    onPress={() => this.onPress()}>
                    <CardSection>
                        <Image style = {imageStyle} source = {{uri:this.props.outlet.image}} />
                        <View style = {{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            paddingLeft: 5
                        }}>
                            <Text style = {{fontSize:20,
                                color:'black',
                                fontWeight:'bold'
                                }}>{this.props.outlet.name}</Text>
                            <Text>{this.props.outlet.cuisine}</Text>
                            <Text>Price for two : {this.props.outlet.price}</Text>
                        </View>
                    </CardSection>
                    </TouchableOpacity>
                </Cards>
                <Overlay visible={this.state.modalVisible} closeOnTouchOutside onClose={this.onClose}
                childrenWrapperStyle = {{backgroundColor: 'white', height: modalHeight, width: screenWidth-40,
                marginTop: modalHeight, }}
                animationType={'slideInUp'}
                easing={'fast'}>
                    <ModalComponent navigation={this.props.navigaton} outlet = {this.props.outlet} 
                    onClose={this.onClose} initial={this.props.initial} 
                    first={this.props.first} second={this.props.second} third={this.props.third} />
                </Overlay>
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
