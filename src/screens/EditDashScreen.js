import React, { Component } from 'react';
import {Image, View, Text, StyleSheet,  Dimensions, TouchableOpacity,ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , List, ListItem, Accordion, Form, Item, Input, Label, Segment} from 'native-base'
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


const popAction = StackActions.pop({
  n: 1,
});


export default class EditDashScreen extends Component {
  render() {
    return (
      <Container>

      <Header>
        <Left>
        <Button onPress={this.pop} transparent>
          <IconFeather name='chevron-left' size={26} color={'white'} />
        </Button>
        </Left>
        <Body>
          <Title>Edit Profile</Title>
        </Body>
        <Right>
        <Button onPress={this.save} transparent>
          <IconFeather name='save' size={26} color={'white'} />
        </Button>
        </Right>


      </Header>

          <ScrollView>
          <Content>
          <View style={{postition:'relative', top:0, width:screen.width, height:200, backgroundColor:'white', }}>

          <TouchableOpacity style={{ left:120, top:30, }}>
            <Text style={{}}>Change Profile Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ left:120, top:45, }}>
            <Text style={{color:'red', fontWeight:'bold', }}>Delete Profile Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ left:120, bottom:-80, }}>
            <Text style={{}}>Change Banner Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ left:120, bottom:-100, }}>
            <Text style={{color:'red', fontWeight:'bold', }}>Delete Banner Image</Text>
          </TouchableOpacity>

            <View style={{postition:'absolute', left:20, top:-50, width:70, height:70, backgroundColor:'red', borderRadius:35, }}></View>

            <View style={{postition:'absolute', left:20, bottom:30, width:70, height:70, backgroundColor:'red', borderRadius:15,}}></View>


          </View>

          <Form style={{position:'relative', top:0 , width:screen.width}}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Discipline </Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>City</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>State</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Gender</Label>
              <Input />
            </Item>
            <ListItem itemDivider>
              <Text>Contact Information</Text>
            </ListItem>
            <Item floatingLabel last>
              <Label>Instagram</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Twitter</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Facebook</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Custom Field</Label>
              <Input />
            </Item>
            <ListItem itemDivider>
              <Text>Links</Text>
            </ListItem>
            <Item floatingLabel last>
              <Label>Apple Music</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Spotify</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Pandora</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Google</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Amazon</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Deezer</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Tidal</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Rhapsody</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Youtube</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Xbox Music</Label>
              <Input />
            </Item>
          </Form>

        </Content>

          </ScrollView>
        </Container>
    );
  }
  openDrawer =() => {
    this.props.navigation.openDrawer();
  }
  pop =() => {
  this.props.navigation.dispatch(popAction);
  }
  save = () =>{
    alert("SAVED")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
  },
  content:{
    color:'white',
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
  list:{
    position:'relative',
    width:screen.width,
    backgroundColor:'white',
  },
  callingCard:{
    position:'relative',
    width:screen.width - 20,
    height:190,
    backgroundColor:'white',
    borderRadius:20,
    borderColor:'black',
    borderWidth:2,
  },
});
