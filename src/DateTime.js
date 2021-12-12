import React, { Component } from "react";
import { Text , View , TouchableOpacity , Image } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import calendar from './Logo/calendar.png';

export default class DateTime extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isDateTimePickerVisible: false
        };
      }
    
      showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
    
      hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
    
      handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
      };
    
      render() {
        return (
          <View>
              <View style = {{padding:20,flexDirection:'row'}}>
                <Text style ={{fontSize:20,fontWeight:'500',paddingTop:5,}}>Date and Time  </Text>
                <TouchableOpacity onPress = {this.showDateTimePicker} >
                <Image source = {calendar} style = {{height : 40 , width : 40 ,}}/>
                </TouchableOpacity>
                
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                  mode={'datetime'}
                />
              </View>
          </View>
        );
      }
    }