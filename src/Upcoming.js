import React, {Component} from 'react';
import { View , Text , Image , ScrollView , TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import Cards from './Cards';
import CardSection from './CardSection';
import jaihind from './Logo/jaihind.jpg';
import drawerbutton from './Logo/drawerbutton.png';
import OutletCard from './ExploreCard';
import BookingCard from './BookingCard';

class Upcoming extends Component{
    constructor(props){
        super(props)
    
    this.state = {
        bookingname:'',
        date:'',
        eventname:'',
        image:'',
        outlet:'',
    }
}
    componentWillMount(){
        uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + uid + '/upcomingbooking/').on('value',(data)=>{
            const text = []
            data.forEach((item)=>{text.push(item.toJSON())})
            this.setState({outlet:text})
        })    

    }
    renderOutlet(){
        return this.state.outlet.map(
            outlet => <BookingCard key = {outlet.name} outlet =  {outlet} navigation= {this.props.navigation}/>
        )
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style = {{
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
                    }}
                    >
                    <View style = {{alignItems:'flex-start',paddingLeft:10,justifyContent:'center',paddingTop:10}}>
                        <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()}>
                            <Image source ={drawerbutton} style = {{alignItems:'flex-start'}}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {{justifyContent:'center',alignItems:'center',paddingLeft:60,alignSelf:'center'}}>
                        <Text style = {styles.textStyle}>Upcoming Bookings</Text>
                    </View>
                </View>
                <ScrollView>
                    {this.renderOutlet()}
                </ScrollView>
                
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
    imageStyle :{
        height: 60,
        width: 80,
        margin: 5
    },
};
export default Upcoming;