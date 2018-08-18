import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import DrawerNavigator from './src/screens/DrawerNavigator';


const Application = StackNavigator({
  Home: {
    screen: Login,
    navigationOptions: { header: null }
  },
  SignUp:{
    screen: SignUp,
    navigationOptions: () => ({
      title: 'Sign Up',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: 'black',
        elevation: 0,
        showdowOpacity: 0
      },
  }),
},
  DrawerNavigator:{
    screen : DrawerNavigator,
    navigationOptions: { header: null }
  },

},{
  navigationOptions: { gesturesEnabled:false }

});



export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
