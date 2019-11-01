import { createAppContainer, createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import Mytasks from './Mytask';
import Profile from './Profile';

let TaskStack = createStackNavigator({Mytasks});
let ProfileStack = createStackNavigator({Profile});

const Navigation=createAppContainer(createBottomTabNavigator({
  ProfileStack,
  TaskStack
 
}));

export default Navigation