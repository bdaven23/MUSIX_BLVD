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

export default class FindScreen extends Component {
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
          <Title>Explore</Title>
        </Body>
        <Right>
        <Button onPress={this.openDrawer} transparent>
          <Icon name='search' />
        </Button>
        </Right>
      </Header>

          <ScrollView>
          <Content>
          <List style={styles.list}>
          <ListItem itemDivider>
            <Text>RECENT ARTISTS</Text>
          </ListItem>
            <ListItem>
            <Left>
              <View style={styles.callingCard}>
              <View style={{position:'relative', width:styles.callingCard.width-2, height:120,  backgroundColor:'grey', borderTopLeftRadius:20, borderTopRightRadius:20, justifyContent: 'center',
              alignItems: 'center',}}>
                <Text>Background Image</Text>
              </View>
                <View style={{position:'absolute', width:100, height:100, borderRadius:50, backgroundColor:'blue', left:10, bottom:10,}}>
                </View>
                <Text style={{position:'absolute', left:120, bottom:40, fontSize: 24, fontWeight:'bold',}}>Ashley</Text>
                <Text style={{position:'absolute', left:120, bottom:23, fontSize: 18, fontWeight:'normal',}}>Rapper</Text>
                <Text style={{position:'absolute', left:120, bottom:5, fontSize: 18, fontWeight:'normal',}}>Rating 5.0</Text>
              </View>
              </Left>
            </ListItem>
            <ListItem>
            <Left>
              <View style={styles.callingCard}>
              <View style={{position:'relative', width:styles.callingCard.width-2, height:120,  backgroundColor:'grey', borderTopLeftRadius:20, borderTopRightRadius:20, justifyContent: 'center',
              alignItems: 'center',}}>
                <Text>Background Image</Text>
              </View>
                <View style={{position:'absolute', width:100, height:100, borderRadius:50, backgroundColor:'blue', left:10, bottom:10,}}>
                </View>
                <Text style={{position:'absolute', left:120, bottom:40, fontSize: 24, fontWeight:'bold',}}>Barry</Text>
                <Text style={{position:'absolute', left:120, bottom:23, fontSize: 18, fontWeight:'normal',}}>Engineer</Text>
                <Text style={{position:'absolute', left:120, bottom:5, fontSize: 18, fontWeight:'normal',}}>Rating 4.7</Text>
              </View>
              </Left>
            </ListItem>
            <ListItem>
            <Left>
              <View style={styles.callingCard}>
              <View style={{position:'relative', width:styles.callingCard.width-2, height:120,  backgroundColor:'grey', borderTopLeftRadius:20, borderTopRightRadius:20, justifyContent: 'center',
              alignItems: 'center',}}>
                <Text>Background Image</Text>
              </View>
                <View style={{position:'absolute', width:100, height:100, borderRadius:50, backgroundColor:'blue', left:10, bottom:10,}}>
                </View>
                <Text style={{position:'absolute', left:120, bottom:40, fontSize: 24, fontWeight:'bold',}}>Bob</Text>
                <Text style={{position:'absolute', left:120, bottom:23, fontSize: 18, fontWeight:'normal',}}>Engineer</Text>
                <Text style={{position:'absolute', left:120, bottom:5, fontSize: 18, fontWeight:'normal',}}>Rating 4.7</Text>
              </View>
              </Left>
            </ListItem>

          </List>
        </Content>

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
