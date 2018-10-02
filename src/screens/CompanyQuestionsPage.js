import React, { Component } from "react";
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
import Modal from "react-native-modal";


const screen = Dimensions.get('window');

export default class CompanyQuestionsPage extends Component {
  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 , justifyContent:'center', alignItems:'center', width:screen.width - 40,  height:50, backgroundColor:'white', }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
            <View>
              <Text>Hide me!</Text>
            </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
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
