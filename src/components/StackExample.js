import React from 'react';
import { createAppContainer, createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

import {connect} from 'react-redux';
import Mytasks from './Mytask';
import Profile from './Profile';


let TaskStack = createStackNavigator(
  {
    Mytasks
  },
    {
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
    }
  );
let ProfileStack = createStackNavigator(
  {
  Profile
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }

);

const Navigation=createBottomTabNavigator({
  ProfileStack,
  TaskStack
});

let NavigationScreenContainer = connect(state => ({ count: state.reducer }))(Navigation);
let HomeScreenContainer = connect(state => ({ count: state.reducer }))(HomeScreen);

const RootStack = createStackNavigator(
    {
      //Home: HomeScreen,
      Details: { screen: NavigationScreenContainer },
      Home: { screen: HomeScreenContainer },
    }, 
    {
      initialRouteName: 'Home',
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  

  export default AppContainer