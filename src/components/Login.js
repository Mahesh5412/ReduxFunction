
import React, {useState} from 'react';
import {
  View,
  Text,TextInput,TouchableOpacity
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import {useDispatch,useSelector} from 'react-redux';
import loginAction from '../actions';
import store from '../store';


const Login = () => {

const [ state,setState ] = useState({
    value: "",
    username: "",
    password: "",
    corpcode:""
});

const dispatcher = useDispatch();

store.subscribe(() =>{
  console.log("after dispatch"+JSON.stringify(store.getState().login.state.value))

 });

 const temp = useSelector(state=> state.username);
 console.log(temp);

function log_in(){

   dispatcher(loginAction(state));

   fetch('http://76.184.232.31/ptmstesting/reactlogin.php',
  //fetch('http://115.98.3.215:90/ptmsreact/reactlogin.php',
  {
  method:'POST',
  Headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
   body:JSON.stringify({
     username:state.username,
     password:state.password,
     utype:state.value,
     crop:state.corpcode
  })
  }).then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    
  }).catch((error) => {
    console.log(error);
  });

}

  return (
    <View style={{flex:1}}>
    <TextInput autoCapitalize="none" keyboardType="email-address" style={{marginTop:200,marginHorizontal:40,height:40}} 
    placeholder="Enter email"  onChangeText={value=>setState({...state,username:value})}/>
    <TextInput autoCapitalize="none" secureTextEntry style={{marginTop:20,marginHorizontal:40,height:40}} 
    placeholder="Enter password"  onChangeText={value=>setState({...state,password:value})}/>
    <TextInput autoCapitalize="none" keyboardType="email-address" style={{marginTop:12,marginHorizontal:40,height:40}} 
    placeholder="Crop Code" onChangeText={value=>setState({...state,corpcode:value})} />
    <RadioButton.Group
        onValueChange={val => setState({...state,value:val})}
        value={state.value}>
        <View>
          <Text>admin</Text>
          <RadioButton value="admin" />
        </View>
        <View>
          <Text>user</Text>
          <RadioButton value="user" />
        </View>
      </RadioButton.Group>
    <TouchableOpacity onPress={log_in}>
      <Text style={{marginTop:20,color:'black',textAlign:'center'}} >
        Login
      </Text>
    </TouchableOpacity>
  </View>
  );
};

// const styles = StyleSheet.create({
 
// });

export default Login;
