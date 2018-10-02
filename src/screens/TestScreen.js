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
  AsyncStorage,
  Flatlist,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , List, ListItem, Accordion, Form, Item, Input, Label} from 'native-base'
import { StackNavigator, DrawerNavigator, NavigationActions, StackActions } from 'react-navigation';
import Grid from 'react-native-grid-component';


import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

const screen = Dimensions.get('window');

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class TestScreen extends Component {

  state = {
    data :[]
  }

  fetchData = async () => {


    const response = await fetch('http://musixblvd.com/api/buddypressread/activity_get_activities/')


    const post = await response.json();

    this.setState({data:post});
  }

  componentDidMount(){

    this.fetchData();

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={{position:'absolute', top:100, fontSize:20,}}>Im the Test Screen component</Text>

        <Flatlist
        data={this.state.data}
        keyExtractor={(x,i)=>i}
        renderItem ={({item})=>
          <View>
            <Text>{item.title.rendered}</Text>
          </View>
      } >

        </Flatlist>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#ffffff'
  },
});
