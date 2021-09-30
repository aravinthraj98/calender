/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import WebViews from './components/WebViews.js';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  let initialState = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    nextMonth: (new Date().getMonth() + 1) % 11,
  };
  const [date, setDate] = useState(initialState);
  const [uri, setUri] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  function setChanged(date) {
    let temp = {
      month: date.month,
      year: date.year,
      nextMonth: (date.month + 1) % 11,
    };
    setDate(temp);
  }
  function clicked() {
    console.log(uri);
    setUri(!uri);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity style={{margin: 10}} onPress={clicked}>
        <Text style={{color: 'blue'}}>Open gmail.com</Text>
      </TouchableOpacity>
      {uri ? (
        <WebViews />
      ) : (
        <>
          <View>
            <Head setChanged={setChanged} />
          </View>
          <View style={{flexGrow: 10}}>
            <DateScreen current={date} />
          </View>
        </>
      )}
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
