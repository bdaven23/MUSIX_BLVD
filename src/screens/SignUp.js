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
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , List, ListItem, Accordion, Form, Item, Input, Label} from 'native-base'
import { StackNavigator, DrawerNavigator, NavigationActions, StackActions } from 'react-navigation';
import Grid from 'react-native-grid-component';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';


const screen = Dimensions.get('window');

import Login from './Login';

import Modal from "react-native-modal";

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class MyComponent extends Component {
  state = {
    isModalVisible: true
  };
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <MyStatusBar backgroundColor="#000000" barStyle="light-content" />

          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1 , position:'absolute', alignItems:'center', width:screen.width - 40,  height:500, backgroundColor:'rgba(255, 255, 255, 0.9)', }}>
            <TouchableOpacity onPress={this._toggleModal}style={{position:'absolute', top:0, right:10, width:50, height:50, backgroundColor:'rgba(255, 255, 255, 0.0)', alignItems:'center', justifyContent:'center', }}>
            <IconFeather name='x' size={26} color={'black'} />
            </TouchableOpacity>
              <Text style={{fontSize:20, fontWeight:'bold',  top:50,}}>Performance Rights Organizations</Text>
              <Text style={{fontSize:16, fontWeight:'normal', top:50, margin: 25,}}>A Performance Rights Organization (PRO) is an agency that ensures songwriters and publishers are paid for the use of their music by collecting royalties on behalf of the right owner.</Text>
              <Text style={{fontSize:16, fontWeight:'normal', top:50, margin: 25,}}>PROs collect public performance royalties. When a song is played in public, like on any kind of radio (AM/FM, streaming, or satellite), in a venue, or TV show and commercials, it is required that they pay for the use. The PRO collects those payments, and distributes them to the right holders.</Text>

              <View
              style={{position:'absolute',  left:30, bottom:0, width:50, height:50, borderRadius:25, }}>
                <Image source={require('./images/ASCAP_Logo_Primary_White.png')}/>
              </View>
              <View
              style={{position:'absolute',  right:30, bottom:0, width:50, height:50, borderRadius:25, }}>
                <Image source={require('./images/BMI_logo.png')}/>
              </View>
              <View
              style={{position:'absolute', alignItems: 'center',
              justifyContent: 'center', bottom:0, width:50, height:50, left:100, borderRadius:25,}}>
                <Image source={require('./images/sesac_logo.jpg')}/>
              </View>
              <View
              style={{position:'absolute', alignItems: 'center',
              justifyContent: 'center', bottom:0, width:50, height:50, right:100, borderRadius:25,}}>
                <Image source={require('./images/sx_logo_72.png')}/>
              </View>
            </View>
          </Modal>


            <Image onPress={this._toggleModal}
            style={{position:'absolute', top:0, width:120, height:120, alignSelf:'center', }} source={require('./images/MB_LOGO_SPLASH_SCREEN.jpg')}/>


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

        </View>

      </KeyboardAvoidingView>
    );
  }

  signUpComplete =() => {
    this.props.navigation.navigate('Login');
  }
  pushCompanyQuestions =()=> {
    this.props.navigation.navigate('CompanyQuestionsPage');
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
  },
  textInput:{
    alignSelf: 'stretch',
    padding:16,
    marginBottom:20,
    top:30,
    backgroundColor:'white', borderRadius:10, borderColor:'#00A3EE', borderWidth:2,
  },
  button:{
    alignSelf: 'stretch',
    padding:16,
    marginBottom:20,
    backgroundColor:'#00A3EE',
    alignItems: 'center',
    top:30,
    borderRadius:10,
  },
  btnText:{
    color: 'white',
  },


  image:{
    width:150,
    height:150,
    position:'absolute',
    backgroundColor:'transparent',
    top:20,
    padding:16,
  },
});
