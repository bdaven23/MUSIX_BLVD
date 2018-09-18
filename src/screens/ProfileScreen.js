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

const pushAction = StackActions.push({
  routeName:'FoundProjectScreen',
})

export default class ProfileScreen extends Component {
  _renderItem = (data, i) => (
    <TouchableOpacity onPress={this.openProject} style={[{ backgroundColor: data }, styles.item]} key={i} />
  );

  _renderPlaceholder = i => <TouchableOpacity onPress={this.openProject} style={styles.item} key={i} />;


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
              <Title style={{color:'white'}}>My Profile</Title>
            </Body>
            <Right>
            </Right>
            <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
          </Header>

          <ScrollView>
        <Content style={styles.wrapper}>
          <View style={styles.container}>


            <View style={styles.bannerImageView}>
              <Image source={require('./images/TEMPLATE_FOR_MISIX_BLVD-01-04-04.png')}/>
            </View>

            <View>
              <Image style={styles.profileImageView} source={require('./images/TEMPLATE_FOR_MISIX_BLVD-01-08.png')}
              />
            </View>


            <View style={styles.onlineIcon}></View>
            <Text style={styles.onlineLabel}>Online</Text>

            <Text style={styles.usernameLabel}>@USERNAME LABEL</Text>

            <Text style={styles.titleLabel}>TITLE LABEL</Text>

            <View style={{position:'absolute', top:310, width:screen.width, height:80, backgroundColor:'#ffffff', justifyContent:'center', }}>
              <TouchableOpacity style={styles.addConnectionBtn}>
                <View style={{position:'absolute', left:10, width:20, height:20, backgroundColor:'white', top:10, }}>
                  <IconFeather name='plus' color={'#5AC6CC'} size={20}/>
                </View>
                <Text style={styles.addConnectionLabel}>ADD CONNECTION</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.directMessageBtn}>
              <Text style={styles.directMessageLabel}>DM</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.moreActionsBtn}>
              <Text style={styles.moreActionsLabel}>More</Text>
              </TouchableOpacity>


            </View>

            <View style={{position:'relative', top:80, height:230, width:screen.width,
             }}>
               <View style={styles.emailIcon}>
               <Image style={{width:20, height:20, borderRadius:0,}} source={require('./images/close-envelope.png')}
              />
               </View>

               <View style={styles.locationIcon}>
               <Image style={{width:20, height:20, borderRadius:0,}} source={require('./images/placeholder.png')}
              />
              </View>

               <View style={styles.linkIcon}>
               <Image style={{width:20, height:20, borderRadius:0,}} source={require('./images/internet.png')}
              />
              </View>

               <View style={styles.descriptionIcon}>
               <Image style={{width:20, height:20, borderRadius:0,}} source={require('./images/three-dots-more-indicator.png')}
              />
              </View>


             <Text style={styles.emailAddressLabel}>EMAIL LABEL</Text>

             <Text style={styles.locationLabel}>LOCATION LABEL</Text>

             <Text style={styles.linkLabel}>LINK LABEL</Text>


             <Text style={styles.descriptionLabel}>DESCRIPTION</Text>

             <View style={styles.descriptionContent}>
              <Text style={{ color:'grey',}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum mi nec vulputate pellentesque. Phasellus aliquet orci ac lacus consequat condimentum. Duis posuere mattis consequat. Proin tincidunt tincidunt nisi nec efficitur.</Text>
             </View>

            </View>

            <Text style={styles.recentFeaturesLabel}>RECENT FEATURES</Text>

            <TouchableOpacity style={{position:'absolute', top:770, right:5, height:30, width:80,
             backgroundColor:'white', zIndex:999, alignItems:'center',}}>
              <Text style={styles.seeAllLabel}>See All</Text>
            </TouchableOpacity>

            <View>

            <ScrollView horizontal={true} style={styles.scrollView}>

              <TouchableOpacity
              onPress={this.featuresPush}
              style={{backgroundColor:'white', width:120, height:180, position:'absolute', top:0, left:10, alignItems:'center' }}>
                <Image style={styles.recentsImage} source={require('./images/TEMPLATE_FOR_MISIX_BLVD-01-08.png')}/>
                <Text style={{position:'absolute', bottom:20,}}>Song Name</Text>
                <Text style={{position:'absolute', bottom:0,}}>Artist</Text>
              </TouchableOpacity>
            </ScrollView>
             </View>

            <Text style={styles.platformsLabel}>PLATFORMS</Text>

            <View style={{flex: 1, flexDirection: 'row'}}>

              <View style={styles.platform_margain}></View>

              <TouchableOpacity style={styles.platform_View}
              onPress={this.alert}>
              <Image source={require('./images/Spotify-Logo.png')}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.platform_View}
              onPress={this.alert}>
              <Image source={require('./images/apple-music-logo.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity style={styles.platform_View}>
              <Image source={require('./images/Pandora-logo.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity style={styles.platform_View}>
              <Image source={require('./images/amazon-transparent-logo-a.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity style={styles.platform_View}>
              <Image source={require('./images/google-play-logo.png')}
              />
              </TouchableOpacity>

              <View style={styles.platform_margain}></View>

            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>

            <View style={styles.platform_margain}></View>

              <TouchableOpacity style={styles.platform_View}>
                <Image source={require('./images/rhapsody_logo.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.platform_View}>
                <Image source={require('./images/Tidal_logo.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.platform_View}>
                <Image source={require('./images/Deezer-Logo.png')}
                />
              </TouchableOpacity>


              <TouchableOpacity style={styles.platform_View}>
                <Image source={require('./images/youtube.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.platform_View}>
                <Image source={require('./images/xbox_logo.png')}
                />
              </TouchableOpacity>

              <View style={styles.platform_margain}></View>

            </View>

            <Text style={styles.projectsLabel}>PROJECTS</Text>

            <View
            style={{position:'relative', width:screen.width, backgroundColor:'white', top: 70, height:580}}>
            <Grid

                onPress={this.openProject}
                style={styles.list}
                renderItem={this._renderItem}
                renderPlaceholder={this._renderPlaceholder}
                data={['black', 'white', 'red', 'green', 'blue', 'purple','orange','pink','yellow', 'cyan']}
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
    alert =() =>{
      alert("BUTTON PRESSED")
    }
    featuresPush=()=>{
      this.props.navigation.dispatch(pushAction);
    }

  }


const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    flex:1,
  },
  item: {
    flex: 1, height:screen.width/3, margin: 1,
  },
  list: {
    flex: 1,
  },
  bannerImageView:{
    position:'relative', height:200, width:screen.width, backgroundColor:'#00A79D', top:0, justifyContent: 'center', alignItems: 'center',
  },
  profileImageView:{
    position:'relative', height:100, width:100, backgroundColor:'#5AC6CC', top:-50, justifyContent: 'center', alignItems: 'center', borderRadius:50, borderColor:'white', borderWidth:5, left: 10
  },
  onlineIcon:{
    position:'absolute', top:210, left:125, backgroundColor:'green', width:20, height:20, borderRadius:10,
  },
  onlineLabel:{
    position:'absolute', top:210, left:150, fontSize: 16, fontWeight:'bold', color:'green',
  },
  usernameLabel:{
    position:'absolute', top:260, alignSelf:'center', fontSize: 26, fontWeight:'bold', color:'black',
  },
  titleLabel:{
    position:'absolute', top:290, alignSelf:'center', fontSize: 16, fontWeight:'normal', color:'black',
  },
  emailIcon:{
    position:'absolute', top:10, left:10, backgroundColor:'white', width:20, height:20, borderRadius:0,
  },
  emailAddressLabel:{
    position:'relative', top:10, fontSize: 16, fontWeight:'normal', color:'black', left: 35

  },
  locationIcon:{
    position:'absolute', top:40, left:10, backgroundColor:'white', width:20, height:20, borderRadius:0,
  },
  locationLabel:{
    position:'relative', top:20, fontSize: 16, fontWeight:'normal', color:'black', left: 35

  },
  linkIcon:{
    position:'absolute', top:70, left:10, backgroundColor:'white', width:20, height:20, borderRadius:0,
  },
  linkLabel:{
    position:'relative', top:30, fontSize: 16, fontWeight:'normal', color:'black', left: 35,
  },
  descriptionIcon:{
    position:'absolute', top:100, left:10, backgroundColor:'white', width:20, height:20, borderRadius:0,
  },
  descriptionLabel:{
    position:'relative', top:40, fontSize: 16, fontWeight:'normal', color:'black', left: 35,
  },
  descriptionContent:{
    position:'relative', width:screen.width-30, height:100, backgroundColor:'white', left: 20, top:50
  },
  recentFeaturesLabel:{
    position:'absolute', top:600, alignSelf:'center', fontSize: 26, fontWeight:'bold', color:'black', zIndex:1000,
  },
  scrollView:{
    position:'relative', height:180, paddingLeft:10, top:70, backgroundColor:'white',
  },
  recentsImage:{
    position:'absolute', top:35, height:100, width:100, borderRadius:5, paddingLeft:5, borderColor:'black', left:10, borderWidth:5,
  },
  seeAllLabel:{
    fontSize: 18, fontWeight:'bold', color:'grey',

  },
  platformsLabel:{
    top:70, fontSize: 26, alignSelf:'center', fontWeight:'bold', color:'black',
  },
  platform_margain:{
    position:'relative', height:50, top:70, width:screen.width/7, backgroundColor:'white',
  },
  platform_View:{
    position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:70,
  },
  projectsLabel:{
    top:70, alignSelf:'center', fontSize: 26, fontWeight:'bold', color:'black',
  },
  addConnectionBtn:{
    position:'absolute', top:15, left:15, width:(screen.width /2)-20, height: 45, backgroundColor:'white', borderRadius:30, borderColor:'#5AC6CC', borderWidth:3, justifyContent:'center',

  },
  addConnectionLabel:{
    color:'#5AC6CC', fontWeight:'bold', fontSize:12, left: 32,
  },
  directMessageBtn:{
    position:'absolute', top:15, left:(screen.width /2)+10, width:(screen.width /4)-15, height: 45, backgroundColor:'white', borderRadius:30, borderColor:'#5AC6CC', borderWidth:3, justifyContent:'center', alignItems:'center',
  },
  directMessageLabel:{
    color:'#5AC6CC', fontWeight:'bold', fontSize:14,
 },
  moreActionsBtn:{
    position:'absolute', top:15, left:(screen.width /2)+ (screen.width /4)+5, width:(screen.width /4)-15, height: 45, backgroundColor:'white', borderRadius:30, borderColor:'#5AC6CC', borderWidth:3,
    justifyContent:'center', alignItems:'center',
},
  moreActionsLabel:{
    color:'#5AC6CC', fontWeight:'bold', fontSize:14,
  }
})
