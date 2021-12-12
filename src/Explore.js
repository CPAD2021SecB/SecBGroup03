import React,{Component} from 'react';
import firebase from 'firebase';
import { Text , View , Image , TouchableOpacity , ScrollView  } from 'react-native';
import Logo from './Logo/explore.png';
import bakery from './Logo/bakery.jpg';
import bar from './Logo/bar.jpg';
import brunch from './Logo/brunch.jpg';
import buffet from './Logo/buffet.jpg';
import cafe from './Logo/cafe.jpeg';
import casualdining from './Logo/casualdining.jpg';
import dessert from './Logo/dessert.jpg';
import dhaba from './Logo/dhaba.jpg';
import fastfood from './Logo/fastfood.jpg';
import finedining from './Logo/finedining.jpg';
import lounge from './Logo/lounge.jpg';
import nightlife from './Logo/nightlife.jpg';
import rooftop from './Logo/rooftop.jpg';
import vegan from './Logo/vegan.jpg';


class Explore extends Component{
    state = {
        bakery : [],
        bar : [],
        brunch : [],
        buffet : [] ,
        cafe : [],
        casualdining : [],
        dessert : [],
        dhaba : [],
        fastfood : [],
        finedining : [],
        lounge : [],
        nightlife : [],
        rooftop : [],
        vegan : [],
        text : [],
    }
    componentWillMount(){
        firebase.database().ref('outlets/').on('value',(data)=>{
            const bakery = []
            const bar = []
            const brunch = []
            const buffet = [] 
            const cafe = []
            const casualdining = []
            const dessert = []
            const dhaba = []
            const fastfood = []
            const finedining = []
            const lounge = []
            const nightlife = []
            const rooftop = []
            const vegan = []
            const text = []
            data.forEach((item)=>{text.push(item.toJSON())})
            text.forEach((item)=>{
                if(item.category.includes('Bakery')){
                    bakery.push(item)
                }
                if(item.category.includes('Bar')){
                    bar.push(item)
                }
                if(item.category.includes('Brunch')){
                    brunch.push(item)
                }
                if(item.category.includes('Buffet')){
                    buffet.push(item)
                }
                if(item.category.includes('Cafe')){
                    cafe.push(item)
                }
                if(item.category.includes('Casual Dining')){
                    casualdining.push(item)
                }
                if(item.category.includes('Dessert')){
                    dessert.push(item)
                }
                if(item.category.includes('Dhaba')){
                    dhaba.push(item)
                }
                if(item.category.includes('Fast Food')){
                    fastfood.push(item)
                }
                if(item.category.includes('Fine Dining')){
                    finedining.push(item)
                }
                if(item.category.includes('Lounge')){
                    lounge.push(item)
                }
                if(item.category.includes('Night Life')){
                    nightlife.push(item)
                }
                if(item.category.includes('Roof Top')){
                    rooftop.push(item)
                }
                if(item.category.includes('Vegan')){
                    vegan.push(item)
                }
                
            })
            this.setState({
                bakery:bakery,
                bar:bar,
                brunch:brunch,
                buffet:buffet,
                cafe:cafe,
                casualdining:casualdining,
                dessert:dessert,
                dhaba:dhaba,
                fastfood:fastfood,
                finedining:finedining,
                lounge:lounge,
                nightlife:nightlife,
                rooftop:rooftop,
                vegan:vegan,

            })

        })

    }
    static navigationOptions = {
        tabBarIcon: () => (
            <Image source = {Logo} style = {{height : 30 , width : 30}}/>
        )
    } 
    render(){
        const {textStyle, imageStyle , touchableStyle , imageTextStyle }= styles;
        return(
            <View style = {{flex:1}}>
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
                    }}>
                    <Text style = {textStyle}>Explore</Text>
                </View>
                <ScrollView>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0}}>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.bakery,
                        type:'explore', initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22' })}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {bakery}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Bakery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.bar,type:'explore'
                        , initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {bar}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Bar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0}}>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.brunch,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {brunch}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Brunch</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.buffet,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {buffet}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Buffet</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0}}>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.cafe,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {cafe}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Cafe</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.casualdining,type:'explore', 
                        initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {casualdining}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Casual Dining</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0}}>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.dessert,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {dessert}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Dessert</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.dhaba,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {dhaba}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Dhaba</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0}}>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.fastfood,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {fastfood}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Fast Food</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.finedining,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {finedining}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Fine Dining</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0}}>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.lounge,type:'explore', 
                        initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {lounge}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Lounge</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.nightlife,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {nightlife}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Night Life</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0}}>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.rooftop,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {rooftop}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Roof Top</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} 
                        onPress = {()=>this.props.navigation.navigate('screen2',{list:this.state.vegan,type:'explore',
                         initial: 'screen19', first: 'screen20', second: 'screen21', third: 'screen22'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {vegan}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Vegan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
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
        color: 'black'

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
    imageTextStyle: {
        color:'#fff',
        fontSize:20,
        textAlign:'center'
    },
};

export default Explore;