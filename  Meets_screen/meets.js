import React, { Component, useEffect } from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const ListStyle= {
  'flex': 1,
  padding: 5,
  paddingBottom: 21,
  'borderColor': '#ededed',
  'borderWidth': 1,
  'borderStyle': 'dashed',
  'borderRadius': 7,
}

const Button_Style = {
  backgroundColor: 'white',
  borderRadius: 8,
  paddingVertical: 18,
  paddingHorizontal: 20,
  width: '90%',
  marginVertical: 5,
  marginTop: 0,

  alignSelf: 'center',
  paddingLeft: 30,

  flexDirection: 'row',

  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
} 

function ListItem({data, onOpen}){
    return  <TouchableOpacity style={Button_Style} onPress={onOpen}>
        <View style={ListStyle}>
          <Text style={{'fontWeight': 'bold', fontSize: 18}}>
              {data.MeetName}
          </Text>
          <Text>
              {data.MeetDate} {data.Location}
          </Text>

          <AntDesign name="right" style={{'position': 'absolute', right:0, top:12, }} size={24} color="grey" />  
        </View>        
        
      </TouchableOpacity>
}

function Meets ({getCode}) { 
   let [string_element, setstring_element]=useState( [{MeetName:''}] )   
  
    const fetch_data = async() => { 
        let url = "https://www.atfusa.org/webappTracking/MainMenu.json"; 
        let response = await fetch(url); 
        let data = await response.json()  
        setstring_element( (data) ); 
    };

    const UpdateMeetCode = (num) => {      
        getCode(num.toString());
    };
  
    useEffect(fetch_data, []);
     
    return <View style={{display:'flex',flexDirection:'column', marginTop:20, flexGrow:1}}>
      <Text style={{textAlign: 'center', fontSize: 26, marginBottom: 2, fontWeight: 'bold', color: '#919191'}}>Adaptive Sports USA</Text>      
      <Text style={{textAlign: 'center', fontSize: 22, marginBottom: 22, color:'#919191'}}>Start List/ Results</Text>

      <View style={{flexGrow:1, }}>
        {(string_element.map((i,num)=>(
          <ListItem data={i} onOpen={()=>{
            UpdateMeetCode(i.MeetCode);                  
          }}/>
        )))}              
      </View>          
                           
      </View>; 
} 


export default Meets;
