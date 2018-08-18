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

const popAction = StackActions.pop({
  n: 1,
});

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


export default class ProjectScreen extends Component {
  _renderItem = (data, i) => (
    <View style={[{ backgroundColor: data }, styles.item]} key={i} />
  );

  _renderPlaceholder = i => <View style={styles.item} key={i} />;
    render() {
      return (
        <Container>

        <Header style={{backgroundColor:'#000000'}}>
          <Left>
          <Button onPress={this.pop} transparent>
            <IconFeather name='chevron-left' size={26} color={'white'} />
          </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Project</Title>
          </Body>
          <Right>
          <Button onPress={this.openDrawer} transparent>
            <IconFeather name='save' size={26} color={'white'} />
          </Button>
          </Right>
          <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        </Header>

          <ScrollView>
        <Content style={styles.wrapper}>
          <View style={styles.container}>


          <View style={{position:'relative', top:0, width:screen.width, height:screen.width, backgroundColor:'#00A79D', justifyContent: 'center',
          alignItems: 'center',}}>
          <Text style={{ color:'white'}}>Album Art</Text>
        </View>

        <List style={styles.list}>

        <ListItem itemDivider>
          <Text>Project Information</Text>
        </ListItem>

          <ListItem>
            <Left>
              <Text>Project Title</Text>
            </Left>
            <Body>
              <Text>PROJECT TITLE</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Project Type</Text>
            </Left>
            <Body>
              <Text>PROJECT TYPE</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Release Date</Text>
            </Left>
            <Body>
              <Text>Month, Day, YEAR</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider>
            <Text>Contributors</Text>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Artist</Text>
            </Left>
            <Body>
              <Text>ARTIST NAME</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Featuring Artsist</Text>
            </Left>
            <Body>
              <Text>ARTIST 2</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Writer</Text>
            </Left>
            <Body>
              <Text>WRTIER 1</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Producer</Text>
            </Left>
            <Body>
              <Text>PRODUCER 1</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Engineer</Text>
            </Left>
            <Body>
              <Text>ENGINEER 1</Text>
            </Body>
          </ListItem>

          <ListItem itemDivider>
            <Text>Links</Text>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Apple Music</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Spotify</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Pandora</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Google</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Amazon</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Deezer</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Tidal</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Rhapsody</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Youtube</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Xbox Music</Text>
            </Left>
            <Body>
              <Text>www.LINK.com</Text>
            </Body>
          </ListItem>

          </List>

          </View>
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

  }


const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  list:{
    position:'relative',
    width:screen.width,
    backgroundColor:'white',
  },

})
