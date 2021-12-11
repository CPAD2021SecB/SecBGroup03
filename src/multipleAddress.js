import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Card from './Card';
import CardSection from './CardSection';

class OutletAddress extends Component {


    render() {
        return (
            <View>
                <TouchableOpacity style={{padding: 5}}
                                  onPress={() => this.props.navigation.navigate('screen8')}>
                    <Card>
                        <CardSection>
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
