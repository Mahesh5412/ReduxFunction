import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
import store from '../store';

const Profile = () => {

    navigationOptions = {
        tabBarLabel: 'PROFILE',
        header:null,
        headerMode:'none'
      };

store.subscribe(() =>{
  // console.log("utype"+JSON.stringify(store.getState().login.state.value))
  console.log(store.getState().reducer.login.state.value)
  console.log(store.getState().reducer.login.state.username)
//alert("HII");
//console.log(hii);
 });
 alert("HII");
 console.log("hii");

return(

    <View style={{flex:1}}>

    <TouchableOpacity>
       <Text style={{marginTop:20,color:'black',textAlign:'center'}} >
         PROFILE
       </Text>
     </TouchableOpacity>
     <View style={{heights:'30%',}}></View>
<View style={{justifyContent:'center',alignItems:'center'}}>
     <Text>{store.getState().reducer.login.state.username}</Text>

     </View>
     </View>

)

}

export default Profile