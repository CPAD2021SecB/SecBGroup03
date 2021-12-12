import React, {Component} from 'react'
import {View, Text, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native'
import {withNavigation} from 'react-navigation'
import AddressCard from './Outletaddress'


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const modalHeight = screenHeight/2;

class ModalComponent extends Component{
    constructor(props){
        super(props)
        addressList = this.props.outlet.address
        keys = Object.keys(addressList)
        address = []
        keys.forEach((item) => {
            address.push(addressList[item])
        })
        this.state= {
            addresses : address
        }
    }

    renderOutletList(){
        return this.state.addresses.map(
            address => <AddressCard key = {address.location} address = {address} navigation = {this.props.navigation}
            initial = {this.props.initial} first = {this.props.first} second={this.props.second} 
            third={this.props.third} outlet={this.props.outlet} onClose={this.props.onClose}/> 
        );
    }
    render(){
        return(
            <View>
                <Text style = {{fontSize: 15, fontWeight: 'bold', color: 'black', paddingLeft: 5}}>
                    Select Outlet
                </Text>
                <View style={{borderBottomColor: '#0002', borderBottomWidth: 0.5, paddingTop: 5}}/>
                <ScrollView>
                    {this.renderOutletList()}
                </ScrollView>
            </View>
        );
    }
}

console.disableYellowBox = true

export default withNavigation(ModalComponent)
