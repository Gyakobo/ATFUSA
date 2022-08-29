import React, { Component } from 'react'
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Meets_screen from './Meets_screen/Meets_screen';
import Select_Sport from './Select_Sport/Select_Sport';
import Track from './Select_Sport/Track';
import Field from './Select_Sport/Field';
import Individual_Track from './Individual/Individual_Track';
import Individual_Field from './Individual/Individual_Field';

const screens = {
  "Meets": {
    screen: Meets_screen
  },
  "Select Sport": {
    screen: Select_Sport
  },
  "Track": {
    screen: Track 
  },
  "Field": {
    screen: Field
  },
  "Individual_Track": {
    screen: Individual_Track
  },
  "Individual_Field": {
    screen: Individual_Field
  }
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);