import React, { Component, useEffect } from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Button_Style = {
  backgroundColor: 'white',
  borderRadius: 8,
  paddingVertical: 30,
  paddingHorizontal: 25,
  width: '80%',
  marginVertical: 10,

  alignSelf: 'center',
  paddingLeft: 30,

  flexDirection: 'row',

  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
} 

const Text_properties = {
  marginTop:  4,
  marginLeft: 8,
  fontWeight: 'bold',
  fontSize: 20
}

function Select_Sport({ navigation }) {
  
  const gotoTrack = (data) => {
    navigation.navigate('Track', { 'MeetCode': data});
  }
  const gotoField = (data) => {
    navigation.navigate('Field', { 'MeetCode': data});
  }

  return <View>

    <TouchableOpacity style={Button_Style} onPress={()=>gotoTrack(navigation.getParam('MeetCode'))}> 
      <MaterialCommunityIcons name="eight-track" size={38} color="black" />
      <Text style={Text_properties}>Track</Text>
    </TouchableOpacity>

    <TouchableOpacity style={Button_Style} onPress={()=>gotoField(navigation.getParam('MeetCode'))}> 
      <MaterialCommunityIcons name="soccer-field" size={38} color="black" />
      <Text style={Text_properties}>Field</Text>
    </TouchableOpacity>
    
  </View>;
}

export default Select_Sport;
