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

export default class ProfileScreen extends Component {
  _renderItem = (data, i) => (
    <View style={[{ backgroundColor: data }, styles.item]} key={i} />
  );

  _renderPlaceholder = i => <View onPress={this.openProject} style={styles.item} key={i} />;
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
              <Title style={{color:'white'}}>Profile</Title>
            </Body>
            <Right>
            </Right>
            <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
          </Header>

          <ScrollView>
        <Content style={styles.wrapper}>
          <View style={styles.container}>


            <View style={{position:'relative', height:200, width:screen.width, backgroundColor:'#00A79D', top :0, justifyContent: 'center',
            alignItems: 'center',}}>
              <Text style={{color:'white'}}>BANNER IMAGE</Text>
            </View>

            <View onPress={this.openProject} style={{position:'relative', height:100, width:100, backgroundColor:'#5AC6CC', top :-50, justifyContent: 'center',
            alignItems: 'center', borderRadius:50,}}>
              <Text style={{color:'white'}}>Profile IMAGE</Text>
            </View>

            <Text style={{position:'relative', top:-40, fontSize: 26, fontWeight:'bold', color:'black',}}>USERNAME</Text>
            <Text style={{position:'relative', top:-40, fontSize: 16, fontWeight:'normal', color:'black',}}>Title</Text>
            <Text style={{position:'relative', top:-40, fontSize: 16, fontWeight:'normal', color:'black',}}>Artistry</Text>
            <Text style={{position:'relative', top:-40, fontSize: 16, fontWeight:'normal', color:'black',}}>City, State</Text>
            <Text style={{position:'relative', top:-40, fontSize: 16, fontWeight:'normal', color:'black',}}>www.linkforartist.com</Text>

            <View style={{flex: 1, flexDirection: 'row'}}>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white',  }}></View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', }}>
              <Image source={require('./images/Spotify-Logo.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', }}>
              <Image source={require('./images/apple-music-logo.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', }}>
              <Image source={require('./images/Pandora-logo.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', }}>
              <Image source={require('./images/amazon-transparent-logo-a.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white',  }}>
              <Image source={require('./images/google-play-logo.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white',  }}></View>

            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>

            <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:0, left:0}}></View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:0,}}>
                <Image source={require('./images/rhapsody_logo.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:0,}}>
                <Image source={require('./images/Tidal_logo.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:0, }}>
                <Image source={require('./images/Deezer-Logo.png')}/>
              </View>


              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:0, }}>
                <Image source={require('./images/youtube.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:0, }}>
                <Image source={require('./images/xbox_logo.png')}/>
              </View>

              <View style={{position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:0, }}></View>

            </View>

            <Text onPress={this.openProject} style={{top:0, fontSize: 26, fontWeight:'bold', color:'black',}}>PROJECTS</Text>

            <View style={{position:'relative', width:screen.width, backgroundColor:'grey', top: 0,}}>
            <Grid
                onPress={this.openProject}
                style={styles.list}
                renderItem={this._renderItem}
                renderPlaceholder={this._renderPlaceholder}
                data={['black', 'white', 'red', 'green', 'blue', 'purple']}
                itemsPerRow={3}
              />
            </View>




          </View>
        </Content>
        </ScrollView>

        </Container>
      );
    }
    openDrawer =() => {
      this.props.navigation.openDrawer();
    }
    openProject =() => {
      this.props.navigation.navigate('ProjectScreen');
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
  item: {
    flex: 1,
    height:screen.width/3,
    margin: 1,
  },
  list: {
    flex: 1,
  },

})
