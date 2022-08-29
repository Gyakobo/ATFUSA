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







function Individual_Track({ navigation }) {  
  const bib = navigation.getParam("BIB");
  let [string_element, setstring_element]=useState( [{MeetName:''}] );
  let [ValueString, setValueString] = useState( [{MeetName:''}] );
  let [screen, changescreen] = useState('start_list');
  

  const meetCode = navigation.getParam("MeetCode");
  const url_events = "https://www.atfusa.org/webappTracking/" + meetCode + "/AthleteList.json"; 
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
    Heat: '',
    Lane: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',

    Prelim: '',
    Place: '',
    Wind: '',
    Final: '',    
  }])
  let [start_list_characteristics_2, setCharacteristics_2] = useState([{
    Event_name: '',
    Heat: '',
    Lane: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',
    
    Prelim: '',
    Place: '',
    Wind: '',
    Final: '',
  }])
  let [start_list_characteristics_3, setCharacteristics_3] = useState([{
    Event_name: '',
    Heat: '',
    Lane: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',
    
    Prelim: '',
    Place: '',
    Wind: '',
    Final: '',
  }])
  let [start_list_characteristics_4, setCharacteristics_4] = useState([{
    Event_name: '',
    Heat: '',
    Lane: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',
    
    Prelim: '',
    Place: '',
    Wind: '',
    Final: '',
  }])
  let [start_list_characteristics_5, setCharacteristics_5] = useState([{
    Event_name: '',
    Heat: '',
    Lane: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',
    
    Prelim: '',
    Place: '',
    Wind: '',
    Final: '',
  }])
  let [start_list_characteristics_6, setCharacteristics_6] = useState([{
    Event_name: '',
    Heat: '',
    Lane: '', 
    Bib: '',
    Class: '',
    Age_group: '',
    Gender: '',

    Prelim: '',
    Place: '',
    Wind: '',
    Final: '',
  }])


  const fetch_data = async() => {
    let url;
    let response;

    if (Events.Event1 != " ") {
      url = url_m + Events.Event1.toString().slice(0, -7) + "M.json";
      response = await fetch(url); 
      let data_1 = await response.json();

      data_1.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_1( 
          {
            Event_name: value.EventName,
            Heat: value.FHeat,
            Lane: value.FLane, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,

            Prelim: value.PrelimPlace,
            Place: value.FinalPlace,
            Wind: value.Fwind,
            Final: value.FinalPlace,
          });    
        }      
      });
    }


    if (Events.Event2 != " ") {
      url = url_m + Events.Event2.toString().slice(0, -7) + "M.json";
      response = await fetch(url); 
      let data_2 = await response.json();

      data_2.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_2( 
          {
            Event_name: value.EventName,
            Heat: value.FHeat,
            Lane: value.FLane, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,
            Prelim: value.PrelimPlace,
            Place: value.FinalPlace,
            Wind: value.Fwind,
            Final: value.FinalPlace,
          });    
        }      
      });
    }


    if (Events.Event3 != " ") {
      url = url_m + Events.Event3.toString().slice(0, -7) + "M.json";
      response = await fetch(url); 
      let data_3 = await response.json();

      data_3.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_3( 
          {
            Event_name: value.EventName,
            Heat: value.FHeat,
            Lane: value.FLane, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,
            Prelim: value.PrelimPlace,
            Place: value.FinalPlace,
            Wind: value.Fwind,
            Final: value.FinalPlace,
          });    
        }      
      });
    }

  
    if (Events.Event4 != " ") {
      url = url_m + Events.Event4.toString().slice(0, -7) + "M.json";
      response = await fetch(url); 
      let data_4 = await response.json();

      data_4.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_4( 
          {
            Event_name: value.EventName,
            Heat: value.FHeat,
            Lane: value.FLane, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,
            Prelim: value.PrelimPlace,
            Place: value.FinalPlace,
            Wind: value.Fwind,
            Final: value.FinalPlace,
          });    
        }      
      });
    }


    if (Events.Event5 != " ") {
      url = url_m + Events.Event5.toString().slice(0, -7) + "M.json";
      response = await fetch(url); 
      let data_5 = await response.json();

      data_5.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_5( 
          {
            Event_name: value.EventName,
            Heat: value.FHeat,
            Lane: value.FLane, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,
            Prelim: value.PrelimPlace,
            Place: value.FinalPlace,
            Wind: value.Fwind,
            Final: value.FinalPlace,
          });    
        }      
      });
    }

if (Events.Event6 != " ") {
      url = url_m + Events.Event6.toString().slice(0, -7) + "M.json";
      response = await fetch(url); 
      let data_6 = await response.json();

      data_6.map((value, index) => {
        if (bib == value.BIB) {    
          setCharacteristics_6( 
          {
            Event_name: value.EventName,
            Heat: value.FHeat,
            Lane: value.FLane, 
            Bib: value.BIB,
            Class: value.Class,
            Age_group: value.Age,
            Gender: value.Gender,

            Prelim: value.PrelimPlace,
            Place: value.FinalPlace,
            Wind: value.Fwind,
            Final: value.FinalPlace,
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
            {String(data.Heat + ", " + data.Lane + ", " + data.Bib + ", " + data.Class + ", " + data.Age_group + ", " + data.Gender)}
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
            {String("Prelim:" + data.Prelim + ", Place:" + data.Place + ", Wind: " + data.Wind)}
          </Text>

          <Text>
            {String("Final:" + data.Final + ", Place: " + data.Place + ", Wind: " + data.Wind)}
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

export default Individual_Track;

