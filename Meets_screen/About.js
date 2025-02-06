import React, { Component, useEffect } from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState } from 'react';

function About({data}){
  return <View style={{padding:4, display:'flex',flexDirection:'column', marginTop:6, flexGrow:1}}>
    <Text style={{fontWeight:'bold', marginBottom:6, }}>About</Text>

    <Text style={{ marginBottom:6, }}>
    Adaptive Track & Field USA (ATFUSA) is a 30 year old 501(c)3 organization that was formed to support Adaptive Track & Field and Adaptive Road Racing in the USA.
    </Text>

    <Text style={{ marginBottom:6, }}>
    In 2002, the United States Olympic Committee became the National Paralympic Committee and U.S. Paralympics became the NGB for Para Athletics (Track and Field) in the USA.
    </Text>

    <Text style={{ marginBottom:6, }}>
    ATFUSA's current role is to support Adaptive Track and Field for Juniors under 14 and Masters Age groups 35, 50, 60. For these groups of athletes, ATFUSA:
    </Text>
 
    <Text>* Sets the rules</Text>
    <Text>* Keeps the records</Text>
    <Text style={{ marginBottom:6, }}>* Sets standards for our national Youth and Non Elite championships</Text>

    <Text style={{ marginBottom:6, }}>
    ATFUSA has a synergetic relationship with Adaptive Sports USA. In this partnership Adaptive Sports USA can sancion a track and field meet when it is run in a multi-sport competition.
    </Text>

    <Text style={{fontWeight: 'bold', marginBottom:6}}>
    Contact
    </Text>

    <Text>
    Philip Galli
    </Text>
    <Text>
    ATFUSA Chairman
    </Text>
    <Text>
    1421 Orleans Road
    </Text>
    <Text>
    PMB 263
    </Text>
    <Text style={{ marginBottom:8}}>
    E. Harwich, MA 02645
    </Text>

    <Text>
    E-mail: philg1234@comcast.net
    </Text>
    <Text>
    Cell: (908) 240-7641
    </Text>

  </View>
}

export default About;
