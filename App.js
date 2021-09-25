/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DateScreen from './components/DateScreen';
import Head from './components/Head';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  let initialState ={
    month:new Date().getMonth(),
    year:new Date().getFullYear(),
    nextMonth:(new Date().getMonth()+1)%11
  }
  const[date,setDate]=useState(initialState);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function setChanged(date){
   
   
    let temp ={
      month:date.month,
      year:date.year,
      nextMonth:(date.month+1)%11
    }
    setDate(temp);

  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Head setChanged={setChanged}  />
      <DateScreen current={date} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
