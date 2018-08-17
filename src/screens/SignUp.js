/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Login from './Login';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class MyComponent extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />

          <TextInput
            style={styles.textInput}
            placeholder='user_login'
            onChangeText ={ (user_login) => this.setState ({user_login})}
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={styles.textInput}
            placeholder='email_address'
            onChangeText ={ (user_pass) => this.setState ({user_pass})}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />

          <TextInput
            style={styles.textInput}
            placeholder='user_pass'
            onChangeText ={ (user_pass) => this.setState ({user_pass})}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder='user_pass_verify'
            onChangeText ={ (user_pass) => this.setState ({user_pass})}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.signUpComplete}>
            <Text style={styles.btnText}>SIGN UP</Text>
          </TouchableOpacity>

          <View style={{position:'absolute', backgroundColor:'red', left:75, bottom:30, width:50, height:50, borderRadius:25, }}>
            <Text>BMI</Text>
          </View>
          <View style={{position:'absolute', backgroundColor:'orange', right:75, bottom:30, width:50, height:50, borderRadius:25, }}>
            <Text>ASCAP</Text>
          </View>
          <View style={{position:'absolute', backgroundColor:'purple', bottom:30, width:50, height:50, borderRadius:25,}}>
            <Text>SESAC</Text>
          </View>
          <View style={{}}></View>

        </View>

      </KeyboardAvoidingView>
    );
  }

  signUpComplete =() => {
    this.props.navigation.navigate('Login');
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  textInput:{
    alignSelf: 'stretch',
    padding:16,
    marginBottom:20,
    backgroundColor:'#ffffff'
  },
  button:{
    alignSelf: 'stretch',
    padding:16,
    marginBottom:20,
    backgroundColor:'#000000',
    alignItems: 'center',
  },
  btnText:{
    color: 'white',
  },
  noAcctLabel:{
    color:'white',
    fontSize:10,
    position:'absolute',
    bottom:50,
  },
  SignUp:{
    color:'white',
    fontWeight:'bold',
    fontSize:14,
    position:'absolute',
    bottom:30,
  },
  image:{
    width:150,
    height:150,
    position:'absolute',
    backgroundColor:'black',
    top:20,
    padding:16,
  },
});
