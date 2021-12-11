import {View, Text, TouchableOpacity, Image, Dimensions, Linking} from 'react-native';
import React, {Component} from 'react';
import Call from './logo/callOutlet.png';
import Location from './logo/locationOutlet.png';
import Communications from 'react-native-communications';
import {createMaterialTopTabNavigator} from 'react-navigation';
import {withCollapsibleForTab} from 'react-navigation-collapsible';
import OutletEvent from './outletEvent';
import OutletMenu from './outletMenu';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const modalHeight = screenHeight / 4;


const TopTabNavigator = createMaterialTopTabNavigator(
    {
        Menu: {screen: OutletMenu},
        Events: {screen: OutletEvent},
    },
    {animationEnabled: true},
);


class GroupImageHeader extends Component {

    outlet = this.props.navigation.getParam('outlet');

    componentDidMount() {
        this.props.navigation.getParam('close')();
    }

    render() {

        const {name, image} = this.props.navigation.getParam('outlet');
        const {contact, direction} = this.props.navigation.getParam('address');
        return (
            <View style={{flex: 1}}>
                <Image source={{uri: image}} style={{width: screenWidth, height: modalHeight}}/>
                <View style={{
                    flexDirection: 'row',
                    height: 60,
                    width: 350,
                    justifyContent: 'center',
                    marginLeft: 8,
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{padding: 15, elevation: 20}}
                                      onPress={() => Communications.phonecall(contact, true)}>
                        <Image
                            source={Call}
                            style={{height: 30, width: 30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 10, elevation: 20}} onPress={() => Linking.openURL(direction)}>
                        <   Image
                            source={Location}
                            style={{height: 30, width: 30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40,
                        width: 220,
                        borderWidth: 0,
                        margin: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ff953e',
                        elevation: 20,
                    }}
                                      onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('first'), {outlet: this.props.navigation.getParam('outlet')})}
                    >
                        <Text style={{fontSize: 18, color: '#480d0d', fontWeight: '200'}}>
                            Make a Reservation
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const collapsibleParams = {
    collapsibleComponent: GroupImageHeader,
    collapsibleBackgroundStyle: {
        height: 230,

    },
};

export default withCollapsibleForTab(TopTabNavigator, collapsibleParams);

