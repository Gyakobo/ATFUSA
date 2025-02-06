import React, { Component, useEffect } from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Meets from './meets';
import About from './About';

const bottomButton={
  padding:20,
  backgroundColor:'#4287f5',
  flexGrow:1,
  alignSelf: 'center',
  paddingLeft: 30
}
const singleButton={
  flexDirection:'row',
}


function Footer({onOpen}){
  return <View style={{flexDirection:'row'}}>
    
    <TouchableOpacity text="Meets" style={bottomButton} onPress={()=>onOpen('Meets')}> 
      <View style={singleButton}>
        <AntDesign name="calendar" size={24} color="white" />
        <Text style={{marginLeft: 3, marginTop: 2, color: 'white', fontWeight:'bold'}}>Meets</Text> 
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={bottomButton} onPress={()=>onOpen('About')}> 
      <View style={singleButton}>
        <FontAwesome5 name="info-circle" size={23} color="white" />
        <Text style={{marginLeft: 3, marginTop: 2, color: 'white', fontWeight:'bold'}}>About</Text> 
      </View>        
    </TouchableOpacity>
  </View>
}

    

function Meets_screen({ navigation }) {
  let [page, setMainPage]=useState('Meets');

  const getCode = (data) => {    
    navigation.navigate('Select Sport', {'MeetCode': data});
  }

  return <View style={{position:'absolute', right:0, left:0, bottom:0, top:0,}}>
    {
      page == 'Meets' && <Meets getCode={getCode}/>
    }
    {
      page == "About" && <About/>
    }

  <Footer onOpen={setMainPage}/>
  </View>;
}

export default Meets_screen;
