import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { StackNavigator, DrawerNavigator, createStackNavigator } from 'react-navigation';

import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';
import FoundProfileScreen from './FoundProfileScreen';
import ProjectsScreen from './ProjectsScreen';
import FindScreen from './FindScreen';
import ConnectionsScreen from './ConnectionsScreen';
import SettingsScreen from './SettingsScreen';
import EditDashScreen from './EditDashScreen';
import InteractionModalScreen from './InteractionModalScreen';
import ProjectScreen from './ProjectScreen';
import Login from './Login';
import SignUp from './SignUp';


import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';


const ProfileStackNavigator = StackNavigator({
  Profile:{ screen: ProfileScreen},
  ProjectScreen:{ screen: ProjectScreen}
},{
  headerMode: 'none',

});

const DashboardStackNavigator = StackNavigator({
  Dashboard:{ screen: DashboardScreen},
  EditDashScreen:{screen: EditDashScreen}
},{
  headerMode: 'none',

});

const SettingsStackNavigator = StackNavigator({
  Settings:{ screen: SettingsScreen},
  Login:{screen: Login},
},{
  headerMode: 'none',

});

const FindStackNavigator = StackNavigator({
  Explore:{ screen: FindScreen},
  FoundProfile:{screen: FoundProfileScreen},


},{
  headerMode: 'none',
});



const AppDrawerNavigator = DrawerNavigator ({
    Dashboard : {screen:DashboardStackNavigator },
    Profile: { screen: ProfileStackNavigator },
    Projects: { screen: ProjectsScreen },
    Explore: { screen: FindStackNavigator },
    Connections: { screen: ConnectionsScreen },
    Settings: { screen: SettingsStackNavigator },
})

export default AppDrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
