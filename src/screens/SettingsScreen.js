import React, { Component } from 'react';
import {Image, View, Text, StyleSheet,  Dimensions, TouchableOpacity,ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , List, ListItem, Accordion, Form, Item, Input, Label} from 'native-base'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Grid from 'react-native-grid-component';
const screen = Dimensions.get('window');

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button onPress={this.openDrawer} transparent>
            <Icon name='menu' />
          </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right>

          </Right>
        </Header>

        <ScrollView>


        <List style={styles.list}>
        <ListItem itemDivider>
          <Text>EDIT</Text>
        </ListItem>
          <ListItem>
            <Left>
              <Text>Edit Profile</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Edit Privacy</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Edit Content</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Reset Warnings</Text>
            </Left>
          </ListItem>
          <ListItem itemDivider>
            <Text>MUSIXBLVD</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>About Us</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Meet the Team</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>FAQ</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Contact Us</Text>
            </Left>
          </ListItem>
          <ListItem itemDivider>
            <Text>Account</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Switch User</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>LOG OUT</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>DELETE ACCOUNT</Text>
            </Left>
          </ListItem>
        </List>

        </ScrollView>
      </Container>
    );
  }
  openDrawer =() => {
    this.props.navigation.openDrawer();
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  list:{
    position:'relative',
    width:screen.width,
    backgroundColor:'white',
  },
});
