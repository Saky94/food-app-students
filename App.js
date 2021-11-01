
import React,{ useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView, StatusBar} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import mealsReducer from './store/Reducers/meals';
import mealReducer from './store/Reducers/meals';
import {Provider} from 'react-redux';

enableScreens();

//reducer-kada imamo vise reducera korisimo combineReducer
const rootReducer=combineReducers({
 meals: mealReducer
});

//kreiranjeStora
const store= createStore(rootReducer);

const fetchFonts = () => {

  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

  });

};

export default function App(props) {
const [fontLoaded, setFontLoaded]= useState(false);

if(!fontLoaded)
{
  return ( <AppLoading startAsync={fetchFonts}
  onFinish={() => setFontLoaded(true)}
  onError={(err) => setFontLoaded(err)}
  /> );
}

   return ( <>
    <StatusBar backgroundColor= '#000066' {...props} />
    <SafeAreaView style={styles.safeAreaStyle}>
      <Provider store={store}>
    <MealsNavigator />
      </Provider>
    </SafeAreaView>
    </>
   ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaStyle:{
    flex:1,
    
    
    
    
  }
});
