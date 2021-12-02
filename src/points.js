import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import DrawerIcon from './logo/drawerMenu.png';
import Card from './Card';
import firebase from 'firebase';

class Points extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
        };
    }

    componentWillMount() {
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + uid).on('value', (data) => {
            console.log(data.toJSON());
            const user = data.toJSON();
            this.setState({
                points: user.points,
            });
        });
    }

    render() {
        return (
            <View>
                <View style={style.headerStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={DrawerIcon} style={{height: 25, width: 25, marginLeft: 10}}/>
                    </TouchableOpacity>
                    <Text style={style.headerText}>
                        Points
                    </Text>
                </View>

                <Card>
                    <View style={style.viewStyle}>
                        <Text style={style.textStyle}>
                            ACTIVE POINTS
                        </Text>
                        <Text style={style.pointStyle}>
                            {this.state.points}
                        </Text>
                    </View>
                </Card>
                <Card>
                    <ScrollView>
                        <View style={style.viewStyle}>
                            <Text style={style.textStyle}>
                                FAQ
                            </Text>
                            <Text style={style.faqStyle}>
                                1. Question
                            </Text>
                            <Text style={style.faqStyle}>
                                1. Answer
                            </Text>
                        </View>
                    </ScrollView>
                </Card>
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
        marginBottom: 10,
    },
    headerText: {
        fontSize: 25,
        fontWeight: '300',
        color: 'black',
        padding: 110,
    },
    textStyle: {

        color: 'black',
        marginLeft: 10,
    },
    viewStyle: {
        margin: 10,
    },
    pointStyle: {
        marginLeft: 10,
        color: 'green',
        fontSize: 30,
    },
    faqStyle: {
        marginLeft: 10,
        fontSize: 15,
    },
};
export default Points;
