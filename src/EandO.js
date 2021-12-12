import React,{Component} from 'react';
import { View , Text , Image , TouchableOpacity , ScrollView } from 'react-native';
import firebase from 'firebase';
import Logo from './Logo/eventsandoffers.png';
import corporatenight from './Logo/corporatenight.jpg';
import foodfestival from './Logo/foodfestival.jpg';
import ladiesnight from './Logo/ladiesnight.jpg';
import livemusic from './Logo/livemusic.jpg'
import livescreening from './Logo/livescreening.jpg';
import sportsscreening from './Logo/sportsscreening.jpg';



class EandO extends Component{
    state={
        corporatenight:[],
        foodfestival:[],
        ladiesnight:[],
        livemusic:[],
        livescreening:[],
        sportsscreening:[],
        text:[],
        events:[],
    }
    componentWillMount(){
        firebase.database().ref('outlets/').on('value',(data)=>{
            const text = []
            const corporatenight = []
            const foodfestival=[]
            const ladiesnight=[]
            const livescreening=[]
            const livemusic=[]
            const sportsscreening=[]
            const events=[] 
            data.forEach((item)=>{text.push(item.toJSON())})
            text.forEach((item)=>{
                a=Object.keys(item.events)
                a.forEach((list)=>{
                    events.push(item.events[list])
                })
            })
            events.forEach((item)=>{
                if(item.category.includes('Ladies Night')){
                    ladiesnight.push(item)
                }
                if(item.category.includes('Live Screening')){
                    livescreening.push(item)
                }
                if(item.category.includes('Live Music')){
                    livemusic.push(item)
                }
                if(item.category.includes('Corporate Night')){
                    corporatenight.push(item)
                }
                if(item.category.includes('Sports Screening')){
                    sportsscreening.push(item)
                }
                if(item.category.includes('Food Festival')){
                    foodfestival.push(item)
                }
                
            })
            this.setState({
                livemusic:livemusic,
                livescreening:livescreening,
                foodfestival:foodfestival,
                corporatenight:corporatenight,
                ladiesnight:ladiesnight,
                sportsscreening:sportsscreening,
            })

            })

        }
    static navigationOptions = {
        tabBarIcon : () => (
            <Image source = {Logo} style = {{ height : 30 , width : 30 }}/>
        )
    }
    render(){
        const { textStyle , headerStyle , imageStyle , imageTextStyle , touchableStyle } = styles;
        return(
            <ScrollView>
                <View style = {{flexDirection: 'row',margin:5,marginTop:15,}}>
                        <TouchableOpacity style={touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.corporatenight,type:'events'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {corporatenight}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Corporate Night</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.foodfestival,type:'events'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {foodfestival}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Food Festival</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0,}}>
                        <TouchableOpacity style={touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.ladiesnight,type:'events'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {ladiesnight}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Ladies Night</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.livemusic,type:'events'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {livemusic}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Live Music</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row',margin:5,marginTop:0,}}>
                        <TouchableOpacity style={touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.livescreening,type:'events'})}>
                            <View style ={{position:'absolute'}}>
                                <Image style = {imageStyle} source = {livescreening}/>
                            </View>
                            <View>
                                <Text style={imageTextStyle}>Live Screening</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={touchableStyle} onPress = {()=>this.props.navigation.navigate('screen10',{list:this.state.sportsscreening,type:'events'})}>
                            <View style = {{position:'absolute'}}>
                                <Image style ={imageStyle} source = {sportsscreening}/>
                            </View>
                            <View>
                            <Text style={imageTextStyle}>Sports Screening</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        );
    }
}

const style = {
    textStyle : {
        alignSelf : 'center',
        fontSize : 20,
        paddingTop : 10,
        color: 'black',

    },
    headerStyle :{
        flex: -1, 
        backgroundColor : '#fff', 
        paddingBottom: 10,
        borderColor :'black',
        shadowColor: '#000',
        shadowOffset: { width: 0 , height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 2,

    },
};

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

console.disableYellowBox = true;

export default EandO;