import React, { Component, useEffect } from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const upwardButton={
  padding:20,
  backgroundColor:'#4287f5',
  flexGrow:1,
  alignSelf: 'center',
  paddingLeft: 30
}
const singleButton={
  flexDirection:'row',
}







function Individual_Field({ navigation }) {  
  const bib = navigation.getParam("BIB");
  let [string_element, setstring_element]=useState( [{MeetName:''}] );
  let [ValueString, setValueString] = useState( [{MeetName:''}] );
  let [screen, changescreen] = useState('start_list');
  

  const meetCode = navigation.getParam("MeetCode");
  const url_events = "https://www.atfusa.org/webappTracking/" + meetCode + "/FldAthleteList.json"; 
  const url_m = "https://www.atfusa.org/webappTracking/" + meetCode + "/";

  const Events = navigation.getParam('Events');

  function Header() {  
    return <View style={{flexDirection:'row'}}>
      <TouchableOpacity text="Meets" style={upwardButton} onPress={()=>changescreen('start_list')}> 
        <View style={singleButton}>        
          <Text style={{marginLeft: 3, marginTop: 2, color: 'white', fontWeight:'bold'}}>Start List</Text> 
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={upwardButton} onPress={()=>changescreen('results')}> 
        <View style={singleButton}>        
          <Text style={{marginLeft: 3, marginTop: 2, color: 'white', fontWeight:'bold'}}>Results</Text> 
        </View>        
      </TouchableOpacity>
    </View>
  }

  let [start_list_characteristics_1, setCharacteristics_1] = useState([{
    Event_name: '',
    Pit: '',
    Group: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',

    Final: '',
    Place: '',
  }])
  let [start_list_characteristics_2, setCharacteristics_2] = useState([{
    Event_name: '',
    Pit: '',
    Group: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',

    Final: '',
    Place: '',
  }])
  let [start_list_characteristics_3, setCharacteristics_3] = useState([{
    Event_name: '',
    Pit: '',
    Group: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',

    Final: '',
    Place: '',
  }])
  let [start_list_characteristics_4, setCharacteristics_4] = useState([{
    Event_name: '',
    Pit: '',
    Group: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',

    Final: '',
    Place: '',
  }])
  let [start_list_characteristics_5, setCharacteristics_5] = useState([{
    Event_name: '',
    Pit: '',
    Group: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',

    Final: '',
    Place: '',
  }])
  let [start_list_characteristics_6, setCharacteristics_6] = useState([{
    Event_name: '',
    Pit: '',
    Group: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',

    Final: '',
    Place: '',    
  }])


  const fetch_data = async() => {
    let url;
    let response;

    if (Events.Event1 != " ") {
      if (Events.Event1 == 'Javelin') { url = url_m + "Jav.json"; }
      else if (Events.Event1 == 'ShotPut')  { url = url_m + "Shot.json"; }
      else if (Events.Event1 == 'Discus')  { url = url_m + "Disc.json"; }
      else if (Events.Event1 == 'Long Jump') { url = url_m + "Ljump.json"; }      
      else if (Events.Event1 == 'High Jump') { url = url_m + "Hjump.json"; }
      else if (Events.Event1 == 'Triple Jump') { url = url_m + "Tjump.json"; }      
      
      response = await fetch(url); 
      let data_1 = await response.json();

      data_1.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_1( 
          {
            Event_name: value.EventName,
            Pit: value.Pit,
            Group: value.Group, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,

            Final: value.FResults,
            Place: value.FPlace,
          });    
        }      
      });
    }


    if (Events.Event2 != " ") {
      if (Events.Event2 == 'Javelin') { url = url_m + "Jav.json"; }
      else if (Events.Event2 == 'ShotPut')  { url = url_m + "Shot.json"; }
      else if (Events.Event2 == 'Discus')  { url = url_m + "Disc.json"; }
      else if (Events.Event2 == 'Long Jump') { url = url_m + "Ljump.json"; }      
      else if (Events.Event2 == 'High Jump') { url = url_m + "Hjump.json"; }
      else if (Events.Event2 == 'Triple Jump') { url = url_m + "Tjump.json"; }      
      
      response = await fetch(url); 
      let data_2 = await response.json();

      data_2.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_2( 
          {
            Event_name: value.EventName,
            Pit: value.Pit,
            Group: value.Group, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,

            Final: value.FResults,
            Place: value.FPlace,
          });    
        }      
      });
    }


    if (Events.Event3 != " ") {
      if (Events.Event3 == 'Javelin') { url = url_m + "Jav.json"; }
      else if (Events.Event3 == 'ShotPut')  { url = url_m + "Shot.json"; }
      else if (Events.Event3 == 'Discus')  { url = url_m + "Disc.json"; }
      else if (Events.Event3 == 'Long Jump') { url = url_m + "Ljump.json"; }      
      else if (Events.Event3 == 'High Jump') { url = url_m + "Hjump.json"; }
      else if (Events.Event3 == 'Triple Jump') { url = url_m + "Tjump.json"; }      
      
      response = await fetch(url); 
      let data_3 = await response.json();

      data_3.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_3( 
          {
            Event_name: value.EventName,
            Pit: value.Pit,
            Group: value.Group, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,

            Final: value.FResults,
            Place: value.FPlace,
          });    
        }      
      });
    }


    if (Events.Event4 != " ") {
      if (Events.Event4 == 'Javelin') { url = url_m + "Jav.json"; }
      else if (Events.Event4 == 'ShotPut')  { url = url_m + "Shot.json"; }
      else if (Events.Event4 == 'Discus')  { url = url_m + "Disc.json"; }
      else if (Events.Event4 == 'Long Jump') { url = url_m + "Ljump.json"; }      
      else if (Events.Event4 == 'High Jump') { url = url_m + "Hjump.json"; }
      else if (Events.Event4 == 'Triple Jump') { url = url_m + "Tjump.json"; }      
      
      response = await fetch(url); 
      let data_4 = await response.json();

      data_4.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_4( 
          {
            Event_name: value.EventName,
            Pit: value.Pit,
            Group: value.Group, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,

            Final: value.FResults,
            Place: value.FPlace,
          });    
        }      
      });
    }

    if (Events.Event5 != " ") {
      if (Events.Event5 == 'Javelin') { url = url_m + "Jav.json"; }
      else if (Events.Event5 == 'ShotPut')  { url = url_m + "Shot.json"; }
      else if (Events.Event5 == 'Discus')  { url = url_m + "Disc.json"; }
      else if (Events.Event5 == 'Long Jump') { url = url_m + "Ljump.json"; }      
      else if (Events.Event5 == 'High Jump') { url = url_m + "Hjump.json"; }
      else if (Events.Event5 == 'Triple Jump') { url = url_m + "Tjump.json"; }      
      
      response = await fetch(url); 
      let data_5 = await response.json();

      data_5.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_5( 
          {
            Event_name: value.EventName,
            Pit: value.Pit,
            Group: value.Group, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,

            Final: value.FResults,
            Place: value.FPlace,
          });    
        }      
      });
    }


if (Events.Event6 != " ") {
      if (Events.Event6 == 'Javelin') { url = url_m + "Jav.json"; }
      else if (Events.Event6 == 'ShotPut')  { url = url_m + "Shot.json"; }
      else if (Events.Event6 == 'Discus')  { url = url_m + "Disc.json"; }
      else if (Events.Event6 == 'Long Jump') { url = url_m + "Ljump.json"; }      
      else if (Events.Event6 == 'High Jump') { url = url_m + "Hjump.json"; }
      else if (Events.Event6 == 'Triple Jump') { url = url_m + "Tjump.json"; }      
      
      response = await fetch(url); 
      let data_6 = await response.json();

      data_6.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_6( 
          {
            Event_name: value.EventName,
            Pit: value.Pit,
            Group: value.Group, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,

            Final: value.FResults,
            Place: value.FPlace,
          });    
        }      
      });
    }


  };

const List_Style = {
  'flex': 1,
  paddingBottom: 16,
} 

const Button_Style = {
  backgroundColor: 'white',
  borderRadius: 8,
  paddingVertical: 8,
  paddingHorizontal: 15,
  width: '80%',
  marginVertical: 5,
  marginTop: 9,
  marginBottom: 5,

  alignSelf: 'center',
  paddingLeft: 15,

  flexDirection: 'row',

  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
} 


function ListItem_startlist({data}){    

    return  <View style={Button_Style}>
        <View style={List_Style}>
          <Text style={{'fontWeight': 'bold', fontSize: 18}}>
            {data.Event_name}
          </Text>

          <Text>
            {String(data.Pit + ", " + data.Group + ", " + data.Bib + ", " + data.Class + ", " + data.Age_group + ", " + data.Gender)}
          </Text>
          
        </View>       

      </View>
}

function ListItem_results({data}){    

    return  <View style={Button_Style}>
        <View style={List_Style}>
          <Text style={{'fontWeight': 'bold', fontSize: 18}}>
            {data.Event_name}
          </Text>

          <Text>
            {String("Final: " + data.Final + ", Place: " + data.Place)}
          </Text>          

        </View>        
        
      </View>
}

  const set_title = () => {
    navigation.setParams({ param: "Sample Person" })  
  }

  useEffect(fetch_data, []);

  return <View>
    <Header />      
      <ScrollView>
        { screen == 'start_list' && Events.Event1 != " " && <ListItem_startlist data={start_list_characteristics_1} /> }
        { screen == 'start_list' && Events.Event2 != " " && <ListItem_startlist data={start_list_characteristics_2} /> }
        { screen == 'start_list' && Events.Event3 != " " && <ListItem_startlist data={start_list_characteristics_3} /> }
        { screen == 'start_list' && Events.Event4 != " " && <ListItem_startlist data={start_list_characteristics_4} /> }
        { screen == 'start_list' && Events.Event5 != " " && <ListItem_startlist data={start_list_characteristics_5} /> }
        { screen == 'start_list' && Events.Event6 != " " && <ListItem_startlist data={start_list_characteristics_6} /> }

        { screen == 'results' && Events.Event1 != " " && <ListItem_results data={start_list_characteristics_1} /> }
        { screen == 'results' && Events.Event2 != " " && <ListItem_results data={start_list_characteristics_2} /> }
        { screen == 'results' && Events.Event3 != " " && <ListItem_results data={start_list_characteristics_3} /> }
        { screen == 'results' && Events.Event4 != " " && <ListItem_results data={start_list_characteristics_4} /> }
        { screen == 'results' && Events.Event5 != " " && <ListItem_results data={start_list_characteristics_5} /> }
        { screen == 'results' && Events.Event6 != " " && <ListItem_results data={start_list_characteristics_6} /> }                        
          
      
      </ScrollView>
       
        
  </View>;
}

export default Individual_Field;
