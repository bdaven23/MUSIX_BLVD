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

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

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
            <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
          </Header>

          <ScrollView>
         <Content style={styles.wrapper}>
          <View style={styles.container}>



          <View style={styles.callingCard}>

            <View style={{position:'relative', width:screen.width-20, height:120,  backgroundColor:'#00A79D', borderTopLeftRadius:0, top:0, borderTopRightRadius:0, justifyContent: 'center',
            alignItems: 'center',}}>

              <Image style={{position:'relative', width:screen.width-20, height:120, top:0, justifyContent: 'center',
              alignItems: 'center',}} source={require('./images/TEMPLATE_FOR_MISIX_BLVD-01-04-04.png')}
             />

            </View>

              <View>

              <Image style={{position:'relative', width:100, height:100, borderRadius:50, backgroundColor:'#5AC6CC', left:10, bottom:60, borderColor:'white', borderWidth:5,}} source={require('./images/TEMPLATE_FOR_MISIX_BLVD-01-08.png')}/>

              </View>

              <Text style={{position:'absolute', left:120, top:125, fontSize: 24, fontWeight:'bold', color:'black'}}>@USERNAME</Text>

              <Text style={{position:'absolute', left:120, top:155, fontSize: 18, fontWeight:'normal', color:'black'}}>TITLE</Text>

              <Text style={{position:'absolute', left:10, bottom:35, fontSize: 18, fontWeight:'normal',}}>City, State</Text>

              <View style={{position:'absolute', left:10, bottom:7, width:18, height:18, backgroundColor:'green', borderRadius:9, }}></View>
              <Text style={{position:'absolute', left:32, bottom:5, fontSize: 18, fontWeight:'normal', color:'green',}}>Online</Text>

              <Text onPress={this.edit} style={styles.EditLabel}>EDIT</Text>

          </View>

            <View style={{position:'relative', width:screen.width, backgroundColor:'#5AC6CC', top:0, height:50, justifyContent: 'center', alignItems: 'center', borderBottomWidth :3, borderBottomColor: '#000'}}>
              <Text style={styles.StatisticsLabel}>Statistics</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.songsContainer}>
                <Text style={{fontSize: 18, fontWeight:'normal',}}>Songs</Text>
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
            </View>

            <View style={{position:'relative', width:screen.width, backgroundColor:'#5AC6CC', top:0, height:50, justifyContent: 'center', alignItems: 'center', borderBottomWidth:3, borderBottomColor: '#000'}}>
              <Text style={styles.ActivityLabel}>Activity</Text>
            </View>

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
          </List>
        </Content>

          </ScrollView>
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
  },
  callingCard:{
    position:'relative', top:0, width:screen.width, height:255, backgroundColor:'white', borderRadius:0, borderColor:'white', borderWidth:10,
  },
  StatisticsLabel:{
    position:'relative', top:0, fontSize: 26, fontWeight:'bold', color:'white',
  },
  songsContainer:{
    position:'relative', top:0, width:screen.width/3, height:60, backgroundColor:'white', left:0, alignItems: 'center',
  },
  featuredWorkContainer:{
    position:'relative', top:0, width:screen.width/3, height:60, backgroundColor:'white', alignItems: 'center',
  },
  connectionsContainer:{
    position:'relative', top:0, width:screen.width/3, height:60, backgroundColor:'white', right:0, alignItems: 'center',
  },
  ActivityLabel:{
    position:'absolute', fontSize: 26, fontWeight:'bold', color:'white',
  },
  EditLabel:{
    position:'absolute', fontSize: 16, fontWeight:'bold', color:'black', right:10, bottom:10,
  },
  list:{
    position:'relative', top:0, width:screen.width, backgroundColor:'white',
  },

})
