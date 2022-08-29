import React, { Component, useEffect } from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const List_Style = {
  backgroundColor: 'white',
  borderRadius: 8,
  paddingVertical: 30,
  paddingHorizontal: 25,
  width: '90%',
  marginVertical: 10,

  alignSelf: 'center',
  paddingLeft: 30,

  flexDirection: 'row',

  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
} 

const Icon = {
  'position': 'absolute', 
  right:20, 
  top:45
}


//props: meetCode
function Track({ navigation }) {
  const meetCode = navigation.getParam('MeetCode');
  
  const track_events    = "https://www.atfusa.org/webappTracking/" + meetCode + "/EventMenu.json";
  const track_athletes  = "https://www.atfusa.org/webappTracking/" + meetCode + "/AthleteList.json";
  
  let [string_element_for_events, setstring_element_for_events]=useState( [{MeetName:''}] );   
  let [string_element_for_athletes, setstring_element_for_athletes]=useState( [{MeetName:''}] );   
  let [place, set_place] = useState("events");



  function ListItem_for_events({data}){
    if (data.EventCode == " ")  {
    return  <View style={List_Style}>
        <View style={{flexDirection:"row", }}>
          <Text style={{ fontSize:39, color:"grey"}}>
              {String(data.Event).slice(-1)}
          </Text>
          <View>
            <Text style={{marginLeft: 10, marginTop: 5, fontSize: 16, fontWeight:'bold' }}>
              {data.Event}
            </Text>
            <Text style={{marginLeft: 10, fontSize: 15}}>
              {data.DayOfWeek} {data.StartTime}
            </Text>
          </View>
        </View>        
      </View>
    }
    else {
      return  <View style={List_Style}>
        <View style={{flexDirection:"row", }}>
          <Text style={{ fontSize:39, color:"grey"}}>
              {String(data.Event).slice(-1)}
          </Text>
          <View>
            <Text style={{marginLeft: 10, marginTop: 5, fontSize: 16, fontWeight:'bold' }}>
              {data.EventCode}
            </Text>
            <Text style={{marginLeft: 10, fontSize: 15}}>
              {data.DayOfWeek} {data.StartTime}
            </Text>

            <Text style={{marginLeft: 10, fontSize: 15}}>
              {data["# of Heats"]}
            </Text>
           
          </View>
                    
        </View>
        
        <MaterialIcons style={Icon} name="sports-handball" size={27} color="black" />
      </View>
    }
  }

  const get_Track_Athlete_Details = (data) => {
    navigation.navigate('Individual_Track', data);
  }

  function ListItem_for_athletes({data}){
    return  <TouchableOpacity style={List_Style} onPress={ ()=>get_Track_Athlete_Details(
      {
        "BIB":      data.BIB, 
        "MeetCode": meetCode, 
        "Events":  {
          "Event1": data.Event1, "Event2": data.Event2, "Event3": data.Event3, "Event4": data.Event4, "Event5": data.Event5, "Event6": data.Event6
          }
      })} >
        <View style={{flexDirection:"row", }}>

          <View>
            <Text style={{ fontSize:17, color:"grey", left:0}}>
              BIB:
            </Text>

            <Text style={{ fontSize:39, color:"grey", left:0}}>
              {data.BIB}
            </Text>
          </View>

          <View>
            <Text style={{marginLeft: 13, fontSize: 20, fontWeight: 'bold'}}>
              {String(data.LastName) + ", " + String(data.FirstName)}
            </Text>
            <Text style={{marginLeft: 10, fontSize: 15, marginTop: 2, }}>
              { String(data.Class) + ", "+ String(data.Age) + ", " + String(data.Gender) }
            </Text>

            <Text style={{marginLeft: 10, fontSize: 15}}>
              {data["# of Heats"]}
            </Text>
           
          </View>
                    
        </View>
        <Ionicons style={Icon} name="person" size={27} color="black" />        
      </TouchableOpacity>
  }



  const fetch_data = async() => { 
    let url = track_events;
    let response = await fetch(url); 
    let data = await response.json();
    setstring_element_for_events((data)); 

    url = track_athletes;
    response = await fetch(url); 
    data = await response.json()  
    setstring_element_for_athletes((data)); 
  }

  function set_place_to_event() {
    set_place("events");
  }
  function set_place_to_athletes() {
    set_place("athletes");
  }

  useEffect(fetch_data, []);
  
  return <View>
    <Button title="events"    onPress={ () => set_place_to_event() }/>
    <Button title="athletes"  onPress={ () => set_place_to_athletes() }/>

    <ScrollView>

      { 
        place == "events" && 
        (string_element_for_events.map((i,num)=>(
        <ListItem_for_events data={i} />
        )))
      }

      { 
        place == "athletes" &&
        (string_element_for_athletes.map((i,num)=>(
        <ListItem_for_athletes data={i} />
        )))
      }              
    </ScrollView>
    
  </View>;
}

export default Track;