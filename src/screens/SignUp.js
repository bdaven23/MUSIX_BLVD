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
  Image,
  Dimensions,
  ScrollView,
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

          <MyStatusBar backgroundColor="#000000" barStyle="light-content" />


            <Image style={{position:'absolute', top:0, }} source={require('./images/MUSIX_BLVD_LOGO-07.png')}/>


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

          <View style={{position:'absolute', backgroundColor:'black', left:75, bottom:30, width:50, height:50, borderRadius:25, }}>
            <Image source={require('./images/ASCAP_Logo_Primary_White.png')}/>
          </View>
          <View style={{position:'absolute', backgroundColor:'black', right:75, bottom:30, width:50, height:50, borderRadius:25, }}>
            <Image source={require('./images/BMI_logo.png')}/>
          </View>
          <View style={{position:'absolute', alignItems: 'center',
          justifyContent: 'center', backgroundColor:'black', bottom:30, width:50, height:50, borderRadius:25,}}>
            <Image source={require('./images/sesac_logo.jpg')}/>
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
    backgroundColor: 'black',
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
    backgroundColor:'#BCBEC0',
    top:30,
  },
  button:{
    alignSelf: 'stretch',
    padding:16,
    marginBottom:20,
    backgroundColor:'#5AC6CC',
    alignItems: 'center',
    top:30,
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
