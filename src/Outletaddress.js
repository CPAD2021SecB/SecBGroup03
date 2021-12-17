import React,{Component} from 'react';
import { Text , View , Image , TouchableOpacity } from 'react-native';

class Outletaddress extends Component{
    onNavigate(){
        this.props.navigation.navigate(this.props.initial, 
            {outlet: this.props.outlet, close: this.props.onClose,
        first: this.props.first, second: this.props.second, third: this.props.third, 
        address: this.props.address})
    }
    render(){
        return(
        <View>
            
                    <TouchableOpacity style={{padding: 10, width: 300, justifyContent: 'flex-start'}}
                    onPress={() => this.onNavigate()}>
                    
                       
                        <View style = {{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            paddingLeft: 0
                        }}>
                            <Text style = {{fontSize:20,
                                color:'black',
                                fontWeight:'bold'}}>
                                    {this.props.address.locality}
                                    </Text>
                            <Text>{this.props.address.line1} </Text>
                            <Text>{this.props.address.line2}</Text>
                        </View>
                    
                    </TouchableOpacity>
               
           
        </View>
        );
    }
}

const styles = {
    imageStyle :{
        height: 60,
        width: 80,
        margin: 5,
}};

export default Outletaddress;