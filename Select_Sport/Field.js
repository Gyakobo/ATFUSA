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

const pit_box = {
  padding: 6
}

const align_evenly = {
  flexDirection:"row", 
  justifyContent: 'space-evenly'
}

const Icon = {
  'position': 'absolute', 
  right:20, 
  top:45
}

//props: meetCode
function Field({ navigation }) {
  const meetCode = navigation.getParam('MeetCode');
  
  const field_events    = "https://www.atfusa.org/webappTracking/" + meetCode + "/FldEventMenu.json";
  const field_athletes  = "https://www.atfusa.org/webappTracking/" + meetCode + "/FldAthleteList.json";
  const field_pitboxes  = "https://www.atfusa.org/webappTracking/" + meetCode + "/PitImplements.json";
  
  let [string_element_for_events, setstring_element_for_events]=useState( [{MeetName:''}] );   
  let [string_element_for_athletes, setstring_element_for_athletes]=useState( [{MeetName:''}] );   
  let [string_element_for_pitbox, setstring_element_for_pitbox]=useState( [{MeetName:''}] );   
  let [place, set_place] = useState("events");

  function ListItem_for_events({data}){
    return  <View style={List_Style}>
        <View style={{flexDirection:"row", }}>
          <Text style={{ fontSize:39, color:"grey"}}>
              {String(data.Event).slice(-1)}
          </Text>
          <View>
            <Text style={{marginLeft: 10, marginTop: 5, fontSize: 16, fontWeight:'bold' }}>
              {data.EventName}
            </Text>
            <Text style={{marginLeft: 10, fontSize: 15}}>
              {data.DayOfWeek} {data.StartTime}
            </Text>

            <Text style={{marginLeft: 10, fontSize: 15}}>
              {data["# of Pits"]}
            </Text>
           
          </View>
                    
        </View>
        
        <MaterialIcons style={Icon} name="sports-handball" size={27} color="black" />
      </View>
  }

const get_Field_Athlete_Details = (data) => {
    navigation.navigate('Individual_Field', data);
  }

  function ListItem_for_athletes({data}){
    return  <TouchableOpacity style={List_Style}
     onPress={ ()=>get_Field_Athlete_Details(
      {
        "BIB":      data.BIB, 
        "MeetCode": meetCode, 
        "Events":  {
          "Event1": data.Event1, "Event2": data.Event2, "Event3": data.Event3, "Event4": data.Event4, "Event5": data.Event5, "Event6": data.Event6
          }
      })} 
    > 
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

  function ListItem_for_pitbox({data}){
    return  <SafeAreaView style={List_Style}>
        <View style={align_evenly}>

          <View style={pit_box }>
            <Text style={{ fontSize:17, color:"grey"}}>
              PIT:
            </Text>
            <Text style={{ fontSize:39, color:"grey"}}>
              {data.Pit}
            </Text>
          </View>

          <View style={pit_box}>
            <Text style={{ fontSize:17, color:"grey"}}>
              GROUP:
            </Text>

            <Text style={{ fontSize:39, color:"grey"}}>
              {data.Group}
            </Text>
          </View>

          <View style={pit_box}>
            <Text style={{marginLeft: 13, fontSize: 20,}}>
              {data.Imp1}
            </Text>                       
          </View>
                    
        </View>
                
      </SafeAreaView>
  }
  

  const fetch_data = async() => { 
    let url = field_events;
    let response = await fetch(url); 
    let data = await response.json();
    setstring_element_for_events((data)); 

    url = field_athletes;
    response = await fetch(url); 
    data = await response.json()  
    setstring_element_for_athletes((data)); 

    url = field_pitboxes;
    response = await fetch(url); 
    data = await response.json()  
    setstring_element_for_pitbox((data)); 
  }

  function set_place_to_event() {
    set_place("events");
  }
  function set_place_to_athletes() {
    set_place("athletes");
  }
  function set_place_to_pitbox() {
    set_place("pitbox");
  }

  useEffect(fetch_data, []);
  
  return <View>
    <Button title="Events"    onPress={ () => set_place_to_event() }/>
    <Button title="Athletes"  onPress={ () => set_place_to_athletes() }/>
    <Button title="Pit Boxes" onPress={ () => set_place_to_pitbox() }/>

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

      { 
        place == "pitbox" &&
        (string_element_for_pitbox.map((i,num)=>(
        <ListItem_for_pitbox data={i} />
        )))
      }         
    </ScrollView>
    
  </View>;
}

export default Field;