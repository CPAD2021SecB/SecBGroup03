import {View, Text, StatusBar, ScrollView, Dimensions} from 'react-native';
import React, {Component} from 'react';
import OutletCard from './outletCard';
import {NavigationActions} from 'react-navigation';
import firebase from 'firebase'


let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

class nearMe extends Component {

    state = {outlets: [], modalVisible: false, loaded: false}

    componentWillMount() {
        if (!firebase.apps.length) {
            console.log('entered0')
            firebase.initializeApp({
                apiKey: "AIzaSyD8e5uCCTmuFjn-CmKNaxdmaNLeZJ6UO9M",
                authDomain: "shuttle-34268.firebaseapp.com",
                databaseURL: "https://shuttle-34268.firebaseio.com",
                projectId: "shuttle-34268",
                storageBucket: "",
                messagingSenderId: "241387829278",
                appId: "1:241387829278:web:1e85379f28043062"
            });

        }

        firebase.database().ref('outlets/').on('value', (data) => {
            const text = []

            data.forEach((item) => {

                text.push(item.toJSON())

            })
            this.setState({outlets: text})

        })
    }

    onClose = () => this.setState({modalVisible: false});

    renderOutletList() {
        return this.state.outlets.map(outlet => <OutletCard key={outlet.name} outlet={outlet}
                                                            navigation={this.props.navigation}/>);
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor='#b86a28'/>
                <View style={style.headerStyle}>
                    <Text style={style.headerText}>
                        Restaurants Near Me
                    </Text>
                </View>
                <ScrollView>
                    {this.renderOutletList()}

                </ScrollView>
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
        justifyContent: 'center',
        backgroundColor: '#efebe9',

        //backgroundColor: '#efebe9',
        marginBottom: 10
    },
    headerText: {
        fontSize: 25,
        fontWeight: '300',
        color: 'black'
    }
}

export default nearMe
export {navigate, setTopLevelNavigator}
