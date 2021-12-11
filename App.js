/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import firebase from 'firebase';
import Login from './src/Login';
import SplashScreen from './src/SplashScreen';
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import nearMe, {setTopLevelNavigator} from './src/nearMe';
import Account from './src/account';
import AccIcon from './src/logo/account.png';
import Points from './src/points';
import {Image} from 'react-native';
import NearIcon from './src/logo/nearme.png';
import OutletAddress from './src/multipleAddress';
import OutletDetail from './src/outletDetailPage'

//accounts drawer
const drawerNav = createDrawerNavigator(
    {
        Account: Account,
        Points: Points,
    },
    {},
);

//account stack
const AccStack = createStackNavigator({
    screen5: {
        screen: drawerNav,
        navigationOptions: {
            header: null,

        },
    },
}, {});

//nearme stack
const NearStack = createStackNavigator({
    screen6: {
        screen: nearMe,
        navigationOptions:{
            header: null
        }},
    screen7: {
        screen: OutletAddress,
        navigationOptions:{
            title: 'Outlet Address',
            headerStyle:{
                backgroundColor: '#efebe9'
            },
            headerTitleStyle: {
                fontSize:25,
                fontWeight: '300',
                color: 'black',
                paddingLeft: 30
            }
        }
    },
    screen8: {
        screen: OutletDetail,
        navigationOptions: ({navigation}) => ({
            //title: 'OutletDetail',
            title: navigation.state.params.outlet.name,
            headerStyle:{
                borderWidth:0,
                height: 50,
                margin: 0,
                position: 'absolute',
                backgroundColor: '#efebe9',
                textAlign: 'center',
                flex: 1

            },
            headerTitleStyle: {
                fontSize:25,
                fontWeight: '300',
                color: 'black',
                //paddingLeft: 30,

            },

        })
    },

},{headerLayoutPreset: 'center'})

// bottom tabs
const AppNavigator = createBottomTabNavigator({
    NearMe: {
        screen: NearStack,
        navigationOptions: {
            tabBarIcon: () => (
                <Image
                    source={NearIcon}
                    style={{height: 30, width: 30}}
                />
            ),
        },
    },

    Account: {
        screen: AccStack,
        navigationOptions: {
            tabBarIcon: () => (
                <Image
                    source={AccIcon}
                    style={{height: 30, width: 30}}
                />
            ),
        },
    },
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        activeBackgroundColor: '#f5f5f5',
        showIcon: true,
        labelStyle: {
            fontWeight: '200',
        },
        showLabel: true,

    },
});

const finalStack = createStackNavigator(
    {
        screen1: {
            screen: Login,
            navigationOptions: {
                header: null,
            },
        },
        screen2: {
            screen: AppNavigator,
            navigationOptions: {
                header: null,
            },
        },
    },
    {},
);

const AppContainer = createAppContainer(finalStack);
const TabContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyD8e5uCCTmuFjn-CmKNaxdmaNLeZJ6UO9M',
                authDomain: 'shuttle-34268.firebaseapp.com',
                databaseURL: 'https://shuttle-34268.firebaseio.com',
                projectId: 'shuttle-34268',
                storageBucket: '',
                messagingSenderId: '241387829278',
                appId: '1:241387829278:web:1e85379f28043062',
            });
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    render() {
        switch (this.state.loggedIn) {
            default:
                return <SplashScreen/>;
            case true:
                return <TabContainer/>;
            case false:
                return (
                    <AppContainer
                        ref={navigatorRef => {
                            setTopLevelNavigator(navigatorRef);
                        }}
                    />
                );
        }
    }
}

const style = {
    headerStyle: {
        borderWidth: 0,
        height: 50,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efebe9',
    },
    headerText: {
        fontSize: 25,
        fontWeight: '300',
        color: 'black',
    },
};
