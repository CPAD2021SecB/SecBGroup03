import RadioForm,{ RadioButton , RadioButtonInput , RadioButtonLabel } from 'react-native-simple-radio-button';
import React,{Component} from 'react';
import {View} from 'react-native'

export default class RadioButtonProject extends Component {

  state = {
    value: this.props.value
  }


    render() {
      return (
        <View>
          <RadioForm
            radio_props={this.props.radioProps}
            initial={this.props.initial}
            formHorizontal={this.props.formHorizontal}
            onPress={(value) => {this.setState({value:value})}}
          />
        </View>
      );
      }  
}
