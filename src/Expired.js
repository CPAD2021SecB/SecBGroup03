import React, {Component} from 'react';
import { View , Text , Image , ScrollView , TouchableOpacity } from 'react-native';
import Cards from './Cards';
import CardSection from './CardSection';
import jaihind from './Logo/jaihind.jpg';
import drawerbutton from './Logo/drawerbutton.png';

class Expired extends Component{
    render(){
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
                <Text style = {styles.textStyle}>Contact Us</Text>
                </View>
            </View>
            <View>
            <ScrollView>
            <Cards>
                <CardSection>
                    <Image style = {styles.imageStyle} source = {jaihind} />
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: 5
                    }}>
                        <Text style = {{fontSize:20,
                            color:'black',
                            fontWeight:'bold'
                            }}>Jai Hind</Text>
                        <Text style = {{color :'green'}}>Points Earned: XXX.XX</Text>
                        <Text style ={{color : 'red'}}>Points Redeemed : XXX.XX</Text>
                    </View>
                </CardSection>
            </Cards>
            </ScrollView>
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
    imageStyle :{
        height: 60,
        width: 80,
        margin: 5
    },
};

export default Expired;
