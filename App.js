/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/';
import Login from './src/components/Login';
import Navigation from './src/components/Splash';
import Initial1 from './src/components/Initial1';
import StackExample from './src/components/StackExample';


export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
       <Initial1/>
      </Provider>
    )
  }
}
