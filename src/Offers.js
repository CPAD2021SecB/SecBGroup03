import React, {Component} from 'react';
import { Text , View , Image , TouchableOpacity , ScrollView } from 'react-native';
import firebase from 'firebase';
import foodoffer from './Logo/foodoffer.jpg';
import drinksoffer from './Logo/drinksoffer.jpg';
import pocketfriendly from './Logo/pocketfriendly.jpg';
import supersaver from './Logo/supersaver.jpg';
import happyhour from './Logo/happyhour.jpg'

class Offers extends Component{
    state = {
        foodoffer:[],
        drinksoffer:[],
        pocketfriendly:[],
        supersaver:[],
        happyhour:[],
        text:[],
    }
    componentWillMount(){
        firebase.database().ref('outlets/').on('value',(data)=>{
            const foodoffer=[]
            const drinksoffer=[]
            const pocketfriendly=[]
            const supersaver=[]
            const happyhour=[]
            const text=[]
            data.forEach((item)=>{text.push(item.toJSON())})
            text.forEach((item)=>{
                if(item.offer.includes('1:1 Food')){
                    foodoffer.push(item)
                }
                if(item.offer.includes('2:2 Drinks')){
                    drinksoffer.push(item)
                }
                if(item.offer.includes('Pocket Friendly')){
                    pocketfriendly.push(item)
                }
                if(item.offer.includes('Super Value')){
                    supersaver.push(item)
                }
                if(item.offer.includes('Happy Hours')){
                    happyhour.push(item)
                }
            })
            this.setState({
                foodoffer:foodoffer,
                drinksoffer:drinksoffer,
                supersaver:supersaver,
                pocketfriendly:pocketfriendly,
                happyhour:happyhour,
            })
        })
    }
    render(){
        return(
            <View>
                <View style = {{flexDirection: 'row',margin:5,marginTop:15,}}>
                        <TouchableOpacity style={styles.touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.foodoffer,type:'explore',
                        initial: 'screen13', first: 'screen14', second: 'screen15', third: 'screen17'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {styles.imageStyle} source = {foodoffer}/>
                            </View>
                            <View>
                                <Text style={styles.imageTextStyle}> 1:1 Food </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.drinksoffer,type:'explore',
                        initial: 'screen13', first: 'screen14', second: 'screen15', third: 'screen17'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={styles.imageStyle} source = {drinksoffer}/>
                            </View>
                            <View>
                            <Text style={styles.imageTextStyle}>2:2 Drinks</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0,}}>
                        <TouchableOpacity style={styles.touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.pocketfriendly,type:'explore',
                        initial: 'screen13', first: 'screen14', second: 'screen15', third: 'screen17'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {styles.imageStyle} source = {pocketfriendly}/>
                            </View>
                            <View>
                                <Text style={styles.imageTextStyle}>Pocket Friendly</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableStyle} onPress={()=>this.props.navigation.navigate('screen10',{list:this.state.supersaver,type:'explore',
                        initial: 'screen13', first: 'screen14', second: 'screen15', third: 'screen17'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={styles.imageStyle} source = {supersaver}/>
                            </View>
                            <View>
                            <Text style={styles.imageTextStyle}>Super Value</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0,}}>
                        <TouchableOpacity style={styles.touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.happyhour,type:'explore',
                        initial: 'screen13', first: 'screen14', second: 'screen15', third: 'screen17'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {styles.imageStyle} source = {happyhour}/>
                            </View>
                            <View>
                                <Text style={styles.imageTextStyle}>Happy Hours</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.touchableStyle}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={styles.imageStyle} source = {supersaver}/>
                            </View>
                            <View>
                            <Text style={styles.imageTextStyle}>Super Value</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
            </View>

        );
    }
}

const styles = {
    imageTextStyle: {
        color:'#fff',
        fontSize:20,
        textAlign:'center'
    },
    imageStyle: {
        height: 100,
        width: 165,
        margin: 4,
        flex: 1,
        opacity: 0.5,
        backgroundColor:'black',
        marginTop:0,
    },
    touchableStyle: {
        height:100,
        width:165,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        marginTop:0,
        backgroundColor:'black',

    },
};

export default Offers;
