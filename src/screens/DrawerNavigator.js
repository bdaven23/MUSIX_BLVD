import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';
import ProjectsScreen from './ProjectsScreen';
import FindScreen from './FindScreen';
import ConnectionsScreen from './ConnectionsScreen';
import SettingsScreen from './SettingsScreen';


const AppDrawerNavigator = new DrawerNavigator({
    Dashboard:{ screen: DashboardScreen  },
    Profile: { screen: ProfileScreen },
    Projects: { screen: ProjectsScreen },
    Explore: { screen: FindScreen },
    Connections: { screen: ConnectionsScreen },
    Settings: { screen: SettingsScreen },
})




export default AppDrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
