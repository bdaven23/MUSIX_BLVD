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
} from 'react-native';
import { StackNavigator } from 'react-navigation';


import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />

          <View style={styles.image}></View>


          <Text style={styles.header}>Welcome</Text>

          <TextInput
            style={styles.textInput}
            placeholder='user_login'
            onChangeText ={ (user_login) => this.setState ({user_login})}
            underlineColorAndroid='transparent'
          />

          <TextInput
            style={styles.textInput}
            placeholder='user_pass'
            onChangeText ={ (user_pass) => this.setState ({user_pass})}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.login}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
            <Text style={{bottom:190, position:'absolute', color:'white', }}>OR CONTINUE WITH</Text>

            <View style={{position:'absolute', backgroundColor:'red', left:75, bottom:130, width:50, height:50, borderRadius:25, }}></View>
            <View style={{position:'absolute', backgroundColor:'orange', right:75, bottom:130, width:50, height:50, borderRadius:25, }}></View>
            <View style={{position:'absolute', backgroundColor:'purple', bottom:130, width:50, height:50, borderRadius:25,}}></View>
            <View style={{}}></View>


            <Text style={styles.noAcctLabel}>Dont have an Account?</Text>
            <Text  onPress={this.signUp} style={styles.SignUp}>JOIN HERE</Text>
        </View>

      </KeyboardAvoidingView>

    );
  }

  signUp =() => {
    this.props.navigation.navigate('SignUp');
  }

  login =() => {
    this.props.navigation.navigate('DrawerNavigator');
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
    backgroundColor:'#BCBEC0'
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
    top:50,
  },
});
