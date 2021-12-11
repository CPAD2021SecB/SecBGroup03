import React from 'react';
import { View} from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyle} >{
        props.children
    }</View>
);

const styles = {
    containerStyle: {


        borderColour: '#ddd',
        borderBottomWidth: 0,
        backgroundColor: '#fff',
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        shadowOffset: '2',
        elevation: 5
    }
};

export default CardSection;
