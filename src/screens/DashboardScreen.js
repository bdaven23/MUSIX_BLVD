import React, { Component } from 'react';
import {View, Text, StyleSheet,  Dimensions,} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , List, ListItem, Accordion} from 'native-base'
import { StackNavigator, DrawerNavigator, NavigationActions, StackActions } from 'react-navigation';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

const screen = Dimensions.get('window');

export default class DashboardScreen extends Component {
    render() {
      return (
        <Container>
          <Header style={{backgroundColor:'#000000'}}>
            <Left>
            <Button onPress={this.openDrawer} transparent>
              <IconFeather name='menu' size={26} color={'white'} />
            </Button>
            </Left>
            <Body>
              <Title style={{color:'white'}}>Dashboard</Title>
            </Body>
            <Right>
            </Right>
          </Header>

        <Content style={styles.wrapper}>
          <View style={styles.container}>

            <Text style={styles.helloLabel}>Hello USERNAME,</Text>

            <View style={styles.callingCard}>
            <View style={{position:'absolute', width:screen.width, height:120,  backgroundColor:'#00A79D', borderTopLeftRadius:20, top:0, borderTopRightRadius:20, justifyContent: 'center',
            alignItems: 'center',}}>
              <Text>Background Image</Text>
            </View>
              <View style={{position:'absolute', width:100, height:100, borderRadius:50, backgroundColor:'#5AC6CC', left:10, bottom:10,}}>
              </View>
              <Text style={{position:'absolute', left:120, bottom:40, fontSize: 24, fontWeight:'bold',}}>USERNAME</Text>
              <Text style={{position:'absolute', left:120, bottom:23, fontSize: 18, fontWeight:'normal',}}>Title</Text>
              <Text style={{position:'absolute', left:120, bottom:5, fontSize: 18, fontWeight:'normal',}}>Rating</Text>
            </View>

            <Text style={styles.StatisticsLabel}>STATISTICS</Text>

            <View style={styles.line}></View>

              <View style={styles.songsContainer}>
                <Text style={{fontSize: 18, fontWeight:'normal',}}>SONGS</Text>
                <Text style={{fontSize: 32, fontWeight:'bold',}}>22</Text>
              </View>

              <View style={styles.featuredWorkContainer}>
                <Text style={{fontSize: 18, fontWeight:'normal',}}>Featured Work</Text>
                <Text style={{fontSize: 32, fontWeight:'bold',}}>22</Text>
              </View>

              <View style={styles.connectionsContainer}>
                <Text style={{fontSize: 18, fontWeight:'normal',}}>Connections</Text>
                <Text style={{fontSize: 32, fontWeight:'bold',}}>500</Text>
              </View>

              <View style={styles.line2}></View>

              <Text style={styles.InteractionLabel}>INTERACTION</Text>
              <Text onPress={this.edit} style={styles.EditLabel}>EDIT</Text>
              <View style={styles.line3}></View>

          </View>
          <List style={styles.list}>
            <ListItem>
              <Left>
                <Text style={{fontSize: 16, fontWeight:'bold', color:'#00A79D',}}>ARTIST 1 </Text><Text style={{fontSize: 16, fontWeight:'normal', color:'black',}}>tagged </Text><Text style={{fontSize: 16, fontWeight:'bold', color:'#00A79D',}}>PRODUCER </Text><Text style={{fontSize: 16, fontWeight:'normal', color:'black',}}>for Song 1</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={{fontSize: 16, fontWeight:'bold', color:'#00A79D',}}>ARTIST 1 </Text><Text style={{fontSize: 16, fontWeight:'normal', color:'black',}}>tagged </Text><Text style={{fontSize: 16, fontWeight:'bold', color:'#00A79D',}}>WRITER </Text><Text style={{fontSize: 16, fontWeight:'normal', color:'black',}}>for Song 1</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={{fontSize: 16, fontWeight:'bold', color:'#00A79D',}}>ARTIST 1 </Text><Text style={{fontSize: 16, fontWeight:'normal', color:'black',}}>tagged </Text><Text style={{fontSize: 16, fontWeight:'bold', color:'#00A79D',}}>ENGINEER </Text><Text style={{fontSize: 16, fontWeight:'normal', color:'black',}}>for Song 1</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>

        </Container>
      );
    }
    openDrawer =() => {
      this.props.navigation.openDrawer();
    }
    edit =() => {
      this.props.navigation.navigate('EditDashScreen');
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
  helloLabel:{
    position:'absolute',
    fontSize: 26,
    fontWeight:'normal',
    color:'black',
    left:10,
    top:10,
  },
  callingCard:{
    position:'absolute',
    top:55,
    width:screen.width,
    height:190,
    backgroundColor:'white',
    borderRadius:20,
    borderColor:'black',
    borderWidth:2,
  },
  StatisticsLabel:{
    position:'absolute',
    top:265,
    fontSize: 26,
    fontWeight:'bold',
    color:'black',
    left:20
  },
  songsContainer:{
    position:'absolute',
    top:300,
    width:screen.width/3,
    height:60,
    backgroundColor:'white',
    left:0,
    alignItems: 'center',
  },
  featuredWorkContainer:{
    position:'absolute',
    top:300,
    width:screen.width/3,
    height:60,
    backgroundColor:'white',
    alignItems: 'center',
  },
  connectionsContainer:{
    position:'absolute',
    top:300,
    width:screen.width/3,
    height:60,
    backgroundColor:'white',
    right:0,
    alignItems: 'center',
  },
  line:{
    position:'absolute',
    top:297,
    width:screen.width,
    height:2,
    backgroundColor:'white',
  },
  line2:{
    position:'absolute',
    top:360,
    width:screen.width,
    height:2,
    backgroundColor:'grey',
  },
  InteractionLabel:{
    position:'absolute',
    top:365,
    fontSize: 26,
    fontWeight:'bold',
    color:'black',
    left:20
  },
  line3:{
    position:'absolute',
    top:400,
    width:screen.width,
    height:2,
    backgroundColor:'white',
  },
  EditLabel:{
    position:'absolute',
    top:375,
    fontSize: 16,
    fontWeight:'bold',
    color:'#5AC6CC',
    right:20
  },
  list:{
    position:'absolute',
    top:400,
    width:screen.width,
    height:300,
    backgroundColor:'white',
  },

})
