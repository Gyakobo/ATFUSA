import React, { Component, useEffect } from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState } from 'react';

import Navigator from './homeStack';

function App () { 
    // PTP, GLG, TSG, JNC
    let [MeetCode, setMeetCode]=useState('');
    let [Place, setPlace] = useState('');

  const getCode_2 = (data) => {
    setMeetCode(data);
  } 

  const getPlace = (data) => {
    setPlace(data);
  }

    return ( 
      <Navigator />
    ); 
    
} 


export default App;