import React from 'react';
import { View } from 'react-native';

const Cards = (props) => {
    return(
        <View style = {styles.containerStyle}>
            {props.children}
        </View>

    );
}

const styles = {
    containerStyle: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth : 2,
        shadowColor:'#000',
        shadowOffset:{ width:0 , height: 2},
        shadowOpacity: 0.9,
        shadowRadius : 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        
    }

};

export default Cards;