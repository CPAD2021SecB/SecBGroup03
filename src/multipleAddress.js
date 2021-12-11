import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import DrawerIcon from './logo/drawerMenu.png';
import Card from './Card';
import CardSection from './CardSection';
import Logo from './logo/nearme.png';
import JaiHind from './logo/JaiHind.jpg';

class OutletAddress extends Component {


    render() {
        return (
            <View>
                <TouchableOpacity style={{padding: 5}}
                                  onPress={() => this.props.navigation.navigate('screen8')}>
                    <Card>
                        <CardSection>
                            {/* <Image
                            source = {JaiHind} // source ={outlet.image}
                            style={{height: 60, width:80, margin: 5}}
                        /> */}
                            <View style={{flexDirection: 'column', justifyContent: 'center', paddingLeft: 5}}>
                                <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
                                    Address Location

                                </Text>

                                <Text>
                                    Line 1
                                </Text>
                                <Text>
                                    line 2
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = {
    headerStyle: {
        borderWidth: 0,
        height: 50,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#efebe9',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 25,
        fontWeight: '300',
        color: 'black',
        padding: 110,
    },
};
export default OutletAddress;
