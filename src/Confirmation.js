import React, {Component} from 'react';
import firebase from 'firebase';
import { View , Text , TextInput , TouchableOpacity } from 'react-native';
import RadioButton from './RadioButton';
import DateTime from './DateTime';






class Confirmation extends Component{
    constructor(props){
        super(props)
        this.state = {
        self:'',
        firstname:'',
        lastname:'',
        numberofindividuals:'',
        date:'',
        lastkey:null,

    }
}   
    outlet = this.props.navigation.getParam('outlet')
    
    componentWillMount(){
        uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + uid + '/upcomingbooking/').on('value',(data)=>{
            const text = []
            data.forEach((item)=>{text.push(item.toJSON())})
            lastkey = text.length + 1
            this.setState({
                lastkey:lastkey
            })

            })
    }
    makeBooking(){
        uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + uid + '/upcomingbooking/' + this.state.lastkey).update({
            bookingName:this.state.firstname + ' ' + this.state.lastname,
            date:this.state.date,
            time:'',
            eventName:'',
            outlet:this.outlet.name,
            image:this.outlet.image,
            numberofindividuals:this.state.numberofindividuals,
        })
        this.setState({
            numberofindividuals:'',
            firstname:'',
            lastname:'',
            date:'',
        })

    }
    radio = [
        {label:'Self               ',value:'self'},
        {label:'Guest',value:'guest'}
    ]
    render(){
        
        return(
            <View>
                <View style = {{padding : 10,}}>
                    <RadioButton radioProps = {this.radio} value = {this.state.self} formHorizontal={true} initial={0}/>
                </View>
                <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:20 }}
                    onChangeText={(text) => this.setState({firstname: text})}
                    placeholder={'First Name'}/>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:20 }}
                    onChangeText = {(text) => this.setState({lastname: text})}
                    placeholder={'Last Name'}/>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginLeft:40,marginRight:40 , marginTop:20 }}
                onChangeText = {(text) => this.setState({numberofindividuals: text})}
                placeholder={'Number of Individuals'}
                keyboardType={'numeric'}/>
                <DateTime />
                <View style={{alignItems :'center', justifyContent:'center',padding:50,elevation:10}}>
                    <TouchableOpacity onPress={()=>this.makeBooking()}>
                    <Text style = {{fontSize:20,fontWeight:'400',backgroundColor : '#ff8a50',padding :40,paddingBottom:15,paddingTop:15,borderRadius:5}}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}
export default Confirmation;